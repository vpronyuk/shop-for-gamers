(() => {
  const mobBtn = 'data-menu-mobBtn';
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    mobBtn: document.querySelector(['data-menu-mobBtn']),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.mobBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.mobBtn.classList.toggle('is-hidden');
  }
})();
