(function(){
  'use strict';
  if(window.__TABAQ_LOCAL_GUIDE__) return; window.__TABAQ_LOCAL_GUIDE__=true;

  const PRODUCTS={
    'clean-skin':{name:'Clean Skin',mood:'Fresh + clean',profile:'mineral air / pear skin / quiet musk',best:'everyday wear, work, warm days and understated scent'},
    'soft-bloom':{name:'Soft Bloom',mood:'Soft + floral',profile:'petal cream / blush fruit / satin powder',best:'soft floral moods, dates, gifting and polished daytime wear'},
    'amber-haze':{name:'Amber Haze',mood:'Warm + deep',profile:'resin / spice dust / warm woods',best:'dinner, evening wear and a warmer, deeper scent presence'},
    'juice-drift':{name:'Juice Drift',mood:'Bright + social',profile:'citrus peel / guava / clean sweetness',best:'weekends, warm days, social plans and a brighter scent mood'}
  };
  const FACTS=`TABAQ is a fragrance layering brand. Current full-size kits: Clean Skin (fresh + clean; mineral air / pear skin / quiet musk; best for everyday, work, warm days, understated scent), Soft Bloom (soft + floral; petal cream / blush fruit / satin powder; best for dates, gifting, polished daytime wear), Amber Haze (warm + deep; resin / spice dust / warm woods; best for dinners, evenings, stronger presence), Juice Drift (bright + social; citrus peel / guava / clean sweetness; best for weekends, warm days, social plans). Every kit is R1,750 in South Africa and USD 107 international product price before shipping. Each kit contains: 01 Layering Veil 50ml (Lift), 02 Eau de Parfum 30ml (Define), 03 Layering Essence 01 10ml (Soften), 04 Layering Essence 02 10ml (Deepen), plus bonus Scent Balm 5ml for touch-ups. South Africa standard delivery is free on 2 or more kits. One-kit South Africa delivery is quoted before payment. International shipping is individually quoted before payment because cost varies and some destinations may not accept the full kit. TABAQ is pronounced TAH-baq and the brand idea is layer upon layer. Never invent notes, stock, delivery prices, discounts, ingredients, concentrations, legal claims, medical claims or unconfirmed facts.`;

  let session=null, aiState='fallback', preparing=false;
  let shell,panel,messages,input,status,enableBtn,downloadNote;

  function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!=null)n.textContent=text;return n;}
  function addMessage(text,type='bot',note=''){const n=el('div','tabaq-guide-msg '+type,text);if(note){const s=el('small','',note);n.appendChild(s)}messages.appendChild(n);messages.scrollTop=messages.scrollHeight;return n;}
  function setStatus(text,mode=''){status.textContent=text;status.className='tabaq-guide-status'+(mode?' '+mode:'');}

  function build(){
    shell=el('div','tabaq-guide-shell');
    const launcher=el('button','tabaq-guide-launcher');launcher.type='button';launcher.setAttribute('aria-expanded','false');launcher.innerHTML='<i aria-hidden="true"></i><span>ASK TABAQ</span>';
    panel=el('section','tabaq-guide-panel');panel.setAttribute('aria-label','TABAQ Scent Guide');
    const head=el('header','tabaq-guide-head');head.append(el('p','tabaq-guide-kicker','Your scent sidekick'));head.append(el('h2','','TABAQ Scent Guide'));status=el('div','tabaq-guide-status','Instant guide');head.append(status);const close=el('button','tabaq-guide-close','×');close.type='button';close.setAttribute('aria-label','Close TABAQ Scent Guide');head.append(close);
    messages=el('div','tabaq-guide-messages');addMessage('Tell me the mood you want, where you wear fragrance, or what you want to know about layering. I’ll keep it simple.','bot','No perfume degree required.');
    const quick=el('div','tabaq-guide-quick');[['Find my kit','recommend'],['How do I layer?','layer'],['What’s in the box?','contents'],['Delivery?','delivery']].forEach(([label,key])=>{const b=el('button','',label);b.type='button';b.dataset.ask=key;quick.append(b)});
    enableBtn=el('button','tabaq-guide-enable','Enable on-device AI');enableBtn.type='button';
    downloadNote=el('div','tabaq-guide-download','Your browser may need to download its local AI model once. Nothing is sent to TABAQ for AI responses.');
    const form=el('form','tabaq-guide-form');input=el('input');input.type='text';input.placeholder='Ask about scent, layering or delivery…';input.autocomplete='off';input.maxLength=500;const send=el('button','','Send');send.type='submit';form.append(input,send);
    const privacy=el('p','tabaq-guide-privacy','On-device AI is used only when your browser supports it. Otherwise this guide uses TABAQ’s built-in product rules. Your guide messages are not sent to our server.');
    panel.append(head,messages,quick,enableBtn,downloadNote,form,privacy);shell.append(panel,launcher);document.body.append(shell);

    launcher.addEventListener('click',()=>{const open=!shell.classList.contains('is-open');shell.classList.toggle('is-open',open);launcher.setAttribute('aria-expanded',open?'true':'false');if(open){input.focus();prepareLocalAi(false)}});
    close.addEventListener('click',()=>{shell.classList.remove('is-open');launcher.setAttribute('aria-expanded','false');launcher.focus()});
    quick.addEventListener('click',e=>{const b=e.target.closest('[data-ask]');if(!b)return;const prompts={recommend:'Help me choose a TABAQ kit.',layer:'How do I layer a TABAQ kit?',contents:'What is inside a full TABAQ kit?',delivery:'How does TABAQ delivery work?'};handlePrompt(prompts[b.dataset.ask])});
    form.addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim();if(!q)return;input.value='';handlePrompt(q)});
    enableBtn.addEventListener('click',()=>prepareLocalAi(true));
  }

  async function prepareLocalAi(userActivated){
    if(session||preparing||!('LanguageModel' in window)) return;
    preparing=true;
    try{
      const options={expectedInputs:[{type:'text',languages:['en']}],expectedOutputs:[{type:'text',languages:['en']}]};
      const availability=await LanguageModel.availability(options);
      if(availability==='unavailable'){aiState='fallback';setStatus('Instant guide');preparing=false;return;}
      if((availability==='downloadable'||availability==='downloading')&&!userActivated){aiState='download';setStatus('Local AI available','is-download');enableBtn.classList.add('is-visible');downloadNote.classList.add('is-visible');preparing=false;return;}
      setStatus(availability==='available'?'Starting local AI…':'Downloading local AI…','is-download');
      enableBtn.classList.remove('is-visible');downloadNote.classList.add('is-visible');
      session=await LanguageModel.create({
        ...options,
        initialPrompts:[{role:'system',content:`You are the TABAQ Scent Guide on a fragrance ecommerce website. Be warm, concise, specific and never pushy. Answer in 80 words or fewer unless the user asks for detail. Recommend at most two kits. Use only these approved facts: ${FACTS} If information is not in these facts, say it is not confirmed and suggest Contact. Do not invent product notes or shipping costs.`}],
        monitor(m){m.addEventListener('downloadprogress',e=>{const pct=Math.round((Number(e.loaded)||0)*100);setStatus(`Downloading local AI · ${pct}%`,'is-download')})}
      });
      aiState='ai';setStatus('On-device AI','is-ai');downloadNote.classList.remove('is-visible');
      addMessage('On-device AI is ready. Ask naturally — your question stays on this device.','bot');
    }catch(err){console.warn('TABAQ local AI unavailable, using built-in guide.',err);session=null;aiState='fallback';setStatus('Instant guide');enableBtn.classList.remove('is-visible');downloadNote.classList.remove('is-visible');}
    finally{preparing=false;}
  }

  function scoreRecommendation(q){
    const s={'clean-skin':0,'soft-bloom':0,'amber-haze':0,'juice-drift':0};
    const rules={
      'clean-skin':['clean','fresh','work','office','everyday','quiet','subtle','understated','warm day','skin'],
      'soft-bloom':['soft','floral','flower','pretty','polished','date','gift','romantic','powder'],
      'amber-haze':['warm','deep','evening','night','dinner','magnetic','rich','woody','spice','strong','entrance'],
      'juice-drift':['bright','social','weekend','juicy','fruit','fruity','playful','energy','energetic','guava','citrus']
    };
    for(const [id,words] of Object.entries(rules)) for(const w of words) if(q.includes(w)) s[id]+=w.includes(' ')?2:1;
    return Object.entries(s).sort((a,b)=>b[1]-a[1]);
  }
  function fallbackReply(question){
    const q=question.toLowerCase();
    if(/layer|order|wear.*first|how.*use|steps?/.test(q)) return 'Go in this order: 01 Layering Veil to Lift, 02 Eau de Parfum to Define, 03 Layering Essence 01 to Soften, 04 Layering Essence 02 to Deepen. The 5ml Scent Balm is the bonus touch-up layer for later.';
    if(/inside|box|contain|what.*get|size|ml/.test(q)) return 'Every full kit contains Layering Veil 50ml, Eau de Parfum 30ml, Layering Essence 01 10ml, Layering Essence 02 10ml, plus a bonus Scent Balm 5ml.';
    if(/deliver|shipping|ship|international|courier/.test(q)) return 'South Africa: standard delivery is free on 2+ kits. A one-kit SA order gets an exact delivery quote before payment. International delivery is quoted individually before payment because courier cost and destination acceptance vary.';
    if(/price|cost|rand|zar|usd|dollar/.test(q)) return 'Current product price: R1,750 per kit in South Africa and USD 107 for international product pricing. Delivery is separate unless your South African order has 2 or more kits.';
    if(/pronoun|say tabaq|what.*tabaq|name mean/.test(q)) return 'Say it: TAH-baq. The brand idea is layer upon layer — exactly how TABAQ fragrance is built and worn.';
    if(/recommend|which|choose|match|me|scent|mood|fragrance/.test(q)){
      const ranked=scoreRecommendation(q);const top=ranked[0],second=ranked[1];
      if(top[1]===0) return 'Give me one clue: do you want fresh + clean, soft + floral, warm + deep, or bright + social? I’ll narrow it down immediately.';
      const p=PRODUCTS[top[0]];let out=`Start with ${p.name}: ${p.mood}. Its profile is ${p.profile}, and it suits ${p.best}.`;
      if(second[1]>0&&second[1]===top[1]) out+=` Your close second is ${PRODUCTS[second[0]].name}.`;
      return out;
    }
    if(/clean skin/.test(q)){const p=PRODUCTS['clean-skin'];return `${p.name} is ${p.mood}: ${p.profile}. Best for ${p.best}.`;}
    if(/soft bloom/.test(q)){const p=PRODUCTS['soft-bloom'];return `${p.name} is ${p.mood}: ${p.profile}. Best for ${p.best}.`;}
    if(/amber haze/.test(q)){const p=PRODUCTS['amber-haze'];return `${p.name} is ${p.mood}: ${p.profile}. Best for ${p.best}.`;}
    if(/juice drift/.test(q)){const p=PRODUCTS['juice-drift'];return `${p.name} is ${p.mood}: ${p.profile}. Best for ${p.best}.`;}
    return 'I can help with choosing a kit, the four-step layering ritual, what is inside the box, pricing, or delivery. Ask me in normal language — for example, “I want something warm for dinner.”';
  }
  async function handlePrompt(question){
    addMessage(question,'user');const thinking=addMessage(aiState==='ai'?'Thinking on-device…':'Matching that to TABAQ…','bot');
    try{
      let reply;
      if(session){reply=await session.prompt(`Customer question: ${question}`);}else reply=fallbackReply(question);
      thinking.textContent=String(reply||fallbackReply(question)).trim();
      if(aiState==='ai'){const s=el('small','','Answered on-device');thinking.appendChild(s)}
    }catch(err){thinking.textContent=fallbackReply(question);const s=el('small','','Local AI paused — answered with the built-in TABAQ guide');thinking.appendChild(s);}
    messages.scrollTop=messages.scrollHeight;
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',build,{once:true}); else build();
})();