/* REV CLEANUP — PRODUCT DETAIL KIT PREVIEW MOUNT START
   Purpose: keep product-detail kit previews, remove automatic open/close pulses. */
(function(){
  const DETAIL_PAGE_TO_KIT = {
    'product-clean-skin':'clean-skin',
    'product-soft-bloom':'soft-bloom',
    'product-amber-haze':'amber-haze',
    'product-juice-drift':'juice-drift'
  };

  function currentPage(){
    return (document.body && document.body.dataset.page) || String(location.hash || '#home').replace(/^#/, '') || 'home';
  }

  function bindPack(pack){
    if(!pack || pack.dataset.rev44Bound === 'true') return;
    pack.dataset.rev44Bound = 'true';
    pack.addEventListener('click', function(event){
      event.stopPropagation();
      pack.classList.toggle('is-open');
    });
    pack.addEventListener('keydown', function(event){
      if(event.key === 'Enter' || event.key === ' '){
        event.preventDefault();
        pack.classList.toggle('is-open');
      }
    });
  }

  function mountDetailKits(){
    document.querySelectorAll('[data-detail-kit-mount]').forEach(function(stage){
      if(stage.dataset.rev44Mounted === 'true') return;
      const kitId = stage.getAttribute('data-detail-kit-mount');
      const source = document.querySelector('.product-card.has-kit-motion[data-kit-id="' + kitId + '"] .rev29-kit-preview');
      const target = stage.querySelector('.rev44-kit-mount');
      if(!source || !target) return;
      const clone = source.cloneNode(true);
      clone.classList.add('rev44-detail-kit-preview');
      const originalMotion = clone.getAttribute('data-motion') || 'animated kit';
      clone.setAttribute('data-motion', originalMotion + ' · large preview');
      clone.querySelectorAll('[id]').forEach(function(node){ node.removeAttribute('id'); });
      const pack = clone.querySelector('[data-kit-toggle]');
      if(pack){
        pack.classList.remove('is-open');
        pack.setAttribute('aria-label', 'Open large animated ' + kitId.replace(/-/g, ' ') + ' kit preview');
        bindPack(pack);
      }
      target.replaceChildren(clone);
      stage.dataset.rev44Mounted = 'true';
    });
  }

  function markActiveDetailPage(){
    mountDetailKits();
    const page = currentPage();
    const kitId = DETAIL_PAGE_TO_KIT[page];
    document.querySelectorAll('.rev43-detail-page').forEach(function(pageNode){
      pageNode.classList.remove('rev44-detail-page-active');
    });
    if(!kitId) return;
    const section = document.querySelector('.tabaq-page[data-page="' + page + '"]');
    if(!section) return;
    const pageNode = section.querySelector('.rev43-detail-page');
    if(pageNode) pageNode.classList.add('rev44-detail-page-active');
  }

  window.addEventListener('load', markActiveDetailPage);
  window.addEventListener('resize', function(){ window.requestAnimationFrame(mountDetailKits); });
  window.addEventListener('hashchange', function(){ window.setTimeout(markActiveDetailPage, 140); });
  window.addEventListener('tabaq:page-change', function(){ window.setTimeout(markActiveDetailPage, 140); });
})();
/* REV CLEANUP — PRODUCT DETAIL KIT PREVIEW MOUNT END */
