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
      .nav{height:94px}.nav__links{display:flex}.hero__inner{grid-template-columns:1fr;min-height:calc(100svh - 132px);padding-top:28px}.hero__copy{align-self:start;width:min(440px,64vw);padding-top:32px}.stage{width:70vw;top:56%;}.hero-product{height:58vh}.mega-type{padding-inline:24px}.mega-type__top{font-size:15vw}.mega-type__line{font-size:17vw;gap:34vw}.float-item--right{display:none}.float-item--top{left:56%;top:9%;width:120px}.float-item--low{right:4%;bottom:7%;width:155px}.handoff{height:274svh}.handoff-copy{width:52vw}.cards{grid-template-columns:repeat(2,minmax(0,1fr))}.final{grid-template-columns:1fr}.final img{height:min(62vh,620px)}
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
    .rev29-pack{position:relative;z-index:2;background:transparent!important;border:0;outline:0;padding:0;margin:0;cursor:pointer;isolation:isolate;appearance:none;-webkit-appearance:none;transform-origin:50% 62%;will-change:transform;animation:rev29KitBreath 5.8s ease-in-out infinite second finish}
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
   Purpose: turn Join the early line into a real conversion moment without changing Home/Shop/Drop/Layering heroes or kit animations. */
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

/* REV74 — IDENTITY MASTERPLAN + REASONED ENHANCEMENT START
   Purpose: rebase from Rev72 and lock a clearer site identity: premium kit, four steps, early access, no random decoration. */
:root{
  --rev74-ink:#17120f;
  --rev74-paper:#fffaf1;
  --rev74-soft:#fff4df;
  --rev74-line:rgba(23,18,15,.13);
  --rev74-red:#ff3a1f;
  --rev74-gold:#ffcc5f;
  --rev74-shadow:24px 34px 86px rgba(46,32,20,.15);
}
.rev74-identity-system,
.rev74-layering-masterplan{
  width:min(1360px,calc(100% - clamp(28px,6vw,120px)));
  margin:clamp(42px,7vw,108px) auto;
  color:var(--rev74-ink);
}
.rev74-identity-shell{
  display:grid;
  grid-template-columns:minmax(300px,.86fr) minmax(420px,1.14fr);
  gap:clamp(18px,2.6vw,34px);
  align-items:stretch;
}
.rev74-identity-copy,
.rev74-identity-map,
.rev74-layering-card{
  border:1px solid var(--rev74-line);
  border-radius:clamp(28px,3vw,44px);
  background:linear-gradient(135deg,#fffdf8,#fff4df 92%);
  box-shadow:var(--rev74-shadow);
  position:relative;
  overflow:hidden;
}
.rev74-identity-copy{padding:clamp(24px,4vw,54px);display:flex;flex-direction:column;justify-content:space-between;min-height:520px;}
.rev74-kicker{display:inline-flex;width:max-content;gap:9px;align-items:center;border:1px solid rgba(23,18,15,.16);border-radius:999px;background:rgba(255,255,255,.64);padding:9px 12px;font-size:11px;letter-spacing:.16em;text-transform:uppercase;font-weight:950;color:rgba(23,18,15,.68);}
.rev74-kicker::before{content:"";width:8px;height:8px;border-radius:999px;background:var(--rev74-red);box-shadow:0 0 0 6px rgba(255,58,31,.12);}
.rev74-identity-copy h2,
.rev74-layering-head h2{margin:18px 0 0;font-size:clamp(52px,8.4vw,128px);line-height:.82;letter-spacing:-.085em;text-transform:uppercase;max-width:8.8ch;}
.rev74-identity-copy p,
.rev74-layering-head p{margin:18px 0 0;max-width:54ch;font-size:clamp(16px,1.35vw,21px);line-height:1.42;font-weight:820;color:rgba(23,18,15,.68);}
.rev74-identity-rules{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:28px;}
.rev74-identity-rules article{border:1px solid rgba(23,18,15,.12);border-radius:22px;background:rgba(255,255,255,.66);padding:15px;min-height:118px;display:flex;flex-direction:column;justify-content:space-between;}
.rev74-identity-rules b{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--rev74-red);}
.rev74-identity-rules span{font-size:14px;line-height:1.34;font-weight:850;color:rgba(23,18,15,.66);}
.rev74-identity-map{padding:clamp(22px,3.2vw,44px);min-height:520px;perspective:1000px;background:linear-gradient(145deg,#fff7e7,#fffdf8 46%,#ffecc8);}
.rev74-map-title{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:18px;}
.rev74-map-title b{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:rgba(23,18,15,.58);}
.rev74-map-title span{font-size:12px;font-weight:950;border:1px solid rgba(23,18,15,.14);border-radius:999px;padding:8px 10px;background:#fff;}
.rev74-step-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;align-items:stretch;transform-style:preserve-3d;}
.rev74-step-card{min-height:380px;border:1px solid rgba(23,18,15,.14);border-radius:28px;background:linear-gradient(180deg,rgba(255,255,255,.9),rgba(255,250,241,.72));padding:18px 16px;display:flex;flex-direction:column;justify-content:space-between;position:relative;transform-style:preserve-3d;box-shadow:18px 24px 45px rgba(52,34,18,.12), 0 2px 0 rgba(255,255,255,.78) inset;}
.rev74-step-card::before{content:attr(data-step);position:absolute;right:10px;top:6px;font-size:clamp(52px,6vw,96px);line-height:1;font-weight:950;letter-spacing:-.1em;color:rgba(23,18,15,.055);transform:translateZ(-12px);}
.rev74-step-card::after{content:"";position:absolute;left:15%;right:5%;bottom:-18px;height:30px;border-radius:50%;background:radial-gradient(ellipse at 38% 45%,rgba(63,38,18,.26),rgba(63,38,18,.13) 46%,transparent 72%);filter:blur(8px);transform:translate3d(12px,10px,-28px) rotate(2deg);opacity:.78;pointer-events:none;}
.rev74-step-card small{font-size:10px;letter-spacing:.18em;text-transform:uppercase;font-weight:950;color:var(--rev74-red);}
.rev74-step-card h3{margin:0;font-size:clamp(24px,2.7vw,44px);line-height:.92;letter-spacing:-.06em;text-transform:uppercase;}
.rev74-step-card p{margin:0;font-size:14px;line-height:1.36;font-weight:820;color:rgba(23,18,15,.66);}
.rev74-step-object{height:138px;border-radius:22px;background:linear-gradient(145deg,rgba(255,255,255,.85),rgba(255,230,194,.68));border:1px solid rgba(23,18,15,.1);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(255,255,255,.58);}
.rev74-step-object span{display:block;width:clamp(22px,2.1vw,32px);height:86px;border-radius:16px 16px 12px 12px;background:linear-gradient(180deg,#fff,#ffe3bb);border:1px solid rgba(23,18,15,.16);box-shadow:12px 20px 26px rgba(53,33,15,.18);position:relative;}
.rev74-step-card[data-step="02"] .rev74-step-object span{width:42px;height:102px;border-radius:17px 17px 12px 12px;background:linear-gradient(180deg,#fff,#f5d0a0);}
.rev74-step-card[data-step="03"] .rev74-step-object span,
.rev74-step-card[data-step="04"] .rev74-step-object span{width:26px;height:78px;border-radius:13px;background:linear-gradient(180deg,#fffef8,#e6b47f);}
.rev74-step-object span::before{content:"";position:absolute;left:50%;top:-12px;transform:translateX(-50%);width:54%;height:14px;border-radius:10px 10px 5px 5px;background:#17120f;box-shadow:6px 8px 12px rgba(23,18,15,.22);}
.rev74-motion-note{margin-top:18px;display:flex;gap:12px;align-items:center;justify-content:space-between;border:1px solid rgba(23,18,15,.12);border-radius:24px;background:rgba(255,255,255,.62);padding:14px 16px;}
.rev74-motion-note b{font-size:12px;text-transform:uppercase;letter-spacing:.14em;color:var(--rev74-red);}
.rev74-motion-note span{font-size:14px;line-height:1.36;font-weight:850;color:rgba(23,18,15,.66);}
.rev74-layering-masterplan{margin-top:clamp(20px,4vw,70px);}
.rev74-layering-head{display:grid;grid-template-columns:minmax(300px,.9fr) minmax(360px,1.1fr);gap:18px;align-items:end;margin-bottom:18px;}
.rev74-layering-head h2{max-width:10ch;}
.rev74-layering-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;}
.rev74-layering-card{padding:22px;min-height:184px;box-shadow:16px 22px 62px rgba(46,32,20,.11);}
.rev74-layering-card b{font-size:12px;text-transform:uppercase;letter-spacing:.15em;color:var(--rev74-red);}
.rev74-layering-card h3{margin:14px 0 8px;font-size:clamp(24px,2.3vw,36px);line-height:.95;letter-spacing:-.055em;}
.rev74-layering-card p{margin:0;font-size:15px;line-height:1.42;font-weight:820;color:rgba(23,18,15,.66);}
/* consistency refinements: clear hierarchy without redesigning Rev72 */
.tabaq-page:not([data-page="home"]) .page-title{letter-spacing:-.075em!important;line-height:.84!important;}
.tabaq-page:not([data-page="home"]) .page-lead{font-weight:820!important;line-height:1.42!important;max-width:58ch!important;}
.rev72-page-brief article,.rev43-detail-card,.rev63-shop-faq article,.rev72-bridge-grid article{box-shadow:12px 18px 54px rgba(46,32,20,.075);}
.rev69-drop-activity{box-shadow:18px 28px 72px rgba(35,24,16,.14)!important;}
@media(max-width:1080px){.rev74-identity-shell,.rev74-layering-head{grid-template-columns:1fr}.rev74-step-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.rev74-step-card{min-height:300px}.rev74-layering-grid{grid-template-columns:1fr 1fr}.rev74-identity-copy{min-height:auto}}
@media(max-width:680px){.rev74-identity-system,.rev74-layering-masterplan{width:calc(100% - 28px);margin:42px auto}.rev74-identity-copy,.rev74-identity-map,.rev74-layering-card{border-radius:28px}.rev74-identity-rules,.rev74-step-grid,.rev74-layering-grid{grid-template-columns:1fr}.rev74-step-card{min-height:260px}.rev74-motion-note{align-items:flex-start;flex-direction:column}.rev74-identity-copy h2,.rev74-layering-head h2{font-size:clamp(44px,16vw,76px)}}
/* REV74 — IDENTITY MASTERPLAN + REASONED ENHANCEMENT END */

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
      .nav{height:94px}.nav__links{display:flex}.hero__inner{grid-template-columns:1fr;min-height:calc(100svh - 132px);padding-top:28px}.hero__copy{align-self:start;width:min(440px,64vw);padding-top:32px}.stage{width:70vw;top:56%;}.hero-product{height:58vh}.mega-type{padding-inline:24px}.mega-type__top{font-size:15vw}.mega-type__line{font-size:17vw;gap:34vw}.float-item--right{display:none}.float-item--top{left:56%;top:9%;width:120px}.float-item--low{right:4%;bottom:7%;width:155px}.handoff-copy{width:52vw}.cards{grid-template-columns:repeat(2,minmax(0,1fr))}.final{grid-template-columns:1fr}.final img{height:min(62vh,620px)}
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

/* REV63 — HYBRID ECOMM / LAYERING / GALLERY SYSTEM START
   Purpose: one comprehensive clarity and commerce pass that preserves the existing shell, hero, product motion, route system and visual language. */
:root{
  --rev63-ink:#100d0a;
  --rev63-paper:#fffaf1;
  --rev63-red:#ff3b22;
  --rev63-yellow:#ffd84d;
  --rev63-blue:#b9edf0;
  --rev63-mint:#d9f5e8;
  --rev63-pink:#ffe0ed;
  --rev63-amber:#ffd9a6;
  --rev63-line:rgba(16,13,10,.13);
  --rev63-soft:rgba(16,13,10,.62);
}
.rev63-eyebrow{font-size:11px;letter-spacing:.16em;text-transform:uppercase;font-weight:950;color:var(--rev63-red)}
.rev63-hero-decoder{position:absolute;left:clamp(18px,7vw,112px);bottom:clamp(82px,11vh,138px);z-index:14;width:min(460px,42vw);display:grid;gap:16px;color:#151515;pointer-events:auto}
.hero.is-color .rev63-hero-decoder{color:#fff}.hero.is-color .rev63-hero-decoder .rev63-hero-line{border-color:rgba(255,255,255,.34);background:rgba(255,255,255,.18)}
.rev63-hero-decoder h1{margin:0;font-family:var(--display);font-size:clamp(42px,5.9vw,92px);line-height:.81;letter-spacing:-.082em;text-transform:uppercase;max-width:8em;text-wrap:balance}
.rev63-hero-decoder p{margin:0;max-width:39ch;font-size:clamp(14px,1.18vw,17px);line-height:1.48;font-weight:850;color:currentColor}
.rev63-hero-lines{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px;max-width:430px}.rev63-hero-line{border:1px solid rgba(16,13,10,.14);background:rgba(255,255,255,.72);border-radius:18px;padding:10px 9px;min-height:68px;display:grid;align-content:space-between;box-shadow:0 18px 44px rgba(16,13,10,.07);backdrop-filter:blur(10px)}
.rev63-hero-line b{font-size:11px;letter-spacing:.13em;text-transform:uppercase;color:var(--rev63-red)}.rev63-hero-line span{font-size:12px;line-height:1.15;font-weight:950;color:currentColor}.rev63-hero-line.is-lit{transform:translateY(-3px);background:#fff;box-shadow:0 24px 60px rgba(16,13,10,.14)}
.rev63-hero-actions{display:flex;gap:10px;flex-wrap:wrap}.rev63-hero-actions .pill,.rev63-hero-actions .order-btn{height:48px;min-height:48px}.rev63-hero-actions .ghost-pill{background:rgba(255,255,255,.22);border-color:currentColor;color:currentColor}
.rev63-section{padding:clamp(70px,9vw,128px) clamp(18px,7vw,110px);background:var(--rev63-paper);color:var(--rev63-ink)}.rev63-section--white{background:#fff}.rev63-section--ink{background:var(--rev63-ink);color:#fff}.rev63-section__head{display:grid;grid-template-columns:minmax(230px,.78fr) minmax(320px,1.22fr);gap:clamp(24px,5vw,76px);align-items:end;margin-bottom:clamp(22px,4vw,46px)}
.rev63-section__head h2{font-family:var(--display);font-size:clamp(48px,8vw,132px);line-height:.82;letter-spacing:-.074em;margin:6px 0 0;text-transform:uppercase}.rev63-section__head p{font-size:clamp(16px,1.7vw,22px);line-height:1.42;font-weight:850;color:currentColor;max-width:48ch}.rev63-section--ink .rev63-section__head p{color:rgba(255,255,255,.72)}
.rev63-proof-grid,.rev63-store-grid,.rev63-gallery-grid,.rev63-trust-grid,.rev63-about-grid,.rev63-product-proof,.rev63-timeline-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.rev63-card{border:1px solid var(--rev63-line);background:#fff;border-radius:28px;padding:clamp(18px,2.3vw,28px);min-height:190px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;box-shadow:0 20px 58px rgba(37,25,12,.08)}.rev63-card::after{content:attr(data-num);position:absolute;right:-8px;bottom:-28px;font-family:var(--display);font-size:130px;line-height:.78;letter-spacing:-.08em;color:rgba(16,13,10,.05);pointer-events:none}.rev63-card h3{font-size:clamp(24px,3vw,42px);line-height:.92;letter-spacing:-.055em;margin:10px 0 12px}.rev63-card p{font-size:14px;line-height:1.5;color:var(--rev63-soft);font-weight:750;margin:0}.rev63-card b{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--rev63-red)}
.rev63-proof-strip{display:grid;grid-template-columns:1.05fr .95fr;gap:14px;margin-top:14px}.rev63-proof-strip .rev63-card{min-height:240px}.rev63-giant-line{font-family:var(--display);font-size:clamp(56px,9vw,150px);line-height:.78;letter-spacing:-.084em;text-transform:uppercase;margin:0}.rev63-store-command{margin:clamp(24px,4vw,46px) 0;display:grid;grid-template-columns:minmax(280px,.84fr) minmax(420px,1.16fr);gap:16px;align-items:stretch}.rev63-store-command__poster{border-radius:34px;background:linear-gradient(135deg,#ff3b22 0%,#ff7048 42%,#ffd84d 100%);padding:clamp(24px,4vw,44px);color:#fff;min-height:420px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;position:relative}.rev63-store-command__poster::after{content:'KIT';position:absolute;right:-26px;bottom:-44px;font-family:var(--display);font-size:230px;letter-spacing:-.08em;color:rgba(255,255,255,.18)}.rev63-store-command__poster h2{font-family:var(--display);font-size:clamp(50px,6.6vw,116px);line-height:.8;letter-spacing:-.08em;margin:8px 0;text-transform:uppercase}.rev63-store-command__poster p{max-width:38ch;font-size:16px;line-height:1.52;font-weight:820;color:rgba(255,255,255,.86)}.rev63-store-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.rev63-store-grid .rev63-card{min-height:202px}.rev63-store-grid .rev63-card:nth-child(1){background:var(--rev63-mint)}.rev63-store-grid .rev63-card:nth-child(2){background:var(--rev63-pink)}.rev63-store-grid .rev63-card:nth-child(3){background:var(--rev63-amber)}.rev63-store-grid .rev63-card:nth-child(4){background:#ffec6d}
.rev63-kit-table{border:1px solid var(--rev63-line);background:#fff;border-radius:32px;overflow:hidden;margin:22px 0}.rev63-kit-table__row{display:grid;grid-template-columns:1.05fr .78fr .78fr .78fr .72fr;gap:0;border-top:1px solid rgba(16,13,10,.1);align-items:stretch}.rev63-kit-table__row:first-child{border-top:0;background:#100d0a;color:#fff}.rev63-kit-table__row>*{padding:16px;border-left:1px solid rgba(16,13,10,.08);font-size:13px;line-height:1.35;font-weight:800}.rev63-kit-table__row:first-child>*{border-left-color:rgba(255,255,255,.12);font-size:11px;letter-spacing:.13em;text-transform:uppercase}.rev63-kit-table__row>*:first-child{border-left:0}.rev63-kit-table b{font-size:18px;letter-spacing:-.03em}.rev63-commerce-faq{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:18px}.rev63-commerce-faq article{border:1px solid var(--rev63-line);border-radius:24px;background:#fff;padding:18px}.rev63-commerce-faq h3{font-size:13px;text-transform:uppercase;letter-spacing:.14em;color:var(--rev63-red);margin:0 0 10px}.rev63-commerce-faq p{font-size:14px;line-height:1.5;font-weight:740;color:var(--rev63-soft);margin:0}
.rev63-layering-primer{margin:28px auto 0;width:min(1180px,calc(100% - 36px));display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.rev63-layering-primer article{border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.1);border-radius:24px;padding:18px;color:#fff;backdrop-filter:blur(12px)}.rev63-layering-primer b{display:block;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#ffd84d;margin-bottom:8px}.rev63-layering-primer strong{display:block;font-size:24px;letter-spacing:-.04em;line-height:1}.rev63-layering-primer span{display:block;margin-top:8px;font-size:13px;line-height:1.35;color:rgba(255,255,255,.72);font-weight:760}
.rev63-gallery-hero{position:relative;overflow:hidden;border-radius:38px;background:#ff3b22;color:#fff;min-height:520px;padding:clamp(28px,6vw,76px);display:grid;grid-template-columns:.92fr 1.08fr;gap:22px;align-items:end;margin-bottom:18px}.rev63-gallery-hero::after{content:'LAYER WORLD';position:absolute;right:-6vw;top:6vh;font-family:var(--display);font-size:clamp(90px,16vw,270px);line-height:.75;letter-spacing:-.09em;color:rgba(255,255,255,.15);max-width:6em}.rev63-gallery-hero h1{font-family:var(--display);font-size:clamp(62px,9vw,148px);line-height:.78;letter-spacing:-.083em;margin:8px 0;text-transform:uppercase}.rev63-gallery-hero p{font-size:clamp(16px,1.5vw,21px);line-height:1.44;font-weight:820;color:rgba(255,255,255,.82);max-width:44ch}.rev63-gallery-window{position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:end}.rev63-gallery-window figure{margin:0;border-radius:28px;background:rgba(255,255,255,.2);min-height:320px;display:grid;place-items:center;overflow:hidden;border:1px solid rgba(255,255,255,.2)}.rev63-gallery-window img{width:78%;height:280px;object-fit:contain;filter:drop-shadow(0 34px 38px rgba(0,0,0,.22))}.rev63-gallery-grid{grid-template-columns:1.15fr .85fr 1fr}.rev63-gallery-tile{min-height:330px;border:1px solid var(--rev63-line);border-radius:32px;background:#fff;padding:26px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;position:relative}.rev63-gallery-tile.large{grid-row:span 2;min-height:672px;background:#100d0a;color:#fff}.rev63-gallery-tile.wide{grid-column:span 2;background:#ffd84d}.rev63-gallery-tile h3{font-family:var(--display);font-size:clamp(34px,4.6vw,78px);line-height:.82;letter-spacing:-.074em;text-transform:uppercase;margin:8px 0}.rev63-gallery-tile p{font-size:15px;line-height:1.5;font-weight:760;color:rgba(16,13,10,.66);max-width:39ch}.rev63-gallery-tile.large p{color:rgba(255,255,255,.68)}.rev63-gallery-tile img{position:absolute;right:-4%;bottom:-8%;width:min(58%,340px);height:auto;object-fit:contain;filter:drop-shadow(0 34px 44px rgba(0,0,0,.18))}
.rev63-about-constitution{display:grid;grid-template-columns:minmax(300px,.9fr) minmax(420px,1.1fr);gap:18px;align-items:stretch}.rev63-about-poster{border-radius:36px;background:#100d0a;color:#fff;padding:clamp(28px,5vw,58px);min-height:560px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden}.rev63-about-poster::after{content:'NO RANDOM PAIRING';position:absolute;right:-22px;bottom:-28px;font-family:var(--display);font-size:clamp(76px,11vw,178px);line-height:.75;letter-spacing:-.084em;color:rgba(255,255,255,.08);width:4.8em}.rev63-about-poster h2{font-family:var(--display);font-size:clamp(54px,7vw,118px);line-height:.8;letter-spacing:-.08em;text-transform:uppercase;margin:8px 0}.rev63-about-poster p{font-size:18px;line-height:1.46;font-weight:820;color:rgba(255,255,255,.76);max-width:42ch}.rev63-about-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.rev63-about-grid .rev63-card{min-height:272px}.rev63-about-grid .rev63-card:nth-child(1){background:var(--rev63-mint)}.rev63-about-grid .rev63-card:nth-child(2){background:var(--rev63-pink)}.rev63-about-grid .rev63-card:nth-child(3){background:var(--rev63-amber)}.rev63-about-grid .rev63-card:nth-child(4){background:#ffec6d}
.rev63-drop-proof{margin:22px 0}.rev63-timeline-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.rev63-timeline-grid .rev63-card{background:#fff;min-height:230px}.rev63-timeline-grid .rev63-card:nth-child(2){background:var(--rev63-mint)}.rev63-timeline-grid .rev63-card:nth-child(3){background:var(--rev63-pink)}.rev63-timeline-grid .rev63-card:nth-child(4){background:#ffec6d}.rev63-product-proof{grid-template-columns:repeat(3,minmax(0,1fr));margin:12px 0 2px}.rev63-product-proof .rev63-card{min-height:190px}.rev63-product-proof .rev63-card:nth-child(1){background:#fff}.rev63-product-proof .rev63-card:nth-child(2){background:var(--rev63-mint)}.rev63-product-proof .rev63-card:nth-child(3){background:#ffec6d}.rev63-reduced-copy{font-size:12px;line-height:1.4;color:rgba(16,13,10,.58);font-weight:760;margin-top:10px}.rev63-gallery-tile[data-tone="mint"]{background:var(--rev63-mint)}.rev63-gallery-tile[data-tone="pink"]{background:var(--rev63-pink)}.rev63-gallery-tile[data-tone="amber"]{background:var(--rev63-amber)}.rev63-gallery-tile[data-tone="yellow"]{background:#ffec6d}.rev63-inline-cta{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}.rev63-inline-cta .mini-btn,.rev63-inline-cta .pill{height:46px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none}.rev63-motion-word{display:inline-block;will-change:transform,opacity;}
@media(max-width:1120px){.rev63-proof-grid,.rev63-trust-grid,.rev63-timeline-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.rev63-store-command,.rev63-gallery-hero,.rev63-about-constitution,.rev63-proof-strip{grid-template-columns:1fr}.rev63-gallery-grid{grid-template-columns:1fr 1fr}.rev63-gallery-tile.large{grid-row:auto;min-height:430px}.rev63-product-proof{grid-template-columns:1fr}.rev63-kit-table{overflow-x:auto}.rev63-kit-table__row{min-width:860px}.rev63-layering-primer{grid-template-columns:repeat(2,minmax(0,1fr))}.rev63-hero-decoder{width:min(410px,60vw)}}
@media(max-width:720px){.rev63-hero-decoder{left:18px;right:18px;width:auto;bottom:72px}.rev63-hero-decoder h1{font-size:44px}.rev63-hero-decoder p{font-size:13px;max-width:280px}.rev63-hero-lines{grid-template-columns:repeat(2,minmax(0,1fr));max-width:310px}.rev63-hero-line{min-height:54px;padding:8px}.rev63-section{padding:72px 18px}.rev63-section__head,.rev63-store-grid,.rev63-proof-grid,.rev63-gallery-grid,.rev63-trust-grid,.rev63-commerce-faq,.rev63-about-grid,.rev63-timeline-grid,.rev63-layering-primer{grid-template-columns:1fr}.rev63-section__head h2{font-size:52px}.rev63-gallery-hero{border-radius:28px;grid-template-columns:1fr;min-height:auto}.rev63-gallery-window{grid-template-columns:repeat(2,minmax(0,1fr))}.rev63-gallery-window figure{min-height:190px}.rev63-gallery-window img{height:170px}.rev63-store-command__poster{min-height:360px}.rev63-proof-strip{grid-template-columns:1fr}.rev63-giant-line{font-size:64px}.rev63-gallery-tile.wide{grid-column:auto}.rev63-about-poster{min-height:420px}}
@media(prefers-reduced-motion:reduce){.rev63-motion-word,.rev63-hero-line{transition:none!important;animation:none!important;transform:none!important}}
/* REV63 — HYBRID ECOMM / LAYERING / GALLERY SYSTEM END */

/* REV61 — FINAL HYBRID COMMERCE POLISH START
   Purpose: preserve Rev63's direction while repairing the missing hero decoder markup, tightening first-read clarity, and making Shop/Gallery/Drop/Product pages feel more finished and commerce-ready. */
:root{
  --rev61-red:#ff3b22;
  --rev61-ink:#100d0a;
  --rev61-paper:#fffaf1;
  --rev61-cream:#fff4dd;
  --rev61-mint:#dff7eb;
  --rev61-blue:#c7f0f2;
  --rev61-pink:#ffe1ec;
  --rev61-yellow:#ffe765;
  --rev61-line:rgba(16,13,10,.13);
}
.rev61-hero-decode{isolation:isolate}
.rev61-hero-decode::before{content:"";position:absolute;inset:-18px;border-radius:32px;background:linear-gradient(135deg,rgba(255,250,241,.74),rgba(255,255,255,.25));border:1px solid rgba(255,255,255,.44);box-shadow:0 34px 86px rgba(16,13,10,.12);z-index:-1;backdrop-filter:blur(16px)}
.hero.is-color .rev61-hero-decode::before{background:linear-gradient(135deg,rgba(255,255,255,.2),rgba(255,255,255,.08));border-color:rgba(255,255,255,.24)}
.rev61-hero-decode .rev63-eyebrow{color:var(--rev61-red)}
.hero.is-color .rev61-hero-decode .rev63-eyebrow{color:#ffe765}
.rev61-plain-line{font-size:clamp(13px,1vw,15px);font-weight:950;letter-spacing:.02em;line-height:1.35;max-width:36ch;color:rgba(16,13,10,.68)}
.hero.is-color .rev61-plain-line{color:rgba(255,255,255,.82)}
.rev61-commerce-proof{display:flex;gap:7px;flex-wrap:wrap;align-items:center}.rev61-commerce-proof span{font-size:11px;font-weight:950;letter-spacing:.11em;text-transform:uppercase;border:1px solid rgba(16,13,10,.14);border-radius:999px;background:rgba(255,255,255,.7);padding:8px 10px}.hero.is-color .rev61-commerce-proof span{border-color:rgba(255,255,255,.28);background:rgba(255,255,255,.16)}
.rev61-clarity-band{padding:clamp(52px,7vw,96px) clamp(18px,7vw,110px);background:#fff;border-top:1px solid var(--rev61-line);border-bottom:1px solid var(--rev61-line);display:grid;grid-template-columns:minmax(280px,.9fr) minmax(440px,1.1fr);gap:clamp(22px,5vw,78px);align-items:center}
.rev61-clarity-band h2{font-family:var(--display);font-size:clamp(48px,8vw,130px);line-height:.8;letter-spacing:-.078em;text-transform:uppercase;margin:6px 0 0}.rev61-clarity-band p{font-size:clamp(16px,1.6vw,21px);line-height:1.46;font-weight:830;color:rgba(16,13,10,.68);max-width:48ch}.rev61-layer-map{position:relative;min-height:420px;border-radius:42px;overflow:hidden;background:var(--rev61-paper);border:1px solid var(--rev61-line);box-shadow:0 28px 80px rgba(16,13,10,.08)}.rev61-layer-map span{position:absolute;border-radius:999px;mix-blend-mode:multiply;opacity:.86}.rev61-layer-map span:nth-child(1){width:54%;height:54%;left:7%;top:11%;background:#bfeee9}.rev61-layer-map span:nth-child(2){width:58%;height:58%;right:10%;top:18%;background:#ffe36d}.rev61-layer-map span:nth-child(3){width:48%;height:48%;left:22%;bottom:8%;background:#ffc1d7}.rev61-layer-map span:nth-child(4){width:43%;height:43%;right:13%;bottom:12%;background:#ff8a65}.rev61-layer-map strong{position:absolute;left:clamp(22px,4vw,44px);bottom:clamp(22px,4vw,44px);font-family:var(--display);font-size:clamp(38px,5.4vw,88px);line-height:.8;letter-spacing:-.078em;text-transform:uppercase;max-width:7em}.rev61-layer-map em{position:absolute;right:24px;top:22px;font-style:normal;font-size:11px;font-weight:950;letter-spacing:.16em;text-transform:uppercase;color:rgba(16,13,10,.54)}
.rev61-shop-finder{border:1px solid var(--rev61-line);border-radius:38px;background:linear-gradient(135deg,#fff 0%,#fff7e5 56%,#ffe9ef 100%);padding:clamp(22px,4vw,46px);margin:clamp(22px,4vw,42px) 0;display:grid;grid-template-columns:minmax(280px,.86fr) minmax(420px,1.14fr);gap:18px;position:relative;overflow:hidden}.rev61-shop-finder::after{content:"FIND YOUR UNIFORM";position:absolute;right:-.12em;bottom:-.16em;font-family:var(--display);font-size:clamp(70px,12vw,210px);line-height:.75;letter-spacing:-.09em;color:rgba(255,59,34,.08);pointer-events:none}.rev61-shop-finder h2{font-family:var(--display);font-size:clamp(44px,6vw,104px);line-height:.8;letter-spacing:-.078em;text-transform:uppercase;margin:8px 0}.rev61-shop-finder p{font-weight:800;line-height:1.48;color:rgba(16,13,10,.66);max-width:42ch}.rev61-choice-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;position:relative;z-index:1}.rev61-choice{border:1px solid rgba(16,13,10,.14);background:#fff;border-radius:24px;padding:18px;text-align:left;cursor:pointer;min-height:142px;display:flex;flex-direction:column;justify-content:space-between;transition:transform .28s cubic-bezier(.2,.8,.2,1),box-shadow .28s ease,border-color .28s ease}.rev61-choice:hover,.rev61-choice.is-active{transform:translateY(-4px);border-color:rgba(255,59,34,.42);box-shadow:0 24px 54px rgba(16,13,10,.12)}.rev61-choice b{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--rev61-red)}.rev61-choice strong{font-size:clamp(22px,2.8vw,36px);line-height:.92;letter-spacing:-.05em}.rev61-choice span{font-size:13px;line-height:1.35;font-weight:760;color:rgba(16,13,10,.62)}.rev61-result{position:relative;z-index:1;border-radius:28px;background:#100d0a;color:#fff;padding:22px;margin-top:12px;display:grid;gap:8px}.rev61-result b{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:#ffe765}.rev61-result strong{font-size:clamp(28px,3.8vw,54px);line-height:.86;letter-spacing:-.06em}.rev61-result p{color:rgba(255,255,255,.72);margin:0;max-width:48ch}.rev61-result .mini-btn{width:max-content;background:#fff;color:#100d0a}
.rev61-commerce-spine{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:18px 0 28px}.rev61-spine-card{border:1px solid var(--rev61-line);border-radius:28px;background:#fff;padding:24px;min-height:220px;position:relative;overflow:hidden}.rev61-spine-card::after{content:attr(data-step);position:absolute;right:-10px;bottom:-24px;font-family:var(--display);font-size:126px;letter-spacing:-.08em;color:rgba(16,13,10,.045)}.rev61-spine-card b{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--rev61-red)}.rev61-spine-card h3{font-size:clamp(25px,3vw,44px);line-height:.9;letter-spacing:-.055em;margin:10px 0}.rev61-spine-card p{font-size:14px;line-height:1.5;font-weight:760;color:rgba(16,13,10,.62)}
.rev61-gallery-index{margin:18px 0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.rev61-index-card{border:1px solid var(--rev61-line);border-radius:26px;background:#fff;padding:18px;min-height:160px;display:flex;flex-direction:column;justify-content:space-between}.rev61-index-card:nth-child(2){background:var(--rev61-mint)}.rev61-index-card:nth-child(3){background:var(--rev61-pink)}.rev61-index-card:nth-child(4){background:var(--rev61-yellow)}.rev61-index-card b{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--rev61-red)}.rev61-index-card strong{font-size:clamp(22px,2.8vw,38px);line-height:.92;letter-spacing:-.055em}.rev61-index-card span{font-size:13px;font-weight:780;line-height:1.35;color:rgba(16,13,10,.62)}
.rev61-editorial-strip{display:grid;grid-template-columns:.92fr 1.08fr;gap:14px;margin:18px 0}.rev61-editorial-poster{border-radius:38px;background:#100d0a;color:#fff;min-height:470px;padding:clamp(24px,4vw,48px);position:relative;overflow:hidden}.rev61-editorial-poster::before,.rev61-editorial-poster::after{content:"";position:absolute;border-radius:999px;filter:blur(.2px);mix-blend-mode:screen}.rev61-editorial-poster::before{width:42%;height:42%;right:8%;top:12%;background:#ff3b22}.rev61-editorial-poster::after{width:52%;height:52%;left:14%;bottom:8%;background:#ffe765;opacity:.7}.rev61-editorial-poster h2{position:relative;font-family:var(--display);font-size:clamp(46px,6.4vw,112px);line-height:.8;letter-spacing:-.08em;text-transform:uppercase;margin:8px 0;z-index:1}.rev61-editorial-poster p{position:relative;z-index:1;font-weight:820;line-height:1.5;color:rgba(255,255,255,.74);max-width:42ch}.rev61-editorial-list{display:grid;grid-template-columns:1fr 1fr;gap:12px}.rev61-editorial-list article{border:1px solid var(--rev61-line);border-radius:30px;background:#fff;padding:22px;min-height:228px;display:flex;flex-direction:column;justify-content:space-between}.rev61-editorial-list article:nth-child(2){background:var(--rev61-mint)}.rev61-editorial-list article:nth-child(3){background:var(--rev61-pink)}.rev61-editorial-list article:nth-child(4){background:var(--rev61-yellow)}.rev61-editorial-list b{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--rev61-red)}.rev61-editorial-list h3{font-size:clamp(25px,3vw,42px);line-height:.9;letter-spacing:-.055em;margin:8px 0}.rev61-editorial-list p{font-size:14px;line-height:1.48;font-weight:760;color:rgba(16,13,10,.62);margin:0}
.rev61-about-belief{border-radius:38px;background:linear-gradient(135deg,#fff 0%,#fff0d2 52%,#ffdce8 100%);border:1px solid var(--rev61-line);padding:clamp(26px,5vw,62px);margin:18px 0;display:grid;grid-template-columns:minmax(280px,.8fr) minmax(420px,1.2fr);gap:22px;align-items:end}.rev61-about-belief h2{font-family:var(--display);font-size:clamp(44px,7vw,118px);line-height:.8;letter-spacing:-.08em;text-transform:uppercase;margin:8px 0}.rev61-about-belief p{font-size:clamp(16px,1.6vw,22px);line-height:1.45;font-weight:830;color:rgba(16,13,10,.68)}.rev61-belief-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.rev61-belief-grid article{border:1px solid rgba(16,13,10,.12);background:rgba(255,255,255,.66);border-radius:24px;padding:18px;min-height:180px}.rev61-belief-grid b{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--rev61-red)}.rev61-belief-grid strong{display:block;font-size:clamp(22px,2.8vw,36px);line-height:.92;letter-spacing:-.055em;margin:10px 0}.rev61-belief-grid span{font-size:13px;line-height:1.4;font-weight:770;color:rgba(16,13,10,.62)}
.rev61-drop-promise{border-radius:36px;border:1px solid var(--rev61-line);background:#fff;padding:clamp(24px,4vw,48px);margin:18px 0;display:grid;grid-template-columns:minmax(270px,.8fr) minmax(420px,1.2fr);gap:16px;align-items:start}.rev61-drop-promise h2{font-family:var(--display);font-size:clamp(40px,6vw,96px);line-height:.82;letter-spacing:-.078em;text-transform:uppercase;margin:8px 0}.rev61-drop-promise p{font-weight:820;line-height:1.5;color:rgba(16,13,10,.66);max-width:44ch}.rev61-promise-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.rev61-promise-list article{border:1px solid rgba(16,13,10,.12);border-radius:24px;padding:18px;background:var(--rev61-paper);min-height:160px}.rev61-promise-list article:nth-child(2){background:var(--rev61-mint)}.rev61-promise-list article:nth-child(3){background:var(--rev61-pink)}.rev61-promise-list article:nth-child(4){background:var(--rev61-yellow)}.rev61-promise-list b{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--rev61-red)}.rev61-promise-list strong{display:block;font-size:clamp(21px,2.5vw,34px);line-height:.92;letter-spacing:-.052em;margin:9px 0}.rev61-promise-list span{font-size:13px;line-height:1.36;font-weight:770;color:rgba(16,13,10,.62)}
.rev61-product-close{border:1px solid var(--rev61-line);border-radius:30px;background:#fff;padding:clamp(20px,3vw,34px);margin:14px 0 20px;display:grid;grid-template-columns:1fr auto;gap:18px;align-items:center}.rev61-product-close b{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--rev61-red)}.rev61-product-close h3{font-size:clamp(28px,4vw,62px);line-height:.86;letter-spacing:-.065em;margin:8px 0}.rev61-product-close p{font-size:14px;line-height:1.48;font-weight:760;color:rgba(16,13,10,.62);max-width:52ch}.rev61-product-close a,.rev61-product-close button{white-space:nowrap}
.rev61-quality-pass{outline:none}.rev61-quality-pass :focus-visible{outline:3px solid #ff3b22;outline-offset:4px}.mini-btn,.order-btn,.pill,.ghost-pill,.filter-pill,.rev43-drop-list-btn{transition:transform .24s cubic-bezier(.2,.8,.2,1),box-shadow .24s ease}.mini-btn:hover,.order-btn:hover,.pill:hover,.ghost-pill:hover,.filter-pill:hover,.rev43-drop-list-btn:hover{transform:translateY(-2px)}
@media(max-width:1120px){.rev61-clarity-band,.rev61-shop-finder,.rev61-editorial-strip,.rev61-about-belief,.rev61-drop-promise{grid-template-columns:1fr}.rev61-commerce-spine,.rev61-gallery-index,.rev61-belief-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:720px){.rev61-hero-decode{bottom:86px!important}.rev61-hero-decode::before{inset:-12px;border-radius:24px}.rev61-hero-decode .rev63-hero-actions{display:none}.rev61-commerce-proof span{font-size:10px;padding:7px 8px}.rev61-plain-line{display:none}.rev61-clarity-band,.rev61-shop-finder,.rev61-editorial-poster,.rev61-about-belief,.rev61-drop-promise{padding:28px 18px}.rev61-layer-map{min-height:320px;border-radius:30px}.rev61-choice-grid,.rev61-commerce-spine,.rev61-gallery-index,.rev61-editorial-list,.rev61-belief-grid,.rev61-promise-list,.rev61-product-close{grid-template-columns:1fr}.rev61-editorial-poster{min-height:360px}.rev61-product-close{align-items:start}.rev61-product-close a,.rev61-product-close button{width:100%;justify-content:center}}
@media(prefers-reduced-motion:reduce){.rev61-choice,.mini-btn,.order-btn,.pill,.ghost-pill,.filter-pill,.rev43-drop-list-btn{transition:none!important}}
/* REV61 — FINAL HYBRID COMMERCE POLISH END */

/* REV64 — BUG REPAIR + INTENTIONAL DESIGN PASS START
   Purpose: flatten unstable Rev63 changes back to the stable Rev62 shell, keep simple copy, repair invalid nested main, and make the remaining handoff mark intentional. */
:root{
  --rev64-ink:#120f0b;
  --rev64-soft:rgba(18,15,11,.66);
  --rev64-line:rgba(18,15,11,.14);
}
#home-motion-top{display:block;}
.giant-gloss.rev64-layer-seal{
  right:13%;top:16%;width:238px;height:238px;border-radius:50%;display:grid;place-items:center;text-align:center;color:#120f0b;
  background:conic-gradient(from -34deg,#ffd35d 0 24%,#ff6f58 24% 49%,#d2b4ff 49% 74%,#a6df76 74% 100%);
  filter:drop-shadow(0 30px 64px rgba(18,15,11,.20));border:1px solid rgba(255,255,255,.52);overflow:hidden;isolation:isolate;
}
.giant-gloss.rev64-layer-seal::before{content:"";position:absolute;inset:18px;border-radius:50%;background:repeating-radial-gradient(circle,rgba(255,255,255,.78) 0 2px,transparent 2px 28px);mix-blend-mode:screen;opacity:.82;z-index:-1;}
.giant-gloss.rev64-layer-seal::after{content:"";position:absolute;inset:50%;width:120%;height:1px;background:rgba(18,15,11,.28);transform:translate(-50%,-50%) rotate(-28deg);box-shadow:0 0 0 999px rgba(255,255,255,.06);z-index:-1;}
.rev64-layer-seal__label{font-size:10px;line-height:1;letter-spacing:.18em;text-transform:uppercase;font-weight:950;background:rgba(255,255,255,.72);border:1px solid rgba(18,15,11,.14);border-radius:999px;padding:8px 10px;}
.rev64-layer-seal__core{font-family:var(--display,Arial Black,sans-serif);font-size:clamp(30px,3vw,48px);letter-spacing:-.07em;font-weight:950;line-height:.8;margin-top:3px;}
.rev64-layer-seal__ring{font-size:10px;letter-spacing:.11em;text-transform:uppercase;font-weight:950;background:rgba(18,15,11,.86);color:#fff;border-radius:999px;padding:8px 10px;max-width:170px;line-height:1.2;}
.rev63-card p,.rev63-commerce-faq p,.product-card p,.rev47-sales-intro p,.rev61-choice span,.rev61-result p{color:var(--rev64-soft);}
.rev63-gallery-tile p{color:rgba(18,15,11,.68);}
.rev63-gallery-tile.large p{color:rgba(255,255,255,.72);}
.rev61-plain-line,.handoff-copy p,.section p.lead{font-weight:820;line-height:1.48;}
@media(max-width:720px){.giant-gloss.rev64-layer-seal{right:-42px;top:18%;width:154px;height:154px}.rev64-layer-seal__core{font-size:29px}.rev64-layer-seal__label,.rev64-layer-seal__ring{font-size:8px;padding:6px 8px}}
/* REV64 — BUG REPAIR + INTENTIONAL DESIGN PASS END */

/* REV65 — REAL KIT PRODUCT PROOF START
   Purpose: replace the abstract layer blobs with the actual four products inside the kit. */
.rev65-kit-proof{
  position:relative;
  min-height:clamp(430px,42vw,560px);
  padding:clamp(22px,3.4vw,38px);
  background:
    linear-gradient(90deg,rgba(18,15,11,.045) 1px,transparent 1px) 0 0/72px 72px,
    linear-gradient(180deg,rgba(18,15,11,.038) 1px,transparent 1px) 0 0/72px 72px,
    radial-gradient(circle at 16% 24%,rgba(255,216,72,.24),transparent 28%),
    radial-gradient(circle at 86% 36%,rgba(255,101,82,.18),transparent 28%),
    #fff8ea;
  border:1px solid rgba(18,15,11,.13);
  box-shadow:0 34px 90px rgba(18,15,11,.09);
  overflow:hidden;
  isolation:isolate;
}
.rev65-kit-proof::before{
  content:"KIT";
  position:absolute;
  right:-.10em;
  bottom:-.23em;
  font-family:var(--display);
  font-size:clamp(150px,22vw,330px);
  line-height:.75;
  letter-spacing:-.1em;
  color:rgba(18,15,11,.045);
  pointer-events:none;
  z-index:-1;
}
.rev65-kit-proof::after{
  content:"";
  position:absolute;
  left:clamp(24px,4vw,54px);
  right:clamp(24px,4vw,54px);
  bottom:clamp(86px,9vw,124px);
  height:14px;
  border-radius:999px;
  background:linear-gradient(90deg,#ffd35d 0 25%,#ff8b74 25% 50%,#cdb1ff 50% 75%,#a8e07b 75% 100%);
  box-shadow:0 20px 44px rgba(18,15,11,.14);
  opacity:.92;
  z-index:0;
}
.rev65-kit-proof__topline{
  position:relative;
  z-index:2;
  display:inline-flex;
  align-items:center;
  min-height:26px;
  padding:8px 12px;
  border:1px solid rgba(18,15,11,.13);
  border-radius:999px;
  background:rgba(255,255,255,.72);
  font-size:11px;
  line-height:1;
  font-weight:950;
  letter-spacing:.16em;
  text-transform:uppercase;
  color:rgba(18,15,11,.72);
}
.rev65-kit-proof__title{
  position:relative;
  z-index:2;
  margin:18px 0 0;
  max-width:7.6em;
  font-family:var(--display);
  font-size:clamp(38px,5.4vw,86px);
  line-height:.82;
  letter-spacing:-.078em;
  text-transform:uppercase;
  color:#120f0b;
}
.rev65-kit-proof__subcopy{
  position:relative;
  z-index:2;
  max-width:38ch;
  margin:12px 0 0;
  font-size:clamp(13px,1.05vw,15px);
  line-height:1.42;
  font-weight:850;
  color:rgba(18,15,11,.62);
}
.rev65-kit-proof__stage{
  position:absolute;
  left:clamp(22px,4vw,48px);
  right:clamp(22px,4vw,48px);
  bottom:clamp(44px,5vw,62px);
  height:clamp(210px,22vw,294px);
  display:grid;
  grid-template-columns:1.18fr 1fr .92fr .92fr;
  align-items:end;
  gap:clamp(8px,1.4vw,18px);
  z-index:1;
}
.rev65-kit-product{
  position:relative;
  min-width:0;
  margin:0;
  display:grid;
  place-items:end center;
  height:100%;
}
.rev65-kit-product b{
  position:absolute;
  top:8px;
  left:50%;
  transform:translateX(-50%);
  display:grid;
  place-items:center;
  width:34px;
  height:34px;
  border-radius:999px;
  background:#120f0b;
  color:#fff;
  font-size:11px;
  letter-spacing:.02em;
  z-index:3;
  box-shadow:0 10px 20px rgba(18,15,11,.16);
}
.rev65-kit-product img{
  position:relative;
  z-index:2;
  display:block;
  width:auto;
  max-width:100%;
  height:auto;
  max-height:clamp(158px,18vw,252px);
  object-fit:contain;
  filter:drop-shadow(0 26px 24px rgba(18,15,11,.19));
  transform-origin:50% 85%;
}
.rev65-kit-product--mist img{max-height:clamp(190px,23vw,316px);transform:rotate(-8deg) translateY(8px)}
.rev65-kit-product--edp img{max-height:clamp(170px,20vw,280px);transform:rotate(3deg) translateY(6px)}
.rev65-kit-product--oil1 img{max-height:clamp(150px,18vw,250px);transform:rotate(-4deg) translateY(5px)}
.rev65-kit-product--oil2 img{max-height:clamp(150px,18vw,250px);transform:rotate(9deg) translateY(5px)}
.rev65-kit-product figcaption{
  position:absolute;
  left:50%;
  bottom:-30px;
  transform:translateX(-50%);
  display:grid;
  gap:2px;
  min-width:max-content;
  padding:8px 10px;
  border-radius:14px;
  background:rgba(255,255,255,.82);
  border:1px solid rgba(18,15,11,.11);
  font-size:11px;
  line-height:1;
  font-weight:950;
  letter-spacing:.06em;
  text-transform:uppercase;
  text-align:center;
  color:#120f0b;
  box-shadow:0 12px 28px rgba(18,15,11,.10);
  z-index:4;
}
.rev65-kit-product figcaption small{
  font-size:9px;
  color:rgba(18,15,11,.54);
  letter-spacing:.14em;
}
.rev65-kit-proof__footer{
  position:absolute;
  left:clamp(22px,3.4vw,38px);
  right:clamp(22px,3.4vw,38px);
  bottom:18px;
  z-index:5;
  border-top:1px solid rgba(18,15,11,.12);
  padding-top:12px;
  font-size:11px;
  font-weight:950;
  line-height:1.25;
  letter-spacing:.10em;
  text-transform:uppercase;
  color:rgba(18,15,11,.54);
}
@media (max-width:980px){
  .rev61-clarity-band{grid-template-columns:1fr;}
  .rev65-kit-proof{min-height:560px;}
  .rev65-kit-proof__stage{height:290px;}
}
@media (max-width:680px){
  .rev65-kit-proof{border-radius:30px;min-height:660px;padding:22px;}
  .rev65-kit-proof__title{font-size:clamp(42px,14vw,68px);}
  .rev65-kit-proof__stage{
    left:18px;right:18px;bottom:88px;height:390px;
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:20px 10px;
  }
  .rev65-kit-product b{top:0;width:30px;height:30px;}
  .rev65-kit-product img{max-height:168px;}
  .rev65-kit-product--mist img{max-height:192px;}
  .rev65-kit-product figcaption{bottom:-24px;font-size:10px;}
  .rev65-kit-proof::after{bottom:92px;height:10px;}
}
/* REV65 — REAL KIT PRODUCT PROOF END */

/* REV66 — SHOP 3D PRODUCT REVEAL SYSTEM START
   Purpose: make Shop feel like a real product reveal, not a flat catalogue.
   Tunables: --rev66-card-lift, --rev66-preview-h, --rev66-pack-scale. */
.tabaq-page[data-page="shop"]{
  --rev66-card-lift:-10px;
  --rev66-preview-h:clamp(360px,34vw,520px);
  --rev66-pack-shadow:0 42px 62px rgba(28,18,10,.24),0 16px 26px rgba(28,18,10,.16);
  --rev66-contact-shadow:rgba(37,22,8,.34);
}
.tabaq-page[data-page="shop"] .page-hero{
  gap:clamp(28px,5vw,70px);
}
.tabaq-page[data-page="shop"] .shop-motion-aside{
  transform-style:preserve-3d;
  perspective:1400px;
}
.tabaq-page[data-page="shop"] .shop-motion-bottle img{
  filter:drop-shadow(0 34px 44px rgba(18,12,8,.28)) drop-shadow(0 8px 12px rgba(18,12,8,.15)) !important;
}
.rev66-shop-impact-intro{
  display:grid;
  grid-template-columns:minmax(280px,.72fr) minmax(300px,.48fr);
  gap:clamp(18px,4vw,54px);
  align-items:end;
  margin:clamp(38px,6vw,78px) 0 clamp(22px,3.5vw,38px);
  padding:clamp(22px,3vw,34px);
  border:1px solid rgba(18,15,11,.12);
  border-radius:clamp(28px,4vw,46px);
  background:
    linear-gradient(90deg,rgba(18,15,11,.045) 1px,transparent 1px) 0 0/64px 64px,
    linear-gradient(180deg,rgba(18,15,11,.04) 1px,transparent 1px) 0 0/64px 64px,
    radial-gradient(circle at 88% 18%,rgba(255,207,33,.32),transparent 32%),
    #fffaf0;
  box-shadow:0 24px 64px rgba(25,16,10,.07);
}
.rev66-shop-impact-intro h2{
  margin:8px 0 0;
  font-family:var(--display);
  font-size:clamp(42px,7vw,108px);
  line-height:.86;
  letter-spacing:-.07em;
  text-transform:uppercase;
  max-width:10ch;
}
.rev66-shop-impact-intro p{
  margin:0;
  max-width:42ch;
  font-size:clamp(14px,1.1vw,18px);
  line-height:1.55;
  font-weight:850;
  color:rgba(18,15,11,.66);
}
.rev66-kicker{
  display:inline-flex;
  align-items:center;
  gap:8px;
  font-size:11px;
  font-weight:950;
  letter-spacing:.16em;
  text-transform:uppercase;
  color:#ff3f25;
}
.rev66-kicker::before{
  content:"";
  width:9px;
  height:9px;
  border-radius:999px;
  background:#ff3f25;
  box-shadow:16px 0 0 #ffcf21,32px 0 0 #9fe7db,48px 0 0 #ffc2d9;
}
.tabaq-page[data-page="shop"] .product-grid.product-grid--animated-kits.rev46-kit-grid{
  grid-template-columns:repeat(2,minmax(0,1fr)) !important;
  gap:clamp(26px,3.2vw,44px) !important;
  align-items:stretch;
  margin-top:0;
  perspective:1600px;
}
.tabaq-page[data-page="shop"] .product-card.has-kit-motion{
  min-height:clamp(780px,70vw,960px) !important;
  padding:clamp(24px,3vw,38px) !important;
  gap:clamp(18px,2.4vw,28px) !important;
  border-radius:clamp(36px,4.2vw,56px) !important;
  border-color:rgba(18,15,11,.12) !important;
  background:
    radial-gradient(circle at 18% 10%,rgba(255,255,255,.92),rgba(255,255,255,.18) 28%,transparent 42%),
    linear-gradient(145deg,var(--tile,#fff4d8) 0%,rgba(255,255,255,.96) 68%,#fff 100%) !important;
  box-shadow:
    0 42px 110px rgba(24,15,8,.13),
    0 16px 34px rgba(24,15,8,.09),
    inset 0 1px 0 rgba(255,255,255,.86) !important;
  transform-style:preserve-3d;
  transition:transform .75s cubic-bezier(.18,.82,.22,1),box-shadow .75s ease,border-color .75s ease;
  will-change:transform,box-shadow;
}
.tabaq-page[data-page="shop"] .product-card.has-kit-motion::before{
  top:auto !important;
  right:-.08em !important;
  bottom:.08em !important;
  font-size:clamp(150px,17vw,260px) !important;
  color:rgba(18,15,11,.055) !important;
  z-index:0;
}
.tabaq-page[data-page="shop"] .product-card.has-kit-motion::after{
  content:"";
  position:absolute;
  inset:1px;
  border-radius:inherit;
  pointer-events:none;
  z-index:1;
  background:
    linear-gradient(135deg,rgba(255,255,255,.46),transparent 28%,rgba(255,255,255,.14) 64%,transparent),
    linear-gradient(180deg,rgba(255,255,255,.18),transparent 38%);
  mix-blend-mode:screen;
}
.tabaq-page[data-page="shop"] .product-card.has-kit-motion:hover,
.tabaq-page[data-page="shop"] .product-card.has-kit-motion:focus-within{
  transform:translate3d(0,var(--rev66-card-lift),0) rotateX(1.6deg) rotateY(var(--rev66-tilt-x,0deg));
  border-color:rgba(18,15,11,.2) !important;
  box-shadow:
    0 58px 140px rgba(24,15,8,.19),
    0 22px 42px rgba(24,15,8,.12),
    inset 0 1px 0 rgba(255,255,255,.9) !important;
}
.tabaq-page[data-page="shop"] .rev29-kit-preview{
  min-height:var(--rev66-preview-h) !important;
  margin:0 0 clamp(6px,1vw,12px) !important;
  border-radius:clamp(30px,3.6vw,48px) !important;
  overflow:visible !important;
  perspective:1400px;
  transform-style:preserve-3d;
  background:
    radial-gradient(ellipse at 50% 92%,rgba(0,0,0,.12),transparent 34%),
    linear-gradient(90deg,rgba(18,15,11,.038) 1px,transparent 1px) 0 0/54px 54px,
    linear-gradient(180deg,rgba(18,15,11,.033) 1px,transparent 1px) 0 0/54px 54px,
    radial-gradient(circle at 66% 18%,rgba(255,255,255,.98),rgba(255,255,255,.44) 26%,rgba(255,255,255,.08) 58%),
    linear-gradient(145deg,rgba(255,255,255,.72),rgba(255,255,255,.24)) !important;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.82),
    inset 0 -28px 60px rgba(18,15,11,.045),
    0 28px 80px rgba(24,15,8,.08) !important;
}
.tabaq-page[data-page="shop"] .rev29-kit-preview::before{
  content:"slide open" !important;
  left:clamp(16px,2vw,26px) !important;
  top:clamp(16px,2vw,24px) !important;
  padding:9px 12px !important;
  background:rgba(255,250,241,.86) !important;
  border-color:rgba(18,15,11,.14) !important;
  box-shadow:0 14px 36px rgba(18,15,11,.08) !important;
}
.tabaq-page[data-page="shop"] .rev29-kit-preview::after{
  left:12% !important;
  right:12% !important;
  bottom:clamp(18px,3vw,34px) !important;
  height:clamp(26px,3.8vw,48px) !important;
  background:var(--rev66-contact-shadow) !important;
  filter:blur(28px) !important;
  opacity:.38 !important;
  transform:scaleX(.72) translateZ(-40px) !important;
}
.tabaq-page[data-page="shop"] .product-card.has-kit-motion:hover .rev29-kit-preview::after,
.tabaq-page[data-page="shop"] .product-card.has-kit-motion:focus-within .rev29-kit-preview::after{
  opacity:.56 !important;
  transform:scaleX(1.02) translateZ(-40px) !important;
}
.tabaq-page[data-page="shop"] .rev29-pack{
  transform-style:preserve-3d !important;
  transform:translate3d(0,0,42px) rotateX(4deg) rotateY(-3deg) !important;
  transition:transform .75s cubic-bezier(.18,.82,.22,1),filter .75s ease !important;
  animation:rev66KitFloat 6.8s ease-in-out infinite second finish !important;
}
.tabaq-page[data-page="shop"] .rev29-pack:hover,
.tabaq-page[data-page="shop"] .rev29-pack:focus-visible,
.tabaq-page[data-page="shop"] .rev29-pack.is-open{
  animation-play-state:paused !important;
  transform:translate3d(0,-7px,72px) rotateX(8deg) rotateY(4deg) scale(1.045) !important;
}
.tabaq-page[data-page="shop"] .rev29-pack img{
  filter:drop-shadow(var(--rev66-pack-shadow)) !important;
  backface-visibility:hidden;
}
.tabaq-page[data-page="shop"] .rev29-pack .rev29-cover{
  filter:drop-shadow(0 36px 42px rgba(26,16,10,.22)) drop-shadow(0 10px 14px rgba(26,16,10,.14)) !important;
  transition:transform .85s cubic-bezier(.18,.82,.22,1),filter .85s ease !important;
}
.tabaq-page[data-page="shop"] .rev29-pack .rev29-tray{
  filter:drop-shadow(0 30px 46px rgba(26,16,10,.20)) drop-shadow(0 8px 12px rgba(26,16,10,.13)) !important;
  transition:transform 980ms cubic-bezier(.16,.84,.18,1),top 980ms cubic-bezier(.16,.84,.18,1),filter .85s ease !important;
}
.tabaq-page[data-page="shop"] .rev29-pack--wood{width:min(46%,260px) !important;}
.tabaq-page[data-page="shop"] .rev29-pack--brown{width:min(48%,285px) !important;}
.tabaq-page[data-page="shop"] .rev29-pack--concealed,
.tabaq-page[data-page="shop"] .rev29-pack--transparent-wide,
.tabaq-page[data-page="shop"] .rev29-pack--tray-wide{width:min(96%,620px) !important;}
.tabaq-page[data-page="shop"] .rev29-pack--wood:hover .rev29-tray,
.tabaq-page[data-page="shop"] .rev29-pack--wood:focus-visible .rev29-tray,
.tabaq-page[data-page="shop"] .rev29-pack--wood.is-open .rev29-tray{
  transform:translate3d(0,calc(112% + 24px),46px) scale(1.02) !important;
}
.tabaq-page[data-page="shop"] .rev29-pack--concealed:hover .rev29-tray,
.tabaq-page[data-page="shop"] .rev29-pack--concealed:focus-visible .rev29-tray,
.tabaq-page[data-page="shop"] .rev29-pack--concealed.is-open .rev29-tray,
.tabaq-page[data-page="shop"] .rev29-pack--transparent-wide:hover .rev29-tray,
.tabaq-page[data-page="shop"] .rev29-pack--transparent-wide:focus-visible .rev29-tray,
.tabaq-page[data-page="shop"] .rev29-pack--transparent-wide.is-open .rev29-tray,
.tabaq-page[data-page="shop"] .rev29-pack--tray-wide:hover .rev29-tray,
.tabaq-page[data-page="shop"] .rev29-pack--tray-wide:focus-visible .rev29-tray,
.tabaq-page[data-page="shop"] .rev29-pack--tray-wide.is-open .rev29-tray{
  transform:translate3d(8%,0,54px) scale(1.025) !important;
}
.tabaq-page[data-page="shop"] .rev29-pack--brown:hover .rev29-tray,
.tabaq-page[data-page="shop"] .rev29-pack--brown:focus-visible .rev29-tray,
.tabaq-page[data-page="shop"] .rev29-pack--brown.is-open .rev29-tray{
  top:calc(var(--sleeve-h) + var(--gap-h) + 8%) !important;
}
.tabaq-page[data-page="shop"] .rev29-kit-copy{
  min-height:auto !important;
  gap:12px !important;
}
.tabaq-page[data-page="shop"] .rev29-kit-copy h3{
  font-size:clamp(48px,6.5vw,96px) !important;
  letter-spacing:-.075em !important;
}
.tabaq-page[data-page="shop"] .rev29-kit-copy p:not(.page-kicker):not(.rev51-card-uniform-line){
  font-size:clamp(14px,1.15vw,17px) !important;
  line-height:1.45 !important;
  max-width:34ch !important;
}
.tabaq-page[data-page="shop"] .rev48-card-notes span,
.tabaq-page[data-page="shop"] .rev45-kit-includes__grid span{
  box-shadow:inset 0 1px 0 rgba(255,255,255,.62),0 10px 28px rgba(18,15,11,.055);
}
.tabaq-page[data-page="shop"] .product-card__price{
  font-size:clamp(28px,3.1vw,44px) !important;
}
.tabaq-page[data-page="shop"] .product-card__actions .mini-btn{
  padding:14px 18px !important;
}
.tabaq-page[data-page="shop"] .rev43-assurance-card,
.tabaq-page[data-page="shop"] .rev61-spine-card,
.tabaq-page[data-page="shop"] .rev63-card{
  box-shadow:0 22px 58px rgba(18,15,11,.075),inset 0 1px 0 rgba(255,255,255,.68);
}
@keyframes rev66KitFloat{
  from{transform:translate3d(0,6px,42px) rotateX(3deg) rotateY(-3deg) rotateZ(-.35deg)}
  to{transform:translate3d(0,-9px,60px) rotateX(6deg) rotateY(3deg) rotateZ(.45deg)}
}
@media(max-width:1080px){
  .tabaq-page[data-page="shop"] .product-grid.product-grid--animated-kits.rev46-kit-grid{grid-template-columns:1fr !important;}
  .tabaq-page[data-page="shop"] .product-card.has-kit-motion{min-height:clamp(700px,92vw,860px) !important;}
  .rev66-shop-impact-intro{grid-template-columns:1fr;}
  .rev66-shop-impact-intro h2{max-width:12ch;}
}
@media(max-width:620px){
  .tabaq-page[data-page="shop"]{--rev66-preview-h:310px;}
  .tabaq-page[data-page="shop"] .product-card.has-kit-motion{min-height:auto !important;padding:20px !important;border-radius:32px !important;}
  .tabaq-page[data-page="shop"] .rev29-pack--wood{width:min(54%,180px) !important;}
  .tabaq-page[data-page="shop"] .rev29-pack--brown{width:min(58%,190px) !important;}
  .tabaq-page[data-page="shop"] .rev29-pack--concealed,
  .tabaq-page[data-page="shop"] .rev29-pack--transparent-wide,
  .tabaq-page[data-page="shop"] .rev29-pack--tray-wide{width:min(104%,420px) !important;}
  .rev66-shop-impact-intro{padding:20px;border-radius:30px;}
}
@media(prefers-reduced-motion:reduce){
  .tabaq-page[data-page="shop"] .rev29-pack{animation:none!important;transition:none!important;transform:none!important;}
  .tabaq-page[data-page="shop"] .product-card.has-kit-motion{transition:none!important;}
}
/* REV66 — SHOP 3D PRODUCT REVEAL SYSTEM END */

/* REV68 — HYPER-REAL ANIMATION-SYNCED KIT SHADOWS START
   Purpose: replace fixed/floating shadows with a believable one-direction shadow rig.
   Light model: warm studio light from upper-left; all shadows fall lower-right.
   Rule: no decorative halos; only surface, cover contact, tray contact, and moving tray cast shadows. */
.tabaq-page[data-page="shop"]{
  --rev68-shadow-rgb:55,34,18;
  --rev68-surface-a:#fff7eb;
  --rev68-surface-b:#f3dcc2;
  --rev68-contact:rgba(var(--rev68-shadow-rgb),.38);
  --rev68-cast:rgba(var(--rev68-shadow-rgb),.24);
  --rev68-soft:rgba(var(--rev68-shadow-rgb),.13);
  --rev68-highlight:rgba(255,255,255,.66);
}

/* Surface: warm tabletop, not a glowing card. */
.tabaq-page[data-page="shop"] .rev29-kit-preview{
  overflow:visible !important;
  background:
    radial-gradient(circle at 18% 10%, rgba(255,255,255,.96), rgba(255,255,255,.58) 21%, transparent 48%),
    linear-gradient(145deg,var(--rev68-surface-a) 0%,#f9ead7 48%,var(--rev68-surface-b) 100%) !important;
  box-shadow:
    inset 10px 12px 28px rgba(255,255,255,.44),
    inset -18px -22px 42px rgba(var(--rev68-shadow-rgb),.055),
    14px 20px 48px rgba(var(--rev68-shadow-rgb),.08) !important;
}

/* Remove earlier fixed/open-position global shadows and image halo shadows. */
.tabaq-page[data-page="shop"] .rev29-kit-preview::after{display:none !important;}
.tabaq-page[data-page="shop"] .rev29-pack::before{content:none !important;display:none !important;}
.tabaq-page[data-page="shop"] .rev29-pack,
.tabaq-page[data-page="shop"] .rev29-pack:hover,
.tabaq-page[data-page="shop"] .rev29-pack:focus-visible,
.tabaq-page[data-page="shop"] .rev29-pack.is-open{
  filter:none !important;
  animation:none !important;
}
.tabaq-page[data-page="shop"] .rev29-pack img,
.tabaq-page[data-page="shop"] .rev29-pack .rev29-cover,
.tabaq-page[data-page="shop"] .rev29-pack .rev29-tray{
  filter:none !important;
  box-shadow:none !important;
}

/* Shadow rig injected by REV68 JS. It sits under the physical art and uses the same durations as the kit movement. */
.tabaq-page[data-page="shop"] .rev29-pack{overflow:visible !important;}
.tabaq-page[data-page="shop"] .rev29-pack img,
.tabaq-page[data-page="shop"] .rev29-pack .rev29-window{position:absolute;z-index:3;}
.tabaq-page[data-page="shop"] .rev29-pack .rev29-tray{z-index:3 !important;}
.tabaq-page[data-page="shop"] .rev29-pack .rev29-cover{z-index:4 !important;}
.tabaq-page[data-page="shop"] .rev68-shadow{
  position:absolute;
  pointer-events:none;
  z-index:1;
  border-radius:999px;
  mix-blend-mode:multiply;
  will-change:transform,opacity,top,left,width,height,filter;
  transition:
    transform var(--rev29-duration,900ms) var(--rev29-ease,cubic-bezier(.18,.82,.22,1)),
    top var(--rev29-duration,900ms) var(--rev29-ease,cubic-bezier(.18,.82,.22,1)),
    left var(--rev29-duration,900ms) var(--rev29-ease,cubic-bezier(.18,.82,.22,1)),
    opacity var(--rev29-duration,900ms) ease,
    filter var(--rev29-duration,900ms) ease;
}
.tabaq-page[data-page="shop"] .rev68-shadow--cover,
.tabaq-page[data-page="shop"] .rev68-shadow--tray{
  background:
    radial-gradient(ellipse at 46% 52%, rgba(var(--rev68-shadow-rgb),.42) 0%, rgba(var(--rev68-shadow-rgb),.24) 32%, rgba(var(--rev68-shadow-rgb),.10) 56%, transparent 78%);
  filter:blur(11px);
  opacity:.46;
}
.tabaq-page[data-page="shop"] .rev68-shadow--tray{opacity:.36;}

/* A tiny grounding pass on the product-card itself: one direction only, no floating glow. */
.tabaq-page[data-page="shop"] .product-card.has-kit-motion{
  box-shadow:
    18px 24px 54px rgba(var(--rev68-shadow-rgb),.10),
    4px 7px 16px rgba(var(--rev68-shadow-rgb),.075),
    inset 1px 1px 0 rgba(255,255,255,.86) !important;
}
.tabaq-page[data-page="shop"] .product-card.has-kit-motion:hover,
.tabaq-page[data-page="shop"] .product-card.has-kit-motion:focus-within{
  box-shadow:
    24px 34px 72px rgba(var(--rev68-shadow-rgb),.13),
    7px 10px 22px rgba(var(--rev68-shadow-rgb),.085),
    inset 1px 1px 0 rgba(255,255,255,.9) !important;
}

/* SIDE-OPENING KITS — tray shadow starts under the closed tray and moves with it as the tray slides out. */
.tabaq-page[data-page="shop"] .rev29-pack--concealed .rev68-shadow--cover,
.tabaq-page[data-page="shop"] .rev29-pack--transparent-wide .rev68-shadow--cover,
.tabaq-page[data-page="shop"] .rev29-pack--tray-wide .rev68-shadow--cover{
  left:2%;top:14%;width:48%;height:64%;
  transform:translate3d(18px,16px,0) rotate(1.5deg) skewX(-7deg) scaleX(.98);
  filter:blur(12px);opacity:.40;
}
.tabaq-page[data-page="shop"] .rev29-pack--concealed .rev68-shadow--tray{
  left:49.92816092%;top:15%;width:50.07183908%;height:62%;
  transform:translate3d(-100%,14px,0) rotate(1.5deg) skewX(-8deg) scaleX(.94);
}
.tabaq-page[data-page="shop"] .rev29-pack--transparent-wide .rev68-shadow--tray{
  left:49.15373766%;top:16%;width:50.84626234%;height:60%;
  transform:translate3d(-96.7%,15px,0) rotate(1.4deg) skewX(-8deg) scaleX(.92);
}
.tabaq-page[data-page="shop"] .rev29-pack--tray-wide .rev68-shadow--tray{
  left:48.30357143%;top:16%;width:51.69642857%;height:58%;
  transform:translate3d(-93.4%,15px,0) rotate(1.3deg) skewX(-8deg) scaleX(.92);
}
.tabaq-page[data-page="shop"] .rev29-pack--concealed:hover .rev68-shadow--tray,
.tabaq-page[data-page="shop"] .rev29-pack--concealed:focus-visible .rev68-shadow--tray,
.tabaq-page[data-page="shop"] .rev29-pack--concealed.is-open .rev68-shadow--tray,
.tabaq-page[data-page="shop"] .rev29-pack--transparent-wide:hover .rev68-shadow--tray,
.tabaq-page[data-page="shop"] .rev29-pack--transparent-wide:focus-visible .rev68-shadow--tray,
.tabaq-page[data-page="shop"] .rev29-pack--transparent-wide.is-open .rev68-shadow--tray,
.tabaq-page[data-page="shop"] .rev29-pack--tray-wide:hover .rev68-shadow--tray,
.tabaq-page[data-page="shop"] .rev29-pack--tray-wide:focus-visible .rev68-shadow--tray,
.tabaq-page[data-page="shop"] .rev29-pack--tray-wide.is-open .rev68-shadow--tray{
  transform:translate3d(18px,18px,0) rotate(1.3deg) skewX(-8deg) scaleX(1.05);
  opacity:.50;
  filter:blur(15px);
}
.tabaq-page[data-page="shop"] .rev29-pack--concealed:hover .rev68-shadow--cover,
.tabaq-page[data-page="shop"] .rev29-pack--concealed:focus-visible .rev68-shadow--cover,
.tabaq-page[data-page="shop"] .rev29-pack--concealed.is-open .rev68-shadow--cover,
.tabaq-page[data-page="shop"] .rev29-pack--transparent-wide:hover .rev68-shadow--cover,
.tabaq-page[data-page="shop"] .rev29-pack--transparent-wide:focus-visible .rev68-shadow--cover,
.tabaq-page[data-page="shop"] .rev29-pack--transparent-wide.is-open .rev68-shadow--cover,
.tabaq-page[data-page="shop"] .rev29-pack--tray-wide:hover .rev68-shadow--cover,
.tabaq-page[data-page="shop"] .rev29-pack--tray-wide:focus-visible .rev68-shadow--cover,
.tabaq-page[data-page="shop"] .rev29-pack--tray-wide.is-open .rev68-shadow--cover{
  opacity:.35;
  transform:translate3d(14px,14px,0) rotate(1.5deg) skewX(-7deg) scaleX(.94);
}

/* DOWN-OPENING WOOD KIT — tray shadow moves downward with the tray. */
.tabaq-page[data-page="shop"] .rev29-pack--wood .rev68-shadow--cover{
  left:8%;top:2%;width:84%;height:44%;
  transform:translate3d(13px,12px,0) rotate(4deg) scaleX(.66);
  filter:blur(10px);opacity:.37;
}
.tabaq-page[data-page="shop"] .rev29-pack--wood .rev68-shadow--tray{
  left:8%;top:2%;width:84%;height:44%;
  transform:translate3d(10px,12px,0) rotate(4deg) scaleX(.62);
  filter:blur(10px);opacity:.30;
}
.tabaq-page[data-page="shop"] .rev29-pack--wood:hover .rev68-shadow--tray,
.tabaq-page[data-page="shop"] .rev29-pack--wood:focus-visible .rev68-shadow--tray,
.tabaq-page[data-page="shop"] .rev29-pack--wood.is-open .rev68-shadow--tray{
  transform:translate3d(16px,calc(100% + 28px),0) rotate(4deg) scaleX(.78);
  filter:blur(14px);opacity:.49;
}
.tabaq-page[data-page="shop"] .rev29-pack--wood:hover .rev68-shadow--cover,
.tabaq-page[data-page="shop"] .rev29-pack--wood:focus-visible .rev68-shadow--cover,
.tabaq-page[data-page="shop"] .rev29-pack--wood.is-open .rev68-shadow--cover{
  opacity:.32;
  transform:translate3d(11px,10px,0) rotate(4deg) scaleX(.62);
}

/* BROWN DROP KIT — top-based tray motion gets matching top-based shadow motion. */
.tabaq-page[data-page="shop"] .rev29-pack--brown .rev68-shadow--cover{
  left:9%;top:6%;width:82%;height:42%;
  transform:translate3d(18px,14px,0) rotate(3deg) scaleX(.72);
  filter:blur(11px);opacity:.38;
}
.tabaq-page[data-page="shop"] .rev29-pack--brown .rev68-shadow--tray{
  left:9%;top:6%;width:82%;height:42%;
  transform:translate3d(14px,14px,0) rotate(3deg) scaleX(.68);
  filter:blur(11px);opacity:.30;
}
.tabaq-page[data-page="shop"] .rev29-pack--brown:hover .rev68-shadow--tray,
.tabaq-page[data-page="shop"] .rev29-pack--brown:focus-visible .rev68-shadow--tray,
.tabaq-page[data-page="shop"] .rev29-pack--brown.is-open .rev68-shadow--tray{
  top:calc(var(--sleeve-h) + var(--gap-h) + 6%);
  transform:translate3d(22px,16px,0) rotate(3deg) scaleX(.78);
  filter:blur(15px);opacity:.50;
}

/* Corrected vertical kit fallback if that asset appears again. */
.tabaq-page[data-page="shop"] .rev29-pack--corrected .rev68-shadow--cover,
.tabaq-page[data-page="shop"] .rev29-pack--corrected .rev68-shadow--tray{
  left:8%;top:6%;width:84%;height:42%;
  transform:translate3d(14px,12px,0) rotate(3deg) scaleX(.66);
  filter:blur(10px);opacity:.34;
}
.tabaq-page[data-page="shop"] .rev29-pack--corrected:hover .rev68-shadow--tray,
.tabaq-page[data-page="shop"] .rev29-pack--corrected:focus-visible .rev68-shadow--tray,
.tabaq-page[data-page="shop"] .rev29-pack--corrected.is-open .rev68-shadow--tray{
  transform:translate3d(18px,var(--open-y),0) rotate(3deg) scaleX(.78);
  filter:blur(14px);opacity:.48;
}

/* Reduced motion: the product can open instantly, but the shadow never lags or floats. */
@media(prefers-reduced-motion:reduce){
  .tabaq-page[data-page="shop"] .rev68-shadow{transition:none !important;}
}
@media(max-width:620px){
  .tabaq-page[data-page="shop"] .rev68-shadow--cover,
  .tabaq-page[data-page="shop"] .rev68-shadow--tray{filter:blur(8px);opacity:.32;}
  .tabaq-page[data-page="shop"] .product-card.has-kit-motion{box-shadow:10px 16px 34px rgba(var(--rev68-shadow-rgb),.09), inset 1px 1px 0 rgba(255,255,255,.86) !important;}
}
/* REV68 — HYPER-REAL ANIMATION-SYNCED KIT SHADOWS END */

/* REV69 — EARLY DROP STRATEGY + HERO CLARITY + LIVE PROOF START
   Purpose: keep the approved hero card, make it less obstructive, remove placeholder-like copy, and position early access as premium privilege rather than discounting. */
.rev69-drop-ribbon{height:52px!important;background:linear-gradient(90deg,#ff321d 0%,#17110f 34%,#17110f 66%,#ff5b2d 100%)!important;box-shadow:0 12px 30px rgba(20,17,14,.18)!important;border-top:0!important;border-bottom:1px solid rgba(255,255,255,.16)!important;}
.rev69-drop-ribbon .drop-time-ribbon__track{animation-duration:29s!important;gap:42px!important;}
.rev69-drop-ribbon .drop-time-ribbon__track span{font-size:13px!important;letter-spacing:.12em!important;color:#fffaf2!important;}
.rev69-drop-ribbon .drop-time-ribbon__track span::before,.rev69-live-dot{width:10px;height:10px;border-radius:999px;background:#fff066;box-shadow:0 0 0 0 rgba(255,240,102,.42);animation:rev69LivePulse 1.7s ease-out infinite;}
@keyframes rev69LivePulse{0%{box-shadow:0 0 0 0 rgba(255,240,102,.44)}70%{box-shadow:0 0 0 9px rgba(255,240,102,0)}100%{box-shadow:0 0 0 0 rgba(255,240,102,0)}}
.rev69-live-drop-banner{display:grid;grid-template-columns:auto minmax(240px,1fr) auto;align-items:center;gap:16px;padding:13px clamp(18px,7vw,112px);background:#fff8e8;color:#17110f;text-decoration:none;border-bottom:1px solid rgba(20,17,14,.12);box-shadow:0 14px 40px rgba(20,17,14,.07);font-weight:900;position:relative;z-index:83;}
.rev69-live-drop-banner strong{display:inline-flex;align-items:center;gap:10px;text-transform:uppercase;letter-spacing:.12em;font-size:12px;color:#ff321d;white-space:nowrap}.rev69-live-drop-banner span:not(.rev69-live-dot){font-size:14px;line-height:1.32;color:rgba(20,17,14,.72)}.rev69-live-drop-banner b{text-transform:uppercase;font-size:12px;letter-spacing:.12em;color:#17110f;white-space:nowrap}
@media(min-width:900px){
  .rev69-hero-decode.rev63-hero-decoder{width:min(390px,29vw)!important;left:clamp(22px,5.1vw,86px)!important;bottom:clamp(42px,7.5vh,92px)!important;gap:11px!important;}
  .rev69-hero-decode.rev63-hero-decoder h1{font-size:clamp(38px,4.5vw,74px)!important;max-width:7.6em!important;line-height:.82!important;}
  .rev69-hero-decode.rev63-hero-decoder p{font-size:clamp(13px,.98vw,15px)!important;line-height:1.35!important;max-width:34ch!important;}
  .rev69-hero-decode .rev63-hero-lines{grid-template-columns:repeat(2,minmax(0,1fr))!important;max-width:330px!important;gap:6px!important;}
  .rev69-hero-decode .rev63-hero-line{min-height:52px!important;padding:8px 9px!important;border-radius:15px!important;box-shadow:0 14px 34px rgba(16,13,10,.06)!important;}
  .rev69-hero-decode.rev61-hero-decode::before{inset:-14px!important;border-radius:28px!important;box-shadow:18px 30px 80px rgba(16,13,10,.16)!important;background:linear-gradient(135deg,rgba(255,250,241,.62),rgba(255,255,255,.18))!important;}
  .hero.is-color .rev69-hero-decode.rev61-hero-decode::before{background:linear-gradient(135deg,rgba(255,255,255,.18),rgba(255,255,255,.06))!important;}
}
body.is-hero-card-quiet .rev69-hero-decode{transform:translate3d(-8px,14px,0) scale(.88)!important;opacity:.78!important;transition:transform .45s cubic-bezier(.2,.8,.2,1),opacity .45s ease;}
body.is-hero-card-quiet .rev69-hero-decode:hover,body.is-hero-card-quiet .rev69-hero-decode:focus-within{transform:translate3d(0,0,0) scale(1)!important;opacity:1!important;}
.rev69-drop-strategy{margin:clamp(28px,4vw,56px) 0;display:grid;grid-template-columns:minmax(280px,.8fr) minmax(320px,1.2fr);gap:clamp(18px,4vw,54px);align-items:start;border:1px solid rgba(20,17,14,.12);border-radius:34px;background:linear-gradient(135deg,#fffaf1 0%,#fff 55%,#fff3df 100%);padding:clamp(24px,4.2vw,52px);box-shadow:0 26px 80px rgba(20,17,14,.08);}
.rev69-drop-strategy h2{font-family:var(--display,ui-sans-serif);font-size:clamp(42px,6.5vw,106px);line-height:.82;letter-spacing:-.075em;text-transform:uppercase;margin:4px 0 0;color:#17110f}.rev69-drop-strategy p{margin:0;font-size:clamp(16px,1.35vw,20px);line-height:1.52;font-weight:850;color:rgba(20,17,14,.68)}.rev69-drop-strategy ul{list-style:none;margin:22px 0 0;padding:0;display:grid;gap:10px}.rev69-drop-strategy li{border:1px solid rgba(20,17,14,.1);border-radius:18px;background:rgba(255,255,255,.72);padding:13px 14px;font-weight:850;color:rgba(20,17,14,.72)}.rev69-drop-strategy li b{color:#ff321d;text-transform:uppercase;font-size:12px;letter-spacing:.1em;margin-right:6px}
.rev69-drop-activity{position:fixed;right:clamp(14px,2.2vw,28px);bottom:clamp(14px,2.2vw,28px);z-index:120;max-width:330px;border:1px solid rgba(20,17,14,.14);border-radius:24px;background:rgba(255,250,241,.88);backdrop-filter:blur(18px);box-shadow:22px 34px 92px rgba(20,17,14,.18);padding:14px 15px 15px;color:#17110f;display:grid;gap:6px;transform:translateY(18px);opacity:.92;}
.rev69-drop-activity b{display:flex;align-items:center;gap:9px;text-transform:uppercase;letter-spacing:.12em;font-size:11px;color:#ff321d}.rev69-drop-activity span[data-rev69-activity-copy]{font-size:13px;line-height:1.36;font-weight:850;color:rgba(20,17,14,.68)}
.rev69-drop-activity.is-active{animation:rev69ToastLift .55s cubic-bezier(.2,.8,.2,1) both}@keyframes rev69ToastLift{from{transform:translateY(28px);opacity:0}to{transform:translateY(0);opacity:1}}
@media(max-width:780px){.rev69-live-drop-banner{grid-template-columns:1fr;padding:12px 18px;gap:5px}.rev69-live-drop-banner b{display:none}.rev69-drop-strategy{grid-template-columns:1fr}.rev69-drop-activity{left:14px;right:14px;bottom:14px;max-width:none}.rev69-hero-decode .rev63-hero-lines{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
/* REV69 — EARLY DROP STRATEGY + HERO CLARITY + LIVE PROOF END */

/* REV70 — DROP LINE STRATEGY + SECTION RELEVANCE START
   Purpose: make the closing drop section earn its place as the home-page conversion bridge, not a vague decorative panel. */
.rev70-drop-close{position:relative;min-height:92vh;padding:clamp(72px,9vw,140px) clamp(24px,7vw,124px)!important;display:grid!important;grid-template-columns:minmax(360px,.82fr) minmax(360px,1fr)!important;align-items:center!important;gap:clamp(34px,6vw,96px)!important;background:radial-gradient(circle at 80% 45%,rgba(255,211,199,.62),rgba(255,250,241,.1) 34%,transparent 56%),linear-gradient(120deg,#fffaf0 0%,#fffdf9 56%,#fff2ed 100%)!important;overflow:hidden;}
.rev70-drop-close::before{content:"";position:absolute;inset:auto -8% -24% 48%;height:42%;border-radius:50%;background:radial-gradient(ellipse at center,rgba(135,92,52,.16),rgba(135,92,52,.07) 38%,transparent 68%);filter:blur(34px);opacity:.72;pointer-events:none;}
.rev70-drop-copy{position:relative;z-index:2;max-width:680px;}
.rev70-section-kicker{display:inline-flex;align-items:center;gap:8px;margin-bottom:16px;color:#ff321d;font-size:12px;font-weight:950;letter-spacing:.18em;text-transform:uppercase;}
.rev70-section-kicker::before{content:"";width:9px;height:9px;border-radius:50%;background:#ff321d;box-shadow:0 0 0 7px rgba(255,50,29,.10);}
.rev70-drop-close h2{max-width:9.5ch;margin:0;font-family:var(--display,ui-sans-serif);font-size:clamp(58px,8.7vw,138px)!important;line-height:.82!important;letter-spacing:-.082em!important;text-transform:uppercase;color:#17110f;}
.rev70-drop-lead{max-width:620px;margin:clamp(20px,2.8vw,32px) 0 0!important;font-size:clamp(17px,1.45vw,23px)!important;line-height:1.38!important;font-weight:850;color:rgba(23,17,15,.72)!important;}
.rev70-drop-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:clamp(22px,3vw,34px) 0;}
.rev70-drop-steps article{border:1px solid rgba(23,17,15,.11);border-radius:22px;background:rgba(255,255,255,.72);box-shadow:0 14px 38px rgba(23,17,15,.055);padding:16px 14px 15px;min-height:124px;}
.rev70-drop-steps b{display:block;color:#ff321d;font-size:12px;letter-spacing:.12em;margin-bottom:18px;}
.rev70-drop-steps span{display:block;font-size:15px;font-weight:950;letter-spacing:-.025em;color:#17110f;}
.rev70-drop-steps small{display:block;margin-top:6px;font-size:12px;line-height:1.35;font-weight:750;color:rgba(23,17,15,.56);}
.rev70-drop-actions{display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-top:8px;}
.rev70-drop-actions .order-btn{border:0;cursor:pointer;}
.rev70-drop-note{max-width:560px;margin:18px 0 0!important;font-size:13px!important;line-height:1.45!important;font-weight:850;color:rgba(23,17,15,.54)!important;}
.rev70-drop-visual{position:relative;z-index:1;min-height:640px;display:grid;place-items:center;}
.rev70-drop-product-frame{position:relative;width:min(430px,58vw);aspect-ratio:.62/1;display:grid;place-items:center;transform:translate3d(0,0,0);}
.rev70-drop-product-frame::before{content:"";position:absolute;inset:8% -10% -2% -10%;border-radius:48% 48% 38% 38%;background:linear-gradient(135deg,rgba(255,255,255,.82),rgba(255,232,223,.54));filter:blur(.2px);opacity:.72;z-index:-1;}
.rev70-drop-product{position:relative;z-index:2;width:100%;height:auto;max-height:min(74vh,760px);object-fit:contain;filter:drop-shadow(30px 46px 42px rgba(118,70,41,.22)) drop-shadow(7px 13px 12px rgba(118,70,41,.13));}
.rev70-drop-product-shadow{position:absolute;z-index:1;left:23%;right:2%;bottom:4%;height:56px;border-radius:999px;background:radial-gradient(ellipse at center,rgba(81,48,31,.30),rgba(81,48,31,.14) 38%,rgba(81,48,31,0) 72%);filter:blur(13px);transform:translate3d(22px,28px,0) rotate(-3deg);opacity:.72;}
.rev70-drop-status-card{position:absolute;right:clamp(0px,2vw,28px);bottom:clamp(40px,7vw,88px);width:min(330px,82vw);border:1px solid rgba(23,17,15,.11);border-radius:24px;background:rgba(255,252,244,.78);backdrop-filter:blur(18px) saturate(1.08);box-shadow:18px 26px 60px rgba(83,50,36,.16);padding:18px 20px;}
.rev70-drop-status-card b{display:flex;align-items:center;gap:8px;text-transform:uppercase;letter-spacing:.14em;font-size:12px;color:#ff321d;margin-bottom:8px;}
.rev70-drop-status-card p{margin:0!important;font-size:14px!important;line-height:1.36!important;font-weight:850;color:rgba(23,17,15,.68)!important;}
.rev70-live-dot{width:10px;height:10px;border-radius:999px;background:#ff321d;box-shadow:0 0 0 0 rgba(255,50,29,.34);animation:rev70LiveDot 1.8s ease-out infinite;}
@keyframes rev70LiveDot{0%{box-shadow:0 0 0 0 rgba(255,50,29,.34)}80%,100%{box-shadow:0 0 0 12px rgba(255,50,29,0)}}
.rev70-drop-pulse{width:min(360px,calc(100vw - 36px))!important;right:clamp(14px,2vw,34px)!important;bottom:clamp(18px,2.5vw,34px)!important;background:rgba(255,252,244,.88)!important;box-shadow:14px 18px 44px rgba(53,34,24,.13)!important;}
.rev70-drop-pulse small{display:block;margin-top:7px;font-size:10px;line-height:1.25;font-weight:800;color:rgba(23,17,15,.42);}
.rev70-drop-pulse.is-active{animation:rev70PulseCard .48s cubic-bezier(.2,.8,.2,1);}
@keyframes rev70PulseCard{0%{transform:translate3d(0,10px,0) scale(.985);opacity:.58}100%{transform:translate3d(0,0,0) scale(1);opacity:1}}
@media(max-width:980px){.rev70-drop-close{grid-template-columns:1fr!important;min-height:auto!important;padding-top:72px!important}.rev70-drop-close h2{font-size:clamp(48px,15vw,96px)!important}.rev70-drop-visual{min-height:520px}.rev70-drop-product-frame{width:min(330px,78vw)}.rev70-drop-steps{grid-template-columns:1fr}.rev70-drop-status-card{position:relative;right:auto;bottom:auto;margin-top:-62px}.rev70-drop-close::before{inset:auto -28% -12% 8%;height:30%;}}
@media(max-width:620px){.rev70-drop-close{padding-inline:18px!important}.rev70-drop-actions{align-items:stretch}.rev70-drop-actions .order-btn,.rev70-drop-actions .ghost-pill{width:100%;justify-content:center}.rev70-drop-product{filter:drop-shadow(18px 28px 28px rgba(118,70,41,.18))}.rev70-drop-pulse{display:none!important}}
/* REV70 — DROP LINE STRATEGY + SECTION RELEVANCE END */

/* REV71 — SHOP DEAD SPACE COMPOSITION REPAIR START
   Purpose: remove the empty first-screen gap on the Shop page by turning the opening into a deliberate product-led commerce hero.
   Rules: no redesign branch, no random decoration, one visual job per element: kit choice, product proof, early-drop line. */
.tabaq-page[data-page="shop"] .page-shell{
  padding-top:clamp(18px,3.2vw,46px)!important;
}
.tabaq-page[data-page="shop"] .page-hero{
  position:relative;
  align-items:center!important;
  min-height:clamp(520px,68svh,760px)!important;
  padding:clamp(18px,3vw,38px) 0 clamp(34px,4.6vw,66px)!important;
  border-bottom:0!important;
  overflow:hidden;
  isolation:isolate;
}
.tabaq-page[data-page="shop"] .page-hero::before{
  content:"4 PRODUCTS / 1 KIT";
  position:absolute;
  top:clamp(20px,4.6vw,68px);
  right:clamp(0px,4vw,56px);
  z-index:0;
  font-family:var(--display);
  font-size:clamp(64px,10vw,174px);
  line-height:.78;
  letter-spacing:-.08em;
  color:rgba(18,15,11,.045);
  text-transform:uppercase;
  pointer-events:none;
  white-space:nowrap;
}
.tabaq-page[data-page="shop"] .page-hero::after{
  content:"";
  position:absolute;
  inset:clamp(18px,3vw,38px) 0 auto auto;
  width:min(44vw,680px);
  height:min(44vw,680px);
  border-radius:50%;
  background:radial-gradient(circle at 44% 38%,rgba(255,214,77,.32),rgba(255,113,72,.12) 38%,transparent 68%);
  filter:blur(4px);
  opacity:.88;
  z-index:0;
  pointer-events:none;
}
.tabaq-page[data-page="shop"] .page-hero > div:first-child{
  position:relative;
  z-index:5;
  align-self:center!important;
  transform:translateY(-1.4vh);
  max-width:min(760px,55vw);
}
.tabaq-page[data-page="shop"] .page-kicker{
  margin-bottom:clamp(8px,1vw,14px)!important;
}
.tabaq-page[data-page="shop"] .page-title{
  max-width:7.1ch;
  margin-bottom:clamp(14px,1.8vw,24px)!important;
}
.tabaq-page[data-page="shop"] .page-lead{
  max-width:42ch;
  font-size:clamp(16px,1.45vw,21px)!important;
  line-height:1.42!important;
}
.rev71-shop-facts{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-top:clamp(16px,2vw,24px);
  max-width:620px;
}
.rev71-shop-facts span{
  display:inline-flex;
  align-items:center;
  gap:7px;
  min-height:38px;
  padding:9px 12px;
  border:1px solid rgba(18,15,11,.13);
  border-radius:999px;
  background:rgba(255,255,255,.68);
  box-shadow:0 14px 30px rgba(34,22,10,.055);
  backdrop-filter:blur(10px);
  color:rgba(18,15,11,.72);
  font-size:11px;
  line-height:1;
  font-weight:950;
  letter-spacing:.07em;
  text-transform:uppercase;
}
.rev71-shop-facts b{
  display:inline-grid;
  place-items:center;
  min-width:22px;
  height:22px;
  padding:0 6px;
  border-radius:999px;
  background:#ff321d;
  color:#fff;
  font-size:11px;
  letter-spacing:0;
}
.tabaq-page[data-page="shop"] .shop-motion-aside{
  position:relative;
  z-index:4;
  align-self:center!important;
  margin-top:0!important;
  transform:translateY(-2vh) scale(1.02)!important;
}
.tabaq-page[data-page="shop"] .shop-motion-stage{
  height:clamp(440px,49vw,690px)!important;
  min-height:0!important;
}
.tabaq-page[data-page="shop"] .shop-motion-stage::before{
  opacity:.78!important;
}
.tabaq-page[data-page="shop"] .collection-tools{
  margin-top:clamp(14px,2vw,26px)!important;
  position:relative;
  z-index:8;
}
.tabaq-page[data-page="shop"] .rev61-shop-finder{
  margin-top:clamp(22px,3vw,44px)!important;
}
@media(max-width:980px){
  .tabaq-page[data-page="shop"] .page-shell{padding-top:22px!important;}
  .tabaq-page[data-page="shop"] .page-hero{
    min-height:auto!important;
    padding:22px 0 42px!important;
    gap:22px!important;
  }
  .tabaq-page[data-page="shop"] .page-hero::before{
    top:8px;
    right:-6vw;
    font-size:clamp(58px,17vw,128px);
    white-space:normal;
    max-width:7ch;
    text-align:right;
  }
  .tabaq-page[data-page="shop"] .page-hero > div:first-child{
    max-width:none;
    transform:none;
  }
  .tabaq-page[data-page="shop"] .shop-motion-aside{
    transform:none!important;
    margin-top:0!important;
  }
  .tabaq-page[data-page="shop"] .shop-motion-stage{
    height:clamp(320px,58vw,510px)!important;
  }
}
@media(max-width:640px){
  .rev71-shop-facts{display:grid;grid-template-columns:1fr;}
  .rev71-shop-facts span{justify-content:flex-start;width:100%;}
  .tabaq-page[data-page="shop"] .page-title{font-size:clamp(64px,20vw,112px)!important;}
  .tabaq-page[data-page="shop"] .page-lead{font-size:15px!important;}
}
/* REV71 — SHOP DEAD SPACE COMPOSITION REPAIR END */

/* REV72 — FULL DESIGN LANGUAGE + LAYERING UPGRADE START
   Purpose: unify page rhythm, remove internal/prototype feel, and upgrade Layering into a product-led education page. */
:root{
  --rev72-ink:#17120f;
  --rev72-muted:rgba(23,18,15,.62);
  --rev72-line:rgba(23,18,15,.12);
  --rev72-paper:#fffaf1;
  --rev72-red:#ff321d;
  --rev72-shadow:24px 34px 90px rgba(51,35,22,.10);
  --rev72-radius:34px;
}
.tabaq-page[data-page]:not([data-page="home"]):not([data-page="layering"]) .page-shell{
  background:
    radial-gradient(circle at 88% 12%,rgba(255,50,29,.055),transparent 28rem),
    linear-gradient(180deg,#fffdf8 0%,#fffaf2 100%);
}
.tabaq-page[data-page]:not([data-page="home"]):not([data-page="layering"]) .page-kicker,
.rev72-kicker{
  display:inline-flex;align-items:center;gap:9px;margin:0 0 14px;
  color:var(--rev72-red)!important;font-size:12px!important;line-height:1!important;
  font-weight:950!important;letter-spacing:.18em!important;text-transform:uppercase!important;
}
.tabaq-page[data-page]:not([data-page="home"]):not([data-page="layering"]) .page-kicker::before,
.rev72-kicker::before{
  content:"";width:9px;height:9px;border-radius:50%;background:var(--rev72-red);box-shadow:0 0 0 7px rgba(255,50,29,.09);
}
.tabaq-page[data-page]:not([data-page="home"]):not([data-page="layering"]) .page-title{
  letter-spacing:-.078em!important;line-height:.84!important;color:var(--rev72-ink)!important;
}
.tabaq-page[data-page]:not([data-page="home"]):not([data-page="layering"]) .page-lead{
  max-width:660px;color:var(--rev72-muted)!important;font-weight:850!important;line-height:1.42!important;
}
.rev72-page-brief{
  width:min(1320px,calc(100% - clamp(36px,7vw,120px)));
  margin:clamp(-12px,-1vw,-4px) auto clamp(26px,4vw,54px);
  display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;
}
.rev72-page-brief article{
  border:1px solid var(--rev72-line);border-radius:22px;background:rgba(255,255,255,.76);
  box-shadow:0 14px 42px rgba(31,22,13,.055);padding:16px 18px;min-height:106px;
  display:flex;flex-direction:column;justify-content:space-between;
}
.rev72-page-brief b{font-size:12px;color:var(--rev72-red);letter-spacing:.14em;text-transform:uppercase;font-weight:950;}
.rev72-page-brief span{font-size:15px;line-height:1.32;color:rgba(23,18,15,.66);font-weight:850;}
.tabaq-page[data-page="shop"] .rev43-shop-commerce__intro,
.tabaq-page[data-page="gallery"] .rev63-gallery-purpose,
.tabaq-page[data-page="about"] .rev61-about-belief,
.tabaq-page[data-page="drop"] .rev69-drop-strategy,
.rev47-detail-proof,
.rev47-ritual-strip article,
.rev43-match-card,
.rev50-event-card{
  border-color:var(--rev72-line)!important;box-shadow:var(--rev72-shadow)!important;
}
.tabaq-page[data-page="shop"] .rev43-shop-commerce__intro::after{display:none!important;}
.tabaq-page[data-page="shop"] .page-hero{border-bottom:1px solid rgba(23,18,15,.08);}
.tabaq-page[data-page^="product-"] .rev47-detail-hero{padding-top:clamp(70px,8vw,124px)!important;}
.tabaq-page[data-page^="product-"] .rev47-ritual-strip article{background:rgba(255,255,255,.78)!important;}
/* Layering page: product-led education, not abstract decoration */
.tabaq-rev7drop{--rev72-layer-accent:#ff321d;}
.rev7-intro{
  min-height:88svh!important;background:
    radial-gradient(circle at 14% 18%,rgba(255,217,112,.25),transparent 28rem),
    radial-gradient(circle at 90% 48%,rgba(255,50,29,.09),transparent 30rem),
    linear-gradient(180deg,#fffdf8 0%,#fff8ed 100%)!important;
}
.rev7-intro-title{font-family:var(--display,Inter,Arial,sans-serif)!important;font-weight:950!important;letter-spacing:-.085em!important;text-transform:uppercase!important;max-width:10.5ch!important;}
.rev7-intro-copy{font-weight:800!important;color:rgba(23,18,15,.66)!important;}
.rev72-layering-system{
  width:min(1360px,calc(100% - clamp(32px,6vw,120px)));margin:0 auto clamp(54px,8vw,110px);
  border:1px solid var(--rev72-line);border-radius:44px;background:linear-gradient(135deg,#fffef9,#fff6e8);
  box-shadow:30px 44px 110px rgba(70,45,25,.10);padding:clamp(24px,4vw,58px);position:relative;overflow:hidden;
}
.rev72-layering-system::before{content:"4 PRODUCTS / 1 KIT";position:absolute;right:-.08em;top:-.08em;font-size:clamp(58px,10vw,160px);line-height:.75;font-weight:950;letter-spacing:-.09em;color:rgba(23,18,15,.045);pointer-events:none;}
.rev72-layering-system__intro{position:relative;z-index:1;display:grid;grid-template-columns:minmax(260px,.72fr) minmax(320px,1fr);gap:clamp(20px,4vw,72px);align-items:end;margin-bottom:clamp(26px,4vw,48px);}
.rev72-layering-system__intro h2{margin:0;font-size:clamp(48px,8vw,118px);line-height:.83;letter-spacing:-.08em;text-transform:uppercase;color:var(--rev72-ink);}
.rev72-layering-system__intro p{margin:0;max-width:560px;font-size:clamp(16px,1.45vw,22px);line-height:1.38;font-weight:850;color:rgba(23,18,15,.64);}
.rev72-layer-roles{position:relative;z-index:1;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;align-items:stretch;}
.rev72-layer-role{position:relative;min-height:390px;border:1px solid rgba(23,18,15,.11);border-radius:30px;background:rgba(255,255,255,.72);box-shadow:18px 26px 72px rgba(59,38,24,.09);padding:18px;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;}
.rev72-layer-role::after{content:"";position:absolute;left:12%;right:10%;bottom:118px;height:26px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(48,32,22,.18),rgba(48,32,22,.07) 42%,transparent 72%);filter:blur(9px);transform:translate3d(15px,18px,0) rotate(-4deg);}
.rev72-layer-role span{position:absolute;top:16px;left:16px;width:42px;height:42px;border-radius:999px;display:grid;place-items:center;background:#17120f;color:#fff;font-weight:950;font-size:13px;z-index:2;}
.rev72-layer-role img{position:absolute;left:50%;top:48px;transform:translateX(-50%);max-width:78%;max-height:230px;object-fit:contain;z-index:2;filter:drop-shadow(18px 30px 28px rgba(51,32,20,.18));}
.rev72-layer-role--mist img{max-height:250px;transform:translateX(-50%) rotate(-7deg);}
.rev72-layer-role--edp img{max-height:235px;transform:translateX(-50%) rotate(3deg);}
.rev72-layer-role--oil1 img,.rev72-layer-role--oil2 img{max-height:215px;}
.rev72-layer-role b{position:relative;z-index:2;margin-top:250px;font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:var(--rev72-red);font-weight:950;}
.rev72-layer-role strong{position:relative;z-index:2;margin:8px 0 8px;font-size:clamp(28px,3.2vw,48px);line-height:.9;letter-spacing:-.06em;color:var(--rev72-ink);}
.rev72-layer-role p{position:relative;z-index:2;margin:0;font-size:14px;line-height:1.38;font-weight:800;color:rgba(23,18,15,.62);}
.rev72-layering-rule{margin-top:16px;border:1px solid rgba(23,18,15,.12);border-radius:24px;background:#17120f;color:#fff;padding:18px 22px;display:flex;gap:18px;align-items:center;justify-content:space-between;}
.rev72-layering-rule b{color:#ffdd60;text-transform:uppercase;letter-spacing:.16em;font-size:12px;white-space:nowrap;}
.rev72-layering-rule span{font-size:15px;line-height:1.35;font-weight:850;color:rgba(255,255,255,.78);}
.rev72-layering-bridge{width:min(1320px,calc(100% - clamp(32px,6vw,120px)));margin:clamp(40px,7vw,100px) auto;padding:clamp(24px,4vw,54px);border-radius:44px;border:1px solid var(--rev72-line);background:#fffdf8;box-shadow:24px 34px 90px rgba(51,35,22,.09);}
.rev72-bridge-card{border-radius:34px;padding:clamp(24px,4vw,48px);background:#17120f;color:#fff;position:relative;overflow:hidden;}
.rev72-bridge-card::after{content:"MIST / PERFUME / OIL / SWITCH";position:absolute;right:-.04em;bottom:-.08em;font-size:clamp(42px,8vw,126px);line-height:.75;font-weight:950;letter-spacing:-.08em;color:rgba(255,255,255,.055);}
.rev72-bridge-card h2{position:relative;margin:0;max-width:10ch;font-size:clamp(48px,8vw,110px);line-height:.84;letter-spacing:-.08em;text-transform:uppercase;z-index:1;}
.rev72-bridge-card p{position:relative;z-index:1;max-width:620px;margin:22px 0 0!important;color:rgba(255,255,255,.72)!important;font-size:clamp(16px,1.4vw,21px)!important;line-height:1.42!important;font-weight:800!important;}
.rev72-bridge-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:14px 0;}
.rev72-bridge-grid article{border:1px solid var(--rev72-line);border-radius:24px;background:rgba(255,255,255,.76);padding:18px;min-height:128px;display:flex;flex-direction:column;justify-content:space-between;}
.rev72-bridge-grid b{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--rev72-red);}
.rev72-bridge-grid span{font-size:15px;line-height:1.35;font-weight:850;color:rgba(23,18,15,.66);}
.rev72-bridge-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:18px;}
.rev72-bridge-actions .order-btn,.rev72-bridge-actions .ghost-pill{text-decoration:none;}
@media(max-width:980px){
  .rev72-page-brief,.rev72-layer-roles,.rev72-bridge-grid{grid-template-columns:1fr 1fr;}
  .rev72-layering-system__intro{grid-template-columns:1fr;}
  .rev72-layer-role{min-height:360px;}
}
@media(max-width:640px){
  .rev72-page-brief,.rev72-layer-roles,.rev72-bridge-grid{grid-template-columns:1fr;}
  .rev72-layering-system,.rev72-layering-bridge{width:calc(100% - 28px);border-radius:30px;padding:20px;}
  .rev72-layering-system__intro h2,.rev72-bridge-card h2{font-size:clamp(42px,14vw,74px);}
  .rev72-layering-rule{align-items:flex-start;flex-direction:column;}
  .rev72-layer-role{min-height:350px;}
  .rev72-page-brief{width:calc(100% - 28px);}
}
/* REV72 — FULL DESIGN LANGUAGE + LAYERING UPGRADE END */

/* REV72 — SPECIAL PAGE BRIEF PLACEMENT PATCH */
.tabaq-page[data-page="gallery"] .rev72-page-brief{margin-top:clamp(16px,3vw,36px);}
.tabaq-page[data-page^="product-"] .rev72-page-brief{width:100%;margin:clamp(12px,2vw,24px) 0 clamp(22px,3vw,42px);}
.tabaq-page[data-page^="product-"] .rev43-detail-content{margin-top:0!important;}

/* REV75 — COPY HIERARCHY + IDENTITY CONSISTENCY START
   Purpose: tighten readable hierarchy and keep every page aligned to the premium kit system. */
:root{--rev75-ink:#17120f;--rev75-muted:rgba(23,18,15,.66);--rev75-line:rgba(23,18,15,.12);--rev75-warm:#fff8ea;--rev75-shadow:0 28px 90px rgba(41,28,16,.12)}
body{font-synthesis-weight:none;text-rendering:geometricPrecision}
.tabaq-page h1,.tabaq-page h2,.tabaq-page h3{font-kerning:normal;text-wrap:balance}
.tabaq-page p,.tabaq-page li,.tabaq-page span{overflow-wrap:normal}
.rev63-hero-decoder h1,.section-title,.shop-hero h1,.layering-hero h1,.gallery-hero h1,.about-hero h1,.drop-hero h1{letter-spacing:-.075em;line-height:.84}
.rev63-hero-decoder p,.hero-copy p,.section-lead,.rev74-identity-copy p,.rev74-layering-head p,.rev43-detail-copy p{max-width:58ch;line-height:1.44;color:var(--rev75-muted);font-weight:820}
.rev72-page-brief,.rev63-proof-strip,.rev63-trust-grid,.rev74-identity-rules,.rev74-layering-grid{gap:clamp(10px,1.5vw,16px)}
.rev72-page-brief article,.rev63-shop-faq article,.rev74-layering-card,.rev74-identity-rules article,.rev43-detail-card{border-color:var(--rev75-line);box-shadow:var(--rev75-shadow);background:linear-gradient(180deg,rgba(255,255,255,.86),rgba(255,248,234,.72))}
.rev72-page-brief b,.rev63-eyebrow,.rev74-kicker,.rev43-detail-eyebrow{letter-spacing:.16em;font-size:11px;font-weight:950;text-transform:uppercase}
.rev74-motion-note{background:linear-gradient(135deg,rgba(255,255,255,.78),rgba(255,243,218,.72));box-shadow:0 18px 54px rgba(41,28,16,.08)}
.rev69-drop-activity small{color:rgba(23,18,15,.56);font-weight:800;line-height:1.28}
.rev49-drop-panel__field input{min-height:48px;border-radius:16px;border:1px solid rgba(23,18,15,.16);padding:0 14px;font-weight:850;color:#17120f;background:#fffaf1}
.rev49-drop-panel__field label{font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:950;color:rgba(23,18,15,.66)}
@media(max-width:720px){.rev63-hero-decoder h1,.section-title,.shop-hero h1,.layering-hero h1,.gallery-hero h1,.about-hero h1,.drop-hero h1{letter-spacing:-.065em;line-height:.9}.rev72-page-brief article,.rev74-layering-card,.rev43-detail-card{box-shadow:0 18px 56px rgba(41,28,16,.1)}}
/* REV75 — COPY HIERARCHY + IDENTITY CONSISTENCY END */


/* REV79 — COMMERCE CLARITY + MOTION DISCIPLINE START
   Purpose: improve post-hero buying clarity, typography rhythm and 3D motion surfaces without changing the hero. */
:root{
  --rev79-ink:#17120f;
  --rev79-muted:rgba(23,18,15,.66);
  --rev79-line:rgba(23,18,15,.12);
  --rev79-panel:#fffaf2;
  --rev79-shadow:0 34px 80px rgba(52,35,22,.14);
}
.tabaq-page:not([data-page="home"]) .page-title,
.tabaq-page:not([data-page="home"]) .rev63-section__head h2,
.tabaq-page:not([data-page="home"]) .rev50-section-head h2{
  letter-spacing:-.055em;
  line-height:.92;
  max-width:11ch;
}
.tabaq-page:not([data-page="home"]) .page-lead,
.tabaq-page:not([data-page="home"]) .lead,
.tabaq-page:not([data-page="home"]) .rev63-section__head p{
  max-width:680px;
  color:var(--rev79-muted);
  font-size:clamp(1rem,1.4vw,1.22rem);
  line-height:1.45;
}
.rev79-eyebrow{
  display:inline-flex;
  align-items:center;
  gap:.45rem;
  text-transform:uppercase;
  letter-spacing:.12em;
  font-size:.72rem;
  font-weight:900;
  color:rgba(23,18,15,.58);
}
.rev79-section-head{
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(260px,520px);
  gap:clamp(1.4rem,4vw,4.5rem);
  align-items:end;
  margin-bottom:clamp(1.2rem,3vw,2.4rem);
}
.rev79-section-head h2{
  margin:.28rem 0 0;
  font-size:clamp(2.35rem,5.8vw,5.8rem);
  line-height:.9;
  letter-spacing:-.06em;
  color:var(--rev79-ink);
}
.rev79-section-head p{margin:0;color:var(--rev79-muted);line-height:1.55;font-weight:650;}
.rev79-kit-decision,
.rev79-drop-capture{
  margin:clamp(2rem,5vw,4.8rem) 0;
  padding:clamp(1.2rem,3.2vw,2.4rem);
  border:1px solid var(--rev79-line);
  border-radius:clamp(1.4rem,3vw,2.8rem);
  background:linear-gradient(135deg,rgba(255,250,242,.92),rgba(255,255,255,.74));
  box-shadow:var(--rev79-shadow);
  perspective:1200px;
  transform-style:preserve-3d;
  overflow:hidden;
}
.rev79-kit-decision__grid,
.rev79-drop-capture__steps,
.rev79-pdp-confidence{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:clamp(.7rem,1.6vw,1.15rem);
}
.rev79-kit-decision__card,
.rev79-drop-capture__steps article,
.rev79-pdp-confidence__card{
  position:relative;
  min-height:220px;
  padding:clamp(1rem,2.1vw,1.45rem);
  border:1px solid rgba(23,18,15,.12);
  border-radius:1.6rem;
  background:linear-gradient(145deg,var(--rev79-tile,#fff),rgba(255,255,255,.84));
  color:var(--rev79-ink);
  box-shadow:0 18px 42px rgba(52,35,22,.1);
  transform-style:preserve-3d;
  will-change:transform, opacity;
}
.rev79-kit-decision__card > b,
.rev79-drop-capture__steps article > b{
  display:inline-grid;
  place-items:center;
  width:2.4rem;height:2.4rem;
  border-radius:999px;
  background:#17120f;
  color:#fffaf2;
  font-size:.78rem;
  margin-bottom:1rem;
}
.rev79-kit-decision__card h3,
.rev79-drop-capture__steps h3{font-size:clamp(1.45rem,2.6vw,2.2rem);letter-spacing:-.045em;line-height:.95;margin:.15rem 0 .55rem;}
.rev79-kit-decision__card p,
.rev79-drop-capture__steps p,
.rev79-pdp-confidence__card p{font-weight:700;line-height:1.35;color:rgba(23,18,15,.76);}
.rev79-kit-decision__card ul{list-style:none;padding:0;margin:1rem 0 1.2rem;display:grid;gap:.36rem;color:rgba(23,18,15,.68);font-weight:720;}
.rev79-kit-decision__card li::before{content:'+';font-weight:950;margin-right:.44rem;color:#17120f;}
.rev79-pdp-confidence{
  margin:clamp(1rem,2.5vw,1.8rem) 0 clamp(1.4rem,3vw,2.4rem);
  grid-template-columns:repeat(3,minmax(0,1fr));
  perspective:1000px;
}
.rev79-pdp-confidence__card{min-height:auto;background:#fffaf2;}
.rev79-pdp-confidence__card b{display:block;text-transform:uppercase;letter-spacing:.1em;font-size:.7rem;color:rgba(23,18,15,.52);margin-bottom:.55rem;}
.rev79-drop-capture__steps{grid-template-columns:repeat(3,minmax(0,1fr));margin-bottom:1.15rem;}
.rev79-sticky-commerce{
  position:fixed;
  left:50%;
  bottom:clamp(.7rem,2vw,1.2rem);
  z-index:80;
  transform:translateX(-50%);
  display:flex;
  gap:.35rem;
  padding:.38rem;
  border:1px solid rgba(23,18,15,.12);
  border-radius:999px;
  background:rgba(255,250,242,.82);
  box-shadow:0 18px 55px rgba(30,20,10,.16);
  backdrop-filter:blur(18px);
}
.rev79-sticky-commerce a,
.rev79-sticky-commerce button{
  border:0;
  border-radius:999px;
  padding:.74rem .98rem;
  background:transparent;
  color:#17120f;
  text-decoration:none;
  font-weight:900;
  font-size:.84rem;
  cursor:pointer;
  white-space:nowrap;
}
.rev79-sticky-commerce button{background:#17120f;color:#fffaf2;}
@media (min-width:900px){
  .rev79-sticky-commerce{bottom:1.1rem;}
}
@media (max-width:860px){
  .rev79-section-head{grid-template-columns:1fr;align-items:start;}
  .rev79-kit-decision__grid,
  .rev79-drop-capture__steps,
  .rev79-pdp-confidence{grid-template-columns:1fr;}
  .rev79-kit-decision__card{min-height:0;}
  .rev79-sticky-commerce{width:calc(100% - 1rem);justify-content:space-between;}
  .rev79-sticky-commerce a,
  .rev79-sticky-commerce button{flex:1;text-align:center;padding:.8rem .5rem;font-size:.78rem;}
}
@media (prefers-reduced-motion: reduce){
  .rev79-motion-card{transform:none !important;}
}
/* REV79 — COMMERCE CLARITY + MOTION DISCIPLINE END */







/* REV82 — REV71 SHOP RESTORE GUARD START
   Purpose: keep the restored Rev71 shop composition clean and prevent rejected Rev80 selected-bar UI from returning. */
.rev80-selected-bar{display:none!important;}
.rev34-shop-clarity{position:relative;}
/* REV82 — REV71 SHOP RESTORE GUARD END */

/* REV83 — REV71 COMMERCE FOUNDATION GUARD START
   Purpose: keep Rev71 shop/product composition clean after restoring the full commerce system.
   Scope: product pages only. Hero remains untouched. */
.tabaq-page[data-page^="product-"]{
  padding-bottom:clamp(96px,10vh,150px);
}
.tabaq-page[data-page^="product-"] .rev43-detail-page{
  align-items:start;
}
.tabaq-page[data-page^="product-"] .rev43-detail-content{
  min-width:0;
}
.tabaq-page[data-page^="product-"] .rev47-sticky-cta,
.tabaq-page[data-page^="product-"] .rev79-sticky-commerce{
  display:none!important;
}
@media(max-width:980px){
  .tabaq-page[data-page^="product-"] .rev43-detail-page{
    grid-template-columns:1fr!important;
  }
  .tabaq-page[data-page^="product-"] .rev43-detail-hero{
    position:relative!important;
    top:auto!important;
    min-height:auto;
  }
}
/* REV83 — REV71 COMMERCE FOUNDATION GUARD END */


/* REV84 — COMMERCE REFINEMENT WITHOUT DESIGN DRIFT START
   Purpose: refine the restored Rev71 commerce foundation without changing the design direction or touching hero systems. */
:root{
  --rev84-ink:#17120f;
  --rev84-muted:rgba(23,18,15,.66);
  --rev84-line:rgba(23,18,15,.13);
  --rev84-soft:#fff8ed;
  --rev84-shadow:0 28px 80px rgba(30,20,12,.12);
}
.tabaq-page[data-page="shop"] .page-lead,
.tabaq-page[data-page^="product-"] .page-lead,
.tabaq-page[data-page="shop"] p,
.tabaq-page[data-page^="product-"] p{
  line-height:1.42;
}
.tabaq-page[data-page="shop"] .page-title,
.tabaq-page[data-page^="product-"] .rev43-detail-hero h1{
  letter-spacing:-.072em;
  line-height:.88;
}
.tabaq-page[data-page="shop"] .page-hero{
  align-items:center;
  gap:clamp(22px,4vw,60px);
}
.tabaq-page[data-page="shop"] .rev71-shop-facts span,
.tabaq-page[data-page="shop"] .collection-tools,
.tabaq-page[data-page="shop"] .rev61-result,
.tabaq-page[data-page="shop"] .rev43-assurance-card,
.tabaq-page[data-page^="product-"] .rev43-detail-card,
.tabaq-page[data-page^="product-"] .rev43-buybox{
  box-shadow:var(--rev84-shadow);
}
.tabaq-page[data-page="shop"] .rev61-commerce-spine,
.tabaq-page[data-page="shop"] .rev63-store-command,
.tabaq-page[data-page="shop"] .rev43-shop-assurance,
.tabaq-page[data-page="shop"] .rev63-section--white{
  margin-top:clamp(30px,4vw,56px);
}
.tabaq-page[data-page="shop"] .rev61-spine-card h3,
.tabaq-page[data-page="shop"] .rev63-card h3,
.tabaq-page[data-page^="product-"] .rev63-card h3,
.tabaq-page[data-page^="product-"] .rev43-detail-card h3{
  letter-spacing:-.045em;
  line-height:.96;
}
.rev84-kit-compare{
  padding:clamp(18px,2.8vw,34px);
  border-radius:clamp(24px,3vw,38px);
  border:1px solid var(--rev84-line);
  background:linear-gradient(135deg,rgba(255,250,242,.9),rgba(255,255,255,.76));
  box-shadow:var(--rev84-shadow);
  overflow:hidden;
}
.rev84-compare-head{
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(250px,440px);
  align-items:end;
  gap:clamp(14px,3vw,34px);
  margin-bottom:clamp(14px,2vw,22px);
}
.rev84-compare-head h2{
  margin:.22rem 0 0;
  font-size:clamp(2rem,4.8vw,4.8rem);
  line-height:.9;
  letter-spacing:-.06em;
  color:var(--rev84-ink);
}
.rev84-compare-head p{
  margin:0;
  max-width:36ch;
  color:var(--rev84-muted);
  font-weight:820;
}
.rev84-kit-compare .rev63-kit-table__row{
  grid-template-columns:1.05fr 1.5fr 1.15fr 1.55fr .55fr;
  align-items:center;
}
.rev84-kit-compare .rev63-kit-table__row:first-of-type{
  color:rgba(23,18,15,.52);
  text-transform:uppercase;
  letter-spacing:.12em;
  font-size:.72rem;
  font-weight:950;
}
.tabaq-page[data-page^="product-"] .rev43-detail-page{
  gap:clamp(22px,3vw,46px);
}
.tabaq-page[data-page^="product-"] .rev43-detail-content{
  display:grid;
  gap:clamp(16px,2.2vw,28px);
  align-content:start;
}
.tabaq-page[data-page^="product-"] .rev43-buybox{
  border-radius:clamp(24px,3vw,38px);
  transform-style:preserve-3d;
}
.tabaq-page[data-page^="product-"] .rev48-price{
  display:block;
  letter-spacing:-.06em;
  line-height:.82;
  margin:.1em 0 .18em;
}
.tabaq-page[data-page^="product-"] .rev47-sales-intro,
.tabaq-page[data-page^="product-"] .rev63-product-proof,
.tabaq-page[data-page^="product-"] .rev61-product-close{
  margin-top:0!important;
}
.tabaq-page[data-page^="product-"] .rev61-product-close{
  border:1px solid var(--rev84-line);
  border-radius:28px;
  background:linear-gradient(135deg,rgba(255,250,242,.92),rgba(255,255,255,.82));
  padding:clamp(18px,2.4vw,28px);
  box-shadow:var(--rev84-shadow);
}
.tabaq-page[data-page^="product-"] .rev47-related-kits{
  margin-top:clamp(18px,2.6vw,34px);
  padding-bottom:clamp(20px,3vw,40px);
}
.tabaq-page[data-page="shop"] .product-card,
.tabaq-page[data-page="shop"] .rev52-role-card,
.tabaq-page[data-page^="product-"] .rev43-detail-card,
.tabaq-page[data-page^="product-"] .rev43-buybox{
  transform-style:preserve-3d;
  backface-visibility:hidden;
  will-change:transform;
}
.tabaq-page[data-page="shop"] .product-card__actions .mini-btn,
.tabaq-page[data-page^="product-"] .rev43-drop-list-btn,
.tabaq-page[data-page^="product-"] .mini-btn{
  min-height:46px;
}
@media(max-width:980px){
  .rev84-compare-head{grid-template-columns:1fr;align-items:start;}
  .rev84-kit-compare{padding:18px;}
  .rev84-kit-compare .rev63-kit-table__row{grid-template-columns:1fr;gap:6px;padding:14px 0;}
  .rev84-kit-compare .rev63-kit-table__row:first-of-type{display:none;}
  .tabaq-page[data-page="shop"] .rev61-commerce-spine,
  .tabaq-page[data-page="shop"] .rev63-store-grid,
  .tabaq-page[data-page="shop"] .product-grid,
  .tabaq-page[data-page="shop"] .rev48-role-grid,
  .tabaq-page[data-page^="product-"] .rev63-product-proof,
  .tabaq-page[data-page^="product-"] .rev43-detail-grid{
    grid-template-columns:1fr!important;
  }
  .tabaq-page[data-page="shop"] .product-card{min-height:auto;}
  .tabaq-page[data-page="shop"] .product-card__actions{display:grid;grid-template-columns:1fr;gap:8px;}
  .rev69-drop-activity{display:none!important;}
}
@media(prefers-reduced-motion: reduce){
  .rev84-motion-card{transform:none!important;}
}
/* REV84 — COMMERCE REFINEMENT WITHOUT DESIGN DRIFT END */


/* REV85 — EDITORIAL COMMERCE REFINEMENT START
   Purpose: refine the post-hero kit explanation into a cleaner editorial product system.
   Guard: hero graphics and hero animation are untouched. */
.rev85-editorial-kit-system{
  --rev85-ink:#120f0b;
  --rev85-paper:#fffaf0;
  --rev85-line:rgba(18,15,11,.12);
  --rev85-red:#ff3b2e;
  --rev85-soft:rgba(18,15,11,.64);
  padding:clamp(70px,8vw,118px) clamp(20px,7vw,118px);
  grid-template-columns:minmax(340px,.78fr) minmax(560px,1.22fr);
  gap:clamp(34px,5vw,86px);
  align-items:center;
  background:linear-gradient(180deg,#fff 0%,#fffdf8 100%);
  overflow:hidden;
}
.rev85-system-copy{position:relative;z-index:2;max-width:720px;}
.rev85-system-copy .rev63-eyebrow{color:var(--rev85-red);}
.rev85-system-copy h2{
  margin:12px 0 20px;
  display:grid;
  gap:.03em;
  font-family:var(--display,Arial Black,sans-serif);
  font-size:clamp(58px,7.2vw,118px);
  line-height:.78;
  letter-spacing:-.082em;
  text-transform:uppercase;
  max-width:6.2em;
}
.rev85-system-copy h2 em{font-style:normal;display:block;white-space:nowrap;}
.rev85-system-copy p{
  max-width:28ch;
  margin:0;
  font-size:clamp(18px,1.55vw,22px);
  line-height:1.25;
  font-weight:900;
  color:var(--rev85-soft);
}
.rev85-keyword-rail{
  margin:clamp(22px,2.5vw,34px) 0 0;
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:10px;
  max-width:460px;
}
.rev85-keyword-rail b{
  display:flex;
  align-items:center;
  justify-content:space-between;
  min-height:48px;
  padding:12px 14px;
  border:1px solid var(--rev85-line);
  border-radius:999px;
  background:rgba(255,255,255,.82);
  box-shadow:0 16px 34px rgba(18,15,11,.055);
  color:var(--rev85-ink);
  font-size:12px;
  letter-spacing:.13em;
  text-transform:uppercase;
  line-height:1;
}
.rev85-keyword-rail b::after{content:"";width:9px;height:9px;border-radius:999px;background:currentColor;opacity:.35;}
.rev85-clear-actions{margin-top:clamp(22px,2.5vw,34px);}
.rev85-kit-board{
  min-height:clamp(480px,39vw,610px);
  padding:clamp(24px,3vw,42px);
  border-radius:clamp(28px,3.4vw,46px);
  background:
    linear-gradient(90deg,rgba(18,15,11,.045) 1px,transparent 1px) 0 0/88px 88px,
    linear-gradient(180deg,rgba(18,15,11,.035) 1px,transparent 1px) 0 0/88px 88px,
    radial-gradient(circle at 18% 28%,rgba(255,210,93,.22),transparent 28%),
    radial-gradient(circle at 82% 18%,rgba(255,121,103,.16),transparent 34%),
    linear-gradient(135deg,#fffaf0 0%,#fff4e7 100%);
  border:1px solid rgba(18,15,11,.11);
  box-shadow:0 36px 96px rgba(18,15,11,.105);
  overflow:hidden;
  isolation:isolate;
  transform-style:preserve-3d;
}
.rev85-kit-board::before{content:"";position:absolute;inset:clamp(18px,2vw,28px);border:1px solid rgba(18,15,11,.07);border-radius:calc(clamp(28px,3.4vw,46px) - 12px);pointer-events:none;z-index:0;}
.rev85-kit-board::after{display:none!important;}
.rev85-kit-board span,.rev85-kit-board i{position:static;}
.rev85-board-topline{
  position:relative;z-index:4;display:inline-flex;align-items:center;gap:8px;
  min-height:28px;padding:8px 13px;border:1px solid var(--rev85-line);border-radius:999px;
  background:rgba(255,255,255,.82);font-size:11px;font-weight:950;line-height:1;letter-spacing:.16em;text-transform:uppercase;color:rgba(18,15,11,.68);
}
.rev85-board-topline::before{content:"";width:8px;height:8px;border-radius:999px;background:var(--rev85-red);box-shadow:0 0 0 6px rgba(255,59,46,.10);}
.rev85-board-head{position:relative;z-index:4;margin-top:20px;max-width:620px;}
.rev85-board-head h3{margin:0;font-family:var(--display,Arial Black,sans-serif);font-size:clamp(44px,4.9vw,82px);line-height:.82;letter-spacing:-.075em;text-transform:uppercase;color:var(--rev85-ink);max-width:7.2em;}
.rev85-board-head p{margin:12px 0 0;font-size:clamp(15px,1.1vw,18px);font-weight:900;line-height:1.2;color:var(--rev85-soft);}
.rev85-stack-stage{
  position:absolute;
  left:clamp(30px,4.4vw,70px);
  right:clamp(30px,4.4vw,70px);
  bottom:clamp(72px,6.2vw,96px);
  height:clamp(230px,21vw,322px);
  display:grid;
  grid-template-columns:1.25fr 1.05fr .82fr .82fr;
  align-items:end;
  gap:clamp(12px,1.8vw,26px);
  z-index:3;
  transform-style:preserve-3d;
}
.rev85-stack-item{height:100%;position:relative;display:grid;place-items:end center;filter:none;transform-style:preserve-3d;}
.rev85-stack-item b{
  top:clamp(8px,1vw,16px);
  width:34px;height:34px;background:#120f0b;color:#fff;border:1px solid rgba(255,255,255,.35);
  box-shadow:0 14px 26px rgba(18,15,11,.18);z-index:6;
}
.rev85-stack-item img{filter:drop-shadow(0 28px 24px rgba(18,15,11,.20));will-change:transform;}
.rev85-stack-item.rev65-kit-product--mist img{max-height:clamp(214px,23vw,344px);transform:rotate(-6deg) translateY(8px);}
.rev85-stack-item.rev65-kit-product--edp img{max-height:clamp(194px,20vw,300px);transform:rotate(2deg) translateY(8px);}
.rev85-stack-item.rev65-kit-product--oil1 img{max-height:clamp(168px,17vw,256px);transform:rotate(-3deg) translateY(8px);}
.rev85-stack-item.rev65-kit-product--oil2 img{max-height:clamp(168px,17vw,256px);transform:rotate(7deg) translateY(8px);}
.rev85-stack-item figcaption{
  bottom:-38px;
  padding:8px 10px;
  border-radius:999px;
  background:rgba(255,255,255,.90);
  border:1px solid rgba(18,15,11,.10);
  box-shadow:0 14px 28px rgba(18,15,11,.095);
  font-size:10px;
  letter-spacing:.08em;
  min-width:max-content;
  z-index:8;
}
.rev85-stack-item figcaption small{font-size:8px;letter-spacing:.16em;color:rgba(18,15,11,.52);}
.rev85-flow-bar{
  position:absolute!important;
  left:clamp(46px,6vw,86px);right:clamp(46px,6vw,86px);bottom:clamp(124px,11vw,158px);
  height:12px;border-radius:999px;display:grid;grid-template-columns:repeat(4,1fr);overflow:hidden;z-index:1;
  box-shadow:0 18px 42px rgba(18,15,11,.13);opacity:.94;
}
.rev85-flow-bar i:nth-child(1){background:#ffd35d}.rev85-flow-bar i:nth-child(2){background:#ff8b74}.rev85-flow-bar i:nth-child(3){background:#cdb1ff}.rev85-flow-bar i:nth-child(4){background:#a8e07b}
.rev85-board-footer{
  position:absolute;left:clamp(24px,3vw,42px);right:clamp(24px,3vw,42px);bottom:20px;z-index:5;
  display:flex;align-items:center;justify-content:space-between;gap:18px;border-top:1px solid rgba(18,15,11,.12);padding-top:14px;
  font-size:11px;font-weight:950;line-height:1;letter-spacing:.12em;text-transform:uppercase;color:rgba(18,15,11,.56);
}
.rev85-board-footer::after{content:"Choose a kit →";color:var(--rev85-red);}
@media(max-width:1160px){
  .rev85-editorial-kit-system{grid-template-columns:1fr;}
  .rev85-system-copy h2{max-width:8em;}
  .rev85-system-copy p{max-width:36ch;}
  .rev85-kit-board{min-height:620px;}
}
@media(max-width:720px){
  .rev85-editorial-kit-system{padding:44px 18px 54px;gap:24px;}
  .rev85-system-copy h2{font-size:clamp(48px,14vw,72px);max-width:6.3em;}
  .rev85-keyword-rail{grid-template-columns:1fr;max-width:none;}
  .rev85-kit-board{min-height:650px;border-radius:28px;padding:20px;}
  .rev85-board-head h3{font-size:clamp(38px,12vw,56px);}
  .rev85-stack-stage{left:22px;right:22px;bottom:100px;height:360px;grid-template-columns:repeat(2,minmax(0,1fr));gap:26px 12px;}
  .rev85-stack-item b{top:2px;width:30px;height:30px;}
  .rev85-stack-item.rev65-kit-product--mist img{max-height:188px;}
  .rev85-stack-item.rev65-kit-product--edp img{max-height:172px;}
  .rev85-stack-item.rev65-kit-product--oil1 img,.rev85-stack-item.rev65-kit-product--oil2 img{max-height:152px;}
  .rev85-stack-item figcaption{bottom:-28px;font-size:9px;padding:7px 9px;}
  .rev85-flow-bar{left:26px;right:26px;bottom:82px;height:10px;}
  .rev85-board-footer{font-size:10px;line-height:1.25;align-items:flex-start;}
}
/* REV85 — EDITORIAL COMMERCE REFINEMENT END */


/* REV87 — SCROLL SURGICAL FIX START
   Purpose: restore easy native scroll; keep immersive layering depth only.
   Rule: no global scroll hijack, no wheel interception, no scroll locking. */
html{scroll-behavior:smooth;}
body{overscroll-behavior-y:auto;}
.tabaq-rev7-layering-page{--rev86-lag-y:0px;--rev86-lag-x:0px;--rev86-lag-rot-y:0deg;--rev86-lag-rot-x:0deg;--rev86-final-z:32px;}
.tabaq-rev7-layering-page .rev7-scene-grid{perspective:1500px;transform-style:preserve-3d;}
.tabaq-rev7-layering-page .rev7-artboard{transform-style:preserve-3d;perspective:1500px;isolation:isolate;}
.tabaq-rev7-layering-page .rev7-layer-img{backface-visibility:hidden;transform-style:preserve-3d;}
.tabaq-rev7-layering-page .rev7-model-empty{
  transform:translate3d(var(--rev86-lag-x,0px),var(--rev86-lag-y,0px),-34px) rotateX(var(--rev86-lag-rot-x,0deg)) rotateY(var(--rev86-lag-rot-y,0deg)) scale(var(--rev86-empty-scale,1));
  filter:saturate(1.02) contrast(1.02) drop-shadow(0 20px 34px rgba(32,24,18,.08));
}
.tabaq-rev7-layering-page .rev7-model-final{
  transform:translate3d(calc(var(--rev86-lag-x,0px) * .42),calc(var(--rev86-lag-y,0px) * .46),var(--rev86-final-z,32px)) rotateX(calc(var(--rev86-lag-rot-x,0deg) * .45)) rotateY(calc(var(--rev86-lag-rot-y,0deg) * .38)) scale(var(--rev86-final-scale,1));
  filter:saturate(1.025) contrast(1.015) drop-shadow(0 26px 42px rgba(32,24,18,.10));
}
.tabaq-rev7-layering-page .rev7-product-drop{transform-style:preserve-3d;}
.tabaq-rev7-layering-page .rev72-layer-role{transform-style:preserve-3d;will-change:transform;}
.tabaq-rev7-layering-page .rev72-layer-role img{will-change:transform;transform:translateZ(18px);}
@media (prefers-reduced-motion: reduce), (max-width: 780px){
  html{scroll-behavior:auto;}
  .tabaq-rev7-layering-page .rev7-model-empty,
  .tabaq-rev7-layering-page .rev7-model-final{transform:none;filter:saturate(1.01) contrast(1.01);}
}
/* REV87 — SCROLL SURGICAL FIX END */


/* REV88 — LAYERING SYNC + EDITORIAL IMMERSION START
   Purpose: coordinate bottle contact with the model earlier, while keeping native scroll easy. */
.tabaq-rev7-layering-page .rev7-product-drop{
  transform:
    translate3d(var(--product-x,0px),var(--product-y,-80vh),calc(8px + (var(--rev88-contact,0) * 54px)))
    rotate(var(--product-rot,0deg))
    scale(calc(var(--product-scale,1) + (var(--rev88-contact,0) * .035)));
}
.tabaq-rev7-layering-page .rev7-artboard::before{
  content:"";position:absolute;left:32%;right:28%;top:40%;height:22%;border-radius:999px;
  background:radial-gradient(ellipse,rgba(255,255,255,.54),rgba(255,255,255,0) 62%);
  opacity:calc(var(--rev88-contact,0) * .56);filter:blur(14px);z-index:2;pointer-events:none;
  transform:translate3d(0,0,18px) scale(calc(.82 + (var(--rev88-contact,0) * .22)));
}
.tabaq-rev7-layering-page .rev7-landing-ring{
  opacity:calc(var(--ring-opacity,0) + (var(--rev88-contact,0) * .16));
}
.rev85-editorial-kit-system,.rev84-kit-compare,.tabaq-page[data-page="shop"] .product-card.rev43-commerce-card,.tabaq-page[data-page^="product-"] .rev43-detail-panel{
  transform-style:preserve-3d;backface-visibility:hidden;
}
@media (prefers-reduced-motion: reduce), (max-width:780px){
  .tabaq-rev7-layering-page .rev7-artboard::before{display:none;}
}
/* REV88 — LAYERING SYNC + EDITORIAL IMMERSION END */


/* REV89 — EDITORIAL BALANCE + OVERLAP GUARD START
   Purpose: keep the current design direction but make the post-hero system cleaner, more editorial and collision-safe.
   Guard: no hero selectors, no layout replacement, no extra concept. */
.rev89-editorial-balance{
  grid-template-columns:minmax(340px,.72fr) minmax(600px,1.28fr);
  gap:clamp(46px,6vw,104px);
  align-items:center;
  min-height:auto;
  padding-top:clamp(78px,8vw,126px);
  padding-bottom:clamp(84px,8vw,132px);
}
.rev89-editorial-balance .rev85-system-copy{max-width:680px;align-self:center;}
.rev89-editorial-balance .rev85-system-copy h2{
  font-size:clamp(58px,6.1vw,104px);
  line-height:.82;
  letter-spacing:-.078em;
  max-width:6.05em;
  text-wrap:balance;
}
.rev89-editorial-balance .rev85-system-copy p{
  max-width:22ch;
  font-size:clamp(18px,1.28vw,21px);
  line-height:1.28;
}
.rev89-editorial-balance .rev85-kit-board{
  display:grid;
  grid-template-rows:auto auto minmax(286px,1fr) auto;
  align-content:stretch;
  min-height:clamp(540px,40vw,650px);
  padding:clamp(28px,3.1vw,48px);
  overflow:hidden;
}
.rev89-editorial-balance .rev85-board-head{
  margin-top:clamp(18px,2.3vw,30px);
  max-width:100%;
  z-index:5;
}
.rev89-editorial-balance .rev85-board-head h3{
  font-size:clamp(42px,4.35vw,72px);
  line-height:.86;
  letter-spacing:-.072em;
  max-width:8.2em;
  text-wrap:balance;
}
.rev89-editorial-balance .rev85-board-head p{
  max-width:32ch;
  font-size:clamp(14px,1vw,17px);
  line-height:1.25;
}
.rev89-editorial-balance .rev85-stack-stage{
  position:relative!important;
  left:auto!important;
  right:auto!important;
  bottom:auto!important;
  height:clamp(286px,21.5vw,370px);
  margin-top:clamp(22px,2.7vw,42px);
  padding:0 clamp(4px,1.5vw,24px) clamp(8px,1.2vw,18px);
  grid-template-columns:1.16fr 1.02fr .86fr .86fr;
  gap:clamp(14px,1.9vw,30px);
  z-index:4;
}
.rev89-editorial-balance .rev85-stack-item{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-end;
  gap:12px;
  overflow:visible;
  min-width:0;
}
.rev89-editorial-balance .rev85-stack-item b{
  top:0;
  width:32px;
  height:32px;
  font-size:10px;
}
.rev89-editorial-balance .rev85-stack-item img{
  max-width:100%;
  object-fit:contain;
  filter:drop-shadow(0 24px 24px rgba(18,15,11,.18));
}
.rev89-editorial-balance .rev85-stack-item.rev65-kit-product--mist img{max-height:clamp(202px,19vw,294px);}
.rev89-editorial-balance .rev85-stack-item.rev65-kit-product--edp img{max-height:clamp(184px,17vw,266px);}
.rev89-editorial-balance .rev85-stack-item.rev65-kit-product--oil1 img,
.rev89-editorial-balance .rev85-stack-item.rev65-kit-product--oil2 img{max-height:clamp(154px,14.4vw,226px);}
.rev89-editorial-balance .rev85-stack-item figcaption{
  position:relative;
  left:auto;
  bottom:auto;
  transform:none;
  min-width:0;
  max-width:100%;
  white-space:normal;
  margin-top:0;
  border-radius:999px;
  font-size:9px;
  line-height:1.05;
  z-index:7;
}
.rev89-editorial-balance .rev85-stack-item figcaption small{display:block;margin-top:2px;font-size:7px;}
.rev89-editorial-balance .rev85-flow-bar{
  position:absolute!important;
  left:clamp(48px,5.4vw,92px)!important;
  right:clamp(48px,5.4vw,92px)!important;
  bottom:clamp(152px,11.8vw,190px)!important;
  z-index:1;
  opacity:.66;
  height:10px;
  box-shadow:none;
}
.rev89-editorial-balance .rev85-board-footer{
  position:relative;
  left:auto;
  right:auto;
  bottom:auto;
  margin-top:clamp(20px,2.5vw,32px);
  padding-top:16px;
  z-index:5;
}
.rev43-detail-panel h1,
.rev43-detail-panel h2,
.rev43-detail-panel h3,
.rev43-commerce-card h2,
.rev43-commerce-card h3,
.rev84-kit-compare h2,
.rev63-card h3{
  text-wrap:balance;
  overflow-wrap:normal;
}
.rev43-detail-panel p,
.rev43-commerce-card p,
.rev63-card p,
.rev43-assurance-card p{
  max-width:62ch;
  overflow-wrap:break-word;
}
.tabaq-page[data-page^="product-"] .rev43-detail-panel,
.tabaq-page[data-page="shop"] .rev43-commerce-card,
.rev43-assurance-card,
.rev63-card{
  contain:layout paint;
}
@media(max-width:1180px){
  .rev89-editorial-balance{grid-template-columns:1fr;gap:34px;}
  .rev89-editorial-balance .rev85-system-copy h2{max-width:7.2em;}
  .rev89-editorial-balance .rev85-system-copy p{max-width:32ch;}
}
@media(max-width:760px){
  .rev89-editorial-balance{padding:48px 18px 60px;}
  .rev89-editorial-balance .rev85-system-copy h2{font-size:clamp(48px,13.4vw,72px);max-width:6.2em;}
  .rev89-editorial-balance .rev85-kit-board{min-height:auto;grid-template-rows:auto auto auto auto;padding:22px;border-radius:28px;}
  .rev89-editorial-balance .rev85-board-head h3{font-size:clamp(36px,11vw,52px);max-width:7em;}
  .rev89-editorial-balance .rev85-stack-stage{height:auto;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px 12px;margin-top:26px;padding-bottom:4px;}
  .rev89-editorial-balance .rev85-stack-item.rev65-kit-product--mist img{max-height:180px;}
  .rev89-editorial-balance .rev85-stack-item.rev65-kit-product--edp img{max-height:164px;}
  .rev89-editorial-balance .rev85-stack-item.rev65-kit-product--oil1 img,
  .rev89-editorial-balance .rev85-stack-item.rev65-kit-product--oil2 img{max-height:144px;}
  .rev89-editorial-balance .rev85-flow-bar{display:none!important;}
  .rev89-editorial-balance .rev85-board-footer{font-size:10px;line-height:1.25;display:block;}
  .rev89-editorial-balance .rev85-board-footer::after{display:block;margin-top:8px;}
}
/* REV89 — EDITORIAL BALANCE + OVERLAP GUARD END */


/* REV90 — SURGICAL VISUAL FLOW FIX START
   Purpose: fix reported overlaps, restore hero return state, and keep shop hover/open + click-through behavior clean.
   Guard: no hero animation rewrite, no new concept, no scroll hijack. */
.rev90-ordered-kit{
  grid-template-columns:minmax(320px,.56fr) minmax(620px,1fr);
  gap:clamp(52px,6.6vw,118px);
  align-items:center;
}
.rev90-ordered-kit .rev85-system-copy{
  max-width:clamp(420px,38vw,610px);
  z-index:2;
}
.rev90-ordered-kit .rev85-system-copy h2{
  font-size:clamp(56px,5.15vw,92px);
  line-height:.86;
  letter-spacing:-.076em;
  max-width:5.45em;
  margin-bottom:18px;
}
.rev90-ordered-kit .rev85-system-copy h2 em{white-space:normal;}
.rev90-ordered-kit .rev85-system-copy p{
  max-width:18ch;
  font-size:clamp(17px,1.16vw,20px);
}
.rev90-ordered-kit .rev85-keyword-rail{
  max-width:430px;
  gap:10px 12px;
}
.rev90-ordered-kit .rev85-kit-board{
  justify-self:stretch;
  max-width:940px;
  min-height:clamp(560px,41vw,660px);
  padding:clamp(30px,3.2vw,50px);
}
.rev90-ordered-kit .rev85-board-head h3{
  font-size:clamp(42px,4.05vw,68px);
  max-width:7.65em;
}
.rev90-ordered-kit .rev85-board-head p{
  max-width:28ch;
}
.rev90-ordered-kit .rev85-stack-stage{
  margin-top:clamp(30px,3vw,46px);
  height:clamp(300px,22vw,380px);
  padding-left:clamp(10px,1.5vw,28px);
  padding-right:clamp(10px,1.5vw,28px);
}
.rev90-ordered-kit .rev85-stack-item b{
  position:relative;
  margin-bottom:6px;
  flex:0 0 auto;
}
.rev90-ordered-kit .rev85-stack-item figcaption{
  max-width:110px;
  text-align:center;
}
.rev90-ordered-kit .rev85-flow-bar{
  bottom:clamp(156px,11vw,188px)!important;
  opacity:.42;
}
.hero:not(.is-handoff-active) .stage,
.hero:not(.is-handoff-active) .float-item{
  visibility:visible!important;
}
.hero:not(.is-handoff-active) .stage{opacity:1!important;}
.tabaq-page[data-page="shop"] .product-card.rev43-commerce-card{
  cursor:pointer;
}
.tabaq-page[data-page="shop"] .product-card.rev43-commerce-card .rev29-kit-preview,
.tabaq-page[data-page="shop"] .product-card.rev43-commerce-card .rev29-pack{
  cursor:pointer;
}
@media(max-width:1180px){
  .rev90-ordered-kit{grid-template-columns:1fr;gap:36px;}
  .rev90-ordered-kit .rev85-system-copy{max-width:720px;}
  .rev90-ordered-kit .rev85-system-copy h2{max-width:7em;font-size:clamp(54px,8.8vw,92px);}
  .rev90-ordered-kit .rev85-system-copy p{max-width:28ch;}
}
@media(max-width:760px){
  .rev90-ordered-kit{padding-top:52px;padding-bottom:64px;}
  .rev90-ordered-kit .rev85-system-copy h2{font-size:clamp(46px,12vw,66px);max-width:6.2em;}
  .rev90-ordered-kit .rev85-kit-board{min-height:auto;}
  .rev90-ordered-kit .rev85-board-head h3{font-size:clamp(34px,10vw,48px);}
  .rev90-ordered-kit .rev85-stack-stage{height:auto;}
  .rev90-ordered-kit .rev85-stack-item figcaption{max-width:96px;}
}
/* REV90 — SURGICAL VISUAL FLOW FIX END */

/* REV91 — HERO MOTION RESTORE START
   Purpose: keep the previous hero bottle flight visible; no pre-handoff hiding. */
.hero.rev90-handoff-approach .float-item{
  visibility:visible!important;
}
.hero:not(.is-handoff-active) .stage,
.hero:not(.is-handoff-active) .float-item{
  visibility:visible!important;
}
/* REV91 — HERO MOTION RESTORE END */



/* REV93 — CURATED JOURNEY PAGES START
   Purpose: clarify Lookbook, Why TABAQ and Early Access without changing the locked hero or commerce foundation. */
body[data-page="gallery"] .rev69-drop-activity,
body[data-page="about"] .rev69-drop-activity,
body[data-page="drop"] .rev69-drop-activity{display:none!important;}
.nav a[data-page-link="gallery"],.nav a[data-page-link="about"],.nav a[data-page-link="drop"]{white-space:nowrap;}
.rev93-shell{max-width:1440px;margin:0 auto;padding:clamp(92px,9vw,132px) clamp(18px,4vw,62px) clamp(72px,9vw,130px);}
.rev93-journey-page{background:#fbf8ef;color:#111;overflow:hidden;}
.rev93-hero{min-height:min(760px,calc(100vh - 90px));display:grid;grid-template-columns:minmax(320px,.92fr) minmax(420px,1.08fr);gap:clamp(28px,5vw,80px);align-items:center;position:relative;perspective:1200px;}
.rev93-hero:before{content:"";position:absolute;inset:4% -8%;background:radial-gradient(circle at 78% 34%,rgba(255,63,43,.14),transparent 34%),radial-gradient(circle at 20% 70%,rgba(255,204,28,.18),transparent 36%);pointer-events:none;filter:blur(20px);opacity:.72;}
.rev93-hero-copy,.rev93-motion-stage{position:relative;z-index:1;}
.rev93-kicker{margin:0 0 18px;font-size:12px;line-height:1;letter-spacing:.18em;text-transform:uppercase;font-weight:950;color:#ff3828;}
.rev93-hero h1{margin:0;max-width:760px;font-size:clamp(58px,8.8vw,132px);line-height:.84;letter-spacing:-.085em;font-weight:1000;text-transform:uppercase;}
.rev93-lead{max-width:620px;margin:24px 0 0;font-size:clamp(18px,2vw,27px);line-height:1.22;font-weight:850;color:rgba(17,17,17,.62);letter-spacing:-.035em;}
.rev93-keywords{display:flex;flex-wrap:wrap;gap:10px;margin:26px 0 0;}
.rev93-keywords span{border:1px solid rgba(17,17,17,.12);background:rgba(255,255,255,.66);border-radius:999px;padding:10px 14px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;font-weight:950;box-shadow:0 14px 34px rgba(0,0,0,.06);}
.rev93-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px;align-items:center;}
.rev93-primary,.rev93-secondary{appearance:none;border:0;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;min-height:48px;border-radius:999px;padding:0 22px;font-weight:950;letter-spacing:-.02em;cursor:pointer;}
.rev93-primary{background:#111;color:#fff;box-shadow:0 22px 44px rgba(0,0,0,.14);}
.rev93-secondary{background:#fff;color:#111;border:1px solid rgba(17,17,17,.14);}
.rev93-mood-board{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(14px,2vw,24px);transform-style:preserve-3d;}
.rev93-mood-card{min-height:268px;border-radius:34px;background:linear-gradient(145deg,var(--tone),#fff 76%);border:1px solid rgba(17,17,17,.09);box-shadow:0 34px 90px rgba(0,0,0,.12);padding:22px;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;transform-style:preserve-3d;}
.rev93-mood-card:before{content:"";position:absolute;inset:18px;border-radius:26px;border:1px solid rgba(255,255,255,.58);background:linear-gradient(180deg,rgba(255,255,255,.35),transparent);}
.rev93-mood-card span{position:absolute;left:22px;top:22px;width:38px;height:38px;border-radius:999px;background:#111;color:#fff;display:grid;place-items:center;font-size:12px;font-weight:1000;z-index:2;}
.rev93-mood-card b{font-size:clamp(36px,3.8vw,60px);line-height:.82;letter-spacing:-.08em;text-transform:uppercase;z-index:2;}
.rev93-mood-card small{font-size:13px;font-weight:950;color:rgba(17,17,17,.58);text-transform:uppercase;letter-spacing:.12em;z-index:2;margin-top:10px;}
.rev93-mood-card img{position:absolute;right:6%;bottom:18%;height:min(48%,176px);width:auto;object-fit:contain;filter:drop-shadow(0 26px 34px rgba(0,0,0,.22));transform:translateZ(55px) rotate(-5deg);z-index:1;}
.rev93-choice-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;margin-top:clamp(36px,7vw,92px);}
.rev93-choice-card,.rev93-drop-kit,.rev93-principle-card,.rev93-trust-list article,.rev93-drop-clarity article{background:linear-gradient(145deg,var(--tone,#fff),#fff 72%);border:1px solid rgba(17,17,17,.1);border-radius:30px;padding:24px;box-shadow:0 26px 70px rgba(0,0,0,.09);min-height:235px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;}
.rev93-choice-card p,.rev93-section-head p{margin:0;color:#ff3828;font-size:11px;text-transform:uppercase;letter-spacing:.14em;font-weight:1000;}
.rev93-choice-card h2,.rev93-drop-kit h3,.rev93-principle-card h2{margin:12px 0 0;font-size:clamp(34px,3.5vw,56px);line-height:.86;letter-spacing:-.075em;text-transform:uppercase;}
.rev93-choice-card span,.rev93-drop-kit p,.rev93-principle-card p,.rev93-trust-list span,.rev93-drop-clarity span{display:block;margin-top:14px;color:rgba(17,17,17,.62);font-size:16px;line-height:1.25;font-weight:800;}
.rev93-choice-card a,.rev93-drop-kit a{margin-top:24px;color:#111;text-decoration:none;font-size:12px;font-weight:1000;text-transform:uppercase;letter-spacing:.12em;border-bottom:2px solid #111;padding-bottom:5px;}
.rev93-editorial-strip,.rev93-trust-panel{margin-top:clamp(36px,7vw,92px);display:grid;grid-template-columns:.75fr 1.25fr;gap:30px;align-items:center;}
.rev93-strip-copy,.rev93-trust-head{background:#111;color:#fff;border-radius:36px;padding:clamp(28px,4vw,54px);box-shadow:0 36px 90px rgba(0,0,0,.16);}
.rev93-strip-copy h2,.rev93-trust-head h2{margin:0;font-size:clamp(42px,6vw,88px);line-height:.88;letter-spacing:-.08em;text-transform:uppercase;}
.rev93-strip-copy p:not(.rev93-kicker){margin:20px 0 0;color:rgba(255,255,255,.7);font-weight:800;font-size:18px;line-height:1.25;}
.rev93-product-line{min-height:300px;border-radius:36px;background:linear-gradient(135deg,#fff7d9,#f7fff8);border:1px solid rgba(17,17,17,.08);display:flex;align-items:end;justify-content:center;gap:clamp(10px,3vw,42px);padding:36px;box-shadow:0 32px 82px rgba(0,0,0,.1);}
.rev93-product-line img{height:clamp(130px,22vw,265px);width:auto;object-fit:contain;filter:drop-shadow(0 30px 36px rgba(0,0,0,.18));}
.rev93-product-line img:nth-child(3),.rev93-product-line img:nth-child(4){height:clamp(110px,19vw,220px);}
.rev93-kit-manifesto{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;transform-style:preserve-3d;}
.rev93-kit-manifesto div{min-height:190px;border-radius:30px;padding:22px;background:#111;color:#fff;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 32px 78px rgba(0,0,0,.18);}
.rev93-kit-manifesto b{width:40px;height:40px;border-radius:999px;background:#ff3828;display:grid;place-items:center;font-size:12px;}
.rev93-kit-manifesto strong{font-size:clamp(34px,4vw,62px);line-height:.85;text-transform:uppercase;letter-spacing:-.075em;}
.rev93-kit-manifesto span{color:rgba(255,255,255,.64);font-weight:850;}
.rev93-principles{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;margin-top:clamp(36px,7vw,92px);}
.rev93-principle-card span{width:38px;height:38px;border-radius:999px;background:#111;color:#fff;display:grid;place-items:center;font-size:12px;font-weight:1000;}
.rev93-trust-list{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;}
.rev93-trust-list article{min-height:185px;justify-content:flex-start;}
.rev93-trust-list b,.rev93-drop-clarity b{font-size:clamp(24px,2.6vw,42px);line-height:.9;letter-spacing:-.06em;text-transform:uppercase;}
.rev93-access-board{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;padding:22px;border-radius:42px;background:linear-gradient(135deg,#111,#32110d);box-shadow:0 40px 100px rgba(0,0,0,.18);}
.rev93-access-step{min-height:245px;border-radius:28px;padding:22px;background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.12);display:flex;flex-direction:column;justify-content:space-between;}
.rev93-access-step b{width:42px;height:42px;border-radius:999px;background:#ff3828;display:grid;place-items:center;font-size:12px;}
.rev93-access-step strong{font-size:clamp(34px,3.4vw,56px);line-height:.88;text-transform:uppercase;letter-spacing:-.075em;}
.rev93-access-step span{color:rgba(255,255,255,.68);font-weight:850;line-height:1.25;}
.rev93-section-head{margin-top:clamp(36px,7vw,92px);display:flex;align-items:end;justify-content:space-between;gap:22px;}
.rev93-section-head h2{margin:10px 0 0;font-size:clamp(42px,6.2vw,96px);line-height:.82;letter-spacing:-.08em;text-transform:uppercase;max-width:760px;}
.rev93-section-head span{max-width:330px;color:rgba(17,17,17,.62);font-weight:850;line-height:1.2;}
.rev93-drop-kit-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;margin-top:24px;}
.rev93-drop-kit{min-height:290px;}
.rev93-drop-kit b{font-size:34px;letter-spacing:-.06em;}
.rev93-drop-kit button{appearance:none;border:0;border-radius:999px;background:#ff3828;color:#fff;min-height:46px;padding:0 17px;font-weight:1000;cursor:pointer;margin-top:auto;box-shadow:0 18px 36px rgba(255,56,40,.2);}
.rev93-drop-clarity{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:clamp(30px,5vw,70px);}
.rev93-drop-clarity article{min-height:180px;background:#fff;}
@media (max-width:1050px){.rev93-hero,.rev93-editorial-strip,.rev93-trust-panel{grid-template-columns:1fr;min-height:auto}.rev93-choice-grid,.rev93-principles,.rev93-drop-kit-grid{grid-template-columns:repeat(2,minmax(0,1fr));}.rev93-trust-list,.rev93-drop-clarity{grid-template-columns:1fr}.rev93-section-head{display:block}.rev93-section-head span{display:block;margin-top:14px}.rev93-mood-card{min-height:230px}}
@media (max-width:680px){.rev93-shell{padding:80px 16px 96px}.rev93-hero h1{font-size:clamp(48px,15vw,76px);letter-spacing:-.08em}.rev93-lead{font-size:18px}.rev93-choice-grid,.rev93-principles,.rev93-drop-kit-grid,.rev93-mood-board,.rev93-kit-manifesto,.rev93-access-board{grid-template-columns:1fr}.rev93-product-line{gap:2px;padding:20px;min-height:220px}.rev93-product-line img{height:150px}.rev93-product-line img:nth-child(3),.rev93-product-line img:nth-child(4){height:132px}.rev93-choice-card,.rev93-drop-kit,.rev93-principle-card{min-height:unset}.rev93-actions a,.rev93-actions button{width:100%}}
/* REV93 — CURATED JOURNEY PAGES END */

/* REV94 — CURATED JOURNEY TIGHTENING START
   Purpose: make Lookbook, Why TABAQ and Early Access decisive pages, not extra content. */
.rev94-journey-page{background:#fbf8ef;color:#111;overflow:hidden;}
.rev94-shell{max-width:1480px;margin:0 auto;padding:clamp(88px,8vw,128px) clamp(18px,4vw,64px) clamp(84px,9vw,132px);}
.rev94-hero{min-height:min(760px,calc(100vh - 96px));display:grid;grid-template-columns:minmax(320px,.82fr) minmax(520px,1.18fr);gap:clamp(34px,6vw,92px);align-items:center;position:relative;perspective:1400px;}
.rev94-hero:before{content:"";position:absolute;inset:6% -8%;background:radial-gradient(circle at 76% 38%,rgba(255,56,40,.11),transparent 34%),radial-gradient(circle at 18% 72%,rgba(255,197,25,.16),transparent 38%);filter:blur(24px);pointer-events:none;opacity:.78;}
.rev94-copy,.rev94-motion-stage{position:relative;z-index:1;}
.rev94-kicker{margin:0 0 18px;color:#ff3828;font-size:12px;line-height:1;letter-spacing:.16em;text-transform:uppercase;font-weight:1000;}
.rev94-copy h1{margin:0;max-width:760px;font-size:clamp(64px,8.4vw,138px);line-height:.82;letter-spacing:-.088em;text-transform:uppercase;font-weight:1000;}
.rev94-lead{max-width:520px;margin:24px 0 0;font-size:clamp(21px,2.1vw,30px);line-height:1.12;font-weight:900;color:rgba(17,17,17,.62);letter-spacing:-.045em;}
.rev94-word-row{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px;}
.rev94-word-row span{border:1px solid rgba(17,17,17,.11);background:rgba(255,255,255,.72);border-radius:999px;padding:10px 15px;font-size:11px;letter-spacing:.11em;text-transform:uppercase;font-weight:1000;box-shadow:0 16px 36px rgba(0,0,0,.055);}
.rev94-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:32px;align-items:center;}
.rev94-primary,.rev94-secondary{appearance:none;border:0;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;min-height:50px;border-radius:999px;padding:0 23px;font-weight:1000;letter-spacing:-.02em;cursor:pointer;}
.rev94-primary{background:#111;color:#fff;box-shadow:0 22px 44px rgba(0,0,0,.14);}
.rev94-secondary{background:#fff;color:#111;border:1px solid rgba(17,17,17,.15);}
.rev94-lookbook-stage{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(14px,1.8vw,22px);transform-style:preserve-3d;}
.rev94-mood-tile{min-height:clamp(290px,31vw,430px);position:relative;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;text-decoration:none;color:#111;border-radius:38px;padding:24px;background:linear-gradient(145deg,var(--tone),#fff 72%);border:1px solid rgba(17,17,17,.09);box-shadow:0 34px 86px rgba(0,0,0,.115);transform-style:preserve-3d;}
.rev94-mood-tile:before{content:"";position:absolute;inset:18px;border-radius:28px;border:1px solid rgba(255,255,255,.58);background:linear-gradient(180deg,rgba(255,255,255,.36),transparent);z-index:0;}
.rev94-mood-tile span{position:absolute;left:24px;top:22px;width:40px;height:40px;border-radius:999px;background:#111;color:#fff;display:grid;place-items:center;font-size:12px;font-weight:1000;z-index:3;}
.rev94-mood-tile img{position:absolute;right:5%;top:13%;width:min(52%,260px);max-height:58%;object-fit:contain;filter:drop-shadow(0 28px 34px rgba(0,0,0,.18));z-index:1;transform:translateZ(60px) rotate(-2deg);}
.rev94-mood-tile b{position:relative;z-index:2;display:block;font-size:clamp(38px,4.2vw,70px);line-height:.82;letter-spacing:-.08em;text-transform:uppercase;max-width:75%;}
.rev94-mood-tile small{position:relative;z-index:2;margin-top:10px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:1000;color:rgba(17,17,17,.58);}
.rev94-follow-path{margin-top:clamp(42px,7vw,96px);display:grid;grid-template-columns:.72fr 1.28fr;gap:28px;align-items:center;}
.rev94-path-card{background:#111;color:#fff;border-radius:34px;padding:clamp(26px,4vw,50px);box-shadow:0 34px 82px rgba(0,0,0,.16);}
.rev94-path-card b{display:block;font-size:clamp(36px,4.8vw,72px);line-height:.86;letter-spacing:-.075em;text-transform:uppercase;}
.rev94-path-card span{display:block;margin-top:16px;color:rgba(255,255,255,.68);font-weight:850;line-height:1.2;font-size:18px;}
.rev94-path-card a{display:inline-flex;margin-top:24px;color:#fff;text-decoration:none;border-bottom:2px solid currentColor;font-size:12px;font-weight:1000;letter-spacing:.12em;text-transform:uppercase;padding-bottom:6px;}
.rev94-product-rail{min-height:320px;border-radius:38px;background:linear-gradient(135deg,#fff8de,#f8fff9);border:1px solid rgba(17,17,17,.08);display:flex;align-items:end;justify-content:center;gap:clamp(12px,3.4vw,52px);padding:36px;box-shadow:0 34px 84px rgba(0,0,0,.1);transform-style:preserve-3d;}
.rev94-product-rail img{height:clamp(140px,23vw,280px);width:auto;object-fit:contain;filter:drop-shadow(0 32px 36px rgba(0,0,0,.18));}
.rev94-product-rail img:nth-child(3),.rev94-product-rail img:nth-child(4){height:clamp(118px,19vw,228px);}
.rev94-proof-board{position:relative;min-height:560px;border-radius:46px;background:linear-gradient(140deg,#111 0%,#19130f 52%,#fff1d0 53%,#fff 100%);border:1px solid rgba(17,17,17,.12);box-shadow:0 38px 95px rgba(0,0,0,.15);overflow:hidden;padding:28px;display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:start;transform-style:preserve-3d;}
.rev94-proof-before,.rev94-proof-after{border-radius:30px;padding:24px;min-height:210px;display:flex;flex-direction:column;justify-content:space-between;position:relative;z-index:2;}
.rev94-proof-before{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.12);}
.rev94-proof-after{background:rgba(255,255,255,.76);color:#111;border:1px solid rgba(17,17,17,.08);}
.rev94-proof-board small{font-size:11px;font-weight:1000;letter-spacing:.13em;text-transform:uppercase;opacity:.62;}
.rev94-proof-board strong{font-size:clamp(30px,3.2vw,55px);line-height:.88;letter-spacing:-.07em;text-transform:uppercase;}
.rev94-step-stack{position:absolute;left:50%;bottom:28px;transform:translateX(-50%);z-index:4;display:flex;gap:8px;align-items:center;background:#fff;border:1px solid rgba(17,17,17,.1);border-radius:999px;padding:10px;box-shadow:0 22px 48px rgba(0,0,0,.12);}
.rev94-step-stack span{display:flex;gap:7px;align-items:center;border-radius:999px;background:#f7f2e8;padding:9px 12px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;font-weight:1000;white-space:nowrap;}
.rev94-step-stack b{width:23px;height:23px;border-radius:999px;background:#111;color:#fff;display:grid;place-items:center;font-size:10px;}
.rev94-proof-pack{position:absolute;left:50%;top:50%;transform:translate(-50%,-36%) translateZ(80px);z-index:3;width:min(52%,420px);max-height:330px;object-fit:contain;filter:drop-shadow(0 34px 44px rgba(0,0,0,.26));}
.rev94-proof-strip{margin-top:clamp(42px,7vw,96px);display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;}
.rev94-proof-strip article{background:#fff;border:1px solid rgba(17,17,17,.1);border-radius:30px;padding:26px;min-height:200px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 28px 70px rgba(0,0,0,.085);}
.rev94-proof-strip b{font-size:clamp(32px,3.2vw,54px);line-height:.88;letter-spacing:-.07em;text-transform:uppercase;}
.rev94-proof-strip span{font-weight:850;color:rgba(17,17,17,.62);line-height:1.2;font-size:17px;}
.rev94-access-stage{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;border-radius:44px;padding:22px;background:linear-gradient(135deg,#111,#32120e);box-shadow:0 40px 100px rgba(0,0,0,.18);transform-style:preserve-3d;}
.rev94-access-step{min-height:clamp(250px,28vw,400px);border-radius:30px;padding:24px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:#fff;display:flex;flex-direction:column;justify-content:space-between;}
.rev94-access-step b{width:42px;height:42px;border-radius:999px;background:#ff3828;color:#fff;display:grid;place-items:center;font-size:12px;font-weight:1000;}
.rev94-access-step strong{font-size:clamp(42px,4.4vw,76px);line-height:.82;letter-spacing:-.08em;text-transform:uppercase;}
.rev94-access-step span{color:rgba(255,255,255,.68);font-weight:850;line-height:1.2;font-size:17px;}
.rev94-drop-picker{margin-top:clamp(42px,7vw,96px);display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;}
.rev94-drop-kit{min-height:360px;border-radius:34px;padding:18px;background:linear-gradient(145deg,var(--tone),#fff 74%);border:1px solid rgba(17,17,17,.1);box-shadow:0 30px 76px rgba(0,0,0,.09);display:flex;flex-direction:column;gap:12px;}
.rev94-drop-kit a{color:#111;text-decoration:none;display:grid;gap:8px;}
.rev94-drop-kit img{height:160px;width:100%;object-fit:contain;border-radius:24px;background:rgba(255,255,255,.48);filter:drop-shadow(0 20px 24px rgba(0,0,0,.12));}
.rev94-drop-kit b{font-size:clamp(30px,3vw,50px);line-height:.88;letter-spacing:-.07em;text-transform:uppercase;}
.rev94-drop-kit span{font-size:13px;letter-spacing:.1em;text-transform:uppercase;font-weight:1000;color:rgba(17,17,17,.58);}
.rev94-drop-kit em{font-style:normal;font-size:28px;font-weight:1000;letter-spacing:-.04em;}
.rev94-drop-kit button{appearance:none;border:0;border-radius:999px;background:#ff3828;color:#fff;min-height:46px;font-weight:1000;margin-top:auto;cursor:pointer;box-shadow:0 18px 36px rgba(255,56,40,.2);}
.rev94-final-clarity{margin-top:clamp(30px,5vw,70px);border-radius:34px;background:#111;color:#fff;padding:clamp(24px,4vw,48px);display:flex;align-items:center;justify-content:space-between;gap:24px;box-shadow:0 34px 88px rgba(0,0,0,.16);}
.rev94-final-clarity b{font-size:clamp(34px,4.4vw,70px);line-height:.86;letter-spacing:-.075em;text-transform:uppercase;}
.rev94-final-clarity span{max-width:520px;color:rgba(255,255,255,.68);font-size:18px;line-height:1.22;font-weight:850;}
@media (hover:hover){.rev94-mood-tile:hover,.rev94-drop-kit:hover,.rev94-proof-strip article:hover{transform:translateY(-6px) rotateX(1.2deg);box-shadow:0 42px 105px rgba(0,0,0,.14);}.rev94-primary:hover{transform:translateY(-2px);}.rev94-secondary:hover{transform:translateY(-2px);background:#111;color:#fff;}}
@media (max-width:1100px){.rev94-hero,.rev94-follow-path{grid-template-columns:1fr;min-height:auto}.rev94-drop-picker,.rev94-proof-strip{grid-template-columns:repeat(2,minmax(0,1fr));}.rev94-proof-board{min-height:520px}.rev94-proof-pack{width:min(60%,380px)}}
@media (max-width:720px){.rev94-shell{padding:78px 16px 98px}.rev94-copy h1{font-size:clamp(50px,15vw,82px);letter-spacing:-.082em}.rev94-lead{font-size:19px}.rev94-lookbook-stage,.rev94-drop-picker,.rev94-proof-strip,.rev94-access-stage{grid-template-columns:1fr}.rev94-mood-tile{min-height:330px}.rev94-mood-tile img{width:min(54%,220px);top:10%}.rev94-follow-path{gap:18px}.rev94-product-rail{min-height:220px;padding:20px;gap:4px}.rev94-product-rail img{height:145px}.rev94-product-rail img:nth-child(3),.rev94-product-rail img:nth-child(4){height:126px}.rev94-proof-board{grid-template-columns:1fr;min-height:660px}.rev94-proof-pack{top:56%;width:min(76%,340px)}.rev94-step-stack{left:18px;right:18px;bottom:18px;transform:none;overflow:auto;justify-content:flex-start}.rev94-final-clarity{display:block}.rev94-final-clarity span{display:block;margin-top:14px}.rev94-actions a,.rev94-actions button{width:100%}.rev94-drop-kit{min-height:unset}.rev94-drop-kit img{height:170px}}
@media (prefers-reduced-motion:reduce){.rev94-mood-tile,.rev94-drop-kit,.rev94-primary,.rev94-secondary{transition:none!important;transform:none!important}}
/* REV94 — CURATED JOURNEY TIGHTENING END */

/* REV95 — DISC REMOVAL + 4K ORDER IMAGE START
   Purpose: remove the abstract layer-map disc and replace it with direct product-led order imagery. */
.rev95-handoff-order{
  position:absolute;
  right:clamp(24px,8vw,150px);
  top:18svh;
  z-index:6;
  width:min(420px,32vw);
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:10px;
  transform-style:preserve-3d;
}
.rev95-handoff-order span{
  min-height:54px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:999px;
  background:rgba(255,255,255,.86);
  border:1px solid rgba(18,15,11,.12);
  color:#15120f;
  font-size:11px;
  letter-spacing:.1em;
  text-transform:uppercase;
  font-weight:1000;
  box-shadow:0 18px 42px rgba(0,0,0,.1);
  backdrop-filter:blur(10px);
}
.rev95-order-board-figure{
  position:relative;
  z-index:2;
  margin:clamp(18px,2vw,28px) 0 0;
  width:100%;
  border-radius:clamp(24px,3vw,42px);
  overflow:hidden;
  border:1px solid rgba(18,15,11,.1);
  box-shadow:0 32px 80px rgba(0,0,0,.12);
  background:#fbf6e8;
  transform-style:preserve-3d;
}
.rev95-order-board-figure img{
  display:block;
  width:100%;
  height:auto;
  aspect-ratio:16/9;
  object-fit:cover;
  object-position:center;
  transform:translateZ(0);
}
.rev95-order-board-figure::after{
  content:"";
  position:absolute;
  inset:0;
  pointer-events:none;
  background:linear-gradient(135deg,rgba(255,255,255,.2),transparent 38%,rgba(17,17,17,.045));
  mix-blend-mode:multiply;
}
.rev90-ordered-kit .rev85-kit-board{
  min-height:auto;
  padding:clamp(24px,2.8vw,42px);
}
.rev90-ordered-kit .rev85-board-head h3{
  max-width:8.2em;
}
.rev90-ordered-kit .rev85-board-head p{
  max-width:24ch;
}
@media(max-width:1180px){
  .rev95-handoff-order{right:24px;width:min(360px,38vw);}
}
@media(max-width:760px){
  .rev95-handoff-order{right:18px;top:auto;bottom:17svh;width:calc(100% - 36px);grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;}
  .rev95-handoff-order span{min-height:40px;font-size:8px;padding-inline:4px;}
  .rev95-order-board-figure{border-radius:24px;margin-top:20px;}
  .rev95-order-board-figure img{aspect-ratio:4/3;object-fit:cover;object-position:center;}
}
/* REV95 — DISC REMOVAL + 4K ORDER IMAGE END */


/* REV96 — MOBILE NAV VISIBILITY SURGICAL REPAIR START
   Purpose: keep the existing primary navigation visible on tablet/mobile using the same nav system. No substitute nav, no fallback drawer, no redesign. */
@media (max-width:1100px){
  .nav{
    height:auto !important;
    min-height:94px;
    display:grid !important;
    grid-template-columns:auto auto 1fr auto;
    grid-template-areas:
      "brand divider spacer order"
      "links links links links";
    align-items:center;
    column-gap:16px;
    row-gap:10px;
    padding-block:13px;
  }
  .brand{grid-area:brand;}
  .nav__divider{grid-area:divider;margin-left:0;}
  .nav__links{
    grid-area:links;
    display:flex !important;
    width:100%;
    max-width:100%;
    margin:0 !important;
    justify-self:start;
    box-sizing:border-box;
    gap:clamp(18px,3vw,30px);
    overflow-x:auto;
    overscroll-behavior-x:contain;
    -webkit-overflow-scrolling:touch;
    scrollbar-width:none;
    padding:2px 2px 8px;
    font-size:13px;
    white-space:nowrap;
  }
  .nav__links::-webkit-scrollbar{display:none;}
  .nav__links a{flex:0 0 auto;}
  .order-btn{grid-area:order;justify-self:end;}
}
@media (max-width:720px){
  .nav{
    min-height:112px;
    grid-template-columns:minmax(0,1fr) auto;
    grid-template-areas:
      "brand order"
      "links links";
    column-gap:12px;
    row-gap:8px;
    padding:12px 14px 10px;
  }
  .nav__divider{display:none;}
  .brand{font-size:26px;}
  .brand small{font-size:7px;padding:4px 8px;}
  .nav > .order-btn{
    width:auto !important;
    min-height:42px;
    padding-inline:14px;
    font-size:12px;
    justify-content:center;
  }
  .nav__links{
    gap:18px;
    padding-bottom:7px;
    font-size:12px;
    font-weight:850;
  }
  .nav__links a:after{bottom:-4px;}
}
@media (max-width:420px){
  .nav{padding-inline:12px;}
  .brand{font-size:23px;}
  .nav > .order-btn{padding-inline:12px;}
  .nav > .order-btn .order-mark{display:none;}
  .nav__links{gap:16px;font-size:11px;}
}
/* REV96 — MOBILE NAV VISIBILITY SURGICAL REPAIR END */


/* REV97 — MOBILE NAV CONTAINMENT SURGICAL REPAIR START
   Purpose: fix the Rev96 mobile nav clipping observed at 390px without creating a second nav, drawer, fallback header, or redesign. */
@media (max-width:720px){
  .nav__links{
    display:grid !important;
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:6px 8px;
    overflow:visible;
    white-space:normal;
    padding:0;
    font-size:11px;
    line-height:1;
  }
  .nav__links a{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    min-height:28px;
    padding:0 3px;
    text-align:center;
    letter-spacing:-.025em;
  }
  .nav__links a:after{
    left:50%;
    right:auto;
    width:24px;
    transform:translateX(-50%);
    bottom:-2px;
  }
}
@media (max-width:420px){
  .nav{
    row-gap:9px;
  }
  .nav__links{
    gap:5px 6px;
    font-size:10px;
  }
  .nav__links a{
    min-height:26px;
    padding-inline:2px;
  }
}
/* REV97 — MOBILE NAV CONTAINMENT SURGICAL REPAIR END */

/* REV98 — RUNTIME DEPENDENCY FALLBACK VISIBILITY START
   Purpose: if GSAP/ScrollTrigger or JavaScript are unavailable, preserve readable content instead of leaving reveal elements hidden. No design replacement, no second renderer. */
html.no-js .reveal,
html.no-gsap .reveal{
  opacity:1 !important;
  transform:none !important;
}
html.no-js .hero-product,
html.no-gsap .hero-product{
  opacity:1 !important;
}
/* REV98 — RUNTIME DEPENDENCY FALLBACK VISIBILITY END */


/* REV127 — LANDING HERO BOTTLE MOTION RESTORE START
   Purpose: keep the landing hero bottles visibly alive even when GSAP or ScrollTrigger is unavailable. This preserves the existing hero composition and adds no alternate renderer, nav, shell, or layout. */
@keyframes rev127HeroBottleIdle{
  0%,100%{transform:translate3d(0,-4px,0) rotate(-.65deg) scale(1);filter:drop-shadow(0 40px 54px rgba(0,0,0,.32)) brightness(1) saturate(1)}
  50%{transform:translate3d(0,-18px,0) rotate(.7deg) scale(1.012);filter:drop-shadow(0 54px 72px rgba(0,0,0,.35)) brightness(1.035) saturate(1.035)}
}
@keyframes rev127HeroOrbitIdle{
  0%,100%{transform:translate3d(-3px,0,0) rotateY(-1.4deg)}
  50%{transform:translate3d(4px,-7px,0) rotateY(1.7deg)}
}
@keyframes rev127HeroShadowIdle{
  0%,100%{transform:translateX(-50%) scaleX(.86);opacity:.52}
  50%{transform:translateX(-50%) scaleX(1.08);opacity:.76}
}
@keyframes rev127SupportBottleTopIdle{
  0%,100%{transform:translate3d(0,0,0) rotate(-17deg) scale(.9)}
  50%{transform:translate3d(7px,18px,0) rotate(-10deg) scale(.94)}
}
@keyframes rev127SupportBottleRightIdle{
  0%,100%{transform:translate3d(0,0,0) rotate(0deg) scale(.78)}
  50%{transform:translate3d(-10px,30px,0) rotate(2.5deg) scale(.82)}
}
@keyframes rev127SupportBottleLowIdle{
  0%,100%{transform:translate3d(0,0,0) rotate(-26deg) scale(.86)}
  50%{transform:translate3d(-5px,-24px,0) rotate(-33deg) scale(.9)}
}
html.no-gsap .hero:not(.is-handoff-active) .product-orbit,
html.no-scrolltrigger .hero:not(.is-handoff-active) .product-orbit{
  animation:rev127HeroOrbitIdle 5.8s ease-in-out infinite;
}
html.no-gsap .hero:not(.is-handoff-active) .hero-product,
html.no-scrolltrigger .hero:not(.is-handoff-active) .hero-product{
  animation:rev127HeroBottleIdle 4.8s ease-in-out infinite;
  opacity:1!important;
}
html.no-gsap .hero:not(.is-handoff-active) .product-shadow,
html.no-scrolltrigger .hero:not(.is-handoff-active) .product-shadow{
  animation:rev127HeroShadowIdle 4.8s ease-in-out infinite;
}
html.no-gsap .hero:not(.is-handoff-active) .float-item--top,
html.no-scrolltrigger .hero:not(.is-handoff-active) .float-item--top{
  animation:rev127SupportBottleTopIdle 6.2s ease-in-out infinite;
}
html.no-gsap .hero:not(.is-handoff-active) .float-item--right,
html.no-scrolltrigger .hero:not(.is-handoff-active) .float-item--right{
  animation:rev127SupportBottleRightIdle 6.8s ease-in-out infinite;
}
html.no-gsap .hero:not(.is-handoff-active) .float-item--low,
html.no-scrolltrigger .hero:not(.is-handoff-active) .float-item--low{
  animation:rev127SupportBottleLowIdle 6.5s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce){
  html.no-gsap .hero:not(.is-handoff-active) .product-orbit,
  html.no-scrolltrigger .hero:not(.is-handoff-active) .product-orbit,
  html.no-gsap .hero:not(.is-handoff-active) .hero-product,
  html.no-scrolltrigger .hero:not(.is-handoff-active) .hero-product,
  html.no-gsap .hero:not(.is-handoff-active) .product-shadow,
  html.no-scrolltrigger .hero:not(.is-handoff-active) .product-shadow,
  html.no-gsap .hero:not(.is-handoff-active) .float-item,
  html.no-scrolltrigger .hero:not(.is-handoff-active) .float-item{
    animation:none!important;
  }
}
/* REV127 — LANDING HERO BOTTLE MOTION RESTORE END */


/* REV128 — HERO COMPOSITION DESIGN QA START
   Purpose: preserve the Rev127 hero motion restore, but make the fallback/offline hero feel authored: bottle visible, mega-type behind product, decoder readable. No new shell, renderer, route, nav, or redesign. */
html.no-gsap .hero,
html.no-scrolltrigger .hero{
  min-height:calc(100svh - 104px);
}
html.no-gsap .hero .mega-type,
html.no-scrolltrigger .hero .mega-type{
  z-index:1;
  opacity:.62;
  filter:saturate(.96);
}
html.no-gsap .hero .stage,
html.no-scrolltrigger .hero .stage{
  z-index:9;
  top:50%;
  width:min(38vw,520px);
  height:min(66vh,680px);
  opacity:1!important;
}
html.no-gsap .hero .product-orbit,
html.no-scrolltrigger .hero .product-orbit{
  opacity:1!important;
}
html.no-gsap .hero .hero-product,
html.no-scrolltrigger .hero .hero-product{
  height:clamp(390px,58vh,650px);
  opacity:1!important;
  filter:drop-shadow(0 44px 62px rgba(0,0,0,.30));
}
html.no-gsap .hero .rev63-hero-decoder,
html.no-scrolltrigger .hero .rev63-hero-decoder{
  z-index:14;
}
@media(max-width:720px){
  html.no-gsap .hero,
  html.no-scrolltrigger .hero{
    min-height:calc(100svh - 76px);
  }
  html.no-gsap .hero .mega-type,
  html.no-scrolltrigger .hero .mega-type{
    opacity:.48;
    transform:translateY(-5svh);
  }
  html.no-gsap .hero .mega-type__small,
  html.no-scrolltrigger .hero .mega-type__small{
    top:104px;
    font-size:64px;
  }
  html.no-gsap .hero .mega-type__top,
  html.no-scrolltrigger .hero .mega-type__top{
    font-size:15vw;
    transform:translateY(-.36em);
  }
  html.no-gsap .hero .mega-type__line,
  html.no-scrolltrigger .hero .mega-type__line{
    font-size:18.5vw;
    line-height:.78;
  }
  html.no-gsap .hero .stage,
  html.no-scrolltrigger .hero .stage{
    top:40%;
    width:82vw;
    height:42vh;
  }
  html.no-gsap .hero .hero-product,
  html.no-scrolltrigger .hero .hero-product{
    height:38vh;
    max-height:340px;
  }
  html.no-gsap .hero .product-shadow,
  html.no-scrolltrigger .hero .product-shadow{
    opacity:.38;
    transform:translateY(4vh) scale(.72);
  }
  html.no-gsap .hero .rev63-hero-decoder,
  html.no-scrolltrigger .hero .rev63-hero-decoder{
    bottom:28px;
    gap:10px;
    background:linear-gradient(180deg,rgba(255,255,255,.30),rgba(255,255,255,.16));
    border-color:rgba(255,255,255,.34);
    box-shadow:0 26px 74px rgba(55,31,4,.18);
  }
}
@media(max-width:360px){
  html.no-gsap .hero .stage,
  html.no-scrolltrigger .hero .stage{top:38%;height:40vh;}
  html.no-gsap .hero .hero-product,
  html.no-scrolltrigger .hero .hero-product{height:35vh;}
}
/* REV128 — HERO COMPOSITION DESIGN QA END */

/* REV130 — RUNTIME CONTROLLER SEDIMENT CLEANUP START
   Purpose: point fallback readability to the single current Rev130 runtime controller while keeping Rev128 hero composition and Rev129 nav consolidation intact. */
html[data-rev130-motion-ready="css-fallback"] .reveal{
  opacity:1!important;
  transform:none!important;
}
html[data-rev130-motion-ready="css-fallback"] .hero-product{
  opacity:1!important;
}
@media (max-width:1100px){
  .nav__links{display:flex!important;}
}
@media (max-width:720px){
  .nav__links{display:grid!important;}
}
/* REV130 — RUNTIME CONTROLLER SEDIMENT CLEANUP END */



/* REV131 — LANDING HERO MOTION WATCHDOG START
   Purpose: if the hero product is visible but runtime motion stalls, force the same approved Rev127 bottle/orbit/shadow idle movement. This is a watchdog repair path only; no redesign or duplicate renderer. */
html.rev131-hero-motion-repair .hero:not(.is-handoff-active) .product-orbit{
  animation:rev127HeroOrbitIdle 5.8s ease-in-out infinite!important;
}
html.rev131-hero-motion-repair .hero:not(.is-handoff-active) .hero-product{
  animation:rev127HeroBottleIdle 4.8s ease-in-out infinite!important;
  opacity:1!important;
}
html.rev131-hero-motion-repair .hero:not(.is-handoff-active) .product-shadow{
  animation:rev127HeroShadowIdle 4.8s ease-in-out infinite!important;
}
html.rev131-hero-motion-repair .hero:not(.is-handoff-active) .float-item--top{
  animation:rev127SupportBottleTopIdle 6.2s ease-in-out infinite!important;
}
html.rev131-hero-motion-repair .hero:not(.is-handoff-active) .float-item--right{
  animation:rev127SupportBottleRightIdle 6.8s ease-in-out infinite!important;
}
html.rev131-hero-motion-repair .hero:not(.is-handoff-active) .float-item--low{
  animation:rev127SupportBottleLowIdle 6.5s ease-in-out infinite!important;
}
@media (prefers-reduced-motion: reduce){
  html.rev131-hero-motion-repair .hero:not(.is-handoff-active) .product-orbit,
  html.rev131-hero-motion-repair .hero:not(.is-handoff-active) .hero-product,
  html.rev131-hero-motion-repair .hero:not(.is-handoff-active) .product-shadow,
  html.rev131-hero-motion-repair .hero:not(.is-handoff-active) .float-item{
    animation:none!important;
  }
}
/* REV131 — LANDING HERO MOTION WATCHDOG END */


/* REV132 — HERO LAYER CODE CLARITY START
   Purpose: make TABAQ's market edge instantly readable: one kit, four numbered product layers. This is one compact education strip inside the existing hero decoder; no new section, route, nav, renderer, or layout system. */
.rev132-layer-code{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:6px;
  width:min(100%,640px);
  margin:2px 0 0;
}
.rev132-layer-code span{
  display:flex;
  flex-direction:column;
  gap:2px;
  min-width:0;
  padding:9px 8px 8px;
  border:1px solid rgba(255,255,255,.38);
  border-radius:15px;
  background:linear-gradient(180deg,rgba(255,255,255,.23),rgba(255,255,255,.12));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.30);
  color:#fffaf0;
  text-transform:uppercase;
  font-size:10px;
  line-height:.92;
  letter-spacing:-.035em;
  backdrop-filter:blur(8px);
}
.rev132-layer-code b{
  font-size:10px;
  letter-spacing:.02em;
  opacity:.72;
}
.rev132-layer-code em{
  font-style:normal;
  margin-top:2px;
  font-size:9px;
  letter-spacing:.06em;
  opacity:.75;
}
@media (max-width:720px){
  .rev132-layer-code{
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:5px;
  }
  .rev132-layer-code span{
    padding:7px 8px;
    border-radius:13px;
    font-size:9px;
  }
  .rev132-layer-code em{font-size:8px;}
}
@media (max-width:360px){
  .rev132-layer-code{display:none;}
}
@media (prefers-reduced-motion:no-preference){
  .rev132-layer-code span{
    animation:rev132LayerPulse 5.6s ease-in-out infinite;
    animation-delay:calc(var(--rev132-layer-index,0) * .16s);
  }
  .rev132-layer-code span:nth-child(1){--rev132-layer-index:0;}
  .rev132-layer-code span:nth-child(2){--rev132-layer-index:1;}
  .rev132-layer-code span:nth-child(3){--rev132-layer-index:2;}
  .rev132-layer-code span:nth-child(4){--rev132-layer-index:3;}
}
@keyframes rev132LayerPulse{
  0%,100%{transform:translate3d(0,0,0);opacity:.92;}
  50%{transform:translate3d(0,-2px,0);opacity:1;}
}
/* REV132 — HERO LAYER CODE CLARITY END */


/* REV133 — HERO FIRST-READ HIERARCHY START
   Purpose: strengthen the first-glance explanation inside the existing hero decoder. This is hierarchy polish only: no new section, route, nav, renderer, or hero replacement. */
.rev133-hero-truth{
  display:inline-flex;
  align-items:center;
  width:max-content;
  max-width:100%;
  margin:-2px 0 -4px;
  padding:8px 12px 7px;
  border:1px solid rgba(18,15,11,.16);
  border-radius:999px;
  background:rgba(255,250,241,.78);
  color:#15110d;
  box-shadow:0 12px 34px rgba(18,15,11,.10), inset 0 1px 0 rgba(255,255,255,.48);
  font-size:clamp(10px,.86vw,12px);
  line-height:1;
  letter-spacing:.11em;
  text-transform:uppercase;
  font-weight:950;
  backdrop-filter:blur(14px);
}
.hero.is-color .rev133-hero-truth{
  border-color:rgba(255,255,255,.28);
  background:rgba(255,255,255,.18);
  color:#fff8e8;
}
.rev69-hero-decode.rev63-hero-decoder h1{
  margin-top:1px!important;
}
.rev69-hero-decode.rev63-hero-decoder .rev61-plain-line{
  max-width:37ch!important;
  color:rgba(21,17,13,.76)!important;
}
.hero.is-color .rev69-hero-decode.rev63-hero-decoder .rev61-plain-line{
  color:rgba(255,250,240,.80)!important;
}
.rev132-layer-code{
  position:relative;
  isolation:isolate;
  gap:7px;
  margin:1px 0 1px;
}
.rev132-layer-code span{
  border-color:rgba(18,15,11,.10);
  background:linear-gradient(180deg,rgba(255,250,241,.82),rgba(255,255,255,.36));
  color:#15110d;
  box-shadow:0 14px 34px rgba(18,15,11,.08), inset 0 1px 0 rgba(255,255,255,.52);
}
.rev132-layer-code b{
  color:#ff4b39;
  opacity:1;
}
.rev132-layer-code em{
  opacity:.70;
}
.hero.is-color .rev132-layer-code span{
  border-color:rgba(255,255,255,.30);
  background:linear-gradient(180deg,rgba(255,255,255,.24),rgba(255,255,255,.10));
  color:#fff8e8;
}
.hero.is-color .rev132-layer-code b{color:#ffe765;}
@media (max-width:720px){
  .rev133-hero-truth{
    padding:7px 10px 6px;
    font-size:9px;
    letter-spacing:.095em;
    margin:-2px 0 -3px;
  }
  .rev69-hero-decode.rev63-hero-decoder h1{
    font-size:clamp(37px,11.2vw,46px)!important;
    line-height:.86!important;
  }
  .rev69-hero-decode.rev63-hero-decoder .rev61-plain-line{
    display:block!important;
    max-width:31ch!important;
    font-size:12px!important;
    line-height:1.34!important;
  }
  .rev132-layer-code{
    grid-template-columns:repeat(4,minmax(0,1fr));
    gap:4px;
  }
  .rev132-layer-code span{
    padding:7px 4px 6px;
    border-radius:12px;
    font-size:8px;
    letter-spacing:-.02em;
  }
  .rev132-layer-code b{font-size:9px;}
  .rev132-layer-code em{font-size:7px;letter-spacing:.045em;}
}
@media (max-width:360px){
  .rev133-hero-truth{font-size:8px;padding:6px 8px;}
  .rev69-hero-decode.rev63-hero-decoder .rev61-plain-line{display:none!important;}
  .rev132-layer-code{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));}
  .rev132-layer-code span{padding:6px 3px;font-size:7px;border-radius:10px;}
  .rev132-layer-code em{display:none;}
}
@media (prefers-reduced-motion:no-preference){
  .rev133-hero-truth{
    animation:rev133TruthBreath 6.8s ease-in-out infinite;
  }
}
@keyframes rev133TruthBreath{
  0%,100%{transform:translate3d(0,0,0);}
  50%{transform:translate3d(0,-1px,0);}
}
/* REV133 — HERO FIRST-READ HIERARCHY END */


/* REV134 — HERO ASSET WATCHDOG + VISUAL QA START
   Purpose: prevent ugly broken-image alt text in the landing hero if a local hero product asset fails to resolve, while preserving the approved bottle stage and motion logic. */
.hero-product.rev134-img-broken{
  opacity:0!important;
}
.product-orbit.rev134-img-broken::before{
  content:"01 LIFT";
  position:absolute;
  left:50%;top:50%;
  transform:translate(-50%,-50%) rotate(-6deg);
  width:min(42vw,210px);
  aspect-ratio:.42;
  border-radius:34px;
  display:grid;
  place-items:center;
  font-family:var(--display,Arial Black,sans-serif);
  font-size:clamp(32px,6vw,74px);
  line-height:.78;
  letter-spacing:-.08em;
  color:rgba(255,255,255,.86);
  text-align:center;
  background:linear-gradient(180deg,rgba(255,255,255,.38),rgba(255,255,255,.12));
  border:1px solid rgba(255,255,255,.46);
  box-shadow:0 34px 80px rgba(16,13,10,.18);
  backdrop-filter:blur(10px);
}
.product-orbit.rev134-img-broken::after{
  content:"Hero asset waiting";
  position:absolute;
  left:50%;top:calc(50% + min(29vw,178px));
  transform:translateX(-50%);
  font-size:9px;
  letter-spacing:.14em;
  text-transform:uppercase;
  font-weight:950;
  color:rgba(255,255,255,.72);
  white-space:nowrap;
}
html:not(.no-js) .hero-product{
  content-visibility:auto;
}
/* REV134 — HERO ASSET WATCHDOG + VISUAL QA END */


/* REV135 — JOYFUL SCROLL CINEMA START
   Purpose: additive Awwwards-grade scrollytelling bridge that makes fragrance layering visible while preserving the approved shell. One system: setup, styles, fallback motion. */
.rev135-scroll-cinema{
  position:relative;
  min-height:220vh;
  padding:clamp(5.5rem,9vw,10rem) clamp(1rem,4vw,3.5rem);
  background:
    radial-gradient(circle at 16% 18%, rgba(255,224,110,.88), transparent 21rem),
    radial-gradient(circle at 86% 16%, rgba(255,112,148,.60), transparent 23rem),
    radial-gradient(circle at 54% 80%, rgba(173,225,194,.70), transparent 25rem),
    #fff7df;
  overflow:clip;
  color:#111;
  isolation:isolate;
}
.rev135-scroll-cinema::before{
  content:"";
  position:absolute;
  inset:3rem clamp(1rem,4vw,3.5rem);
  border:1px solid rgba(20,20,20,.16);
  border-radius:clamp(2rem,5vw,4.75rem);
  pointer-events:none;
  z-index:0;
}
.rev135-scroll-cinema::after{
  content:"LAYER YOUR MOOD";
  position:absolute;
  left:-.06em;
  bottom:-.22em;
  font-family:var(--font-display, 'Archivo Black', system-ui, sans-serif);
  font-size:clamp(5.8rem,19vw,20rem);
  line-height:.75;
  letter-spacing:-.09em;
  color:rgba(20,20,20,.045);
  white-space:nowrap;
  z-index:0;
  pointer-events:none;
}
.rev135-scroll-sticky{
  position:sticky;
  top:clamp(4.8rem,9vh,7rem);
  z-index:1;
  min-height:min(78vh,780px);
  display:grid;
  grid-template-columns:minmax(18rem,.9fr) minmax(18rem,1.15fr) minmax(12rem,.62fr);
  gap:clamp(1rem,3vw,3rem);
  align-items:center;
}
.rev135-scroll-copy{
  max-width:34rem;
}
.rev135-scroll-copy h2{
  margin:.45rem 0 1rem;
  font-family:var(--font-display, 'Archivo Black', system-ui, sans-serif);
  font-size:clamp(3.15rem,7.4vw,8.5rem);
  line-height:.8;
  letter-spacing:-.085em;
  max-width:9ch;
}
.rev135-scroll-copy p{
  max-width:29rem;
  font-size:clamp(1rem,1.55vw,1.35rem);
  line-height:1.45;
  font-weight:800;
  color:rgba(20,20,20,.68);
}
.rev135-scroll-progress{
  position:relative;
  width:min(26rem,100%);
  height:.75rem;
  margin-top:2rem;
  border:1px solid rgba(20,20,20,.22);
  border-radius:999px;
  background:rgba(255,255,255,.58);
  overflow:hidden;
}
.rev135-scroll-progress span{
  position:absolute;
  inset:0 auto 0 0;
  width:25%;
  border-radius:inherit;
  background:linear-gradient(90deg,#111,#ff4b39,#ffd84d);
  transform-origin:left center;
  transform:scaleX(var(--rev135-progress,.18));
}
.rev135-scroll-stage{
  position:relative;
  min-height:clamp(26rem,58vw,43rem);
  border-radius:clamp(2rem,4vw,4rem);
  background:
    linear-gradient(150deg,rgba(255,255,255,.76),rgba(255,255,255,.28)),
    radial-gradient(circle at 50% 52%,rgba(255,255,255,.88),transparent 14rem);
  box-shadow:0 2rem 6rem rgba(30,20,10,.16), inset 0 0 0 1px rgba(20,20,20,.08);
  overflow:hidden;
  transform-style:preserve-3d;
}
.rev135-layer-sun{
  position:absolute;
  width:clamp(13rem,26vw,25rem);
  aspect-ratio:1;
  left:50%;top:50%;
  border-radius:50%;
  transform:translate(-50%,-50%) scale(var(--rev135-sun-scale,1));
  background:conic-gradient(from 60deg,#ffe96e,#ff8ea4,#b79ae4,#9be0bb,#ffe96e);
  filter:blur(.2px) saturate(1.15);
  opacity:.95;
  animation:rev135SunBreath 8s ease-in-out infinite alternate;
}
.rev135-layer-sun::after{
  content:"";
  position:absolute;
  inset:13%;
  border-radius:inherit;
  background:rgba(255,255,255,.72);
  box-shadow:0 0 4rem rgba(255,255,255,.76);
}
.rev135-layer-bottle{
  position:absolute;
  left:50%;top:50%;
  width:clamp(7.5rem,14vw,13rem);
  margin:0;
  transform:translate(-50%,-50%) rotate(var(--rev135-rot,0deg)) translateX(var(--rev135-radius,0px)) rotate(calc(var(--rev135-rot,0deg) * -1)) scale(var(--rev135-scale,.78));
  transform-origin:center;
  opacity:var(--rev135-opacity,.54);
  filter:drop-shadow(0 1.2rem 1.4rem rgba(0,0,0,.16));
  transition:transform .7s cubic-bezier(.2,.8,.2,1), opacity .45s ease, filter .45s ease;
  animation:rev135BottleFloat 5.4s ease-in-out infinite alternate;
  animation-delay:var(--rev135-delay,0s);
  will-change:transform,opacity;
}
.rev135-layer-bottle img{display:block;width:100%;height:auto;}
.rev135-layer-bottle b{
  position:absolute;
  top:.25rem;left:.25rem;
  width:2.4rem;height:2.4rem;
  border-radius:999px;
  display:grid;place-items:center;
  background:#111;color:#fff;
  font-size:.72rem;
  letter-spacing:-.02em;
  z-index:2;
}
.rev135-layer-bottle.is-active{
  --rev135-scale:1;
  --rev135-opacity:1;
  z-index:4;
  filter:drop-shadow(0 2rem 2.4rem rgba(0,0,0,.24));
}
.rev135-layer-bottle--mist{--rev135-rot:-76deg;--rev135-radius:clamp(5rem,12vw,11rem);--rev135-delay:-.8s;}
.rev135-layer-bottle--edp{--rev135-rot:8deg;--rev135-radius:clamp(4rem,10vw,9rem);--rev135-delay:-1.7s;}
.rev135-layer-bottle--oil1{--rev135-rot:94deg;--rev135-radius:clamp(4.5rem,11vw,10rem);--rev135-delay:-2.4s;}
.rev135-layer-bottle--oil2{--rev135-rot:178deg;--rev135-radius:clamp(5rem,12vw,11rem);--rev135-delay:-3.1s;}
.rev135-layer-caption{
  position:absolute;
  left:50%;bottom:clamp(1.4rem,4vw,3rem);
  transform:translateX(-50%);
  padding:.82rem 1.05rem;
  border-radius:999px;
  background:rgba(255,255,255,.78);
  border:1px solid rgba(20,20,20,.12);
  box-shadow:0 1rem 2rem rgba(0,0,0,.09);
  font-size:.76rem;
  font-weight:950;
  text-transform:uppercase;
  letter-spacing:.12em;
  white-space:nowrap;
}
.rev135-scroll-steps{
  list-style:none;
  margin:0;
  padding:0;
  display:grid;
  gap:.75rem;
  align-self:center;
}
.rev135-scroll-steps li{
  display:grid;
  grid-template-columns:2.5rem 1fr;
  gap:.65rem .9rem;
  align-items:center;
  padding:.9rem .95rem;
  border-radius:1.35rem;
  background:rgba(255,255,255,.46);
  border:1px solid rgba(20,20,20,.10);
  color:rgba(20,20,20,.46);
  transition:transform .38s ease,background .38s ease,color .38s ease,border-color .38s ease;
}
.rev135-scroll-steps li b{
  grid-row:1 / span 2;
  display:grid;place-items:center;
  width:2.5rem;height:2.5rem;
  border-radius:999px;
  background:rgba(20,20,20,.08);
  font-size:.75rem;
}
.rev135-scroll-steps li span{font-weight:950;text-transform:uppercase;letter-spacing:.08em;font-size:.82rem;}
.rev135-scroll-steps li em{font-style:normal;font-weight:900;font-size:1.25rem;letter-spacing:-.045em;}
.rev135-scroll-steps li.is-active{
  transform:translateX(-.35rem) scale(1.025);
  background:#111;
  color:#fff;
  border-color:#111;
}
.rev135-scroll-steps li.is-active b{background:#ffdf58;color:#111;}
@keyframes rev135SunBreath{to{transform:translate(-50%,-50%) scale(1.08) rotate(10deg);}}
@keyframes rev135BottleFloat{to{translate:0 -1.05rem;}}
@media (max-width:980px){
  .rev135-scroll-cinema{min-height:auto;padding:4.5rem 1rem;}
  .rev135-scroll-cinema::before{inset:1rem;border-radius:2rem;}
  .rev135-scroll-sticky{position:relative;top:auto;grid-template-columns:1fr;min-height:0;gap:1.2rem;}
  .rev135-scroll-copy h2{font-size:clamp(3.25rem,16vw,6rem);max-width:8ch;}
  .rev135-scroll-stage{min-height:26rem;}
  .rev135-scroll-steps{grid-template-columns:repeat(4,minmax(0,1fr));gap:.45rem;}
  .rev135-scroll-steps li{display:block;padding:.65rem .5rem;text-align:center;border-radius:1rem;}
  .rev135-scroll-steps li b{margin:0 auto .35rem;width:2rem;height:2rem;}
  .rev135-scroll-steps li span{display:block;font-size:.65rem;}
  .rev135-scroll-steps li em{display:block;font-size:.82rem;letter-spacing:-.04em;}
  .rev135-scroll-steps li.is-active{transform:translateY(-.15rem) scale(1.02);}
}
@media (max-width:520px){
  .rev135-scroll-stage{min-height:22rem;border-radius:1.6rem;}
  .rev135-layer-bottle{width:clamp(5.7rem,23vw,7.5rem);}
  .rev135-layer-bottle--mist,.rev135-layer-bottle--edp,.rev135-layer-bottle--oil1,.rev135-layer-bottle--oil2{--rev135-radius:clamp(4.6rem,20vw,6.4rem);}
  .rev135-layer-caption{font-size:.62rem;bottom:1rem;max-width:92%;overflow:hidden;text-overflow:ellipsis;}
  .rev135-scroll-copy p{font-size:.98rem;}
}
@media (prefers-reduced-motion:reduce){
  .rev135-layer-sun,.rev135-layer-bottle{animation:none!important;transition:none!important;}
}
/* REV135 — JOYFUL SCROLL CINEMA END */


/* REV136 — SITEWIDE SCROLL EXPERIENCE START
   Purpose: extend the Rev135 joyful scroll language across every page without redesigning or replacing existing sections. */
:root{
  --rev136-scroll-progress:.04;
  --rev136-active-a:#ffe76a;
  --rev136-active-b:#ff7da2;
  --rev136-ink:#11100c;
}
.rev136-site-scroll-trail{
  position:fixed;
  right:clamp(.7rem,1.6vw,1.25rem);
  top:50%;
  transform:translateY(-50%);
  z-index:60;
  width:3.2rem;
  display:grid;
  justify-items:center;
  gap:.7rem;
  pointer-events:none;
  color:#11100c;
  opacity:.92;
  mix-blend-mode:multiply;
}
.rev136-trail-label{
  writing-mode:vertical-rl;
  text-transform:uppercase;
  letter-spacing:.16em;
  font-size:.62rem;
  font-weight:950;
  background:rgba(255,255,255,.72);
  border:1px solid rgba(17,16,12,.12);
  border-radius:999px;
  padding:.65rem .42rem;
  box-shadow:0 1rem 2rem rgba(17,16,12,.07);
  backdrop-filter:blur(12px);
}
.rev136-trail-track{
  position:relative;
  width:.42rem;
  height:min(34vh,18rem);
  border-radius:999px;
  background:rgba(17,16,12,.10);
  overflow:hidden;
  border:1px solid rgba(17,16,12,.10);
}
.rev136-trail-track i{
  position:absolute;
  left:0;right:0;top:0;
  height:calc(var(--rev136-scroll-progress,.04) * 100%);
  min-height:8%;
  border-radius:inherit;
  background:linear-gradient(180deg,var(--rev136-active-a),var(--rev136-active-b),#11100c);
  box-shadow:0 0 1.2rem rgba(255,126,146,.35);
}
.rev136-trail-dots{
  display:grid;
  gap:.42rem;
}
.rev136-trail-dots b{
  width:2.05rem;
  height:2.05rem;
  display:grid;
  place-items:center;
  border-radius:999px;
  font-size:.62rem;
  font-weight:950;
  letter-spacing:-.02em;
  background:rgba(255,255,255,.66);
  border:1px solid rgba(17,16,12,.14);
  color:rgba(17,16,12,.44);
  box-shadow:0 .75rem 1.5rem rgba(17,16,12,.06);
  transition:transform .35s ease, background .35s ease, color .35s ease;
}
.rev136-trail-dots b.is-active{
  transform:scale(1.08);
  background:#11100c;
  color:#fff;
}
.rev136-page-journey{
  --rev136-local-a:var(--rev136-active-a);
  --rev136-local-b:var(--rev136-active-b);
  position:relative;
  margin:clamp(1.4rem,3.4vw,3rem) 0 clamp(1.8rem,4vw,4rem);
  padding:clamp(1rem,2.4vw,1.75rem);
  border-radius:clamp(1.55rem,3vw,2.6rem);
  border:1px solid rgba(17,16,12,.12);
  background:
    radial-gradient(circle at 12% 20%, color-mix(in srgb,var(--rev136-local-a),transparent 48%), transparent 16rem),
    radial-gradient(circle at 88% 18%, color-mix(in srgb,var(--rev136-local-b),transparent 62%), transparent 17rem),
    rgba(255,255,255,.72);
  box-shadow:0 1.6rem 4rem rgba(31,20,10,.09);
  overflow:hidden;
  isolation:isolate;
}
.rev136-page-journey::before{
  content:"";
  position:absolute;
  inset:auto -8% -42% auto;
  width:min(40vw,18rem);
  aspect-ratio:1;
  border-radius:50%;
  background:conic-gradient(from 90deg,var(--rev136-local-a),var(--rev136-local-b),#b8e9c9,var(--rev136-local-a));
  opacity:.28;
  filter:blur(.2px);
  transform:rotate(calc(var(--rev136-scroll-progress,.04) * 80deg));
  z-index:-1;
}
.rev136-page-journey__head{
  display:grid;
  grid-template-columns:minmax(0,.8fr) minmax(16rem,1.2fr);
  gap:clamp(1rem,3vw,2.5rem);
  align-items:end;
}
.rev136-page-journey__kicker{
  display:inline-flex;
  width:max-content;
  border-radius:999px;
  padding:.48rem .68rem;
  background:#11100c;
  color:#fff;
  font-size:.62rem;
  letter-spacing:.14em;
  text-transform:uppercase;
  font-weight:950;
}
.rev136-page-journey h2{
  margin:.8rem 0 0;
  max-width:9ch;
  font-family:var(--font-display,'Archivo Black',system-ui,sans-serif);
  font-size:clamp(2.7rem,5.8vw,6.9rem);
  line-height:.82;
  letter-spacing:-.085em;
}
.rev136-page-journey p{
  margin:0;
  max-width:44rem;
  color:rgba(17,16,12,.68);
  font-size:clamp(.98rem,1.35vw,1.2rem);
  line-height:1.55;
  font-weight:820;
}
.rev136-page-journey__steps{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:.62rem;
  margin-top:clamp(1rem,2vw,1.5rem);
}
.rev136-page-journey__step{
  min-height:8.2rem;
  border:1px solid rgba(17,16,12,.11);
  border-radius:1.35rem;
  padding:.95rem;
  background:rgba(255,255,255,.56);
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  transform:translateY(.65rem);
  opacity:.74;
  transition:transform .55s cubic-bezier(.2,.8,.2,1), opacity .45s ease, background .45s ease, color .45s ease, border-color .45s ease;
}
.rev136-page-journey.is-inview .rev136-page-journey__step{transform:translateY(0);opacity:1;}
.rev136-page-journey.is-inview .rev136-page-journey__step:nth-child(2){transition-delay:.05s;}
.rev136-page-journey.is-inview .rev136-page-journey__step:nth-child(3){transition-delay:.10s;}
.rev136-page-journey.is-inview .rev136-page-journey__step:nth-child(4){transition-delay:.15s;}
.rev136-page-journey__step b{
  width:2.35rem;height:2.35rem;
  display:grid;place-items:center;
  border-radius:999px;
  background:rgba(17,16,12,.08);
  font-size:.72rem;
  font-weight:950;
}
.rev136-page-journey__step strong{
  display:block;
  margin-top:.7rem;
  font-size:clamp(1.15rem,1.8vw,1.55rem);
  line-height:.95;
  letter-spacing:-.055em;
}
.rev136-page-journey__step span{
  display:block;
  margin-top:.5rem;
  color:rgba(17,16,12,.58);
  font-size:.78rem;
  line-height:1.35;
  font-weight:760;
}
.rev136-page-journey__step.is-active{
  background:#11100c;
  color:#fff;
  border-color:#11100c;
  transform:translateY(-.35rem) scale(1.018);
}
.rev136-page-journey__step.is-active b{background:linear-gradient(135deg,var(--rev136-local-a),var(--rev136-local-b));color:#11100c;}
.rev136-page-journey__step.is-active span{color:rgba(255,255,255,.72);}
.rev136-scroll-reveal{opacity:.001;transform:translateY(1.2rem);transition:opacity .72s ease,transform .72s cubic-bezier(.2,.8,.2,1);}
.rev136-scroll-reveal.is-inview{opacity:1;transform:translateY(0);}
@media(max-width:900px){
  .rev136-site-scroll-trail{
    left:50%;right:auto;top:auto;bottom:.72rem;
    transform:translateX(-50%);
    width:min(92vw,25rem);
    grid-template-columns:auto 1fr auto;
    align-items:center;
    gap:.55rem;
    padding:.42rem .52rem;
    border-radius:999px;
    background:rgba(255,255,255,.74);
    border:1px solid rgba(17,16,12,.12);
    box-shadow:0 1rem 2rem rgba(17,16,12,.12);
    backdrop-filter:blur(14px);
    mix-blend-mode:normal;
  }
  .rev136-trail-label{writing-mode:horizontal-tb;background:transparent;border:0;box-shadow:none;padding:0;font-size:.56rem;}
  .rev136-trail-track{height:.38rem;width:100%;}
  .rev136-trail-track i{height:100%;width:calc(var(--rev136-scroll-progress,.04) * 100%);min-width:8%;}
  .rev136-trail-dots{display:flex;gap:.25rem;}
  .rev136-trail-dots b{width:1.56rem;height:1.56rem;font-size:.52rem;}
  .rev136-page-journey__head{grid-template-columns:1fr;align-items:start;}
  .rev136-page-journey h2{font-size:clamp(2.7rem,14vw,5.2rem);}
  .rev136-page-journey__steps{grid-template-columns:repeat(2,minmax(0,1fr));}
}
@media(max-width:520px){
  .rev136-page-journey{border-radius:1.55rem;padding:.9rem;}
  .rev136-page-journey__steps{grid-template-columns:1fr;gap:.45rem;}
  .rev136-page-journey__step{min-height:auto;border-radius:1rem;padding:.85rem;display:grid;grid-template-columns:2.1rem 1fr;gap:.35rem .75rem;align-items:center;}
  .rev136-page-journey__step strong,.rev136-page-journey__step span{margin:0;}
  .rev136-page-journey__step b{grid-row:1 / span 2;width:2.1rem;height:2.1rem;}
}
@media(prefers-reduced-motion:reduce){
  .rev136-page-journey__step,.rev136-scroll-reveal,.rev136-page-journey::before{transition:none!important;animation:none!important;transform:none!important;}
}
/* REV136 — SITEWIDE SCROLL EXPERIENCE END */


/* REV137 — SITEWIDE SCROLL CHOREOGRAPHY START
   Purpose: make the whole site feel alive while preserving the approved shell, pages, hero and Rev136 journey system.
   Control values: --rev137-progress, --rev137-a, --rev137-b, --rev137-phase.
*/
:root{
  --rev137-progress:.04;
  --rev137-phase:0;
  --rev137-a:var(--rev136-active-a,#ffe76a);
  --rev137-b:var(--rev136-active-b,#ff7da2);
  --rev137-ink:#11100c;
}
.rev137-scroll-atmosphere{
  position:fixed;
  inset:0;
  z-index:7;
  pointer-events:none;
  overflow:hidden;
  opacity:.58;
  mix-blend-mode:multiply;
  contain:layout paint style;
}
.rev137-scroll-atmosphere::before{
  content:"";
  position:absolute;
  inset:auto 8vw 5vh auto;
  width:min(36rem,64vw);
  height:min(36rem,64vw);
  border-radius:44% 56% 50% 50%;
  background:radial-gradient(circle at 38% 34%, color-mix(in srgb,var(--rev137-a),white 18%), transparent 0 30%, color-mix(in srgb,var(--rev137-b),transparent 46%) 31% 56%, transparent 57%);
  filter:blur(5px) saturate(1.08);
  transform:translate3d(calc(var(--rev137-progress) * -18vw), calc(var(--rev137-progress) * -12vh),0) rotate(calc(var(--rev137-progress) * 92deg));
  opacity:.72;
}
.rev137-atmo-orb{
  position:absolute;
  display:block;
  border-radius:999px;
  filter:blur(2px) saturate(1.04);
  transform:translate3d(0,0,0) scale(1);
  transition:background .55s ease,opacity .45s ease;
}
.rev137-atmo-orb--lift{
  width:clamp(8rem,18vw,21rem);
  height:clamp(8rem,18vw,21rem);
  left:-4rem;
  top:18vh;
  background:color-mix(in srgb,var(--rev137-a),transparent 38%);
  transform:translate3d(calc(var(--rev137-progress) * 24vw), calc(var(--rev137-progress) * -8vh),0) scale(calc(1 + var(--rev137-progress) * .18));
}
.rev137-atmo-orb--define{
  width:clamp(7rem,16vw,18rem);
  height:clamp(7rem,16vw,18rem);
  right:7vw;
  top:16vh;
  background:color-mix(in srgb,var(--rev137-b),transparent 48%);
  transform:translate3d(calc(var(--rev137-progress) * -22vw), calc(var(--rev137-progress) * 12vh),0) scale(calc(.9 + var(--rev137-progress) * .22));
}
.rev137-atmo-orb--soften{
  width:clamp(11rem,24vw,27rem);
  height:clamp(5rem,10vw,12rem);
  left:18vw;
  bottom:13vh;
  border-radius:999px 36% 999px 42%;
  background:color-mix(in srgb,#b8e9c9,transparent 50%);
  transform:translate3d(calc(var(--rev137-progress) * 8vw), calc(var(--rev137-progress) * -20vh),0) rotate(calc(var(--rev137-progress) * -18deg));
}
.rev137-atmo-orb--deepen{
  width:clamp(6rem,14vw,17rem);
  height:clamp(6rem,14vw,17rem);
  right:-3rem;
  bottom:20vh;
  background:color-mix(in srgb,#11100c,transparent 78%);
  transform:translate3d(calc(var(--rev137-progress) * -26vw), calc(var(--rev137-progress) * -9vh),0) rotate(calc(var(--rev137-progress) * 38deg));
}
.site,.nav,.drop-time-ribbon,.rev136-site-scroll-trail{position:relative;z-index:11;}
.rev137-page-bridge{
  --rev137-local-a:var(--rev137-a);
  --rev137-local-b:var(--rev137-b);
  position:relative;
  z-index:3;
  margin:clamp(1.25rem,3vw,2.5rem) clamp(1rem,5vw,4.5rem);
  padding:clamp(1rem,2.1vw,1.65rem);
  border:1px solid rgba(17,16,12,.14);
  border-radius:clamp(1.2rem,2.5vw,2rem);
  background:linear-gradient(135deg,rgba(255,255,255,.74),rgba(255,255,255,.42));
  box-shadow:0 1.4rem 4rem rgba(17,16,12,.08);
  backdrop-filter:blur(18px) saturate(1.08);
  display:grid;
  grid-template-columns:minmax(0,1fr) auto;
  gap:1rem;
  align-items:center;
  overflow:hidden;
}
.rev137-page-bridge::before{
  content:"";
  position:absolute;
  inset:-35% auto -35% -12%;
  width:36%;
  border-radius:50%;
  background:radial-gradient(circle,color-mix(in srgb,var(--rev137-local-a),transparent 26%),transparent 70%);
  transform:translateX(calc(var(--rev137-progress) * 26%));
  opacity:.78;
}
.rev137-page-bridge__kicker{
  display:inline-flex;
  width:max-content;
  margin:0 0 .5rem;
  padding:.38rem .66rem;
  border-radius:999px;
  background:#11100c;
  color:#fffaf1;
  font-size:.62rem;
  line-height:1;
  font-weight:950;
  letter-spacing:.12em;
  text-transform:uppercase;
}
.rev137-page-bridge h3{
  position:relative;
  margin:0;
  max-width:13ch;
  font-family:var(--display,Impact,sans-serif);
  font-size:clamp(2.1rem,7.2vw,6.8rem);
  line-height:.82;
  letter-spacing:-.075em;
  text-transform:uppercase;
  color:#11100c;
}
.rev137-page-bridge p{
  position:relative;
  margin:.75rem 0 0;
  max-width:42rem;
  font-size:clamp(.92rem,1.2vw,1.08rem);
  line-height:1.42;
  font-weight:850;
  color:rgba(17,16,12,.72);
}
.rev137-page-bridge__meter{
  position:relative;
  width:min(21rem,38vw);
  min-width:16rem;
  display:grid;
  gap:.66rem;
}
.rev137-page-bridge__flow{
  height:.72rem;
  border-radius:999px;
  background:rgba(17,16,12,.12);
  overflow:hidden;
}
.rev137-page-bridge__flow i{
  display:block;
  height:100%;
  width:calc(max(.1,var(--rev137-progress)) * 100%);
  min-width:12%;
  border-radius:inherit;
  background:linear-gradient(90deg,var(--rev137-local-a),var(--rev137-local-b),#11100c);
  transition:width .16s linear;
}
.rev137-page-bridge__beads{display:grid;grid-template-columns:repeat(4,1fr);gap:.35rem;}
.rev137-page-bridge__beads b{
  min-height:2.35rem;
  border-radius:999px;
  display:grid;
  place-items:center;
  border:1px solid rgba(17,16,12,.15);
  background:rgba(255,255,255,.52);
  color:rgba(17,16,12,.56);
  font-size:.64rem;
  font-weight:950;
  letter-spacing:.08em;
  transition:transform .25s ease, background .25s ease, color .25s ease;
}
.rev137-page-bridge__beads b.is-active{
  transform:translateY(-.18rem) scale(1.06);
  background:#11100c;
  color:#fffaf1;
}
html[data-rev137-scroll-direction="down"] .rev137-page-bridge__beads b.is-active{animation:rev137BeadPulse .9s cubic-bezier(.2,.8,.2,1) both;}
@keyframes rev137BeadPulse{0%{box-shadow:0 0 0 0 color-mix(in srgb,var(--rev137-local-b),transparent 38%);}100%{box-shadow:0 0 0 1.25rem transparent;}}
@media (max-width:820px){
  .rev137-scroll-atmosphere{opacity:.42;}
  .rev137-page-bridge{grid-template-columns:1fr;margin:1rem .9rem;padding:1rem;border-radius:1.25rem;}
  .rev137-page-bridge h3{font-size:clamp(2.4rem,13vw,4.8rem);max-width:10ch;}
  .rev137-page-bridge__meter{width:100%;min-width:0;}
  .rev137-page-bridge__beads b{min-height:2rem;font-size:.56rem;}
}
@media (prefers-reduced-motion:reduce){
  .rev137-scroll-atmosphere::before,.rev137-atmo-orb,.rev137-page-bridge::before,.rev137-page-bridge__beads b.is-active{animation:none!important;transition:none!important;transform:none!important;}
}
/* REV137 — SITEWIDE SCROLL CHOREOGRAPHY END */


/* REV138 — COMMERCE ARCHITECTURE FOUNDATION START
   Purpose: standard catalogue cart + scalable future-drop states. Additive only; preserves Rev137 scroll shell. */
.rev138-cart-trigger{
  border:1px solid rgba(18,18,14,.18);
  background:#fffdf7;
  color:#12120e;
  border-radius:999px;
  padding:10px 14px;
  font:800 12px/1 Inter,system-ui,sans-serif;
  letter-spacing:.02em;
  display:inline-flex;
  gap:8px;
  align-items:center;
  cursor:pointer;
  box-shadow:0 8px 22px rgba(18,18,14,.08);
}
.rev138-cart-trigger b{min-width:22px;height:22px;border-radius:99px;background:#12120e;color:#fff;display:inline-grid;place-items:center;font-size:11px;}
.rev138-commerce-foundation{display:grid;grid-template-columns:1.1fr 1fr 1fr;gap:14px;margin:20px 0 28px;}
.rev138-commerce-mode{border:1px solid rgba(18,18,14,.12);background:rgba(255,255,255,.72);border-radius:28px;padding:22px;box-shadow:0 20px 48px rgba(18,18,14,.08);position:relative;overflow:hidden;}
.rev138-commerce-mode:before{content:"";position:absolute;inset:auto -20% -36% 18%;height:120px;border-radius:999px;filter:blur(24px);opacity:.45;background:linear-gradient(90deg,#ffe76a,#ff7da2,#b8e9c9);}
.rev138-commerce-mode span,.rev138-drop-engine__head span{display:inline-flex;text-transform:uppercase;letter-spacing:.12em;font:900 10px/1 Inter,system-ui,sans-serif;color:rgba(18,18,14,.58);margin-bottom:10px;}
.rev138-commerce-mode h2,.rev138-drop-engine__head h2{font-family:"Archivo Black",Inter,sans-serif;font-size:clamp(24px,3vw,42px);line-height:.9;letter-spacing:-.06em;margin:0 0 12px;}
.rev138-commerce-mode p,.rev138-drop-engine__head p{font:700 14px/1.45 Inter,system-ui,sans-serif;color:rgba(18,18,14,.66);max-width:56ch;margin:0;}
.rev138-add-cart,.rev138-pay-button{cursor:pointer;}
.product-card[data-rev138-standard="true"]:after{content:"STANDARD SALE";position:absolute;top:14px;right:14px;border:1px solid rgba(18,18,14,.16);background:rgba(255,255,255,.78);border-radius:99px;padding:8px 10px;font:900 10px/1 Inter,system-ui,sans-serif;letter-spacing:.08em;backdrop-filter:blur(10px);}
.rev138-cart[hidden]{display:none!important;}
.rev138-cart{position:fixed;z-index:9999;inset:0;background:rgba(18,18,14,.38);backdrop-filter:blur(14px);display:flex;justify-content:flex-end;}
.rev138-cart__shell{width:min(460px,100%);height:100%;background:#fffdf7;color:#12120e;padding:22px;display:flex;flex-direction:column;gap:18px;box-shadow:-24px 0 80px rgba(18,18,14,.22);}
.rev138-cart__head{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;border-bottom:1px solid rgba(18,18,14,.12);padding-bottom:16px;}
.rev138-cart__head span{font:900 10px/1 Inter,system-ui,sans-serif;text-transform:uppercase;letter-spacing:.12em;color:rgba(18,18,14,.58);}
.rev138-cart__head h2{font-family:"Archivo Black",Inter,sans-serif;font-size:36px;line-height:.9;letter-spacing:-.06em;margin:6px 0 0;}
.rev138-cart__head button{border:0;background:#12120e;color:#fff;border-radius:999px;width:38px;height:38px;font-size:24px;line-height:1;cursor:pointer;}
.rev138-cart__items{display:grid;gap:12px;overflow:auto;padding-right:4px;}
.rev138-cart-item{display:grid;grid-template-columns:64px 1fr auto;gap:12px;align-items:center;border:1px solid rgba(18,18,14,.1);border-radius:20px;background:#fff;padding:10px;}
.rev138-cart-item img{width:64px;height:64px;object-fit:contain;border-radius:16px;background:var(--tone,#f5f0e6);}
.rev138-cart-item b{display:block;font:900 15px/1.1 Inter,system-ui,sans-serif;}
.rev138-cart-item span{display:block;font:700 12px/1.25 Inter,system-ui,sans-serif;color:rgba(18,18,14,.58);margin-top:3px;}
.rev138-cart-item__qty{display:flex;align-items:center;gap:8px;margin-top:8px;}
.rev138-cart-item__qty button{width:28px;height:28px;border-radius:99px;border:1px solid rgba(18,18,14,.15);background:#fff;cursor:pointer;font-weight:900;}
.rev138-cart-item__price{font:900 14px/1 Inter,system-ui,sans-serif;white-space:nowrap;}
.rev138-cart__empty{border:1px dashed rgba(18,18,14,.24);border-radius:20px;padding:18px;font:800 14px/1.4 Inter,system-ui,sans-serif;color:rgba(18,18,14,.62);}
.rev138-cart__empty[hidden]{display:none!important;}
.rev138-cart__footer{margin-top:auto;border-top:1px solid rgba(18,18,14,.12);padding-top:16px;display:grid;gap:12px;}
.rev138-cart__total{display:flex;align-items:center;justify-content:space-between;font:900 16px/1 Inter,system-ui,sans-serif;}
.rev138-cart__total strong{font-size:26px;}
.rev138-pay-button{border:0;border-radius:999px;background:#12120e;color:#fff;padding:16px 18px;font:900 13px/1 Inter,system-ui,sans-serif;letter-spacing:.04em;text-transform:uppercase;}
.rev138-cart__footer p{margin:0;color:rgba(18,18,14,.55);font:700 12px/1.4 Inter,system-ui,sans-serif;}
.rev138-drop-engine{margin:20px 0 18px;border-radius:34px;background:#12120e;color:#fff;padding:26px;overflow:hidden;position:relative;}
.rev138-drop-engine:before{content:"";position:absolute;inset:-40% -20% auto 20%;height:220px;background:radial-gradient(circle,#ffe76a,transparent 58%),radial-gradient(circle at 70% 30%,#ff7da2,transparent 54%);filter:blur(16px);opacity:.55;}
.rev138-drop-engine__head{position:relative;z-index:1;max-width:760px;margin-bottom:18px;}
.rev138-drop-engine__head span,.rev138-drop-engine__head p{color:rgba(255,255,255,.72);}
.rev138-drop-engine__head h2{color:#fff;}
.rev138-drop-state-grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;}
.rev138-drop-state-grid article{border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.08);border-radius:22px;padding:16px;min-height:150px;display:flex;flex-direction:column;gap:8px;}
.rev138-drop-state-grid b{font:900 11px/1 Inter,system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#ffe76a;}
.rev138-drop-state-grid strong{font:900 17px/1.05 Inter,system-ui,sans-serif;}
.rev138-drop-state-grid span{font:700 12px/1.35 Inter,system-ui,sans-serif;color:rgba(255,255,255,.68);}
@media (max-width:900px){
  .rev138-commerce-foundation{grid-template-columns:1fr;}
  .rev138-drop-state-grid{grid-template-columns:1fr 1fr;}
  .rev138-cart-trigger{padding:9px 11px;font-size:11px;}
}
@media (max-width:560px){
  .rev138-drop-state-grid{grid-template-columns:1fr;}
  .rev138-cart__shell{padding:18px;}
  .rev138-cart-item{grid-template-columns:56px 1fr;}
  .rev138-cart-item__price{grid-column:2;}
}
@media (prefers-reduced-motion: reduce){.rev138-commerce-mode:before,.rev138-drop-engine:before{filter:none;}}
/* REV138 — COMMERCE ARCHITECTURE FOUNDATION END */


/* REV139 — CINEMATIC SCROLL + COMMERCE POLISH START
   Purpose: deepen section-to-section scroll transitions and polish the Rev138 cart journey without changing shell, renderer, nav, routes, or product architecture.
   Tunables: --rev139-progress, --rev139-scene-y, --rev139-cinema-a, --rev139-cinema-b.
*/
:root{
  --rev139-progress:.03;
  --rev139-scene-y:1.6rem;
  --rev139-cinema-a:#ffe76a;
  --rev139-cinema-b:#ff7da2;
  --rev139-cinema-c:#b8f2d3;
}
.rev139-cinema-layer{
  position:fixed;
  inset:0;
  pointer-events:none;
  z-index:5;
  opacity:.76;
  mix-blend-mode:multiply;
  overflow:hidden;
}
.rev139-cinema-layer::before{
  content:"";
  position:absolute;
  inset:auto -10vw -18vh -10vw;
  height:38vh;
  background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--rev139-cinema-a),transparent 58%),color-mix(in srgb,var(--rev139-cinema-b),transparent 62%),transparent);
  filter:blur(28px);
  transform:translate3d(calc(var(--rev139-progress) * 10vw), calc(var(--rev139-progress) * -12vh),0) skewY(-4deg);
  opacity:.34;
}
.rev139-cinema-ribbon{
  position:absolute;
  width:clamp(14rem,26vw,32rem);
  height:clamp(14rem,26vw,32rem);
  border-radius:44% 56% 62% 38%;
  filter:blur(18px) saturate(1.15);
  opacity:.18;
  transform:translate3d(0,0,0) rotate(calc(var(--rev139-progress) * 90deg));
  transition:opacity .6s ease;
}
.rev139-cinema-ribbon--lift{left:-8vw;top:18vh;background:#ffe76a;transform:translate3d(calc(var(--rev139-progress) * 20vw), calc(var(--rev139-progress) * 10vh),0) rotate(calc(var(--rev139-progress) * 80deg));}
.rev139-cinema-ribbon--define{right:-12vw;top:26vh;background:#ff7da2;transform:translate3d(calc(var(--rev139-progress) * -18vw), calc(var(--rev139-progress) * 8vh),0) rotate(calc(var(--rev139-progress) * -72deg));}
.rev139-cinema-ribbon--soften{left:16vw;bottom:-12vh;background:#b8f2d3;transform:translate3d(calc(var(--rev139-progress) * 8vw), calc(var(--rev139-progress) * -18vh),0) rotate(calc(var(--rev139-progress) * 110deg));}
.rev139-cinema-ribbon--deepen{right:18vw;bottom:-16vh;background:#ffb84d;transform:translate3d(calc(var(--rev139-progress) * -10vw), calc(var(--rev139-progress) * -14vh),0) rotate(calc(var(--rev139-progress) * -96deg));}
.rev139-cinema-scene{
  position:relative;
  isolation:isolate;
  transform:translate3d(0,var(--rev139-scene-y),0) scale(.985);
  opacity:.72;
  transition:opacity .82s ease, transform .94s cubic-bezier(.18,.86,.18,1), filter .82s ease;
  will-change:transform,opacity;
}
.rev139-cinema-scene::before{
  content:"";
  position:absolute;
  inset:-.9rem;
  border-radius:inherit;
  pointer-events:none;
  z-index:-1;
  background:linear-gradient(115deg,color-mix(in srgb,var(--rev139-cinema-a),transparent 82%),transparent 36%,color-mix(in srgb,var(--rev139-cinema-b),transparent 86%));
  opacity:0;
  transform:scale(.98);
  transition:opacity .82s ease, transform .82s ease;
}
.rev139-cinema-scene.is-rev139-active{
  --rev139-scene-y:0rem;
  opacity:1;
  transform:translate3d(0,0,0) scale(1);
  filter:saturate(1.04);
}
.rev139-cinema-scene.is-rev139-active::before{opacity:.82;transform:scale(1);}
.rev139-scene-tag{
  position:absolute;
  right:clamp(.8rem,2vw,1.4rem);
  top:clamp(.8rem,2vw,1.4rem);
  z-index:4;
  display:inline-flex;
  gap:.42rem;
  align-items:center;
  padding:.42rem .62rem;
  border-radius:999px;
  border:1px solid rgba(17,16,12,.14);
  background:rgba(255,250,241,.76);
  box-shadow:0 14px 38px rgba(20,20,20,.10);
  backdrop-filter:blur(12px);
  color:#11100c;
  font-size:.56rem;
  font-weight:950;
  letter-spacing:.16em;
  text-transform:uppercase;
  opacity:0;
  transform:translateY(-.4rem);
  transition:opacity .6s ease, transform .6s ease;
}
.rev139-cinema-scene.is-rev139-active > .rev139-scene-tag{opacity:1;transform:translateY(0);}
.rev139-cart-ritual{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:.45rem;
  margin:.9rem 0 1rem;
  padding:.38rem;
  border:1px solid rgba(17,16,12,.12);
  border-radius:1.25rem;
  background:rgba(255,250,241,.64);
}
.rev139-cart-ritual span{
  display:flex;
  flex-direction:column;
  gap:.18rem;
  align-items:center;
  justify-content:center;
  min-height:3.2rem;
  border-radius:.95rem;
  font-size:.58rem;
  font-weight:950;
  letter-spacing:.08em;
  text-transform:uppercase;
  color:rgba(17,16,12,.56);
  transition:background .3s ease,color .3s ease,transform .3s ease;
}
.rev139-cart-ritual b{font-size:.66rem;letter-spacing:.02em;}
.rev139-cart-ritual span.is-active{
  background:linear-gradient(135deg,#ffdf58,#ff7da2);
  color:#11100c;
  transform:translateY(-.08rem);
}
.rev138-cart__shell{
  transition:transform .72s cubic-bezier(.18,.86,.18,1), box-shadow .72s ease;
}
body.rev139-cart-pulse .rev138-cart__shell{
  transform:translateY(-.35rem) scale(1.012);
  box-shadow:0 34px 110px rgba(255,75,57,.28);
}
body.rev139-pay-ready .rev138-cart__shell{
  box-shadow:0 34px 120px rgba(17,16,12,.24),0 0 0 10px rgba(255,223,88,.18);
}
.rev138-cart-item{
  animation:rev139CartItemIn .48s cubic-bezier(.18,.86,.18,1) both;
}
@keyframes rev139CartItemIn{from{opacity:0;transform:translateY(.65rem) scale(.985);}to{opacity:1;transform:translateY(0) scale(1);}}
@media (max-width:720px){
  .rev139-cinema-layer{opacity:.48;}
  .rev139-scene-tag{display:none;}
  .rev139-cinema-scene{transform:translate3d(0,.7rem,0) scale(.995);}
  .rev139-cinema-scene.is-rev139-active{transform:translate3d(0,0,0) scale(1);}
  .rev139-cart-ritual{grid-template-columns:repeat(4,minmax(0,1fr));gap:.28rem;border-radius:1rem;}
  .rev139-cart-ritual span{min-height:2.7rem;font-size:.47rem;border-radius:.78rem;letter-spacing:.04em;}
}
@media (prefers-reduced-motion:reduce){
  .rev139-cinema-layer{display:none!important;}
  .rev139-cinema-scene,.rev139-cinema-scene::before,.rev139-scene-tag,.rev138-cart__shell,.rev138-cart-item{transition:none!important;animation:none!important;transform:none!important;}
}
/* REV139 — CINEMATIC SCROLL + COMMERCE POLISH END */


/* REV140 — FIRST VIEW SCROLL PURPOSE REPAIR START
   Purpose: repair the Rev136/Rev137/Rev139 scroll utility interaction so it no longer creates a blank first viewport.
   Red-team finding: .rev136-site-scroll-trail was accidentally reset to normal-flow positioning by an old sediment selector, pushing the whole site down.
   Scope: surgical layout repair only; preserves existing nav, router, hero, commerce, cart, and scroll systems.
*/
html[data-rev140-first-view-repair="active"],
html[data-tabaq-revision="140-first-view-scroll-purpose-repair"]{
  --rev140-atmosphere-opacity:.28;
}
.rev136-site-scroll-trail{
  position:fixed!important;
  right:clamp(.7rem,1.6vw,1.25rem)!important;
  left:auto!important;
  top:50%!important;
  bottom:auto!important;
  transform:translateY(-50%)!important;
  z-index:70!important;
  width:3.2rem!important;
  margin:0!important;
}
.site{
  margin-top:0!important;
  transform:none!important;
  z-index:20!important;
}
.nav{
  z-index:120!important;
}
.rev137-scroll-atmosphere,
.rev139-cinema-layer{
  opacity:var(--rev140-atmosphere-opacity,.28)!important;
  z-index:4!important;
}
.rev139-cinema-layer::before{
  opacity:.18!important;
}
.rev139-cinema-ribbon{
  opacity:.10!important;
}
.rev140-scroll-purpose{
  position:fixed;
  right:clamp(4.2rem,5vw,5.4rem);
  top:50%;
  transform:translateY(-50%);
  z-index:71;
  pointer-events:none;
  display:grid;
  gap:.35rem;
  color:#11100c;
  opacity:.88;
  max-width:9rem;
}
.rev140-scroll-purpose strong{
  display:block;
  font:950 .58rem/1 var(--body,Inter,system-ui,sans-serif);
  letter-spacing:.14em;
  text-transform:uppercase;
  background:rgba(255,250,241,.76);
  border:1px solid rgba(17,16,12,.12);
  border-radius:999px;
  padding:.5rem .7rem;
  box-shadow:0 .8rem 1.8rem rgba(17,16,12,.08);
  backdrop-filter:blur(12px);
}
.rev140-scroll-purpose span{
  display:block;
  font:850 .62rem/1.25 var(--body,Inter,system-ui,sans-serif);
  color:rgba(17,16,12,.58);
  padding-inline:.72rem;
}
@media(max-width:900px){
  .rev136-site-scroll-trail{
    left:50%!important;
    right:auto!important;
    top:auto!important;
    bottom:.72rem!important;
    transform:translateX(-50%)!important;
    width:min(92vw,25rem)!important;
    z-index:110!important;
  }
  .rev140-scroll-purpose{display:none!important;}
  .rev137-scroll-atmosphere,.rev139-cinema-layer{opacity:.18!important;}
}
@media(max-width:560px){
  .rev136-site-scroll-trail{bottom:.5rem!important;width:min(94vw,22rem)!important;}
}
@media(prefers-reduced-motion:reduce){
  .rev140-scroll-purpose{display:none!important;}
}

.hero img.rev140-img-failed,
.hero-product.rev134-img-broken{
  opacity:0!important;
  visibility:hidden!important;
  color:transparent!important;
  font-size:0!important;
}
.hero img{
  color:transparent;
  font-size:0;
}
/* REV140 — FIRST VIEW SCROLL PURPOSE REPAIR END */


/* REV141 — SCROLL PURPOSE DIRECTOR START
   Purpose: make the scroll experience visibly purposeful. The director explains the active fragrance layer and why scrolling matters without creating a blank atmospheric gap.
   Scope: fixed guidance + scene emphasis only; preserves existing shell, route, cart, nav, hero and Rev140 first-view repair.
*/
html[data-tabaq-revision="141-scroll-purpose-director"],
html[data-tabaq-revision="142-interactive-layer-controls"]{
  --rev141-phase:0;
  --rev141-a:#ffe76a;
  --rev141-b:#ff7da2;
  --rev141-ink:#11100c;
}
.rev141-scroll-director{
  position:fixed;
  left:clamp(1rem,2.1vw,2.2rem);
  bottom:clamp(1rem,2vw,2rem);
  z-index:92;
  width:min(25rem,calc(100vw - 3rem));
  pointer-events:none;
  display:grid;
  gap:.7rem;
  padding:1rem;
  color:var(--rev141-ink,#11100c);
  background:linear-gradient(135deg,rgba(255,250,241,.86),rgba(255,255,255,.66));
  border:1px solid rgba(17,16,12,.12);
  border-radius:1.45rem;
  box-shadow:0 1.3rem 3.4rem rgba(17,16,12,.14);
  backdrop-filter:blur(18px) saturate(1.25);
  transform:translate3d(0,0,0);
  transition:transform .5s cubic-bezier(.18,.86,.18,1),opacity .5s ease,background .55s ease;
}
.rev141-scroll-director::before{
  content:"";
  position:absolute;
  inset:-1px;
  border-radius:inherit;
  pointer-events:none;
  background:radial-gradient(circle at calc(16% + var(--rev141-phase,0) * 22%) 0%,color-mix(in srgb,var(--rev141-a),transparent 34%),transparent 44%),linear-gradient(90deg,color-mix(in srgb,var(--rev141-a),transparent 84%),color-mix(in srgb,var(--rev141-b),transparent 88%));
  opacity:.78;
  z-index:-1;
}
.rev141-scroll-director__eyebrow{
  display:flex;
  align-items:center;
  gap:.45rem;
  font:950 .58rem/1 var(--body,Inter,system-ui,sans-serif);
  letter-spacing:.16em;
  text-transform:uppercase;
  color:#ff2f1f;
}
.rev141-scroll-director__eyebrow::before{
  content:"";
  width:.58rem;
  height:.58rem;
  border-radius:99px;
  background:var(--rev141-a,#ffe76a);
  box-shadow:0 0 0 .38rem color-mix(in srgb,var(--rev141-a),transparent 74%);
}
.rev141-scroll-director strong{
  display:block;
  font:950 clamp(1.35rem,2.2vw,2.35rem)/.88 var(--display,Archivo Black,Inter,sans-serif);
  letter-spacing:-.06em;
  text-transform:uppercase;
}
.rev141-scroll-director p{
  margin:0;
  max-width:19rem;
  font:750 .78rem/1.32 var(--body,Inter,system-ui,sans-serif);
  color:rgba(17,16,12,.68);
}
.rev141-scroll-director__steps{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:.35rem;
}
.rev141-scroll-director__steps span{
  min-height:2.55rem;
  border-radius:.95rem;
  display:grid;
  place-items:center;
  gap:.12rem;
  padding:.36rem .28rem;
  background:rgba(255,255,255,.55);
  border:1px solid rgba(17,16,12,.10);
  font:900 .54rem/1 var(--body,Inter,system-ui,sans-serif);
  letter-spacing:.04em;
  text-transform:uppercase;
  color:rgba(17,16,12,.44);
  transition:background .38s ease,color .38s ease,transform .38s cubic-bezier(.18,.86,.18,1),box-shadow .38s ease;
}
.rev141-scroll-director__steps b{font-size:.66rem;color:inherit;}
.rev141-scroll-director__steps span.is-active{
  background:#11100c;
  color:#fffaf1;
  transform:translateY(-.18rem);
  box-shadow:0 .7rem 1.5rem rgba(17,16,12,.18);
}
.rev139-cinema-scene.is-rev139-active{
  box-shadow:0 1.2rem 3.2rem rgba(17,16,12,.06);
}
.rev139-cinema-scene.is-rev139-active::after{
  content:"";
  position:absolute;
  inset:auto clamp(1rem,3vw,2.5rem) 0 clamp(1rem,3vw,2.5rem);
  height:3px;
  border-radius:99px;
  background:linear-gradient(90deg,var(--rev141-a,#ffe76a),var(--rev141-b,#ff7da2));
  opacity:.65;
  transform:translateY(1.15rem) scaleX(.68);
  transform-origin:left center;
  animation:rev141SceneLine .9s cubic-bezier(.18,.86,.18,1) both;
}
@keyframes rev141SceneLine{to{transform:translateY(1.15rem) scaleX(1);}}
body.rev138-cart-open .rev141-scroll-director{opacity:.18;transform:translate3d(-.6rem,.6rem,0) scale(.96);}
@media(max-width:900px){
  .rev140-scroll-purpose{display:none!important;}
  .rev141-scroll-director{
    left:50%;
    right:auto;
    bottom:4.35rem;
    width:min(92vw,28rem);
    transform:translateX(-50%);
    padding:.72rem;
    border-radius:1.15rem;
    gap:.48rem;
  }
  .rev141-scroll-director strong{font-size:1.18rem;letter-spacing:-.04em;}
  .rev141-scroll-director p{font-size:.66rem;max-width:none;}
  .rev141-scroll-director__steps{gap:.25rem;}
  .rev141-scroll-director__steps span{min-height:2.1rem;font-size:.44rem;border-radius:.72rem;}
}
@media(max-width:520px){
  .rev141-scroll-director{bottom:4rem;width:min(94vw,23rem);}
  .rev141-scroll-director p{display:none;}
  .rev141-scroll-director__eyebrow{font-size:.48rem;}
  .rev141-scroll-director__steps span{min-height:1.9rem;}
}
@media(prefers-reduced-motion:reduce){
  .rev141-scroll-director,.rev141-scroll-director__steps span,.rev139-cinema-scene.is-rev139-active::after{transition:none!important;animation:none!important;}
}
/* REV141 — SCROLL PURPOSE DIRECTOR END */


/* REV142 — INTERACTIVE LAYER CONTROLS START
   Purpose: remove CTA confusion. Any chip/dot that looks tappable is now a real layer-jump control. */
.rev142-layer-control-set{pointer-events:auto;}
.rev136-trail-dots button,
.rev141-scroll-director__steps button,
.rev137-page-bridge__beads button,
.rev136-page-journey__step[data-rev142-layer-jump]{
  appearance:none;
  border:0;
  font:inherit;
  cursor:pointer;
  -webkit-tap-highlight-color:transparent;
}
.rev136-trail-dots button{
  width:2.05rem;
  height:2.05rem;
  display:grid;
  place-items:center;
  border-radius:999px;
  font-size:.62rem;
  font-weight:950;
  letter-spacing:-.02em;
  background:rgba(255,255,255,.66);
  border:1px solid rgba(17,16,12,.14);
  color:rgba(17,16,12,.44);
  box-shadow:0 .75rem 1.5rem rgba(17,16,12,.06);
  transition:transform .35s ease, background .35s ease, color .35s ease, box-shadow .35s ease;
}
.rev136-trail-dots button.is-active{transform:scale(1.08);background:#11100c;color:#fff;}
.rev136-trail-dots button:hover,
.rev141-scroll-director__steps button:hover,
.rev137-page-bridge__beads button:hover,
.rev136-page-journey__step[data-rev142-layer-jump]:hover{transform:translateY(-.08rem);box-shadow:0 1.05rem 2rem rgba(17,16,12,.12);}
.rev136-trail-dots button:focus-visible,
.rev141-scroll-director__steps button:focus-visible,
.rev137-page-bridge__beads button:focus-visible,
.rev136-page-journey__step[data-rev142-layer-jump]:focus-visible{outline:3px solid #ff3b2c;outline-offset:3px;}
.rev141-scroll-director__steps button{
  min-height:2.4rem;
  border-radius:.85rem;
  padding:.45rem .35rem;
  background:rgba(255,255,255,.70);
  border:1px solid rgba(17,16,12,.10);
  color:rgba(17,16,12,.56);
  font-size:.58rem;
  font-weight:950;
  text-transform:uppercase;
  letter-spacing:.02em;
  transition:transform .28s ease, background .28s ease, color .28s ease, border-color .28s ease;
}
.rev141-scroll-director__steps button b{display:block;font-size:.68rem;letter-spacing:-.03em;}
.rev141-scroll-director__steps button.is-active{background:#11100c;color:#fff;border-color:#11100c;}
.rev137-page-bridge__beads button{
  width:2rem;
  height:2rem;
  border-radius:999px;
  background:rgba(255,255,255,.82);
  border:1px solid rgba(17,16,12,.12);
  color:rgba(17,16,12,.52);
  font-size:.62rem;
  font-weight:950;
  transition:transform .28s ease, background .28s ease, color .28s ease;
}
.rev137-page-bridge__beads button.is-active{background:#11100c;color:#fff;}
.rev136-page-journey__step[data-rev142-layer-jump]{text-align:left;width:100%;}
.rev136-page-journey__step[data-rev142-layer-jump]::after{
  content:'Tap to jump';
  position:absolute;
  right:.9rem;
  top:.8rem;
  font-size:.55rem;
  text-transform:uppercase;
  letter-spacing:.12em;
  font-weight:950;
  color:rgba(17,16,12,.36);
  opacity:0;
  transition:opacity .25s ease;
}
.rev136-page-journey__step[data-rev142-layer-jump]:hover::after,
.rev136-page-journey__step[data-rev142-layer-jump]:focus-visible::after{opacity:1;}
.rev136-page-journey__step.is-active[data-rev142-layer-jump]::after{color:rgba(255,255,255,.58);}
@media (max-width:520px){
  .rev136-trail-dots button{width:1.56rem;height:1.56rem;font-size:.52rem;}
  .rev141-scroll-director__steps button{min-height:2.15rem;font-size:.5rem;padding:.35rem .2rem;}
  .rev136-page-journey__step[data-rev142-layer-jump]::after{display:none;}
}
@media (prefers-reduced-motion:reduce){
  .rev136-trail-dots button,
  .rev141-scroll-director__steps button,
  .rev137-page-bridge__beads button,
  .rev136-page-journey__step[data-rev142-layer-jump]{transition:none!important;}
}
/* REV142 — INTERACTIVE LAYER CONTROLS END */


/* REV143 — PRODUCT UTILITY STUDIO START
   Purpose: Awwwards-level usefulness, not decoration. The interaction helps shoppers choose, understand, and buy a kit. */
.rev143-kit-studio{position:relative;z-index:3;margin:clamp(28px,6vw,84px) auto;max-width:min(1500px,calc(100vw - 40px));padding:clamp(22px,4vw,56px);border:1px solid rgba(18,15,10,.1);border-radius:clamp(34px,4vw,64px);background:linear-gradient(132deg,rgba(255,255,255,.94),rgba(255,249,231,.9) 48%,rgba(255,232,239,.86));box-shadow:0 34px 100px rgba(28,19,11,.12);display:grid;grid-template-columns:minmax(260px,.78fr) minmax(360px,1.05fr) minmax(220px,.58fr);gap:clamp(18px,3vw,42px);align-items:stretch;overflow:hidden;isolation:isolate;}
.rev143-kit-studio::before{content:"";position:absolute;inset:-30% -8% auto auto;width:min(46vw,640px);aspect-ratio:1;border-radius:999px;background:radial-gradient(circle,rgba(255,231,101,.72),rgba(255,120,156,.22) 54%,transparent 72%);filter:blur(8px);opacity:.84;z-index:-1;animation:rev143-breathe 7s ease-in-out infinite alternate;}
.rev143-kit-studio::after{content:"KIT FIT";position:absolute;right:-.1em;bottom:-.18em;font-family:var(--display);font-size:clamp(78px,15vw,260px);line-height:.76;letter-spacing:-.1em;color:rgba(17,14,10,.045);pointer-events:none;z-index:-1;}
.rev143-kit-studio__copy{display:flex;flex-direction:column;justify-content:space-between;gap:18px;min-height:420px;}
.rev143-kit-studio__copy h2{font-family:var(--display);font-size:clamp(58px,7vw,132px);line-height:.78;letter-spacing:-.085em;text-transform:uppercase;margin:.08em 0;max-width:7.4ch;}
.rev143-kit-studio__copy p{font-weight:850;line-height:1.45;color:rgba(16,13,10,.64);max-width:42ch;}
.rev143-kit-studio__actions,.rev143-finder-result__actions{display:flex;flex-wrap:wrap;gap:10px;align-items:center;}
.rev143-studio-cart,.rev143-finder-cart{border:0;border-radius:999px;background:#ff3b2c;color:#fff;font-weight:950;letter-spacing:.02em;padding:13px 18px;box-shadow:0 18px 42px rgba(255,59,44,.28);cursor:pointer;}
.rev143-kit-studio__stage{position:relative;min-height:520px;border-radius:48px;background:linear-gradient(145deg,rgba(255,255,255,.68),rgba(255,255,255,.2));border:1px solid rgba(16,13,10,.1);display:grid;place-items:center;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(255,255,255,.52);}
.rev143-stage-orbit{position:absolute;inset:8%;border-radius:999px;background:radial-gradient(circle,rgba(255,255,255,.2),transparent 56%);}
.rev143-stage-orbit span{position:absolute;border-radius:999px;border:1px solid rgba(16,13,10,.1);background:rgba(255,255,255,.42);backdrop-filter:blur(10px);}
.rev143-stage-orbit span:nth-child(1){width:48%;aspect-ratio:1;left:4%;top:10%;background:rgba(255,231,101,.33);}
.rev143-stage-orbit span:nth-child(2){width:38%;aspect-ratio:1;right:2%;top:18%;background:rgba(255,150,178,.25);}
.rev143-stage-orbit span:nth-child(3){width:30%;aspect-ratio:1;right:18%;bottom:4%;background:rgba(202,246,230,.28);}
.rev143-kit-visual{position:relative;z-index:2;margin:0;width:min(70%,360px);transform:translateY(-10px);filter:drop-shadow(0 36px 42px rgba(17,14,10,.18));transition:transform .45s cubic-bezier(.2,.8,.2,1),filter .45s ease;}
.rev143-kit-visual img{width:100%;display:block;border-radius:18px;object-fit:contain;}
.rev143-kit-studio[data-active-kit="soft-bloom"] .rev143-kit-visual{transform:translateY(-16px) rotate(-1.4deg);}
.rev143-kit-studio[data-active-kit="amber-haze"] .rev143-kit-visual{transform:translateY(-8px) rotate(1.2deg);}
.rev143-kit-studio[data-active-kit="juice-drift"] .rev143-kit-visual{transform:translateY(-18px) rotate(.7deg);}
.rev143-kit-readout{position:absolute;left:20px;right:20px;bottom:20px;z-index:3;border-radius:28px;background:rgba(16,13,10,.92);color:#fff;padding:18px;display:grid;grid-template-columns:auto 1fr auto;gap:8px 14px;align-items:end;box-shadow:0 26px 70px rgba(16,13,10,.24);}
.rev143-kit-readout b{grid-row:1/3;width:42px;height:42px;border-radius:999px;background:#ffe765;color:#100d0a;display:grid;place-items:center;font-size:13px;letter-spacing:.04em;}
.rev143-kit-readout strong{font-family:var(--display);font-size:clamp(30px,4vw,62px);line-height:.78;letter-spacing:-.07em;text-transform:uppercase;}
.rev143-kit-readout span{grid-column:2/3;color:rgba(255,255,255,.68);font-weight:900;text-transform:uppercase;letter-spacing:.14em;font-size:11px;}
.rev143-kit-readout em{font-style:normal;font-weight:950;font-size:18px;color:#ffe765;}
.rev143-layer-stack{position:absolute;left:18px;top:18px;z-index:3;list-style:none;padding:0;margin:0;display:grid;gap:8px;}
.rev143-layer-stack li{display:grid;grid-template-columns:auto auto;gap:0 8px;align-items:center;border-radius:999px;background:rgba(255,255,255,.72);border:1px solid rgba(16,13,10,.08);padding:9px 11px;box-shadow:0 10px 30px rgba(16,13,10,.08);}
.rev143-layer-stack b{font-size:10px}.rev143-layer-stack span{font-size:11px;font-weight:950;text-transform:uppercase}.rev143-layer-stack em{grid-column:2;font-size:10px;font-style:normal;font-weight:850;color:rgba(16,13,10,.56);}
.rev143-kit-choices{display:grid;grid-template-columns:1fr;gap:10px;align-self:center;}
.rev143-kit-choices button{position:relative;text-align:left;border:1px solid rgba(16,13,10,.12);border-radius:26px;background:rgba(255,255,255,.72);padding:18px;min-height:118px;cursor:pointer;overflow:hidden;transition:transform .28s cubic-bezier(.2,.8,.2,1),background .28s ease,border-color .28s ease,box-shadow .28s ease;}
.rev143-kit-choices button::before{content:"";position:absolute;inset:auto -12% -55% auto;width:70%;aspect-ratio:1;border-radius:50%;background:var(--rev143-tone,#d9f5e8);opacity:.58;filter:blur(18px);}
.rev143-kit-choices button:nth-child(1){--rev143-tone:#d9f5e8}.rev143-kit-choices button:nth-child(2){--rev143-tone:#ffe0ed}.rev143-kit-choices button:nth-child(3){--rev143-tone:#ffd9a6}.rev143-kit-choices button:nth-child(4){--rev143-tone:#ffec6d}
.rev143-kit-choices button:hover,.rev143-kit-choices button.is-active{transform:translateX(-6px);background:#100d0a;color:#fff;border-color:#100d0a;box-shadow:0 20px 54px rgba(16,13,10,.16);}
.rev143-kit-choices span{display:block;font-size:11px;font-weight:950;text-transform:uppercase;letter-spacing:.18em;color:#ff3b2c;position:relative;z-index:1;}.rev143-kit-choices button.is-active span,.rev143-kit-choices button:hover span{color:#ffe765;}
.rev143-kit-choices b{position:relative;z-index:1;display:block;font-family:var(--display);font-size:clamp(28px,3vw,46px);line-height:.82;letter-spacing:-.06em;text-transform:uppercase;margin:.38em 0;}.rev143-kit-choices em{position:relative;z-index:1;font-style:normal;font-weight:850;color:rgba(16,13,10,.62);}.rev143-kit-choices button.is-active em,.rev143-kit-choices button:hover em{color:rgba(255,255,255,.72);}
.rev143-finder-result{grid-template-columns:minmax(110px,170px) 1fr!important;align-items:center;gap:18px;}
.rev143-finder-result__image{margin:0;border-radius:24px;background:linear-gradient(135deg,rgba(255,255,255,.18),rgba(255,231,101,.18));overflow:hidden;min-height:126px;display:grid;place-items:center;}
.rev143-finder-result__image img{width:100%;max-height:160px;object-fit:contain;filter:drop-shadow(0 18px 24px rgba(0,0,0,.28));}.rev143-finder-result__copy{display:grid;gap:8px;}
@keyframes rev143-breathe{0%{transform:translate3d(0,0,0) scale(1)}100%{transform:translate3d(-5%,6%,0) scale(1.08)}}
@media(max-width:1060px){.rev143-kit-studio{grid-template-columns:1fr;}.rev143-kit-studio__copy{min-height:auto}.rev143-kit-studio__copy h2{max-width:9ch}.rev143-kit-choices{grid-template-columns:repeat(2,minmax(0,1fr));}.rev143-kit-studio__stage{min-height:500px;}.rev143-kit-choices button:hover,.rev143-kit-choices button.is-active{transform:translateY(-4px);}}
@media(max-width:720px){.rev143-kit-studio{max-width:calc(100vw - 24px);border-radius:34px;padding:20px;margin:32px auto;gap:16px}.rev143-kit-studio__copy h2{font-size:clamp(48px,17vw,82px);}.rev143-kit-studio__stage{min-height:440px;border-radius:30px}.rev143-kit-visual{width:min(76%,300px)}.rev143-kit-readout{left:12px;right:12px;bottom:12px;border-radius:22px;grid-template-columns:auto 1fr}.rev143-kit-readout em{grid-column:2}.rev143-layer-stack{left:10px;top:10px;grid-template-columns:repeat(2,max-content);}.rev143-layer-stack li{padding:7px 9px}.rev143-kit-choices{grid-template-columns:1fr}.rev143-kit-choices button{min-height:92px}.rev143-finder-result{grid-template-columns:1fr!important}.rev143-finder-result__image{min-height:180px}.rev143-kit-studio__actions,.rev143-finder-result__actions{display:grid;grid-template-columns:1fr}.rev143-studio-cart,.rev143-finder-cart,.rev143-kit-studio__actions .mini-btn,.rev143-finder-result__actions .mini-btn{width:100%;justify-content:center;text-align:center}}
@media(prefers-reduced-motion:reduce){.rev143-kit-studio::before{animation:none}.rev143-kit-visual,.rev143-kit-choices button{transition:none!important}}
/* REV143 — PRODUCT UTILITY STUDIO END */


/* REV144 — PRODUCT CARD + CART THEATRE START
   Purpose: make product cards feel authored and actionable, and make cart entry feel like a clear buying ritual. No new renderer, nav, route, or cart replacement. */
.product-card[data-rev144-card-ready="true"]{
  position:relative;
  isolation:isolate;
  cursor:pointer;
  transform-style:preserve-3d;
  transition:transform .42s cubic-bezier(.2,.8,.2,1), box-shadow .42s ease, border-color .42s ease, background .42s ease;
  overflow:hidden;
}
.product-card[data-rev144-card-ready="true"]::before{
  content:"";
  position:absolute;
  inset:-22%;
  z-index:-1;
  pointer-events:none;
  background:
    radial-gradient(circle at var(--rev144-x,62%) var(--rev144-y,36%), rgba(255,231,101,.58), transparent 24%),
    radial-gradient(circle at calc(var(--rev144-x,62%) - 24%) calc(var(--rev144-y,36%) + 20%), rgba(255,105,147,.22), transparent 30%),
    linear-gradient(135deg, rgba(255,255,255,.7), rgba(255,255,255,.12));
  opacity:.42;
  filter:blur(1px);
  transition:opacity .35s ease, transform .45s ease;
}
.product-card[data-rev144-card-ready="true"]:hover,
.product-card[data-rev144-card-ready="true"]:focus-within,
.product-card[data-rev144-card-ready="true"].is-rev144-card-focus{
  transform:translate3d(0,-8px,0) rotateX(var(--rev144-tilt-y,0deg)) rotateY(var(--rev144-tilt-x,0deg));
  box-shadow:0 34px 90px rgba(18,14,10,.18);
  border-color:rgba(18,14,10,.18);
}
.product-card[data-rev144-card-ready="true"]:hover::before,
.product-card[data-rev144-card-ready="true"]:focus-within::before,
.product-card[data-rev144-card-ready="true"].is-rev144-card-focus::before{opacity:.86;}
.product-card[data-rev144-card-ready="true"] .rev29-kit-preview,
.product-card[data-rev144-card-ready="true"] img{
  transition:transform .45s cubic-bezier(.2,.8,.2,1), filter .45s ease;
}
.product-card[data-rev144-card-ready="true"]:hover .rev29-kit-preview,
.product-card[data-rev144-card-ready="true"].is-rev144-card-focus .rev29-kit-preview{transform:translate3d(0,-7px,0) scale(1.035);}
.rev144-card-cue{
  position:absolute;
  right:clamp(12px,1.5vw,20px);
  top:clamp(12px,1.5vw,20px);
  z-index:5;
  display:inline-flex;
  align-items:center;
  gap:.42rem;
  border-radius:999px;
  padding:.58rem .78rem;
  background:rgba(255,255,255,.74);
  border:1px solid rgba(18,14,10,.12);
  backdrop-filter:blur(14px);
  color:#11100c;
  font:950 .58rem/1 Inter,system-ui,sans-serif;
  text-transform:uppercase;
  letter-spacing:.11em;
  opacity:0;
  transform:translate3d(0,-8px,0);
  transition:opacity .28s ease, transform .28s ease, background .28s ease, color .28s ease;
  pointer-events:none;
}
.rev144-card-cue::before{content:"";width:.48rem;height:.48rem;border-radius:50%;background:#ff3b2c;box-shadow:0 0 0 .32rem rgba(255,59,44,.12);}
.product-card[data-rev144-card-ready="true"]:hover .rev144-card-cue,
.product-card[data-rev144-card-ready="true"]:focus-within .rev144-card-cue,
.product-card[data-rev144-card-ready="true"].is-rev144-card-focus .rev144-card-cue{opacity:1;transform:translate3d(0,0,0);}
.rev138-add-cart.rev144-just-added,
.rev143-studio-cart.rev144-just-added,
.rev143-finder-cart.rev144-just-added{
  animation:rev144-added-button .82s cubic-bezier(.2,.8,.2,1) both;
}
@keyframes rev144-added-button{
  0%{transform:scale(1)}
  34%{transform:scale(1.045);box-shadow:0 0 0 10px rgba(255,59,44,.12),0 18px 42px rgba(255,59,44,.28)}
  100%{transform:scale(1)}
}
.rev144-cart-theatre{
  position:relative;
  overflow:hidden;
  border-radius:26px;
  border:1px solid rgba(18,14,10,.1);
  background:
    radial-gradient(circle at 88% 12%, var(--rev144-cart-tone, rgba(255,231,101,.55)), transparent 36%),
    linear-gradient(135deg, rgba(255,255,255,.88), rgba(255,247,228,.82));
  padding:16px;
  display:grid;
  gap:14px;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.6),0 16px 46px rgba(18,14,10,.08);
  transition:transform .34s cubic-bezier(.2,.8,.2,1), box-shadow .34s ease, background .34s ease;
}
.rev144-cart-theatre[data-rev144-cart-theatre-state="added"]{animation:rev144-cart-stage .82s cubic-bezier(.2,.8,.2,1) both;}
@keyframes rev144-cart-stage{
  0%{transform:translate3d(0,6px,0) scale(.985)}
  44%{transform:translate3d(0,-4px,0) scale(1.012);box-shadow:0 24px 70px rgba(255,59,44,.16)}
  100%{transform:translate3d(0,0,0) scale(1)}
}
.rev144-cart-theatre__copy{display:grid;gap:6px;}
.rev144-cart-theatre__copy span{font:950 .62rem/1 Inter,system-ui,sans-serif;text-transform:uppercase;letter-spacing:.14em;color:#ff3b2c;}
.rev144-cart-theatre__copy strong{font-family:var(--display);font-size:clamp(1.8rem,4vw,2.6rem);line-height:.82;letter-spacing:-.07em;text-transform:uppercase;color:#11100c;}
.rev144-cart-theatre__copy p{margin:0;color:rgba(18,14,10,.62);font:800 .82rem/1.35 Inter,system-ui,sans-serif;}
.rev144-cart-theatre__layers{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;}
.rev144-cart-theatre__layers span{border:1px solid rgba(18,14,10,.1);background:rgba(255,255,255,.72);border-radius:16px;min-height:54px;padding:9px 7px;display:grid;align-content:center;gap:3px;text-align:center;font:950 .58rem/1 Inter,system-ui,sans-serif;text-transform:uppercase;letter-spacing:.06em;color:rgba(18,14,10,.62);}
.rev144-cart-theatre__layers b{color:#11100c;font-size:.72rem;}
body.rev144-cart-theatre-pulse .rev138-cart__shell{box-shadow:-30px 0 110px rgba(255,59,44,.2);}
@media(max-width:720px){
  .rev144-card-cue{opacity:1;position:relative;inset:auto;margin:10px 0 0;transform:none;width:max-content;max-width:100%;}
  .product-card[data-rev144-card-ready="true"]:hover,
  .product-card[data-rev144-card-ready="true"].is-rev144-card-focus{transform:translate3d(0,-4px,0);}
  .rev144-cart-theatre{border-radius:22px;padding:14px;}
  .rev144-cart-theatre__layers{grid-template-columns:repeat(2,minmax(0,1fr));}
  .rev144-cart-theatre__layers span{min-height:46px;}
}
@media(prefers-reduced-motion:reduce){
  .product-card[data-rev144-card-ready="true"],
  .product-card[data-rev144-card-ready="true"]::before,
  .product-card[data-rev144-card-ready="true"] .rev29-kit-preview,
  .rev144-card-cue,
  .rev138-add-cart.rev144-just-added,
  .rev144-cart-theatre{transition:none!important;animation:none!important;transform:none!important;}
}
/* REV144 — PRODUCT CARD + CART THEATRE END */


/* REV145 — SCENT DECISION LENS START
   Purpose: add useful high-design product choice logic. Enhances product understanding and buying confidence without replacing shop/cart systems. */
.rev145-scent-lens{
  position:relative;
  display:grid;
  grid-template-columns:minmax(280px,.82fr) minmax(420px,1.18fr);
  gap:clamp(18px,3vw,46px);
  align-items:stretch;
  margin:clamp(20px,4vw,64px) auto;
  padding:clamp(18px,3vw,42px);
  width:min(1280px,calc(100% - 40px));
  border:1px solid rgba(16,16,16,.10);
  border-radius:34px;
  background:
    radial-gradient(circle at 8% 10%,rgba(255,232,92,.35),transparent 28%),
    radial-gradient(circle at 96% 12%,rgba(255,149,190,.22),transparent 32%),
    rgba(255,252,246,.82);
  box-shadow:0 28px 80px rgba(18,14,7,.09);
  overflow:hidden;
}
.rev145-scent-lens:before{
  content:"";
  position:absolute;
  inset:auto auto -22% -10%;
  width:34vw;
  height:34vw;
  max-width:440px;
  max-height:440px;
  border-radius:50%;
  background:linear-gradient(135deg,rgba(255,220,86,.28),rgba(255,116,160,.16));
  filter:blur(10px);
  pointer-events:none;
}
.rev145-scent-lens__copy{position:relative;z-index:1;display:flex;flex-direction:column;justify-content:space-between;gap:clamp(18px,3vw,36px)}
.rev145-kicker{display:inline-flex;align-self:flex-start;padding:9px 13px;border-radius:999px;background:#111;color:#fff;font-size:11px;font-weight:900;letter-spacing:.13em;text-transform:uppercase}
.rev145-scent-lens h2{max-width:680px;margin:0;font-size:clamp(48px,7vw,106px);line-height:.82;letter-spacing:-.085em;text-transform:uppercase;color:#0b0b0b}
.rev145-scent-lens p{max-width:520px;margin:0;color:rgba(20,20,20,.68);font-size:clamp(16px,1.7vw,22px);line-height:1.18;font-weight:800;letter-spacing:-.04em}
.rev145-lens-controls{display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:520px}
.rev145-lens-controls button{appearance:none;border:1px solid rgba(16,16,16,.10);background:rgba(255,255,255,.72);border-radius:18px;padding:14px 14px;text-align:left;cursor:pointer;box-shadow:0 10px 28px rgba(15,12,5,.06);transition:transform .24s ease,background .24s ease,border-color .24s ease,color .24s ease}
.rev145-lens-controls button b{display:block;font-size:15px;line-height:1;font-weight:950;letter-spacing:-.045em;color:#111}
.rev145-lens-controls button span{display:block;margin-top:7px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.12em;color:rgba(17,17,17,.5)}
.rev145-lens-controls button:is(:hover,:focus-visible){transform:translateY(-2px);border-color:rgba(255,48,29,.34);outline:none}
.rev145-lens-controls button.is-active{background:#111;color:#fff;border-color:#111;transform:translateY(-2px)}
.rev145-lens-controls button.is-active b,.rev145-lens-controls button.is-active span{color:#fff}
.rev145-scent-lens__stage{position:relative;min-height:520px;border-radius:30px;background:linear-gradient(135deg,var(--rev145-tone, #d9f5e8),rgba(255,255,255,.86) 58%,rgba(255,235,151,.40));border:1px solid rgba(16,16,16,.09);overflow:hidden;display:grid;grid-template-columns:1fr minmax(280px,.92fr);align-items:center;padding:clamp(18px,3vw,32px);box-shadow:inset 0 0 0 1px rgba(255,255,255,.42)}
.rev145-orbit{position:absolute;inset:0;pointer-events:none;opacity:.82}.rev145-orbit i{position:absolute;border:1px solid rgba(0,0,0,.12);border-radius:50%;filter:blur(.1px)}.rev145-orbit i:nth-child(1){width:46%;height:46%;left:5%;top:8%;background:rgba(255,255,255,.22)}.rev145-orbit i:nth-child(2){width:34%;height:34%;right:8%;bottom:9%;background:rgba(255,237,119,.24)}.rev145-orbit i:nth-child(3){width:62%;height:62%;left:26%;top:21%;border-width:24px;border-color:rgba(255,134,170,.16)}
.rev145-kit-image{position:relative;z-index:1;margin:0;display:grid;place-items:center;min-height:420px;transform:translateZ(0)}
.rev145-kit-image img{max-width:min(88%,380px);max-height:390px;object-fit:contain;filter:drop-shadow(0 28px 38px rgba(20,14,5,.22));transition:opacity .22s ease, transform .45s cubic-bezier(.2,.8,.2,1)}
.rev145-scent-lens__stage.is-switching .rev145-kit-image img{opacity:.15;transform:translateY(14px) scale(.97)}
.rev145-kit-panel{position:relative;z-index:2;align-self:center;padding:clamp(18px,2.6vw,28px);border-radius:28px;background:rgba(255,255,255,.74);border:1px solid rgba(12,12,12,.10);box-shadow:0 30px 70px rgba(20,16,6,.12);backdrop-filter:blur(16px)}
.rev145-kit-panel>span{display:inline-flex;margin-bottom:12px;padding:8px 10px;border-radius:999px;background:rgba(0,0,0,.08);font-size:10px;font-weight:950;text-transform:uppercase;letter-spacing:.12em;color:rgba(0,0,0,.72)}
.rev145-kit-panel h3{margin:0 0 10px;font-size:clamp(42px,5.5vw,76px);line-height:.82;letter-spacing:-.082em;text-transform:uppercase;color:#0b0b0b}
.rev145-kit-panel p{font-size:16px;line-height:1.15;color:rgba(18,18,18,.70);max-width:420px;margin:0 0 18px;letter-spacing:-.035em}
.rev145-kit-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:16px 0}.rev145-kit-stats span{min-height:72px;border-radius:16px;border:1px solid rgba(0,0,0,.08);background:rgba(255,255,255,.68);padding:11px}.rev145-kit-stats b{display:block;font-size:10px;text-transform:uppercase;letter-spacing:.11em;color:rgba(0,0,0,.45)}.rev145-kit-stats em{display:block;margin-top:8px;font-size:13px;font-style:normal;font-weight:900;line-height:1.05;color:#111;letter-spacing:-.035em}.rev145-layer-mini{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin:16px 0}.rev145-layer-mini span{padding:10px 8px;border-radius:14px;background:#111;color:#fff;text-align:center;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.06em}.rev145-layer-mini b{display:block;font-size:12px;color:#fff}.rev145-lens-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}.rev145-lens-actions .mini-btn{min-height:44px;display:inline-flex;align-items:center;justify-content:center}
.product-card.rev145-lens-selected{outline:2px solid rgba(255,48,29,.58);outline-offset:5px;box-shadow:0 28px 80px rgba(255,48,29,.14)}
@media (max-width:900px){.rev145-scent-lens{grid-template-columns:1fr;width:min(100% - 24px,720px);padding:18px;border-radius:26px}.rev145-scent-lens h2{font-size:clamp(44px,13vw,78px)}.rev145-scent-lens__stage{grid-template-columns:1fr;min-height:unset;padding:14px}.rev145-kit-image{min-height:260px}.rev145-kit-image img{max-height:260px}.rev145-kit-panel{margin-top:-28px}.rev145-kit-stats{grid-template-columns:1fr}.rev145-layer-mini{grid-template-columns:1fr 1fr}.rev145-lens-controls{grid-template-columns:1fr 1fr}.rev145-lens-controls button{padding:12px}}
@media (max-width:520px){.rev145-scent-lens{width:calc(100% - 16px);margin-block:16px}.rev145-lens-controls{grid-template-columns:1fr}.rev145-kit-panel h3{font-size:44px}.rev145-kit-panel p{font-size:14px}.rev145-lens-actions{flex-direction:column}.rev145-lens-actions .mini-btn{width:100%}}
@media (prefers-reduced-motion:reduce){.rev145-lens-controls button,.rev145-kit-image img{transition:none!important}.product-card.rev145-lens-selected{outline-offset:2px}}
/* REV145 — SCENT DECISION LENS END */


/* REV146 — UPCOMING KIT DROP PREVIEW START
   Purpose: add the uploaded concealed tray kit as a future/upcoming drop, not a standard catalogue product. */
.rev146-coming-drop{
  --rev146-paper:#fff8e9;
  --rev146-ink:#0c0b09;
  --rev146-accent:#ff4b39;
  --rev146-gold:#d7a13c;
  position:relative;
  display:grid;
  grid-template-columns:minmax(0, .92fr) minmax(320px, .78fr);
  gap:clamp(24px,4vw,64px);
  align-items:center;
  width:min(100%, 1360px);
  margin:clamp(26px,5vw,76px) auto;
  padding:clamp(22px,4vw,56px);
  border:1px solid rgba(12,11,9,.12);
  border-radius:34px;
  background:
    radial-gradient(circle at 12% 18%, rgba(255,226,93,.38), transparent 34%),
    radial-gradient(circle at 84% 10%, rgba(255,126,160,.24), transparent 34%),
    linear-gradient(135deg, rgba(255,255,255,.92), rgba(255,246,225,.88));
  box-shadow:0 28px 90px rgba(35,24,12,.11);
  overflow:hidden;
  isolation:isolate;
}
.rev146-coming-drop::before{
  content:"";
  position:absolute;
  inset:14px;
  border:1px solid rgba(215,161,60,.28);
  border-radius:26px;
  pointer-events:none;
  z-index:-1;
}
.rev146-coming-drop::after{
  content:"COMING DROP";
  position:absolute;
  right:clamp(18px,3vw,42px);
  top:clamp(14px,2vw,28px);
  font-size:11px;
  line-height:1;
  letter-spacing:.22em;
  font-weight:900;
  text-transform:uppercase;
  color:rgba(12,11,9,.52);
  padding:10px 12px;
  border-radius:999px;
  background:rgba(255,255,255,.72);
  border:1px solid rgba(12,11,9,.09);
}
.rev146-coming-drop__copy{position:relative;z-index:2;max-width:660px;}
.rev146-kicker{
  display:inline-flex;
  align-items:center;
  gap:8px;
  margin:0 0 16px;
  color:var(--rev146-accent);
  font-size:12px;
  font-weight:900;
  letter-spacing:.2em;
  text-transform:uppercase;
}
.rev146-kicker::before{content:"";width:10px;height:10px;border-radius:999px;background:#ffe76a;box-shadow:0 0 0 8px rgba(255,231,106,.2);}
.rev146-coming-drop h2{
  margin:0;
  font-family:var(--font-display, 'Archivo Black', Inter, sans-serif);
  font-size:clamp(44px,7.6vw,112px);
  line-height:.82;
  letter-spacing:-.075em;
  text-transform:uppercase;
  color:var(--rev146-ink);
  max-width:8.8ch;
}
.rev146-coming-drop p{
  margin:18px 0 0;
  max-width:58ch;
  color:rgba(12,11,9,.68);
  font-weight:800;
  line-height:1.48;
}
.rev146-drop-facts{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:10px;
  list-style:none;
  padding:0;
  margin:24px 0 0;
}
.rev146-drop-facts li,
.rev146-status-strip span{
  display:flex;
  flex-direction:column;
  gap:6px;
  padding:13px 14px;
  border-radius:18px;
  background:rgba(255,255,255,.68);
  border:1px solid rgba(12,11,9,.09);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.8);
}
.rev146-drop-facts b{font-size:11px;text-transform:uppercase;letter-spacing:.16em;color:rgba(12,11,9,.52);}
.rev146-drop-facts span{font-weight:950;color:rgba(12,11,9,.86);}
.rev146-status-strip{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px;}
.rev146-status-strip span{font-size:12px;font-weight:950;text-transform:uppercase;letter-spacing:.1em;}
.rev146-status-strip span.is-active{background:#0c0b09;color:#fff;}
.rev146-coming-drop__actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px;}
.rev146-watch-btn.is-watching{background:#0c0b09!important;color:#fff!important;border-color:#0c0b09!important;}
.rev146-coming-drop__visual{margin:0;display:grid;gap:14px;justify-items:center;align-self:center;}
.rev146-coming-drop__visual figcaption{
  color:rgba(12,11,9,.54);
  font-size:12px;
  font-weight:850;
  letter-spacing:.08em;
  text-transform:uppercase;
  text-align:center;
}
.rev146-hover-kit{
  --rev146-open-y:62%;
  position:relative;
  width:min(100%, 520px);
  aspect-ratio:811/980;
  outline:0;
  line-height:0;
  user-select:none;
  -webkit-user-select:none;
  transform:translateZ(0);
}
.rev146-hover-kit:focus-visible{filter:drop-shadow(0 0 0 rgba(0,0,0,0));}
.rev146-lid-wrap,
.rev146-tray-wrap{
  position:absolute;
  left:0;
  top:0;
  width:100%;
  background:transparent!important;
  will-change:transform;
}
.rev146-lid-wrap{z-index:2;}
.rev146-tray-wrap{
  z-index:1;
  transform:translateY(0);
  transition:transform 620ms cubic-bezier(.22,.61,.36,1);
}
.rev146-hover-kit:hover .rev146-tray-wrap,
.rev146-hover-kit:focus .rev146-tray-wrap,
.rev146-coming-drop.is-kit-open .rev146-tray-wrap{
  transform:translateY(var(--rev146-open-y));
}
.rev146-hover-kit img{
  display:block;
  width:100%;
  height:auto;
  border:0;
  outline:0;
  background:transparent!important;
  box-shadow:none!important;
  filter:none!important;
  pointer-events:none;
  -webkit-user-drag:none;
}
.rev146-coming-drop--calendar{margin-top:clamp(28px,5vw,70px);}
.rev146-coming-drop--calendar .rev146-coming-drop__visual{order:-1;}
@media (max-width:900px){
  .rev146-coming-drop{grid-template-columns:1fr;padding:22px;border-radius:28px;gap:22px;}
  .rev146-coming-drop h2{font-size:clamp(42px,14vw,68px);max-width:8ch;}
  .rev146-drop-facts{grid-template-columns:1fr;}
  .rev146-hover-kit{width:min(92vw,390px);aspect-ratio:811/900;}
  .rev146-coming-drop::after{position:static;justify-self:start;margin-bottom:-6px;grid-row:1;}
}
@media (prefers-reduced-motion: reduce){
  .rev146-tray-wrap{transition:none!important;}
}
/* REV146 — UPCOMING KIT DROP PREVIEW END */


/* REV147 — DROP QUEUE WATCHLIST STUDIO START
   Purpose: create scalable future-drop UI without touching the standard catalogue cart model. */
.rev147-drop-queue-studio,
.rev147-release-board{
  position:relative;
  isolation:isolate;
  margin:clamp(28px,5vw,76px) 0;
  border-radius:36px;
  border:1px solid rgba(18,18,14,.12);
  background:
    radial-gradient(circle at 8% 12%, rgba(255,231,106,.34), transparent 30%),
    radial-gradient(circle at 86% 8%, rgba(255,75,57,.16), transparent 32%),
    linear-gradient(135deg, rgba(255,255,255,.88), rgba(255,248,235,.92));
  box-shadow:0 28px 92px rgba(18,18,14,.10);
  overflow:hidden;
}
.rev147-drop-queue-studio{padding:clamp(22px,3.4vw,42px);}
.rev147-release-board{padding:clamp(22px,3.4vw,46px);background:#12120e;color:#fff;}
.rev147-drop-queue-studio::before,
.rev147-release-board::before{content:"";position:absolute;inset:14px;border:1px solid rgba(18,18,14,.08);border-radius:28px;pointer-events:none;z-index:-1;}
.rev147-release-board::before{border-color:rgba(255,255,255,.14);}
.rev147-drop-queue-studio__head,
.rev147-release-board__head{position:relative;z-index:1;max-width:880px;margin-bottom:clamp(18px,3vw,30px);}
.rev147-kicker{display:inline-flex;align-items:center;gap:8px;margin:0 0 14px;color:#ff4b39;font-size:11px;font-weight:950;letter-spacing:.2em;text-transform:uppercase;}
.rev147-kicker::before{content:"";width:10px;height:10px;border-radius:999px;background:#ffe76a;box-shadow:0 0 0 8px rgba(255,231,106,.2);}
.rev147-release-board .rev147-kicker{color:#ffe76a;}
.rev147-drop-queue-studio h2,
.rev147-release-board h2{font-family:"Archivo Black",Inter,system-ui,sans-serif;font-size:clamp(42px,6vw,92px);line-height:.84;letter-spacing:-.075em;text-transform:uppercase;margin:0;color:#111;}
.rev147-release-board h2{color:#fff;max-width:10ch;}
.rev147-drop-queue-studio__head p,
.rev147-release-board__head p{margin:16px 0 0;font:800 15px/1.46 Inter,system-ui,sans-serif;color:rgba(18,18,14,.66);max-width:70ch;}
.rev147-release-board__head p{color:rgba(255,255,255,.66);}
.rev147-queue-grid{position:relative;z-index:1;display:grid;grid-template-columns:1.35fr repeat(3,minmax(0,1fr));gap:14px;align-items:stretch;}
.rev147-queue-card{position:relative;display:flex;flex-direction:column;gap:14px;min-height:260px;padding:18px;border-radius:28px;border:1px solid rgba(18,18,14,.10);background:rgba(255,255,255,.72);box-shadow:0 22px 54px rgba(18,18,14,.08);overflow:hidden;}
.rev147-queue-card::after{content:attr(data-rev147-drop-state);position:absolute;right:16px;bottom:14px;font:950 10px/1 Inter,system-ui,sans-serif;text-transform:uppercase;letter-spacing:.16em;color:rgba(18,18,14,.25);}
.rev147-queue-card--primary{display:grid;grid-template-columns:minmax(180px,.74fr) 1fr;align-items:center;min-height:360px;background:linear-gradient(135deg,rgba(255,255,255,.82),rgba(255,245,218,.86));}
.rev147-queue-card__media{align-self:stretch;display:grid;place-items:center;border-radius:24px;background:rgba(255,255,255,.58);border:1px solid rgba(18,18,14,.08);min-height:260px;}
.rev147-queue-card__media img{width:min(92%,340px);height:auto;filter:drop-shadow(0 28px 38px rgba(18,18,14,.16));}
.rev147-queue-card h3{margin:0;font-family:"Archivo Black",Inter,system-ui,sans-serif;font-size:clamp(30px,3vw,54px);line-height:.88;letter-spacing:-.07em;text-transform:uppercase;color:#111;}
.rev147-queue-card p{margin:0;color:rgba(18,18,14,.64);font:780 13px/1.45 Inter,system-ui,sans-serif;}
.rev147-state-pill{align-self:flex-start;display:inline-flex;align-items:center;gap:8px;border-radius:999px;padding:9px 11px;border:1px solid rgba(18,18,14,.10);background:#fff;font:950 10px/1 Inter,system-ui,sans-serif;text-transform:uppercase;letter-spacing:.12em;color:#111;}
.rev147-state-pill::before{content:"";width:8px;height:8px;border-radius:999px;background:#ff4b39;}
.rev147-state-pill--teaser::before{background:#b8e9c9;}.rev147-state-pill--upcoming::before{background:#ff4b39;}.rev147-state-pill--fire::before{background:#ffe76a;}.rev147-state-pill--archived::before{background:#9d9d9d;}
.rev147-queue-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px;}
.rev147-watch-btn.is-watching{background:#111!important;color:#fff!important;border-color:#111!important;}
.rev147-queue-card.is-watched{outline:2px solid rgba(255,75,57,.42);outline-offset:3px;}
.rev147-queue-note{position:relative;z-index:1;margin:18px 0 0!important;font:900 12px/1.35 Inter,system-ui,sans-serif;text-transform:uppercase;letter-spacing:.1em;color:rgba(18,18,14,.52)!important;}
.rev147-queue-note b{display:inline-grid;place-items:center;min-width:26px;height:26px;border-radius:99px;background:#111;color:#fff;margin-right:6px;}
.rev147-release-columns{position:relative;z-index:1;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;margin-top:22px;}
.rev147-release-column{min-height:190px;border:1px solid rgba(255,255,255,.14);border-radius:24px;padding:18px;background:rgba(255,255,255,.075);display:flex;flex-direction:column;gap:10px;box-shadow:inset 0 1px 0 rgba(255,255,255,.08);}
.rev147-release-column.is-active{background:linear-gradient(145deg,rgba(255,231,106,.22),rgba(255,75,57,.14));border-color:rgba(255,231,106,.42);}
.rev147-release-column b{font:950 11px/1 Inter,system-ui,sans-serif;text-transform:uppercase;letter-spacing:.14em;color:#ffe76a;}
.rev147-release-column strong{font:950 20px/1.03 Inter,system-ui,sans-serif;letter-spacing:-.04em;color:#fff;}
.rev147-release-column span{font:760 12px/1.38 Inter,system-ui,sans-serif;color:rgba(255,255,255,.66);}
.rev147-release-column em{margin-top:auto;align-self:flex-start;border-radius:999px;padding:8px 10px;background:rgba(255,255,255,.10);font:900 10px/1 Inter,system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.78);font-style:normal;}
.rev147-release-column.is-watched em{background:#ffe76a;color:#12120e;}
@media (max-width:1180px){.rev147-queue-grid{grid-template-columns:1fr 1fr;}.rev147-release-columns{grid-template-columns:1fr 1fr;}.rev147-queue-card--primary{grid-column:1/-1;}}
@media (max-width:720px){.rev147-drop-queue-studio,.rev147-release-board{border-radius:28px;padding:20px}.rev147-queue-grid,.rev147-release-columns,.rev147-queue-card--primary{grid-template-columns:1fr}.rev147-queue-card{min-height:unset}.rev147-queue-card__media{min-height:220px}.rev147-drop-queue-studio h2,.rev147-release-board h2{font-size:clamp(42px,14vw,68px)}}
@media (prefers-reduced-motion:reduce){.rev147-queue-card{transition:none!important;}}
/* REV147 — DROP QUEUE WATCHLIST STUDIO END */


/* REV148 — NEXT DROP GALLERY LIVE TIMER START
   Native integration of uploaded hover-kit donor: extracted tray/lid images live as assets, no iframe/embed fallback. */
.rev148-next-drop-gallery{
  --rev148-paper:#fff8e9;
  --rev148-ink:#11110e;
  --rev148-accent:#ff4b39;
  --rev148-yellow:#ffe76a;
  position:relative;
  z-index:1;
  display:grid;
  grid-template-columns:minmax(0,.95fr) minmax(320px,.72fr);
  gap:clamp(22px,4vw,54px);
  align-items:center;
  margin:clamp(22px,4vw,54px) 0;
  padding:clamp(24px,4vw,54px);
  border-radius:36px;
  border:1px solid rgba(18,18,14,.10);
  background:linear-gradient(135deg,rgba(255,248,233,.96),rgba(255,255,255,.82));
  box-shadow:0 28px 80px rgba(18,18,14,.10);
  overflow:hidden;
}
.rev148-next-drop-gallery::before{
  content:"";
  position:absolute;
  inset:auto -8% -42% auto;
  width:min(56vw,640px);
  aspect-ratio:1;
  border-radius:999px;
  background:radial-gradient(circle,rgba(255,231,106,.58),rgba(255,75,57,.16) 46%,transparent 70%);
  pointer-events:none;
}
.rev148-next-drop-gallery--drop-page{
  background:linear-gradient(145deg,#15150f,#292316 70%,#433219);
  border-color:rgba(255,255,255,.12);
  color:#fff;
}
.rev148-kicker{display:inline-flex;align-items:center;gap:8px;margin:0 0 14px;color:#ff4b39;font-size:11px;font-weight:950;letter-spacing:.2em;text-transform:uppercase;}
.rev148-kicker::before{content:"";width:10px;height:10px;border-radius:999px;background:#ffe76a;box-shadow:0 0 0 8px rgba(255,231,106,.2);}
.rev148-next-drop-gallery--drop-page .rev148-kicker{color:#ffe76a;}
.rev148-next-drop-gallery__copy{position:relative;z-index:2;max-width:760px;}
.rev148-next-drop-gallery h2{font-family:"Archivo Black",Inter,system-ui,sans-serif;font-size:clamp(44px,6.2vw,96px);line-height:.84;letter-spacing:-.08em;text-transform:uppercase;margin:0;color:var(--rev148-ink);max-width:11ch;}
.rev148-next-drop-gallery--drop-page h2{color:#fff;max-width:12ch;}
.rev148-next-drop-gallery p{margin:18px 0 0;color:rgba(18,18,14,.66);font:850 15px/1.48 Inter,system-ui,sans-serif;max-width:68ch;}
.rev148-next-drop-gallery--drop-page p{color:rgba(255,255,255,.68);}
.rev148-next-drop-gallery__stage{position:relative;z-index:2;display:grid;place-items:center;gap:12px;margin:0;min-height:520px;border-radius:34px;background:rgba(255,255,255,.56);border:1px solid rgba(18,18,14,.08);box-shadow:inset 0 1px 0 rgba(255,255,255,.42);overflow:visible;}
.rev148-next-drop-gallery__stage--dark{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.13);}
.rev148-next-drop-gallery__stage figcaption{font:900 11px/1 Inter,system-ui,sans-serif;text-transform:uppercase;letter-spacing:.14em;color:rgba(18,18,14,.48);}
.rev148-next-drop-gallery__stage--dark figcaption{color:rgba(255,255,255,.58);}
.rev148-hover-kit{
  --rev148-kit-size:min(78vw,380px);
  --rev148-tray-travel:96%;
  position:relative;
  display:block;
  width:var(--rev148-kit-size);
  aspect-ratio:1/1.96;
  border:0;
  padding:0;
  margin:0;
  background:transparent;
  overflow:visible;
  cursor:pointer;
  isolation:isolate;
  filter:drop-shadow(0 28px 34px rgba(18,18,14,.18));
}
.rev148-hover-kit--queue{--rev148-kit-size:min(100%,250px);filter:drop-shadow(0 20px 24px rgba(18,18,14,.16));}
.rev148-hover-kit:focus-visible{outline:3px solid #ff4b39;outline-offset:10px;border-radius:28px;}
.rev148-hover-kit__layer{position:absolute;inset:0 auto auto 0;width:100%;aspect-ratio:1;background-repeat:no-repeat;background-position:center top;background-size:100% 100%;pointer-events:none;user-select:none;transform:translate3d(0,0,0);transition:transform .72s cubic-bezier(.2,.8,.18,1),filter .72s cubic-bezier(.2,.8,.18,1);}
.rev148-hover-kit__tray{z-index:1;background-image:url("tabaq_rev148_hover_tray.webp");}
.rev148-hover-kit__lid{z-index:2;background-image:url("tabaq_rev148_hover_lid.webp");}
.rev148-hover-kit:hover .rev148-hover-kit__tray,
.rev148-hover-kit:focus .rev148-hover-kit__tray,
.rev148-hover-kit.is-open .rev148-hover-kit__tray{transform:translate3d(0,var(--rev148-tray-travel),0);}
.rev148-hover-kit:hover .rev148-hover-kit__lid,
.rev148-hover-kit:focus .rev148-hover-kit__lid,
.rev148-hover-kit.is-open .rev148-hover-kit__lid{filter:drop-shadow(0 18px 16px rgba(18,18,14,.12));}
.rev148-live-timer{position:relative;z-index:2;display:grid;gap:12px;margin-top:24px;padding:16px;border-radius:24px;border:1px solid rgba(18,18,14,.10);background:rgba(255,255,255,.62);max-width:520px;}
.rev148-live-timer--dark{border-color:rgba(255,255,255,.15);background:rgba(255,255,255,.085);}
.rev148-live-timer__label{font:950 11px/1 Inter,system-ui,sans-serif;text-transform:uppercase;letter-spacing:.16em;color:rgba(18,18,14,.54);}
.rev148-live-timer--dark .rev148-live-timer__label{color:rgba(255,255,255,.62);}
.rev148-live-timer__grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;}
.rev148-live-timer__grid b{display:grid;gap:5px;place-items:center;min-height:78px;border-radius:18px;background:#111;color:#fff;font-family:"Archivo Black",Inter,system-ui,sans-serif;font-size:clamp(26px,3vw,46px);line-height:.9;letter-spacing:-.06em;}
.rev148-live-timer--dark .rev148-live-timer__grid b{background:#ffe76a;color:#111;}
.rev148-live-timer__grid em{font:950 9px/1 Inter,system-ui,sans-serif;letter-spacing:.13em;text-transform:uppercase;font-style:normal;color:rgba(255,255,255,.62);}
.rev148-live-timer--dark .rev148-live-timer__grid em{color:rgba(18,18,14,.58);}
.rev148-live-timer[data-rev148-countdown-state="live"] .rev148-live-timer__grid b{background:#ff4b39;color:#fff;}
.rev148-gallery-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px;}
.rev148-gallery-note{font-size:12px!important;line-height:1.35!important;color:rgba(18,18,14,.48)!important;}
.rev148-next-drop-gallery--drop-page .rev148-gallery-note{color:rgba(255,255,255,.48)!important;}
.rev148-queue-card__media{overflow:visible;}
.rev147-queue-card.is-watched .rev148-hover-kit{filter:drop-shadow(0 24px 32px rgba(255,75,57,.22));}
@media (max-width:940px){.rev148-next-drop-gallery{grid-template-columns:1fr;}.rev148-next-drop-gallery__stage{min-height:500px;}.rev148-hover-kit{--rev148-kit-size:min(82vw,360px);}}
@media (max-width:620px){.rev148-next-drop-gallery{padding:20px;border-radius:28px;}.rev148-next-drop-gallery h2{font-size:clamp(42px,14vw,66px);}.rev148-live-timer__grid{grid-template-columns:repeat(2,minmax(0,1fr));}.rev148-next-drop-gallery__stage{min-height:430px;}.rev148-hover-kit{--rev148-kit-size:min(82vw,300px);}.rev148-hover-kit--queue{--rev148-kit-size:min(72vw,230px);}}
@media (prefers-reduced-motion:reduce){.rev148-hover-kit__layer{transition-duration:1ms!important;}.rev148-hover-kit:hover .rev148-hover-kit__tray,.rev148-hover-kit:focus .rev148-hover-kit__tray,.rev148-hover-kit.is-open .rev148-hover-kit__tray{transform:translate3d(0,72%,0);}}
/* REV148 — NEXT DROP GALLERY LIVE TIMER END */


/* REV149 — ALTERNATE BOTTLE SET VARIETY PASS START */
.float-item--set{width:clamp(240px,18vw,320px)!important;left:17%!important;top:4%!important;transform:rotate(-11deg)!important;opacity:.98;filter:drop-shadow(0 22px 42px rgba(0,0,0,.16));}
.hero .float-item--set{pointer-events:none!important;cursor:default!important;}
.rev94-product-rail .rev149-product-rail-set{height:clamp(150px,16vw,210px);width:auto;object-fit:contain;filter:drop-shadow(0 28px 34px rgba(0,0,0,.14));}
@media (max-width:1100px){.float-item--set{width:210px!important;left:52%!important;top:8%!important;}}
@media (max-width:720px){.rev94-product-rail .rev149-product-rail-set{height:108px;}}
/* REV149 — ALTERNATE BOTTLE SET VARIETY PASS END */


/* REV150 — DISTRACTION-FREE LAYER PANEL ROUTING START
   The large lower-left layer director is useful on the homepage/layering story, but it distracts on shop/drop/product pages.
   Keep the smaller right-side progress rail, hide only the large director when the active route is commerce/drop/gallery/about/detail. */
html[data-rev150-layer-panel="hidden"] .rev141-scroll-director{
  opacity:0!important;
  visibility:hidden!important;
  pointer-events:none!important;
  transform:translate3d(-1.25rem,1.25rem,0) scale(.92)!important;
}
html[data-rev150-layer-panel="visible"] .rev141-scroll-director{
  visibility:visible;
}
@media (max-width:900px){
  html[data-rev150-layer-panel="visible"] .rev141-scroll-director{
    bottom:.9rem;
    max-width:calc(100vw - 2rem);
  }
}
/* REV150 — DISTRACTION-FREE LAYER PANEL ROUTING END */


/* REV153 — CALM ENTRY + TEXT SAFETY START
   Purpose: remove entry distraction, prevent overlapping text, and keep first-view reading simple.
   Scroll animation systems are not changed here. */
.rev141-scroll-director,
.rev69-drop-activity{
  display:none!important;
  visibility:hidden!important;
  pointer-events:none!important;
}
.tabaq-page[data-page="shop"] .page-hero{
  grid-template-columns:minmax(0,.82fr) minmax(340px,1.18fr)!important;
  gap:clamp(26px,4vw,64px)!important;
  overflow:hidden!important;
}
.tabaq-page[data-page="shop"] .page-hero > div:first-child{
  max-width:min(560px,42vw)!important;
  z-index:10!important;
}
.tabaq-page[data-page="shop"] .page-title{
  max-width:5.8ch!important;
  font-size:clamp(68px,7.2vw,124px)!important;
  line-height:.82!important;
  letter-spacing:-.065em!important;
  text-wrap:balance;
  overflow-wrap:normal;
}
.tabaq-page[data-page="shop"] .page-lead{
  max-width:36ch!important;
  font-size:clamp(15px,1.2vw,18px)!important;
  line-height:1.5!important;
  text-wrap:pretty;
}
.tabaq-page[data-page="shop"] .rev71-shop-facts{
  max-width:520px!important;
}
.tabaq-page[data-page="shop"] .rev61-result,
.tabaq-page[data-page="shop"] .rev138-commerce-mode,
.tabaq-page[data-page="shop"] .rev43-assurance-card,
.tabaq-page[data-page^="product-"] .rev43-detail-card,
.tabaq-page[data-page^="product-"] .rev63-card{
  overflow-wrap:break-word;
  hyphens:auto;
}
.tabaq-page[data-page="shop"] h1,
.tabaq-page[data-page="shop"] h2,
.tabaq-page[data-page="shop"] h3,
.tabaq-page[data-page^="product-"] h1,
.tabaq-page[data-page^="product-"] h2,
.tabaq-page[data-page^="product-"] h3{
  text-wrap:balance;
}
@media(max-width:980px){
  .tabaq-page[data-page="shop"] .page-hero{grid-template-columns:1fr!important;overflow:visible!important;}
  .tabaq-page[data-page="shop"] .page-hero > div:first-child{max-width:none!important;}
  .tabaq-page[data-page="shop"] .page-title{max-width:7ch!important;font-size:clamp(54px,16vw,96px)!important;}
}
@media(max-width:640px){
  .tabaq-page[data-page="shop"] .page-title{font-size:clamp(48px,16vw,82px)!important;line-height:.86!important;}
}
/* REV153 — CALM ENTRY + TEXT SAFETY END */



/* REV154 — KIT CHOOSER SCENT DECISION GUIDE START
   Purpose: plain-English kit choice support without touching scroll animation systems.
   Tunables: card radius, grid min width, copy width, and tone overlays live here. */
.rev154-kit-chooser{
  margin:clamp(18px,3vw,42px) 0 clamp(34px,5vw,74px);
  padding:clamp(18px,3vw,34px);
  border:1px solid rgba(18,18,18,.08);
  border-radius:clamp(28px,3.6vw,52px);
  background:
    radial-gradient(circle at 12% 8%, rgba(255,233,141,.36), transparent 32%),
    radial-gradient(circle at 86% 20%, rgba(255,157,196,.22), transparent 34%),
    rgba(255,252,243,.72);
  box-shadow:0 28px 90px rgba(42,28,13,.08);
  overflow:hidden;
}
.rev154-kit-chooser__intro{
  max-width:760px;
  display:grid;
  gap:10px;
  margin-bottom:clamp(18px,2.6vw,32px);
}
.rev154-kicker{
  color:#ff3f32;
  font-size:11px;
  font-weight:900;
  letter-spacing:.16em;
  text-transform:uppercase;
}
.rev154-kit-chooser h2{
  margin:0;
  max-width:760px;
  font-family:"Archivo Black", Inter, sans-serif;
  font-size:clamp(34px,5.7vw,82px);
  line-height:.9;
  letter-spacing:-.07em;
  text-wrap:balance;
}
.rev154-kit-chooser p{
  margin:0;
  max-width:620px;
  color:rgba(17,17,17,.68);
  font-size:clamp(15px,1.22vw,18px);
  line-height:1.45;
}
.rev154-kit-chooser__grid{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:clamp(10px,1.4vw,18px);
}
.rev154-kit-choice{
  position:relative;
  min-height:238px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:14px;
  padding:22px;
  color:#111;
  text-decoration:none;
  border:1px solid rgba(17,17,17,.08);
  border-radius:30px;
  background:
    radial-gradient(circle at 80% 0%, var(--choice-tone), transparent 56%),
    rgba(255,255,255,.74);
  box-shadow:0 20px 56px rgba(30,22,10,.07);
  transition:transform .28s ease, box-shadow .28s ease, border-color .28s ease;
}
.rev154-kit-choice:hover,
.rev154-kit-choice:focus-visible{
  transform:translateY(-5px);
  border-color:rgba(17,17,17,.2);
  box-shadow:0 30px 76px rgba(30,22,10,.12);
  outline:none;
}
.rev154-kit-choice b{
  max-width:8ch;
  font-family:"Archivo Black", Inter, sans-serif;
  font-size:clamp(28px,3.1vw,48px);
  line-height:.88;
  letter-spacing:-.06em;
  text-transform:uppercase;
}
.rev154-kit-choice span{
  display:inline-flex;
  width:max-content;
  max-width:100%;
  padding:8px 12px;
  border-radius:999px;
  background:rgba(255,255,255,.72);
  color:#ff3f32;
  font-size:11px;
  font-weight:900;
  letter-spacing:.08em;
  text-transform:uppercase;
}
.rev154-kit-choice p{
  max-width:28ch;
  color:rgba(17,17,17,.76);
  font-size:14px;
  line-height:1.35;
}
.rev154-kit-choice em{
  display:block;
  max-width:30ch;
  color:rgba(17,17,17,.48);
  font-size:12px;
  font-style:normal;
  font-weight:800;
  line-height:1.35;
}
.rev154-kit-chooser__note{
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap:10px;
  margin-top:16px;
  padding:14px 16px;
  border-radius:22px;
  background:rgba(255,255,255,.62);
  color:rgba(17,17,17,.68);
  font-size:13px;
  font-weight:800;
}
.rev154-kit-chooser__note b{
  color:#111;
  text-transform:uppercase;
  letter-spacing:.08em;
  font-size:11px;
}
@media (max-width:1080px){
  .rev154-kit-chooser__grid{grid-template-columns:repeat(2,minmax(0,1fr));}
}
@media (max-width:680px){
  .rev154-kit-chooser{border-radius:30px;padding:18px;}
  .rev154-kit-chooser__grid{grid-template-columns:1fr;}
  .rev154-kit-choice{min-height:190px;}
}
/* REV154 — KIT CHOOSER SCENT DECISION GUIDE END */


/* REV155 — PLAIN ENGLISH LAYER WEAR GUIDE START
   Purpose: practical product-use guide; no scroll animation changes. */
.rev155-wear-guide{
  margin:clamp(30px,5vw,72px) auto;
  width:min(1180px,calc(100% - 28px));
  border:1px solid rgba(17,17,17,.09);
  border-radius:clamp(28px,4vw,54px);
  padding:clamp(22px,4vw,54px);
  background:linear-gradient(135deg,rgba(255,255,255,.94),rgba(255,247,231,.82));
  box-shadow:0 34px 94px rgba(42,28,12,.09);
  overflow:hidden;
}
.rev155-wear-guide__head{
  display:grid;
  grid-template-columns:minmax(0,0.88fr) minmax(260px,0.52fr);
  gap:clamp(20px,4vw,56px);
  align-items:end;
  margin-bottom:clamp(22px,4vw,44px);
}
.rev155-kicker{
  display:inline-flex;
  width:max-content;
  margin-bottom:14px;
  color:#ff4b2b;
  font-size:11px;
  font-weight:950;
  letter-spacing:.16em;
  text-transform:uppercase;
}
.rev155-wear-guide h2{
  margin:0;
  max-width:720px;
  font-size:clamp(42px,7.2vw,98px);
  line-height:.86;
  letter-spacing:-.078em;
  text-transform:uppercase;
}
.rev155-wear-guide__head p{
  margin:0;
  max-width:430px;
  color:rgba(17,17,17,.68);
  font-size:clamp(16px,1.45vw,21px);
  line-height:1.34;
  font-weight:760;
}
.rev155-wear-grid{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:12px;
}
.rev155-wear-card{
  min-height:270px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:16px;
  border:1px solid rgba(17,17,17,.09);
  border-radius:30px;
  padding:22px;
  background:rgba(255,255,255,.78);
  box-shadow:0 16px 42px rgba(0,0,0,.055);
}
.rev155-wear-card b{
  width:46px;
  height:46px;
  display:grid;
  place-items:center;
  border-radius:999px;
  background:#111;
  color:#fff;
  font-size:13px;
  letter-spacing:-.03em;
}
.rev155-wear-card h3{
  margin:auto 0 0;
  font-size:clamp(28px,3.2vw,42px);
  line-height:.9;
  letter-spacing:-.065em;
  text-transform:uppercase;
}
.rev155-wear-card p{
  margin:0;
  color:rgba(17,17,17,.72);
  font-size:15px;
  line-height:1.32;
  font-weight:760;
}
.rev155-wear-card small{
  color:rgba(17,17,17,.48);
  font-size:12px;
  line-height:1.25;
  font-weight:850;
}
.rev155-wear-note{
  margin-top:12px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
  border-radius:24px;
  background:#111;
  color:#fff;
  padding:18px 22px;
}
.rev155-wear-note b{
  font-size:13px;
  letter-spacing:.13em;
  text-transform:uppercase;
}
.rev155-wear-note span{
  color:rgba(255,255,255,.78);
  font-size:15px;
  line-height:1.3;
  font-weight:760;
}
@media (max-width:980px){
  .rev155-wear-guide__head{grid-template-columns:1fr;align-items:start;}
  .rev155-wear-grid{grid-template-columns:repeat(2,minmax(0,1fr));}
}
@media (max-width:640px){
  .rev155-wear-guide{width:calc(100% - 20px);border-radius:28px;padding:18px;}
  .rev155-wear-grid{grid-template-columns:1fr;}
  .rev155-wear-card{min-height:210px;border-radius:24px;}
  .rev155-wear-note{display:block;}
  .rev155-wear-note span{display:block;margin-top:8px;}
}
/* REV155 — PLAIN ENGLISH LAYER WEAR GUIDE END */



/* REV156 — SCENT COMPARISON + FIRST-TIME BUYER CLARITY START
   Purpose: compact product comparison that reduces choice stress without touching motion systems. */
.rev156-scent-compare{
  width:min(1180px, calc(100vw - 48px));
  margin:clamp(18px,3vw,42px) auto clamp(42px,6vw,88px);
  padding:clamp(24px,4vw,52px);
  border-radius:clamp(30px,4vw,54px);
  background:linear-gradient(135deg, rgba(255,255,255,.92), rgba(255,248,229,.82));
  border:1px solid rgba(17,17,17,.08);
  box-shadow:0 32px 90px rgba(36,26,10,.08);
}
.rev156-scent-compare__head{
  display:grid;
  grid-template-columns:minmax(0, .92fr) minmax(260px, .6fr);
  gap:24px;
  align-items:end;
  margin-bottom:24px;
}
.rev156-kicker{
  display:inline-flex;
  width:max-content;
  margin-bottom:12px;
  color:#ff3b2f;
  font-size:11px;
  line-height:1;
  letter-spacing:.18em;
  text-transform:uppercase;
  font-weight:900;
}
.rev156-scent-compare__head h2{
  margin:0;
  max-width:720px;
  font-size:clamp(42px,7vw,104px);
  line-height:.82;
  letter-spacing:-.075em;
  text-transform:uppercase;
}
.rev156-scent-compare__head p{
  margin:0;
  max-width:430px;
  font-size:clamp(15px,1.2vw,18px);
  line-height:1.42;
  font-weight:750;
  color:rgba(17,17,17,.68);
}
.rev156-scent-compare__table{
  display:grid;
  gap:8px;
}
.rev156-row{
  display:grid;
  grid-template-columns:.76fr .92fr .72fr 1.28fr;
  gap:12px;
  align-items:center;
  min-height:66px;
  padding:14px 18px;
  border-radius:22px;
  background:rgba(255,255,255,.72);
  border:1px solid rgba(17,17,17,.075);
  color:#111;
  text-decoration:none;
}
.rev156-row--header{
  min-height:auto;
  background:#111;
  color:#fff;
  font-size:11px;
  letter-spacing:.14em;
  text-transform:uppercase;
  font-weight:900;
}
.rev156-row b{
  font-size:clamp(20px,2vw,30px);
  letter-spacing:-.045em;
  text-transform:uppercase;
}
.rev156-row span{
  font-size:14px;
  line-height:1.25;
  font-weight:780;
  color:rgba(17,17,17,.7);
}
.rev156-row--header span{color:#fff;font-size:11px;}
.rev156-row:not(.rev156-row--header):hover,
.rev156-row:not(.rev156-row--header):focus-visible{
  transform:translateY(-2px);
  border-color:rgba(17,17,17,.18);
  box-shadow:0 18px 48px rgba(36,26,10,.1);
  outline:none;
}
.rev156-first-kit-note{
  display:flex;
  gap:14px;
  align-items:center;
  justify-content:space-between;
  margin-top:16px;
  padding:16px 18px;
  border-radius:24px;
  background:rgba(255,232,103,.42);
  border:1px solid rgba(17,17,17,.07);
  font-size:14px;
  line-height:1.35;
  font-weight:780;
}
.rev156-first-kit-note b{
  flex:0 0 auto;
  text-transform:uppercase;
  letter-spacing:.08em;
  font-size:12px;
}
.rev156-first-kit-note span{
  color:rgba(17,17,17,.68);
}
@media (max-width:860px){
  .rev156-scent-compare{width:calc(100vw - 28px);padding:24px 16px;border-radius:32px;}
  .rev156-scent-compare__head{grid-template-columns:1fr;gap:12px;}
  .rev156-scent-compare__head h2{font-size:clamp(38px,13vw,72px);}
  .rev156-row,.rev156-row--header{grid-template-columns:1fr;gap:5px;align-items:start;}
  .rev156-row--header{display:none;}
  .rev156-row{min-height:auto;padding:18px;}
  .rev156-row span{font-size:13px;}
  .rev156-first-kit-note{display:grid;gap:8px;}
}
/* REV156 — SCENT COMPARISON + FIRST-TIME BUYER CLARITY END */


/* REV157 — PLAIN ENGLISH SCENT NOTES DECODER START
   Purpose: compact scent-language guide; no motion-system changes. */
.rev157-notes-decoder{
  width:min(1180px,calc(100vw - 48px));
  margin:22px auto 34px;
  padding:clamp(24px,3.2vw,44px);
  border:1px solid rgba(22,18,14,.1);
  border-radius:42px;
  background:linear-gradient(135deg,rgba(255,255,255,.92),rgba(255,248,234,.78));
  box-shadow:0 28px 82px rgba(49,35,18,.08);
}
.rev157-notes-decoder__head{
  display:grid;
  grid-template-columns:minmax(0,.85fr) minmax(260px,.72fr);
  gap:clamp(18px,4vw,56px);
  align-items:end;
  margin-bottom:22px;
}
.rev157-kicker{
  display:inline-flex;
  width:max-content;
  padding:9px 13px;
  border-radius:999px;
  background:#111;
  color:#fff;
  font-size:11px;
  line-height:1;
  font-weight:950;
  letter-spacing:.13em;
  text-transform:uppercase;
}
.rev157-notes-decoder h2{
  margin:14px 0 0;
  max-width:760px;
  font-size:clamp(44px,6vw,86px);
  line-height:.86;
  letter-spacing:-.075em;
}
.rev157-notes-decoder__head p{
  margin:0;
  max-width:420px;
  font-size:clamp(15px,1.35vw,18px);
  line-height:1.35;
  font-weight:760;
  color:rgba(20,16,12,.68);
}
.rev157-notes-decoder__grid{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:12px;
}
.rev157-note-card{
  min-height:210px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding:20px;
  border:1px solid rgba(20,16,12,.1);
  border-radius:30px;
  background:linear-gradient(145deg,rgba(255,255,255,.9),var(--note-tone));
}
.rev157-note-card b{
  display:block;
  font-size:clamp(28px,3vw,44px);
  line-height:.88;
  letter-spacing:-.06em;
}
.rev157-note-card span{
  display:block;
  margin-top:20px;
  font-size:14px;
  line-height:1.22;
  font-weight:920;
  color:#16120f;
}
.rev157-note-card p{
  margin:10px 0 0;
  font-size:13px;
  line-height:1.35;
  font-weight:720;
  color:rgba(20,16,12,.66);
}
.rev157-notes-decoder__rule{
  margin-top:14px;
  display:flex;
  gap:14px;
  align-items:center;
  justify-content:space-between;
  padding:16px 18px;
  border-radius:24px;
  background:#111;
  color:#fff;
}
.rev157-notes-decoder__rule b{font-size:12px;letter-spacing:.13em;text-transform:uppercase;}
.rev157-notes-decoder__rule span{font-size:14px;line-height:1.3;font-weight:760;color:rgba(255,255,255,.76);}
@media(max-width:980px){
  .rev157-notes-decoder__head{grid-template-columns:1fr;}
  .rev157-notes-decoder__grid{grid-template-columns:repeat(2,minmax(0,1fr));}
}
@media(max-width:640px){
  .rev157-notes-decoder{width:calc(100vw - 28px);padding:20px 16px;border-radius:30px;}
  .rev157-notes-decoder__grid{grid-template-columns:1fr;}
  .rev157-note-card{min-height:172px;}
  .rev157-notes-decoder__rule{display:grid;gap:7px;}
}
/* REV157 — PLAIN ENGLISH SCENT NOTES DECODER END */


/* REV158 — KIT CONTENTS + FIRST USE CLARITY START
   Purpose: plain-English kit contents and first-use guide; no scroll animation or JS changes. */
.rev158-kit-contents{
  margin:clamp(28px,5vw,74px) 0 clamp(30px,6vw,90px);
  padding:clamp(22px,4vw,46px);
  border:1px solid rgba(17,17,17,.1);
  border-radius:clamp(28px,4vw,52px);
  background:linear-gradient(135deg,rgba(255,255,255,.92),rgba(255,248,230,.82));
  box-shadow:0 26px 78px rgba(15,12,8,.08);
  color:#18140f;
  overflow:hidden;
}
.rev158-kit-contents__head{
  display:grid;
  grid-template-columns:minmax(0,1.05fr) minmax(260px,.7fr);
  gap:clamp(18px,4vw,64px);
  align-items:end;
  margin-bottom:clamp(20px,4vw,42px);
}
.rev158-kicker{
  display:inline-flex;
  width:max-content;
  padding:8px 12px;
  border-radius:999px;
  background:rgba(17,17,17,.07);
  font-size:12px;
  line-height:1;
  letter-spacing:.1em;
  text-transform:uppercase;
  font-weight:900;
}
.rev158-kit-contents h2{
  margin:14px 0 0;
  max-width:760px;
  font-size:clamp(34px,5vw,76px);
  line-height:.92;
  letter-spacing:-.07em;
}
.rev158-kit-contents__head p{
  margin:0;
  max-width:430px;
  font-size:clamp(15px,1.2vw,19px);
  line-height:1.45;
  color:rgba(24,20,15,.72);
}
.rev158-kit-contents__grid{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:12px;
}
.rev158-kit-item{
  min-height:240px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:14px;
  padding:22px;
  border-radius:30px;
  background:linear-gradient(180deg,var(--rev158-tone),rgba(255,255,255,.78));
  border:1px solid rgba(17,17,17,.08);
  box-shadow:0 18px 42px rgba(17,17,17,.06);
}
.rev158-kit-item b{
  width:46px;
  height:46px;
  display:grid;
  place-items:center;
  border-radius:50%;
  background:rgba(255,255,255,.76);
  font-size:13px;
  letter-spacing:.06em;
}
.rev158-kit-item strong{
  display:block;
  font-size:clamp(22px,2.25vw,34px);
  line-height:.96;
  letter-spacing:-.045em;
}
.rev158-kit-item span{
  display:block;
  font-size:13px;
  line-height:1.15;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.055em;
}
.rev158-kit-item p{
  margin:0;
  font-size:14px;
  line-height:1.38;
  color:rgba(24,20,15,.72);
}
.rev158-first-use{
  margin-top:14px;
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:12px;
}
.rev158-first-use div{
  padding:18px 20px;
  border-radius:24px;
  background:rgba(255,255,255,.72);
  border:1px solid rgba(17,17,17,.08);
}
.rev158-first-use b{
  display:block;
  margin-bottom:8px;
  font-size:13px;
  letter-spacing:.06em;
  text-transform:uppercase;
}
.rev158-first-use span{
  display:block;
  font-size:14px;
  line-height:1.42;
  color:rgba(24,20,15,.72);
}
@media (max-width:980px){
  .rev158-kit-contents__head{grid-template-columns:1fr;}
  .rev158-kit-contents__grid{grid-template-columns:repeat(2,minmax(0,1fr));}
  .rev158-first-use{grid-template-columns:1fr;}
}
@media (max-width:620px){
  .rev158-kit-contents{padding:18px;border-radius:30px;}
  .rev158-kit-contents h2{font-size:clamp(34px,12vw,52px);line-height:.96;}
  .rev158-kit-contents__grid{grid-template-columns:1fr;}
  .rev158-kit-item{min-height:unset;}
}
/* REV158 — KIT CONTENTS + FIRST USE CLARITY END */



/* REV159 — WEAR STRENGTH GUIDE START
   Purpose: clear first-time guidance for wearing the kit light, normal, or stronger.
   Tunables: section width, card radius, type scale. */
.rev159-strength-guide{
  width:min(1120px, calc(100% - 32px));
  margin:clamp(44px, 7vw, 88px) auto;
  padding:clamp(26px, 4vw, 52px);
  border:1px solid rgba(17,17,17,.10);
  border-radius:36px;
  background:linear-gradient(135deg, rgba(255,255,255,.90), rgba(255,248,222,.76));
  box-shadow:0 28px 70px rgba(0,0,0,.08);
  overflow:hidden;
}
.rev159-strength-guide,
.rev159-strength-guide *{box-sizing:border-box;}
.rev159-strength-guide__copy{max-width:720px;}
.rev159-strength-guide__copy h2{
  max-width:12ch;
  margin:8px 0 14px;
  font-size:clamp(34px, 5.2vw, 76px);
  line-height:.94;
  letter-spacing:-.06em;
}
.rev159-strength-guide__copy p{
  max-width:58ch;
  margin:0;
  font-size:clamp(16px, 1.4vw, 20px);
  line-height:1.45;
  color:rgba(17,17,17,.72);
}
.rev159-strength-guide__grid{
  display:grid;
  grid-template-columns:repeat(3, minmax(0, 1fr));
  gap:14px;
  margin-top:28px;
}
.rev159-strength-guide__grid article{
  min-height:190px;
  padding:22px;
  border:1px solid rgba(17,17,17,.10);
  border-radius:24px;
  background:rgba(255,255,255,.72);
}
.rev159-strength-guide__grid b{
  display:inline-flex;
  width:fit-content;
  padding:7px 12px;
  border:1px solid rgba(17,17,17,.12);
  border-radius:999px;
  font-size:12px;
  line-height:1;
  letter-spacing:.08em;
  text-transform:uppercase;
}
.rev159-strength-guide__grid strong{
  display:block;
  margin:18px 0 10px;
  font-size:clamp(20px, 2.1vw, 28px);
  line-height:1.02;
  letter-spacing:-.035em;
}
.rev159-strength-guide__grid p{
  margin:0;
  font-size:15px;
  line-height:1.42;
  color:rgba(17,17,17,.72);
}
.rev159-strength-guide__note{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-top:16px;
  padding:16px 18px;
  border-radius:18px;
  background:rgba(17,17,17,.06);
  font-size:15px;
  line-height:1.35;
}
.rev159-strength-guide__note b{font-weight:800;}
@media(max-width:860px){
  .rev159-strength-guide{
    width:min(100% - 24px, 680px);
    border-radius:28px;
  }
  .rev159-strength-guide__copy h2{max-width:14ch;}
  .rev159-strength-guide__grid{grid-template-columns:1fr;}
  .rev159-strength-guide__grid article{min-height:unset;}
}
/* REV159 — WEAR STRENGTH GUIDE END */



/* REV160 — AWWWARDS COMPRESSION + HIERARCHY POLISH START
   Purpose: edit the accumulated experience down, reduce first-view overwhelm, and protect text layout.
   Scope: CSS-only polish. No scroll animation or JS changes.
   Tunables: hero decoder width, text measure, card spacing, section rhythm. */
:root{
  --rev160-copy-measure: 64ch;
  --rev160-tight-section: clamp(38px, 6vw, 84px);
}

body{
  text-rendering: geometricPrecision;
}

h1,h2,h3,p,span,a,b,strong,em,small,li{
  overflow-wrap: anywhere;
}

.hero .rev63-hero-lines,
.hero .rev61-commerce-proof{
  display:none !important;
}

.rev63-hero-decoder{
  max-width:min(520px, calc(100vw - 36px));
  padding:clamp(18px,2.2vw,28px);
}

.rev63-hero-decoder h1{
  max-width:10.5em;
  text-wrap:balance;
  line-height:.91;
}

.rev61-plain-line,
.page-lead,
.section p.lead,
.rev154-kit-chooser__intro p,
.rev156-scent-compare__head p,
.rev154-kit-choice p,
.rev156-first-kit-note span{
  max-width:var(--rev160-copy-measure);
  text-wrap:pretty;
}

.rev154-kit-chooser{
  margin:clamp(20px,3vw,38px) 0 clamp(20px,4vw,54px) !important;
  padding:clamp(18px,2.4vw,28px) !important;
  box-shadow:0 18px 46px rgba(0,0,0,.075) !important;
}

.rev154-kit-chooser__intro{
  max-width:720px;
}

.rev154-kit-chooser__intro h2,
.rev156-scent-compare__head h2{
  letter-spacing:-.055em;
  line-height:.94;
  text-wrap:balance;
}

.rev154-kit-chooser__grid{
  gap:clamp(10px,1.6vw,18px) !important;
}

.rev154-kit-choice{
  min-height:unset !important;
  padding:clamp(16px,2vw,24px) !important;
  border-radius:clamp(22px,3vw,34px) !important;
}

.rev154-kit-choice p{
  margin-block:10px 12px !important;
}

.rev156-scent-compare{
  margin:clamp(18px,3vw,38px) auto clamp(44px,6vw,82px) !important;
  padding:clamp(18px,3vw,36px) !important;
  box-shadow:0 18px 48px rgba(0,0,0,.08) !important;
}

.rev156-scent-compare__table{
  overflow:hidden;
  border-radius:28px;
}

.rev156-row{
  min-height:unset !important;
  padding-block:clamp(12px,1.5vw,18px) !important;
}

.rev156-row span,
.rev156-row b{
  line-height:1.16;
}

.rev157-notes-decoder,
.rev158-kit-contents,
.rev159-strength-guide{
  display:none !important;
}

.rev85-editorial-kit-system,
.rev61-clarity-band{
  margin-block:var(--rev160-tight-section);
}

.ticker-section{
  opacity:.72;
}

@media (max-width: 900px){
  .rev63-hero-decoder{
    max-width:min(460px, calc(100vw - 28px));
  }

  .rev154-kit-chooser__grid{
    grid-template-columns:1fr 1fr;
  }

  .rev156-row{
    grid-template-columns:1fr 1fr !important;
    gap:10px 16px !important;
  }

  .rev156-row--header{
    display:none !important;
  }

  .rev156-row b::before{
    content:"Kit";
    display:block;
    font-size:10px;
    text-transform:uppercase;
    letter-spacing:.12em;
    opacity:.54;
    margin-bottom:4px;
  }
}

@media (max-width: 640px){
  .rev154-kit-chooser__grid{
    grid-template-columns:1fr;
  }

  .rev63-hero-decoder{
    padding:16px;
  }

  .rev63-hero-decoder h1{
    max-width:9.5em;
  }

  .rev156-row{
    grid-template-columns:1fr !important;
  }
}
/* REV160 — AWWWARDS COMPRESSION + HIERARCHY POLISH END */


/* REV161 — VISUAL QA + LAYOUT SAFETY REPAIR START
   Purpose: prevent text collisions and panel overflow without changing the motion engine. */
:root{
  --rev161-page-pad:clamp(18px,4vw,58px);
  --rev161-reading-width:62ch;
  --rev161-tight-copy:1.48;
}
body{overflow-wrap:break-word;}
.page-lead,.rev61-plain-line,.rev47-sales-intro p,.rev43-detail-card p,.rev48-purchase-line,.rev154-kit-choice p{line-height:var(--rev161-tight-copy);}
.page-title,.hero h1,.rev43-detail-hero h1,.rev94-copy h1,.rev154-kit-chooser h2{overflow-wrap:normal;text-wrap:balance;}
p,li,small,span{word-break:normal;}
.tabaq-page,.page-shell,.section,.final{min-width:0;}
img,svg,video{max-width:100%;}
.rev47-sticky-cta{max-width:calc(100vw - 32px);}
@media (max-width:720px){
  .page-title,.rev43-detail-hero h1{font-size:clamp(44px,15vw,74px)!important;line-height:.88;}
  .page-lead{font-size:clamp(16px,4.8vw,20px)!important;max-width:var(--rev161-reading-width);}
  .rev47-sticky-cta{left:12px;right:12px;bottom:12px;}
}
/* REV161 — VISUAL QA + LAYOUT SAFETY REPAIR END */

/* REV162 — FIRST-VIEW HIERARCHY POLISH START
   Purpose: make the first 10 seconds calmer and clearer without changing existing hero motion. */
.hero .rev63-hero-decoder{max-width:min(520px,calc(100vw - 40px));}
.rev63-hero-decoder .rev63-eyebrow{letter-spacing:.14em;opacity:.72;}
.rev63-hero-decoder .rev133-hero-truth{font-size:clamp(13px,1vw,16px);letter-spacing:.08em;text-transform:uppercase;}
.rev63-hero-decoder h1{font-size:clamp(58px,8.8vw,132px);letter-spacing:-.075em;line-height:.82;margin:.08em 0 .13em;text-wrap:balance;}
.rev61-plain-line{max-width:38ch;font-size:clamp(15px,1.25vw,18px);font-weight:750;color:rgba(16,13,10,.72);}
.rev132-layer-code{max-width:440px;}
.rev63-hero-lines,.rev61-commerce-proof{display:none!important;}
.rev63-hero-actions{margin-top:18px;gap:10px;}
@media (max-width:860px){
  .hero .rev63-hero-decoder{left:18px;right:18px;bottom:96px;}
  .rev132-layer-code{grid-template-columns:repeat(2,minmax(0,1fr));}
}
/* REV162 — FIRST-VIEW HIERARCHY POLISH END */

/* REV163 — SHOP DECISION FLOW POLISH START
   Purpose: make choosing one kit faster; comparison is folded into the chooser cards. */
.rev154-kit-chooser{margin-block:clamp(28px,5vw,70px);padding:clamp(20px,4vw,48px);border-radius:clamp(28px,4vw,52px);background:linear-gradient(135deg,rgba(255,255,255,.96),rgba(255,250,236,.92));box-shadow:0 30px 90px rgba(16,13,10,.075);}
.rev154-kit-chooser__intro{max-width:860px;margin-inline:auto;text-align:center;}
.rev154-kit-chooser__intro h2{font-size:clamp(42px,6.6vw,104px);line-height:.86;letter-spacing:-.065em;margin:.05em 0 .18em;}
.rev154-kit-chooser__intro p{margin-inline:auto;font-size:clamp(16px,1.45vw,20px);}
.rev154-kit-chooser__grid{margin-top:clamp(20px,3vw,34px);grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(10px,1.4vw,18px);}
.rev154-kit-choice{min-height:clamp(245px,26vw,330px);padding:clamp(18px,2vw,28px);display:flex;flex-direction:column;justify-content:space-between;border-radius:clamp(24px,3vw,38px);}
.rev154-kit-choice b{font-size:clamp(26px,2.5vw,44px);line-height:.92;letter-spacing:-.045em;}
.rev154-kit-choice span{font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:950;}
.rev154-kit-choice p{font-size:clamp(14px,1vw,16px);max-width:26ch;color:rgba(16,13,10,.68);}
.rev154-kit-choice em{font-style:normal;font-size:12px;font-weight:950;text-transform:uppercase;letter-spacing:.12em;}
.rev154-kit-chooser__note{width:max-content;max-width:100%;margin:clamp(18px,3vw,32px) auto 0;}
.rev156-scent-compare{display:none!important;}
@media (max-width:1080px){.rev154-kit-chooser__grid{grid-template-columns:repeat(2,minmax(0,1fr));}.rev154-kit-choice{min-height:250px;}}
@media (max-width:640px){.rev154-kit-chooser__grid{grid-template-columns:1fr;}.rev154-kit-choice{min-height:210px;}.rev154-kit-chooser__intro{text-align:left;}.rev154-kit-chooser__note{width:100%;}}
/* REV163 — SHOP DECISION FLOW POLISH END */

/* REV164 — PRODUCT DETAIL PAGE AUTHORITY POLISH START
   Purpose: make kit pages feel less repetitive and more purchase-focused. */
.tabaq-page[data-page^="product-"] .rev43-detail-page{gap:clamp(16px,2.4vw,32px);}
.tabaq-page[data-page^="product-"] .rev43-detail-hero{border-radius:clamp(28px,4vw,54px);box-shadow:0 34px 100px rgba(35,22,10,.13);}
.tabaq-page[data-page^="product-"] .rev43-detail-hero h1{font-size:clamp(54px,7.2vw,116px);max-width:8ch;text-wrap:balance;}
.tabaq-page[data-page^="product-"] .rev43-note-row{gap:8px;max-width:420px;}
.tabaq-page[data-page^="product-"] .rev43-buybox{padding:clamp(20px,3vw,34px);border-radius:clamp(24px,3vw,38px);}
.tabaq-page[data-page^="product-"] .rev48-detail-includes__grid>div{border-radius:18px;}
.rev47-routine-strip{grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;}
.rev47-routine-strip article{min-height:112px;padding:14px;border-radius:20px;}
.rev47-routine-strip article span{font-size:13px;line-height:1.35;}
.rev63-product-proof{display:none!important;}
.rev61-product-close{margin-top:4px;}
@media(max-width:980px){.rev47-routine-strip{grid-template-columns:repeat(2,minmax(0,1fr));}}
@media(max-width:560px){.rev47-routine-strip{grid-template-columns:1fr;}.tabaq-page[data-page^="product-"] .rev43-detail-hero h1{max-width:9ch;}}
/* REV164 — PRODUCT DETAIL PAGE AUTHORITY POLISH END */

/* REV165 — DROP EXPERIENCE POLISH START
   Purpose: separate live buying from future watchlist behavior without making discounts feel cheap. */
.rev70-drop-close{gap:clamp(24px,5vw,74px);}
.rev70-drop-copy h2{max-width:10ch;text-wrap:balance;}
.rev70-drop-lead{max-width:44ch;line-height:1.5;}
.rev70-drop-steps article{border-radius:22px;background:rgba(255,255,255,.72);backdrop-filter:blur(10px);}
.rev147-release-board,.rev147-drop-queue,.rev148-next-drop-gallery{border-radius:clamp(28px,4vw,48px);}
.rev147-release-board h2,.rev148-next-drop-gallery h2{text-wrap:balance;}
/* REV165 — DROP EXPERIENCE POLISH END */

/* REV166 — LIVING LAYER MAPS ART-DIRECTION POLISH START
   Purpose: make layer-map surfaces feel intentional and premium, not accumulated. */
.page-shell{padding-inline:var(--rev161-page-pad);}
.rev154-kit-choice,.product-card,.rev43-detail-card,.rev84-motion-card{transition:border-color .22s ease, box-shadow .22s ease, transform .22s ease;}
.rev154-kit-choice:hover,.product-card:hover,.rev43-detail-card:hover{box-shadow:0 28px 80px rgba(16,13,10,.12);}
.rev154-kit-choice::after,.rev43-detail-hero::before,.rev70-drop-product-frame::before{content:"";position:absolute;inset:10%;border-radius:inherit;background:radial-gradient(circle at 18% 18%,rgba(255,255,255,.42),transparent 42%),linear-gradient(135deg,rgba(255,255,255,.18),transparent 58%);pointer-events:none;mix-blend-mode:soft-light;}
.rev154-kit-choice{position:relative;overflow:hidden;}
.rev154-kit-choice>*{position:relative;z-index:1;}
.rev43-detail-hero::before{inset:0;opacity:.62;}
.rev94-mood-tile,.rev147-drop-slot,.rev148-next-drop-card{box-shadow:0 26px 80px rgba(16,13,10,.09);}
/* REV166 — LIVING LAYER MAPS ART-DIRECTION POLISH END */

/* REV167 — MOTION INTEGRITY QA START
   Purpose: preserve existing motion behavior and keep new polish out of the scroll animation engine. */
html.rev167-motion-integrity-pass .js-hero-product,
html.rev167-motion-integrity-pass .js-orbit,
html.rev167-motion-integrity-pass .float-item,
html.rev167-motion-integrity-pass .handoff,
html.rev167-motion-integrity-pass .shop-motion-bottle{will-change:transform;}
@media (prefers-reduced-motion: reduce){
  .rev154-kit-choice,.product-card,.rev43-detail-card,.rev84-motion-card{transition:none!important;}
}
/* REV167 — MOTION INTEGRITY QA END */


/* REV190 — REV167 SOURCE-TRUTH LAYERING HARD LOCK START
   Purpose: keep the Layering route controlled by the original Rev167 / Rev7 native bottle-drop system.
   Scope: Layering route only. No shop, product, cart, gallery, drop, or home redesign. */
html.rev190-rebased-on-rev167 body[data-page="layering"] .rev136-site-scroll-trail,
html.rev190-rebased-on-rev167 body[data-page="layering"] .rev142-layer-control-set{
  display:none!important;
}
html.rev190-rebased-on-rev167 body[data-page="layering"] .tabaq-page[data-page="layering"],
html.rev190-rebased-on-rev167 body[data-page="layering"] .tabaq-rev7drop{
  overflow:visible!important;
}
html.rev190-rebased-on-rev167 body[data-page="layering"] #rev7drop-scenes{
  display:block!important;
  position:relative!important;
  min-height:1px!important;
}
html.rev190-rebased-on-rev167 body[data-page="layering"] .rev7-scroll-scene{
  display:block!important;
  visibility:visible!important;
  position:relative!important;
  height:260svh!important;
  min-height:1600px!important;
  overflow:visible!important;
}
html.rev190-rebased-on-rev167 body[data-page="layering"] .rev7-scene-sticky{
  position:sticky!important;
  top:0!important;
  height:100svh!important;
  overflow:hidden!important;
  isolation:isolate!important;
}
html.rev190-rebased-on-rev167 body[data-page="layering"] .rev7-artboard{
  display:block!important;
  position:relative!important;
  overflow:visible!important;
  z-index:2!important;
}
html.rev190-rebased-on-rev167 body[data-page="layering"] .rev7-layer-img{
  display:block!important;
  visibility:visible!important;
  position:absolute!important;
  inset:0!important;
  width:100%!important;
  height:100%!important;
  object-fit:contain!important;
  object-position:center center!important;
  pointer-events:none!important;
}
html.rev190-rebased-on-rev167 body[data-page="layering"] .rev7-product-drop{
  z-index:3!important;
  opacity:var(--product-opacity,0)!important;
  transform:translate3d(var(--product-x,0px),var(--product-y,-80vh),0) rotate(var(--product-rot,0deg)) scale(var(--product-scale,1))!important;
  mix-blend-mode:normal!important;
  filter:drop-shadow(0 24px 24px rgba(49,28,9,var(--drop-shadow,.10))) saturate(1.04)!important;
}
html.rev190-rebased-on-rev167 body[data-page="layering"] .rev7-model-empty{z-index:1!important;opacity:var(--empty-opacity,1)!important;}
html.rev190-rebased-on-rev167 body[data-page="layering"] .rev7-model-final{z-index:4!important;opacity:var(--final-opacity,0)!important;}
html.rev190-rebased-on-rev167 body[data-page="layering"] .rev7-landing-ring{z-index:2!important;}
html.rev190-rebased-on-rev167 body[data-page="layering"] .rev7-scene-name{
  max-width:11.25ch!important;
  overflow-wrap:normal!important;
  word-break:normal!important;
  hyphens:none!important;
}
@media(max-width:920px){
  html.rev190-rebased-on-rev167 body[data-page="layering"] .rev7-scene-name{max-width:8.8ch!important;}
}
/* REV190 — REV167 SOURCE-TRUTH LAYERING HARD LOCK END */

/* REV191 — ALTERNATE BOTTLE HERO VARIATION START
   Purpose: use the uploaded alternate bottle set as a supporting hero asset across later hero scenes so the site does not repeat the same isolated bottles everywhere.
   Scope: visual composition only. Does not alter Layering drop choreography, routing, cart, nav, or shop logic.
*/
.page-hero,
.rev94-hero,
.rev94-proof-board{
  position:relative;
  overflow:hidden;
}
.rev191-alt-bottle-set{
  position:absolute;
  z-index:2;
  pointer-events:none;
  user-select:none;
  transform-style:preserve-3d;
  opacity:.92;
  filter:drop-shadow(0 24px 34px rgba(17,17,17,.16));
}
.rev191-alt-bottle-set img{
  display:block;
  width:100%;
  height:auto;
  object-fit:contain;
}
.rev191-alt-bottle-set--shop{
  width:clamp(150px,18vw,260px);
  right:clamp(12px,3vw,42px);
  top:clamp(4px,2vw,26px);
  transform:rotate(-9deg) translateZ(26px);
  opacity:.86;
  mix-blend-mode:multiply;
}
.rev191-alt-bottle-set--proof{
  width:min(34%,260px);
  right:18px;
  top:22px;
  transform:rotate(8deg) translateZ(40px);
  opacity:.72;
  mix-blend-mode:multiply;
  z-index:2;
}
.rev94-proof-pack{
  z-index:4;
}
.rev94-step-stack{
  z-index:5;
}
.rev191-alt-bottle-set--drop{
  width:clamp(160px,22vw,330px);
  right:clamp(18px,5vw,74px);
  bottom:clamp(18px,5vw,70px);
  transform:rotate(-7deg) translateZ(28px);
  opacity:.82;
  filter:blur(.15px) drop-shadow(0 30px 44px rgba(0,0,0,.18));
}
@media (hover:hover) and (prefers-reduced-motion:no-preference){
  .rev191-alt-bottle-set{
    animation:rev191-alt-bottle-breathe 7.5s cubic-bezier(.42,0,.2,1) infinite alternate;
  }
  .rev191-alt-bottle-set--proof{animation-duration:8.8s;}
  .rev191-alt-bottle-set--drop{animation-duration:9.4s;}
}
@keyframes rev191-alt-bottle-breathe{
  0%{translate:0 0;}
  100%{translate:0 -8px;}
}
@media (max-width:980px){
  .rev191-alt-bottle-set--shop{
    width:150px;
    right:12px;
    top:8px;
    opacity:.62;
  }
  .rev191-alt-bottle-set--proof{
    width:178px;
    right:-18px;
    top:16px;
    opacity:.42;
  }
  .rev191-alt-bottle-set--drop{
    width:180px;
    right:-16px;
    bottom:16px;
    opacity:.38;
  }
}
@media (max-width:720px){
  .rev191-alt-bottle-set--shop{
    top:auto;
    bottom:16px;
    right:10px;
    width:130px;
  }
  .rev191-alt-bottle-set--proof,
  .rev191-alt-bottle-set--drop{
    display:none;
  }
}
/* REV191 — ALTERNATE BOTTLE HERO VARIATION END */


/* REV192 — LOOKBOOK DENSITY + DROP PAGE RESTORE START
   Purpose: remove generic journey repetition on Lookbook/Drop, keep the alternate bottle set as one controlled accent, and restore the stronger drop-page hero without changing Rev167 base motion. */
body[data-page="gallery"] .tabaq-page[data-page="gallery"] .rev136-page-journey,
body[data-page="gallery"] .tabaq-page[data-page="gallery"] .rev137-page-bridge,
body[data-page="drop"] .tabaq-page[data-page="drop"] .rev136-page-journey,
body[data-page="drop"] .tabaq-page[data-page="drop"] .rev137-page-bridge{
  display:none!important;
}
.rev192-lookbook-product-moment{
  min-height:clamp(260px,34vw,420px);
  justify-content:center!important;
  align-items:center!important;
  padding:clamp(22px,4vw,52px)!important;
  overflow:hidden;
}
.rev192-lookbook-product-moment .rev192-lookbook-product-set{
  height:auto!important;
  width:min(78%,760px)!important;
  max-height:clamp(190px,26vw,340px)!important;
  object-fit:contain;
  filter:drop-shadow(0 34px 42px rgba(0,0,0,.16));
}
.rev192-drop-route-hero.rev70-drop-close{
  margin:0 0 clamp(28px,4vw,52px);
  border-radius:0 0 44px 44px;
  box-shadow:0 30px 90px rgba(67,39,25,.08);
}
.rev192-drop-route-title{
  max-width:9.4ch!important;
  margin:0;
  font-family:var(--display,ui-sans-serif);
  font-size:clamp(64px,8.7vw,138px)!important;
  line-height:.82!important;
  letter-spacing:-.082em!important;
  text-transform:uppercase;
  color:#17110f;
  text-wrap:balance;
}
.rev192-drop-route-hero .rev70-drop-product-frame{
  width:min(440px,50vw);
}
.rev192-drop-route-hero .rev70-drop-product{
  max-height:min(76vh,780px);
}
@media(max-width:980px){
  .rev192-drop-route-hero.rev70-drop-close{border-radius:0 0 28px 28px;}
  .rev192-drop-route-title{font-size:clamp(50px,15vw,98px)!important;}
  .rev192-drop-route-hero .rev70-drop-product-frame{width:min(340px,78vw);}
}
@media(max-width:720px){
  .rev192-lookbook-product-moment{min-height:230px;}
  .rev192-lookbook-product-moment .rev192-lookbook-product-set{width:min(92%,430px)!important;max-height:190px!important;}
}
/* REV192 — LOOKBOOK DENSITY + DROP PAGE RESTORE END */


/* REV193 — HOME DROP STRIP RESTORE FROM REV187 START
   Purpose: preserve the compact Rev187 landing strip instead of the oversized Rev70 drop bridge on the home page. */
.rev181-home-drop-strip{
  margin:clamp(42px,7vw,92px) auto 0;
  max-width:min(1220px,calc(100vw - 48px));
  display:grid;
  grid-template-columns:minmax(0,1fr) auto;
  gap:clamp(24px,5vw,64px);
  align-items:center;
  padding:clamp(28px,4vw,54px);
  border-radius:36px;
  background:linear-gradient(120deg,#111 0%,#191411 46%,#f2bd42 100%);
  color:#fff;
  box-shadow:0 28px 80px rgba(25,18,10,.18);
  overflow:hidden;
}
.rev181-home-drop-strip .rev181-kicker{
  display:block;
  color:#ff3b27;
  font-size:12px;
  letter-spacing:.16em;
  text-transform:uppercase;
  font-weight:900;
  margin-bottom:12px;
}
.rev181-home-drop-strip h2{
  margin:0;
  font-size:clamp(40px,6.6vw,92px);
  line-height:.88;
  letter-spacing:-.07em;
  text-transform:uppercase;
  max-width:10ch;
}
.rev181-home-drop-strip p{
  margin:14px 0 0;
  max-width:560px;
  color:rgba(255,255,255,.84);
  font-size:clamp(16px,1.4vw,20px);
  line-height:1.35;
  font-weight:800;
}
.rev181-drop-actions{
  display:flex;
  align-items:center;
  gap:12px;
  flex-wrap:wrap;
  justify-content:flex-end;
}
.rev181-drop-actions .ghost-pill{
  color:#fff;
  border-color:rgba(255,255,255,.38);
}
@media(max-width:780px){
  .rev181-home-drop-strip{
    grid-template-columns:1fr;
    max-width:calc(100vw - 28px);
    padding:28px 22px;
    border-radius:28px;
  }
  .rev181-drop-actions{justify-content:flex-start;}
}
/* REV193 — HOME DROP STRIP RESTORE FROM REV187 END */


/* REV194 — BUYER CLARITY + ECOMMERCE PSYCHOLOGY PASS START
   Purpose: reduce first-time buyer confusion without stripping the visual world. One product truth: choose a mood, buy one complete four-layer kit, wear in order. */
.rev194-buyer-clarity-strip{
  width:min(1180px, calc(100% - 48px));
  margin: clamp(18px, 4vw, 44px) auto clamp(26px, 6vw, 72px);
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:14px;
  position:relative;
  z-index:4;
}
.rev194-buyer-clarity-strip article{
  border-radius:24px;
  background:rgba(255,255,255,.74);
  box-shadow:0 20px 70px rgba(20,12,8,.08);
  border:1px solid rgba(20,12,8,.08);
  padding:20px 22px;
  min-height:132px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  backdrop-filter: blur(18px);
}
.rev194-buyer-clarity-strip b,
.rev194-shop-buying-spine span{
  font-size:11px;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:#ff3a2d;
}
.rev194-buyer-clarity-strip strong{
  display:block;
  font-size:clamp(23px,2.7vw,38px);
  line-height:.94;
  letter-spacing:-.055em;
  color:#14100d;
  max-width:8.5ch;
}
.rev194-buyer-clarity-strip p{margin:0;color:rgba(20,16,13,.68);font-weight:700;line-height:1.24;}
.rev194-shop-buying-spine{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:14px;
  margin: clamp(28px, 5vw, 64px) 0 20px;
}
.rev194-shop-buying-spine div{
  border-radius:26px;
  padding:22px;
  background:linear-gradient(135deg, rgba(255,255,255,.92), rgba(255,245,230,.75));
  border:1px solid rgba(20,12,8,.08);
  box-shadow:0 22px 70px rgba(20,12,8,.06);
}
.rev194-shop-buying-spine b{display:block;font-size:clamp(22px,2.2vw,34px);line-height:.98;letter-spacing:-.055em;margin:20px 0 8px;}
.rev194-shop-buying-spine p{margin:0;color:rgba(20,16,13,.66);font-weight:700;line-height:1.24;}
.rev194-suppressed-duplicate{display:none!important;}
body[data-page="shop"] .rev136-site-scroll-trail,
body[data-page="gallery"] .rev136-site-scroll-trail,
body[data-page="about"] .rev136-site-scroll-trail,
body[data-page^="product-"] .rev136-site-scroll-trail{display:none!important;}
body[data-page="shop"] .page-hero{align-items:center;}
body[data-page="shop"] .page-lead{max-width:760px;}
body[data-page="shop"] .product-card .rev51-card-uniform-line{color:#ff3a2d;font-weight:900;letter-spacing:.02em;}
body[data-page="shop"] .rev154-kit-chooser{margin-top:clamp(28px,5vw,70px);}
body[data-page="gallery"] .rev94-lead,
body[data-page="about"] .rev94-lead{max-width:780px;}
.tabaq-page[data-page="drop"] .rev70-drop-lead{max-width:720px;}
@media (max-width: 820px){
  .rev194-buyer-clarity-strip,.rev194-shop-buying-spine{grid-template-columns:1fr;width:min(100% - 28px, 520px);}
  .rev194-buyer-clarity-strip article{min-height:auto;gap:18px;}
}
/* REV194 — BUYER CLARITY + ECOMMERCE PSYCHOLOGY PASS END */


/* REV197 — KIT CHOICE + TRUST SYSTEM START
   Purpose: strengthen layman kit selection, purchase trust, card hierarchy and mobile buying ergonomics without redesigning the site shell. */
.rev197-kit-choice-system,
.rev197-shop-confidence{
  width:min(1180px,calc(100% - 48px));
  margin:clamp(32px,5vw,72px) auto;
  border:1px solid rgba(20,20,20,.08);
  border-radius:clamp(26px,4vw,48px);
  background:linear-gradient(135deg,rgba(255,255,255,.78),rgba(255,246,225,.86));
  box-shadow:0 28px 90px rgba(20,20,20,.08);
  padding:clamp(22px,4vw,42px);
  position:relative;
  overflow:hidden;
}
.rev197-kit-choice-system:before,
.rev197-shop-confidence:before{
  content:"";
  position:absolute;
  inset:-30% auto auto 58%;
  width:360px;height:360px;
  border-radius:999px;
  background:radial-gradient(circle,rgba(255,75,57,.14),rgba(255,184,77,.08) 45%,rgba(255,255,255,0) 70%);
  pointer-events:none;
}
.rev197-choice-copy,
.rev197-confidence-copy{
  max-width:720px;
  position:relative;
  z-index:1;
}
.rev197-kicker{
  display:inline-flex;
  align-items:center;
  gap:8px;
  font:900 11px/1 var(--body);
  text-transform:uppercase;
  letter-spacing:.16em;
  color:var(--active);
  margin-bottom:12px;
}
.rev197-kicker:before{content:"";width:9px;height:9px;border-radius:50%;background:var(--active);box-shadow:0 0 0 8px rgba(255,75,57,.10)}
.rev197-choice-copy h2,
.rev197-confidence-copy h2{
  margin:0;
  font-family:var(--display);
  font-size:clamp(34px,6vw,78px);
  line-height:.9;
  letter-spacing:-.06em;
  max-width:850px;
}
.rev197-choice-copy p,
.rev197-confidence-copy p{
  margin:16px 0 0;
  max-width:620px;
  color:rgba(20,20,20,.72);
  font-weight:800;
  font-size:clamp(15px,1.7vw,19px);
  line-height:1.35;
}
.rev197-choice-grid{
  position:relative;z-index:1;
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:12px;
  margin-top:clamp(20px,3vw,34px);
}
.rev197-choice-card{
  min-height:190px;
  padding:20px;
  border-radius:28px;
  background:linear-gradient(145deg,var(--choice,#fff),rgba(255,255,255,.78));
  border:1px solid rgba(20,20,20,.08);
  color:var(--ink);
  text-decoration:none;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  transition:transform .22s ease, box-shadow .22s ease, border-color .22s ease;
}
.rev197-choice-card:hover,
.rev197-choice-card:focus-visible{
  transform:translateY(-4px);
  box-shadow:0 22px 50px rgba(20,20,20,.14);
  border-color:rgba(20,20,20,.18);
  outline:none;
}
.rev197-choice-card span,
.rev197-choice-card em{
  font-size:11px;
  font-weight:950;
  text-transform:uppercase;
  letter-spacing:.12em;
  color:rgba(20,20,20,.62);
  font-style:normal;
}
.rev197-choice-card b{
  display:block;
  font-family:var(--display);
  font-size:clamp(25px,3.4vw,42px);
  line-height:.92;
  letter-spacing:-.06em;
  margin:10px 0;
}
.rev197-choice-card p{margin:0 0 14px;color:rgba(20,20,20,.72);font-weight:800;line-height:1.25}
.rev197-trust-row,
.rev197-buy-confidence{
  position:relative;z-index:1;
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:10px;
  margin-top:18px;
}
.rev197-trust-row span,
.rev197-buy-confidence span{
  display:flex;
  flex-direction:column;
  gap:4px;
  border-radius:18px;
  background:rgba(255,255,255,.68);
  border:1px solid rgba(20,20,20,.08);
  padding:14px 16px;
  font-weight:850;
  color:rgba(20,20,20,.62);
}
.rev197-trust-row b{color:var(--ink);font-size:13px;text-transform:uppercase;letter-spacing:.08em}
.rev197-shop-confidence{background:linear-gradient(145deg,rgba(20,20,20,.98),rgba(42,30,19,.94));color:#fff}
.rev197-shop-confidence:before{background:radial-gradient(circle,rgba(255,184,77,.25),rgba(255,75,57,.12) 42%,rgba(255,255,255,0) 72%)}
.rev197-shop-confidence .rev197-confidence-copy p{color:rgba(255,255,255,.70)}
.rev197-layer-proof{
  position:relative;z-index:1;
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:12px;
  margin-top:clamp(22px,3vw,36px);
}
.rev197-layer-proof article{
  min-height:150px;
  border-radius:26px;
  padding:18px;
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.14);
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}
.rev197-layer-proof b{font:950 12px/1 var(--body);color:var(--active2);letter-spacing:.12em}
.rev197-layer-proof strong{font-family:var(--display);font-size:clamp(24px,3vw,38px);line-height:.9;letter-spacing:-.05em}
.rev197-layer-proof span{font-weight:850;color:rgba(255,255,255,.68)}
.rev197-buy-confidence span{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.13);color:rgba(255,255,255,.78);font-weight:900;text-transform:uppercase;letter-spacing:.08em;font-size:11px}
.rev197-card-logic{
  display:grid;
  gap:8px;
  margin:14px 0 2px;
}
.rev197-card-logic span{
  display:grid;
  grid-template-columns:78px 1fr;
  gap:10px;
  align-items:start;
  padding:9px 10px;
  border-radius:14px;
  background:rgba(255,255,255,.52);
  border:1px solid rgba(20,20,20,.06);
}
.rev197-card-logic b{
  font-size:10px;
  line-height:1.15;
  letter-spacing:.12em;
  text-transform:uppercase;
  color:rgba(20,20,20,.48);
}
.rev197-card-logic em{
  font-style:normal;
  font-size:12px;
  line-height:1.25;
  font-weight:900;
  color:rgba(20,20,20,.78);
}
.rev197-suppressed-commerce-repeat{display:none!important}
.rev197-mobile-kit-bar{display:none}
@media (max-width:900px){
  .rev197-choice-grid,.rev197-layer-proof,.rev197-trust-row,.rev197-buy-confidence{grid-template-columns:repeat(2,minmax(0,1fr))}
  .rev197-choice-card{min-height:160px}
}
@media (max-width:680px){
  .rev197-kit-choice-system,.rev197-shop-confidence{width:calc(100% - 24px);padding:20px;border-radius:28px;margin:28px auto}
  .rev197-choice-grid,.rev197-layer-proof,.rev197-trust-row,.rev197-buy-confidence{grid-template-columns:1fr}
  .rev197-choice-copy h2,.rev197-confidence-copy h2{font-size:clamp(34px,12vw,54px)}
  .rev197-card-logic span{grid-template-columns:70px 1fr}
  body[data-page="shop"] .rev197-mobile-kit-bar.is-visible{
    display:flex;
    position:fixed;
    left:12px;right:12px;bottom:12px;
    z-index:9000;
    align-items:center;
    justify-content:space-between;
    gap:12px;
    padding:12px;
    border-radius:22px;
    background:rgba(20,20,20,.92);
    color:#fff;
    box-shadow:0 18px 60px rgba(0,0,0,.28);
    backdrop-filter:blur(14px);
  }
  .rev197-mobile-kit-bar div{display:flex;flex-direction:column;gap:2px;min-width:0}
  .rev197-mobile-kit-bar b{font-size:13px;letter-spacing:.02em}
  .rev197-mobile-kit-bar span{font-size:11px;color:rgba(255,255,255,.68);font-weight:800}
  .rev197-mobile-kit-bar a{
    flex:0 0 auto;
    padding:12px 16px;
    border-radius:999px;
    background:var(--active);
    color:#fff;
    text-decoration:none;
    font-weight:950;
    font-size:13px;
  }
}
/* REV197 — KIT CHOICE + TRUST SYSTEM END */


/* REV198 — PREMIUM BREATHING ROOM + JOYFUL BOUTIQUE RHYTHM START
   Purpose: make the final site feel premium and boutique through controlled negative space, calmer buying rhythm and selective repetition removal while preserving TABAQ's colourful energy. */
:root{
  --rev198-breathe-sm:clamp(28px,4vw,56px);
  --rev198-breathe-md:clamp(52px,7vw,108px);
  --rev198-breathe-lg:clamp(84px,10vw,160px);
  --rev198-max:1180px;
}
.rev198-premium-breathing-room body,
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"]{
  background:#fffaf1;
}
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .tabaq-page{
  --rev198-page-edge:clamp(18px,3vw,34px);
}
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .page-shell{
  padding-top:clamp(56px,7vw,118px);
  padding-bottom:clamp(70px,9vw,150px);
}
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .page-hero{
  min-height:clamp(440px,58vh,720px);
  padding-top:clamp(74px,9vw,136px);
  padding-bottom:clamp(72px,9vw,144px);
}
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .page-hero h1,
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .hero-title,
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev94-hero h1{
  max-width:11ch;
}
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .page-lead,
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev94-lead{
  max-width:640px;
  line-height:1.45;
}
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev194-buyer-clarity-strip{
  margin:clamp(40px,6vw,84px) auto clamp(72px,8vw,132px);
  gap:clamp(16px,2.2vw,28px);
}
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev194-buyer-clarity-strip article{
  padding:clamp(22px,2.6vw,32px);
  min-height:clamp(150px,13vw,190px);
}
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-kit-choice-system,
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-shop-confidence{
  width:min(var(--rev198-max),calc(100% - 64px));
  margin:var(--rev198-breathe-lg) auto;
  padding:clamp(34px,5.4vw,76px);
  border-radius:clamp(34px,5vw,64px);
  box-shadow:0 42px 130px rgba(20,12,8,.10);
}
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-choice-grid{
  gap:clamp(14px,2vw,24px);
  margin-top:clamp(30px,4vw,52px);
}
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-choice-card{
  min-height:clamp(220px,22vw,300px);
  padding:clamp(22px,2.7vw,34px);
  border-radius:clamp(28px,3.5vw,44px);
}
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-trust-row,
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-buy-confidence{
  gap:clamp(10px,1.6vw,18px);
  margin-top:clamp(22px,3vw,34px);
}
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-trust-row span,
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-buy-confidence span{
  padding:clamp(14px,1.8vw,22px);
}
/* Home: keep the strong explanation and theatrical layers, remove the second mood chooser that repeats Rev197. */
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev143-kit-studio{
  display:none!important;
}
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .handoff,
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev135-scroll-cinema,
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev61-clarity-band,
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] #routine,
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] #layers,
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev181-home-drop-strip{
  margin-top:var(--rev198-breathe-md);
  margin-bottom:var(--rev198-breathe-md);
}
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev181-home-drop-strip{
  padding:clamp(32px,4.5vw,62px);
}
/* Shop: one clear buying sequence only — hero, simple buying spine, inside-kit proof, product cards, final FAQ/trust. */
body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev154-kit-chooser,
body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev138-commerce-foundation,
body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev48-shop-guide,
body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev66-shop-impact-intro{
  display:none!important;
}
body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev194-shop-buying-spine{
  width:min(var(--rev198-max),100%);
  margin:clamp(28px,4vw,70px) auto var(--rev198-breathe-lg);
  gap:clamp(16px,2vw,26px);
}
body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev194-shop-buying-spine div{
  padding:clamp(24px,3vw,38px);
  min-height:clamp(150px,14vw,210px);
}
body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-shop-confidence{
  margin-top:0;
  margin-bottom:var(--rev198-breathe-lg);
}
body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .product-grid.rev46-kit-grid{
  gap:clamp(22px,2.7vw,38px)!important;
  margin-top:0;
  margin-bottom:var(--rev198-breathe-lg);
}
body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev46-kit-grid .product-card.has-kit-motion{
  border-radius:clamp(34px,4vw,54px)!important;
  padding:clamp(20px,2.4vw,30px)!important;
  min-height:clamp(640px,58vw,790px)!important;
  box-shadow:0 34px 100px rgba(20,12,8,.08)!important;
}
body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev46-kit-grid .rev29-kit-preview{
  min-height:clamp(260px,23vw,360px)!important;
  border-radius:clamp(28px,3vw,42px)!important;
}
body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-card-logic{
  margin-top:clamp(16px,2vw,24px);
  gap:10px;
}
body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-card-logic span{
  padding:12px 14px;
  border-radius:18px;
}
body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev63-section--white{
  margin-top:var(--rev198-breathe-lg);
  padding-top:var(--rev198-breathe-md);
}
/* Product pages: keep retail clarity but give the kit detail rooms more boutique confidence. */
body[data-page^="product-"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev43-detail-page{
  gap:clamp(26px,3.6vw,56px);
}
body[data-page^="product-"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev47-routine-strip,
body[data-page^="product-"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev47-sales-intro,
body[data-page^="product-"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev63-product-proof,
body[data-page^="product-"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev61-product-close,
body[data-page^="product-"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev47-related-kits{
  margin-top:var(--rev198-breathe-md);
}
/* Journey pages: give lookbook/about/drops more editorial oxygen without changing their content purpose. */
body[data-page="gallery"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev94-hero,
body[data-page="about"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev94-hero,
body[data-page="drop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev192-drop-route-hero{
  min-height:clamp(520px,62vh,760px);
  padding-top:clamp(78px,9vw,140px);
  padding-bottom:clamp(84px,10vw,156px);
}
body[data-page="gallery"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev94-follow-path,
body[data-page="about"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev94-proof-strip,
body[data-page="drop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev94-drop-picker,
body[data-page="drop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev148-next-drop-gallery,
body[data-page="drop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev138-drop-engine,
body[data-page="drop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev147-release-board,
body[data-page="drop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev146-coming-drop,
body[data-page="drop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev94-final-clarity{
  margin-top:var(--rev198-breathe-md);
  margin-bottom:var(--rev198-breathe-md);
}
/* Animation restraint: keep joy through purposeful moments, not constant micro-movement everywhere. */
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev84-motion-card,
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-choice-card,
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .product-card{
  transition:transform .28s cubic-bezier(.2,.8,.2,1), box-shadow .28s ease, border-color .28s ease;
}
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev84-motion-card:hover,
body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .product-card:hover{
  transform:translateY(-4px);
}
@media (max-width:980px){
  body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev194-buyer-clarity-strip,
  body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-kit-choice-system,
  body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-shop-confidence{
    width:calc(100% - 32px);
  }
  body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .product-grid.rev46-kit-grid{
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
  }
}
@media (max-width:680px){
  :root{--rev198-breathe-md:clamp(42px,12vw,78px);--rev198-breathe-lg:clamp(58px,16vw,104px);}
  body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .page-hero,
  body[data-page="gallery"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev94-hero,
  body[data-page="about"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev94-hero,
  body[data-page="drop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev192-drop-route-hero{
    min-height:auto;
    padding-top:clamp(72px,18vw,118px);
    padding-bottom:clamp(54px,14vw,90px);
  }
  body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-kit-choice-system,
  body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-shop-confidence{
    width:calc(100% - 24px);
    padding:24px;
    border-radius:34px;
  }
  body[data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev197-choice-card{
    min-height:170px;
  }
  body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .product-grid.rev46-kit-grid{
    grid-template-columns:1fr!important;
    gap:28px!important;
  }
  body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev46-kit-grid .product-card.has-kit-motion{
    min-height:auto!important;
    padding:22px!important;
  }
  body[data-page="shop"][data-tabaq-revision="198-premium-breathing-room-joyful-boutique-rhythm"] .rev46-kit-grid .rev29-kit-preview{
    min-height:250px!important;
  }
}
/* REV198 — PREMIUM BREATHING ROOM + JOYFUL BOUTIQUE RHYTHM END */


/* REV200 — REV198 MOTION BASE + REV199 COMMERCE COMPRESSION START
   Purpose: inject the Rev199 page-role/ecommerce compression into the stable Rev198 hero/motion base.
   Guardrail: Rev198 motion-critical home hero, handoff and scroll-cinema sections remain active; only classes explicitly marked rev199-* are suppressed/reordered. */
.rev199-home-repeat-suppressed,
.rev199-shop-repeat-suppressed,
.rev199-drop-repeat-suppressed,
.rev199-product-repeat-suppressed {
  display: none !important;
}

html.rev199-ecommerce-compression .tabaq-page[data-page="home"] .rev197-kit-choice-system {
  margin-top: clamp(36px, 5vw, 76px);
  margin-bottom: clamp(44px, 6vw, 88px);
}

html.rev199-ecommerce-compression .tabaq-page[data-page="home"] #layers {
  margin-top: clamp(42px, 6vw, 90px);
  padding-top: clamp(64px, 8vw, 116px);
  padding-bottom: clamp(64px, 8vw, 116px);
}

html.rev199-ecommerce-compression .tabaq-page[data-page="home"] #layers .section__head {
  max-width: 760px;
}

html.rev199-ecommerce-compression .tabaq-page[data-page="home"] #layers .cards {
  margin-top: clamp(34px, 4.5vw, 64px);
}

html.rev199-ecommerce-compression .tabaq-page[data-page="home"] .rev181-home-drop-strip {
  margin-top: clamp(54px, 7vw, 108px);
  margin-bottom: clamp(72px, 8vw, 120px);
}

/* Shop now behaves like a boutique kit wall: hero > mood gate > filters > product grid > inside kit > FAQ. */
html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .page-shell {
  display: flex;
  flex-direction: column;
  gap: clamp(36px, 5vw, 76px);
}
html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .page-hero { order: 1; }
html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .rev199-shop-mood-gate { order: 2; }
html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .rev199-shop-filter-bar { order: 3; margin-top: 0; }
html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .rev199-primary-commerce-grid { order: 4; margin-top: 0; }
html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .rev199-shop-inside-kit { order: 5; margin-top: 0; }
html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .rev63-section--white { order: 6; margin-top: 0 !important; }

html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .page-hero {
  min-height: auto;
  padding-bottom: clamp(34px, 5vw, 74px);
  border-bottom: 1px solid rgba(20, 15, 12, .08);
}

html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .page-title {
  max-width: 780px;
}

html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .page-lead {
  max-width: 690px;
}

html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .rev154-kit-chooser,
html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .rev197-shop-confidence,
html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .rev63-section--white {
  border-radius: clamp(26px, 3vw, 42px);
}

html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .product-grid {
  gap: clamp(24px, 3vw, 38px);
}

html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .product-card {
  min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .rev29-kit-copy p:not(.page-kicker):not(.rev51-card-uniform-line),
html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .rev197-card-logic,
html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .rev48-card-notes,
html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .rev45-kit-includes {
  margin-top: 14px;
}

html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .product-card__actions {
  gap: 10px;
}

html.rev199-ecommerce-compression .tabaq-page[data-page="gallery"] .rev94-follow-path {
  margin-top: clamp(48px, 6vw, 96px);
}
html.rev199-ecommerce-compression .tabaq-page[data-page="gallery"] .rev94-product-rail {
  opacity: .78;
  transform: scale(.92);
}

html.rev199-ecommerce-compression .tabaq-page[data-page="about"] .rev94-proof-strip {
  margin-top: clamp(42px, 5vw, 86px);
}

html.rev199-ecommerce-compression .tabaq-page[data-page="drop"] .rev94-drop-picker,
html.rev199-ecommerce-compression .tabaq-page[data-page="drop"] .rev148-next-drop-gallery,
html.rev199-ecommerce-compression .tabaq-page[data-page="drop"] .rev94-final-clarity {
  margin-top: clamp(42px, 5vw, 78px);
}

html.rev199-ecommerce-compression .tabaq-page[data-page^="product-"] .rev43-detail-content {
  gap: clamp(28px, 4vw, 58px);
}
html.rev199-ecommerce-compression .tabaq-page[data-page^="product-"] .rev47-routine-strip,
html.rev199-ecommerce-compression .tabaq-page[data-page^="product-"] .rev43-detail-grid {
  margin-top: clamp(28px, 4vw, 54px);
}

@media (max-width: 760px) {
  html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .page-shell {
    gap: 34px;
  }
  html.rev199-ecommerce-compression .tabaq-page[data-page="home"] #layers .cards {
    grid-template-columns: 1fr;
  }
  html.rev199-ecommerce-compression .tabaq-page[data-page="shop"] .rev199-primary-commerce-grid {
    gap: 24px;
  }
}
/* REV200 — REV198 MOTION BASE + REV199 COMMERCE COMPRESSION END */

/* REV203 — DROP HERO BOTTLE THEATRE START
   Purpose: replace the repeated single Drop hero bottle with the uploaded four-bottle composition and give the Drop route a distinct, premium, playful product theatre.
   Scope: Drop route hero only. No router, cart, Layering, Shop, or global hero systems touched. */
.tabaq-page[data-page="drop"] .rev203-drop-visual{
  min-height:clamp(520px,70vh,760px);
  align-content:center;
  justify-items:center;
  overflow:visible;
  isolation:isolate;
}
.tabaq-page[data-page="drop"] .rev203-drop-visual::before{
  content:"DROP PREVIEW";
  position:absolute;
  right:clamp(-40px,2vw,22px);
  top:clamp(18px,7vh,72px);
  z-index:0;
  font-family:var(--display,ui-sans-serif);
  font-size:clamp(56px,8.2vw,142px);
  line-height:.78;
  letter-spacing:-.08em;
  color:rgba(255,72,43,.055);
  text-transform:uppercase;
  pointer-events:none;
  white-space:nowrap;
}
.rev203-drop-glow{
  position:absolute;
  z-index:0;
  width:min(48vw,660px);
  aspect-ratio:1;
  border-radius:999px;
  background:
    radial-gradient(circle at 44% 40%,rgba(255,255,255,.92),rgba(255,255,255,.42) 30%,rgba(255,195,178,.20) 52%,rgba(255,232,118,.10) 72%,transparent 76%),
    conic-gradient(from 140deg,rgba(255,83,52,.16),rgba(255,236,96,.12),rgba(191,165,255,.16),rgba(255,83,52,.16));
  filter:blur(18px) saturate(1.08);
  opacity:.86;
  transform:translate3d(1%,1%,0) scale(1.04);
  pointer-events:none;
}
.rev203-bottle-scene{
  --stage-w:min(52vw,760px);
  --stage-h:calc(var(--stage-w) * .80200861);
  position:relative;
  z-index:2;
  width:var(--stage-w);
  height:var(--stage-h);
  margin:0;
  overflow:visible;
  transform-style:preserve-3d;
  perspective:1100px;
  pointer-events:auto;
}
.rev203-drop-bottle{
  position:absolute;
  display:block;
  height:auto;
  user-select:none;
  -webkit-user-drag:none;
  transform-origin:50% 92%;
  will-change:transform,opacity,filter;
  filter:drop-shadow(18px 34px 34px rgba(64,38,27,.18)) drop-shadow(3px 8px 9px rgba(64,38,27,.12));
  background:transparent!important;
  border:0!important;
  outline:0!important;
}
.rev203-drop-bottle--1{left:-.286944%;top:-.286944%;width:24.1033%;z-index:2;}
.rev203-drop-bottle--2{left:29.555237%;top:16.499283%;width:32.998565%;z-index:4;}
.rev203-drop-bottle--3{left:68.723099%;top:19.081779%;width:12.625538%;z-index:3;}
.rev203-drop-bottle--4{left:87.087518%;top:19.081779%;width:13.199426%;z-index:3;}
.rev203-drop-caption{
  position:absolute;
  z-index:5;
  left:50%;
  bottom:-18px;
  transform:translateX(-50%);
  width:max-content;
  max-width:min(360px,82vw);
  padding:9px 13px;
  border:1px solid rgba(23,17,15,.12);
  border-radius:999px;
  background:rgba(255,252,244,.72);
  backdrop-filter:blur(12px) saturate(1.1);
  box-shadow:0 14px 34px rgba(64,38,27,.08);
  font-size:11px;
  line-height:1;
  font-weight:950;
  letter-spacing:.12em;
  text-transform:uppercase;
  color:rgba(23,17,15,.68);
  text-align:center;
}
.rev203-drop-status-card{z-index:7;right:clamp(-4px,1.2vw,18px);bottom:clamp(20px,6vw,70px);}
.tabaq-page[data-page="drop"] .rev192-drop-route-hero .rev203-drop-visual .rev70-drop-product-frame,
.tabaq-page[data-page="drop"] .rev192-drop-route-hero .rev203-drop-visual .rev70-drop-product{display:none!important;}
html.no-gsap .rev203-drop-bottle,
html.no-js .rev203-drop-bottle{
  opacity:1!important;
  transform:none!important;
}
html.no-gsap .rev203-bottle-scene,
html.no-js .rev203-bottle-scene{
  opacity:1!important;
  transform:none!important;
}
@media(max-width:1100px){
  .rev203-bottle-scene{--stage-w:min(76vw,680px);}
  .rev203-drop-glow{width:min(70vw,620px);}
}
@media(max-width:980px){
  .tabaq-page[data-page="drop"] .rev203-drop-visual{min-height:clamp(430px,62vh,620px);}
  .rev203-bottle-scene{--stage-w:min(84vw,560px);}
  .rev203-drop-status-card{position:relative;right:auto;bottom:auto;margin-top:22px;}
}
@media(max-width:620px){
  .rev203-bottle-scene{--stage-w:min(96vw,460px);}
  .rev203-drop-glow{width:92vw;filter:blur(14px);}
  .rev203-drop-caption{bottom:-12px;font-size:9px;letter-spacing:.09em;}
  .tabaq-page[data-page="drop"] .rev203-drop-visual::before{display:none;}
}
@media (prefers-reduced-motion: reduce){
  .rev203-drop-bottle,
  .rev203-bottle-scene,
  .rev203-drop-glow{animation:none!important;transition:none!important;transform:none!important;opacity:1!important;}
}
/* REV203 — DROP HERO BOTTLE THEATRE END */

/* REV203 — DROP HERO THEATRE VISIBILITY SAFETY START
   Purpose: the custom Drop theatre owns its own GSAP entrance; generic .reveal must never hide the hero bottle stage. */
.tabaq-page[data-page="drop"] .rev203-drop-visual.reveal{opacity:1!important;transform:none!important;}
/* REV203 — DROP HERO THEATRE VISIBILITY SAFETY END */


/* ======================================================================
   REV204 — SHOP KIT HOVER REVEAL
   Purpose: add the uploaded tactile box-open animation to the Shop/Kits
   page as a premium product-proof moment. This system is intentionally
   scoped to `.rev204-kit-reveal` and does not touch Rev203 Drop theatre,
   Rev202 animation base, routing, cart, or the Layering route.
   ====================================================================== */
.rev204-kit-reveal {
  --rev204-paper: #fffaf0;
  --rev204-ink: #17120f;
  --rev204-soft: rgba(255, 211, 232, 0.46);
  --rev204-glow: rgba(255, 106, 84, 0.14);
  width: min(1180px, calc(100vw - 32px));
  margin: clamp(52px, 8vw, 108px) auto clamp(44px, 7vw, 96px);
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(360px, 1.18fr);
  gap: clamp(28px, 5vw, 74px);
  align-items: center;
  padding: clamp(24px, 5vw, 62px);
  border-radius: clamp(30px, 4vw, 54px);
  background:
    radial-gradient(circle at 82% 18%, rgba(255, 232, 103, 0.42), transparent 34%),
    radial-gradient(circle at 56% 76%, rgba(190, 159, 255, 0.24), transparent 42%),
    linear-gradient(135deg, rgba(255,255,255,0.88), rgba(255,246,236,0.74));
  border: 1px solid rgba(28, 22, 17, 0.08);
  box-shadow: 0 28px 90px rgba(38, 27, 16, 0.10);
  overflow: visible;
  isolation: isolate;
}
.rev204-kit-reveal__copy {
  position: relative;
  z-index: 2;
  display: grid;
  align-content: center;
  gap: 18px;
}
.rev204-kicker {
  width: max-content;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.68);
  color: #ff3d2b;
  font: 900 0.72rem/1 Inter, system-ui, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  box-shadow: inset 0 0 0 1px rgba(20,14,10,0.06);
}
.rev204-kicker::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff4b39;
  box-shadow: 0 0 0 7px rgba(255,75,57,0.10);
}
.rev204-kit-reveal h2 {
  max-width: 9.8ch;
  margin: 0;
  color: var(--rev204-ink);
  font-family: "Archivo Black", Inter, system-ui, sans-serif;
  font-size: clamp(2.55rem, 6.2vw, 5.9rem);
  line-height: 0.86;
  letter-spacing: -0.07em;
  text-transform: uppercase;
}
.rev204-kit-reveal p {
  max-width: 44ch;
  margin: 0;
  color: rgba(23,18,15,0.68);
  font: 800 clamp(0.98rem, 1.1vw, 1.12rem)/1.45 Inter, system-ui, sans-serif;
}
.rev204-kit-reveal__facts {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  width: min(100%, 520px);
  margin-top: 4px;
}
.rev204-kit-reveal__facts span {
  min-height: 76px;
  display: grid;
  align-content: center;
  gap: 5px;
  padding: 13px 12px;
  border-radius: 20px;
  background: rgba(255,255,255,0.62);
  box-shadow: inset 0 0 0 1px rgba(24,18,13,0.07);
  color: rgba(23,18,15,0.72);
  font: 900 0.74rem/1.05 Inter, system-ui, sans-serif;
  text-transform: uppercase;
  letter-spacing: -0.01em;
}
.rev204-kit-reveal__facts b {
  color: #ff4b39;
  font-size: 0.72rem;
  letter-spacing: 0.10em;
}
.rev204-kit-reveal__cta {
  width: max-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  margin-top: 4px;
  padding: 0 20px;
  border-radius: 999px;
  background: var(--rev204-ink);
  color: #fffaf4;
  font: 950 0.82rem/1 Inter, system-ui, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  box-shadow: 0 16px 34px rgba(23,18,15,0.18);
  transition: transform 260ms ease, box-shadow 260ms ease, background 260ms ease;
}
.rev204-kit-reveal__cta:hover,
.rev204-kit-reveal__cta:focus-visible {
  transform: translateY(-2px);
  background: #ff3d2b;
  box-shadow: 0 20px 44px rgba(255,61,43,0.22);
}
.rev204-kit-reveal__stage {
  position: relative;
  min-height: clamp(520px, 58vw, 780px);
  display: grid;
  place-items: center;
  overflow: visible;
  isolation: isolate;
}
.rev204-kit-reveal__stage::before,
.rev204-kit-reveal__stage::after {
  content: "";
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
  z-index: 0;
}
.rev204-kit-reveal__stage::before {
  width: min(82%, 560px);
  aspect-ratio: 1;
  background: radial-gradient(circle, rgba(255,255,255,0.88), rgba(255,188,214,0.30) 42%, transparent 70%);
  filter: blur(4px);
}
.rev204-kit-reveal__stage::after {
  width: min(64%, 420px);
  height: 24px;
  bottom: clamp(42px, 6vw, 88px);
  background: rgba(55, 38, 24, 0.18);
  filter: blur(18px);
  transform: scaleX(0.78);
}
.rev204-kit {
  --kit-size: min(64vmin, 640px);
  --tray-slide-y: clamp(145px, 23vw, 270px);
  position: relative;
  z-index: 2;
  width: var(--kit-size);
  height: var(--kit-size);
  display: block;
  padding: 0;
  border: 0;
  background: transparent;
  overflow: visible;
  isolation: isolate;
  cursor: pointer;
  transform-origin: 50% 54%;
  filter: drop-shadow(0 34px 42px rgba(70, 42, 28, 0.18));
  -webkit-tap-highlight-color: transparent;
}
.rev204-kit:focus-visible {
  outline: 3px solid rgba(255,75,57,0.52);
  outline-offset: 12px;
  border-radius: 28px;
}
.rev204-kit__asset {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center center;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
  will-change: transform, opacity, filter;
  background: transparent;
}
.rev204-kit__tray {
  z-index: 1;
  transform: translate3d(0, 0, 0) rotate(-0.4deg) scale(0.985);
  transition: transform 780ms cubic-bezier(.22, .61, .36, 1), filter 780ms cubic-bezier(.22, .61, .36, 1);
}
.rev204-kit__lid {
  z-index: 2;
  transform: translate3d(0, 0, 0) rotate(0deg);
  transition: transform 640ms cubic-bezier(.22, .61, .36, 1), filter 640ms cubic-bezier(.22, .61, .36, 1);
}
.rev204-kit:hover .rev204-kit__tray,
.rev204-kit.is-open .rev204-kit__tray {
  transform: translate3d(0, var(--tray-slide-y), 0) rotate(2deg) scale(1.015);
  filter: saturate(1.05) brightness(1.02);
}
.rev204-kit:hover .rev204-kit__lid,
.rev204-kit.is-open .rev204-kit__lid {
  transform: translate3d(0, -18px, 0) rotate(-1.6deg) scale(0.985);
  filter: brightness(1.02);
}
.rev204-kit-reveal__hint {
  position: absolute;
  z-index: 3;
  right: clamp(12px, 4vw, 54px);
  bottom: clamp(12px, 4vw, 42px);
  width: max-content;
  padding: 10px 13px;
  border-radius: 999px;
  background: rgba(255,255,255,0.76);
  box-shadow: inset 0 0 0 1px rgba(20,14,10,0.07), 0 14px 28px rgba(38, 27, 16, 0.10);
  color: rgba(23,18,15,0.66) !important;
  font: 950 0.68rem/1 Inter, system-ui, sans-serif !important;
  text-transform: uppercase;
  letter-spacing: 0.10em;
}
@media (max-width: 980px) {
  .rev204-kit-reveal {
    grid-template-columns: 1fr;
    padding: clamp(22px, 5vw, 44px);
    gap: 12px;
  }
  .rev204-kit-reveal h2 {
    max-width: 12ch;
  }
  .rev204-kit-reveal__stage {
    min-height: clamp(470px, 88vw, 660px);
  }
  .rev204-kit {
    --kit-size: min(82vw, 560px);
    --tray-slide-y: clamp(130px, 31vw, 245px);
  }
}
@media (max-width: 640px) {
  .rev204-kit-reveal {
    width: min(100% - 20px, 560px);
    margin-block: 42px 54px;
    border-radius: 32px;
  }
  .rev204-kit-reveal__facts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .rev204-kit-reveal__stage {
    min-height: 455px;
  }
  .rev204-kit {
    --kit-size: min(88vw, 420px);
    --tray-slide-y: clamp(112px, 34vw, 180px);
  }
  .rev204-kit-reveal__hint {
    right: 50%;
    transform: translateX(50%);
  }
}
@media (prefers-reduced-motion: reduce) {
  .rev204-kit__tray,
  .rev204-kit__lid,
  .rev204-kit-reveal__cta {
    transition-duration: 1ms !important;
  }
}
/* REV204 — SHOP KIT HOVER REVEAL END */


/* REV205 — COMING DROP KIT HOVER START
   Purpose: make the uploaded clean-fit kit hover the visible “coming to the drop” object, while preserving Rev203 Drop hero bottle theatre and Rev204 Shop reveal. */
.rev205-coming-kit-stage {
  position: relative;
  min-height: clamp(460px, 47vw, 620px);
  padding: clamp(22px, 4vw, 44px);
  overflow: visible;
  isolation: isolate;
  background:
    radial-gradient(circle at 50% 42%, rgba(255,231,106,.22), transparent 32%),
    radial-gradient(circle at 70% 88%, rgba(255,75,57,.18), transparent 42%),
    rgba(255,255,255,.075);
}
.rev205-coming-kit-stage::before {
  content: "";
  position: absolute;
  inset: 11% 8% 8%;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(255,255,255,.20), rgba(255,255,255,.055) 42%, transparent 70%);
  filter: blur(8px);
  pointer-events: none;
  z-index: 0;
}
.rev205-coming-kit-stage::after {
  content: "COMING KIT";
  position: absolute;
  right: clamp(18px, 3vw, 34px);
  top: clamp(18px, 3vw, 34px);
  z-index: 3;
  padding: 10px 13px;
  border-radius: 999px;
  background: rgba(255,231,106,.92);
  color: #11110e;
  font: 950 10px/1 Inter, system-ui, sans-serif;
  letter-spacing: .16em;
  box-shadow: 0 18px 36px rgba(0,0,0,.18);
}
.rev205-drop-kit-hover {
  --rev205-kit-width: min(92%, 620px);
  --rev205-slide-distance: 100%;
  position: relative;
  z-index: 2;
  display: block;
  width: var(--rev205-kit-width);
  aspect-ratio: 822 / 412;
  margin: clamp(18px, 5vw, 56px) auto clamp(74px, 11vw, 118px);
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  overflow: visible;
  isolation: isolate;
  filter:
    drop-shadow(0 28px 35px rgba(0,0,0,.26))
    drop-shadow(0 4px 10px rgba(255,231,106,.10));
  transform-origin: 50% 50%;
}
.rev205-drop-kit-hover:focus-visible {
  outline: 3px solid #ffe76a;
  outline-offset: 16px;
  border-radius: 24px;
}
.rev205-drop-kit-hover__part {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  background: transparent;
  user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
  will-change: transform, filter;
  transform: translate3d(0,0,0);
  transition:
    transform 720ms cubic-bezier(.22,.61,.36,1),
    filter 720ms cubic-bezier(.22,.61,.36,1),
    opacity 360ms ease;
}
.rev205-drop-kit-hover__tray {
  z-index: 1;
}
.rev205-drop-kit-hover__lid {
  z-index: 2;
}
.rev205-drop-kit-hover:hover .rev205-drop-kit-hover__tray,
.rev205-drop-kit-hover:focus .rev205-drop-kit-hover__tray,
.rev205-drop-kit-hover.is-open .rev205-drop-kit-hover__tray {
  transform: translate3d(0, var(--rev205-slide-distance), 0);
  filter: drop-shadow(0 20px 22px rgba(0,0,0,.22));
}
.rev205-drop-kit-hover:hover .rev205-drop-kit-hover__lid,
.rev205-drop-kit-hover:focus .rev205-drop-kit-hover__lid,
.rev205-drop-kit-hover.is-open .rev205-drop-kit-hover__lid {
  transform: translate3d(0, -3%, 0) rotate(-.35deg);
  filter: drop-shadow(0 18px 18px rgba(0,0,0,.18));
}
.rev205-coming-kit-signals {
  position: relative;
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: clamp(-54px, -5vw, -26px);
}
.rev205-coming-kit-signals span {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0 13px;
  border-radius: 999px;
  background: rgba(255,255,255,.13);
  border: 1px solid rgba(255,255,255,.14);
  color: rgba(255,255,255,.78);
  font: 900 10px/1 Inter, system-ui, sans-serif;
  letter-spacing: .12em;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
}
.rev205-coming-kit-stage figcaption {
  position: relative;
  z-index: 3;
  margin-top: 8px;
}
@media (max-width: 940px) {
  .rev205-coming-kit-stage {
    min-height: clamp(430px, 78vw, 590px);
  }
  .rev205-drop-kit-hover {
    --rev205-kit-width: min(92vw, 590px);
    margin-top: clamp(24px, 7vw, 52px);
  }
}
@media (max-width: 620px) {
  .rev205-coming-kit-stage {
    min-height: clamp(390px, 100vw, 520px);
    padding-inline: 14px;
  }
  .rev205-coming-kit-stage::after {
    right: 14px;
    top: 14px;
  }
  .rev205-drop-kit-hover {
    --rev205-kit-width: min(88vw, 430px);
    margin-bottom: clamp(70px, 22vw, 110px);
  }
  .rev205-coming-kit-signals {
    margin-top: -42px;
  }
  .rev205-coming-kit-signals span {
    min-height: 30px;
    padding-inline: 10px;
    font-size: 9px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .rev205-drop-kit-hover__part { transition-duration: 1ms !important; }
  .rev205-drop-kit-hover:hover .rev205-drop-kit-hover__tray,
  .rev205-drop-kit-hover:focus .rev205-drop-kit-hover__tray,
  .rev205-drop-kit-hover.is-open .rev205-drop-kit-hover__tray {
    transform: translate3d(0, 86%, 0);
  }
}
/* REV205 — COMING DROP KIT HOVER END */


/* REV206 — DROP KIT HOVER RUNTIME FIX START
   Purpose: force the coming-drop kit tray/lid reveal to work even after GSAP writes inline transforms during the entrance animation. */
.rev205-drop-kit-hover:hover .rev205-drop-kit-hover__tray,
.rev205-drop-kit-hover:focus-visible .rev205-drop-kit-hover__tray,
.rev205-drop-kit-hover.is-open .rev205-drop-kit-hover__tray {
  transform: translate3d(0, var(--rev205-slide-distance), 0) !important;
}
.rev205-drop-kit-hover:hover .rev205-drop-kit-hover__lid,
.rev205-drop-kit-hover:focus-visible .rev205-drop-kit-hover__lid,
.rev205-drop-kit-hover.is-open .rev205-drop-kit-hover__lid {
  transform: translate3d(0, -3%, 0) rotate(-.35deg) !important;
}
.rev205-drop-kit-hover[data-rev206-hover-state="open"] .rev205-drop-kit-hover__tray {
  transform: translate3d(0, var(--rev205-slide-distance), 0) !important;
}
.rev205-drop-kit-hover[data-rev206-hover-state="open"] .rev205-drop-kit-hover__lid {
  transform: translate3d(0, -3%, 0) rotate(-.35deg) !important;
}
.rev205-drop-kit-hover__part {
  backface-visibility: hidden;
}
/* REV206 — DROP KIT HOVER RUNTIME FIX END */

/* REV207 — FULL COMMERCE CONVERSION POLISH START
   Purpose: final ecomm confidence, cart checkout readiness, and backend-aware payment status without altering hero/motion systems. */
html.rev207-full-commerce-backend .rev138-cart__shell{
  max-width:min(94vw, 520px);
}
.rev207-commerce-footer{
  display:grid;
  gap:14px;
}
.rev207-cart-total{
  border-top:1px solid rgba(22,18,14,.12);
  padding-top:16px;
}
.rev207-cart-confidence{
  display:grid;
  grid-template-columns:1fr;
  gap:7px;
  padding:12px;
  border-radius:18px;
  background:rgba(255,255,255,.78);
  border:1px solid rgba(22,18,14,.08);
  box-shadow:0 16px 44px rgba(29,21,13,.06);
  font-size:11px;
  font-weight:900;
  letter-spacing:.04em;
  text-transform:uppercase;
  color:rgba(22,18,14,.62);
}
.rev207-cart-confidence span::before{
  content:'✓';
  margin-right:8px;
  color:#ff3f2f;
}
.rev207-pay-button{
  min-height:54px;
  border-radius:999px;
  font-weight:950;
  letter-spacing:.02em;
}
.rev207-cart-line-proof{
  display:flex;
  flex-wrap:wrap;
  gap:6px;
  margin-top:9px;
}
.rev207-cart-line-proof span{
  display:inline-flex;
  align-items:center;
  border-radius:999px;
  border:1px solid rgba(22,18,14,.1);
  background:rgba(255,255,255,.75);
  padding:5px 8px;
  font-size:10px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.04em;
  color:rgba(22,18,14,.58);
}
.rev207-checkout-loading .rev207-pay-button,
.rev207-checkout-loading [data-rev138-checkout]{
  opacity:.72;
  pointer-events:none;
}
[data-rev207-checkout-status]{
  min-height:34px;
}
html.rev207-full-commerce-backend .product-card__actions .rev138-add-cart,
html.rev207-full-commerce-backend .rev48-primary-drop.rev138-add-cart,
html.rev207-full-commerce-backend .rev47-sticky-cta .rev138-add-cart{
  background:#111;
  color:#fff;
  border-color:#111;
}
@media (max-width: 760px){
  .rev207-cart-confidence{font-size:10px;}
  .rev207-pay-button{min-height:58px;}
}
/* REV207 — FULL COMMERCE CONVERSION POLISH END */
