// Language switcher — swaps innerHTML based on data-{lang} attributes
(function () {
  const langButtons = document.querySelectorAll('.lang button');
  const translatable = document.querySelectorAll('[data-en], [data-de], [data-es]');
  const placeholders = document.querySelectorAll('[data-en-placeholder]');

  function setLang(lang) {
    document.documentElement.lang = lang;
    translatable.forEach(el => {
      const t = el.getAttribute(`data-${lang}`);
      if (t) el.innerHTML = t;
    });
    placeholders.forEach(el => {
      const p = el.getAttribute(`data-${lang}-placeholder`);
      if (p) el.placeholder = p;
    });
    langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    try { localStorage.setItem('cc-lang', lang); } catch (e) {}
  }

  langButtons.forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));

  const saved = (() => { try { return localStorage.getItem('cc-lang'); } catch (e) { return null; } })();
  if (saved && ['en', 'de', 'es'].includes(saved)) setLang(saved);
})();
