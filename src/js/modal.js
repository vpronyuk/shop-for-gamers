(() => {
  const refs = {
    openOrderBtn: document.querySelector('[data-modal-open]'),
    closeOrderBtn: document.querySelector('[data-modal-close]'),
    menu: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };

  refs.openOrderBtn.addEventListener('click', toggleMenu);
  refs.closeOrderBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
