/* REV43 — KIT COMMERCE / SCENT PROFILE ENHANCEMENT START */
(function(){
  const KITS = {"clean-skin": {"id": "clean-skin", "page": "product-clean-skin", "name": "Clean Skin", "num": "01", "price": "R890", "short": "fresh / soft / close", "tile": "#d9f5e8", "accent": "#4bc9ca", "summary": "Mineral air, wet cotton, pear skin and quiet musk. Built for daily clean confidence and low-risk gifting.", "best": "Daily wear, work, school, travel, safe gifting", "avoid": "You want a loud gourmand, heavy amber or obvious floral statement.", "notes": ["mineral air", "wet cotton", "pear skin", "quiet musk"], "pyramid": {"Top": "pear skin \u00b7 cold mineral air", "Heart": "fresh cotton \u00b7 clean skin accord", "Base": "soft musk \u00b7 pale woods"}, "metrics": {"Fresh": 92, "Floral": 20, "Warm": 18, "Sweet": 22, "Trail": 44}, "tags": ["fresh", "soft", "close", "daily", "clean", "gift"], "layers": [["01 Mist", "mineral lift", "opens the clean-air veil"], ["02 EDP", "clean skin accord", "sets the main identity"], ["03 Oil 01", "soft cotton warmth", "smooths the close layer"], ["04 Oil 02", "quiet musk alternate", "gives a softer alternate finish"]], "occasion": ["daylight", "office", "school", "travel", "gift"], "headline": "Fresh close calm.", "drop": "The easiest everyday kit: clean, close and simple enough to wear on repeat without feeling overdone."}, "soft-bloom": {"id": "soft-bloom", "page": "product-soft-bloom", "name": "Soft Bloom", "num": "02", "price": "R890", "short": "floral / smooth / gentle", "tile": "#ffe0ed", "accent": "#ff7eaf", "summary": "Petal cream, blush fruit, satin powder and soft musk. Floral without old-perfume heaviness.", "best": "Gifting, brunch, day dates, soft first impressions", "avoid": "You dislike floral softness or prefer sharp clean scents.", "notes": ["petal cream", "blush fruit", "satin powder", "soft musk"], "pyramid": {"Top": "blush fruit \u00b7 airy petals", "Heart": "cream floral \u00b7 satin powder", "Base": "soft musk \u00b7 clean warmth"}, "metrics": {"Fresh": 58, "Floral": 88, "Warm": 30, "Sweet": 46, "Trail": 52}, "tags": ["floral", "smooth", "gentle", "gift", "soft"], "layers": [["01 Mist", "pink petal lift", "softens the opening"], ["02 EDP", "floral heart", "defines the bloom"], ["03 Oil 01", "powder-soft skin", "makes it smooth"], ["04 Oil 02", "creamy alternate", "gives a creamy alternate finish"]], "occasion": ["brunch", "date", "gift", "day event"], "headline": "Floral smooth gentle.", "drop": "The softest gift route: polished, gentle and readable without becoming heavy or old-fashioned."}, "amber-haze": {"id": "amber-haze", "page": "product-amber-haze", "name": "Amber Haze", "num": "03", "price": "R950", "short": "warm / rich / evening", "tile": "#ffd29a", "accent": "#e09037", "summary": "Resin, spice dust, warm oil and a wooded alternate. More presence without becoming heavy.", "best": "Evening, winter, events, warmer presence", "avoid": "You want very light freshness or barely-there skin scent.", "notes": ["resin", "spice dust", "warm oil", "wooded alternate"], "pyramid": {"Top": "spice dust \u00b7 warm air", "Heart": "amber resin \u00b7 golden oil", "Base": "low woods \u00b7 skin heat"}, "metrics": {"Fresh": 18, "Floral": 14, "Warm": 94, "Sweet": 42, "Trail": 82}, "tags": ["warm", "rich", "evening", "winter", "amber"], "layers": [["01 Mist", "warm air lift", "keeps the start breathable"], ["02 EDP", "amber identity", "creates the centre"], ["03 Oil 01", "resin-soft skin", "adds close richness"], ["04 Oil 02", "wooded alternate", "switches the finish"]], "occasion": ["evening", "winter", "event", "dinner"], "headline": "Warm rich evening.", "drop": "The richer evening kit: warmer, more present and better suited to night plans or cooler weather."}, "juice-drift": {"id": "juice-drift", "page": "product-juice-drift", "name": "Juice Drift", "num": "04", "price": "R890", "short": "juicy / bright / playful", "tile": "#ffe867", "accent": "#ff4f1e", "summary": "Citrus peel, guava, iced glass and clean sweetness. The most energetic social kit.", "best": "Weekends, summer, social brightness", "avoid": "You dislike fruit brightness or want a darker evening profile.", "notes": ["citrus peel", "guava", "iced glass", "clean sweetness"], "pyramid": {"Top": "citrus peel \u00b7 iced glass", "Heart": "guava \u00b7 bright fruit skin", "Base": "clean sweetness \u00b7 soft musk"}, "metrics": {"Fresh": 76, "Floral": 12, "Warm": 24, "Sweet": 78, "Trail": 58}, "tags": ["juicy", "bright", "playful", "fresh", "summer", "social"], "layers": [["01 Mist", "citrus spark", "creates the lift"], ["02 EDP", "juicy core", "sets the playful identity"], ["03 Oil 01", "soft fruit skin", "rounds the sweetness"], ["04 Oil 02", "clean sweet alternate", "keeps the alternate finish wearable"]], "occasion": ["weekend", "summer", "party", "day out"], "headline": "Juicy bright playful.", "drop": "The brightest social kit: playful, juicy and built for weekend energy without becoming childish."}};
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const storageKey = 'tabaq_rev43_drop_list';
  function getSaved(){ try{ return JSON.parse(localStorage.getItem(storageKey) || '[]'); }catch(e){ return []; } }
  function saveKit(id){
    const items = new Set(getSaved());
    items.add(id);
    try{ localStorage.setItem(storageKey, JSON.stringify(Array.from(items))); }catch(e){}
    updateDropButtons();
  }
  function updateDropButtons(){
    const saved = new Set(getSaved());
    $$('[data-rev43-add]').forEach(btn => {
      const active = saved.has(btn.getAttribute('data-rev43-add'));
      btn.classList.toggle('is-added', active);
      btn.textContent = active ? 'On Drop List' : (btn.dataset.rev51Label || btn.dataset.rev48Label || 'Join Drop List');
    });
  }
  function meter(label, value, accent){
    return `<div class="rev43-meter"><span>${label}</span><div class="rev43-meter-track"><div class="rev43-meter-fill" style="--v:${value};--accent:${accent}"></div></div><em>${value}</em></div>`;
  }
  function openProfile(id){
    const kit = KITS[id]; if(!kit) return;
    const dialog = $('#rev43KitProfileDialog'); if(!dialog) return;
    const shell = $('#rev43KitProfileShell');
    const hero = $('#rev43DialogHero');
    shell.style.setProperty('--profile-a', kit.tile);
    shell.style.setProperty('--profile-bg', kit.tile);
    hero.style.setProperty('--profile-bg', kit.tile);
    hero.setAttribute('data-num', kit.num);
    $('#rev43DialogKicker').textContent = `${kit.short} / ${kit.price}`;
    $('#rev43DialogTitle').textContent = kit.name;
    $('#rev43DialogSummary').textContent = kit.summary;
    $('#rev43DialogPrice').textContent = kit.price;
    $('#rev43DialogNotes').innerHTML = kit.notes.map(n => `<span class="rev43-note-chip">${n}</span>`).join('');
    $('#rev43DialogPyramid').innerHTML = Object.entries(kit.pyramid).map(([k,v]) => `<div><b>${k}</b><span>${v}</span></div>`).join('');
    $('#rev43DialogBars').innerHTML = Object.entries(kit.metrics).map(([k,v]) => meter(k,v,kit.accent)).join('');
    $('#rev43DialogLayers').innerHTML = kit.layers.map(l => `<div><b>${l[0]}</b><span>${l[1]}</span><span>${l[2]}</span></div>`).join('');
    const choose = $('#rev43DialogChoose');
    choose.onclick = () => { closeProfile(); location.hash = kit.page; };
    if(typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open','');
  }
  function closeProfile(){ const d = $('#rev43KitProfileDialog'); if(d) d.close ? d.close() : d.removeAttribute('open'); }
  function initFilters(){
    const buttons = $$('.tabaq-page[data-page="shop"] [data-rev43-filter]');
    const cards = $$('.tabaq-page[data-page="shop"] .product-card.rev43-commerce-card');
    buttons.forEach(btn => btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-rev43-filter') || 'all';
      buttons.forEach(b => { b.classList.toggle('is-active', b === btn); b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
      cards.forEach(card => {
        const tags = (card.getAttribute('data-kit-tags') || '').split(/\s+/);
        const show = filter === 'all' || tags.includes(filter);
        card.classList.toggle('is-filter-hidden', !show);
      });
    }));
  }
  function bind(){
    document.addEventListener('click', (e) => {
      const profileBtn = e.target.closest('[data-rev43-profile]');
      if(profileBtn){ e.preventDefault(); e.stopPropagation(); openProfile(profileBtn.getAttribute('data-rev43-profile')); return; }
      const addBtn = e.target.closest('[data-rev43-add]');
      if(addBtn){ e.preventDefault(); saveKit(addBtn.getAttribute('data-rev43-add')); return; }
      if(e.target.closest('[data-rev43-close]')){ e.preventDefault(); closeProfile(); }
    });
    const dialog = $('#rev43KitProfileDialog');
    if(dialog) dialog.addEventListener('click', e => { if(e.target === dialog) closeProfile(); });
    initFilters();
    updateDropButtons();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind); else bind();
  window.addEventListener('hashchange', updateDropButtons);
})();
/* REV43 — KIT COMMERCE / SCENT PROFILE ENHANCEMENT END */
