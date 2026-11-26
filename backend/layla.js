/* REV239.2 Layla — free-model-only Vercel AI Gateway, with shared local library. */
'use strict';
const {SYSTEM,FACTS,KB,retrieve,localReply,safeCustomerReply,contextualReply,productContext,PRODUCT,salesProfile,salesAnswer,SALES_POLICY,MASTER_POLICY,MASTER_LINKS,masterSensitive,cleanHistory,masterContext,masterPreflight,masterAnswer,LAYLA_VOICE,CULTURAL_POLICY,motionIntent}=require('../assets/tabaq-local-guide.js');
const {commerceRecord}=require('./layla-commerce');
const MASTER_REFERENCE=require('./layla-public-reference.json');
const REF_CHUNKS=MASTER_REFERENCE.text.split(/\n(?=## )/).map(s=>s.trim()).filter(Boolean);
function referenceFor(q){const words=String(q).toLowerCase().match(/[a-z]{4,}/g)||[];return REF_CHUNKS.map(s=>({s,n:[...new Set(words)].filter(w=>s.toLowerCase().includes(w)).length})).filter(x=>x.n>0).sort((a,b)=>b.n-a.n).slice(0,2).map(x=>x.s.slice(0,2200)).join('\n\n');}
/* REV239.17 — server-side Groq-first failover, no browser credential or paid-plan activation. */
const GROQ_MODELS=['openai/gpt-oss-120b','openai/gpt-oss-20b'];
let groqStatus='not-tested';
const MODELS=['nvidia/nemotron-3.5-lightning-free','reflection/beam-free'];
const BASE='https://ai-gateway.vercel.sh/v1';
const LIMIT=20,WINDOW=60000;const buckets=new Map();let pricing={expires:0,ids:[]},pricingPromise=null;let gatewayStatus='not-tested';
function response(res,status,body){res.statusCode=status;res.setHeader('Content-Type','application/json; charset=utf-8');res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');res.end(JSON.stringify(body));}
function auth(req){return process.env.AI_GATEWAY_API_KEY||(process.env.VERCEL==='1'?String(req.headers['x-vercel-oidc-token']||''):'')||process.env.VERCEL_OIDC_TOKEN;}
function validZero(x){return x!==null&&x!==undefined&&x!==''&&Number(x)===0;}
async function zeroModels(token){
 if(pricing.expires>Date.now())return pricing.ids;
 if(pricingPromise)return pricingPromise;
 pricingPromise=(async()=>{try{const r=await fetch(BASE+'/models',{signal:AbortSignal.timeout(1500)});if(!r.ok){gatewayStatus='catalog-http-'+r.status;return[];}const j=await r.json();const ids=MODELS.filter(id=>{const m=j.data?.find(x=>x.id===id);const p=m?.pricing;return p&&validZero(p.prompt??p.input)&&validZero(p.completion??p.output);});pricing={ids,expires:Date.now()+300000};if(!ids.length)gatewayStatus='no-zero-price-model';return ids;}catch(_){gatewayStatus='catalog-timeout';return[];}finally{pricingPromise=null;}})();return pricingPromise;
}
async function read(req){if(req.body&&typeof req.body==='object'&&!Buffer.isBuffer(req.body)){if(Buffer.byteLength(JSON.stringify(req.body))>16000)throw Error('too large');return req.body;}let s=typeof req.body==='string'?req.body:'';if(!s){for await(const b of req){s+=b;if(Buffer.byteLength(s)>16000)throw Error('too large');}}if(Buffer.byteLength(s)>16000)throw Error('too large');return JSON.parse(s);}
function permitted(req){const now=Date.now();for(const [k,v]of buckets){if(v.until<now)buckets.delete(k);}if(buckets.size>10000)return false;const ip=String(req.headers['x-vercel-forwarded-for']||req.socket?.remoteAddress||'unknown').split(',')[0].trim();let b=buckets.get(ip);if(!b){b={count:0,until:now+WINDOW};buckets.set(ip,b);}return ++b.count<=LIMIT;}
/* Model text is not authorization. Only attach browsing links to actual named current kits. */
function recommendationLinks(reply,question,profile,commerce,fallback){
 if(["SOLD_OUT","CLOSED","ARCHIVED","PRELAUNCH","COUNTDOWN","STALE","UNKNOWN"].includes(commerce.state))return {};
 if(!["discover","recommend","evaluate","compare"].includes(profile.stage)&&fallback.stage!=="occasion")return {};
 if(!/\b(recommend|suggest|choose|wear|want|like|prefer|wedding|occasion|gift|kit|show|buy|looking|which|date|dinner|party|interview)\b/i.test(question)&&fallback.stage!=="occasion"&&!fallback.kit)return {};
 const ids=Object.keys(PRODUCT).filter(id=>commerce.products.some(p=>p.id===id&&p.active)&&reply.toLowerCase().includes(PRODUCT[id].name.toLowerCase())).slice(0,2);
 return ids.length===1?{kit:ids[0]}:ids.length===2?{alternatives:ids}:{};
}
/* The occasion planner establishes the factual recommendation before the model writes its natural phrasing. */
function occasionPlan(fallback){
 if(fallback.stage!=="occasion")return null;
 const names=Object.keys(PRODUCT).filter(id=>fallback.reply.toLowerCase().includes(PRODUCT[id].name.toLowerCase()));
 return {names,answer:fallback.reply,needsQuestion:fallback.reply.includes("?")};
}
function groundReply(reply,question,fallback,plan){
 let text=safeCustomerReply(reply,question,"").replace(/\*\*([^*]+)\*\*/g,"$1");
 if(!text)return "";
 if(plan){const names=Object.keys(PRODUCT).filter(id=>text.toLowerCase().includes(PRODUCT[id].name.toLowerCase()));
 if(plan.names.some(id=>!names.includes(id))||names.some(id=>!plan.names.includes(id))||(plan.needsQuestion&&!text.includes("?")))return fallback.reply;
 // Do not allow generated product-specific notes beyond the published descriptors in an occasion response.
 const suspect=/\b(citrus.green|airy woods|vanilla|oud|jasmine|sandalwood|lavender|bergamot|ambergris|patchouli|leather|vetiver|long.last(?:ing|s)|lasts all day|guarantee|guaranteed)\b/i;
 if(suspect.test(text))return fallback.reply;
 }
 return text;
}
async function handle(req,res){
 const token=auth(req);if(req.method==='GET')return response(res,200,{ok:true,concierge:'Layla',revision:'239.17',groqConfigured:!!process.env.GROQ_API_KEY,cloudConfigured:!!token||!!process.env.GROQ_API_KEY,freeModels:MODELS,knowledgeEntries:KB.length,masterReferenceSections:REF_CHUNKS.length,commerceMode:commerceRecord().state,paidFallback:false,groqModels:GROQ_MODELS,groqStatus,gatewayStatus});
 if(req.method!=='POST')return response(res,405,{error:'method_not_allowed'});
 const origin=req.headers.origin;let host='';try{host=new URL(origin||'https://'+req.headers.host).hostname;}catch(_){}if(origin&&host!==String(req.headers.host||'').split(':')[0])return response(res,403,{error:'origin_not_allowed'});
 if(!permitted(req))return response(res,429,{error:'Please try again in a minute.'});
 let j;try{j=await read(req);}catch(_){return response(res,400,{error:'Invalid request'});}
 if(!j||typeof j.message!=='string'||!j.message.trim()||j.message.length>1000)return response(res,400,{error:'Message must be 1–1000 characters.'});
 const question=j.message.trim();const history=cleanHistory(j.history);
 const page=productContext(j.page);const commerce=commerceRecord();const profile=masterContext(question,history,page,commerce);const pre=masterPreflight(question,history,page,commerce);const fallback=masterAnswer(question,history,page,commerce);
 const answer=data=>response(res,200,{...data,motion:motionIntent(question,data,profile)});
 // Deterministic truth, safety, action and privacy gates run before any AI provider.
 if(pre||fallback.locked||masterSensitive(question)||["browse","purchase","objection"].includes(profile.stage))return answer({...(pre||fallback),locked:true,mode:"library"});
 const plan=occasionPlan(fallback);
 const refs=retrieve(question+" "+history.filter(x=>x.role==="user").slice(-2).map(x=>x.content).join(" "),8).filter(x=>x[0]!=="TABAQ").map(x=>x[2]).join("\n");
 const messages=[{role:"system",content:SYSTEM+"\n"+SALES_POLICY+"\n"+MASTER_POLICY+"\n"+LAYLA_VOICE+"\n"+CULTURAL_POLICY+"\nGUIDED RETAIL: Answer the customer first. For a product recommendation use only published scent profiles and the existing verified links. Offer the optional tour if useful. Never claim to navigate or register someone without their choice.\nPRODUCT SCENT PROFILES (descriptive notes, not ingredients): "+JSON.stringify(PRODUCT)+"\nCURRENT SHOPPING CONTEXT (stated preferences only): "+JSON.stringify({...profile,commerce:undefined,...(plan?{selected:null,match:null,stage:"occasion"}:{})})+"\nPUBLIC CATALOGUE (no unverified stock or release claims): "+JSON.stringify(commerce)+"\nCURRENT PRODUCT: "+(plan?"Ignored for new occasion recommendation":PRODUCT[page]?.name||"None")+"\nOCCASION PLAN: "+(plan?JSON.stringify(plan)+" — preserve these recommendation choices and the useful question; phrase naturally. Do not substitute the viewed kit.": "No occasion override")+"\nREFERENCE EXCERPTS:\n"+refs+"\nGENERAL MASTER REFERENCE:\n"+referenceFor(question)},...history,{role:"user",content:question}];
 // Explicit owner-supplied Groq credentials only; no automatic purchase or paid-plan activation.
 const deadline=Date.now()+10500;
 if(process.env.GROQ_API_KEY){
  for(const [index,model] of GROQ_MODELS.entries()){
   const remaining=deadline-Date.now();if(remaining<500)break;
   try{
    const r=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:"Bearer "+process.env.GROQ_API_KEY,"Content-Type":"application/json"},body:JSON.stringify({model,messages,max_completion_tokens:900,reasoning_effort:"low",temperature:0.65}),signal:AbortSignal.timeout(Math.min(remaining,index===0?3800:3200))});
    if(!r.ok){groqStatus="http-"+r.status;if(r.status===401||r.status===403||r.status===429)break;continue;}
    const data=await r.json();const content=data.choices?.[0]?.message?.content;
    if(typeof content!=="string"||!content.trim()){groqStatus="empty-response";continue;}
    const reply=groundReply(content,question,fallback,plan);
    if(reply){groqStatus="connected";return answer({reply,mode:plan&&reply===fallback.reply?"library":"cloud",model,provider:"groq",...recommendationLinks(reply,question,profile,commerce,fallback)});}
    groqStatus="rejected-response";
   }catch(_){groqStatus="unavailable";}
  }
  console.warn("[Layla] Groq fallback:",groqStatus);
 }else groqStatus="not-configured";

 if(!token)return answer({...fallback,mode:'library',gatewayStatus:'no-gateway-credential',groqStatus});
 const models=await zeroModels(token);if(!models.length)return answer({...fallback,mode:'library',gatewayStatus});
 for(const model of models){const remaining=deadline-Date.now();if(remaining<700)break;try{const r=await fetch(BASE+'/chat/completions',{method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify({model,messages,max_tokens:1000,temperature:0.65}),signal:AbortSignal.timeout(Math.min(remaining,models.length>1&&model===models[0]?4400:remaining))});if(!r.ok){gatewayStatus='model-http-'+r.status;continue;}const data=await r.json();const reply=data.choices?.[0]?.message?.content;if(typeof reply==='string'&&reply.trim()){const polished=groundReply(reply,question,fallback,plan);if(polished){gatewayStatus='connected';return answer({reply:polished,mode:'cloud',model,...recommendationLinks(polished,question,profile,commerce,fallback)});}}gatewayStatus='empty-response';}catch(_){gatewayStatus='model-timeout';}}
 return answer({...fallback,mode:'library',gatewayStatus});
}
module.exports={handle};
