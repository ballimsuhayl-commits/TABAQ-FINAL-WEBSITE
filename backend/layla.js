/* REV239.2 Layla — free-model-only Vercel AI Gateway, with shared local library. */
'use strict';
const {SYSTEM,FACTS,KB,retrieve,localReply}=require('../assets/tabaq-local-guide.js');
const MODELS=['nvidia/nemotron-3.5-lightning-free','reflection/beam-free'];
const BASE='https://ai-gateway.vercel.sh/v1';
const LIMIT=20,WINDOW=60000;const buckets=new Map();let pricing={expires:0,ids:[]},pricingPromise=null;
function response(res,status,body){res.statusCode=status;res.setHeader('Content-Type','application/json; charset=utf-8');res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');res.end(JSON.stringify(body));}
function auth(req){return process.env.AI_GATEWAY_API_KEY||process.env.VERCEL_OIDC_TOKEN||(process.env.VERCEL==='1'?String(req.headers['x-vercel-oidc-token']||''):'');}
function validZero(x){return x!==null&&x!==undefined&&x!==''&&Number(x)===0;}
async function zeroModels(token){
 if(pricing.expires>Date.now())return pricing.ids;
 if(pricingPromise)return pricingPromise;
 pricingPromise=(async()=>{try{const r=await fetch(BASE+'/models',{headers:{Authorization:'Bearer '+token},signal:AbortSignal.timeout(4500)});if(!r.ok)return[];const j=await r.json();const ids=MODELS.filter(id=>{const m=j.data?.find(x=>x.id===id);const p=m?.pricing;return p&&validZero(p.prompt??p.input)&&validZero(p.completion??p.output);});pricing={ids,expires:Date.now()+300000};return ids;}catch(_){return[];}finally{pricingPromise=null;}})();return pricingPromise;
}
async function read(req){if(req.body&&typeof req.body==='object'&&!Buffer.isBuffer(req.body))return req.body;let s=typeof req.body==='string'?req.body:'';if(!s){for await(const b of req){s+=b;if(Buffer.byteLength(s)>16000)throw Error('too large');}}if(Buffer.byteLength(s)>16000)throw Error('too large');return JSON.parse(s);}
function permitted(req){const now=Date.now();for(const [k,v]of buckets){if(v.until<now)buckets.delete(k);}if(buckets.size>10000)return false;const ip=String(req.headers['x-vercel-forwarded-for']||req.socket?.remoteAddress||'unknown').split(',')[0].trim();let b=buckets.get(ip);if(!b){b={count:0,until:now+WINDOW};buckets.set(ip,b);}return ++b.count<=LIMIT;}
async function handle(req,res){
 const token=auth(req);if(req.method==='GET')return response(res,200,{ok:true,concierge:'Layla',revision:'239.2',cloudConfigured:!!token,freeModels:MODELS,knowledgeEntries:KB.length,paidFallback:false});
 if(req.method!=='POST')return response(res,405,{error:'method_not_allowed'});
 const origin=req.headers.origin;let host='';try{host=new URL(origin||'https://'+req.headers.host).hostname;}catch(_){}if(origin&&host!==String(req.headers.host||'').split(':')[0])return response(res,403,{error:'origin_not_allowed'});
 if(!permitted(req))return response(res,429,{error:'Please try again in a minute.'});
 let j;try{j=await read(req);}catch(_){return response(res,400,{error:'Invalid request'});}
 if(!j||typeof j.message!=='string'||!j.message.trim()||j.message.length>1000)return response(res,400,{error:'Message must be 1–1000 characters.'});
 const question=j.message.trim();const history=(Array.isArray(j.history)?j.history:[]).filter(x=>x&&['user','assistant'].includes(x.role)&&typeof x.content==='string').slice(-8).map(x=>({role:x.role,content:x.content.slice(0,1500)}));
 const fallback=localReply(question,history);
 if(!token)return response(res,200,{...fallback,mode:'library'});
 const models=await zeroModels(token);if(!models.length)return response(res,200,{...fallback,mode:'library'});
 const refs=retrieve(question+' '+history.filter(x=>x.role==='user').slice(-2).map(x=>x.content).join(' '),8).map(x=>x[2]).join('\n');
 const messages=[{role:'system',content:SYSTEM+'\nVERIFIED TABAQ FACTS:\n'+FACTS+'\nREFERENCE EXCERPTS:\n'+refs},...history,{role:'user',content:question}];
 for(const model of models){try{const r=await fetch(BASE+'/chat/completions',{method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify({model,messages,max_tokens:650,temperature:0.65}),signal:AbortSignal.timeout(10000)});if(!r.ok)continue;const data=await r.json();const reply=data.choices?.[0]?.message?.content;if(typeof reply==='string'&&reply.trim())return response(res,200,{reply:reply.trim().slice(0,5000),mode:'cloud',model});}catch(_){}}
 return response(res,200,{...fallback,mode:'library'});
}
module.exports={handle};
