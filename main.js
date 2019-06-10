let colors = [];
let pickedColor = null;
let colorDisplay = document.getElementById("colorDisplay")
let squares = document.querySelectorAll(".square");

init();

function init() {
  pickRandomColors();
  displayColors();
  pickedColor = colors[Math.floor(Math.random() * 7)];
  colorDisplay.innerHTML = pickedColor;
}

function pickRandomColors() {
  for (let i = 0; i < 6; i++) {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let randomColor = "rgb(" + r + ", " + g + ", " + b + ")"

    colors.push(randomColor);
  }
}
console.log(colors);

function displayColors() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
}