/* REV 7 INJECTION — SCROLL BOTTLE DROP ANIMATION START */
(function(){
  function initTabaqRev7DropAnimation(){
    const root = document.querySelector('.tabaq-rev7drop[data-rev7-drop-animation]');
    if(!root || root.dataset.rev7DropReady === 'true') return;
    root.dataset.rev7DropReady = 'true';

    /* REV 7 — DATA SETUP START */
    const TABAQ_SCENES = [{"id": "body", "step": "01", "name": "BODY MIST", "micro": "spray cloud lands at the collarbone", "empty": "assets/images/tabaq_asset_005_89147e8e03.png", "final": "assets/images/tabaq_asset_006_80c7cbda50.png", "product": "assets/images/tabaq_asset_007_9536c74290.png", "fall": "88", "rot": "-13", "x": "-5", "startScale": "1", "accent": "#d9982d"}, {"id": "edp", "step": "02", "name": "EAU DE PARFUM", "micro": "precise mist settles at the neck", "empty": "assets/images/tabaq_asset_008_b15f8ed240.png", "final": "assets/images/tabaq_asset_009_db486f84d3.png", "product": "assets/images/tabaq_asset_010_0edb288050.png", "fall": "86", "rot": "11", "x": "4", "startScale": "1", "accent": "#ec7b65"}, {"id": "oil", "step": "03", "name": "ACCENT OIL", "micro": "rollerball lands on the pulse point", "empty": "assets/images/tabaq_asset_011_a78f4d0230.png", "final": "assets/images/tabaq_asset_012_cc2d32d48a.png", "product": "assets/images/tabaq_asset_013_05063a33de.png", "fall": "72", "rot": "-8", "x": "0", "startScale": "1", "accent": "#78a844"}];
    /* REV 7 — DATA SETUP END */

    /* REV 7 — MARKUP BUILDER START */
    const sceneMount = root.querySelector('#rev7drop-scenes');
    if(!sceneMount) return;

    sceneMount.innerHTML = TABAQ_SCENES.map((scene) => `
      <section
        class="rev7-scroll-scene"
        data-scene
        data-id="${scene.id}"
        data-fall="${scene.fall}"
        data-rot="${scene.rot}"
        data-x="${scene.x}"
        data-start-scale="${scene.startScale}"
        style="--accent:${scene.accent}"
      >
        <div class="rev7-scene-sticky">
          <div class="rev7-scene-grid">
            <aside class="rev7-scene-copy" aria-label="${scene.name}">
              <span class="rev7-scene-step">Step ${scene.step}</span>
              <h2 class="rev7-scene-name">${scene.name}</h2>
              <p class="rev7-scene-micro">${scene.micro}</p>
              <div class="rev7-scene-lock">final layer locked</div>
            </aside>

            <figure class="rev7-artboard" aria-label="${scene.name} product drop">
              <img class="rev7-layer-img rev7-model-empty" src="${scene.empty}" alt="" aria-hidden="true" />
              <img class="rev7-layer-img rev7-product-drop" src="${scene.product}" alt="${scene.name} bottle falling into hand" />
              <span class="rev7-landing-ring" aria-hidden="true"></span>
              <img class="rev7-layer-img rev7-model-final" src="${scene.final}" alt="Final locked ${scene.name} image with product held in hand" />
            </figure>

            <aside class="rev7-scene-side" aria-hidden="true">
              <span>${scene.name}</span> / scroll-to-settle
            </aside>
          </div>
        </div>
      </section>
    `).join('');
    /* REV 7 — MARKUP BUILDER END */

    /* REV 7 — MOTION HELPERS START */
    const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
    const lerp = (a, b, t) => a + (b - a) * t;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const easeOutBack = (t) => {
      const c1 = 1.18;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    };
    const smoother = (t) => t * t * t * (t * (t * 6 - 15) + 10);

    function segmentedProgress(progress, start, end) {
      return clamp((progress - start) / (end - start));
    }

    function setVars(el, vars) {
      for (const [key, value] of Object.entries(vars)) {
        el.style.setProperty(key, value);
      }
    }
    /* REV 7 — MOTION HELPERS END */

    /* REV 7 — SCROLL MOTION SYSTEM START */
    const scenes = [...root.querySelectorAll('[data-scene]')];
    const globalProgress = root.querySelector('[data-progress]');
    let ticking = false;

    function updateScene(scene) {
      const rect = scene.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const raw = clamp((0 - rect.top) / travel);
      const fallStart = .12;
      const fallEnd = .88;
      const settleStart = .78;
      const lockStart = .90;
      const fallT = smoother(segmentedProgress(raw, fallStart, fallEnd));
      const settleT = easeOutBack(segmentedProgress(raw, settleStart, .94));
      const finalT = smoother(segmentedProgress(raw, lockStart, .98));

      const fallVh = Number(scene.dataset.fall || 82);
      const rot = Number(scene.dataset.rot || 0);
      const x = Number(scene.dataset.x || 0);
      const startScale = Number(scene.dataset.startScale || 1);

      const y = lerp(-fallVh, 0, fallT);
      const wobble = Math.sin(fallT * Math.PI * 2.45) * (1 - fallT) * 4.5;
      const settleDip = Math.sin(settleT * Math.PI) * 5.5;
      const productOpacity = raw < .06 ? 0 : raw > lockStart ? 1 - finalT : 1;
      const emptyOpacity = 1 - (finalT * .98);

      setVars(scene, {
        '--product-y': `${y + settleDip}vh`,
        '--product-x': `${x * (1 - fallT)}px`,
        '--product-rot': `${lerp(rot, 0, fallT) + wobble}deg`,
        '--product-scale': `${lerp(startScale, 1, fallT)}`,
        '--product-opacity': `${clamp(productOpacity)}`,
        '--final-opacity': `${finalT}`,
        '--empty-opacity': `${emptyOpacity}`,
        '--ring-opacity': `${Math.sin(segmentedProgress(raw, .76, .96) * Math.PI) * .44}`,
        '--ring-scale': `${lerp(.35, 1.18, segmentedProgress(raw, .76, .96))}`,
        '--drop-shadow': `${lerp(.04, .22, fallT)}`,
        '--ground-shadow': `${lerp(.05, .22, finalT)}`,
        '--shadow-scale': `${lerp(.7, 1.08, finalT)}`,
        '--glow-scale': `${lerp(.72, 1.05, fallT)}`,
        '--stage-lift': `${lerp(14, -4, fallT)}px`
      });

      return raw;
    }

    function update() {
      ticking = false;
      let active = 0;
      scenes.forEach((scene, index) => {
        const p = updateScene(scene);
        if (p > 0 && p < 1) active = (index + p) / scenes.length;
        if (p >= 1) active = Math.max(active, (index + 1) / scenes.length);
      });
      if(globalProgress) globalProgress.style.transform = `scaleX(${clamp(active)})`;
    }

    function requestUpdate() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    window.addEventListener('hashchange', requestUpdate);
    window.addEventListener('tabaq:page-change', () => window.setTimeout(requestUpdate, 80));
    window.addEventListener('load', update);
    update();
    /* REV 7 — SCROLL MOTION SYSTEM END */
  
  }
  window.TABAQRev7LayeringInit = initTabaqRev7DropAnimation;
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initTabaqRev7DropAnimation, {once:true});
  } else {
    initTabaqRev7DropAnimation();
  }
})();
/* REV 7 INJECTION — SCROLL BOTTLE DROP ANIMATION END */
