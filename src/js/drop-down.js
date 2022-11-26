const selectSingle = document.querySelector('.select');
const selectSingle_title = selectSingle.querySelector('.select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

// Для Quantity

const selectSingleQuantity = document.querySelector('.quantity');
const selectSingleQuantity_title = selectSingleQuantity.querySelector('.quantity-select__title');
const selectSingleQuantity_labels = selectSingleQuantity.querySelectorAll('.quantity-select__label');


// Toggle menu
selectSingleQuantity_title.addEventListener('click', () => {
  if ('active' === selectSingleQuantity.getAttribute('data-state')) {
    selectSingleQuantity.setAttribute('data-state', '');
  } else {
    selectSingleQuantity.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingleQuantity_labels.length; i++) {
  selectSingleQuantity_labels[i].addEventListener('click', (evt) => {
    selectSingleQuantity_title.textContent = evt.target.textContent;
    selectSingleQuantity.setAttribute('data-state', '');
  });
}