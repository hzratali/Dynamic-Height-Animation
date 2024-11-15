let intervalIds = [];
const columns = document.querySelectorAll(".column");
const maxHeight = 300; // Max height for reset animation

function randomHeight() {
  return Math.floor(Math.random() * 250) + 50; // random height between 50px and 300px
}

function animateColumn(column) {
  column.style.height = `${randomHeight()}px`;
}

function startAnimation() {
  stopAnimation(); // Stop any existing intervals first

  columns.forEach((column) => {
    const intervalId = setInterval(() => animateColumn(column), 500);
    intervalIds.push(intervalId);
  });
}

function stopAnimation() {
  intervalIds.forEach((id) => clearInterval(id));
  intervalIds = [];
}

function resetAnimation() {
  stopAnimation();
  columns.forEach((column) => {
    column.style.height = `${maxHeight}px`; // Set height to maximum height
  });
}
