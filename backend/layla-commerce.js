/* REV239.6 — public catalogue authority and fail-closed optional release feed. */
'use strict';
const {publicCatalog}=require('./catalog');
const STATES=new Set(['PRELAUNCH','COUNTDOWN','OPEN','SOLD_OUT','CLOSED','ARCHIVED','ENCORE']);
function commerceRecord(now=Date.now(),raw=process.env.TABAQ_LAYLA_PUBLIC_DROP_JSON){
 const products=publicCatalog().filter(x=>x.active).map(x=>({id:x.id,price:x.price,usd_price:x.usd_price,active:true,layers:[...x.layers],available:false}));
 if(!raw)return {state:'CATALOGUE',asOf:new Date(now).toISOString(),verifiedDrop:false,products};
 let x;try{x=typeof raw==='string'?JSON.parse(raw):raw;}catch(_){return {state:'UNKNOWN',products:[]};}
 const at=Date.parse(x?.asOf),limit=x?.freshnessSeconds;
 if(!STATES.has(x?.state)||!Number.isFinite(at)||!Number.isFinite(limit)||limit<1||limit>86400||at>now+60000)return {state:'UNKNOWN',products:[]};
 if(now-at>limit*1000)return {state:'STALE',products:[]};
 const launch=Date.parse(x.launchAt);const launchAt=Number.isFinite(launch)?new Date(launch).toISOString():null;
 return {state:x.state,asOf:new Date(at).toISOString(),verifiedDrop:true,launchAt,products:products.map(p=>({...p,available:x.availability?.[p.id]===true}))};
}
module.exports={commerceRecord};