'use strict';
// REV239.9 — private durable storage. No email in public files, chat history or AI requests.
const crypto=require('node:crypto');
const prefix='drop-access/v1/';
function configured(){return !!process.env.BLOB_READ_WRITE_TOKEN;}
async function sdk(){return import('@vercel/blob');}
async function save(email,source,dropId,consentVersion){
 const id='wait_'+crypto.createHash('sha256').update(email).digest('hex');
 const record={id,email,source,drop_id:dropId,consent:true,consent_version:consentVersion,last_joined_at:new Date().toISOString()};
 const {put}=await sdk();const result=await put(prefix+id+'.json',JSON.stringify(record),{access:'private',addRandomSuffix:false,allowOverwrite:true,contentType:'application/json'});
 if(!result?.url||!result.url.includes('.private.blob.vercel-storage.com/'))throw Error('Private storage unavailable');
 return record;
}
async function listRecords(){const {list,get}=await sdk();let cursor,rows=[];do{const page=await list({prefix,limit:100,cursor});for(const b of page.blobs){const data=await get(b.url,{access:'private',useCache:false});if(data?.stream)rows.push(await new Response(data.stream).json());}cursor=page.hasMore?page.cursor:undefined;}while(cursor);return rows;}
module.exports={configured,save,listRecords};