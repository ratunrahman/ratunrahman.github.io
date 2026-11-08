(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuButton && nav) {
    const closeMenu = () => { nav.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label','Open navigation'); };
    menuButton.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', ev => { if(ev.key === 'Escape') closeMenu(); });
  }
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const publications = [...document.querySelectorAll('[data-category]')];
  buttons.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    buttons.forEach(b => { const active = b === button; b.classList.toggle('is-active', active); b.setAttribute('aria-pressed', String(active)); });
    publications.forEach(item => { item.hidden = selected !== 'all' && item.dataset.category !== selected; });
  }));
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
