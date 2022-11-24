function filterCards(e) {
  const cards = document.querySelectorAll(".accessories-list .accessories-item");
  let filter = e.target.dataset.filter;
  if (filter === "*") {
    cards.forEach((card) => card.classList.remove("visually-hidden"));
  } else {
    cards.forEach((card) => {
      card.classList.contains(filter)
        ? card.classList.remove("visually-hidden")
        : card.classList.add("visually-hidden");
    });
  }
}
