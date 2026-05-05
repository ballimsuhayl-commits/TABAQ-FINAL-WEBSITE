/* REV40 — AWWWARDS DISCIPLINE + SHOP EDITORIAL MOTION POLISH START
   Purpose: award-level discipline without veering off: robust ribbon, larger hero product presence,
   slower reversible docking, no duplicated Body Mist, and stable Layering reinitialisation. */
(function(){
  'use strict';
  var ROLES = ['mist','edp','oil1','oil2'];
  var BASE_ROTATION = {mist:-5,edp:2,oil1:-4,oil2:5};
  var DOCK_ROTATION = {mist:0,edp:0,oil1:0,oil2:0};
  var CURVE_DESKTOP = 230;
  var CURVE_MOBILE = 88;
  var RESIZE_WAIT = 120;
  var FLIGHT_START = .018;
  var FLIGHT_END = .988;
  var SOURCE_FADE_END = .30;
  var TARGET_REVEAL_START = .74;
  var TARGET_REVEAL_END = .91;
  var CLONE_IN_END = .09;
  var CLONE_OUT_START = .90;
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var state = {measured:false,items:[],startY:0,endY:1,raf:0,resizeTimer:0,layer:null,lastPage:''};

  function qs(sel,root){ return (root||document).querySelector(sel); }
  function qsa(sel,root){ return Array.prototype.slice.call((root||document).querySelectorAll(sel)); }
  function clamp(n,a,b){ return Math.max(a,Math.min(b,n)); }
  function lerp(a,b,t){ return a + (b-a) * t; }
  function smoothstep(a,b,x){ var t=clamp((x-a)/(b-a),0,1); return t*t*(3-2*t); }
  function smoother(t){ return t*t*t*(t*(t*6-15)+10); }
  function px(n){ return Math.round(n * 1000) / 1000; }
  function currentPageName(){ return (window.location.hash || '#home').replace('#','') || 'home'; }
  function isShopActive(){ return currentPageName() === 'shop'; }
  function shopPage(){ return qs('.tabaq-page[data-page="shop"]'); }
  function docRect(el){ var r = el.getBoundingClientRect(); return {left:r.left + window.scrollX, top:r.top + window.scrollY, width:r.width, height:r.height, right:r.right + window.scrollX, bottom:r.bottom + window.scrollY}; }
  function bottomCentre(r){ return {x:r.left + r.width/2, y:r.top + r.height}; }

  function repairRibbon(){
    var ribbon = qs('.drop-time-ribbon');
    var track = ribbon && qs('.drop-time-ribbon__track', ribbon);
    if(!ribbon || !track) return;
    var labels = ['Next drop time / announcing soon','Early access opens first','Four-layer kits launch first','Drop value stays under the hood'];
    var spans = qsa('span', track).filter(function(s){ return s.textContent.trim(); });
    if(spans.length < 8){
      track.innerHTML = '';
      labels.concat(labels, labels).forEach(function(label){
        var span = document.createElement('span');
        span.textContent = label;
        track.appendChild(span);
      });
    }
  }

  function ensureLayer(){
    if(state.layer && document.body.contains(state.layer)) return state.layer;
    var old = qs('.rev39-shop-dock-layer');
    if(old) old.remove();
    var layer = document.createElement('div');
    layer.className = 'rev40-shop-dock-layer';
    layer.setAttribute('aria-hidden','true');
    document.body.appendChild(layer);
    state.layer = layer;
    return layer;
  }
  function ensureClone(role, sourceImg){
    var layer = ensureLayer();
    var clone = qs('.rev40-shop-dock-bottle[data-rev40-role="' + role + '"]', layer);
    if(!clone){
      clone = document.createElement('figure');
      clone.className = 'rev40-shop-dock-bottle';
      clone.dataset.rev40Role = role;
      var img = document.createElement('img');
      img.alt = '';
      img.decoding = 'async';
      clone.appendChild(img);
      layer.appendChild(clone);
    }
    var imgEl = qs('img', clone);
    if(imgEl && sourceImg && imgEl.src !== sourceImg.src) imgEl.src = sourceImg.src;
    return clone;
  }
  function hideLayer(){
    if(!state.layer) return;
    qsa('.rev40-shop-dock-bottle', state.layer).forEach(function(el){
      el.classList.remove('is-visible');
      el.style.opacity = '0';
      el.style.visibility = 'hidden';
    });
  }
  function clearShopMotion(page){
    if(!page) return;
    page.classList.remove('rev40-dock-flight','rev40-docked','rev39-dock-flight','rev39-docked','rev38-dock-flight','rev38-docked');
    qsa('.shop-motion-bottle', page).forEach(function(el){ el.style.opacity = ''; el.style.visibility = ''; el.style.filter = ''; });
    qsa('.rev52-role-product img', page).forEach(function(el){ el.style.opacity = ''; el.style.visibility = ''; el.style.filter = ''; });
    qsa('.rev40-dock-cue,.rev39-dock-cue,.rev38-dock-cue', page).forEach(function(el){ el.classList.remove('rev40-dock-cue','rev39-dock-cue','rev38-dock-cue'); });
    hideLayer();
  }
  function setWaiting(page){
    if(!page || reduced) return;
    page.classList.remove('rev40-dock-flight','rev40-docked','rev39-dock-flight','rev39-docked');
    qsa('.shop-motion-bottle', page).forEach(function(el){ el.style.opacity = '1'; el.style.visibility = 'visible'; });
    qsa('.rev52-role-product img', page).forEach(function(el){ el.style.opacity = '0'; el.style.visibility = 'hidden'; });
    hideLayer();
  }
  function setFallback(page){
    if(!page) return;
    page.classList.remove('rev40-dock-flight','rev40-docked','rev39-dock-flight','rev39-docked');
    qsa('.shop-motion-bottle', page).forEach(function(el){ el.style.opacity = '1'; el.style.visibility = 'visible'; });
    qsa('.rev52-role-product img', page).forEach(function(el){ el.style.opacity = '1'; el.style.visibility = 'visible'; });
    hideLayer();
  }
  function setDocked(page){
    if(!page || reduced) return;
    page.classList.remove('rev40-dock-flight','rev39-dock-flight','rev38-dock-flight');
    page.classList.add('rev40-docked');
    qsa('.shop-motion-bottle', page).forEach(function(el){ el.style.opacity = '0'; el.style.visibility = 'hidden'; });
    qsa('.rev52-role-product img', page).forEach(function(el){ el.style.opacity = '1'; el.style.visibility = 'visible'; });
    hideLayer();
  }

  function runPageReveal(pageName){
    var name = pageName || currentPageName();
    if(state.lastPage === name) return;
    state.lastPage = name;
    qsa('.tabaq-page').forEach(function(page){ page.classList.remove('rev35-page-entering','rev38-page-entering','rev39-page-entering','rev40-page-entering'); });
    var active = qs('.tabaq-page[data-page="' + name + '"]') || qs('.tabaq-page[data-page="home"]');
    if(!active || reduced) return;
    active.classList.add('rev40-page-entering');
    window.setTimeout(function(){ active.classList.remove('rev40-page-entering'); }, 760);
  }

  function measureShop(){
    var page = shopPage();
    if(!page || reduced) return false;
    if(!isShopActive()){
      clearShopMotion(page);
      state.measured = false;
      return false;
    }
    var hero = qs('.page-hero', page);
    var guide = qs('.rev48-shop-guide', page);
    if(!hero || !guide) return false;

    var items = [];
    for(var i=0;i<ROLES.length;i++){
      var role = ROLES[i];
      var sourceFigure = qs('.shop-motion-bottle[data-shop-role="' + role + '"]', page);
      var sourceImg = sourceFigure && qs('img', sourceFigure);
      var targetCard = qs('.rev52-role-card[data-role-product="' + role + '"]', page);
      var targetImg = targetCard && qs('.rev52-role-product img', targetCard);
      if(!sourceFigure || !sourceImg || !targetCard || !targetImg) return false;

      sourceFigure.style.visibility = 'visible';
      targetImg.style.visibility = 'visible';
      targetImg.style.opacity = '1';

      var sourceRect = docRect(sourceImg);
      var targetRect = docRect(targetImg);
      if(sourceRect.width < 5 || sourceRect.height < 5 || targetRect.width < 5 || targetRect.height < 5) return false;

      var clone = ensureClone(role, sourceImg);
      clone.style.width = px(sourceRect.width) + 'px';
      clone.style.height = px(sourceRect.height) + 'px';

      items.push({
        role:role, i:i, sourceFigure:sourceFigure, sourceImg:sourceImg,
        targetCard:targetCard, targetImg:targetImg, clone:clone,
        source:bottomCentre(sourceRect), target:bottomCentre(targetRect),
        sourceW:sourceRect.width, sourceH:sourceRect.height,
        targetW:targetRect.width, targetH:targetRect.height,
        scale:clamp(targetRect.height / sourceRect.height, .36, 1.04),
        rot0:BASE_ROTATION[role] || 0, rot1:DOCK_ROTATION[role] || 0
      });
    }

    var heroTop = docRect(hero).top;
    var guideTop = docRect(guide).top;
    var vh = Math.max(window.innerHeight, 1);
    /* Long editorial runway. Dock is complete before the role cards become the reading target. */
    var end = Math.max(heroTop + vh * 1.12, guideTop - vh * .70);
    var minTravel = Math.max(1160, vh * 1.34);
    var preferredStart = Math.max(0, heroTop + vh * .14);
    var start = Math.max(0, end - minTravel);
    if(end - preferredStart >= vh * 1.02) start = preferredStart;

    state.startY = start;
    state.endY = Math.max(start + minTravel, end);
    state.items = items;
    state.measured = true;
    return true;
  }
  function rawDockProgress(){ return clamp((window.scrollY - state.startY) / Math.max(1, state.endY - state.startY), 0, 1); }

  function draw(progress){
    var page = shopPage();
    if(!page || !isShopActive() || !state.measured){ hideLayer(); return; }
    var visual = clamp(progress,0,1);
    if(visual <= FLIGHT_START){ setWaiting(page); return; }
    if(visual >= FLIGHT_END){ setDocked(page); return; }

    page.classList.add('rev40-dock-flight');
    page.classList.remove('rev40-docked','rev39-docked','rev38-docked');

    var sourceOpacity = 1 - smoothstep(FLIGHT_START, SOURCE_FADE_END, visual);
    var targetOpacity = smoothstep(TARGET_REVEAL_START, TARGET_REVEAL_END, visual);
    var cloneOpacity = smoothstep(FLIGHT_START, CLONE_IN_END, visual) * (1 - smoothstep(CLONE_OUT_START, FLIGHT_END, visual));
    var curveLift = window.innerWidth < 760 ? CURVE_MOBILE : CURVE_DESKTOP;

    state.items.forEach(function(item){
      var p = smoother(smoothstep(.025,.975,visual));
      var stagger = (item.i - 1.5) * 12 * Math.sin(p * Math.PI);
      var x = lerp(item.source.x, item.target.x, p) + stagger;
      var y = lerp(item.source.y, item.target.y, p) - Math.sin(p * Math.PI) * curveLift;
      var scale = lerp(1, item.scale, p);
      var rot = lerp(item.rot0, item.rot1, p);
      var viewportX = x - window.scrollX;
      var viewportY = y - window.scrollY;
      var clone = item.clone;

      item.sourceFigure.style.opacity = px(sourceOpacity);
      item.sourceFigure.style.visibility = sourceOpacity > .02 ? 'visible' : 'hidden';
      item.targetImg.style.opacity = px(targetOpacity);
      item.targetImg.style.visibility = targetOpacity > .02 ? 'visible' : 'hidden';
      item.targetCard.classList.toggle('rev40-dock-cue', visual > .78 && visual < .99);

      clone.style.width = px(item.sourceW) + 'px';
      clone.style.height = px(item.sourceH) + 'px';
      clone.style.transform = 'translate3d(' + px(viewportX - item.sourceW/2) + 'px,' + px(viewportY - item.sourceH) + 'px,0) scale(' + px(scale) + ') rotate(' + px(rot) + 'deg)';
      clone.style.opacity = px(cloneOpacity);
      clone.style.visibility = cloneOpacity > .012 ? 'visible' : 'hidden';
      clone.classList.toggle('is-visible', cloneOpacity > .012);
    });
  }

  function render(){
    state.raf = 0;
    var page = shopPage();
    if(!page || reduced){ hideLayer(); return; }
    if(!isShopActive()){
      clearShopMotion(page);
      return;
    }
    if(!state.measured && !measureShop()){
      setFallback(page);
      return;
    }
    draw(rawDockProgress());
  }
  function requestRender(){ if(state.raf) return; state.raf = window.requestAnimationFrame(render); }
  function refreshSoon(){
    window.clearTimeout(state.resizeTimer);
    state.resizeTimer = window.setTimeout(function(){ state.measured = false; measureShop(); requestRender(); }, RESIZE_WAIT);
  }
  function onRouteChange(pageName){
    repairRibbon();
    runPageReveal(pageName);
    state.measured = false;
    window.setTimeout(function(){ measureShop(); requestRender(); }, 80);
  }

  function ensureLayeringScenes(){
    var root = document.querySelector('.tabaq-rev7drop[data-rev7-drop-animation]');
    var mount = document.querySelector('#rev7drop-scenes');
    if(!root || !mount) return;
    if(mount.children.length === 0 && typeof window.TABAQRev7LayeringInit === 'function'){
      delete root.dataset.rev7DropReady;
      window.TABAQRev7LayeringInit();
    }
  }
  function onLayeringRoute(pageName){
    var name = pageName || currentPageName();
    if(name === 'layering') window.setTimeout(ensureLayeringScenes, 80);
  }

  function boot(){
    repairRibbon();
    runPageReveal();
    ensureLayeringScenes();
    if(!reduced){
      measureShop();
      requestRender();
      window.addEventListener('scroll', requestRender, {passive:true});
      window.addEventListener('resize', refreshSoon, {passive:true});
      window.addEventListener('orientationchange', refreshSoon, {passive:true});
      window.addEventListener('hashchange', function(){ var name=currentPageName(); onRouteChange(name); onLayeringRoute(name); });
      window.addEventListener('popstate', function(){ var name=currentPageName(); onRouteChange(name); onLayeringRoute(name); });
      window.addEventListener('tabaq:page-change', function(event){ var name = event && event.detail && event.detail.page ? event.detail.page : currentPageName(); onRouteChange(name); onLayeringRoute(name); });
      qsa('.shop-motion-bottle img,.rev52-role-product img').forEach(function(img){ if(!img.complete) img.addEventListener('load', refreshSoon, {once:true}); });
      if(document.fonts && document.fonts.ready){ document.fonts.ready.then(refreshSoon).catch(function(){}); }
    } else {
      var page = shopPage();
      if(page) setFallback(page);
    }
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();
/* REV40 — AWWWARDS DISCIPLINE + SHOP EDITORIAL MOTION POLISH END */
