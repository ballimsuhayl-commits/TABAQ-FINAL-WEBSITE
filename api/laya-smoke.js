'use strict';
module.exports=async function(req,res){
  res.setHeader('Content-Type','application/json; charset=utf-8');
  res.setHeader('Cache-Control','no-store');
  const key=process.env.VERCEL_OIDC_TOKEN||process.env.AI_GATEWAY_API_KEY||'';
  if(!key){res.statusCode=503;return res.end(JSON.stringify({ok:false,stage:'auth',message:'no gateway token'}));}
  try{
    const r=await fetch('https://ai-gateway.vercel.sh/v1/chat/completions',{method:'POST',headers:{Authorization:'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({model:process.env.TABAQ_AI_MODEL||'google/gemini-3.6-flash',messages:[{role:'user',content:'Reply with exactly: LAYA AI ONLINE'}],max_tokens:20,temperature:0})});
    const j=await r.json().catch(()=>({}));
    res.statusCode=r.ok?200:r.status;
    return res.end(JSON.stringify({ok:r.ok,status:r.status,model:process.env.TABAQ_AI_MODEL||'google/gemini-3.6-flash',reply:j?.choices?.[0]?.message?.content||null,error:j?.error?.message||j?.message||null}));
  }catch(e){res.statusCode=500;return res.end(JSON.stringify({ok:false,error:e.message}));}
};