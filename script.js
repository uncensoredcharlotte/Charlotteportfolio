function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const cards = document.querySelectorAll('.card');

// Add click event listener to each card
cards.forEach(card => {
  card.addEventListener('click', function () {
    card.classList.toggle('flipped'); // Toggle the "flipped" class
  });
});


