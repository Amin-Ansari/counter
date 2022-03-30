const increaseButton = document.querySelector("#increase");
const decreaseButton = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");
var theNumber = document.querySelector("p");
var currentValue = Number(theNumber.innerHTML);

// the function which sets the numbers color according to their value
function setTheColor() {
  if (theNumber.innerHTML > 0) {
    if (theNumber.classList.contains("zero-color")) {
      theNumber.classList.remove("zero-color");
    }
    if (theNumber.classList.contains("nagative-color")) {
      theNumber.classList.remove("nagative-color");
    }
    theNumber.classList.add("positive-color");
  } else if (theNumber.innerHTML < 0) {
    if (theNumber.classList.contains("zero-color")) {
      theNumber.classList.remove("zero-color");
    }
    if (theNumber.classList.contains("positive-color")) {
      theNumber.classList.remove("positive-color");
    }
    theNumber.classList.add("nagative-color");
  } else if (theNumber.innerHTML == 0) {
    if (theNumber.classList.contains("positive-color")) {
      theNumber.classList.remove("nagative-color");
    }
    if (theNumber.classList.contains("nagative-color")) {
      theNumber.classList.remove("nagative-color");
    }
    theNumber.classList.add("zero-color");
  }
}

function increaseOne() {
  currentValue++;
  theNumber.innerHTML = currentValue;
  setTheColor();
}
function decreaseOne() {
  currentValue--;
  theNumber.innerHTML = currentValue;
  setTheColor();
}
function resttheValue() {
  currentValue = 0;
  theNumber.innerHTML = currentValue;
  setTheColor();
}

//The click events
increaseButton.addEventListener("click", increaseOne);
decreaseButton.addEventListener("click", decreaseOne);
resetButton.addEventListener("click", resttheValue);
