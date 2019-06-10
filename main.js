let colors = generateRandomColors(6);
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay")
let squares = document.querySelectorAll(".square");
let resultDisplay = document.getElementById("result");

console.log(colors);

colorDisplay.innerHTML = pickedColor;

for (let i = 0; i < squares.length; i++) {
  const square = squares[i];

  square.style.backgroundColor = colors[i];

  square.addEventListener("click", function () {
    let clickedColor = this.style.backgroundColor
    if (clickedColor == pickedColor) {
      console.log("Correct!!");
      resultDisplay.innerHTML = "Correct!!"
      changeColors(pickedColor)
    } else {
      console.log("Fail!!");
      console.log(pickedColor);
      this.style.backgroundColor = "#fff";
      resultDisplay.innerHTML = "Try Again!!"
    }
  })

}


function generateRandomColors(num) {
  let colorsArr = [];

  for (let i = 0; i < num; i++) {
    colorsArr.push(randomColor());
  }

  return colorsArr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let randomColor = "rgb(" + r + ", " + g + ", " + b + ")"

  return randomColor;
}

function displayColors() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);

  return colors[random]
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    const square = squares[i];
    square.style.backgroundColor = color;
  }
}