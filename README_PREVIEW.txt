/* REV50 — DROP PAGE EVENT ARCHITECTURE HELPER START
   Purpose: generic drop CTAs guide users to kit choice instead of silently choosing a default kit. */
(function(){
  document.addEventListener('click', function(event){
    const trigger = event.target && event.target.closest && event.target.closest('[data-rev50-scroll-kits]');
    if(!trigger) return;
    event.preventDefault();
    const target = document.getElementById('rev50-drop-kits') || document.querySelector('.rev50-drop-kits');
    if(target && target.scrollIntoView) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
})();
/* REV50 — DROP PAGE EVENT ARCHITECTURE HELPER END */
