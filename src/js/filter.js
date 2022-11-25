function filterCards(e) {
  const cards = document.querySelectorAll(
    '.accessories-list .accessories-item'
  );
  let filter = e.target.dataset.filter;
  if (filter === '*') {
    cards.forEach(card => card.classList.remove('visually-hidden'));
  } else {
    cards.forEach(card => {
      card.classList.contains(filter)
        ? card.classList.remove('visually-hidden')
        : card.classList.add('visually-hidden');
    });
  }
}

let accessories = document.getElementById('filter-btns');
let btns = accessories.getElementsByClassName('filter-btn btn');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('btn-pushed');
    current[0].className = current[0].className.replace(' btn-pushed', '');
    this.className += ' btn-pushed';
  });
}
