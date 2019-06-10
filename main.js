let colors = []

let squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

}

function pickRandomColor() {
  for (let i = 0; i < 6; i++) {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let randomColor = "rgb(" + r + ", " + g + ", " + b + ")"

    colors.push(randomColor);
  }
}
pickRandomColor()
console.log(colors);