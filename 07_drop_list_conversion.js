/* REV CLEANUP — MANUAL KIT PREVIEW TOGGLE ONLY START
   Purpose: remove the automatic Shop pulse that opened all four bottle kits after navigation. */
window.addEventListener('load', () => {
  const packs = Array.from(document.querySelectorAll('[data-kit-toggle]'));
  packs.forEach((pack) => {
    if(pack.dataset.tabaqManualKitBound === 'true') return;
    pack.dataset.tabaqManualKitBound = 'true';
    pack.addEventListener('click', (event) => {
      event.stopPropagation();
      pack.classList.toggle('is-open');
    });
    pack.addEventListener('keydown', (event) => {
      if(event.key === 'Enter' || event.key === ' '){
        event.preventDefault();
        pack.classList.toggle('is-open');
      }
    });
  });
});
/* REV CLEANUP — MANUAL KIT PREVIEW TOGGLE ONLY END */
