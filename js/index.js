const increaseButton = document.querySelector("#increase");
const decreaseButton = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");
var theNumber = document.querySelector("p");
var currentValue = Number(theNumber.innerHTML);

function setTheColor() {
  if (theNumber.innerHTML > 0) {
    document.getElementById("number").style.color = "green";
  } else if (theNumber.innerHTML < 0) {
    document.getElementById("number").style.color = "red";
  } else if (theNumber.innerHTML == 0) {
    document.getElementById("number").style.color = "white";
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
  theNumber.innerHTML = 0;
  setTheColor();
}

//The click events
increaseButton.addEventListener("click", increaseOne);
decreaseButton.addEventListener("click", decreaseOne);
resetButton.addEventListener("click", resttheValue);
