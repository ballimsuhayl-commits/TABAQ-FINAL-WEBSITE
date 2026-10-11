(function(){
  'use strict';
  if(window.__TABAQ_LAYA_CONCIERGE__) return;
  window.__TABAQ_LAYA_CONCIERGE__=true;

  const MAX_HISTORY=10;
  const SESSION_KEY='tabaq_laya_chat_v241';
  const PRODUCTS={
    'clean-skin':{name:'Clean Skin',mood:'Fresh + clean',profile:'mineral air / pear skin / quiet musk',best:'everyday wear, work, warm days and understated scent',page:'clean-skin.html'},
    'soft-bloom':{name:'Soft Bloom',mood:'Soft + floral',profile:'petal cream / blush fruit / satin powder',best:'soft floral moods, dates, gifting and polished daytime wear',page:'soft-bloom.html'},
    'amber-haze':{name:'Amber Haze',mood:'Warm + deep',profile:'resin / spice dust / warm woods',best:'dinner, evening wear and a warmer, deeper scent presence',page:'amber-haze.html'},
    'juice-drift':{name:'Juice Drift',mood:'Bright + social',profile:'citrus peel / guava / clean sweetness',best:'weekends, warm days, social plans and a brighter scent mood',page:'juice-drift.html'}
  };

  let shell,panel,messages,input,status,sendBtn,micBtn,clearBtn;
  let conversation=[];
  let busy=false;
  const $=(s,r=document)=>r.querySelector(s);
  const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!=null)n.textContent=text;return n;};
  const clamp=(s,n=1200)=>String(s||'').trim().slice(0,n);

  function saveSession(){
    try{sessionStorage.setItem(SESSION_KEY,JSON.stringify(conversation.slice(-MAX_HISTORY)));}catch(_){}
  }
  function loadSession(){
    try{const v=JSON.parse(sessionStorage.getItem(SESSION_KEY)||'[]');if(Array.isArray(v))conversation=v.slice(-MAX_HISTORY).filter(x=>x&&['user','assistant'].includes(x.role));}catch(_){conversation=[];}
  }
  function clearSession(){
    conversation=[];try{sessionStorage.removeItem(SESSION_KEY);}catch(_){}
    messages.innerHTML='';
    addMessage('Hey ✦ I’m Laya, TABAQ’s AI scent girl. Tell me the vibe, the occasion, a perfume you already love, or what you are unsure about. I can help with fragrance, TABAQ, gifting, layering — or just answer a normal question.','bot','No sign-in. Just ask.');
    setStatus('Laya is ready','is-cloud');
    input.focus();
  }
  function track(name,detail={}){try{window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:name,...detail});}catch(_){} }
  function scrollMessages(){requestAnimationFrame(()=>{messages.scrollTop=messages.scrollHeight;});}
  function setStatus(text,mode=''){status.textContent=text;status.className='tabaq-guide-status'+(mode?' '+mode:'');}

  function addMessage(text,type='bot',note=''){
    const wrap=el('div','tabaq-guide-msg '+type);
    const copy=el('div','tabaq-guide-msg__copy',text);
    wrap.append(copy);
    if(note) wrap.append(el('small','tabaq-guide-msg__note',note));
    messages.append(wrap);scrollMessages();return {wrap,copy};
  }
  function addTyping(){
    const m=addMessage('','bot');
    m.copy.innerHTML='<span class="tabaq-guide-typing" aria-label="Laya is thinking"><i></i><i></i><i></i></span>';
    return m;
  }

  function productMatches(text){
    const hay=String(text||'').toLowerCase();
    return Object.entries(PRODUCTS).filter(([,p])=>hay.includes(p.name.toLowerCase())).map(([id])=>id);
  }
  function addActions(messageEl,question,answer){
    const hay=(question+' '+answer).toLowerCase();
    const actions=[];
    const matches=productMatches(answer);
    if(matches.length){
      const id=matches[0],p=PRODUCTS[id];
      actions.push({label:'See '+p.name,href:p.page,kind:'primary'});
      if(location.pathname.endsWith('/')||/index\.html$/.test(location.pathname)||location.pathname==='') actions.push({label:'Add '+p.name,add:id,kind:'buy'});
    } else if(/recommend|choose|which|match|mood|kit|gift/.test(hay)) {
      actions.push({label:'Find my kit',href:'index.html#find-your-kit',kind:'primary'});
    }
    if(/deliver|shipping|courier|international|south africa|postage/.test(hay)) actions.push({label:'Delivery details',href:'shipping.html'});
    else if(/return|refund|exchange/.test(hay)) actions.push({label:'Returns',href:'returns.html'});
    else if(/contact|human|person|support|speak to/.test(hay)) actions.push({label:'Contact TABAQ',href:'contact.html'});
    else if(/drop|waitlist|launch|restock|list/.test(hay)) actions.push({label:'Join the Layer List',href:'index.html#newsletter'});
    const unique=actions.filter((a,i,arr)=>arr.findIndex(x=>x.label===a.label)===i).slice(0,3);
    if(!unique.length)return;
    const row=el('div','tabaq-guide-actions');
    unique.forEach(a=>{
      if(a.add){
        const b=el('button','tabaq-guide-action '+(a.kind||''),a.label+' +');b.type='button';b.dataset.layaAdd=a.add;row.append(b);
      } else {
        const link=el('a','tabaq-guide-action '+(a.kind||''),a.label+' →');link.href=a.href;row.append(link);
      }
    });
    messageEl.wrap.append(row);scrollMessages();
  }

  function fallbackReply(question){
    const q=question.toLowerCase();
    if(/layer|order|wear.*first|how.*use|steps?/.test(q)) return 'Start light and build: 01 Layering Veil to Lift, 02 Eau de Parfum to Define, 03 Layering Essence 01 to Soften, 04 Layering Essence 02 to Deepen. The 5ml Scent Balm is your bonus touch-up layer for later.';
    if(/inside|box|contain|what.*get|size|ml/.test(q)) return 'Every full TABAQ kit has five pieces: Layering Veil 50ml, Eau de Parfum 30ml, Layering Essence 01 10ml, Layering Essence 02 10ml, plus a bonus Scent Balm 5ml.';
    if(/deliver|shipping|courier|international/.test(q)) return 'South Africa: standard delivery is free when you buy 2+ kits. A single-kit order gets the exact delivery charge before payment. International delivery is quoted separately because courier cost varies by destination.';
    if(/price|cost|zar|usd|dollar|rand/.test(q)) return 'A full TABAQ kit is R1,750 in South Africa and USD 107 for the international product price. Delivery is separate unless you buy 2+ kits in South Africa.';
    if(/pronoun|say tabaq|what.*tabaq|name mean/.test(q)) return 'Say it TAH-baq. The idea is layer upon layer — the whole brand is built around one scent changing the next until it feels like yours.';
    const scored={'clean-skin':0,'soft-bloom':0,'amber-haze':0,'juice-drift':0};
    const rules={
      'clean-skin':['clean','fresh','work','office','everyday','quiet','subtle','understated','skin'],
      'soft-bloom':['soft','floral','flower','pretty','polished','date','gift','romantic','powder'],
      'amber-haze':['warm','deep','evening','night','dinner','magnetic','rich','woody','spice','strong'],
      'juice-drift':['bright','social','weekend','juicy','fruit','fruity','playful','energy','guava','citrus']
    };
    for(const [id,words] of Object.entries(rules)) for(const w of words) if(q.includes(w)) scored[id]++;
    const ranked=Object.entries(scored).sort((a,b)=>b[1]-a[1]);
    if(ranked[0][1]>0){const p=PRODUCTS[ranked[0][0]];return `I’d start with ${p.name}. It is ${p.mood.toLowerCase()}, with ${p.profile}. It makes the most sense for ${p.best}. If you want, I can compare it with one other kit before you decide.`;}
    return 'I’m having a tiny AI wobble, but I’m still here. Ask me about a TABAQ kit, layering, gifting, price or delivery — or try your question again in a moment.';
  }

  async function streamAiReply(question,botMessage){
    const payload={
      message:clamp(question,900),
      history:conversation.slice(-MAX_HISTORY).map(x=>({role:x.role,content:clamp(x.content,1200)})),
      page:location.pathname||'/'
    };
    const response=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(!response.ok){
      let msg='AI temporarily unavailable';
      try{const j=await response.json();msg=j.message||msg;}catch(_){}
      const err=new Error(msg);err.status=response.status;throw err;
    }
    if(!response.body) return String(await response.text()).trim();
    const reader=response.body.getReader(),decoder=new TextDecoder();let answer='';
    botMessage.copy.textContent='';
    while(true){
      const {value,done}=await reader.read();if(done)break;
      const chunk=decoder.decode(value,{stream:true});if(chunk){answer+=chunk;botMessage.copy.textContent=answer;scrollMessages();}
    }
    return answer.trim();
  }

  async function handlePrompt(question){
    if(busy)return;
    question=clamp(question,900);if(!question)return;
    busy=true;sendBtn.disabled=true;if(micBtn)micBtn.disabled=true;
    addMessage(question,'user');
    const bot=addTyping();
    setStatus('Laya is thinking…','is-cloud');
    track('laya_chat_question',{length:question.length});
    try{
      const answer=await streamAiReply(question,bot);
      if(!answer)throw new Error('empty_response');
      bot.copy.textContent=answer;
      const note=el('small','tabaq-guide-msg__note','TABAQ AI · no customer sign-in');bot.wrap.append(note);
      conversation.push({role:'user',content:question},{role:'assistant',content:answer});conversation=conversation.slice(-MAX_HISTORY);saveSession();
      addActions(bot,question,answer);
      setStatus('Laya is ready','is-cloud');
      track('laya_chat_answer',{recommended_product:productMatches(answer)[0]||''});
    }catch(err){
      const answer=fallbackReply(question);bot.copy.textContent=answer;bot.wrap.append(el('small','tabaq-guide-msg__note','Instant TABAQ fallback'));addActions(bot,question,answer);
      conversation.push({role:'user',content:question},{role:'assistant',content:answer});conversation=conversation.slice(-MAX_HISTORY);saveSession();
      setStatus('Instant guide active','is-ai');
      console.warn('TABAQ Laya AI fallback:',err);
    }finally{busy=false;sendBtn.disabled=false;if(micBtn)micBtn.disabled=false;input.focus();scrollMessages();}
  }

  function setupVoice(){
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!SR){micBtn.style.display='none';return;}
    const recognition=new SR();recognition.lang='en-ZA';recognition.interimResults=false;recognition.maxAlternatives=1;
    recognition.addEventListener('start',()=>{micBtn.classList.add('is-listening');setStatus('Listening…','is-listening');});
    recognition.addEventListener('end',()=>{micBtn.classList.remove('is-listening');if(!busy)setStatus('Laya is ready','is-cloud');});
    recognition.addEventListener('result',e=>{const text=e.results?.[0]?.[0]?.transcript||'';if(text){input.value=text;handlePrompt(text);input.value='';}});
    micBtn.addEventListener('click',()=>{try{recognition.start();}catch(_){}});
  }

  function build(){
    loadSession();
    shell=el('div','tabaq-guide-shell');
    const launcher=el('button','tabaq-guide-launcher');launcher.type='button';launcher.setAttribute('aria-expanded','false');launcher.innerHTML='<i aria-hidden="true"></i><span>ASK LAYA</span>';
    panel=el('section','tabaq-guide-panel');panel.setAttribute('aria-label','Laya — TABAQ AI scent concierge');

    const head=el('header','tabaq-guide-head');
    const headCopy=el('div','tabaq-guide-head__copy');headCopy.append(el('p','tabaq-guide-kicker','Your TABAQ scent girl'));headCopy.append(el('h2','','LAYA'));headCopy.append(el('p','tabaq-guide-subtitle','Fragrance brain. Shopping wingwoman. Easy to talk to.'));
    status=el('div','tabaq-guide-status is-cloud','Laya is ready');headCopy.append(status);
    const actions=el('div','tabaq-guide-head__actions');clearBtn=el('button','tabaq-guide-clear','Clear');clearBtn.type='button';clearBtn.setAttribute('aria-label','Clear chat');const close=el('button','tabaq-guide-close','×');close.type='button';close.setAttribute('aria-label','Close Laya');actions.append(clearBtn,close);head.append(headCopy,actions);

    messages=el('div','tabaq-guide-messages');
    if(conversation.length){
      conversation.forEach(m=>addMessage(m.content,m.role==='user'?'user':'bot'));
    }else{
      addMessage('Hey ✦ I’m Laya, TABAQ’s AI scent girl. Tell me the vibe, the occasion, a perfume you already love, or what you are unsure about. I can help with fragrance, TABAQ, gifting, layering — or just answer a normal question.','bot','No sign-in. Just ask.');
    }

    const quick=el('div','tabaq-guide-quick');
    [
      ['Find my kit','Help me choose the best TABAQ kit for me. Ask me one useful question at a time.'],
      ['Gift help','I need a fragrance gift. Help me choose without making it complicated.'],
      ['Layering 101','Teach me how fragrance layering works and how to use a TABAQ kit.'],
      ['Compare moods','Compare the four TABAQ kit moods simply.'],
      ['Delivery','How does delivery work in South Africa and internationally?'],
      ['Ask anything','Can I ask you a general question too?']
    ].forEach(([label,prompt])=>{const b=el('button','',label);b.type='button';b.dataset.ask=prompt;quick.append(b);});

    const strip=el('div','tabaq-guide-ai-strip');strip.innerHTML='<strong>NO ACCOUNT NEEDED</strong><span>Private TABAQ chat endpoint · built to help, not pressure.</span>';
    const form=el('form','tabaq-guide-form');input=el('input');input.type='text';input.placeholder='Ask Laya anything…';input.autocomplete='off';input.maxLength=900;micBtn=el('button','tabaq-guide-mic','🎙');micBtn.type='button';micBtn.setAttribute('aria-label','Ask by voice');sendBtn=el('button','tabaq-guide-send','Send');sendBtn.type='submit';form.append(input,micBtn,sendBtn);
    const privacy=el('p','tabaq-guide-privacy','AI can make mistakes. Please do not share passwords, payment details or sensitive personal information in chat.');
    panel.append(head,messages,quick,strip,form,privacy);shell.append(panel,launcher);document.body.append(shell);

    launcher.addEventListener('click',()=>{const open=!shell.classList.contains('is-open');shell.classList.toggle('is-open',open);launcher.setAttribute('aria-expanded',open?'true':'false');if(open){input.focus();track('laya_chat_open');}});
    close.addEventListener('click',()=>{shell.classList.remove('is-open');launcher.setAttribute('aria-expanded','false');launcher.focus();});
    clearBtn.addEventListener('click',clearSession);
    quick.addEventListener('click',e=>{const b=e.target.closest('[data-ask]');if(b)handlePrompt(b.dataset.ask);});
    form.addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim();if(!q)return;input.value='';handlePrompt(q);});
    panel.addEventListener('click',e=>{
      const add=e.target.closest('[data-laya-add]');if(!add)return;
      const id=add.dataset.layaAdd;
      if(typeof window.addCart==='function'){window.addCart(id);track('laya_add_to_cart',{product_id:id});}
      else location.href='index.html#'+id;
    });
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&shell.classList.contains('is-open'))close.click();});
    setupVoice();
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build,{once:true});else build();
})();
