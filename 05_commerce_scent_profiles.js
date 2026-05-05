window.addEventListener('load', () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      const products = [
        {
          id:'mist', num:'01', top:'YOUR SCENT', left:'LIFT', right:'MIST',
          img:'assets/images/tabaq_asset_001_07c76adb2c.webp', card:'assets/images/tabaq_asset_002_894e697dbc.webp', badge:'assets/images/tabaq_asset_003_80db4ce1a2.webp',
          alt:'TABAQ Lift Body Mist', bg:'#e7aa3f', colorMode:true, active:'#e7aa3f', active2:'#ffcf72',
          copy:'One hero kit. Four scent moves. Mist, define, soften and deepen your fragrance without guessing what goes with what.',
          scrollCopy:'The mist is the lift: bright, open, and designed to start the full layering ritual.', scale:1, rest:-7, oil:false
        },
        {
          id:'edp', num:'02', top:'SIGNATURE', left:'DEFINE', right:'EDP',
          img:'assets/images/tabaq_asset_004_8d6e7291e9.webp', card:'assets/images/tabaq_asset_003_80db4ce1a2.webp', badge:'assets/images/tabaq_asset_001_07c76adb2c.webp',
          alt:'TABAQ Define EDP', bg:'#d93a33', colorMode:true, active:'#d93a33', active2:'#ffcf2f',
          copy:'The signature bottle shifts the whole world around it. Color, type and product motion change as one system.',
          scrollCopy:'The EDP is the define layer: the clear scent identity that gives the kit its signature centre.', scale:1.02, rest:7, oil:false
        },
        {
          id:'oil1', num:'03', top:'SKIN CLOSE', left:'SOFT', right:'OIL',
          img:'assets/images/tabaq_asset_002_894e697dbc.webp', card:'assets/images/tabaq_asset_004_8d6e7291e9.webp', badge:'assets/images/tabaq_asset_003_80db4ce1a2.webp',
          alt:'TABAQ Soften Accent Oil 1', bg:'#b79ae4', colorMode:true, active:'#b79ae4', active2:'#ffcc1b',
          copy:'Accent oil brings the scent closer to the skin. The page narrows, slows and lets the product feel tactile.',
          scrollCopy:'The first oil softens the blend, bringing the scent closer to skin with a warmer finish.', scale:.86, rest:-5, oil:true
        },
        {
          id:'oil2', num:'04', top:'LASTING', left:'DEEP', right:'OIL',
          img:'assets/images/tabaq_asset_003_80db4ce1a2.webp', card:'assets/images/tabaq_asset_001_07c76adb2c.webp', badge:'assets/images/tabaq_asset_004_8d6e7291e9.webp',
          alt:'TABAQ Deepen Accent Oil 2', bg:'#a9c88c', colorMode:true, active:'#a9c88c', active2:'#ff7a45',
          copy:'The last oil grounds the kit. Motion becomes smoother, deeper, and more settled.',
          scrollCopy:'The deepen oil anchors the ritual, slowing the scent down and giving the full kit lasting depth.', scale:.86, rest:5, oil:true
        }
      ];

      const $ = (s, root=document) => root.querySelector(s);
      const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));
      const hero = $('.hero');
      const handoff = $('.handoff');
      const stage = $('.stage');
      const heroImg = $('.js-hero-product');
      const orbit = $('.js-orbit');
      const root = document.documentElement;
      const textEls = ['.js-scroll-copy'].map(s=>$(s)).filter(Boolean);
      const dots = $$('.dial-dot');
      let index = 0;
      let busy = false;
      let timer = null;
      let handoffActive = false;

      
      let resetHeroHandoff = () => { handoffActive = false; };
      function handoffIsAwayFromHero(){
        if(!handoff) return true;
        const handoffRect = handoff.getBoundingClientRect();
        return handoffRect.top >= window.innerHeight - 6;
      }
      function ensureHeroSelectable(){
        if(!handoffActive) return;
        if(handoffIsAwayFromHero()){
          resetHeroHandoff();
          handoffActive = false;
        }
      }
      function cancelSelectionBusyState(){
        if(!busy) return;
        busy = false;
        if(window.gsap){
          gsap.killTweensOf([orbit, heroImg, '.product-shadow', '.float-item', '.mega-type__small', '.mega-type__top', '.mega-type__line', textEls]);
        }
      }
      function selectProduct(productIndex, user=true){
        if(user){
          ensureHeroSelectable();
          cancelSelectionBusyState();
        }
        spinTo(Number(productIndex), user);
      }
      


      
      const AUTO_CHANGE_ENABLED = true;
      const HERO_FOCUS_FILTER = 'drop-shadow(0 58px 82px rgba(0,0,0,.34)) brightness(1.065) saturate(1.055)';
      const HERO_REST_FILTER = 'drop-shadow(0 42px 58px rgba(0,0,0,.31)) brightness(1) saturate(1)';
      const OTHER_RECEDING_FILTER = 'blur(1.15px) brightness(.96) saturate(.9) drop-shadow(0 18px 36px rgba(0,0,0,.16))';
      const OTHER_MID_RECEDING_FILTER = 'blur(1.75px) brightness(.9) saturate(.84) drop-shadow(0 20px 42px rgba(0,0,0,.15))';
      const OTHER_FAR_RECEDING_FILTER = 'blur(5.2px) brightness(.86) saturate(.78) drop-shadow(0 18px 42px rgba(0,0,0,.14))';
      const EDITORIAL_DIAL_BOUNCE = 'elastic.out(1, .58)';
      

      
      const HERO_EXPLORE_PANEL_REMOVED = true;
      


      
      const AMBER_BODY_MIST_INDEX = 0;
      const AMBER_BODY_MIST_SOFT_FILTER = 'blur(4px) brightness(.9) saturate(.86) drop-shadow(0 18px 42px rgba(0,0,0,.12))';

      function normaliseProductIndex(productIndex){
        return ((productIndex % products.length) + products.length) % products.length;
      }

      function assignSupportProduct(wrapperSelector, imgSelector, productIndex){
        const normalisedIndex = normaliseProductIndex(productIndex);
        const product = products[normalisedIndex];
        const wrapper = $(wrapperSelector);
        const img = $(imgSelector);
        if(img && product){
          img.src = product.img;
          img.alt = product.alt;
          img.classList.toggle('oil', !!product.oil);
        }
        if(wrapper && product){
          wrapper.dataset.productIndex = String(normalisedIndex);
          wrapper.dataset.productId = product.id || '';
          wrapper.setAttribute('role', 'button');
          wrapper.setAttribute('tabindex', '0');
          wrapper.setAttribute('aria-label', 'Select ' + product.alt);
          wrapper.classList.toggle('is-amber-body-mist', normalisedIndex === AMBER_BODY_MIST_INDEX);
        }
      }

      function isAmberBodyMistSupport(el){
        return !!el && Number(el.dataset.productIndex) === AMBER_BODY_MIST_INDEX;
      }

      function mergeMotion(base, override={}){
        return {...base, ...override};
      }

      function getAmberSupportRevealOverride(profile, el){
        if(!isAmberBodyMistSupport(el)) return null;
        if(profile.selector === '.float-item--top'){
          return {
            from:{x:-42, y:-34, z:-205, rotation:-25, scale:.72, opacity:0, filter:AMBER_BODY_MIST_SOFT_FILTER, transformOrigin:'52% 100%'},
            to:{duration:1.04, ease:'power3.out'},
            offset:.11
          };
        }
        if(profile.selector === '.float-item--right'){
          return {
            from:{x:86, y:10, z:-265, rotation:4, scale:.92, opacity:0, filter:AMBER_BODY_MIST_SOFT_FILTER, transformOrigin:'50% 58%'},
            to:{duration:1.08, ease:'power3.out'},
            offset:.13
          };
        }
        if(profile.selector === '.float-item--low'){
          return {
            from:{x:34, y:58, z:-220, rotation:-36, scale:.74, opacity:0, filter:AMBER_BODY_MIST_SOFT_FILTER, transformOrigin:'50% 100%'},
            to:{duration:1.06, ease:'power3.out'},
            offset:.14
          };
        }
        return null;
      }

      function getSupportRevealMotion(profile, el){
        const amberOverride = getAmberSupportRevealOverride(profile, el);
        if(!amberOverride) return profile;
        return {
          ...profile,
          from:mergeMotion(profile.from, amberOverride.from),
          to:mergeMotion(profile.to, amberOverride.to),
          offset:amberOverride.offset ?? profile.offset
        };
      }

      function getAmberSupportExitOverride(profile, el){
        if(!isAmberBodyMistSupport(el)) return null;
        if(profile.selector === '.float-item--top'){
          return {x:-42, y:-26, z:-210, rotation:-25, scale:.78, opacity:0, filter:AMBER_BODY_MIST_SOFT_FILTER, duration:.52, ease:'power2.inOut'};
        }
        if(profile.selector === '.float-item--right'){
          return {x:86, y:10, z:-280, rotation:4, scale:.9, opacity:0, filter:AMBER_BODY_MIST_SOFT_FILTER, duration:.54, ease:'power2.inOut'};
        }
        if(profile.selector === '.float-item--low'){
          return {x:34, y:58, z:-220, rotation:-34, scale:.74, opacity:0, filter:AMBER_BODY_MIST_SOFT_FILTER, duration:.54, ease:'power2.inOut'};
        }
        return null;
      }

      function getSupportExitMotion(profile, el){
        const amberOverride = getAmberSupportExitOverride(profile, el);
        return amberOverride ? mergeMotion(profile.to, amberOverride) : profile.to;
      }

      function getHeroRevealMotion(product, productIndex, intro=false){
        const finalMotion = {y:0, x:0, rotation:product.rest, scale:product.scale, opacity:1, filter:'blur(0px)', force3D:true};
        if(productIndex === AMBER_BODY_MIST_INDEX){
          return {
            from:{y:intro ? -430 : -390, x:intro ? -32 : -26, rotation:intro ? -132 : -118, scale:intro ? 1.08 : 1.06, opacity:0, filter:'blur(1.5px)', transformOrigin:'50% 50%', force3D:true},
            to:{...finalMotion, duration:1.08, ease:'power3.out'}
          };
        }
        return {
          from:{y:intro ? -760 : -720, x:intro ? -70 : -56, rotation:intro ? -610 : -580, scale:intro ? 1.28 : 1.22, opacity:0, filter:'blur(2px)', transformOrigin:'50% 50%', force3D:true},
          to:{...finalMotion, duration:1.18, ease:intro ? 'elastic.out(1,.72)' : 'elastic.out(1, .68)'}
        };
      }
      

      function setTexts(p){
        const scrollCopyEl = $('.js-scroll-copy');
        if (scrollCopyEl) scrollCopyEl.textContent = p.scrollCopy;
        const heroExploreTitle = $('.js-card-title');
        if (heroExploreTitle) heroExploreTitle.textContent = p.id === 'mist' ? 'Explore The Ritual' : `Explore ${p.left.toLowerCase()} layer`;
      }

      function setStatic(p){
        hero.classList.toggle('is-color', p.colorMode);
        hero.classList.add('is-manual-select');
        hero.style.setProperty('--bg', p.bg);
        root.style.setProperty('--active', p.active);
        root.style.setProperty('--active2', p.active2);
        heroImg.src = p.img;
        heroImg.alt = p.alt;
        heroImg.classList.toggle('oil', p.oil);
        const heroExploreImg = $('.js-card-img');
        if (heroExploreImg) heroExploreImg.src = p.card || p.img;
        const badgeImg = $('.js-badge-img');
        if (badgeImg) badgeImg.src = p.badge || p.img;
        assignSupportProduct('.float-item--top', '.js-float-img', index + 2);
        assignSupportProduct('.float-item--right', '.js-float-img2', index + 1);
        assignSupportProduct('.float-item--low', '.js-float-img3', index + 3);
        dots.forEach((d,i)=>{
          const active = i === index;
          d.classList.toggle('is-active', active);
          d.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        $$('#layers .card').forEach((card,i)=>card.classList.toggle('is-active-layer-card', i === index));
      }

      
      function setSupportDepth(immediate=false){
        const depthMap = [
          {opacity:.9, scale:.9, y:0, x:0, z:-90, filter:OTHER_RECEDING_FILTER},
          {opacity:.82, scale:.78, y:0, x:0, z:-230, filter:OTHER_FAR_RECEDING_FILTER},
          {opacity:.88, scale:.86, y:0, x:0, z:-140, filter:OTHER_MID_RECEDING_FILTER}
        ];
        if(!window.gsap || reduced){
          heroImg.style.filter = HERO_REST_FILTER;
          $$('.float-item').forEach((el, i) => {
            const d = depthMap[i] || depthMap[0];
            el.style.opacity = String(d.opacity);
            el.style.filter = d.filter;
            el.style.transform = `${el.classList.contains('float-item--top') ? 'rotate(-17deg)' : el.classList.contains('float-item--low') ? 'rotate(-26deg)' : ''} scale(${d.scale})`;
          });
          return;
        }

        const duration = immediate ? 0 : .56;
        gsap.to(heroImg, {filter:HERO_REST_FILTER, duration, ease:'power2.out', overwrite:'auto'});
        gsap.to('.float-item', {
          opacity:(i)=>(depthMap[i] || depthMap[0]).opacity,
          scale:(i)=>(depthMap[i] || depthMap[0]).scale,
          y:(i)=>(depthMap[i] || depthMap[0]).y,
          z:(i)=>(depthMap[i] || depthMap[0]).z,
          filter:(i)=>(depthMap[i] || depthMap[0]).filter,
          duration,
          stagger: immediate ? 0 : .045,
          ease:'power3.out',
          overwrite:'auto'
        });
      }

      function pulseSelectedHero(){
        if(!window.gsap || reduced) return;
        gsap.fromTo(heroImg,
          {filter:'drop-shadow(0 30px 44px rgba(0,0,0,.25)) brightness(.96) saturate(.96)'},
          {filter:HERO_FOCUS_FILTER, duration:.34, ease:'power2.out', overwrite:'auto'}
        );
        gsap.to(heroImg, {filter:HERO_REST_FILTER, duration:.5, ease:'sine.out', delay:.34, overwrite:'auto'});
      }
      

      
      let editorialMicroMotionStarted = false;

      function startEditorialMicroPhysics(){
        if(editorialMicroMotionStarted || !window.gsap || reduced) return;
        editorialMicroMotionStarted = true;
        gsap.to(heroImg, {y:-8, rotation:.38, duration:3.6, repeat:-1, yoyo:true, ease:'sine.inOut', overwrite:false});
        gsap.to('.product-shadow', {scaleX:.88, opacity:.62, duration:3.6, repeat:-1, yoyo:true, ease:'sine.inOut', overwrite:false});
      }

      function kickDialPhysics(dot){
        if(!window.gsap || reduced || !dot) return;
        gsap.fromTo(dot, {scale:.92}, {scale:1.08, duration:.38, ease:EDITORIAL_DIAL_BOUNCE, overwrite:true});
        gsap.to(dot, {scale:1.02, duration:.24, delay:.34, ease:'sine.out', overwrite:'auto'});
      }

      function initEditorialCardPhysics(){
        if(!window.gsap || reduced) return;
        const layerSection = $('#layers');
        if(!layerSection) return;
        const kitImages = () => $$('#layers .card__media img');
        layerSection.addEventListener('pointermove', (event) => {
          const rect = layerSection.getBoundingClientRect();
          const dx = ((event.clientX - rect.left) / Math.max(rect.width,1)) - .5;
          const dy = ((event.clientY - rect.top) / Math.max(rect.height,1)) - .5;
          kitImages().forEach((img, i) => {
            gsap.to(img, {
              x:dx*14,
              y:dy*10,
              rotation:dx*2.2,
              duration:.34,
              delay:i*.012,
              ease:'power2.out',
              overwrite:'auto'
            });
          });
        });
        layerSection.addEventListener('pointerleave', () => {
          gsap.to(kitImages(), {x:0, y:0, rotation:0, duration:.5, stagger:.018, ease:'elastic.out(1,.7)', overwrite:'auto'});
        });
      }
      

      
      const SUPPORT_ITEM_SELECTOR = '.float-item--top,.float-item--right,.float-item--low';
      const SUPPORT_REVEAL_PROFILES = [
        {
          selector:'.float-item--top',
          from:{x:-96, y:-76, z:-260, rotation:-43, scale:.54, opacity:0, filter:OTHER_FAR_RECEDING_FILTER, transformOrigin:'52% 100%'},
          to:{x:0, y:0, z:-90, rotation:-17, scale:.9, opacity:.9, filter:OTHER_RECEDING_FILTER, duration:.86, ease:'back.out(1.55)'},
          offset:.03
        },
        {
          selector:'.float-item--right',
          from:{x:190, y:-20, z:-340, rotation:10, scale:1.16, opacity:0, filter:'blur(10px) brightness(.78) saturate(.68) drop-shadow(0 18px 42px rgba(0,0,0,.12))', transformOrigin:'50% 55%'},
          to:{x:0, y:0, z:-230, rotation:0, scale:.78, opacity:.82, filter:OTHER_FAR_RECEDING_FILTER, duration:.98, ease:'power3.out'},
          offset:.12
        },
        {
          selector:'.float-item--low',
          from:{x:72, y:126, z:-280, rotation:-62, scale:.58, opacity:0, filter:OTHER_FAR_RECEDING_FILTER, transformOrigin:'50% 100%'},
          to:{x:0, y:0, z:-140, rotation:-26, scale:.86, opacity:.88, filter:OTHER_MID_RECEDING_FILTER, duration:.9, ease:'elastic.out(1, .72)'},
          offset:.2
        }
      ];

      const SUPPORT_EXIT_PROFILES = [
        {selector:'.float-item--top', to:{x:-76, y:-44, z:-260, rotation:-36, scale:.72, opacity:0, filter:OTHER_FAR_RECEDING_FILTER, duration:.34, ease:'power2.inOut'}, offset:0},
        {selector:'.float-item--right', to:{x:142, y:20, z:-360, rotation:8, scale:1.02, opacity:0, filter:'blur(10px) brightness(.78) saturate(.68) drop-shadow(0 18px 42px rgba(0,0,0,.12))', duration:.36, ease:'power2.inOut'}, offset:.02},
        {selector:'.float-item--low', to:{x:58, y:92, z:-280, rotation:-54, scale:.68, opacity:0, filter:OTHER_FAR_RECEDING_FILTER, duration:.36, ease:'power2.inOut'}, offset:.04}
      ];

      function killSupportItemMotion(){
        if(!window.gsap) return;
        gsap.killTweensOf(SUPPORT_ITEM_SELECTOR);
      }

      function appendSupportItemReveal(tl, at=.58){
        if(!tl || !window.gsap || reduced) return;
        SUPPORT_REVEAL_PROFILES.forEach(profile => {
          const el = $(profile.selector);
          if(!el) return;
          const motion = getSupportRevealMotion(profile, el);
          tl.fromTo(el,
            {...motion.from, force3D:true, immediateRender:false},
            {...motion.to, force3D:true, overwrite:true},
            at + motion.offset
          );
        });
      }

      function appendSupportItemExit(tl, at=0){
        if(!tl || !window.gsap || reduced) return;
        SUPPORT_EXIT_PROFILES.forEach(profile => {
          const el = $(profile.selector);
          if(!el) return;
          tl.to(el, {...getSupportExitMotion(profile, el), force3D:true, overwrite:true}, at + profile.offset);
        });
      }

      function startSupportItemIdleMotion(){
        if(!window.gsap || reduced) return;
        killSupportItemMotion();
        gsap.to('.float-item--top', {y:26, rotation:-10, duration:3.8, repeat:-1, yoyo:true, ease:'sine.inOut', overwrite:false});
        gsap.to('.float-item--low', {y:-34, rotation:-34, duration:4.2, repeat:-1, yoyo:true, ease:'sine.inOut', overwrite:false});
        gsap.to('.float-item--right', {x:-10, y:42, rotation:2, scale:.82, duration:4.8, repeat:-1, yoyo:true, ease:'sine.inOut', overwrite:false});
      }
      

      function spinTo(next, user=false){
        if(handoffActive && user){
          ensureHeroSelectable();
          if(handoffActive) return;
        }
        if(busy && user){
          cancelSelectionBusyState();
        }
        if(next === index && user) return;
        busy = true;
        index = (next + products.length) % products.length;
        const p = products[index];
        prepareTopColor(p);

        if(reduced || !window.gsap){
          setTexts(p); setStatic(p); busy = false; return;
        }

        clearTimeout(timer);
        const heroReveal = getHeroRevealMotion(p, index, false);
        const tl = gsap.timeline({defaults:{overwrite:true}, onComplete(){busy=false; startSupportItemIdleMotion(); queue(); if(window.ScrollTrigger) ScrollTrigger.refresh();}});
        killSupportItemMotion();
        tl.add(() => animateTopSystems(p, false), .02);
        tl.to(textEls, {y:14, opacity:0, duration:.2, stagger:.016, ease:'power2.in'}, 0);
        appendSupportItemExit(tl, 0);
        tl.to(orbit, {y:390, x:68, rotation:164, scale:.76, opacity:0, filter:'blur(8px)', duration:.4, ease:'power2.in'}, 0)
          .add(() => {}, .08)
          .add(() => { setTexts(p); setStatic(p); }, .41)
          .set(orbit, heroReveal.from)
          .to(orbit, heroReveal.to, .45)
          .fromTo(textEls, {y:-16, opacity:0}, {y:0, opacity:1, duration:.44, stagger:.024, ease:'power3.out'}, .7)
          .fromTo('.product-shadow', {scaleX:.5, opacity:.1}, {scaleX:1, opacity:.75, duration:.7, ease:'power2.out'}, .75)
          .add(pulseSelectedHero, 1.28);
        appendSupportItemReveal(tl, .54);
      }

      function queue(){
        clearTimeout(timer);
        timer = null;
        if(!AUTO_CHANGE_ENABLED || reduced || handoffActive) return;
        timer = setTimeout(() => spinTo(index + 1), 1800);
      }

      dots.forEach(dot => {
        dot.addEventListener('pointerenter', () => {
          if(window.gsap && !reduced && !dot.classList.contains('is-active')) gsap.to(dot, {y:-3, duration:.22, ease:'power2.out', overwrite:true});
        });
        dot.addEventListener('pointerleave', () => {
          if(window.gsap && !reduced && !dot.classList.contains('is-active')) gsap.to(dot, {y:0, duration:.28, ease:'power2.out', overwrite:true});
        });
        dot.addEventListener('click', () => {
          kickDialPhysics(dot);
          selectProduct(Number(dot.dataset.index), true);
        });
      });

      
      $$('.float-item').forEach(item => {
        item.addEventListener('click', () => {
          const targetIndex = Number(item.dataset.productIndex);
          if(Number.isFinite(targetIndex)) selectProduct(targetIndex, true);
        });
        item.addEventListener('keydown', event => {
          if(event.key === 'Enter' || event.key === ' '){
            event.preventDefault();
            const targetIndex = Number(item.dataset.productIndex);
            if(Number.isFinite(targetIndex)) selectProduct(targetIndex, true);
          }
        });
      });
      

      setStatic(products[0]);
      setTexts(products[0]);
      setSupportDepth(true);


      
      function setMegaText(product){
        const num = $('.js-num');
        const kicker = $('.js-kicker-word');
        const left = $('.js-left-word');
        const right = $('.js-right-word');
        if(num) num.textContent = product.num;
        if(kicker) kicker.textContent = product.top;
        if(left) left.textContent = product.left;
        if(right) right.textContent = product.right;
      }
      function animateBackgroundScene(product, intro=false){
        const curtain = $('.js-color-curtain');
        const megaParts = $$('.mega-type__small, .mega-type__top, .mega-type__line');
        const textDelay = intro ? .28 : .24;
        const bgDuration = intro ? 1.18 : .96;
        const textDuration = intro ? 1.04 : .9;

        hero.style.setProperty('--bg', product.bg);
        hero.classList.toggle('is-color', product.colorMode);

        if(!window.gsap || reduced){
          setMegaText(product);
          hero.style.backgroundColor = product.bg;
          if(curtain){curtain.style.opacity = '0'; curtain.style.transform = 'scaleY(0)';}
          return;
        }

        if(curtain){
          gsap.killTweensOf(curtain);
          gsap.set(curtain, {backgroundColor:product.bg, scaleY:0, opacity:1, transformOrigin:'top center'});
          gsap.to(curtain, {
            scaleY:1,
            duration:bgDuration,
            ease:'power3.inOut',
            overwrite:true,
            onComplete(){
              hero.style.backgroundColor = product.bg;
              gsap.set(curtain, {opacity:0, scaleY:0});
            }
          });
        } else {
          hero.style.backgroundColor = product.bg;
        }

        if(megaParts.length){
          gsap.killTweensOf(megaParts);
          gsap.to(megaParts, {
            y:54,
            opacity:0,
            filter:'blur(10px)',
            duration:intro ? 0 : .16,
            ease:'power2.in',
            stagger:.018,
            overwrite:true
          });
          gsap.delayedCall(textDelay, () => {
            setMegaText(product);
            gsap.set(megaParts, {y:intro ? -150 : -135, opacity:0, filter:'blur(14px)', force3D:true});
            gsap.to(megaParts, {
              y:0,
              opacity:1,
              filter:'blur(0px)',
              duration:textDuration,
              stagger:.065,
              ease:'expo.out',
              overwrite:true
            });
          });
        }
      }
function prepareTopColor(product){
        const curtain = $('.js-color-curtain');
        if(!curtain) return;
        curtain.style.backgroundColor = product.bg;
        if(!window.gsap || reduced){curtain.style.opacity = '0'; curtain.style.transform = 'scaleY(0)'; return;}
        gsap.set(curtain, {scaleY:0, opacity:1, transformOrigin:'top center'});
      }
      function animateTopSystems(product, intro=false){
        animateBackgroundScene(product, intro);
      }
setMegaText(products[0]);

      
      

      
      const HAS_GSAP = !!window.gsap;
      const HAS_SCROLL_TRIGGER = !!window.ScrollTrigger;
      const CAN_RUN_SCROLL_MOTION = HAS_GSAP && HAS_SCROLL_TRIGGER && !reduced;

      if(CAN_RUN_SCROLL_MOTION){
        gsap.registerPlugin(window.ScrollTrigger);
        const introHeroReveal = getHeroRevealMotion(products[0], 0, true);
        gsap.set(orbit, {rotation:products[0].rest, scale:products[0].scale, transformOrigin:'50% 50%'});
        const introTl = gsap.timeline({delay:.14, onComplete(){setSupportDepth(true); pulseSelectedHero(); startEditorialMicroPhysics(); startSupportItemIdleMotion(); queue();}});
        introTl.fromTo(orbit, introHeroReveal.from, introHeroReveal.to, 0);
        introTl.add(() => animateTopSystems(products[0], true), .02);
        appendSupportItemReveal(introTl, .16);
        gsap.from('.mega-type__top,.mega-type__line span,.mega-type__small', {y:70, opacity:0, duration:.75, stagger:.08, ease:'power3.out', delay:.12});
        gsap.from('.nav', {y:-80, opacity:0, duration:.7, ease:'power3.out'});

        gsap.utils.toArray('.reveal').forEach((el, i) => {
          gsap.to(el, {opacity:1, y:0, duration:.72, ease:'power3.out', scrollTrigger:{trigger:el, start:'top 86%', once:true}, delay:(i%4)*.035});
        });
        gsap.fromTo('#layers .card', {y:54, rotateX:-4, opacity:.001}, {y:0, rotateX:0, opacity:1, duration:.78, stagger:.07, ease:'power3.out', scrollTrigger:{trigger:'#layers .cards', start:'top 84%', once:true}});
        initEditorialCardPhysics();

        
        const KIT_FLIGHT_MOVE_START = .015;
        const KIT_FLIGHT_EASE = 'power2.out';
        const PANEL_SCRUB = 2.65;
        const FLIGHT_CLONE_CLASS = 'layer-kit-flight-clone';
        let allKitFlightActive = false;
        let kitFlightItems = [];
        let activeTargetImgs = [];
        let layerKitFlightPointer = {x:0, y:0};
        let layerKitFlightDirection = 1;

        window.addEventListener('pointermove', event => {
          layerKitFlightPointer = {
            x:gsap.utils.clamp(-1, 1, ((event.clientX / Math.max(window.innerWidth, 1)) - .5) * 2),
            y:gsap.utils.clamp(-1, 1, ((event.clientY / Math.max(window.innerHeight, 1)) - .5) * 2)
          };
        }, {passive:true});

        function clearLayerKitTargetState(){
          $$('#layers .card__media img.is-layer-kit-flight-target').forEach(img => img.classList.remove('is-layer-kit-flight-target'));
          $$('#layers .card.is-layer-kit-flight-destination').forEach(card => card.classList.remove('is-layer-kit-flight-destination'));
          activeTargetImgs = [];
        }

        function setAllLayerKitTargetsHidden(hidden){
          clearLayerKitTargetState();
          if(!hidden) return;
          activeTargetImgs = $$('#layers .cards .card .card__media img');
          activeTargetImgs.forEach(img => {
            img.classList.add('is-layer-kit-flight-target');
            const card = img.closest('.card');
            if(card) card.classList.add('is-layer-kit-flight-destination');
          });
        }

        function snapshotRect(rect){
          return {left:rect.left, top:rect.top, width:rect.width, height:rect.height, right:rect.right, bottom:rect.bottom};
        }

        function fallbackProductRect(productIndex){
          const p = products[productIndex];
          const width = p && p.oil ? 118 : 158;
          const height = p && p.oil ? 318 : 430;
          const offset = (productIndex - 1.5) * 56;
          const left = (window.innerWidth / 2) - (width / 2) + offset;
          const top = (window.innerHeight * .46) - (height / 2);
          return {left, top, width, height, right:left + width, bottom:top + height};
        }

        function readVisibleProductSources(){
          const sourceMap = new Map();
          const addSource = (productIndex, element, rectOverride=null) => {
            if(!Number.isFinite(productIndex) || productIndex < 0 || productIndex >= products.length || sourceMap.has(productIndex)) return;
            const p = products[productIndex];
            const rect = rectOverride || snapshotRect(element.getBoundingClientRect());
            if(!rect || rect.width < 4 || rect.height < 4) return;
            const computed = element ? window.getComputedStyle(element) : null;
            sourceMap.set(productIndex, {
              productIndex,
              element,
              src:p.img,
              alt:p.alt,
              startRect:rect,
              startOpacity:computed ? Number(computed.opacity || 1) : 1,
              startFilter:computed && computed.filter && computed.filter !== 'none' ? computed.filter : HERO_REST_FILTER
            });
          };

          if(heroImg) addSource(index, heroImg);
          $$('.float-item').forEach(item => addSource(Number(item.dataset.productIndex), item));
          products.forEach((_, productIndex) => {
            if(!sourceMap.has(productIndex)) addSource(productIndex, heroImg || document.body, fallbackProductRect(productIndex));
          });
          return Array.from(sourceMap.values()).sort((a,b) => a.productIndex - b.productIndex);
        }


        function readLayerKitTargetSources(){
          const sources = [];
          products.forEach((product, productIndex) => {
            const target = getLayerKitTarget(productIndex);
            const targetImg = target.img;
            const rect = targetImg ? snapshotRect(targetImg.getBoundingClientRect()) : fallbackProductRect(productIndex);
            sources.push({
              productIndex,
              element:targetImg || document.body,
              src:product.img,
              alt:product.alt,
              startRect:rect,
              startOpacity:1,
              startFilter:'drop-shadow(0 26px 44px rgba(0,0,0,.26)) saturate(1.06)'
            });
          });
          return sources;
        }

        function getLayerKitTarget(productIndex){
          const card = $$('#layers .cards .card')[productIndex] || null;
          const img = card ? card.querySelector('.card__media img') : null;
          return {card, img};
        }

        function removeKitFlightClones(){
          kitFlightItems.forEach(item => {
            if(item.clone){
              gsap.killTweensOf(item.clone);
              item.clone.remove();
            }
          });
          kitFlightItems = [];
        }

        function captureAllProductsForLayerKitFlight(mode='hero'){
          if(allKitFlightActive) return;
          const captureFromTargets = mode === 'targets';
          const flightSources = captureFromTargets ? readLayerKitTargetSources() : readVisibleProductSources();
          allKitFlightActive = true;
          handoffActive = true;
          clearTimeout(timer);
          if(window.gsap) gsap.killTweensOf([stage, orbit, heroImg, '.float-item']);
          setAllLayerKitTargetsHidden(true);
          handoff.classList.add('is-product-following');
          hero.classList.add('is-handoff-active');
          kitFlightItems = flightSources.map(source => {
            const clone = document.createElement('img');
            clone.className = FLIGHT_CLONE_CLASS;
            clone.src = source.src;
            clone.alt = '';
            clone.setAttribute('aria-hidden', 'true');
            clone.dataset.productIndex = String(source.productIndex);
            document.body.appendChild(clone);
            gsap.set(clone, {
              left:source.startRect.left,
              top:source.startRect.top,
              width:source.startRect.width,
              height:source.startRect.height,
              x:0,
              y:0,
              scale:1,
              rotation:0,
              opacity:Math.max(.72, source.startOpacity || 1),
              filter:source.startFilter,
              transformOrigin:'50% 50%',
              force3D:true,
              overwrite:true
            });
            return {...source, clone};
          });
          kitFlightItems.forEach(item => {
            const initialProgress = captureFromTargets ? 1 : 0;
            const pose = getViewportLockedLayerKitPose(item, getDockedLayerKitPose(item, initialProgress), initialProgress);
            gsap.set(item.clone, {
              x:pose.x,
              y:pose.y,
              scale:pose.scale,
              rotation:pose.rotation,
              opacity:1,
              visibility:'visible',
              zIndex:pose.zIndex,
              filter:'drop-shadow(0 28px 42px rgba(0,0,0,.22)) brightness(1.01) saturate(1.04)',
              force3D:true,
              overwrite:true
            });
          });
          setSupportDepth(true);
        }

        function readLayerKitLanding(item){
          const target = getLayerKitTarget(item.productIndex);
          const targetImg = target.img;
          if(!targetImg || !item.startRect){
            return {x:0, y:0, scale:1};
          }
          const targetRect = targetImg.getBoundingClientRect();
          const startCenterX = item.startRect.left + item.startRect.width / 2;
          const startCenterY = item.startRect.top + item.startRect.height / 2;
          const targetCenterX = targetRect.left + targetRect.width / 2;
          const targetCenterY = targetRect.top + targetRect.height / 2;
          const scaleByHeight = targetRect.height / Math.max(item.startRect.height, 1);
          const scaleByWidth = targetRect.width / Math.max(item.startRect.width, 1);
          const targetScale = gsap.utils.clamp(.18, 1.18, Math.min(scaleByHeight, scaleByWidth));
          return {
            x: targetCenterX - startCenterX,
            y: targetCenterY - startCenterY,
            scale: targetScale
          };
        }

        function editorialClamp01(value){
          return gsap.utils.clamp(0, 1, value);
        }

        function editorialSmooth(value){
          const t = editorialClamp01(value);
          return t * t * t * (t * (t * 6 - 15) + 10);
        }

        function syncLayerKitTargetVisibility(){
          if(!activeTargetImgs.length){
            setAllLayerKitTargetsHidden(true);
          }
        }

        function mixLayerKitPose(a, b, t){
          return {
            x:gsap.utils.interpolate(a.x, b.x, t),
            y:gsap.utils.interpolate(a.y, b.y, t),
            scale:gsap.utils.interpolate(a.scale, b.scale, t),
            rotation:gsap.utils.interpolate(a.rotation, b.rotation, t),
            opacity:gsap.utils.interpolate(a.opacity ?? 1, b.opacity ?? 1, t),
            zIndex:b.zIndex || a.zIndex || 999
          };
        }

        function getSafeSourcePose(item){
          return {
            x:0,
            y:0,
            scale:1,
            rotation:0,
            opacity:1,
            zIndex:1000 + (item.productIndex || 0)
          };
        }

        function getEditorialProfile(productIndex){
          const profiles = [
            {x:-182, y: 18, r:-10, phase:.10, z:1003, dismountX:-28, dismountY:-34},
            {x: -58, y:-48, r:  5, phase:1.35, z:1006, dismountX: 18, dismountY:-58},
            {x:  66, y: 22, r: -4, phase:2.55, z:1005, dismountX:-14, dismountY:-26},
            {x: 184, y:-14, r:  9, phase:3.70, z:1004, dismountX: 30, dismountY:-48}
          ];
          return profiles[productIndex] || profiles[0];
        }

        function getEditorialClusterPose(item, progress, mode='cruise'){
          const product = products[item.productIndex] || products[0];
          const vw = Math.max(window.innerWidth, 1);
          const vh = Math.max(window.innerHeight, 1);
          const narrow = vw < 720;
          const cluster = narrow ? .50 : 1;
          const profile = getEditorialProfile(item.productIndex || 0);
          const startCenterX = item.startRect.left + item.startRect.width / 2;
          const startCenterY = item.startRect.top + item.startRect.height / 2;
          const centreX = vw / 2;
          const centreY = vh * (narrow ? .49 : .475);
          const wave = Math.sin((progress * Math.PI * 2.65) + profile.phase);
          const counterWave = Math.cos((progress * Math.PI * 2.20) + profile.phase);
          const inhale = Math.sin(progress * Math.PI);
          const arrivalFloat = Math.sin(editorialClamp01(progress) * Math.PI * 1.15);
          const desiredHeight = (product.oil
            ? gsap.utils.clamp(202, vh * .405, 332)
            : gsap.utils.clamp(258, vh * .515, 430)) * (narrow ? .80 : 1);
          const baseScale = gsap.utils.clamp(.32, 1.34, desiredHeight / Math.max(item.startRect.height, 1));
          const centrePullX = centreX - startCenterX;
          const centrePullY = centreY - startCenterY;
          const modeLift = mode === 'dismount' ? (narrow ? -20 : -46) : mode === 'predock' ? (narrow ? -8 : -18) : 0;
          const modeSpread = mode === 'dismount' ? .72 : mode === 'predock' ? 1.12 : 1;
          return {
            x:centrePullX + (profile.x * cluster * modeSpread) + (wave * (narrow ? 8 : 22)) + (layerKitFlightPointer.x * (narrow ? 7 : 15)) + (mode === 'dismount' ? profile.dismountX : 0),
            y:centrePullY + (profile.y * cluster * modeSpread) + (counterWave * (narrow ? 6 : 16)) + (inhale * (narrow ? -10 : -28)) + (arrivalFloat * modeLift) + (layerKitFlightPointer.y * (narrow ? 5 : 10)) + (mode === 'dismount' ? profile.dismountY : 0),
            scale:baseScale * (1 + (inhale * (mode === 'dismount' ? .095 : .045)) + (wave * .012)),
            rotation:profile.r + (wave * (mode === 'dismount' ? 8.5 : 5.2)) + (layerKitFlightPointer.x * 2.1),
            opacity:1,
            zIndex:profile.z
          };
        }

        function getEditorialHeroDismountPose(item, progress){
          const sourcePose = getSafeSourcePose(item);
          const clusterPose = getEditorialClusterPose(item, progress, 'dismount');
          const t = editorialSmooth(progress / .42);
          const pop = Math.sin(editorialClamp01(progress / .42) * Math.PI);
          const pose = mixLayerKitPose(sourcePose, clusterPose, t);
          const productIndex = item.productIndex || 0;
          pose.y -= pop * (window.innerWidth < 720 ? 12 : 30);
          pose.x += pop * ((productIndex - 1.5) * (window.innerWidth < 720 ? 6 : 14));
          pose.scale *= 1 + (pop * .024);
          pose.rotation += pop * ((productIndex - 1.5) * 2.4);
          pose.zIndex = 1006 + productIndex;
          return pose;
        }

        function getEditorialCruisePose(item, progress){
          const p = editorialClamp01((progress - .26) / .54);
          const basePose = getEditorialClusterPose(item, progress, 'cruise');
          const productIndex = item.productIndex || 0;
          const side = productIndex - 1.5;
          const orbit = Math.sin((p * Math.PI * 2) + (productIndex * .72));
          const orbitB = Math.cos((p * Math.PI * 1.6) + (productIndex * .85));
          basePose.x += side * (window.innerWidth < 720 ? 5 : 18) * Math.sin(p * Math.PI);
          basePose.y += orbit * (window.innerWidth < 720 ? 8 : 20) + orbitB * (window.innerWidth < 720 ? 4 : 12);
          basePose.rotation += orbit * 4 + side * 2.5;
          basePose.scale *= 1 + Math.sin(p * Math.PI) * .035;
          return basePose;
        }

        function getEditorialPreDockPose(item, landingPose, progress){
          const productIndex = item.productIndex || 0;
          const side = productIndex - 1.5;
          const arc = Math.sin(editorialClamp01((progress - .72) / .21) * Math.PI);
          const approach = editorialSmooth((progress - .70) / .23);
          const cruisePose = getEditorialCruisePose(item, progress);
          const haloPose = {
            x:landingPose.x + (side * (window.innerWidth < 720 ? 36 : 84)) - (side * (window.innerWidth < 720 ? 14 : 34) * arc),
            y:landingPose.y - (window.innerWidth < 720 ? 58 : 118) - (arc * (window.innerWidth < 720 ? 24 : 52)),
            scale:landingPose.scale * (1 + arc * .16 + .08),
            rotation:(side * (window.innerWidth < 720 ? 8 : 13)) + (arc * (side < 0 ? -6 : 6)),
            opacity:1,
            zIndex:1012 + productIndex
          };
          return mixLayerKitPose(cruisePose, haloPose, approach);
        }

        function targetImgIsVisibleEnough(item){
          const target = getLayerKitTarget(item.productIndex);
          if(!target.img) return false;
          const r = target.img.getBoundingClientRect();
          const vw = Math.max(window.innerWidth, 1);
          const vh = Math.max(window.innerHeight, 1);
          const margin = window.innerWidth < 720 ? 18 : 28;
          const visibleWidth = Math.min(r.right, vw - margin) - Math.max(r.left, margin);
          const visibleHeight = Math.min(r.bottom, vh - margin) - Math.max(r.top, margin);
          const visibleRatio = Math.max(0, visibleWidth) * Math.max(0, visibleHeight) / Math.max(r.width * r.height, 1);
          return visibleRatio > .92 && r.top >= margin && r.bottom <= vh - margin;
        }

        function getDockedLayerKitPose(item, progress){
          const landing = readLayerKitLanding(item);
          const landingPose = {
            x:landing.x,
            y:landing.y,
            scale:landing.scale,
            rotation:0,
            opacity:1,
            zIndex:1016 + item.productIndex
          };

          if(progress < .20){
            return getEditorialHeroDismountPose(item, progress / .20 * .42);
          }
          if(progress < .42){
            const dismountPose = getEditorialClusterPose(item, .42, 'dismount');
            const cruisePose = getEditorialCruisePose(item, progress);
            return mixLayerKitPose(dismountPose, cruisePose, editorialSmooth((progress - .20) / .22));
          }
          if(progress < .66){
            return getEditorialPreDockPose(item, landingPose, .76 + ((progress - .42) / .24) * .18);
          }

          const preDockPose = getEditorialPreDockPose(item, landingPose, .94);
          const dockT = editorialSmooth((progress - .66) / .12);
          const pose = mixLayerKitPose(preDockPose, landingPose, dockT);
          const side = (item.productIndex || 0) - 1.5;
          if(layerKitFlightDirection >= 0){
            const settle = Math.sin(dockT * Math.PI);
            pose.y -= settle * (window.innerWidth < 720 ? 10 : 22);
            pose.x += settle * side * (window.innerWidth < 720 ? 5 : 12);
            pose.rotation += settle * side * 3.8;
            pose.scale *= 1 + settle * .035;
          }
          pose.zIndex = 1020 + item.productIndex;
          return pose;
        }

        function getLayerKitVisualBounds(item, pose){
          const rect = item.startRect || {left:0, top:0, width:120, height:320};
          const scale = Math.max(pose.scale || 1, .001);
          const rawLeft = rect.left + (pose.x || 0);
          const rawTop = rect.top + (pose.y || 0);
          const centreX = rawLeft + rect.width / 2;
          const centreY = rawTop + rect.height / 2;
          const visualW = Math.max(rect.width * scale, 1);
          const visualH = Math.max(rect.height * scale, 1);
          const radians = ((pose.rotation || 0) * Math.PI) / 180;
          const cos = Math.abs(Math.cos(radians));
          const sin = Math.abs(Math.sin(radians));
          const bboxW = Math.max((visualW * cos) + (visualH * sin), 1);
          const bboxH = Math.max((visualW * sin) + (visualH * cos), 1);
          return {rect, rawLeft, rawTop, centreX, centreY, bboxW, bboxH};
        }

        function keepLayerKitPoseInsideViewport(item, pose, margin=18){
          const vw = Math.max(window.innerWidth, 1);
          const vh = Math.max(window.innerHeight, 1);
          const safe = { ...pose };
          const maxW = Math.max(vw - (margin * 2), 1);
          const maxH = Math.max(vh - (margin * 2), 1);

          let bounds = getLayerKitVisualBounds(item, safe);
          if(bounds.bboxW > maxW || bounds.bboxH > maxH){
            const shrink = Math.min(maxW / bounds.bboxW, maxH / bounds.bboxH);
            safe.scale *= shrink;
            bounds = getLayerKitVisualBounds(item, safe);
          }

          const clampedCentreX = gsap.utils.clamp(
            margin + bounds.bboxW / 2,
            Math.max(margin + bounds.bboxW / 2, vw - margin - bounds.bboxW / 2),
            bounds.centreX
          );
          const clampedCentreY = gsap.utils.clamp(
            margin + bounds.bboxH / 2,
            Math.max(margin + bounds.bboxH / 2, vh - margin - bounds.bboxH / 2),
            bounds.centreY
          );

          const dx = clampedCentreX - bounds.centreX;
          const dy = clampedCentreY - bounds.centreY;
          safe.x = (safe.x || 0) + dx;
          safe.y = (safe.y || 0) + dy;
          return safe;
        }

        function getViewportLockedLayerKitPose(item, pose, progress){
          const safeMargin = window.innerWidth < 720 ? 26 : 38;
          if(progress < .075) return pose;
          const clamped = progress > .992 && targetImgIsVisibleEnough(item)
            ? keepLayerKitPoseInsideViewport(item, pose, 12)
            : keepLayerKitPoseInsideViewport(item, pose, safeMargin);
          if(progress < .28){
            return mixLayerKitPose(pose, clamped, editorialSmooth((progress - .075) / .205));
          }
          return clamped;
        }

        function updateAllProductsToLayerKitFlight(self){
          if(!allKitFlightActive) captureAllProductsForLayerKitFlight();
          if(!allKitFlightActive) return;
          const progress = gsap.utils.clamp(0, 1, self.progress || 0);
          layerKitFlightDirection = self && self.direction ? self.direction : layerKitFlightDirection;
          syncLayerKitTargetVisibility();
          const linear = gsap.utils.clamp(0, 1, (progress - KIT_FLIGHT_MOVE_START) / Math.max(1 - KIT_FLIGHT_MOVE_START, .001));
          const easedProgress = gsap.parseEase(KIT_FLIGHT_EASE)(linear);
          const reverseDismount = layerKitFlightDirection < 0 && linear > .72;
          const blend = linear > .58 ? .04 : (reverseDismount ? .06 : .12);
          const scrollSyncedProgress = gsap.utils.interpolate(linear, easedProgress, blend);
          const poseProgress = editorialClamp01(scrollSyncedProgress);
          kitFlightItems.forEach(item => {
            const pose = getViewportLockedLayerKitPose(item, getDockedLayerKitPose(item, poseProgress), poseProgress);
            gsap.to(item.clone, {
              x:pose.x,
              y:pose.y,
              scale:pose.scale,
              rotation:pose.rotation,
              opacity:1,
              visibility:'visible',
              zIndex:pose.zIndex,
              filter:'drop-shadow(0 30px 46px rgba(0,0,0,.23)) brightness(1.01) saturate(1.04)',
              duration:reverseDismount ? .64 : .34,
              ease:reverseDismount ? 'power3.out' : 'power2.out',
              force3D:true,
              overwrite:'auto'
            });
          });
        }

        function releaseAllProductsToLayerKitCards(){
          if(!allKitFlightActive) return;
          removeKitFlightClones();
          setAllLayerKitTargetsHidden(false);
          allKitFlightActive = false;
          handoffActive = false;
          handoff.classList.remove('is-product-following');
          hero.classList.remove('is-handoff-active');
          setSupportDepth(true);
          queue();
        }

        function cancelAllProductsLayerKitFlight(){
          releaseAllProductsToLayerKitCards();
        }

        resetHeroHandoff = () => {
          releaseAllProductsToLayerKitCards();
          handoffActive = false;
          clearLayerKitTargetState();
          hero.classList.remove('is-handoff-active');
          handoff.classList.remove('is-product-following');
          setSupportDepth(true);
        };
        window.addEventListener('scroll', () => {
          if(handoffActive && handoffIsAwayFromHero()) resetHeroHandoff();
        }, {passive:true});

        ScrollTrigger.create({
          trigger:'.handoff',
          start:'top bottom',
          endTrigger:'#layers .cards',
          end:'top 68%',
          invalidateOnRefresh:true,
          onEnter:function(self){ captureAllProductsForLayerKitFlight('hero'); updateAllProductsToLayerKitFlight(self); },
          onEnterBack:function(self){ captureAllProductsForLayerKitFlight('targets'); updateAllProductsToLayerKitFlight(self); },
          onUpdate:updateAllProductsToLayerKitFlight,
          onLeave:releaseAllProductsToLayerKitCards,
          onLeaveBack:cancelAllProductsLayerKitFlight
        });

        const handoffPanelTl = gsap.timeline({
          scrollTrigger:{
            trigger:'.handoff',
            start:'top top',
            end:'bottom bottom',
            scrub:PANEL_SCRUB,
            pin:'.handoff-panel',
            anticipatePin:1,
            invalidateOnRefresh:true
          }
        });

        handoffPanelTl
          .fromTo('.handoff-copy', {y:30, opacity:0}, {y:0, opacity:1, duration:.18, ease:'none'}, .06)
          .fromTo('.scroll-badge', {y:80, opacity:0, rotate:5}, {y:0, opacity:1, rotate:0, duration:.24, ease:'none'}, .18)
          .fromTo('.handoff-type span:first-child', {x:'-8vw'}, {x:'4vw', duration:1, ease:'none'}, 0)
          .fromTo('.handoff-type span:last-child', {x:'8vw'}, {x:'-4vw', duration:1, ease:'none'}, 0)
          .fromTo('.giant-gloss', {scale:.78, rotate:-16, y:40}, {scale:1.08, rotate:12, y:-20, duration:1, ease:'none'}, 0);
        

        gsap.to('.final img', {y:-70, rotate:-3, ease:'none', scrollTrigger:{trigger:'.final', start:'top bottom', end:'bottom top', scrub:true}});
      } else {
        document.querySelectorAll('.reveal').forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
      }
      
    });
