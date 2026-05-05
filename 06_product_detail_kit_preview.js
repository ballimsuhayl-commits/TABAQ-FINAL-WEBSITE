/* REV CLEANUP — FLATTENED PAGE CONTROLLER START
   Purpose: keep routing + kit selection, remove disabled floating bottle/follower conflict code. */
window.addEventListener('load', () => {
  const qs = (sel, root=document) => root.querySelector(sel);
  const qsa = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  const rev25Kits = {
    'clean-skin': {name:'Clean Skin', short:'fresh / soft / close', mood:'Mineral air, wet cotton, pear skin and quiet musk. Feels clean without smelling like laundry detergent.', color:'#aee6df', layers:[['Body Mist','mineral lift','first fresh hit'],['Eau de Parfum','clean skin accord','main identity'],['Oil 01','soft cotton warmth','closer finish'],['Oil 02','quiet musk alternate','alternate finish']]},
    'soft-bloom': {name:'Soft Bloom', short:'floral / smooth / gentle', mood:'Petal cream, blush fruit, satin powder and soft musk. The safest gift route: pretty, gentle and not loud.', color:'#ffc2d9', layers:[['Body Mist','pink petal lift','soft opening'],['Eau de Parfum','floral heart','main bloom'],['Oil 01','powder-soft skin','smooth close'],['Oil 02','creamy alternate','alternate finish']]},
    'amber-haze': {name:'Amber Haze', short:'warm / rich / evening', mood:'Resin, spice dust, warm oil and low gold shadow. Warm and grown-up without becoming heavy.', color:'#e4a44b', layers:[['Body Mist','warm air lift','soft opening'],['Eau de Parfum','amber identity','main warmth'],['Oil 01','resin-soft skin','close richness'],['Oil 02','wooded alternate','alternate finish']]},
    'juice-drift': {name:'Juice Drift', short:'juicy / bright / playful', mood:'Citrus peel, guava, iced glass and clean sweetness. The most energetic kit for daylight and social brightness.', color:'#ff8557', layers:[['Body Mist','citrus spark','bright lift'],['Eau de Parfum','juicy core','main identity'],['Oil 01','soft fruit skin','smooth close'],['Oil 02','clean sweet alternate','playful alternate finish']]}
  };

  function setKit(id){
    const kit = rev25Kits[id] || rev25Kits['clean-skin'];
    qsa('.kit-card').forEach(card => card.classList.toggle('is-selected', card.dataset.kit === id));
    const panel = qs('#selectedKitPanel');
    const short = qs('#selectedKitShort');
    const name = qs('#selectedKitName');
    const mood = qs('#selectedKitMood');
    const layers = qs('#selectedKitLayers');
    if(panel) panel.style.background = 'linear-gradient(145deg,#151515 0%, color-mix(in srgb,' + kit.color + ', #151515 74%) 100%)';
    if(short) short.textContent = kit.short;
    if(name) name.textContent = kit.name;
    if(mood) mood.textContent = kit.mood;
    if(layers){
      kit.layers.forEach((layer, i) => {
        const row = layers.children[i];
        if(!row) return;
        const b = row.querySelector('b');
        const small = row.querySelector('small');
        if(b) b.textContent = layer[0];
        if(small) small.textContent = layer[1] + ' · ' + layer[2];
      });
    }
  }

  qsa('.kit-card').forEach(card => card.addEventListener('click', () => setKit(card.dataset.kit)));
  setKit('clean-skin');

  const pages = qsa('.tabaq-page[data-page]');
  const links = qsa('[data-page-link]');
  const validPages = new Set(pages.map(page => page.dataset.page));
  const defaultPage = 'home';

  function normalisePage(value){
    const page = String(value || '').replace(/^#/, '').trim();
    return validPages.has(page) ? page : defaultPage;
  }

  function setActivePage(page, updateHash=true){
    const active = normalisePage(page);
    pages.forEach(node => {
      const isActive = node.dataset.page === active;
      node.classList.toggle('is-active', isActive);
      node.classList.remove('is-entering');
      if(isActive){
        void node.offsetWidth;
        node.classList.add('is-entering');
        window.setTimeout(() => node.classList.remove('is-entering'), 950);
      }
    });
    links.forEach(node => node.classList.toggle('is-active', normalisePage(node.dataset.pageLink || node.getAttribute('href')) === active));
    document.body.dataset.page = active;
    window.scrollTo({top:0, behavior:'auto'});
    if(updateHash && location.hash !== '#' + active) history.pushState(null, '', '#' + active);
    window.dispatchEvent(new CustomEvent('tabaq:page-change', {detail:{page:active, source:'router'}}));
    if(window.ScrollTrigger) window.ScrollTrigger.refresh(true);
  }

  links.forEach(link => {
    link.addEventListener('click', event => {
      const target = normalisePage(link.dataset.pageLink || link.getAttribute('href'));
      if(validPages.has(target)){
        event.preventDefault();
        setActivePage(target);
      }
    });
  });

  window.addEventListener('hashchange', () => setActivePage(location.hash, false));
  setActivePage(location.hash || defaultPage, false);
});
/* REV CLEANUP — FLATTENED PAGE CONTROLLER END */
