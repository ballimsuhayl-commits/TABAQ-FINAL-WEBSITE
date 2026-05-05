/* REV51 — COMMERCE CLARITY LOCK HELPER START
   Purpose: enforce consistent drop-list language after older saved-state scripts update button copy. */
(function(){
  const PRICE = {'clean-skin':'R890','soft-bloom':'R890','amber-haze':'R950','juice-drift':'R890'};
  function normalizeDropLabels(){
    document.querySelectorAll('[data-rev43-add]').forEach(function(btn){
      const id = btn.getAttribute('data-rev43-add');
      const price = PRICE[id] || 'R890';
      const label = 'Join Drop List — ' + price;
      btn.dataset.rev48Label = label;
      btn.dataset.rev51Label = label;
      if(!btn.classList.contains('is-added')) btn.textContent = label;
    });
  }
  document.addEventListener('DOMContentLoaded', normalizeDropLabels);
  window.addEventListener('hashchange', function(){ window.requestAnimationFrame(normalizeDropLabels); });
  window.addEventListener('storage', function(){ window.requestAnimationFrame(normalizeDropLabels); });
  window.TABAQ_REV51_COMMERCE_CLARITY = { normalizeDropLabels: normalizeDropLabels };
})();
/* REV51 — COMMERCE CLARITY LOCK HELPER END */
