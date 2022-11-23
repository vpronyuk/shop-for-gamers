(() => {
  const refs = {
    openAddBtn: document.querySelector('[data-add-open]'),
    closeAddBtn: document.querySelector('[data-add-close]'),
    menu: document.querySelector('[data-add]'),
    body: document.querySelector('body'),
  };

  refs.openAddBtn.addEventListener('click', toggleMenu);
  refs.closeAddBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
