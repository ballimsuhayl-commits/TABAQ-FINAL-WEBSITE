/* REV239.6 — public catalogue authority and fail-closed optional release feed. */
'use strict';
const {publicCatalog}=require('./catalog');
const STATES=new Set(['PRELAUNCH','COUNTDOWN','OPEN','SOLD_OUT','CLOSED','ARCHIVED','ENCORE']);
function commerceRecord(now=Date.now(),raw=process.env.TABAQ_LAYLA_PUBLIC_DROP_JSON){
 const products=publicCatalog().filter(x=>x.active).map(x=>({id:x.id,price:x.price,usd_price:x.usd_price,active:true,layers:[...x.layers],available:false}));
 if(!raw)return {state:'CATALOGUE',asOf:new Date(now).toISOString(),verifiedDrop:false,accessEnabled:true,products};
 let x;try{x=typeof raw==='string'?JSON.parse(raw):raw;}catch(_){return {state:'UNKNOWN',products:[]};}
 const at=Date.parse(x?.asOf),limit=x?.freshnessSeconds;
 if(!STATES.has(x?.state)||!Number.isFinite(at)||!Number.isFinite(limit)||limit<1||limit>86400||at>now+60000)return {state:'UNKNOWN',products:[]};
 if(now-at>limit*1000)return {state:'STALE',products:[]};
 const launch=Date.parse(x.launchAt);const launchAt=Number.isFinite(launch)?new Date(launch).toISOString():null;
 const approvedText=s=>typeof s==="string"&&s.trim().length>0&&s.length<=1000&&!/[<>]/.test(s);
 const rituals=Array.isArray(x.rituals)?x.rituals.filter(r=>r&&r.approvalStatus==="APPROVED"&&r.combinedUseSafetyVerified===true&&r.olfactoryTestVerified===true&&products.some(p=>p.id===r.productId)&&approvedText(r.id)&&approvedText(r.publicInstructions)).slice(0,12).map(r=>({id:r.id,productId:r.productId,publicInstructions:r.publicInstructions,approved:true})):[];
 const provenance=Array.isArray(x.provenance)?x.provenance.filter(r=>r&&r.approvalStatus==="APPROVED"&&["supplier","origin","inspiration","manufacture"].includes(r.type)&&approvedText(r.publicStatement)).slice(0,12).map(r=>({type:r.type,statement:r.publicStatement,approved:true})):[];
 return {state:x.state,asOf:new Date(at).toISOString(),verifiedDrop:true,launchAt,accessEnabled:x.accessEnabled===true,rituals,provenance,products:products.map(p=>({...p,available:x.availability?.[p.id]===true}))};
}
module.exports={commerceRecord};