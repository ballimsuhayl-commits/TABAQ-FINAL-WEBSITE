/* TABAQ Rev41 Production Split CSS
   Extracted from Rev40 single-file preview. Keep order stable. */

/* ===== inline-style-01 ===== */
/* ============================================================
       TABAQ REV 24 CSS ARCHITECTURE
       00 tokens/base | 01 navigation | 02 hero | 03 handoff |
       04 ticker/ritual | 05 layer kits | 06 final | 07 responsive
       ============================================================ */
    :root{
      --ink:#191715;
      --paper:#fffaf1;
      --chalk:#ffffff;
      --cream:#fff3df;
      --active:#ff4b39;
      --active2:#ffb84d;
      --black:#141414;
      --muted:rgba(20,20,20,.68);
      --line:rgba(20,20,20,.14);
      --radius:32px;
      --shadow:0 30px 85px rgba(0,0,0,.28);
      --display:"Archivo Black", Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      --body:"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    
    

    
    

    
    

    *{box-sizing:border-box}
    html{background:var(--paper);scroll-behavior:smooth}
    body{margin:0;min-width:320px;overflow-x:hidden;background:var(--paper);color:var(--ink);font-family:var(--body);-webkit-font-smoothing:antialiased;text-rendering:geometricPrecision}
    img{display:block;max-width:100%;user-select:none;-webkit-user-drag:none}
    a{color:inherit;text-decoration:none}
    button{font:inherit;color:inherit}
    ::selection{background:var(--active2);color:var(--ink)}

    .site{position:relative;overflow:clip;background:var(--paper)}
.nav{height:112px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(20px,7vw,138px);background:#fff;position:relative;z-index:40;border-bottom:1px solid rgba(0,0,0,.04)}
    .brand{display:flex;align-items:center;gap:20px;font-weight:900;letter-spacing:-.05em;font-size:clamp(28px,3vw,46px);line-height:.9;color:#24548d;text-shadow:2px 2px 0 #fff, 4px 4px 0 #ef3e3e}
    .brand small{display:block;font-size:9px;letter-spacing:.06em;text-transform:uppercase;color:#fff;background:#e83a2b;border-radius:999px;padding:4px 10px;text-shadow:none;margin-top:1px;width:max-content}
    .nav__divider{height:22px;width:1px;background:#1c1c1c;opacity:.5;margin-left:18px}
    .nav__links{display:flex;align-items:center;gap:34px;margin-right:auto;margin-left:34px;font-size:15px;font-weight:700;color:#171717}
    .nav__links a{position:relative}
    .nav__links a:after{content:"";position:absolute;left:0;right:0;bottom:-6px;height:2px;background:currentColor;transform:scaleX(0);transform-origin:right;transition:transform .25s ease}
    .nav__links a:hover:after{transform:scaleX(1);transform-origin:left}
    .order-btn{min-height:58px;padding:0 34px;border:0;border-radius:999px;background:#ff2d12;color:#fff;display:inline-flex;align-items:center;gap:13px;font-weight:900;box-shadow:0 14px 35px rgba(255,45,18,.26);cursor:pointer;transition:transform .22s ease,box-shadow .22s ease}
    .order-btn:hover{transform:translateY(-3px);box-shadow:0 20px 50px rgba(255,45,18,.33)}
    .order-mark{width:25px;height:14px;position:relative;display:inline-block}
    .order-mark:before{content:"";position:absolute;inset:0;border-radius:999px;background:white;clip-path:polygon(0 0,100% 0,72% 100%,33% 100%,44% 50%,0 50%)}

    
    .hero{--bg:#ff4b39;min-height:calc(100svh - 150px);position:relative;background:var(--bg);transition:background-color .6s ease;overflow:hidden;isolation:isolate}
    .hero:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 78% 22%,rgba(255,255,255,.43),transparent 20%),radial-gradient(circle at 22% 76%,rgba(255,255,255,.2),transparent 25%),linear-gradient(180deg,rgba(255,255,255,.94) 0%,rgba(255,255,255,.94) 45%,rgba(255,255,255,0) 45.2%);z-index:-2;transition:opacity .5s ease}
    .hero.is-color:before{opacity:0}
    .hero__inner{position:relative;min-height:calc(100svh - 150px);padding:clamp(42px,5vw,76px) clamp(20px,9vw,138px) 72px;display:grid;grid-template-columns:minmax(260px,490px) 1fr minmax(220px,370px);align-items:center;gap:30px}
    .hero__copy{position:relative;z-index:8;align-self:end;padding-bottom:22px;color:#1f1f1f;mix-blend-mode:normal}
    .hero.is-color .hero__copy{color:#fff}
    .eyebrow{font-size:13px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:10px;margin-bottom:18px}
    .eyebrow:before{content:"";width:34px;height:3px;background:currentColor;border-radius:999px}
    .hero__copy p{font-size:17px;line-height:1.55;font-weight:800;max-width:430px;margin:0 0 27px;color:currentColor}
    .hero__actions{display:flex;align-items:center;gap:13px;flex-wrap:wrap}
    .pill{height:54px;border-radius:999px;border:1.5px solid rgba(0,0,0,.82);background:#fff;color:#111;padding:0 30px;display:inline-flex;align-items:center;gap:13px;font-weight:900;cursor:pointer;box-shadow:0 10px 22px rgba(0,0,0,.04)}
    .hero.is-color .pill{border-color:rgba(255,255,255,.88)}
    .ghost-pill{background:rgba(255,255,255,.16);color:currentColor;backdrop-filter:blur(10px)}

    .mega-type{position:absolute;inset:0;z-index:1;pointer-events:none;font-family:var(--display);font-weight:900;text-transform:uppercase;letter-spacing:-.075em;line-height:.78;color:#4a4a4a;opacity:.98;display:grid;align-items:center;padding:0 clamp(18px,7.4vw,132px)}
    .hero.is-color .mega-type{color:#fff}
    .mega-type__top{font-size:clamp(92px,14.3vw,260px);white-space:nowrap;transform:translateY(-.16em)}
    .mega-type__line{display:flex;align-items:center;justify-content:space-between;gap:clamp(180px,29vw,560px);font-size:clamp(95px,14.8vw,275px);white-space:nowrap}
    .mega-type__small{position:absolute;left:clamp(28px,9vw,136px);top:clamp(150px,24vh,260px);font-size:clamp(78px,9vw,160px);letter-spacing:-.09em;color:rgba(0,0,0,.18)}
    .hero.is-color .mega-type__small{color:rgba(255,255,255,.55)}

    .stage{position:absolute;left:50%;top:50%;width:min(47vw,610px);height:min(72vh,710px);transform:translate(-50%,-49%);z-index:6;display:grid;place-items:center;pointer-events:none;perspective:1300px}
    .product-orbit{position:absolute;inset:0;display:grid;place-items:center;transform-style:preserve-3d;will-change:transform,opacity,filter}
    .hero-product{height:clamp(410px,66vh,740px);width:auto;object-fit:contain;filter:drop-shadow(0 40px 54px rgba(0,0,0,.32));transform-origin:center center;will-change:transform,opacity,filter}
    .hero-product.oil{height:clamp(390px,58vh,620px)}
    .product-shadow{position:absolute;left:50%;bottom:6%;width:260px;height:42px;transform:translateX(-50%);border-radius:50%;background:rgba(0,0,0,.22);filter:blur(16px);z-index:-1;opacity:.75}

    .float-item{position:absolute;z-index:5;pointer-events:none;filter:drop-shadow(0 24px 44px rgba(0,0,0,.22));will-change:transform}
    .float-item--top{left:25%;top:5%;width:155px;transform:rotate(-17deg)}
    .float-item--right{right:-52px;top:13%;width:250px;filter:blur(7px) drop-shadow(0 20px 45px rgba(0,0,0,.18));opacity:.86}
    .float-item--low{right:24%;bottom:1%;width:230px;transform:rotate(-26deg)}

    
    .hero.is-manual-select .stage{z-index:8}
    .hero.is-manual-select .product-orbit{filter:drop-shadow(0 42px 70px rgba(0,0,0,.16))}
    
    .hero.is-manual-select .float-item{opacity:.84;filter:blur(1.6px) brightness(.9) saturate(.88) drop-shadow(0 18px 34px rgba(0,0,0,.16))}
    .hero.is-manual-select .float-item--right{opacity:.74;filter:blur(6.5px) brightness(.82) saturate(.76) drop-shadow(0 18px 42px rgba(0,0,0,.14))}
    
    .hero.is-handoff-active .stage{opacity:1}
.product-dial{position:absolute;left:50%;bottom:22px;transform:translateX(-50%);display:flex;gap:8px;z-index:20;padding:8px;border-radius:999px;background:rgba(255,255,255,.34);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.5)}
    .dial-dot{width:44px;height:44px;border-radius:999px;border:0;background:rgba(0,0,0,.16);cursor:pointer;display:grid;place-items:center;transition:transform .18s ease,background .18s ease;color:#111;font-weight:900}
    .dial-dot.is-active{background:#111;color:#fff;transform:scale(1.08)}

    
    .handoff{position:relative;height:282svh;background:#fff;z-index:3}
    .handoff-panel{position:relative;height:100svh;overflow:hidden;background:#fff;display:grid;place-items:center;isolation:isolate}
    .handoff-panel:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,var(--active) 0%,var(--active) 45%,#fff 45.2%,#fff 100%);z-index:-3}
    .handoff-copy{position:absolute;left:clamp(20px,9vw,138px);top:17svh;z-index:7;width:min(430px,38vw);color:#fff}
    .handoff-copy p{margin:0 0 24px;font-size:17px;line-height:1.5;font-weight:850;color:#fff}
    .handoff-copy .pill{border-color:#fff;color:#121212}
    .handoff-type{position:absolute;left:50%;bottom:2vh;transform:translateX(-50%);font-family:var(--display);font-size:clamp(78px,17.3vw,315px);line-height:.78;letter-spacing:-.085em;white-space:nowrap;color:#ffc414;text-transform:uppercase;z-index:1;text-shadow:0 1px 0 rgba(0,0,0,.03)}
    .handoff-type span{display:inline-block}
    
    .hero.is-handoff-active{
      overflow:visible;
      z-index:80;
    }
    .hero.is-handoff-active .stage{opacity:1}
    .stage.is-scroll-following{
      position:fixed!important;
      left:var(--follow-left,50vw);
      top:var(--follow-top,50vh);
      width:var(--follow-width,min(47vw,610px));
      height:var(--follow-height,min(72vh,710px));
      transform:none;
      z-index:999;
      opacity:1;
      pointer-events:none;
      will-change:transform,opacity;
    }
    .stage.is-scroll-following .product-orbit{
      will-change:transform,opacity,filter;
    }
    .giant-gloss{position:absolute;right:16%;top:19%;width:210px;height:210px;border-radius:58% 42% 54% 46%;background:radial-gradient(circle at 30% 20%,#fff8,transparent 19%),linear-gradient(135deg,#ffe2a7,#ff6d58 44%,#ca173b);z-index:4;filter:drop-shadow(0 25px 58px rgba(0,0,0,.18))}

    
    .section{position:relative;padding:clamp(76px,9vw,135px) clamp(20px,9vw,138px);background:var(--paper);z-index:4}
    .section.dark{background:#151515;color:#fff}
    .section__head{display:flex;align-items:end;justify-content:space-between;gap:32px;margin-bottom:42px}
    .section h2{font-family:var(--display);font-size:clamp(48px,9vw,150px);letter-spacing:-.075em;line-height:.82;margin:0;text-transform:uppercase}
    .section p.lead{font-size:18px;line-height:1.55;font-weight:750;color:var(--muted);max-width:520px;margin:0}.dark p.lead{color:rgba(255,255,255,.72)}
    .cards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
    .card{border:1px solid var(--line);border-radius:30px;background:#fff;padding:18px;min-height:330px;overflow:hidden;position:relative;box-shadow:0 20px 55px rgba(0,0,0,.06)}
    .card:nth-child(2){background:#e7f0d8}.card:nth-child(3){background:#efe0fb}.card:nth-child(4){background:#ffe1d6}
    .card__media{height:210px;display:grid;place-items:center;margin-bottom:12px}
    .card__media img{max-height:220px;width:auto;object-fit:contain;filter:drop-shadow(0 20px 34px rgba(0,0,0,.22))}
    .card h3{font-size:23px;margin:0 0 8px;letter-spacing:-.04em;line-height:1;font-weight:950}.card p{margin:0;color:rgba(0,0,0,.64);font-weight:650;line-height:1.42}
    #layers .card::after{content:"";position:absolute;inset:-2px;border-radius:inherit;pointer-events:none;opacity:0;transform:scale(.982);transition:opacity .42s cubic-bezier(.2,.9,.18,1),transform .42s cubic-bezier(.2,.9,.18,1);background:radial-gradient(circle at 50% 22%,rgba(255,255,255,.68),rgba(255,255,255,0) 31%),linear-gradient(135deg,rgba(255,255,255,.22),rgba(255,196,20,.16),rgba(255,109,88,.10));mix-blend-mode:screen}
    #layers .card.is-dock-receiving{border-color:rgba(0,0,0,.42);box-shadow:0 34px 88px rgba(0,0,0,.16),0 0 0 1px rgba(255,255,255,.46) inset}
    #layers .card.is-dock-receiving::after{opacity:.78;transform:scale(1)}
    #layers .card.is-dock-settled::after{opacity:.14;transform:scale(.992);transition-duration:.7s}
    #layers .card.is-dock-receiving h3{filter:contrast(1.08);letter-spacing:-.052em}
    #layers .card.is-dock-receiving .card__media img{filter:drop-shadow(0 30px 48px rgba(0,0,0,.28)) saturate(1.07) brightness(1.015)}
    .ticker-section{background:#ffcc1b;color:#141414;padding:38px 0;overflow:hidden;border-block:2px solid #111;position:relative;z-index:5}
    .big-ticker{display:flex;gap:30px;width:max-content;animation:ticker 24s linear infinite;font-family:var(--display);font-size:clamp(44px,8vw,128px);line-height:.8;letter-spacing:-.06em;text-transform:uppercase;white-space:nowrap}.big-ticker span{padding-right:30px}@keyframes ticker{to{transform:translateX(-50%)}}
    .final{min-height:88svh;background:linear-gradient(135deg,#fff6de,#fff 55%,#ffe2d8);display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:40px;padding:clamp(76px,10vw,150px) clamp(20px,9vw,138px);overflow:hidden;position:relative;z-index:5}.final h2{font-family:var(--display);font-size:clamp(56px,10vw,170px);line-height:.8;letter-spacing:-.08em;text-transform:uppercase;margin:0 0 24px}.final p{font-size:19px;line-height:1.55;font-weight:750;color:var(--muted);max-width:540px}.final img{height:min(72vh,760px);margin:auto;object-fit:contain;filter:drop-shadow(0 42px 80px rgba(0,0,0,.22))}

    .reveal{opacity:0;transform:translateY(40px)}

    @media (max-width:1100px){
      .nav{height:94px}.nav__links{display:none}.hero__inner{grid-template-columns:1fr;min-height:calc(100svh - 132px);padding-top:28px}.hero__copy{align-self:start;width:min(440px,64vw);padding-top:32px}.stage{width:70vw;top:56%;}.hero-product{height:58vh}.mega-type{padding-inline:24px}.mega-type__top{font-size:15vw}.mega-type__line{font-size:17vw;gap:34vw}.float-item--right{display:none}.float-item--top{left:56%;top:9%;width:120px}.float-item--low{right:4%;bottom:7%;width:155px}.handoff{height:274svh}.handoff-copy{width:52vw}.cards{grid-template-columns:repeat(2,minmax(0,1fr))}.final{grid-template-columns:1fr}.final img{height:min(62vh,620px)}
    }
    @media (max-width:720px){
.nav{height:76px;padding-inline:18px}.brand{font-size:28px}.brand small{font-size:7px}.order-btn{min-height:46px;padding-inline:18px}.hero{min-height:calc(100svh - 108px)}.hero__inner{min-height:calc(100svh - 108px);padding:18px 18px 80px}.hero__copy{width:100%;padding-top:4px}.hero__copy p{font-size:14px;max-width:300px}.hero__actions{display:none}.mega-type{align-items:center;padding-inline:16px}.mega-type__small{font-size:76px;left:18px;top:132px}.mega-type__top{font-size:17vw;transform:translateY(-.5em)}.mega-type__line{font-size:21vw;gap:16vw;display:block}.mega-type__line span:last-child{display:block;text-align:right}.stage{width:92vw;height:58vh;top:57%}.hero-product{height:52vh}.float-item--top,.float-item--low{display:none}.product-dial{bottom:16px}.dial-dot{width:38px;height:38px}.handoff{height:264svh}.handoff-copy{left:18px;top:13svh;width:74vw}.handoff-copy p{font-size:14px}.handoff-type{font-size:22vw;bottom:9vh}.giant-gloss{width:132px;height:132px;right:-20px}.section{padding:76px 18px}.section__head{display:block}.section p.lead{font-size:16px;margin-top:16px}.cards{grid-template-columns:1fr}.card{min-height:300px}.final{padding:76px 18px}.final p{font-size:16px}.final img{height:54vh}}


    
    .hero::after{content:"";position:absolute;inset:0;z-index:2;pointer-events:none;opacity:.075;background-image:radial-gradient(circle at 1px 1px, rgba(255,255,255,.95) 1px, transparent 0);background-size:6px 6px;mix-blend-mode:soft-light}
    .product-dial{gap:6px;padding:7px 9px 7px 12px;background:rgba(255,255,255,.42);box-shadow:0 20px 55px rgba(0,0,0,.12);border-color:rgba(255,255,255,.72)}
    .product-dial::before{content:"Select layer";display:inline-flex;align-items:center;padding:0 10px 0 4px;font-size:10px;line-height:1;font-weight:950;letter-spacing:.1em;text-transform:uppercase;color:rgba(0,0,0,.62);white-space:nowrap}
    .dial-dot{position:relative;overflow:hidden;width:42px;height:42px;isolation:isolate;transition:width .38s cubic-bezier(.2,.9,.18,1),transform .24s ease,background .24s ease,color .24s ease,box-shadow .24s ease,filter .24s ease}
    .dial-dot::after{content:attr(data-short);display:inline-block;max-width:0;opacity:0;transform:translateX(-5px);overflow:hidden;white-space:nowrap;font-size:11px;letter-spacing:.02em;font-weight:950;transition:max-width .38s cubic-bezier(.2,.9,.18,1),opacity .2s ease,transform .28s ease;margin-left:0}
    .dial-dot.is-active{width:112px;background:#111;color:#fff;box-shadow:0 14px 34px rgba(0,0,0,.18);transform:translateY(-1px) scale(1.02)}
    .dial-dot.is-active::after,.dial-dot:hover::after{max-width:70px;opacity:1;transform:translateX(0);margin-left:8px}
    .dial-dot:hover:not(.is-active){background:rgba(255,255,255,.72);transform:translateY(-2px);filter:saturate(1.1)}
    .dial-dot:focus-visible{outline:2px solid #111;outline-offset:3px}
    .hero.is-manual-select .float-item{opacity:.9;transform-style:preserve-3d;transition:none}
    .hero.is-manual-select .float-item--top{filter:blur(1.15px) brightness(.96) saturate(.9) drop-shadow(0 18px 36px rgba(0,0,0,.16))}
    .hero.is-manual-select .float-item--low{filter:blur(1.75px) brightness(.9) saturate(.84) drop-shadow(0 20px 42px rgba(0,0,0,.15))}
    .hero.is-manual-select .float-item--right{opacity:.82;filter:blur(5.2px) brightness(.86) saturate(.78) drop-shadow(0 18px 42px rgba(0,0,0,.14))}
    .hero-product{backface-visibility:hidden;transform-style:preserve-3d}
    .product-shadow{transform-origin:50% 50%}
    .card{transition:transform .36s cubic-bezier(.2,.9,.18,1),box-shadow .36s ease,border-color .36s ease,filter .36s ease}
    .card__media img{transition:filter .36s ease}
    .card.is-active-layer-card{border-color:rgba(0,0,0,.48);box-shadow:0 28px 80px rgba(0,0,0,.13);transform:translateY(-4px)}
    .card.is-active-layer-card h3::before{content:"Selected layer";display:block;margin-bottom:8px;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(0,0,0,.52);font-weight:950}
    .card.is-active-layer-card .card__media img{filter:drop-shadow(0 26px 44px rgba(0,0,0,.26)) saturate(1.06)}
    @media (max-width:620px){.product-dial::before{display:none}.dial-dot.is-active{width:74px}.dial-dot::after{font-size:10px}.dial-dot.is-active::after{max-width:40px}}
    



    /* Rev 23 — settled kit world: calmer post-dock commercial rest state */
    #layers{
      overflow:hidden;
      isolation:isolate;
      transition:background-color .95s cubic-bezier(.2,.9,.18,1), filter .95s ease;
    }
    #layers::before{
      content:"";
      position:absolute;
      inset:0;
      z-index:0;
      pointer-events:none;
      opacity:.34;
      background:
        radial-gradient(circle at 24% 10%, rgba(255,196,20,.22), transparent 27%),
        radial-gradient(circle at 76% 18%, rgba(255,75,57,.18), transparent 29%),
        linear-gradient(180deg, rgba(255,255,255,.035), rgba(255,255,255,0) 52%);
      transform:scale(1.04);
      transition:opacity 1.05s cubic-bezier(.2,.9,.18,1), transform 1.05s cubic-bezier(.2,.9,.18,1);
    }
    #layers > *{position:relative;z-index:1}
    #layers .section__head,
    #layers .cards,
    .final{will-change:transform,opacity}
    #layers .cards{transform-origin:50% 36%;}
    #layers.is-kit-world-settled::before{opacity:.13;transform:scale(1)}
    #layers.is-kit-world-settled .card{box-shadow:0 18px 48px rgba(0,0,0,.11)}
    #layers.is-kit-world-settled .card.is-dock-settled::after{opacity:.08}

    @media (prefers-reduced-motion:reduce){
      *,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.reveal{opacity:1!important;transform:none!important}.hero-product{transform:none!important;opacity:1!important}
    }

    
    .mega-type{will-change:transform,opacity,filter;transform-origin:top center;}
    .mega-type__small,.mega-type__top,.mega-type__line{will-change:transform,opacity,filter;}
    .hero-color-curtain{z-index:0;}
    

    
    .hero-color-curtain{position:absolute;inset:0;z-index:0;pointer-events:none;background:var(--bg);transform:scaleY(0);transform-origin:top center;opacity:0;will-change:transform,opacity,background-color}
    


    
    .nav{height:104px;padding-inline:clamp(22px,7vw,138px)}
    .brand{letter-spacing:-.055em}
    .nav__links{gap:30px}
    .order-btn{min-height:54px;padding-inline:30px}
    .hero{min-height:calc(100svh - 104px)}
    .hero__inner{min-height:calc(100svh - 104px)}
    .hero__copy{display:none!important}
    .handoff-copy p{max-width:360px}
    @media (max-width:980px){.nav{height:90px}.hero{min-height:calc(100svh - 90px)}.hero__inner{min-height:calc(100svh - 90px)}}
    @media (max-width:620px){.nav{height:76px}.hero{min-height:calc(100svh - 76px)}.hero__inner{min-height:calc(100svh - 76px)}}
    

  

    
    .mega-type__small{
      left:clamp(54px,10.8vw,172px);
      top:clamp(78px,15.6vh,168px);
      font-size:clamp(88px,10.8vw,182px);
      line-height:.82;
      opacity:1;
      color:rgba(0,0,0,.24);
      z-index:1;
      transform:translate3d(0,0,0);
      text-shadow:none;
    }
    .hero.is-color .mega-type__small{color:rgba(255,255,255,.68)}
    .mega-type > div:not(.mega-type__small){position:relative;z-index:2}
    .hero .float-item{pointer-events:auto;cursor:pointer;touch-action:manipulation}
    .hero .float-item:focus-visible{outline:2px solid rgba(255,255,255,.95);outline-offset:8px;border-radius:24px}
    .hero.is-handoff-active .float-item{pointer-events:none}
    

  

/* REV61 — ULTIMATE WEBSITE CONTENT SYSTEM START
       Purpose: build the full site around the preserved animated hero without adding a second shell, router, cart, or renderer. */
    :root{
      --rev61-grid:minmax(20px,1fr) minmax(0,1180px) minmax(20px,1fr);
      --rev61-ink:#171412;
      --rev61-soft:#fff7e8;
      --rev61-sun:#ffcf21;
      --rev61-red:#ff3f25;
      --rev61-blue:#24548d;
      --rev61-mint:#aee6df;
      --rev61-pink:#ffc2d9;
      --rev61-amber:#e4a44b;
      --rev61-juice:#ff8557;
    }
    .nav{position:sticky;top:0}
    .hero-brief{position:absolute;left:clamp(18px,7vw,112px);bottom:clamp(88px,11vh,142px);z-index:11;width:min(410px,42vw);color:#151515;display:grid;gap:16px;pointer-events:auto}
    .hero.is-color .hero-brief{color:#fff}
    .hero-brief__kicker,.rev61-kicker{font-size:11px;font-weight:950;letter-spacing:.14em;text-transform:uppercase;line-height:1.1}
    .hero-brief__title{margin:0;font-family:var(--display);font-size:clamp(36px,5.4vw,86px);line-height:.82;letter-spacing:-.078em;text-transform:uppercase;max-width:7.2em;text-wrap:balance}
    .hero-brief__copy{margin:0;font-size:clamp(14px,1.22vw,17px);line-height:1.45;font-weight:850;max-width:350px;color:currentColor}
    .hero-brief__actions{display:flex;gap:10px;flex-wrap:wrap}.hero-brief .pill{height:48px;padding-inline:20px;border-color:currentColor}.hero-brief .ghost-pill{background:rgba(255,255,255,.2)}

    .rev61-section{position:relative;z-index:6;display:grid;grid-template-columns:var(--rev61-grid);padding:clamp(78px,9vw,142px) 0;background:var(--paper);color:var(--rev61-ink)}
    .rev61-section > *{grid-column:2}.rev61-dark{background:#141414;color:#fff}.rev61-warm{background:linear-gradient(135deg,#fff8df,#fff 44%,#ffe4d8)}
    .rev61-head{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(260px,.7fr);gap:clamp(24px,5vw,72px);align-items:end;margin-bottom:clamp(28px,5vw,64px)}
    .rev61-head h2{font-family:var(--display);font-size:clamp(52px,10vw,156px);line-height:.8;letter-spacing:-.08em;text-transform:uppercase;margin:0;text-wrap:balance}
    .rev61-head p,.rev61-lead{font-size:clamp(16px,1.55vw,21px);line-height:1.5;font-weight:760;color:rgba(20,20,20,.68);margin:0}.rev61-dark .rev61-head p,.rev61-dark .rev61-lead{color:rgba(255,255,255,.72)}
    .rev61-proof-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.rev61-proof{border:1px solid rgba(20,20,20,.12);border-radius:30px;background:#fff;padding:24px;min-height:210px;box-shadow:0 22px 55px rgba(0,0,0,.055)}
    .rev61-proof b{display:block;font-family:var(--display);font-size:clamp(34px,4.8vw,72px);line-height:.82;letter-spacing:-.07em;text-transform:uppercase;margin-bottom:18px}.rev61-proof p{margin:0;font-weight:760;line-height:1.45;color:rgba(20,20,20,.66)}

    .section.dark .section__head h2::after{content:' — no guesswork';display:block;font-family:var(--body);font-size:clamp(13px,1.2vw,17px);letter-spacing:.02em;line-height:1.35;text-transform:none;font-weight:850;color:rgba(255,255,255,.68);margin-top:22px;max-width:420px}
    .card h3 small{display:block;margin-top:8px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:rgba(0,0,0,.5)}

    .kit-menu{background:#fffaf1}.kit-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.kit-card{--kit:#ddd;position:relative;overflow:hidden;border:1px solid rgba(20,20,20,.12);border-radius:32px;background:linear-gradient(145deg,color-mix(in srgb,var(--kit),#fff 62%),#fff);min-height:420px;padding:22px;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;transition:transform .32s cubic-bezier(.2,.9,.18,1),box-shadow .32s ease,border-color .32s ease}
    .kit-card:hover,.kit-card.is-selected{transform:translateY(-6px);box-shadow:0 30px 82px rgba(0,0,0,.11);border-color:rgba(20,20,20,.34)}.kit-card::before{content:attr(data-num);font-family:var(--display);font-size:110px;letter-spacing:-.08em;line-height:.75;color:rgba(20,20,20,.1)}
    .kit-card h3{font-family:var(--display);font-size:clamp(36px,4.7vw,66px);line-height:.8;letter-spacing:-.075em;text-transform:uppercase;margin:14px 0 14px}.kit-card p{margin:0;color:rgba(20,20,20,.68);font-weight:730;line-height:1.42}.kit-card__meta{display:grid;gap:10px}.kit-price{display:flex;align-items:center;justify-content:space-between;border-top:1px solid rgba(20,20,20,.14);padding-top:16px;font-weight:950}.kit-tags{display:flex;gap:7px;flex-wrap:wrap}.kit-tags span{border:1px solid rgba(20,20,20,.15);border-radius:999px;padding:7px 9px;font-size:11px;font-weight:900;background:rgba(255,255,255,.5)}
    .kit-detail{margin-top:18px;display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:16px;align-items:stretch}.kit-detail__panel{border-radius:34px;background:#151515;color:#fff;padding:clamp(24px,4vw,46px);min-height:330px;display:grid;align-content:center;gap:18px}.kit-detail__panel h3{font-family:var(--display);font-size:clamp(48px,8vw,116px);line-height:.8;letter-spacing:-.08em;text-transform:uppercase;margin:0}.kit-detail__panel p{margin:0;color:rgba(255,255,255,.75);font-weight:760;line-height:1.48}.kit-detail__layers{border:1px solid rgba(20,20,20,.12);background:#fff;border-radius:34px;padding:18px;display:grid;gap:10px}.kit-detail__layers div{display:grid;grid-template-columns:48px 1fr 1fr;gap:12px;align-items:center;border-radius:22px;background:#fff7e8;padding:14px}.kit-detail__layers b{font-weight:950}.kit-detail__layers span:first-child{font-family:var(--display);font-size:28px;letter-spacing:-.06em}.kit-detail__layers small{font-weight:760;color:rgba(20,20,20,.58)}

    .chooser{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.chooser-card{border-radius:28px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.07);padding:22px;min-height:230px}.chooser-card b{display:block;font-family:var(--display);font-size:clamp(32px,4.2vw,58px);line-height:.84;letter-spacing:-.07em;text-transform:uppercase;margin-bottom:16px}.chooser-card p{margin:0;color:rgba(255,255,255,.7);font-weight:750;line-height:1.45}.chooser-card span{display:inline-flex;margin-bottom:20px;border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:8px 10px;font-size:11px;text-transform:uppercase;font-weight:950;letter-spacing:.1em;color:rgba(255,255,255,.76)}

    .world-grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(260px,.9fr);gap:18px}.world-card{border-radius:34px;background:#fff;border:1px solid rgba(20,20,20,.12);padding:clamp(24px,4vw,44px)}.world-card h3{font-family:var(--display);font-size:clamp(42px,6vw,96px);line-height:.8;letter-spacing:-.08em;text-transform:uppercase;margin:0 0 20px}.world-card p{font-size:17px;line-height:1.55;font-weight:760;color:rgba(20,20,20,.66);margin:0 0 16px}.world-card ul{margin:0;padding:0;list-style:none;display:grid;gap:12px}.world-card li{padding:14px 0;border-top:1px solid rgba(20,20,20,.1);font-weight:860}

    .final .drop-badges{display:flex;flex-wrap:wrap;gap:9px;margin:22px 0}.final .drop-badges span{border:1px solid rgba(20,20,20,.13);background:#fff;border-radius:999px;padding:9px 12px;font-size:12px;font-weight:950;text-transform:uppercase;letter-spacing:.08em}

    @media (max-width:980px){.hero-brief{width:min(360px,72vw);bottom:86px}.rev61-head,.kit-detail,.world-grid{grid-template-columns:1fr}.rev61-proof-grid,.kit-grid,.chooser{grid-template-columns:repeat(2,minmax(0,1fr))}.kit-detail__layers div{grid-template-columns:42px 1fr}.kit-detail__layers small{grid-column:2}}
    @media (max-width:620px){.hero-brief{left:18px;right:18px;width:auto;bottom:76px}.hero-brief__title{font-size:42px}.hero-brief__copy{font-size:13px;max-width:280px}.hero-brief__actions .ghost-pill{display:none}.rev61-section{padding:72px 0}.rev61-proof-grid,.kit-grid,.chooser{grid-template-columns:1fr}.kit-card{min-height:330px}.kit-detail__panel{min-height:auto}.kit-detail__layers div{grid-template-columns:38px 1fr}}
    /* REV61 — ULTIMATE WEBSITE CONTENT SYSTEM END */

/* REV62 — RATIONALISED MULTI-PAGE WEBSITE SYSTEM START
       Purpose: split the former long scroll into clean subpages while preserving the master hero animation. */
    .nav{position:sticky;top:0;min-height:96px;height:auto;gap:18px;flex-wrap:wrap;background:rgba(255,255,255,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(20,20,20,.08)}
    .nav__links{gap:clamp(14px,2.4vw,30px);flex-wrap:wrap}
    .nav__links a{padding:10px 0;border-radius:999px;cursor:pointer}
    .nav__links a.is-active{color:#ff2d12}
    .nav__links a.is-active:after{transform:scaleX(1)}
    .tabaq-page{display:none;background:var(--paper);min-height:calc(100svh - 96px)}
    .tabaq-page.is-active{display:block}
    .page-shell{padding:clamp(44px,7vw,110px) clamp(20px,7vw,120px)}
    .page-hero{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(300px,.92fr);gap:clamp(26px,5vw,76px);align-items:end;min-height:42svh;border-bottom:1px solid var(--line)}
    .page-kicker{font-size:12px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:#ff2d12;margin:0 0 14px}
    .page-title{font-family:var(--display);font-size:clamp(54px,9vw,154px);line-height:.78;letter-spacing:-.075em;text-transform:uppercase;margin:0 0 24px;color:var(--ink)}
    .page-lead{font-size:clamp(17px,2vw,24px);font-weight:800;line-height:1.35;margin:0 0 24px;max-width:760px;color:rgba(20,20,20,.78)}
    .page-note{font-size:14px;line-height:1.65;font-weight:750;color:rgba(20,20,20,.62);margin:0;max-width:560px}
    .home-proof{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(22px,4vw,56px);padding:clamp(44px,7vw,96px) clamp(20px,7vw,120px);background:#fff}
    .home-proof h2{font-family:var(--display);font-size:clamp(44px,7vw,116px);line-height:.82;letter-spacing:-.07em;text-transform:uppercase;margin:0}
    .home-proof p{font-size:18px;line-height:1.55;font-weight:800;color:rgba(20,20,20,.72);margin:0 0 18px}
    .utility-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:24px}
    .utility-chip{border:1px solid rgba(20,20,20,.16);border-radius:999px;padding:10px 14px;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:.04em;background:#fff}
    .collection-tools{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;margin:34px 0 22px}
    .filter-group{display:flex;gap:8px;flex-wrap:wrap}
    .filter-pill{border:1px solid rgba(20,20,20,.18);background:#fff;border-radius:999px;padding:12px 16px;font-weight:900;font-size:12px;text-transform:uppercase;letter-spacing:.05em;cursor:pointer}
    .filter-pill.is-active{background:#111;color:#fff;border-color:#111}
    .product-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
    .product-card{position:relative;min-height:420px;border:1px solid rgba(20,20,20,.12);border-radius:34px;background:linear-gradient(160deg,var(--tile,#fff),#fff 70%);padding:22px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;box-shadow:0 18px 50px rgba(0,0,0,.05)}
    .product-card:before{content:attr(data-num);position:absolute;right:-6px;top:8px;font-family:var(--display);font-size:130px;line-height:.8;letter-spacing:-.08em;color:rgba(20,20,20,.07)}
    .product-card h3{position:relative;font-family:var(--display);font-size:clamp(32px,3.6vw,58px);line-height:.82;letter-spacing:-.06em;text-transform:uppercase;margin:0 0 16px}
    .product-card p{position:relative;font-size:14px;line-height:1.5;font-weight:750;color:rgba(20,20,20,.68);margin:0 0 18px;max-width:28ch}
    .product-card__meta{position:relative;display:grid;gap:9px;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:.04em;color:rgba(20,20,20,.72)}
    .product-card__price{font-size:24px;font-weight:950;color:var(--ink)}
    .product-card__actions{display:flex;gap:10px;flex-wrap:wrap;position:relative;z-index:2}
    .mini-btn{border:0;border-radius:999px;background:#111;color:#fff;padding:12px 16px;font-weight:950;font-size:12px;text-transform:uppercase;letter-spacing:.04em;cursor:pointer}
    .mini-btn.secondary{background:#fff;color:#111;border:1px solid rgba(20,20,20,.18)}
    .gallery-grid{display:grid;grid-template-columns:1.25fr .75fr;gap:18px;margin-top:34px}
    .gallery-tile{min-height:320px;border-radius:36px;padding:28px;background:#fff;border:1px solid rgba(20,20,20,.1);display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;position:relative}
    .gallery-tile.large{min-height:520px;background:radial-gradient(circle at 78% 20%,rgba(255,255,255,.9),transparent 26%),linear-gradient(135deg,#ff714f,#ffcf72)}
    .gallery-tile h3{font-family:var(--display);font-size:clamp(36px,5vw,92px);line-height:.82;letter-spacing:-.07em;text-transform:uppercase;margin:0;position:relative}
    .gallery-tile p{font-weight:850;line-height:1.5;max-width:54ch;position:relative}
    .gallery-stack{display:grid;gap:18px}
    .layer-system{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;margin-top:34px}
    .layer-panel{border-radius:32px;border:1px solid rgba(20,20,20,.12);background:#fff;padding:24px;min-height:330px;display:flex;flex-direction:column;justify-content:space-between}
    .layer-panel b{font-family:var(--display);font-size:clamp(34px,4vw,64px);line-height:.84;letter-spacing:-.06em;text-transform:uppercase;display:block}
    .layer-panel span{font-size:12px;font-weight:950;letter-spacing:.12em;text-transform:uppercase;color:#ff2d12}
    .layer-panel p{font-weight:760;line-height:1.52;color:rgba(20,20,20,.68)}
    .split-content{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(22px,5vw,70px);margin-top:44px;align-items:start}
    .copy-stack{display:grid;gap:16px}
    .copy-card{padding:22px;border-radius:26px;background:#fff;border:1px solid rgba(20,20,20,.1)}
    .copy-card h3{margin:0 0 8px;font-size:18px;text-transform:uppercase;letter-spacing:-.02em}
    .copy-card p{margin:0;color:rgba(20,20,20,.68);font-weight:750;line-height:1.55}
    .product-detail{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(24px,5vw,72px);align-items:start}
    .detail-card{border-radius:40px;background:#fff;border:1px solid rgba(20,20,20,.12);padding:clamp(24px,4vw,48px);box-shadow:0 18px 65px rgba(0,0,0,.06)}
    .detail-card h2{font-family:var(--display);font-size:clamp(50px,7vw,120px);line-height:.78;letter-spacing:-.075em;text-transform:uppercase;margin:0 0 18px}
    .detail-list{display:grid;gap:10px;margin-top:24px}
    .detail-list div{display:flex;justify-content:space-between;gap:18px;border-bottom:1px solid rgba(20,20,20,.1);padding:12px 0;font-weight:850}
    details.product-accordion{border-bottom:1px solid rgba(20,20,20,.12);padding:18px 0}
    details.product-accordion summary{cursor:pointer;font-weight:950;text-transform:uppercase;letter-spacing:.04em}
    details.product-accordion p{font-weight:750;line-height:1.58;color:rgba(20,20,20,.66)}
    .drop-band{border-radius:44px;background:#111;color:#fff;padding:clamp(34px,6vw,86px);display:grid;grid-template-columns:1.1fr .9fr;gap:34px;align-items:end;margin-top:42px;overflow:hidden;position:relative}
    .drop-band:before{content:"DROP";position:absolute;right:-.05em;top:.02em;font-family:var(--display);font-size:clamp(110px,22vw,330px);line-height:.7;letter-spacing:-.08em;color:rgba(255,255,255,.06)}
    .drop-band h2{font-family:var(--display);font-size:clamp(50px,8vw,140px);line-height:.78;letter-spacing:-.075em;text-transform:uppercase;margin:0;position:relative}
    .drop-band p{font-size:18px;font-weight:800;line-height:1.5;color:rgba(255,255,255,.76);position:relative}
    .subpage-footer{padding:34px clamp(20px,7vw,120px);border-top:1px solid rgba(20,20,20,.1);display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;background:#fff;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:.06em}
    @media(max-width:980px){.nav{padding:16px 20px}.nav__divider{display:none}.page-hero,.home-proof,.product-detail,.split-content,.drop-band{grid-template-columns:1fr}.product-grid,.layer-system{grid-template-columns:repeat(2,minmax(0,1fr))}.gallery-grid{grid-template-columns:1fr}.hero-brief{left:20px;right:20px;bottom:84px;max-width:none}.hero__inner{grid-template-columns:1fr}.handoff{height:160svh}}
    @media(max-width:640px){.nav__links{width:100%;overflow-x:auto;flex-wrap:nowrap;padding-bottom:4px}.order-btn{width:100%;justify-content:center}.product-grid,.layer-system{grid-template-columns:1fr}.product-card{min-height:320px}.page-shell{padding:34px 18px}.home-proof{padding:34px 18px}.subpage-footer{padding:24px 18px}}
    /* REV62 — RATIONALISED MULTI-PAGE WEBSITE SYSTEM END */

/* REV CLEANUP — STATIC SUBPAGE NOTE PANELS START
       Purpose: replace removed auto-opening bottle feature mounts with quiet editorial notes. */
    .static-page-note-panel{
      align-self:end;
      max-width:560px;
      border:1px solid rgba(20,20,20,.12);
      border-radius:30px;
      background:rgba(255,255,255,.54);
      backdrop-filter:blur(16px);
      padding:22px 24px;
      box-shadow:0 22px 60px rgba(0,0,0,.055);
    }
    .static-page-note-panel .page-note{margin:0;max-width:52ch}
    @media(max-width:980px){.static-page-note-panel{justify-self:start;max-width:640px}}
    /* REV CLEANUP — STATIC SUBPAGE NOTE PANELS END */

/* REV29 — UNIQUE KIT ANIMATION CARDS START */
    .product-grid.product-grid--animated-kits{align-items:stretch}
    .product-card.has-kit-motion{min-height:610px;padding:18px;isolation:isolate;gap:18px;justify-content:flex-start;overflow:hidden}
    .product-card.has-kit-motion::before{top:190px;right:-10px;font-size:116px;z-index:0;color:rgba(20,20,20,.075)}
    .product-card.has-kit-motion > *{position:relative;z-index:1}
    .rev29-kit-preview{position:relative;display:grid;place-items:center;min-height:196px;margin:0;border-radius:26px;background:radial-gradient(circle at 70% 24%,rgba(255,255,255,.96),rgba(255,255,255,.22) 32%,rgba(255,255,255,.08) 64%),linear-gradient(145deg,rgba(255,255,255,.62),rgba(255,255,255,.26));border:1px solid rgba(20,20,20,.08);overflow:hidden;isolation:isolate;box-shadow:inset 0 1px 0 rgba(255,255,255,.7)}
    .rev29-kit-preview::before{content:attr(data-motion);position:absolute;left:14px;top:12px;z-index:4;border:1px solid rgba(20,20,20,.11);border-radius:999px;background:rgba(255,250,241,.78);backdrop-filter:blur(12px);padding:7px 9px;font-size:9px;line-height:1;font-weight:950;letter-spacing:.11em;text-transform:uppercase;color:rgba(20,20,20,.68);box-shadow:0 10px 30px rgba(0,0,0,.06)}
    .rev29-kit-preview::after{content:"";position:absolute;inset:auto 16% 10px;height:18px;border-radius:999px;background:rgba(0,0,0,.16);filter:blur(13px);opacity:.36;transform:scaleX(.78);z-index:0;transition:opacity .72s ease,transform .72s cubic-bezier(.18,.82,.22,1)}
    .product-card.has-kit-motion:hover .rev29-kit-preview::after,.product-card.has-kit-motion:focus-within .rev29-kit-preview::after{opacity:.48;transform:scaleX(1)}
    .rev29-pack{position:relative;z-index:2;background:transparent!important;border:0;outline:0;padding:0;margin:0;cursor:pointer;isolation:isolate;appearance:none;-webkit-appearance:none;transform-origin:50% 62%;will-change:transform;animation:rev29KitBreath 5.8s ease-in-out infinite alternate}
    .rev29-pack:focus-visible{outline:2px solid rgba(20,20,20,.44);outline-offset:8px;border-radius:20px}
    .rev29-pack img{position:absolute;display:block;height:auto;margin:0;padding:0;border:0;outline:0;user-select:none;-webkit-user-drag:none;pointer-events:none;background:transparent!important;filter:none!important;box-shadow:none!important;text-shadow:none!important;backface-visibility:hidden;transform-style:preserve-3d;image-rendering:auto}
    .rev29-pack .rev29-tray{will-change:transform,top;transition:transform var(--rev29-duration,900ms) var(--rev29-ease,cubic-bezier(.18,.82,.22,1)),top var(--rev29-duration,900ms) var(--rev29-ease,cubic-bezier(.18,.82,.22,1))}
    .rev29-pack:hover,.rev29-pack.is-open{animation-play-state:paused;transform:translate3d(0,-2px,0) rotate(.35deg) scale(1.015)}
    .product-card.has-kit-motion:hover{box-shadow:0 36px 96px rgba(0,0,0,.13)}

    .rev29-pack--wood{--rev29-duration:900ms;width:min(62%,136px);aspect-ratio:1108/1722}
    .rev29-pack--wood .rev29-window{position:absolute;left:0;top:0;width:100%;aspect-ratio:1108/844;overflow:visible;background:transparent!important}
    .rev29-pack--wood img{left:0;top:0;width:100%;height:100%;object-fit:fill}
    .rev29-pack--wood .rev29-tray{z-index:1;transform:translate3d(0,0,0)}
    .rev29-pack--wood .rev29-cover{z-index:3}
    .rev29-pack--wood:hover .rev29-tray,.rev29-pack--wood:focus-visible .rev29-tray,.rev29-pack--wood.is-open .rev29-tray{transform:translate3d(0,calc(100% + 10px),0)}

    .rev29-pack--concealed{--rev29-duration:900ms;width:min(100%,286px);aspect-ratio:1392/660;overflow:hidden}
    .rev29-pack--concealed .rev29-tray{left:49.92816092%;top:.90909091%;width:50.07183908%;z-index:1;transform:translate3d(-100%,0,0)}
    .rev29-pack--concealed .rev29-cover{left:0;top:0;width:49.92816092%;z-index:3}
    .rev29-pack--concealed:hover .rev29-tray,.rev29-pack--concealed:focus-visible .rev29-tray,.rev29-pack--concealed.is-open .rev29-tray{transform:translate3d(0,0,0)}

    .rev29-pack--transparent-wide{--rev29-duration:880ms;width:min(100%,288px);aspect-ratio:1418/662;overflow:visible}
    .rev29-pack--transparent-wide .rev29-tray{left:49.15373766%;top:1.81268882%;width:50.84626234%;z-index:1;transform:translate3d(-96.7%,0,0)}
    .rev29-pack--transparent-wide .rev29-cover{left:0;top:0;width:49.15373766%;z-index:3}
    .rev29-pack--transparent-wide:hover .rev29-tray,.rev29-pack--transparent-wide:focus-visible .rev29-tray,.rev29-pack--transparent-wide.is-open .rev29-tray{transform:translate3d(0,0,0)}

    .rev29-pack--tray-wide{--rev29-duration:880ms;width:min(100%,276px);aspect-ratio:1120/566;overflow:visible}
    .rev29-pack--tray-wide .rev29-tray{left:48.30357143%;top:2.12014134%;width:51.69642857%;z-index:1;transform:translate3d(-93.4%,0,0)}
    .rev29-pack--tray-wide .rev29-cover{left:0;top:0;width:48.30357143%;z-index:3}
    .rev29-pack--tray-wide:hover .rev29-tray,.rev29-pack--tray-wide:focus-visible .rev29-tray,.rev29-pack--tray-wide.is-open .rev29-tray{transform:translate3d(0,0,0)}

    .rev29-pack--brown{--rev29-duration:780ms;width:min(70%,154px);aspect-ratio:1029/1096;overflow:visible;--sleeve-h:53.284672%;--gap-h:2.007299%}
    .rev29-pack--brown .rev29-tray,.rev29-pack--brown .rev29-cover{left:50%;width:100%;height:auto;transform:translateX(-50%);filter:none!important;box-shadow:none!important}
    .rev29-pack--brown .rev29-cover{top:0;z-index:3}
    .rev29-pack--brown .rev29-tray{top:0;z-index:1;width:100.291545%}
    .rev29-pack--brown:hover .rev29-tray,.rev29-pack--brown:focus-visible .rev29-tray,.rev29-pack--brown.is-open .rev29-tray{top:calc(var(--sleeve-h) + var(--gap-h))}

    .rev29-pack--corrected{--rev29-duration:900ms;--open-y:46.799307%;width:min(70%,166px);aspect-ratio:1120/1030;overflow:hidden;background:#fff!important;border-radius:12px}
    .rev29-pack--corrected .rev29-tray,.rev29-pack--corrected .rev29-cover{left:0;top:0;width:100%;height:auto;background:#fff;filter:none!important;box-shadow:none!important}
    .rev29-pack--corrected .rev29-tray{z-index:1;transform:translate3d(0,0,0)}
    .rev29-pack--corrected .rev29-cover{z-index:3}
    .rev29-pack--corrected:hover .rev29-tray,.rev29-pack--corrected:focus-visible .rev29-tray,.rev29-pack--corrected.is-open .rev29-tray{transform:translate3d(0,var(--open-y),0)}

    .rev29-kit-copy{display:grid;gap:10px;min-height:170px}
    .rev29-kit-copy .page-kicker{margin:0}.rev29-kit-copy h3{margin:0 0 4px}.rev29-kit-copy p{margin:0}.product-card.has-kit-motion .product-card__meta{margin-top:auto;width:100%}
    @keyframes rev29KitBreath{from{transform:translate3d(0,2px,0) rotate(-.45deg)}to{transform:translate3d(0,-5px,0) rotate(.65deg)}}
    @media(max-width:1120px){.product-card.has-kit-motion{min-height:570px}.rev29-kit-preview{min-height:176px}.rev29-pack--wood,.rev29-pack--brown,.rev29-pack--corrected{width:min(64%,142px)}}
    @media(max-width:900px){.product-grid.product-grid--animated-kits{grid-template-columns:repeat(2,minmax(0,1fr))}.product-card.has-kit-motion{min-height:560px}.rev29-kit-preview{min-height:190px}.rev29-pack--wood,.rev29-pack--brown,.rev29-pack--corrected{width:min(58%,156px)}}
    @media(max-width:620px){.product-grid.product-grid--animated-kits{grid-template-columns:1fr}.product-card.has-kit-motion{min-height:auto}.rev29-kit-preview{min-height:210px}.rev29-pack--wood,.rev29-pack--brown,.rev29-pack--corrected{width:min(52%,150px)}}
    @media(prefers-reduced-motion:reduce){.rev29-pack{animation:none!important}.rev29-pack .rev29-tray{transition:none!important}}
    /* REV29 — UNIQUE KIT ANIMATION CARDS END */



/* REV33 — FIRST LAYER CARD RESTORE + TRUE INLINE HOW-TO-LAYER INJECTION */
#layers .cards .card:first-child,
#layers .cards .card:first-child.reveal,
#layers .cards .card:first-child.in{
  display:block!important;
  visibility:visible!important;
  opacity:1!important;
  background:#fff!important;
  min-height:330px!important;
  z-index:2!important;
}
#layers .cards .card:first-child .card__media,
#layers .cards .card:first-child .card__media img,
#layers .cards .card:first-child h3,
#layers .cards .card:first-child p{
  visibility:visible!important;
  opacity:1!important;
}
#layers .cards .card:first-child .card__media img{
  display:block!important;
  max-height:220px!important;
  width:auto!important;
  object-fit:contain!important;
}

/* REV 7 INJECTION — SURGICAL LAYERING PAGE REPLACEMENT START
   Source: 12_TABAQ_rev7_baked_single_file.html
   Purpose: replace the previous Rev36/37/41 hand-docking layering page with the uploaded scroll bottle-drop animation. */
.tabaq-page[data-page="layering"].tabaq-rev7-layering-page{background:#fbfaf6;overflow:visible;min-height:calc(100svh - 96px);}

    /* REV 7 — BASE SETUP START */
    .tabaq-rev7drop {
      --paper: #fbfaf6;
      --paper-2: #f1eadf;
      --ink: #201812;
      --muted: rgba(32, 24, 18, .52);
      --line: rgba(32, 24, 18, .12);
      --gold: #bb8a43;
      --stage-w: min(82vw, 720px);
      --stage-h: min(92svh, 1080px);
      --ease-out: cubic-bezier(.17, .84, .44, 1);
      --ease-spring: cubic-bezier(.18, 1.08, .32, 1);
      font-synthesis-weight: none;
      text-rendering: geometricPrecision;
    }

    .tabaq-rev7drop,
    .tabaq-rev7drop * { box-sizing: border-box; }

    .tabaq-rev7drop {
      min-height: 100%;
      background: var(--paper);
      color: var(--ink);
      scroll-behavior: auto;
    }

    .tabaq-rev7drop {
      margin: 0;
      min-height: 100%;
      overflow-x: visible;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background:
        radial-gradient(circle at 8% 12%, rgba(238, 177, 85, .16), transparent 30rem),
        radial-gradient(circle at 94% 25%, rgba(237, 123, 101, .14), transparent 34rem),
        linear-gradient(180deg, #fffdf9 0%, var(--paper) 48%, #f5efe4 100%);
    }

    .tabaq-rev7drop img {
      display: block;
      user-select: none;
      -webkit-user-drag: none;
    }

    .tabaq-rev7drop button,
    .tabaq-rev7drop a {
      font: inherit;
    }

    @media (prefers-reduced-motion: reduce) {
      .tabaq-rev7drop { scroll-behavior: auto; }
      .tabaq-rev7drop *, .tabaq-rev7drop *::before, .tabaq-rev7drop *::after {
        animation-duration: .001ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .001ms !important;
      }
    }
    /* REV 7 — BASE SETUP END */

    /* REV 7 — PAGE CHROME START */
    .rev7-topbar {
      position: fixed;
      inset: var(--rev7-nav-offset, 96px) 0 auto 0;
      z-index: 50;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 1rem;
      padding: clamp(14px, 2vw, 24px) clamp(16px, 3vw, 40px);
      pointer-events: none;
      mix-blend-mode: multiply;
    }

    .rev7-brand {
      justify-self: start;
      letter-spacing: .24em;
      font-size: clamp(11px, .88vw, 13px);
      font-weight: 650;
    }

    .rev7-center-note {
      justify-self: center;
      display: inline-flex;
      align-items: center;
      gap: .6rem;
      color: var(--muted);
      font-size: clamp(11px, .88vw, 13px);
      letter-spacing: .11em;
      text-transform: uppercase;
    }

    .rev7-center-note::before,
    .rev7-center-note::after {
      content: "";
      width: clamp(18px, 4vw, 54px);
      height: 1px;
      background: currentColor;
      opacity: .28;
    }

    .rev7-progress-shell {
      justify-self: end;
      width: clamp(72px, 10vw, 150px);
      height: 1px;
      background: rgba(32, 24, 18, .14);
      overflow: hidden;
    }

    .rev7-progress-fill {
      display: block;
      width: 100%;
      height: 100%;
      transform-origin: 0 50%;
      transform: scaleX(0);
      background: var(--ink);
    }

    .rev7-intro {
      position: relative;
      min-height: 100svh;
      display: grid;
      place-items: center;
      padding: 12svh clamp(18px, 4vw, 80px);
      isolation: isolate;
    }

    .rev7-intro::before {
      content: "";
      position: absolute;
      inset: 13svh 8vw;
      border: 1px solid rgba(32, 24, 18, .08);
      border-radius: 999px;
      transform: rotate(-8deg);
      opacity: .6;
      z-index: -1;
    }

    .rev7-intro-kicker {
      margin: 0 0 1.25rem;
      color: var(--gold);
      letter-spacing: .18em;
      text-transform: uppercase;
      font-size: clamp(12px, 1vw, 14px);
      text-align: center;
    }

    .rev7-intro-title {
      max-width: 12ch;
      margin: 0;
      font-family: "Times New Roman", Times, serif;
      font-size: clamp(64px, 12vw, 168px);
      line-height: .78;
      letter-spacing: -.07em;
      text-align: center;
      text-wrap: balance;
    }

    .rev7-intro-copy {
      max-width: 46ch;
      margin: 2rem auto 0;
      color: rgba(32, 24, 18, .66);
      font-size: clamp(15px, 1.3vw, 19px);
      line-height: 1.55;
      text-align: center;
    }

    .rev7-scroll-cue {
      position: absolute;
      left: 50%;
      bottom: 28px;
      transform: translateX(-50%);
      color: var(--muted);
      font-size: 12px;
      letter-spacing: .18em;
      text-transform: uppercase;
    }
    /* REV 7 — PAGE CHROME END */

    /* REV 7 — SCROLL SCENE LAYOUT START */
    .rev7-scroll-scene {
      --accent: var(--gold);
      position: relative;
      height: 260svh;
      min-height: 1600px;
      border-top: 1px solid rgba(32, 24, 18, .08);
    }

    .rev7-scene-sticky {
      position: sticky;
      top: 0;
      height: 100svh;
      display: grid;
      place-items: center;
      overflow: hidden;
      isolation: isolate;
      contain: layout paint style;
    }

    .rev7-scene-sticky::before {
      content: "";
      position: absolute;
      width: min(78vw, 880px);
      aspect-ratio: 1;
      border-radius: 999px;
      background:
        radial-gradient(circle, color-mix(in srgb, var(--accent) 22%, transparent), transparent 63%);
      filter: blur(10px);
      opacity: .42;
      transform: translate3d(0, 3svh, 0) scale(var(--glow-scale, .78));
      transition: transform .15s linear, opacity .15s linear;
      z-index: -3;
    }

    .rev7-scene-grid {
      position: relative;
      width: min(100vw, 1440px);
      height: 100svh;
      display: grid;
      grid-template-columns: minmax(0, .82fr) minmax(300px, 1.18fr) minmax(0, .82fr);
      align-items: center;
      gap: clamp(0px, 2vw, 42px);
      padding: clamp(52px, 6vw, 92px) clamp(14px, 4vw, 70px) clamp(30px, 5vw, 68px);
    }

    .rev7-scene-copy {
      align-self: end;
      padding-bottom: clamp(34px, 7svh, 110px);
      min-width: 0;
    }

    .rev7-scene-step {
      display: block;
      color: var(--accent);
      font-family: "Times New Roman", Times, serif;
      font-size: clamp(42px, 6.4vw, 86px);
      line-height: .9;
      letter-spacing: -.045em;
      opacity: .92;
    }

    .rev7-scene-name {
      margin: .65rem 0 0;
      max-width: 9ch;
      font-family: "Times New Roman", Times, serif;
      font-size: clamp(44px, 7vw, 116px);
      line-height: .82;
      letter-spacing: -.075em;
      text-transform: uppercase;
    }

    .rev7-scene-micro {
      max-width: 24ch;
      margin: 1rem 0 0;
      color: rgba(32, 24, 18, .6);
      font-size: clamp(14px, 1.15vw, 18px);
      line-height: 1.4;
    }

    .rev7-scene-lock {
      margin-top: 1rem;
      color: rgba(32, 24, 18, .42);
      font-size: 11px;
      letter-spacing: .14em;
      text-transform: uppercase;
    }

    .rev7-artboard {
      position: relative;
      width: min(var(--stage-w), 100%);
      height: min(var(--stage-h), calc(100svh - 64px));
      aspect-ratio: 2 / 3;
      place-self: center;
      transform: translate3d(0, var(--stage-lift, 0px), 0);
      transform-origin: 50% 62%;
    }

    .rev7-artboard::after {
      content: "";
      position: absolute;
      left: 24%;
      right: 18%;
      bottom: 3.5%;
      height: 9%;
      border-radius: 999px;
      background: radial-gradient(ellipse, rgba(66, 41, 22, .14), transparent 67%);
      filter: blur(10px);
      opacity: var(--ground-shadow, .08);
      z-index: -1;
      transform: scaleX(var(--shadow-scale, .72));
    }

    .rev7-layer-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center center;
      pointer-events: none;
      transform-origin: 50% 50%;
      will-change: transform, opacity, filter;
    }

    .rev7-model-empty {
      z-index: 1;
      opacity: var(--empty-opacity, 1);
      filter: saturate(1.01) contrast(1.01);
    }

    .rev7-product-drop {
      z-index: 3;
      opacity: var(--product-opacity, 0);
      transform:
        translate3d(var(--product-x, 0px), var(--product-y, -80vh), 0)
        rotate(var(--product-rot, 0deg))
        scale(var(--product-scale, 1));
      filter:
        drop-shadow(0 24px 24px rgba(49, 28, 9, var(--drop-shadow, .10)))
        saturate(1.04);
    }

    .rev7-model-final {
      z-index: 4;
      opacity: var(--final-opacity, 0);
      filter: saturate(1.01) contrast(1.01);
    }

    .rev7-landing-ring {
      position: absolute;
      width: clamp(110px, 18vw, 260px);
      aspect-ratio: 1;
      border: 1px solid color-mix(in srgb, var(--accent) 64%, transparent);
      border-radius: 999px;
      left: 50%;
      top: 49%;
      transform: translate(-50%, -50%) scale(var(--ring-scale, .24));
      opacity: var(--ring-opacity, 0);
      z-index: 2;
      pointer-events: none;
    }

    .rev7-scene-side {
      align-self: center;
      justify-self: end;
      width: min(17vw, 220px);
      color: rgba(32, 24, 18, .48);
      font-size: 11px;
      letter-spacing: .16em;
      text-transform: uppercase;
      writing-mode: vertical-rl;
      transform: rotate(180deg);
    }

    .rev7-scene-side span {
      display: inline-block;
      color: var(--accent);
    }
    /* REV 7 — SCROLL SCENE LAYOUT END */

    /* REV 7 — CLOSING SECTION START */
    .rev7-outro {
      min-height: 72svh;
      display: grid;
      place-items: center;
      padding: clamp(60px, 8vw, 128px) clamp(20px, 5vw, 80px);
      border-top: 1px solid rgba(32, 24, 18, .08);
      text-align: center;
    }

    .rev7-outro h2 {
      margin: 0;
      max-width: 13ch;
      font-family: "Times New Roman", Times, serif;
      font-size: clamp(48px, 8vw, 132px);
      line-height: .86;
      letter-spacing: -.065em;
    }

    .rev7-outro p {
      max-width: 54ch;
      margin: 1.35rem auto 0;
      color: rgba(32, 24, 18, .62);
      font-size: clamp(15px, 1.4vw, 20px);
      line-height: 1.55;
    }
    /* REV 7 — CLOSING SECTION END */

    /* REV 7 — RESPONSIVE SYSTEM START */
    @media (max-width: 920px) {
      .tabaq-rev7drop {
        --stage-w: min(96vw, 620px);
        --stage-h: min(83svh, 930px);
      }

      .rev7-topbar {
        grid-template-columns: 1fr auto;
      }

      .rev7-center-note {
        display: none;
      }

      .rev7-scene-grid {
        grid-template-columns: 1fr;
        padding: 52px 12px 28px;
      }

      .rev7-scene-copy {
        position: absolute;
        left: 18px;
        top: 68px;
        z-index: 10;
        padding: 0;
        max-width: 45vw;
        mix-blend-mode: multiply;
      }

      .rev7-scene-step {
        font-size: clamp(34px, 10vw, 62px);
      }

      .rev7-scene-name {
        font-size: clamp(35px, 11vw, 74px);
      }

      .rev7-scene-micro {
        display: none;
      }

      .rev7-scene-lock {
        display: none;
      }

      .rev7-scene-side {
        display: none;
      }

      .rev7-artboard {
        place-self: end center;
        height: min(88svh, calc(100svh - 48px));
      }
    }

    @media (max-width: 560px) {
      .rev7-brand {
        letter-spacing: .2em;
      }

      .rev7-progress-shell {
        width: 82px;
      }

      .rev7-intro-title {
        font-size: clamp(56px, 18vw, 84px);
      }

      .rev7-scene-copy {
        top: 62px;
        left: 14px;
        max-width: 54vw;
      }

      .rev7-artboard {
        width: 112vw;
        max-width: none;
        transform: translateX(-1vw) translateY(var(--stage-lift, 0px));
      }
    }
    /* REV 7 — RESPONSIVE SYSTEM END */
  
/* REV 7 INJECTION — SURGICAL LAYERING PAGE REPLACEMENT END */



/* REV43 — KIT COMMERCE / SCENT PROFILE ENHANCEMENT START */
.tabaq-page[data-page="shop"] .page-hero{align-items:stretch}.rev43-shop-commerce{margin:clamp(26px,4vw,54px) 0 32px;display:grid;grid-template-columns:minmax(280px,.72fr) minmax(420px,1.28fr);gap:18px;align-items:stretch}.rev43-shop-commerce__intro{border:1px solid var(--line,rgba(16,13,10,.14));background:linear-gradient(135deg,#fffaf2,#fff);border-radius:34px;padding:clamp(22px,3vw,34px);box-shadow:0 22px 60px rgba(37,25,12,.08);position:relative;overflow:hidden}.rev43-shop-commerce__intro::after{content:"";position:absolute;right:-90px;bottom:-120px;width:260px;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,rgba(255,79,30,.16),transparent 66%)}.rev43-shop-commerce__intro h2{font-size:clamp(42px,6vw,86px);line-height:.9;letter-spacing:-.055em;margin:8px 0 16px;color:var(--ink,#100d0a)}.rev43-shop-commerce__intro p{max-width:44ch;font-size:15px;line-height:1.62;color:var(--muted,rgba(16,13,10,.66));font-weight:750}.rev43-shop-commerce__logic{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.rev43-match-card{border:1px solid rgba(16,13,10,.12);border-radius:26px;background:var(--match-bg,#fff);padding:18px;min-height:172px;box-shadow:0 18px 44px rgba(37,25,12,.08);display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.2,.8,.2,1),box-shadow .24s ease}.rev43-match-card:hover{transform:translateY(-5px);box-shadow:0 26px 64px rgba(37,25,12,.14)}.rev43-match-card::before{content:attr(data-num);position:absolute;right:10px;bottom:-24px;font-size:108px;line-height:1;font-weight:950;letter-spacing:-.08em;color:rgba(16,13,10,.055)}.rev43-match-card span{font-size:10px;letter-spacing:.17em;text-transform:uppercase;font-weight:950;color:#ff2c16}.rev43-match-card h3{font-size:28px;line-height:1;margin:6px 0 10px}.rev43-match-card p{font-size:13px;line-height:1.45;color:rgba(16,13,10,.62);font-weight:750;max-width:28ch}.rev43-match-card button{align-self:flex-start;margin-top:12px;border:0;border-radius:999px;background:#100d0a;color:#fff;padding:9px 13px;font-weight:950;font-size:11px;letter-spacing:.04em;cursor:pointer}.product-card.rev43-commerce-card{position:relative;overflow:hidden}.product-card.rev43-commerce-card::after{content:"";position:absolute;inset:1px;border-radius:inherit;pointer-events:none;background:linear-gradient(130deg,rgba(255,255,255,.36),transparent 34%,rgba(255,255,255,.12));mix-blend-mode:soft-light}.rev43-card-profile{display:grid;gap:12px;margin:16px 0 4px;position:relative;z-index:2}.rev43-note-row{display:flex;flex-wrap:wrap;gap:6px}.rev43-note-chip{border:1px solid rgba(16,13,10,.14);background:rgba(255,255,255,.56);backdrop-filter:blur(8px);border-radius:999px;padding:6px 8px;font-size:10px;letter-spacing:.08em;text-transform:uppercase;font-weight:950;color:rgba(16,13,10,.66)}.rev43-profile-bars{display:grid;gap:7px}.rev43-meter{display:grid;grid-template-columns:62px 1fr 30px;align-items:center;gap:8px;font-size:10px;text-transform:uppercase;letter-spacing:.12em;font-weight:950;color:rgba(16,13,10,.55)}.rev43-meter-track{height:8px;border-radius:999px;background:rgba(16,13,10,.09);overflow:hidden}.rev43-meter-fill{height:100%;width:calc(var(--v)*1%);border-radius:999px;background:linear-gradient(90deg,var(--accent,#ff4f1e),rgba(16,13,10,.78))}.rev43-occasion-row{display:flex;flex-wrap:wrap;gap:5px}.rev43-occasion-row span{font-size:10px;font-weight:950;letter-spacing:.09em;text-transform:uppercase;background:rgba(16,13,10,.075);padding:6px 8px;border-radius:999px;color:rgba(16,13,10,.62)}.product-card__actions .rev43-profile-btn,.rev43-profile-btn{border:1px solid rgba(16,13,10,.18);background:rgba(255,255,255,.72);color:#100d0a}.rev43-profile-btn:hover{background:#100d0a;color:#fff}.rev43-shop-assurance{margin:24px 0 0;display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.rev43-assurance-card{border:1px solid rgba(16,13,10,.12);border-radius:22px;background:#fff;padding:16px;min-height:120px}.rev43-assurance-card b{display:block;font-size:13px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px}.rev43-assurance-card p{font-size:13px;line-height:1.45;color:rgba(16,13,10,.62);font-weight:700}.rev43-kit-dialog{width:min(1120px,calc(100vw - 28px));max-width:none;border:0;padding:0;background:transparent;color:#100d0a;overflow:visible}.rev43-kit-dialog::backdrop{background:rgba(16,13,10,.36);backdrop-filter:blur(14px)}.rev43-dialog-shell{display:grid;grid-template-columns:.86fr 1.14fr;gap:18px;padding:18px;border-radius:36px;background:linear-gradient(135deg,var(--profile-a,#fffaf2),#fff);box-shadow:0 42px 130px rgba(16,13,10,.32);border:1px solid rgba(16,13,10,.14);position:relative;overflow:hidden}.rev43-dialog-close{position:absolute;right:18px;top:18px;z-index:5;width:42px;height:42px;border-radius:999px;border:1px solid rgba(16,13,10,.14);background:rgba(255,255,255,.82);font-size:20px;font-weight:950;cursor:pointer}.rev43-dialog-hero{border-radius:28px;padding:28px;background:var(--profile-bg,#fff);min-height:500px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden}.rev43-dialog-hero::after{content:attr(data-num);position:absolute;right:-14px;bottom:-42px;font-size:210px;line-height:.8;font-weight:950;color:rgba(16,13,10,.06);letter-spacing:-.08em}.rev43-dialog-hero .page-kicker{position:relative;z-index:2}.rev43-dialog-hero h2{position:relative;z-index:2;font-size:clamp(54px,7vw,112px);line-height:.86;letter-spacing:-.06em;margin:12px 0}.rev43-dialog-hero p{position:relative;z-index:2;font-size:16px;line-height:1.6;color:rgba(16,13,10,.65);font-weight:800}.rev43-dialog-price{position:relative;z-index:2;display:flex;gap:10px;align-items:center;flex-wrap:wrap}.rev43-dialog-price strong{font-size:34px;letter-spacing:-.04em}.rev43-dialog-price span{font-size:11px;text-transform:uppercase;letter-spacing:.14em;font-weight:950;background:rgba(255,255,255,.7);border-radius:999px;padding:8px 10px}.rev43-dialog-data{display:grid;gap:12px}.rev43-panel{border:1px solid rgba(16,13,10,.12);background:rgba(255,255,255,.72);border-radius:24px;padding:18px}.rev43-panel h3{font-size:13px;text-transform:uppercase;letter-spacing:.13em;margin:0 0 12px;color:rgba(16,13,10,.56)}.rev43-pyramid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.rev43-pyramid div{border-radius:18px;background:rgba(16,13,10,.045);padding:13px}.rev43-pyramid b{display:block;font-size:11px;letter-spacing:.13em;text-transform:uppercase;margin-bottom:6px;color:#ff2c16}.rev43-pyramid span{font-size:13px;line-height:1.35;font-weight:850}.rev43-layer-breakdown{display:grid;grid-template-columns:repeat(4,1fr);gap:9px}.rev43-layer-breakdown div{border-radius:18px;background:rgba(16,13,10,.055);padding:12px}.rev43-layer-breakdown b{display:block;font-size:12px;margin-bottom:7px}.rev43-layer-breakdown span{display:block;font-size:12px;line-height:1.4;color:rgba(16,13,10,.62);font-weight:750}.rev43-dialog-actions{display:flex;gap:10px;flex-wrap:wrap}.rev43-dialog-actions button{border:0;border-radius:999px;background:#100d0a;color:#fff;padding:13px 17px;font-weight:950;cursor:pointer}.rev43-dialog-actions button.secondary{background:#fff;color:#100d0a;border:1px solid rgba(16,13,10,.16)}.rev43-detail-page{display:grid;grid-template-columns:minmax(320px,.86fr) minmax(440px,1.14fr);gap:18px;align-items:start}.rev43-detail-hero{border-radius:36px;padding:clamp(28px,5vw,56px);min-height:640px;background:var(--kit-bg,#fff);position:sticky;top:112px;overflow:hidden;border:1px solid rgba(16,13,10,.12);box-shadow:0 28px 70px rgba(37,25,12,.12)}.rev43-detail-hero::after{content:attr(data-num);position:absolute;right:-10px;bottom:-36px;font-size:220px;line-height:.8;font-weight:950;letter-spacing:-.08em;color:rgba(16,13,10,.06)}.rev43-detail-hero h1{font-size:clamp(58px,8vw,126px);line-height:.84;letter-spacing:-.065em;margin:18px 0}.rev43-detail-hero .page-lead{font-size:18px;line-height:1.58;max-width:32ch}.rev43-detail-content{display:grid;gap:14px}.rev43-buybox{border-radius:28px;background:#100d0a;color:#fff;padding:20px;display:grid;gap:12px}.rev43-buybox strong{font-size:40px;letter-spacing:-.04em}.rev43-buybox button{border:0;border-radius:999px;padding:14px 18px;background:#ff3b22;color:#fff;font-weight:950;cursor:pointer}.rev43-buybox small{color:rgba(255,255,255,.62);font-weight:700}.rev43-detail-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.rev43-detail-card{border:1px solid rgba(16,13,10,.12);background:#fff;border-radius:24px;padding:18px}.rev43-detail-card h3{font-size:12px;text-transform:uppercase;letter-spacing:.13em;color:#ff2c16;margin:0 0 10px}.rev43-detail-card p{font-size:14px;line-height:1.55;color:rgba(16,13,10,.64);font-weight:750}.rev43-wide{grid-column:1/-1}.rev43-layer-list{display:grid;gap:8px}.rev43-layer-list div{display:grid;grid-template-columns:92px 1fr;gap:12px;align-items:start;border-top:1px solid rgba(16,13,10,.08);padding-top:11px}.rev43-layer-list b{font-size:12px;text-transform:uppercase;letter-spacing:.08em}.rev43-layer-list span{font-size:14px;line-height:1.44;color:rgba(16,13,10,.64);font-weight:750}.rev43-comparison{margin:28px 0 0;border-radius:30px;background:#100d0a;color:#fff;padding:24px;overflow:hidden}.rev43-comparison h2{font-size:clamp(36px,5vw,78px);line-height:.9;letter-spacing:-.055em;margin:0 0 18px}.rev43-compare-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.rev43-compare-card{border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);border-radius:20px;padding:14px}.rev43-compare-card b{display:block;font-size:18px;margin-bottom:8px}.rev43-compare-card span{display:block;color:rgba(255,255,255,.62);font-weight:750;font-size:13px;line-height:1.35}.rev43-drop-list-btn.is-added{background:#100d0a!important;color:#fff!important}.product-card.is-filter-hidden{display:none!important}@media(max-width:980px){.rev43-shop-commerce,.rev43-detail-page,.rev43-dialog-shell{grid-template-columns:1fr}.rev43-shop-assurance,.rev43-compare-grid{grid-template-columns:repeat(2,1fr)}.rev43-detail-hero{position:relative;top:auto;min-height:440px}.rev43-layer-breakdown,.rev43-pyramid{grid-template-columns:1fr 1fr}}@media(max-width:640px){.rev43-shop-commerce__logic,.rev43-shop-assurance,.rev43-detail-grid,.rev43-compare-grid,.rev43-layer-breakdown,.rev43-pyramid{grid-template-columns:1fr}.rev43-dialog-shell{padding:10px;border-radius:24px}.rev43-dialog-hero{min-height:360px}.rev43-detail-hero h1{font-size:64px}}
/* REV43 — KIT COMMERCE / SCENT PROFILE ENHANCEMENT END */


/* REV44 — PRODUCT DETAIL LARGE ANIMATED KIT PREVIEW START */
.rev44-detail-hero-with-kit{
  display:flex;
  flex-direction:column;
  min-height:clamp(720px,78svh,920px);
  isolation:isolate;
}
.rev44-detail-hero-with-kit h1{
  font-size:clamp(48px,6.8vw,104px);
  margin-bottom:14px;
}
.rev44-detail-hero-with-kit .page-lead{
  font-size:clamp(15px,1.05vw,18px);
  max-width:38ch;
}
.rev44-detail-hero-with-kit .rev43-note-row{
  position:relative;
  z-index:3;
}
.rev44-detail-kit-stage{
  position:relative;
  z-index:4;
  margin-top:clamp(22px,3.3vw,40px);
  min-height:clamp(310px,34vw,520px);
  display:grid;
  place-items:center;
  border-radius:clamp(26px,3vw,38px);
  border:1px solid rgba(16,13,10,.12);
  background:
    radial-gradient(circle at 66% 22%,rgba(255,255,255,.94),rgba(255,255,255,.32) 30%,rgba(255,255,255,.08) 62%),
    linear-gradient(145deg,rgba(255,255,255,.74),rgba(255,255,255,.24));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.82),0 24px 54px rgba(37,25,12,.12);
  overflow:visible;
}
.rev44-detail-kit-stage::after{
  content:"";
  position:absolute;
  left:12%;
  right:12%;
  bottom:24px;
  height:28px;
  border-radius:999px;
  background:rgba(16,13,10,.2);
  filter:blur(18px);
  opacity:.36;
  transform:scaleX(.72);
  pointer-events:none;
  transition:opacity .45s ease,transform .45s ease;
}
.rev44-detail-kit-stage:hover::after,
.rev44-detail-kit-stage:focus-within::after{
  opacity:.52;
  transform:scaleX(.96);
}
.rev44-kit-mount{
  position:relative;
  z-index:2;
  width:100%;
  min-height:inherit;
  display:grid;
  place-items:center;
  padding:clamp(22px,3vw,42px);
}
.rev44-kit-cue{
  position:absolute;
  left:18px;
  top:16px;
  z-index:6;
  border:1px solid rgba(16,13,10,.12);
  border-radius:999px;
  background:rgba(255,250,241,.76);
  backdrop-filter:blur(12px);
  padding:8px 10px;
  font-size:10px;
  font-weight:950;
  letter-spacing:.1em;
  text-transform:uppercase;
  color:rgba(16,13,10,.64);
  pointer-events:none;
}
.rev44-detail-kit-stage .rev29-kit-preview{
  width:100%;
  min-height:inherit;
  border:0;
  border-radius:0;
  background:transparent!important;
  box-shadow:none!important;
  overflow:visible;
}
.rev44-detail-kit-stage .rev29-kit-preview::before{
  content:attr(data-motion);
  left:auto;
  right:18px;
  top:16px;
  font-size:10px;
  background:rgba(255,255,255,.72);
}
.rev44-detail-kit-stage .rev29-kit-preview::after{
  display:none;
}
.rev44-detail-kit-stage .rev29-pack{
  animation-duration:6.6s;
}
.rev44-detail-kit-stage .rev29-pack:hover,
.rev44-detail-kit-stage .rev29-pack.is-open{
  transform:translate3d(0,-4px,0) rotate(.25deg) scale(1.025);
}
.rev44-detail-kit-stage .rev29-pack--wood{
  width:min(58%,300px);
}
.rev44-detail-kit-stage .rev29-pack--concealed{
  width:min(98%,620px);
}
.rev44-detail-kit-stage .rev29-pack--brown{
  width:min(58%,320px);
}
.rev44-detail-kit-stage .rev29-pack--transparent-wide,
.rev44-detail-kit-stage .rev29-pack--tray-wide{
  width:min(98%,640px);
}
.rev44-detail-kit-stage .rev29-pack--corrected{
  width:min(60%,330px);
}
.rev44-detail-page-active .rev44-detail-kit-stage{
  animation:rev44DetailKitIn .72s cubic-bezier(.18,.82,.22,1) both;
}
@keyframes rev44DetailKitIn{
  from{opacity:0;transform:translate3d(0,22px,0) scale(.985)}
  to{opacity:1;transform:translate3d(0,0,0) scale(1)}
}
@media(max-width:980px){
  .rev44-detail-hero-with-kit{min-height:auto;position:relative!important;top:auto!important}
  .rev44-detail-kit-stage{min-height:clamp(280px,58vw,460px)}
  .rev44-detail-kit-stage .rev29-pack--wood,
  .rev44-detail-kit-stage .rev29-pack--brown,
  .rev44-detail-kit-stage .rev29-pack--corrected{width:min(48%,260px)}
  .rev44-detail-kit-stage .rev29-pack--concealed,
  .rev44-detail-kit-stage .rev29-pack--transparent-wide,
  .rev44-detail-kit-stage .rev29-pack--tray-wide{width:min(94%,560px)}
}
@media(max-width:620px){
  .rev44-detail-kit-stage{min-height:300px;margin-top:20px}
  .rev44-detail-kit-stage .rev29-pack--wood,
  .rev44-detail-kit-stage .rev29-pack--brown,
  .rev44-detail-kit-stage .rev29-pack--corrected{width:min(52%,220px)}
}
@media(prefers-reduced-motion:reduce){
  .rev44-detail-page-active .rev44-detail-kit-stage{animation:none!important}
}
/* REV44 — PRODUCT DETAIL LARGE ANIMATED KIT PREVIEW END */


/* REV45 — BIGGER KIT PRODUCT VISUALS + WHAT YOU GET START
   Purpose: make the Shop product-selection cards work harder commercially by enlarging the real animated kit assets and clarifying what is included. */
.product-grid.product-grid--animated-kits{
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:clamp(18px,2vw,28px);
}
.product-grid--animated-kits .product-card.has-kit-motion{
  min-height:clamp(760px,74vw,940px);
  padding:clamp(20px,2vw,28px);
  border-radius:40px;
  gap:clamp(18px,2vw,24px);
}
.product-grid--animated-kits .product-card.has-kit-motion::before{
  top:clamp(300px,31vw,420px);
  right:clamp(-10px,-.8vw,-4px);
  font-size:clamp(120px,13vw,188px);
  opacity:.88;
}
.product-grid--animated-kits .rev29-kit-preview{
  min-height:clamp(330px,30vw,440px);
  border-radius:32px;
  overflow:hidden;
  background:
    radial-gradient(circle at 68% 22%,rgba(255,255,255,.98),rgba(255,255,255,.28) 34%,rgba(255,255,255,.08) 68%),
    linear-gradient(145deg,rgba(255,255,255,.72),rgba(255,255,255,.24));
}
.product-grid--animated-kits .rev29-kit-preview::before{
  left:18px;
  top:16px;
  padding:8px 11px;
  font-size:10px;
}
.product-grid--animated-kits .rev29-kit-preview::after{
  inset:auto 14% 18px;
  height:24px;
  filter:blur(17px);
  opacity:.44;
}
.product-grid--animated-kits .rev29-pack--wood{
  width:min(50%,300px);
}
.product-grid--animated-kits .rev29-pack--brown,
.product-grid--animated-kits .rev29-pack--corrected{
  width:min(52%,320px);
}
.product-grid--animated-kits .rev29-pack--concealed,
.product-grid--animated-kits .rev29-pack--transparent-wide,
.product-grid--animated-kits .rev29-pack--tray-wide{
  width:min(94%,560px);
}
.product-grid--animated-kits .rev29-kit-copy{
  min-height:auto;
  gap:12px;
}
.product-grid--animated-kits .rev29-kit-copy h3{
  font-size:clamp(54px,6.4vw,98px);
  max-width:8ch;
}
.product-grid--animated-kits .rev29-kit-copy p{
  max-width:48ch;
  font-size:clamp(13px,1.05vw,16px);
}
.rev45-kit-includes{
  position:relative;
  z-index:2;
  display:grid;
  gap:12px;
  margin:4px 0 2px;
  padding:14px;
  border-radius:24px;
  background:rgba(255,255,255,.58);
  border:1px solid rgba(16,13,10,.10);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.72);
  backdrop-filter:blur(10px);
}
.rev45-kit-includes > b{
  font-size:10px;
  line-height:1;
  letter-spacing:.16em;
  text-transform:uppercase;
  color:#ff2c16;
}
.rev45-kit-includes__grid{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:8px;
}
.rev45-kit-includes__grid span{
  min-height:74px;
  display:grid;
  align-content:start;
  gap:5px;
  padding:10px;
  border-radius:17px;
  background:rgba(255,250,241,.78);
  border:1px solid rgba(16,13,10,.08);
}
.rev45-kit-includes__grid em{
  font-style:normal;
  font-size:10px;
  line-height:1;
  font-weight:950;
  color:rgba(16,13,10,.38);
}
.rev45-kit-includes__grid strong{
  font-size:12px;
  line-height:1.05;
  letter-spacing:-.02em;
  color:#100d0a;
}
.rev45-kit-includes__grid small{
  font-size:10px;
  line-height:1.25;
  font-weight:800;
  color:rgba(16,13,10,.55);
}
@media(max-width:920px){
  .product-grid.product-grid--animated-kits{grid-template-columns:1fr}
  .product-grid--animated-kits .product-card.has-kit-motion{min-height:auto}
  .product-grid--animated-kits .rev29-kit-preview{min-height:clamp(310px,56vw,420px)}
  .product-grid--animated-kits .rev29-pack--wood,
  .product-grid--animated-kits .rev29-pack--brown,
  .product-grid--animated-kits .rev29-pack--corrected{width:min(46%,260px)}
  .product-grid--animated-kits .rev29-pack--concealed,
  .product-grid--animated-kits .rev29-pack--transparent-wide,
  .product-grid--animated-kits .rev29-pack--tray-wide{width:min(92%,520px)}
}
@media(max-width:640px){
  .product-grid--animated-kits .rev29-kit-preview{min-height:280px}
  .product-grid--animated-kits .rev29-pack--wood,
  .product-grid--animated-kits .rev29-pack--brown,
  .product-grid--animated-kits .rev29-pack--corrected{width:min(56%,220px)}
  .product-grid--animated-kits .rev29-pack--concealed,
  .product-grid--animated-kits .rev29-pack--transparent-wide,
  .product-grid--animated-kits .rev29-pack--tray-wide{width:min(106%,430px)}
  .rev45-kit-includes__grid{grid-template-columns:repeat(2,minmax(0,1fr))}
}
/* REV45 — BIGGER KIT PRODUCT VISUALS + WHAT YOU GET END */




/* REV50 — DROP PAGE EVENT ARCHITECTURE START
   Purpose: make Drop page a clear launch/event destination without touching Home hero, Shop grid, Layering or kit animation systems. */
.rev50-drop-page{
  position:relative;
  --rev50-red:#ff3f25;
  --rev50-ink:#14110e;
  --rev50-paper:#fff8ee;
  --rev50-line:rgba(20,17,14,.12);
  --rev50-soft:#fffdf8;
}
.rev50-drop-hero .page-title{max-width:8.2ch}
.rev50-drop-status-row{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
.rev50-status-pill{display:inline-flex;align-items:center;gap:10px;border:1px solid var(--rev50-line);border-radius:999px;background:rgba(255,255,255,.72);padding:10px 14px;font-size:12px;font-weight:950;letter-spacing:.1em;text-transform:uppercase;color:var(--rev50-ink)}
.rev50-status-pill::before{content:"";width:8px;height:8px;border-radius:999px;background:var(--rev50-red);box-shadow:0 0 0 8px rgba(255,63,37,.12)}
.rev50-drop-time-banner{margin:clamp(26px,4vw,58px) 0;border:1px solid var(--rev50-line);border-radius:34px;background:#14110e;color:white;overflow:hidden;position:relative;box-shadow:0 28px 90px rgba(20,17,14,.16)}
.rev50-drop-time-banner__rail{display:flex;width:max-content;gap:22px;padding:13px 0;border-bottom:1px solid rgba(255,255,255,.14);animation:rev50DropRail 24s linear infinite;white-space:nowrap}
.rev50-drop-time-banner__rail span{font-size:12px;font-weight:950;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.72);padding-inline:14px}
@keyframes rev50DropRail{to{transform:translateX(-50%)}}
.rev50-drop-time-banner__core{display:grid;grid-template-columns:1fr auto;gap:24px;align-items:end;padding:clamp(24px,4vw,52px)}
.rev50-drop-time-banner__core p{margin:0 0 8px;font-size:12px;font-weight:950;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.55)}
.rev50-drop-time-banner__core strong{display:block;font-family:var(--display,ui-sans-serif);font-size:clamp(54px,9vw,138px);line-height:.78;letter-spacing:-.075em;text-transform:uppercase;color:#fff}
.rev50-drop-time-banner__core span{display:block;max-width:54ch;margin-top:18px;font-size:clamp(15px,1.35vw,18px);line-height:1.55;color:rgba(255,255,255,.72)}
.rev50-drop-time-chip{align-self:center;border:1px solid rgba(255,255,255,.24);border-radius:999px;background:rgba(255,255,255,.08);padding:12px 16px;font-size:12px;font-weight:950;letter-spacing:.12em;text-transform:uppercase;color:#fff}
.rev50-event-grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(320px,.9fr);gap:clamp(18px,3vw,34px);margin:clamp(32px,5vw,72px) 0}
.rev50-event-card{border:1px solid var(--rev50-line);border-radius:34px;background:rgba(255,255,255,.76);padding:clamp(24px,3.4vw,46px);box-shadow:0 22px 70px rgba(20,17,14,.07)}
.rev50-event-card--red{background:linear-gradient(135deg,#ff3f25,#ff8c45);color:white;border-color:rgba(255,255,255,.28)}
.rev50-event-card h2,.rev50-section-head h2{font-family:var(--display,ui-sans-serif);font-size:clamp(44px,6vw,92px);line-height:.84;letter-spacing:-.065em;text-transform:uppercase;margin:0 0 18px;color:inherit}
.rev50-event-card p{font-size:clamp(15px,1.3vw,18px);line-height:1.64;margin:0;color:rgba(20,17,14,.68)}
.rev50-event-card--red p{color:rgba(255,255,255,.78)}
.rev50-event-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:28px}
.rev50-event-metrics span{border:1px solid rgba(20,17,14,.1);border-radius:20px;padding:14px;background:rgba(255,255,255,.64)}
.rev50-event-metrics b{display:block;font-family:var(--display,ui-sans-serif);font-size:clamp(26px,3vw,44px);line-height:.88;letter-spacing:-.04em;color:var(--rev50-red)}
.rev50-event-metrics small{display:block;margin-top:6px;font-size:11px;font-weight:850;letter-spacing:.08em;text-transform:uppercase;color:rgba(20,17,14,.48)}
.rev50-drop-kits{margin:clamp(40px,6vw,90px) 0}
.rev50-section-head{display:grid;grid-template-columns:minmax(0,.9fr) minmax(280px,.55fr);gap:24px;align-items:end;margin-bottom:22px}
.rev50-section-head p{font-size:clamp(15px,1.25vw,18px);line-height:1.6;color:rgba(20,17,14,.62);margin:0}
.rev50-kit-strip{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.rev50-kit-card{position:relative;overflow:hidden;border:1px solid rgba(20,17,14,.12);border-radius:30px;background:var(--kit-bg,#fff);min-height:330px;padding:22px;display:flex;flex-direction:column;justify-content:space-between;transition:transform .32s cubic-bezier(.18,.82,.22,1),box-shadow .32s cubic-bezier(.18,.82,.22,1)}
.rev50-kit-card:hover{transform:translateY(-6px);box-shadow:0 28px 80px rgba(20,17,14,.12)}
.rev50-kit-num{font-family:var(--display,ui-sans-serif);font-size:74px;line-height:.78;letter-spacing:-.08em;color:rgba(20,17,14,.16)}
.rev50-kit-card h3{font-family:var(--display,ui-sans-serif);font-size:clamp(34px,3.6vw,58px);line-height:.82;letter-spacing:-.065em;text-transform:uppercase;margin:0 0 12px;color:var(--rev50-ink)}
.rev50-kit-card p{font-size:14px;line-height:1.5;color:rgba(20,17,14,.64);margin:0 0 16px}
.rev50-kit-notes{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:16px}
.rev50-kit-notes span{border:1px solid rgba(20,17,14,.1);background:rgba(255,255,255,.52);border-radius:999px;padding:7px 9px;font-size:10px;font-weight:950;letter-spacing:.08em;text-transform:uppercase;color:rgba(20,17,14,.68)}
.rev50-kit-actions{display:grid;grid-template-columns:1fr;gap:8px}
.rev50-kit-actions .mini-btn,.rev50-kit-actions button{width:100%;justify-content:center;border:0;cursor:pointer}
.rev50-work-rules{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(18px,3vw,34px);margin:clamp(42px,6vw,92px) 0}
.rev50-step-list,.rev50-rule-list{display:grid;gap:10px;margin:0;padding:0;list-style:none}
.rev50-step-list li,.rev50-rule-list li{display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:start;border:1px solid rgba(20,17,14,.1);border-radius:24px;background:rgba(255,255,255,.72);padding:16px}
.rev50-step-list b,.rev50-rule-list b{display:grid;place-items:center;width:42px;height:42px;border-radius:999px;background:#14110e;color:white;font-size:12px;font-weight:950;letter-spacing:.08em}
.rev50-step-list strong,.rev50-rule-list strong{display:block;font-size:15px;font-weight:950;letter-spacing:-.02em;margin-bottom:3px;color:var(--rev50-ink)}
.rev50-step-list span,.rev50-rule-list span{display:block;font-size:13px;line-height:1.45;color:rgba(20,17,14,.58)}
.rev50-sticky-drop-cta{position:sticky;bottom:18px;z-index:12;margin-top:clamp(36px,5vw,72px);display:grid;grid-template-columns:1fr auto auto;gap:12px;align-items:center;border:1px solid rgba(20,17,14,.14);border-radius:999px;background:rgba(255,253,248,.88);backdrop-filter:blur(18px);box-shadow:0 18px 70px rgba(20,17,14,.14);padding:12px 14px 12px 22px}
.rev50-sticky-drop-cta strong{font-size:14px;font-weight:950;letter-spacing:.02em;color:var(--rev50-ink)}
.rev50-sticky-drop-cta span{display:block;font-size:12px;line-height:1.35;color:rgba(20,17,14,.56)}
.rev50-sticky-drop-cta .pill,.rev50-sticky-drop-cta .mini-btn{white-space:nowrap;cursor:pointer;border:0}
@media(max-width:1020px){
  .rev50-event-grid,.rev50-section-head,.rev50-work-rules{grid-template-columns:1fr}
  .rev50-kit-strip{grid-template-columns:repeat(2,minmax(0,1fr))}
  .rev50-drop-time-banner__core{grid-template-columns:1fr}
  .rev50-sticky-drop-cta{grid-template-columns:1fr;border-radius:28px}
}
@media(max-width:620px){
  .rev50-kit-strip{grid-template-columns:1fr}
  .rev50-event-metrics{grid-template-columns:1fr}
  .rev50-drop-status-row{gap:8px}
  .rev50-status-pill{font-size:10px;padding:9px 11px}
}
/* REV50 — DROP PAGE EVENT ARCHITECTURE END */

/* REV49 — DROP LIST CONVERSION SYSTEM START
   Purpose: turn Join Drop List into a real conversion moment without changing Home/Shop/Drop/Layering heroes or kit animations. */
:root{
  --rev49-panel-radius:32px;
  --rev49-soft-shadow:0 34px 120px rgba(16,13,10,.24);
}
.rev49-drop-panel{
  border:0;
  padding:0;
  width:min(1040px,calc(100vw - 28px));
  max-height:min(92svh,860px);
  border-radius:var(--rev49-panel-radius);
  background:transparent;
  overflow:visible;
  color:#100d0a;
}
.rev49-drop-panel::backdrop{
  background:rgba(16,13,10,.44);
  backdrop-filter:blur(14px);
}
.rev49-drop-panel[open] .rev49-drop-panel__shell{
  animation:rev49PanelIn .56s cubic-bezier(.18,.82,.22,1) both;
}
@keyframes rev49PanelIn{
  from{opacity:0;transform:translate3d(0,28px,0) scale(.975)}
  to{opacity:1;transform:none}
}
.rev49-drop-panel__shell{
  position:relative;
  display:grid;
  grid-template-columns:minmax(300px,.92fr) minmax(360px,1.08fr);
  gap:clamp(14px,2vw,22px);
  padding:clamp(12px,1.6vw,18px);
  border:1px solid rgba(255,255,255,.46);
  border-radius:var(--rev49-panel-radius);
  background:linear-gradient(135deg,rgba(255,250,242,.96),rgba(255,255,255,.96));
  box-shadow:var(--rev49-soft-shadow);
  overflow:hidden;
  isolation:isolate;
}
.rev49-drop-panel__shell::before{
  content:"";
  position:absolute;
  inset:auto -9% -26% auto;
  width:min(420px,42vw);
  aspect-ratio:1;
  border-radius:50%;
  background:radial-gradient(circle, color-mix(in srgb, var(--rev49-kit-color,#ff4b39) 40%, transparent), transparent 68%);
  opacity:.5;
  z-index:-1;
}
.rev49-drop-panel__visual{
  min-height:clamp(390px,56svh,660px);
  border-radius:calc(var(--rev49-panel-radius) - 10px);
  background:linear-gradient(145deg,color-mix(in srgb,var(--rev49-kit-color,#fff0dd) 38%,#fff),#fffaf2);
  border:1px solid rgba(16,13,10,.1);
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding:clamp(16px,2vw,24px);
  overflow:hidden;
  position:relative;
}
.rev49-drop-panel__visual::after{
  content:attr(data-num);
  position:absolute;
  right:-.03em;
  bottom:-.22em;
  font-family:var(--display,"Archivo Black",Impact,sans-serif);
  font-size:clamp(150px,19vw,310px);
  line-height:.8;
  letter-spacing:-.09em;
  color:rgba(16,13,10,.055);
  pointer-events:none;
}
.rev49-drop-panel__access{
  display:inline-flex;
  width:max-content;
  align-items:center;
  gap:8px;
  border-radius:999px;
  padding:8px 12px;
  background:rgba(255,255,255,.72);
  border:1px solid rgba(16,13,10,.1);
  font-size:10px;
  font-weight:950;
  letter-spacing:.13em;
  text-transform:uppercase;
  position:relative;
  z-index:3;
}
.rev49-drop-panel__access::before{
  content:"";
  width:8px;
  height:8px;
  border-radius:50%;
  background:#ff3c22;
  box-shadow:0 0 0 6px rgba(255,60,34,.12);
}
.rev49-drop-kit-mount{
  position:relative;
  z-index:2;
  flex:1;
  display:grid;
  place-items:center;
  min-height:280px;
  padding:clamp(10px,2vw,26px);
}
.rev49-drop-kit-mount .rev29-kit-preview{
  width:min(94%,520px)!important;
  min-height:clamp(250px,42svh,480px)!important;
  background:transparent!important;
  border:0!important;
  box-shadow:none!important;
  overflow:visible!important;
}
.rev49-drop-kit-mount .rev29-kit-preview::before,
.rev49-drop-kit-mount .rev29-kit-preview::after{display:none!important}
.rev49-drop-kit-mount .rev29-pack--wood,
.rev49-drop-kit-mount .rev29-pack--brown,
.rev49-drop-kit-mount .rev29-pack--corrected{width:min(76%,390px)!important}
.rev49-drop-kit-mount .rev29-pack--concealed,
.rev49-drop-kit-mount .rev29-pack--transparent-wide,
.rev49-drop-kit-mount .rev29-pack--tray-wide{width:min(112%,640px)!important}
.rev49-drop-panel__visual-note{
  position:relative;
  z-index:2;
  max-width:42ch;
  font-size:13px;
  line-height:1.5;
  color:rgba(16,13,10,.62);
  font-weight:850;
}
.rev49-drop-panel__content{
  position:relative;
  display:flex;
  flex-direction:column;
  gap:14px;
  padding:clamp(16px,2.4vw,28px);
  border-radius:calc(var(--rev49-panel-radius) - 10px);
  background:#fff;
  border:1px solid rgba(16,13,10,.1);
}
.rev49-drop-panel__close{
  position:absolute;
  top:14px;
  right:14px;
  width:42px;
  height:42px;
  border-radius:50%;
  border:1px solid rgba(16,13,10,.12);
  background:#fffaf2;
  color:#100d0a;
  cursor:pointer;
  font-size:22px;
  font-weight:900;
  line-height:1;
  display:grid;
  place-items:center;
  transition:transform .24s ease,background .24s ease;
}
.rev49-drop-panel__close:hover{transform:rotate(8deg) scale(1.04);background:#100d0a;color:#fff}
.rev49-drop-panel__kicker{
  margin:4px 50px 0 0;
  color:#ff3c22;
  font-size:11px;
  font-weight:950;
  letter-spacing:.18em;
  text-transform:uppercase;
}
.rev49-drop-panel__title{
  margin:0;
  max-width:8.6ch;
  font-family:var(--display,"Archivo Black",Impact,sans-serif);
  font-size:clamp(42px,5.6vw,86px);
  line-height:.86;
  letter-spacing:-.065em;
  color:#100d0a;
}
.rev49-drop-panel__summary{
  margin:0;
  max-width:48ch;
  color:rgba(16,13,10,.68);
  font-size:15px;
  line-height:1.55;
  font-weight:850;
}
.rev49-drop-panel__price-row{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  padding:14px 16px;
  border-radius:22px;
  background:#100d0a;
  color:#fff;
}
.rev49-drop-panel__price-row b{font-size:clamp(28px,3vw,42px);letter-spacing:-.04em}
.rev49-drop-panel__price-row span{font-size:12px;line-height:1.35;color:rgba(255,255,255,.68);font-weight:850;text-align:right}
.rev49-drop-panel__included{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:8px;
}
.rev49-drop-panel__included span{
  display:flex;
  flex-direction:column;
  gap:4px;
  border-radius:16px;
  padding:10px;
  background:#f6f3ed;
  font-size:11px;
  font-weight:950;
  line-height:1.15;
}
.rev49-drop-panel__included em{
  font-style:normal;
  color:#ff3c22;
  letter-spacing:.1em;
  font-size:10px;
}
.rev49-drop-panel__form{
  display:grid;
  gap:10px;
  margin-top:2px;
}
.rev49-drop-panel__field-row{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
}
.rev49-drop-panel__field{
  display:flex;
  flex-direction:column;
  gap:7px;
}
.rev49-drop-panel__field label{
  font-size:10px;
  font-weight:950;
  letter-spacing:.13em;
  color:rgba(16,13,10,.54);
  text-transform:uppercase;
}
.rev49-drop-panel__field input{
  min-height:50px;
  border-radius:16px;
  border:1px solid rgba(16,13,10,.14);
  background:#fffaf2;
  padding:0 14px;
  font:900 14px/1 var(--body,Inter,system-ui,sans-serif);
  color:#100d0a;
  outline:none;
}
.rev49-drop-panel__field input:focus{border-color:#ff3c22;box-shadow:0 0 0 4px rgba(255,60,34,.1)}
.rev49-drop-panel__primary{
  min-height:54px;
  border:0;
  border-radius:999px;
  background:#ff3c22;
  color:#fff;
  font-weight:950;
  font-size:14px;
  cursor:pointer;
  box-shadow:0 18px 40px rgba(255,60,34,.2);
  transition:transform .22s cubic-bezier(.18,.82,.22,1), box-shadow .22s ease;
}
.rev49-drop-panel__primary:hover{transform:translateY(-2px);box-shadow:0 24px 54px rgba(255,60,34,.28)}
.rev49-drop-panel__secondary{
  border:0;
  background:transparent;
  color:#100d0a;
  font-weight:950;
  font-size:13px;
  cursor:pointer;
  text-decoration:underline;
  text-underline-offset:4px;
  width:max-content;
}
.rev49-drop-panel__micro{
  margin:0;
  font-size:11px;
  line-height:1.45;
  color:rgba(16,13,10,.5);
  font-weight:750;
}
.rev49-drop-panel__success{
  display:none;
  padding:16px;
  border-radius:22px;
  background:linear-gradient(135deg,color-mix(in srgb,var(--rev49-kit-color,#d9f5e8) 55%,#fff),#fff);
  border:1px solid rgba(16,13,10,.1);
}
.rev49-drop-panel__success b{display:block;font-size:18px;margin-bottom:5px}.rev49-drop-panel__success span{display:block;color:rgba(16,13,10,.64);font-size:13px;line-height:1.5;font-weight:850}
.rev49-drop-panel.is-confirmed .rev49-drop-panel__form{display:none}.rev49-drop-panel.is-confirmed .rev49-drop-panel__success{display:block}
@media(max-width:880px){
  .rev49-drop-panel__shell{grid-template-columns:1fr;max-height:92svh;overflow:auto}
  .rev49-drop-panel__visual{min-height:330px}
  .rev49-drop-panel__field-row,.rev49-drop-panel__included{grid-template-columns:1fr 1fr}
}
@media(max-width:560px){
  .rev49-drop-panel{width:calc(100vw - 16px);max-height:94svh}
  .rev49-drop-panel__shell{padding:8px;border-radius:24px}
  .rev49-drop-panel__visual,.rev49-drop-panel__content{border-radius:18px}
  .rev49-drop-panel__included{grid-template-columns:1fr}
  .rev49-drop-panel__price-row{align-items:flex-start;flex-direction:column}.rev49-drop-panel__price-row span{text-align:left}
}
@media(prefers-reduced-motion:reduce){
  .rev49-drop-panel[open] .rev49-drop-panel__shell{animation:none!important}
  .rev49-drop-panel__primary,.rev49-drop-panel__close{transition:none!important}
}
/* REV49 — DROP LIST CONVERSION SYSTEM END */


/* REV51 — COMMERCE CLARITY LOCK START
   Purpose: simplify the sales spine without touching Home hero or its animation system.
   Control values: keep shop scannable, kit detail purchase-first, data secondary. */
.rev51-card-uniform-line{
  margin:.2rem 0 .85rem!important;
  font-size:12px!important;
  font-weight:950!important;
  letter-spacing:.02em!important;
  color:rgba(18,15,12,.62)!important;
}
.tabaq-page[data-page="shop"] .rev48-shop-guide{
  grid-template-columns:minmax(280px,.9fr) minmax(380px,1.1fr);
}
.tabaq-page[data-page="shop"] .rev48-shop-guide__copy h2{
  max-width:10.8ch;
}
.tabaq-page[data-page="shop"] .product-card .rev46-kit-includes,
.tabaq-page[data-page="shop"] .product-card .rev45-kit-includes{
  margin-top:16px;
}
.tabaq-page[data-page="shop"] .product-card .rev46-kit-includes b,
.tabaq-page[data-page="shop"] .product-card .rev45-kit-includes b{
  letter-spacing:.16em;
  color:#ff3f25;
}
.rev48-purchase-panel{
  position:sticky;
  top:112px;
  align-self:start;
}
.rev51-buybox-proof{
  margin:12px 0 0!important;
  font-size:12px!important;
  line-height:1.45!important;
  color:rgba(255,255,255,.68)!important;
}
.rev51-secondary-data{
  opacity:.78;
}
.rev51-secondary-data h3,
.rev51-secondary-data .page-kicker{
  color:rgba(255,63,37,.78)!important;
}
.rev43-detail-content .rev43-detail-grid{
  gap:12px;
}
.rev47-sales-intro p{
  max-width:62ch;
}
.rev49-drop-panel .rev49-drop-status,
#rev49DropStatus{
  letter-spacing:.08em;
}
@media(max-width:960px){
  .rev48-purchase-panel{position:relative;top:auto}
  .tabaq-page[data-page="shop"] .rev48-shop-guide{grid-template-columns:1fr}
}
/* REV51 — COMMERCE CLARITY LOCK END */


/* ===== inline-style-02 ===== */
/* REV46 — SHOP / KIT COMMERCE ARCHITECTURE TIGHTENING START
   Intent: keep the Shop page scannable, move large animated kit presentation to detail pages,
   and make scent/profile information read as a sales system rather than repeated product cards. */
.tabaq-page[data-page="shop"] .collection-tools{
  margin-bottom:clamp(18px,2vw,26px);
}
.rev46-shop-commerce{
  margin:clamp(24px,3.6vw,46px) 0 clamp(20px,3vw,34px)!important;
  grid-template-columns:minmax(300px,.82fr) minmax(420px,1.18fr)!important;
  gap:clamp(14px,1.6vw,20px)!important;
  align-items:stretch!important;
}
.rev46-shop-commerce__intro{
  min-height:auto!important;
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.rev46-shop-commerce__intro h2{
  font-size:clamp(44px,5.6vw,82px)!important;
  max-width:9.7ch;
}
.rev46-shop-commerce__logic{
  display:block!important;
  padding:clamp(16px,2vw,24px)!important;
  border:1px solid rgba(16,13,10,.12);
  border-radius:34px;
  background:linear-gradient(135deg,rgba(255,255,255,.86),rgba(255,250,241,.62));
  box-shadow:0 22px 54px rgba(37,25,12,.08);
}
.rev46-scent-selector{
  height:100%;
  display:grid;
  align-content:center;
  gap:clamp(14px,1.7vw,20px);
}
.rev46-selector-kicker{
  margin:0;
  font-size:10px;
  letter-spacing:.18em;
  text-transform:uppercase;
  font-weight:950;
  color:#ff2c16;
}
.rev46-scent-selector h3{
  margin:0;
  max-width:16ch;
  font-size:clamp(28px,3.5vw,48px);
  line-height:.94;
  letter-spacing:-.05em;
  color:#100d0a;
}
.rev46-scent-chip-grid{
  display:grid;
  grid-template-columns:repeat(5,minmax(0,1fr));
  gap:8px;
}
.rev46-scent-chip{
  min-height:92px;
  padding:12px!important;
  border-radius:20px!important;
  background:rgba(255,255,255,.78)!important;
  color:#100d0a!important;
  border:1px solid rgba(16,13,10,.12)!important;
  text-align:left!important;
  display:grid;
  gap:7px;
  align-content:start;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.76);
}
.rev46-scent-chip b{
  font-size:12px;
  letter-spacing:.1em;
  text-transform:uppercase;
  line-height:1;
}
.rev46-scent-chip span{
  font-size:11px;
  line-height:1.35;
  letter-spacing:0;
  text-transform:none;
  color:rgba(16,13,10,.58);
  font-weight:850;
}
.rev46-scent-chip.is-active{
  background:#100d0a!important;
  color:#fff!important;
  border-color:#100d0a!important;
}
.rev46-scent-chip.is-active span{color:rgba(255,255,255,.68)}
.rev46-kit-promise{
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap:8px;
  padding:10px;
  border-radius:999px;
  border:1px solid rgba(16,13,10,.1);
  background:rgba(255,255,255,.58);
}
.rev46-kit-promise span{
  padding:0 8px;
  font-size:10px;
  font-weight:950;
  letter-spacing:.16em;
  text-transform:uppercase;
  color:#ff2c16;
}
.rev46-kit-promise strong{
  border-radius:999px;
  background:rgba(16,13,10,.06);
  padding:7px 10px;
  font-size:11px;
  line-height:1;
  letter-spacing:.05em;
  text-transform:uppercase;
  color:rgba(16,13,10,.72);
}
.product-grid.rev46-kit-grid{
  grid-template-columns:repeat(4,minmax(0,1fr))!important;
  gap:clamp(14px,1.35vw,18px)!important;
  align-items:stretch;
}
.rev46-kit-grid .product-card.has-kit-motion{
  min-height:560px!important;
  padding:18px!important;
  border-radius:32px!important;
  gap:12px!important;
}
.rev46-kit-grid .product-card.has-kit-motion::before{
  top:auto!important;
  right:-10px!important;
  bottom:-26px!important;
  font-size:clamp(96px,8.2vw,126px)!important;
  opacity:.48!important;
}
.rev46-kit-grid .rev29-kit-preview{
  min-height:190px!important;
  border-radius:24px!important;
  overflow:hidden!important;
  background:linear-gradient(145deg,rgba(255,255,255,.72),rgba(255,255,255,.26))!important;
}
.rev46-kit-grid .rev29-kit-preview::before{
  left:12px!important;
  top:12px!important;
  font-size:9px!important;
  padding:7px 9px!important;
}
.rev46-kit-grid .rev29-kit-preview::after{
  inset:auto 20% 14px!important;
  height:18px!important;
  filter:blur(14px)!important;
  opacity:.3!important;
}
.rev46-kit-grid .rev29-pack--wood,
.rev46-kit-grid .rev29-pack--brown,
.rev46-kit-grid .rev29-pack--corrected{
  width:min(50%,210px)!important;
}
.rev46-kit-grid .rev29-pack--concealed,
.rev46-kit-grid .rev29-pack--transparent-wide,
.rev46-kit-grid .rev29-pack--tray-wide{
  width:min(88%,360px)!important;
}
.rev46-kit-grid .rev29-kit-copy{
  gap:8px!important;
  min-height:auto!important;
}
.rev46-kit-grid .rev29-kit-copy h3{
  font-size:clamp(42px,4vw,58px)!important;
  line-height:.86!important;
  max-width:7.5ch!important;
}
.rev46-kit-grid .rev29-kit-copy p{
  font-size:13px!important;
  line-height:1.45!important;
  max-width:34ch!important;
}
.rev46-kit-grid .rev43-card-profile{
  margin:4px 0!important;
  gap:8px!important;
}
.rev46-kit-grid .rev43-profile-bars{
  display:none!important;
}
.rev46-kit-grid .rev43-occasion-row span,
.rev46-kit-grid .rev43-note-chip{
  font-size:9px!important;
  padding:5px 7px!important;
}
.rev46-kit-grid .rev45-kit-includes{
  margin:0!important;
  padding:11px!important;
  border-radius:20px!important;
  gap:9px!important;
}
.rev46-kit-grid .rev45-kit-includes__grid{
  grid-template-columns:repeat(2,minmax(0,1fr))!important;
  gap:6px!important;
}
.rev46-kit-grid .rev45-kit-includes__grid span{
  min-height:54px!important;
  padding:8px!important;
  border-radius:14px!important;
}
.rev46-kit-grid .rev45-kit-includes__grid em{font-size:9px!important}
.rev46-kit-grid .rev45-kit-includes__grid strong{font-size:11px!important}
.rev46-kit-grid .rev45-kit-includes__grid small{font-size:9px!important;line-height:1.2!important}
.rev46-kit-grid .product-card__meta{
  position:relative;
  z-index:3;
  margin-top:auto;
}
.rev46-kit-grid .product-card__actions{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:8px;
}
.rev46-kit-grid .product-card__actions button:first-child{
  grid-column:1/-1;
  background:#100d0a;
  color:#fff;
}
/* Product detail: this is where the animated kit gets the larger sales treatment. */
.tabaq-page[data-page^="product-"] .rev43-detail-page{
  grid-template-columns:minmax(420px,.94fr) minmax(520px,1.06fr)!important;
  gap:clamp(18px,2vw,28px)!important;
}
.tabaq-page[data-page^="product-"] .rev44-detail-hero-with-kit{
  min-height:clamp(780px,84svh,980px)!important;
}
.tabaq-page[data-page^="product-"] .rev44-detail-kit-stage{
  min-height:clamp(430px,43vw,640px)!important;
  margin-top:clamp(24px,3vw,44px)!important;
}
.tabaq-page[data-page^="product-"] .rev44-detail-kit-stage .rev29-pack--wood,
.tabaq-page[data-page^="product-"] .rev44-detail-kit-stage .rev29-pack--brown,
.tabaq-page[data-page^="product-"] .rev44-detail-kit-stage .rev29-pack--corrected{
  width:min(70%,440px)!important;
}
.tabaq-page[data-page^="product-"] .rev44-detail-kit-stage .rev29-pack--concealed,
.tabaq-page[data-page^="product-"] .rev44-detail-kit-stage .rev29-pack--transparent-wide,
.tabaq-page[data-page^="product-"] .rev44-detail-kit-stage .rev29-pack--tray-wide{
  width:min(98%,720px)!important;
}
.rev46-detail-includes{
  background:linear-gradient(135deg,#fff,#fffaf1)!important;
}
.rev46-detail-includes p{
  margin-bottom:14px;
  max-width:72ch;
}
.rev46-detail-includes__grid{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:10px;
}
.rev46-detail-includes__grid div{
  min-height:116px;
  display:grid;
  align-content:start;
  gap:6px;
  padding:14px;
  border-radius:20px;
  background:rgba(16,13,10,.045);
  border:1px solid rgba(16,13,10,.08);
}
.rev46-detail-includes__grid em{
  font-style:normal;
  font-size:11px;
  line-height:1;
  font-weight:950;
  letter-spacing:.12em;
  color:#ff2c16;
}
.rev46-detail-includes__grid strong{
  font-size:17px;
  line-height:1;
  letter-spacing:-.025em;
  color:#100d0a;
}
.rev46-detail-includes__grid small{
  font-size:12px;
  line-height:1;
  font-weight:950;
  color:rgba(16,13,10,.44);
}
.rev46-detail-includes__grid span{
  font-size:12px;
  line-height:1.3;
  font-weight:850;
  color:rgba(16,13,10,.62);
}
@media(max-width:1280px){
  .product-grid.rev46-kit-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}
  .rev46-kit-grid .product-card.has-kit-motion{min-height:560px!important}
  .rev46-scent-chip-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
}
@media(max-width:980px){
  .rev46-shop-commerce,
  .tabaq-page[data-page^="product-"] .rev43-detail-page{grid-template-columns:1fr!important}
  .tabaq-page[data-page^="product-"] .rev44-detail-hero-with-kit{min-height:auto!important}
  .rev46-detail-includes__grid{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media(max-width:720px){
  .product-grid.rev46-kit-grid{grid-template-columns:1fr!important}
  .rev46-scent-chip-grid{grid-template-columns:1fr 1fr}
  .rev46-kit-promise{border-radius:22px}
  .rev46-detail-includes__grid{grid-template-columns:1fr}
}
@media(max-width:520px){.rev46-scent-chip-grid{grid-template-columns:1fr}}
/* REV46 — SHOP / KIT COMMERCE ARCHITECTURE TIGHTENING END */


/* REV47 — KIT DETAIL SALES ARCHITECTURE + TABAQ EXPLAINER START
   Purpose: clarify fragrance layering and improve kit-detail conversion without altering Home hero, hero scroll, nav, Drop, Layering, routing, or kit motion systems.
*/
.rev47-layer-explainer{
  margin:clamp(22px,3vw,38px) 0 clamp(24px,4vw,52px);
  display:grid;
  grid-template-columns:minmax(280px,.86fr) minmax(420px,1.14fr);
  gap:clamp(16px,2vw,22px);
  align-items:stretch;
}
.rev47-layer-explainer__copy,
.rev47-layer-explainer__steps,
.rev47-layer-explainer__ticker{
  border:1px solid rgba(16,13,10,.12);
  background:linear-gradient(140deg,rgba(255,255,255,.82),rgba(255,250,241,.54));
  box-shadow:0 22px 60px rgba(37,25,12,.065);
}
.rev47-layer-explainer__copy{
  border-radius:34px;
  padding:clamp(24px,3.2vw,46px);
  display:grid;
  align-content:center;
  min-height:300px;
}
.rev47-layer-explainer__copy h2{
  font-family:var(--display);
  font-size:clamp(44px,6.2vw,98px);
  line-height:.82;
  letter-spacing:-.075em;
  text-transform:uppercase;
  margin:0 0 18px;
  color:var(--ink);
  max-width:8.5ch;
}
.rev47-layer-explainer__copy p:not(.page-kicker){
  max-width:48ch;
  margin:0;
  font-size:clamp(15px,1.2vw,18px);
  line-height:1.55;
  font-weight:850;
  color:rgba(16,13,10,.66);
}
.rev47-layer-explainer__ticker{
  grid-column:1/-1;
  overflow:hidden;
  border-radius:999px;
  display:flex;
  gap:12px;
  padding:10px;
  background:#100d0a;
  color:#fff;
}
.rev47-layer-explainer__ticker span{
  flex:1;
  min-width:max-content;
  border-radius:999px;
  background:rgba(255,255,255,.08);
  padding:11px 14px;
  font-size:11px;
  font-weight:950;
  letter-spacing:.13em;
  text-transform:uppercase;
  text-align:center;
}
.rev47-layer-explainer__steps{
  border-radius:34px;
  padding:clamp(16px,2vw,24px);
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:10px;
}
.rev47-layer-explainer__steps article{
  min-height:180px;
  display:grid;
  align-content:space-between;
  gap:12px;
  border-radius:26px;
  padding:18px;
  background:rgba(255,255,255,.62);
  border:1px solid rgba(16,13,10,.09);
}
.rev47-layer-explainer__steps b{
  font-size:13px;
  line-height:1;
  font-weight:950;
  color:#ff2c16;
  letter-spacing:.14em;
}
.rev47-layer-explainer__steps strong{
  font-family:var(--display);
  font-size:clamp(34px,3.2vw,54px);
  line-height:.84;
  letter-spacing:-.06em;
  text-transform:uppercase;
  color:var(--ink);
}
.rev47-layer-explainer__steps p{
  margin:0;
  font-size:13px;
  line-height:1.45;
  font-weight:820;
  color:rgba(16,13,10,.62);
}
.tabaq-page[data-page^="product-"] .rev47-detail-sales-page{
  --rev47-accent:#ff3b22;
}
.rev47-sales-intro{
  border-radius:30px;
  border:1px solid rgba(16,13,10,.12);
  background:linear-gradient(135deg,rgba(255,255,255,.96),rgba(255,250,241,.66));
  box-shadow:0 20px 54px rgba(37,25,12,.055);
  padding:clamp(22px,2.4vw,34px);
  display:grid;
  gap:12px;
}
.rev47-sales-intro h2{
  font-family:var(--display);
  font-size:clamp(38px,4.3vw,70px);
  line-height:.88;
  letter-spacing:-.062em;
  text-transform:uppercase;
  max-width:11.5ch;
  margin:0;
  color:#100d0a;
}
.rev47-sales-intro p:not(.page-kicker){
  margin:0;
  max-width:62ch;
  font-size:15px;
  line-height:1.55;
  font-weight:820;
  color:rgba(16,13,10,.65);
}
.rev47-mood-row{
  display:flex;
  flex-wrap:wrap;
  gap:7px;
  margin-top:4px;
}
.rev47-mood-row span{
  border-radius:999px;
  padding:8px 10px;
  background:rgba(16,13,10,.06);
  border:1px solid rgba(16,13,10,.08);
  font-size:10px;
  font-weight:950;
  letter-spacing:.08em;
  text-transform:uppercase;
  color:rgba(16,13,10,.66);
}
.rev47-ritual-strip{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:10px;
  margin:0 0 2px;
}
.rev47-ritual-strip article{
  border-radius:24px;
  border:1px solid rgba(16,13,10,.1);
  background:#fff;
  min-height:142px;
  padding:16px;
  display:grid;
  gap:8px;
  align-content:start;
  box-shadow:0 14px 38px rgba(37,25,12,.045);
}
.rev47-ritual-strip b{
  font-size:11px;
  line-height:1;
  font-weight:950;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:var(--rev47-accent,#ff2c16);
}
.rev47-ritual-strip strong{
  font-size:21px;
  line-height:1;
  letter-spacing:-.04em;
  color:#100d0a;
}
.rev47-ritual-strip span{
  font-size:12px;
  line-height:1.42;
  font-weight:820;
  color:rgba(16,13,10,.6);
}
.rev47-choice-panel{
  display:grid!important;
  grid-template-columns:1fr 1fr 1fr;
  gap:12px;
  background:linear-gradient(145deg,#100d0a,#1b1713)!important;
  color:#fff;
}
.rev47-choice-panel h3{color:#ff3b22!important}
.rev47-choice-panel ul{
  list-style:none;
  margin:0;
  padding:0;
  display:grid;
  gap:8px;
}
.rev47-choice-panel li,
.rev47-choice-panel p{
  margin:0;
  color:rgba(255,255,255,.72)!important;
  font-size:13px!important;
  line-height:1.5!important;
  font-weight:820!important;
}
.rev47-choice-panel li::before{
  content:"→";
  color:#ff3b22;
  font-weight:950;
  margin-right:7px;
}
.rev47-related-kits{
  border-radius:30px;
  background:linear-gradient(135deg,rgba(255,255,255,.82),rgba(255,250,241,.58));
  border:1px solid rgba(16,13,10,.12);
  padding:clamp(20px,2vw,28px);
  display:grid;
  gap:14px;
}
.rev47-related-kits h2{
  font-family:var(--display);
  font-size:clamp(34px,4vw,64px);
  line-height:.88;
  letter-spacing:-.06em;
  text-transform:uppercase;
  margin:0;
  color:#100d0a;
}
.rev47-related-kits>div{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:10px;
}
.rev47-related-kits button{
  border:1px solid rgba(16,13,10,.12);
  background:#fff;
  border-radius:20px;
  padding:14px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  cursor:pointer;
  font-weight:950;
  color:#100d0a;
  transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease;
}
.rev47-related-kits button:hover{
  transform:translateY(-2px);
  border-color:rgba(255,44,22,.32);
  box-shadow:0 16px 34px rgba(37,25,12,.08);
}
.rev47-related-kits button b{color:#ff2c16;letter-spacing:.08em}
.rev47-related-kits button span{text-align:right}
.rev47-sticky-cta{
  position:sticky;
  bottom:16px;
  z-index:20;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  border-radius:999px;
  padding:12px 12px 12px 20px;
  background:rgba(16,13,10,.92);
  color:#fff;
  border:1px solid rgba(255,255,255,.16);
  box-shadow:0 18px 48px rgba(0,0,0,.18);
  backdrop-filter:blur(18px);
}
.rev47-sticky-cta b{display:block;font-size:14px;line-height:1;letter-spacing:-.02em}
.rev47-sticky-cta span{display:block;margin-top:4px;font-size:11px;line-height:1;color:rgba(255,255,255,.58);font-weight:800}
.rev47-sticky-cta button{
  border:0;
  border-radius:999px;
  background:#ff3b22;
  color:#fff;
  padding:13px 18px;
  min-width:160px;
  font-weight:950;
  cursor:pointer;
}
@media(max-width:1180px){
  .rev47-layer-explainer{grid-template-columns:1fr}
  .rev47-layer-explainer__steps{grid-template-columns:repeat(2,minmax(0,1fr))}
  .rev47-choice-panel{grid-template-columns:1fr!important}
}
@media(max-width:760px){
  .rev47-layer-explainer__steps,.rev47-ritual-strip,.rev47-related-kits>div{grid-template-columns:1fr}
  .rev47-layer-explainer__ticker{border-radius:26px;flex-direction:column}
  .rev47-sticky-cta{align-items:stretch;border-radius:24px;flex-direction:column}
  .rev47-sticky-cta button{width:100%}
}
@media(prefers-reduced-motion:reduce){
  .rev47-related-kits button{transition:none!important}
}
/* REV47 — KIT DETAIL SALES ARCHITECTURE + TABAQ EXPLAINER END */


/* REV48 — COMMERCE FLOW SIMPLIFICATION START
   Purpose: reduce shop/detail fussiness while preserving existing heroes, routing and kit animations. */
.rev48-shop-guide{margin:clamp(20px,3vw,36px) 0 28px;border:1px solid rgba(16,13,10,.12);border-radius:32px;background:linear-gradient(135deg,#fffaf2,#fff);padding:clamp(20px,3vw,30px);display:grid;grid-template-columns:minmax(260px,.82fr) minmax(440px,1.18fr);gap:18px;align-items:stretch;box-shadow:0 18px 54px rgba(37,25,12,.07);position:relative;overflow:hidden}.rev48-shop-guide::after{content:"";position:absolute;right:-80px;bottom:-110px;width:240px;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,rgba(255,60,34,.16),transparent 68%);pointer-events:none}.rev48-shop-guide__copy{position:relative;z-index:1}.rev48-shop-guide__copy h2{font-size:clamp(38px,5.2vw,76px);line-height:.9;letter-spacing:-.06em;margin:8px 0 14px;color:#100d0a}.rev48-shop-guide__copy p:not(.page-kicker){max-width:42ch;font-size:15px;line-height:1.58;color:rgba(16,13,10,.66);font-weight:780}.rev48-role-grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.rev48-role-grid article{border:1px solid rgba(16,13,10,.1);border-radius:22px;background:rgba(255,255,255,.74);padding:15px;display:grid;align-content:start;gap:6px;min-height:152px}.rev48-role-grid b{font-size:13px;letter-spacing:.16em;color:#ff2c16}.rev48-role-grid strong{font-size:22px;line-height:1;letter-spacing:-.04em}.rev48-role-grid span{font-size:12px;line-height:1.38;color:rgba(16,13,10,.62);font-weight:760}.rev48-shop-assurance{margin-top:22px}.rev48-card-notes{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}.rev48-card-notes span{border:1px solid rgba(16,13,10,.13);background:rgba(255,255,255,.64);border-radius:999px;padding:6px 8px;font-size:10px;letter-spacing:.08em;text-transform:uppercase;font-weight:950;color:rgba(16,13,10,.62)}.product-card .rev48-kit-strip{margin:14px 0 4px;padding:12px;border:1px solid rgba(16,13,10,.1);border-radius:20px;background:rgba(255,255,255,.5);position:relative;z-index:2}.product-card .rev48-kit-strip>b{display:block;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#ff2c16;margin-bottom:8px}.rev48-kit-strip__grid{display:grid!important;grid-template-columns:repeat(4,1fr)!important;gap:6px!important}.rev48-kit-strip__grid span{border:1px solid rgba(16,13,10,.08);border-radius:14px;padding:8px 6px;background:rgba(255,255,255,.58);min-width:0}.rev48-kit-strip__grid em{display:block;font-size:10px;letter-spacing:.08em;font-style:normal;color:rgba(16,13,10,.4);font-weight:950}.rev48-kit-strip__grid strong{display:block;font-size:12px;letter-spacing:-.02em;white-space:nowrap}.product-card__actions{display:grid!important;grid-template-columns:1fr 1fr;gap:8px;width:100%}.product-card__actions .mini-btn{width:100%;justify-content:center}.product-card__actions .rev48-card-drop-cta{background:#fff;color:#100d0a;border:1px solid rgba(16,13,10,.14)}.rev48-purchase-panel{position:relative;overflow:hidden;padding:clamp(20px,3vw,28px)!important;gap:10px!important}.rev48-purchase-panel h2{font-size:clamp(32px,4.6vw,62px);line-height:.9;letter-spacing:-.06em;margin:0;color:#fff}.rev48-purchase-line{font-size:15px;line-height:1.45;color:rgba(255,255,255,.78);font-weight:800;max-width:46ch;margin:0}.rev48-price{font-size:clamp(42px,5vw,72px)!important;line-height:.88}.rev48-detail-includes{margin:8px 0 4px;border:1px solid rgba(255,255,255,.12);border-radius:22px;background:rgba(255,255,255,.06);padding:14px}.rev48-detail-includes>b{display:block;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#ff5338;margin-bottom:10px}.rev48-detail-includes__grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.rev48-detail-includes__grid div{border-radius:16px;background:rgba(255,255,255,.08);padding:12px;display:grid;gap:4px}.rev48-detail-includes__grid em{font-style:normal;font-size:11px;letter-spacing:.1em;color:rgba(255,255,255,.45);font-weight:950}.rev48-detail-includes__grid strong{font-size:15px;color:#fff;line-height:1}.rev48-detail-includes__grid small{font-size:11px;color:rgba(255,255,255,.54);font-weight:900}.rev48-detail-includes__grid span{font-size:11px;line-height:1.25;color:rgba(255,255,255,.62);font-weight:720}.rev48-primary-drop{margin-top:4px;font-size:15px!important;letter-spacing:-.01em}.rev47-detail-sales-page .rev47-ritual-strip{margin-top:0}.rev47-detail-sales-page .rev47-sales-intro h2{font-size:clamp(28px,3.2vw,48px);line-height:.98;max-width:16ch}.rev47-detail-sales-page .rev43-detail-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.rev47-detail-sales-page .rev43-detail-grid .rev43-wide{grid-column:1/-1}.rev47-detail-sales-page .rev43-detail-card{padding:17px}.rev47-detail-sales-page .rev43-detail-card h3{font-size:11px}.rev47-detail-sales-page .rev43-dialog-actions{margin-top:2px}.rev47-detail-sales-page .rev43-dialog-actions button{background:#fff;color:#100d0a;border:1px solid rgba(16,13,10,.16)}.rev47-sticky-cta button{min-width:190px}@media(max-width:1080px){.rev48-shop-guide{grid-template-columns:1fr}.rev48-role-grid{grid-template-columns:repeat(2,1fr)}.rev48-detail-includes__grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:640px){.rev48-role-grid,.rev48-kit-strip__grid,.product-card__actions{grid-template-columns:1fr!important}.rev48-detail-includes__grid{grid-template-columns:1fr}.rev48-shop-guide{border-radius:24px}}
/* REV48 — COMMERCE FLOW SIMPLIFICATION END */


/* ===== tabaq-rev26-landing-page-slower-scroll-synced-css ===== */
/* REV26 — UPLOADED SLOWER SCROLL SYNCED DOCKING LANDING CSS START */
:root{
      --ink:#191715;
      --paper:#fffaf1;
      --chalk:#ffffff;
      --cream:#fff3df;
      --active:#ff4b39;
      --active2:#ffb84d;
      --black:#141414;
      --muted:rgba(20,20,20,.68);
      --line:rgba(20,20,20,.14);
      --radius:32px;
      --shadow:0 30px 85px rgba(0,0,0,.28);
      --display:"Archivo Black", Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      --body:"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    
    

    
    

    
    

    *{box-sizing:border-box}
    html{background:var(--paper);scroll-behavior:smooth}
    body{margin:0;min-width:320px;overflow-x:hidden;background:var(--paper);color:var(--ink);font-family:var(--body);-webkit-font-smoothing:antialiased;text-rendering:geometricPrecision}
    img{display:block;max-width:100%;user-select:none;-webkit-user-drag:none}
    a{color:inherit;text-decoration:none}
    button{font:inherit;color:inherit}
    ::selection{background:var(--active2);color:var(--ink)}

    .site{position:relative;overflow:clip;background:var(--paper)}
.nav{height:112px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(20px,7vw,138px);background:#fff;position:relative;z-index:40;border-bottom:1px solid rgba(0,0,0,.04)}
    .brand{display:flex;align-items:center;gap:20px;font-weight:900;letter-spacing:-.05em;font-size:clamp(28px,3vw,46px);line-height:.9;color:#24548d;text-shadow:2px 2px 0 #fff, 4px 4px 0 #ef3e3e}
    .brand small{display:block;font-size:9px;letter-spacing:.06em;text-transform:uppercase;color:#fff;background:#e83a2b;border-radius:999px;padding:4px 10px;text-shadow:none;margin-top:1px;width:max-content}
    .nav__divider{height:22px;width:1px;background:#1c1c1c;opacity:.5;margin-left:18px}
    .nav__links{display:flex;align-items:center;gap:34px;margin-right:auto;margin-left:34px;font-size:15px;font-weight:700;color:#171717}
    .nav__links a{position:relative}
    .nav__links a:after{content:"";position:absolute;left:0;right:0;bottom:-6px;height:2px;background:currentColor;transform:scaleX(0);transform-origin:right;transition:transform .25s ease}
    .nav__links a:hover:after{transform:scaleX(1);transform-origin:left}
    .order-btn{min-height:58px;padding:0 34px;border:0;border-radius:999px;background:#ff2d12;color:#fff;display:inline-flex;align-items:center;gap:13px;font-weight:900;box-shadow:0 14px 35px rgba(255,45,18,.26);cursor:pointer;transition:transform .22s ease,box-shadow .22s ease}
    .order-btn:hover{transform:translateY(-3px);box-shadow:0 20px 50px rgba(255,45,18,.33)}
    .order-mark{width:25px;height:14px;position:relative;display:inline-block}
    .order-mark:before{content:"";position:absolute;inset:0;border-radius:999px;background:white;clip-path:polygon(0 0,100% 0,72% 100%,33% 100%,44% 50%,0 50%)}

    
    .hero{--bg:#ff4b39;min-height:calc(100svh - 150px);position:relative;background:var(--bg);transition:background-color .6s ease;overflow:hidden;isolation:isolate}
    .hero:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 78% 22%,rgba(255,255,255,.43),transparent 20%),radial-gradient(circle at 22% 76%,rgba(255,255,255,.2),transparent 25%),linear-gradient(180deg,rgba(255,255,255,.94) 0%,rgba(255,255,255,.94) 45%,rgba(255,255,255,0) 45.2%);z-index:-2;transition:opacity .5s ease}
    .hero.is-color:before{opacity:0}
    .hero__inner{position:relative;min-height:calc(100svh - 150px);padding:clamp(42px,5vw,76px) clamp(20px,9vw,138px) 72px;display:grid;grid-template-columns:minmax(260px,490px) 1fr minmax(220px,370px);align-items:center;gap:30px}
    .hero__copy{position:relative;z-index:8;align-self:end;padding-bottom:22px;color:#1f1f1f;mix-blend-mode:normal}
    .hero.is-color .hero__copy{color:#fff}
    .eyebrow{font-size:13px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:10px;margin-bottom:18px}
    .eyebrow:before{content:"";width:34px;height:3px;background:currentColor;border-radius:999px}
    .hero__copy p{font-size:17px;line-height:1.55;font-weight:800;max-width:430px;margin:0 0 27px;color:currentColor}
    .hero__actions{display:flex;align-items:center;gap:13px;flex-wrap:wrap}
    .pill{height:54px;border-radius:999px;border:1.5px solid rgba(0,0,0,.82);background:#fff;color:#111;padding:0 30px;display:inline-flex;align-items:center;gap:13px;font-weight:900;cursor:pointer;box-shadow:0 10px 22px rgba(0,0,0,.04)}
    .hero.is-color .pill{border-color:rgba(255,255,255,.88)}
    .ghost-pill{background:rgba(255,255,255,.16);color:currentColor;backdrop-filter:blur(10px)}

    .mega-type{position:absolute;inset:0;z-index:1;pointer-events:none;font-family:var(--display);font-weight:900;text-transform:uppercase;letter-spacing:-.075em;line-height:.78;color:#4a4a4a;opacity:.98;display:grid;align-items:center;padding:0 clamp(18px,7.4vw,132px)}
    .hero.is-color .mega-type{color:#fff}
    .mega-type__top{font-size:clamp(92px,14.3vw,260px);white-space:nowrap;transform:translateY(-.16em)}
    .mega-type__line{display:flex;align-items:center;justify-content:space-between;gap:clamp(180px,29vw,560px);font-size:clamp(95px,14.8vw,275px);white-space:nowrap}
    .mega-type__small{position:absolute;left:clamp(28px,9vw,136px);top:clamp(150px,24vh,260px);font-size:clamp(78px,9vw,160px);letter-spacing:-.09em;color:rgba(0,0,0,.18)}
    .hero.is-color .mega-type__small{color:rgba(255,255,255,.55)}

    .stage{position:absolute;left:50%;top:50%;width:min(47vw,610px);height:min(72vh,710px);transform:translate(-50%,-49%);z-index:6;display:grid;place-items:center;pointer-events:none;perspective:1300px}
    .product-orbit{position:absolute;inset:0;display:grid;place-items:center;transform-style:preserve-3d;will-change:transform,opacity,filter}
    .hero-product{height:clamp(410px,66vh,740px);width:auto;object-fit:contain;filter:drop-shadow(0 40px 54px rgba(0,0,0,.32));transform-origin:center center;will-change:transform,opacity,filter}
    .hero-product.oil{height:clamp(390px,58vh,620px)}
    .product-shadow{position:absolute;left:50%;bottom:6%;width:260px;height:42px;transform:translateX(-50%);border-radius:50%;background:rgba(0,0,0,.22);filter:blur(16px);z-index:-1;opacity:.75}

    .float-item{position:absolute;z-index:5;pointer-events:none;filter:drop-shadow(0 24px 44px rgba(0,0,0,.22));will-change:transform}
    .float-item--top{left:25%;top:5%;width:155px;transform:rotate(-17deg)}
    .float-item--right{right:-52px;top:13%;width:250px;filter:blur(7px) drop-shadow(0 20px 45px rgba(0,0,0,.18));opacity:.86}
    .float-item--low{right:24%;bottom:1%;width:230px;transform:rotate(-26deg)}

    
    .hero.is-manual-select .stage{z-index:8}
    .hero.is-manual-select .product-orbit{filter:drop-shadow(0 42px 70px rgba(0,0,0,.16))}
    
    .hero.is-manual-select .float-item{opacity:.84;filter:blur(1.6px) brightness(.9) saturate(.88) drop-shadow(0 18px 34px rgba(0,0,0,.16))}
    .hero.is-manual-select .float-item--right{opacity:.74;filter:blur(6.5px) brightness(.82) saturate(.76) drop-shadow(0 18px 42px rgba(0,0,0,.14))}
    
    .hero.is-handoff-active .stage{opacity:1}
.product-dial{position:absolute;left:50%;bottom:22px;transform:translateX(-50%);display:flex;gap:8px;z-index:20;padding:8px;border-radius:999px;background:rgba(255,255,255,.34);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.5)}
    .dial-dot{width:44px;height:44px;border-radius:999px;border:0;background:rgba(0,0,0,.16);cursor:pointer;display:grid;place-items:center;transition:transform .18s ease,background .18s ease;color:#111;font-weight:900}
    .dial-dot.is-active{background:#111;color:#fff;transform:scale(1.08)}

    
    .handoff{position:relative;height:285svh;background:#fff;z-index:3}
    .handoff-panel{position:relative;height:100svh;overflow:hidden;background:#fff;display:grid;place-items:center;isolation:isolate}
    .handoff-panel:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,var(--active) 0%,var(--active) 45%,#fff 45.2%,#fff 100%);z-index:-3}
    .handoff-copy{position:absolute;left:clamp(20px,9vw,138px);top:17svh;z-index:7;width:min(430px,38vw);color:#fff}
    .handoff-copy p{margin:0 0 24px;font-size:17px;line-height:1.5;font-weight:850;color:#fff}
    .handoff-copy .pill{border-color:#fff;color:#121212}
    .handoff-type{position:absolute;left:50%;bottom:2vh;transform:translateX(-50%);font-family:var(--display);font-size:clamp(78px,17.3vw,315px);line-height:.78;letter-spacing:-.085em;white-space:nowrap;color:#ffc414;text-transform:uppercase;z-index:1;text-shadow:0 1px 0 rgba(0,0,0,.03)}
    .handoff-type span{display:inline-block}
    
    .hero.is-handoff-active{
      overflow:visible;
      z-index:80;
    }
    .hero.is-handoff-active .stage{opacity:1}
    .stage.is-scroll-following{
      position:fixed!important;
      left:var(--follow-left,50vw);
      top:var(--follow-top,50vh);
      width:var(--follow-width,min(47vw,610px));
      height:var(--follow-height,min(72vh,710px));
      transform:none;
      z-index:999;
      opacity:1;
      pointer-events:none;
      will-change:transform,opacity;
    }
    .stage.is-scroll-following .product-orbit{
      will-change:transform,opacity,filter;
    }
    
    #layers .card__media img.is-layer-kit-flight-target{opacity:0!important}
    #layers .card.is-layer-kit-flight-destination{transform:translateZ(0)}
    .layer-kit-flight-clone{
      position:fixed;
      left:0;
      top:0;
      z-index:999;
      pointer-events:none;
      object-fit:contain;
      transform-origin:50% 50%;
      will-change:transform,opacity,filter;
    }
    .hero.is-handoff-active .stage,
    .hero.is-handoff-active .float-item{
      opacity:0!important;
      pointer-events:none!important;
    }
    

    

    .scroll-badge{position:absolute;right:clamp(18px,7vw,112px);top:23svh;width:min(280px,24vw);z-index:6;padding:14px;border-radius:28px;background:rgba(255,255,255,.22);border:1px solid rgba(255,255,255,.45);backdrop-filter:blur(14px);box-shadow:0 28px 70px rgba(0,0,0,.15)}
    .scroll-badge img{height:150px;width:100%;object-fit:contain;border-radius:18px;background:rgba(255,255,255,.42)}
    .scroll-badge h3{font-size:20px;margin:14px 0 8px;line-height:1;font-weight:900;color:#111}
    .giant-gloss{position:absolute;right:16%;top:19%;width:210px;height:210px;border-radius:58% 42% 54% 46%;background:radial-gradient(circle at 30% 20%,#fff8,transparent 19%),linear-gradient(135deg,#ffe2a7,#ff6d58 44%,#ca173b);z-index:4;filter:drop-shadow(0 25px 58px rgba(0,0,0,.18))}

    
    .section{position:relative;padding:clamp(76px,9vw,135px) clamp(20px,9vw,138px);background:var(--paper);z-index:4}
    .section.dark{background:#151515;color:#fff}
    .section__head{display:flex;align-items:end;justify-content:space-between;gap:32px;margin-bottom:42px}
    .section h2{font-family:var(--display);font-size:clamp(48px,9vw,150px);letter-spacing:-.075em;line-height:.82;margin:0;text-transform:uppercase}
    .section p.lead{font-size:18px;line-height:1.55;font-weight:750;color:var(--muted);max-width:520px;margin:0}.dark p.lead{color:rgba(255,255,255,.72)}
    .cards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
    .card{border:1px solid var(--line);border-radius:30px;background:#fff;padding:18px;min-height:330px;overflow:hidden;position:relative;box-shadow:0 20px 55px rgba(0,0,0,.06)}
    .card:nth-child(2){background:#e7f0d8}.card:nth-child(3){background:#efe0fb}.card:nth-child(4){background:#ffe1d6}
    .card__media{height:210px;display:grid;place-items:center;margin-bottom:12px}
    .card__media img{max-height:220px;width:auto;object-fit:contain;filter:drop-shadow(0 20px 34px rgba(0,0,0,.22))}
    .card h3{font-size:23px;margin:0 0 8px;letter-spacing:-.04em;line-height:1;font-weight:950}.card p{margin:0;color:rgba(0,0,0,.64);font-weight:650;line-height:1.42}
    .ticker-section{background:#ffcc1b;color:#141414;padding:38px 0;overflow:hidden;border-block:2px solid #111;position:relative;z-index:5}
    .big-ticker{display:flex;gap:30px;width:max-content;animation:ticker 24s linear infinite;font-family:var(--display);font-size:clamp(44px,8vw,128px);line-height:.8;letter-spacing:-.06em;text-transform:uppercase;white-space:nowrap}.big-ticker span{padding-right:30px}@keyframes ticker{to{transform:translateX(-50%)}}
    .final{min-height:88svh;background:linear-gradient(135deg,#fff6de,#fff 55%,#ffe2d8);display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:40px;padding:clamp(76px,10vw,150px) clamp(20px,9vw,138px);overflow:hidden;position:relative;z-index:5}.final h2{font-family:var(--display);font-size:clamp(56px,10vw,170px);line-height:.8;letter-spacing:-.08em;text-transform:uppercase;margin:0 0 24px}.final p{font-size:19px;line-height:1.55;font-weight:750;color:var(--muted);max-width:540px}.final img{height:min(72vh,760px);margin:auto;object-fit:contain;filter:drop-shadow(0 42px 80px rgba(0,0,0,.22))}

    .reveal{opacity:0;transform:translateY(40px)}

    @media (max-width:1100px){
      .nav{height:94px}.nav__links{display:none}.hero__inner{grid-template-columns:1fr;min-height:calc(100svh - 132px);padding-top:28px}.hero__copy{align-self:start;width:min(440px,64vw);padding-top:32px}.stage{width:70vw;top:56%;}.hero-product{height:58vh}.mega-type{padding-inline:24px}.mega-type__top{font-size:15vw}.mega-type__line{font-size:17vw;gap:34vw}.float-item--right{display:none}.float-item--top{left:56%;top:9%;width:120px}.float-item--low{right:4%;bottom:7%;width:155px}.handoff-copy{width:52vw}.scroll-badge{display:none}.cards{grid-template-columns:repeat(2,minmax(0,1fr))}.final{grid-template-columns:1fr}.final img{height:min(62vh,620px)}
    }
    @media (max-width:720px){
.nav{height:76px;padding-inline:18px}.brand{font-size:28px}.brand small{font-size:7px}.order-btn{min-height:46px;padding-inline:18px}.hero{min-height:calc(100svh - 108px)}.hero__inner{min-height:calc(100svh - 108px);padding:18px 18px 80px}.hero__copy{width:100%;padding-top:4px}.hero__copy p{font-size:14px;max-width:300px}.hero__actions{display:none}.mega-type{align-items:center;padding-inline:16px}.mega-type__small{font-size:76px;left:18px;top:132px}.mega-type__top{font-size:17vw;transform:translateY(-.5em)}.mega-type__line{font-size:21vw;gap:16vw;display:block}.mega-type__line span:last-child{display:block;text-align:right}.stage{width:92vw;height:58vh;top:57%}.hero-product{height:52vh}.float-item--top,.float-item--low{display:none}.product-dial{bottom:16px}.dial-dot{width:38px;height:38px}.handoff{height:245svh}.handoff-copy{left:18px;top:13svh;width:74vw}.handoff-copy p{font-size:14px}.handoff-type{font-size:22vw;bottom:9vh}.giant-gloss{width:132px;height:132px;right:-20px}.section{padding:76px 18px}.section__head{display:block}.section p.lead{font-size:16px;margin-top:16px}.cards{grid-template-columns:1fr}.card{min-height:300px}.final{padding:76px 18px}.final p{font-size:16px}.final img{height:54vh}}


    
    .hero::after{content:"";position:absolute;inset:0;z-index:2;pointer-events:none;opacity:.075;background-image:radial-gradient(circle at 1px 1px, rgba(255,255,255,.95) 1px, transparent 0);background-size:6px 6px;mix-blend-mode:soft-light}
    .product-dial{gap:6px;padding:7px 9px 7px 12px;background:rgba(255,255,255,.42);box-shadow:0 20px 55px rgba(0,0,0,.12);border-color:rgba(255,255,255,.72)}
    .product-dial::before{content:"Select layer";display:inline-flex;align-items:center;padding:0 10px 0 4px;font-size:10px;line-height:1;font-weight:950;letter-spacing:.1em;text-transform:uppercase;color:rgba(0,0,0,.62);white-space:nowrap}
    .dial-dot{position:relative;overflow:hidden;width:42px;height:42px;isolation:isolate;transition:width .38s cubic-bezier(.2,.9,.18,1),transform .24s ease,background .24s ease,color .24s ease,box-shadow .24s ease,filter .24s ease}
    .dial-dot::after{content:attr(data-short);display:inline-block;max-width:0;opacity:0;transform:translateX(-5px);overflow:hidden;white-space:nowrap;font-size:11px;letter-spacing:.02em;font-weight:950;transition:max-width .38s cubic-bezier(.2,.9,.18,1),opacity .2s ease,transform .28s ease;margin-left:0}
    .dial-dot.is-active{width:112px;background:#111;color:#fff;box-shadow:0 14px 34px rgba(0,0,0,.18);transform:translateY(-1px) scale(1.02)}
    .dial-dot.is-active::after,.dial-dot:hover::after{max-width:70px;opacity:1;transform:translateX(0);margin-left:8px}
    .dial-dot:hover:not(.is-active){background:rgba(255,255,255,.72);transform:translateY(-2px);filter:saturate(1.1)}
    .dial-dot:focus-visible{outline:2px solid #111;outline-offset:3px}
    .hero.is-manual-select .float-item{opacity:.9;transform-style:preserve-3d;transition:none}
    .hero.is-manual-select .float-item--top{filter:blur(1.15px) brightness(.96) saturate(.9) drop-shadow(0 18px 36px rgba(0,0,0,.16))}
    .hero.is-manual-select .float-item--low{filter:blur(1.75px) brightness(.9) saturate(.84) drop-shadow(0 20px 42px rgba(0,0,0,.15))}
    .hero.is-manual-select .float-item--right{opacity:.82;filter:blur(5.2px) brightness(.86) saturate(.78) drop-shadow(0 18px 42px rgba(0,0,0,.14))}
    .hero-product{backface-visibility:hidden;transform-style:preserve-3d}
    .product-shadow{transform-origin:50% 50%}
    .card{transition:transform .36s cubic-bezier(.2,.9,.18,1),box-shadow .36s ease,border-color .36s ease,filter .36s ease}
    .card__media img{transition:filter .36s ease}
    .card.is-active-layer-card{border-color:rgba(0,0,0,.48);box-shadow:0 28px 80px rgba(0,0,0,.13);transform:translateY(-4px)}
    .card.is-active-layer-card h3::before{content:"Selected layer";display:block;margin-bottom:8px;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(0,0,0,.52);font-weight:950}
    .card.is-active-layer-card .card__media img{filter:drop-shadow(0 26px 44px rgba(0,0,0,.26)) saturate(1.06)}
    @media (max-width:620px){.product-dial::before{display:none}.dial-dot.is-active{width:74px}.dial-dot::after{font-size:10px}.dial-dot.is-active::after{max-width:40px}}
    

    @media (prefers-reduced-motion:reduce){
      *,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.reveal{opacity:1!important;transform:none!important}.hero-product{transform:none!important;opacity:1!important}
    }

    
    .mega-type{will-change:transform,opacity,filter;transform-origin:top center;}
    .mega-type__small,.mega-type__top,.mega-type__line{will-change:transform,opacity,filter;}
    .hero-color-curtain{z-index:0;}
    

    
    .hero-color-curtain{position:absolute;inset:0;z-index:0;pointer-events:none;background:var(--bg);transform:scaleY(0);transform-origin:top center;opacity:0;will-change:transform,opacity,background-color}
    


    
    .nav{height:104px;padding-inline:clamp(22px,7vw,138px)}
    .brand{letter-spacing:-.055em}
    .nav__links{gap:30px}
    .order-btn{min-height:54px;padding-inline:30px}
    .hero{min-height:calc(100svh - 104px)}
    .hero__inner{min-height:calc(100svh - 104px)}
    .hero__copy{display:none!important}
    .handoff-copy p{max-width:360px}
    @media (max-width:980px){.nav{height:90px}.hero{min-height:calc(100svh - 90px)}.hero__inner{min-height:calc(100svh - 90px)}}
    @media (max-width:620px){.nav{height:76px}.hero{min-height:calc(100svh - 76px)}.hero__inner{min-height:calc(100svh - 76px)}}
    

  

    
    .mega-type__small{
      left:clamp(54px,10.8vw,172px);
      top:clamp(78px,15.6vh,168px);
      font-size:clamp(88px,10.8vw,182px);
      line-height:.82;
      opacity:1;
      color:rgba(0,0,0,.24);
      z-index:1;
      transform:translate3d(0,0,0);
      text-shadow:none;
    }
    .hero.is-color .mega-type__small{color:rgba(255,255,255,.68)}
    .mega-type > div:not(.mega-type__small){position:relative;z-index:2}
    .hero .float-item{pointer-events:auto;cursor:pointer;touch-action:manipulation}
    .hero .float-item:focus-visible{outline:2px solid rgba(255,255,255,.95);outline-offset:8px;border-radius:24px}
    .hero.is-handoff-active .float-item{pointer-events:none}
/* REV26 — UPLOADED SLOWER SCROLL SYNCED DOCKING LANDING CSS END */


/* ===== tabaq-rev40-awwwards-shop-motion-polish ===== */
/* REV40 — AWWWARDS DISCIPLINE + SHOP EDITORIAL MOTION POLISH START
   Focus: keep direction, remove visible friction, make Shop hero + ribbon + docking feel intentional. */

/* Universal interaction polish */
.skip-link{
  position:fixed;
  left:18px;
  top:18px;
  z-index:9999;
  transform:translateY(-140%);
  background:#100d0a;
  color:#fffaf2;
  border-radius:999px;
  padding:10px 14px;
  font-weight:950;
  letter-spacing:.06em;
  text-transform:uppercase;
  text-decoration:none;
  box-shadow:0 18px 50px rgba(0,0,0,.25);
}
.skip-link:focus{transform:translateY(0);outline:2px solid #ff321d;outline-offset:4px;}
.nav a:focus-visible,.order-btn:focus-visible,.product-card button:focus-visible,.kit-cta:focus-visible,.filter-chip:focus-visible{
  outline:2px solid #ff321d!important;
  outline-offset:5px!important;
  border-radius:999px;
}

/* Award-level drop ribbon: rebuilt as a dependable moving editorial strip. */
.drop-time-ribbon{
  display:block!important;
  height:40px!important;
  width:100%!important;
  overflow:hidden!important;
  background:#11100f!important;
  color:#fffaf2!important;
  text-decoration:none!important;
  position:relative!important;
  z-index:84!important;
  white-space:nowrap!important;
  border-top:1px solid rgba(255,255,255,.10)!important;
  border-bottom:1px solid rgba(0,0,0,.42)!important;
  box-shadow:0 10px 28px rgba(16,13,10,.10)!important;
  contain:layout paint!important;
}
.drop-time-ribbon::before,.drop-time-ribbon::after{
  content:"";
  position:absolute;
  top:0;
  bottom:0;
  width:64px;
  z-index:2;
  pointer-events:none;
}
.drop-time-ribbon::before{left:0;background:linear-gradient(90deg,#11100f,rgba(17,16,15,0));}
.drop-time-ribbon::after{right:0;background:linear-gradient(270deg,#11100f,rgba(17,16,15,0));}
.drop-time-ribbon__track{
  height:100%!important;
  display:inline-flex!important;
  align-items:center!important;
  gap:36px!important;
  width:max-content!important;
  min-width:max-content!important;
  white-space:nowrap!important;
  will-change:transform!important;
  animation:tabaq-rev40-drop-ribbon 34s linear infinite!important;
  transform:translate3d(0,0,0);
}
.drop-time-ribbon:hover .drop-time-ribbon__track{animation-play-state:paused!important;}
.drop-time-ribbon__track span{
  display:inline-flex!important;
  align-items:center!important;
  gap:12px!important;
  white-space:nowrap!important;
  font-size:12px!important;
  line-height:1!important;
  font-weight:950!important;
  letter-spacing:.10em!important;
  text-transform:uppercase!important;
  color:rgba(255,250,242,.92)!important;
}
.drop-time-ribbon__track span::before{
  content:"";
  display:inline-block;
  width:9px;
  height:9px;
  border-radius:999px;
  background:#ff321d;
  box-shadow:0 0 0 5px rgba(255,50,29,.15);
  flex:0 0 auto;
}
@keyframes tabaq-rev40-drop-ribbon{
  from{transform:translate3d(0,0,0);}
  to{transform:translate3d(-50%,0,0);}
}

/* Shop hero: clearer editorial scale, less dead space, more believable product presence. */
.tabaq-page[data-page="shop"] .page-hero{
  min-height:clamp(1040px,142vh,1380px)!important;
  align-items:center!important;
  overflow:hidden!important;
  padding-block:clamp(78px,8vw,122px) clamp(96px,12vw,170px)!important;
  column-gap:clamp(22px,4vw,70px)!important;
  position:relative!important;
}
.tabaq-page[data-page="shop"] .page-hero::after{
  content:"";
  position:absolute;
  right:4vw;
  top:18%;
  width:min(48vw,720px);
  height:min(48vw,720px);
  border-radius:999px;
  background:radial-gradient(circle at 46% 42%,rgba(255,184,77,.18),transparent 42%),radial-gradient(circle at 64% 58%,rgba(194,153,255,.16),transparent 44%),radial-gradient(circle at 76% 64%,rgba(148,255,141,.13),transparent 46%);
  filter:blur(32px);
  opacity:.78;
  pointer-events:none;
}
.tabaq-page[data-page="shop"] .page-title{
  max-width:min(780px,58vw)!important;
  position:relative;
  z-index:2;
}
.tabaq-page[data-page="shop"] .page-lead{
  max-width:680px!important;
  position:relative;
  z-index:2;
}
.tabaq-page[data-page="shop"] .shop-motion-aside{
  display:block!important;
  position:relative!important;
  width:min(780px,50vw)!important;
  max-width:min(780px,50vw)!important;
  margin-inline:auto 0!important;
  overflow:visible!important;
  z-index:24!important;
  pointer-events:none!important;
  transform:translateY(-.4vw) scale(1.08)!important;
  transform-origin:50% 50%!important;
}
.tabaq-page[data-page="shop"] .shop-motion-stage{
  position:relative!important;
  width:100%!important;
  height:clamp(470px,46vw,670px)!important;
  min-height:440px!important;
  overflow:visible!important;
  isolation:isolate!important;
  pointer-events:none!important;
  transform:translateZ(0)!important;
}
.tabaq-page[data-page="shop"] .shop-motion-stage::before{
  content:"";
  position:absolute;
  inset:4% -5% 8% -7%;
  border-radius:999px;
  background:radial-gradient(circle at 30% 36%,rgba(255,184,77,.18),transparent 46%),radial-gradient(circle at 66% 48%,rgba(190,150,255,.16),transparent 48%),radial-gradient(circle at 62% 78%,rgba(128,255,144,.13),transparent 52%);
  filter:blur(20px);
  opacity:.86;
  z-index:0;
}
.tabaq-page[data-page="shop"] .shop-motion-bottle{
  position:absolute!important;
  margin:0!important;
  display:grid!important;
  place-items:center!important;
  transform-origin:center bottom!important;
  will-change:opacity,filter,transform!important;
  z-index:5!important;
  pointer-events:none!important;
  transition:opacity .72s cubic-bezier(.22,.61,.36,1),filter .72s ease,visibility .72s linear!important;
}
.tabaq-page[data-page="shop"] .shop-motion-bottle span{
  position:absolute;
  left:50%;
  bottom:-24px;
  transform:translateX(-50%);
  border:1px solid rgba(20,20,20,.12);
  border-radius:999px;
  background:rgba(255,250,241,.76);
  backdrop-filter:blur(12px);
  padding:6px 9px;
  font-size:9px;
  font-weight:950;
  letter-spacing:.12em;
  color:rgba(20,20,20,.62);
}
.tabaq-page[data-page="shop"] .shop-motion-bottle img{
  display:block;
  width:auto;
  max-width:100%;
  height:auto;
  max-height:100%;
  object-fit:contain;
  filter:drop-shadow(0 34px 46px rgba(0,0,0,.22)) drop-shadow(0 8px 14px rgba(0,0,0,.14));
  transform:translateZ(0);
}
.tabaq-page[data-page="shop"] .shop-motion-bottle--mist{left:3%;top:23%;width:28%;height:58%;transform:rotate(-5deg);z-index:7;}
.tabaq-page[data-page="shop"] .shop-motion-bottle--edp{left:29%;top:9%;width:31%;height:68%;transform:rotate(2deg);z-index:8;}
.tabaq-page[data-page="shop"] .shop-motion-bottle--oil1{left:58%;top:24%;width:26%;height:56%;transform:rotate(-4deg);z-index:6;}
.tabaq-page[data-page="shop"] .shop-motion-bottle--oil2{left:77%;top:28%;width:24%;height:53%;transform:rotate(5deg);z-index:5;}

/* Ritual cards stay because they explain the system. Make them feel intentional, not duplicated. */
.tabaq-page[data-page="shop"] .rev48-shop-guide{overflow:visible!important;position:relative;z-index:3;}
.tabaq-page[data-page="shop"] .rev52-role-grid-with-products{align-items:stretch!important;overflow:visible!important;}
.tabaq-page[data-page="shop"] .rev52-role-grid-with-products .rev52-role-card{
  position:relative!important;
  overflow:visible!important;
  min-height:clamp(260px,22vw,340px)!important;
  padding:16px 14px 12px!important;
  display:grid!important;
  grid-template-rows:auto 1fr!important;
  isolation:isolate!important;
  transform:none!important;
  box-shadow:none!important;
  will-change:auto!important;
}
.tabaq-page[data-page="shop"] .rev52-role-card::before{
  content:"";
  position:absolute;
  inset:auto -22% -30% -22%;
  height:58%;
  border-radius:52% 48% 0 0;
  background:linear-gradient(180deg,rgba(255,255,255,.22),rgba(255,44,22,.075));
  z-index:-1;
  opacity:.92;
  pointer-events:none;
}
.tabaq-page[data-page="shop"] .rev52-role-copy{position:relative;z-index:4;display:grid;gap:6px;align-content:start;}
.tabaq-page[data-page="shop"] .rev52-role-copy b,
.tabaq-page[data-page="shop"] .rev52-role-copy strong{display:inline-block;width:max-content;transform:none!important;animation:none!important;}
.tabaq-page[data-page="shop"] .rev52-role-product{
  position:relative!important;
  z-index:3!important;
  align-self:end!important;
  justify-self:center!important;
  width:100%!important;
  min-height:150px!important;
  margin:8px 0 0!important;
  display:grid!important;
  place-items:end center!important;
  pointer-events:none!important;
  overflow:visible!important;
  isolation:isolate!important;
}
.tabaq-page[data-page="shop"] .rev52-role-product::before{
  content:"";
  position:absolute;
  left:50%;
  bottom:2px;
  width:min(132px,55%);
  height:22px;
  border-radius:999px;
  background:rgba(0,0,0,.20);
  filter:blur(16px);
  opacity:.32;
  transform:translateX(-50%) scaleX(.9);
  z-index:0;
}
.tabaq-page[data-page="shop"] .rev52-role-product::after{
  content:"";
  position:absolute;
  left:50%;
  bottom:6px;
  width:86px;
  height:86px;
  border-radius:999px;
  border:1px solid rgba(255,45,18,.18);
  background:radial-gradient(circle,rgba(255,255,255,.5),rgba(255,255,255,0) 62%);
  opacity:.42;
  transform:translateX(-50%);
  z-index:0;
}
.tabaq-page[data-page="shop"] .rev52-role-product img{
  position:relative!important;
  z-index:2!important;
  display:block!important;
  max-width:88%!important;
  max-height:clamp(142px,16vw,230px)!important;
  object-fit:contain!important;
  transform:translateY(4px) scale(1) rotate(0deg)!important;
  animation:none!important;
  filter:drop-shadow(0 28px 34px rgba(0,0,0,.24)) drop-shadow(0 7px 12px rgba(0,0,0,.16))!important;
  opacity:0;
  visibility:hidden;
  transition:opacity .52s cubic-bezier(.22,.61,.36,1),filter .52s ease,visibility .52s linear!important;
}
.tabaq-page[data-page="shop"] .rev52-role-card[data-role-product="oil1"] .rev52-role-product img,
.tabaq-page[data-page="shop"] .rev52-role-card[data-role-product="oil2"] .rev52-role-product img{max-height:clamp(128px,14vw,205px)!important;}
.tabaq-page[data-page="shop"].rev40-docked .rev52-role-product img{opacity:1!important;visibility:visible!important;}
.tabaq-page[data-page="shop"].rev40-docked .shop-motion-aside{opacity:0!important;visibility:hidden!important;}
.tabaq-page[data-page="shop"] .rev52-role-card.rev40-dock-cue{box-shadow:0 26px 58px rgba(0,0,0,.09), inset 0 0 0 1px rgba(255,45,18,.16)!important;}

/* Fixed motion layer used only while the bottle travels. */
.rev40-shop-dock-layer{
  position:fixed;
  inset:0;
  z-index:44;
  pointer-events:none;
  overflow:visible;
  contain:layout style;
}
.rev40-shop-dock-bottle{
  position:fixed;
  left:0;
  top:0;
  margin:0;
  display:block;
  transform-origin:50% 100%;
  opacity:0;
  visibility:hidden;
  pointer-events:none;
  will-change:transform,opacity,filter;
  backface-visibility:hidden;
  transform-style:preserve-3d;
}
.rev40-shop-dock-bottle img{
  display:block;
  width:100%;
  height:100%;
  object-fit:contain;
  filter:drop-shadow(0 38px 50px rgba(0,0,0,.22)) drop-shadow(0 10px 18px rgba(0,0,0,.14));
  transform:translateZ(0);
}
.rev40-shop-dock-bottle.is-visible{visibility:visible;}

/* Conversion discipline: stronger content rhythm without adding new sections. */
.product-card,.rev43-match-card,.rev43-assurance-card,.rev52-role-card{
  scroll-margin-top:120px;
}
.product-card:hover,.rev43-match-card:hover{
  transform:translateY(-4px);
}

@media(max-width:980px){
  .tabaq-page[data-page="shop"] .page-hero{grid-template-columns:1fr!important;min-height:auto!important;overflow:visible!important;padding-bottom:72px!important;}
  .tabaq-page[data-page="shop"] .shop-motion-aside{max-width:min(720px,94vw)!important;width:min(720px,94vw)!important;margin:22px auto 0!important;transform:scale(1.02)!important;}
  .tabaq-page[data-page="shop"] .shop-motion-stage{height:430px!important;max-width:720px!important;margin-inline:auto!important;}
}
@media(max-width:640px){
  .drop-time-ribbon{height:34px!important;}
  .drop-time-ribbon__track span{font-size:10px!important;}
  .tabaq-page[data-page="shop"] .shop-motion-stage{height:350px!important;min-height:320px!important;}
  .tabaq-page[data-page="shop"] .shop-motion-bottle span{font-size:8px;bottom:-18px;}
}
@media(prefers-reduced-motion:reduce){
  .drop-time-ribbon__track{animation:none!important;}
  .rev40-shop-dock-layer{display:none!important;}
  .tabaq-page[data-page="shop"] .shop-motion-aside{opacity:1!important;visibility:visible!important;}
  .tabaq-page[data-page="shop"] .rev52-role-product img{opacity:1!important;visibility:visible!important;}
}
/* REV40 — AWWWARDS DISCIPLINE + SHOP EDITORIAL MOTION POLISH END */


/* ===== tabaq-rev37-layer-kit-early-dock-repair ===== */
/* REV37 — LAYER KIT EARLY DOCK + BODY MIST DUPLICATE REPAIR START
   Purpose: by the time the black Layer Kit cards are readable, all four bottles are already locked into the cards. */
#layers .cards .card .card__media img.is-layer-kit-flight-target,
#layers .cards .card:first-child .card__media img.is-layer-kit-flight-target{
  opacity:0!important;
  visibility:hidden!important;
}
#layers .cards .card.is-layer-kit-flight-destination .card__media::after{
  content:"";
  position:absolute;
  inset:auto 50% 8px auto;
  width:84px;
  height:16px;
  border-radius:999px;
  background:rgba(0,0,0,.18);
  filter:blur(14px);
  transform:translateX(50%);
  pointer-events:none;
}
.layer-kit-flight-clone{
  backface-visibility:hidden;
  transform-style:preserve-3d;
}
/* Shop hero bottles deliberately quieter; they should explain the kit, not dominate it. */
.tabaq-page[data-page="shop"] .page-hero{
  column-gap:clamp(18px,3vw,48px)!important;
}
/* REV37 — LAYER KIT EARLY DOCK + BODY MIST DUPLICATE REPAIR END */
