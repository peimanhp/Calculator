const numbers = document.querySelectorAll(".input");
const display = document.getElementById("display");
const AC = document.getElementById("ac");
const C = document.getElementById("c");
const equals = document.querySelector(".equals");
const percent = document.querySelector(".percent");
const darkToggle = document.getElementById("dark_theme");
const body = document.querySelector("body");
const sunMoonIcon = document.getElementById("sun_moon_icons");
const dot = document.getElementById("dot");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const division = document.getElementById("division");
const add = document.getElementById("add");

let percentEntered = false;
let operatorEntered = false;
const operators = ["+", "-", "×", "÷", "%"];

let dotAvailable = true;
dot.addEventListener("click", dotFunc);
function dotFunc() {
  if (dotAvailable == true) {
    display.value += ".";
  }
  dotAvailable = false;
}

multiply.addEventListener("click", multiplyFunc);
function multiplyFunc() {
  if (!display.value) display.value = 0;
  else if (operatorEntered) {
    let displayValue = display.value.split("");
    displayValue.pop();
    let newValue = displayValue.join("");
    display.value = newValue + "×";
  } else display.value += "×";
  dotAvailable = true;
  percentEntered = false;
  operatorEntered = true;
}
minus.addEventListener("click", minusFunc);
function minusFunc() {
  if (!display.value) display.value = 0;
  else if (operatorEntered) {
    let displayValue = display.value.split("");
    displayValue.pop();
    let newValue = displayValue.join("");
    display.value = newValue + "-";
  } else display.value += "-";
  dotAvailable = true;
  percentEntered = false;
  operatorEntered = true;
}
division.addEventListener("click", divisionFunc);
function divisionFunc() {
  if (!display.value) display.value = 0;
  else if (operatorEntered) {
    let displayValue = display.value.split("");
    displayValue.pop();
    let newValue = displayValue.join("");
    display.value = newValue + "÷";
  } else display.value += "÷";
  dotAvailable = true;
  percentEntered = false;
  operatorEntered = true;
}
add.addEventListener("click", addFunc);
function addFunc() {
  if (!display.value) display.value = 0;
  else if (operatorEntered) {
    let displayValue = display.value.split("");
    displayValue.pop();
    let newValue = displayValue.join("");
    display.value = newValue + "+";
  } else display.value += "+";
  dotAvailable = true;
  percentEntered = false;
  operatorEntered = true;
}

let numsArray = Array.from(numbers);
for (let i = 0; i < numsArray.length; i++) {
  numsArray[i].addEventListener("click", showOnDisplay);
  function showOnDisplay() {
    if (percentEntered == true) {
      display.value += "×" + numsArray[i].innerHTML;
    } else display.value += numsArray[i].innerHTML;
    percentEntered = false;
    operatorEntered = false;
  }
}

AC.onclick = () => {
  display.value = "";
  dotAvailable = true;
  percentEntered = false;
  operatorEntered = false;
};

C.addEventListener("click", cFunc);
function cFunc() {
  operatorEntered = false;
  let displayValue = display.value.split("");
  displayValue.pop();

  for (let i = 0; i < displayValue.length; i++) {
    if (displayValue[i] == ".") {
      dotAvailable = false;
      break;
    } else dotAvailable = true;
  }

  let newValue = displayValue.join("");
  display.value = newValue;
}

percent.onclick = () => {
  if (!display.value || operatorEntered == true) display.value = 0;
  console.log(equalsFunc());
  display.value = eval(display.value) / 100;
  dotAvailable = false;
  percentEntered = true;
};

equals.addEventListener("click", equalsFunc);
function equalsFunc() {
  if (display.value) {
    let displayValue = display.value.split("");

    for (let i = 0; i < displayValue.length; i++) {
      if (displayValue[i] == ".") {
        dotAvailable = false;
        break;
      }
    }

    operators.forEach((operator) => {
      if (displayValue[0] == operator) displayValue.shift();
    });

    let indexOfX = displayValue.indexOf("×");
    if (indexOfX !== -1) {
      displayValue[indexOfX] = "*";
    }

    let indexOfDivision = displayValue.indexOf("÷");
    if (indexOfDivision !== -1) {
      displayValue[indexOfDivision] = "/";
    }

    if (operatorEntered) displayValue.pop();

    let newValue = displayValue.join("");
    display.value = eval(newValue);
  } else display.value = 0;
  percentEntered = false;
  operatorEntered = false;
}

darkToggle.checked = false;
//return true and false if click on toggle button
document
  .querySelectorAll('input[type="checkbox"]')
  .forEach((e) => (e.checked ^= 0));

// changing colors:
darkToggle.addEventListener("click", darkMode);

const colorElement = document.documentElement;

function darkMode() {
  if (darkToggle.checked == true) {
    sunMoonIcon.classList.toggle("bi-brightness-high-fill");
    sunMoonIcon.classList.toggle("bi-moon-stars-fill");
    colorElement.style.setProperty("--calc-bg-color", "#3C3940");
    colorElement.style.setProperty("--nums-text-color", "#ffffff");
    colorElement.style.setProperty("--nums-color", "#808080");
    colorElement.style.setProperty("--oprators-color", "#696969");
    colorElement.style.setProperty("--op-border-color", "#ffffff");
    colorElement.style.setProperty("--dis-border-color", "#F5A34D");
    colorElement.style.setProperty("--equBtn-color", "#F5A34D");
    colorElement.style.setProperty("--equBtnHover-color", "#f58f23");
    colorElement.style.setProperty("--background-color", "#989898");
  } else {
    sunMoonIcon.classList.toggle("bi-brightness-high-fill");
    sunMoonIcon.classList.toggle("bi-moon-stars-fill");
    colorElement.style.setProperty("--calc-bg-color", "#ffffff");
    colorElement.style.setProperty("--nums-text-color", "#000000");
    colorElement.style.setProperty("--nums-color", "#F1F3F4");
    colorElement.style.setProperty("--oprators-color", "#DADCE0");
    colorElement.style.setProperty("--op-border-color", "#808080");
    colorElement.style.setProperty("--dis-border-color", "#0D6EFD");
    colorElement.style.setProperty("--equBtn-color", "#0D6EFD");
    colorElement.style.setProperty("--equBtnHover-color", "#0B5ED7");
    colorElement.style.setProperty("--background-color", "#ffffff");
  }
}

// keuboard actions
document.addEventListener("keydown", keyInput);
function keyInput(e) {
  e.preventDefault();
  let keypad = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "+",
    "-",
    "*",
    "/",
    "Enter",
    "Backspace",
  ];

  if (keypad.includes(e.key)) {
    switch (e.key) {
      case "*":
        multiplyFunc();
        multiply.classList.add("keyhover");
        setTimeout(() => {
          multiply.classList.remove("keyhover");
        }, 100);
        break;
      case "/":
        divisionFunc();
        division.classList.add("keyhover");
        setTimeout(() => {
          division.classList.remove("keyhover");
        }, 100);
        break;
      case "+":
        addFunc();
        add.classList.add("keyhover");
        setTimeout(() => {
          add.classList.remove("keyhover");
        }, 100);
        break;
      case "-":
        minusFunc();
        minus.classList.add("keyhover");
        setTimeout(() => {
          minus.classList.remove("keyhover");
        }, 100);
        break;
      case ".":
        dotFunc();
        dot.classList.add("keyhover");
        setTimeout(() => {
          dot.classList.remove("keyhover");
        }, 100);
        break;
      case "Enter":
        equalsFunc();
        equals.classList.add("keyhover");
        setTimeout(() => {
          equals.classList.remove("keyhover");
        }, 300);
        break;
      case "Backspace":
        cFunc();
        C.classList.add("keyhover");
        setTimeout(() => {
          C.classList.remove("keyhover");
        }, 100);
        break;
      default:
        numsArray.forEach((num) => {
          if (num.innerHTML == e.key) {
            num.classList.add("keyhover");
            setTimeout(() => {
              num.classList.remove("keyhover");
            }, 100);
          }
        });
        percentEntered = false;
        operatorEntered = false;
        display.value += e.key;
        break;
    }
  }
}
