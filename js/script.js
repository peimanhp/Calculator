const numbers = document.querySelectorAll(".input");
const display = document.getElementById("display");
const AC = document.getElementById("ac");
const C = document.getElementById("c");
const equals = document.querySelector(".equals");
const percent = document.querySelector(".percent");

Array.from(numbers).forEach((num) => {
  num.addEventListener("click", showOnDisplay);
  function showOnDisplay() {
    display.value += num.innerHTML;
  }
});

AC.onclick = () => {
  display.value = "";
};

C.onclick = () => {
  let displayValue = display.value.split("");
  displayValue.pop();
  let newValue = displayValue.join("");
  display.value = newValue;
};

percent.onclick = () => {
  display.value = display.value / 100;
};

equals.onclick = () => {
  let displayValue = display.value.split("");

  let indexOfX = displayValue.indexOf("x");
  if (indexOfX !== -1) {
    displayValue[indexOfX] = "*";
  }

  let indexOfDivision = displayValue.indexOf("÷");
  if (indexOfDivision !== -1) {
    displayValue[indexOfDivision] = "/";
  }

  let newValue = displayValue.join("");
  display.value = eval(newValue);
};
