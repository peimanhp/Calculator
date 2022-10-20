const numbers = document.querySelectorAll(".input");
const display = document.getElementById("display");
const AC = document.getElementById("ac");
const C = document.getElementById("c");
const equals = document.querySelector(".equals");
const percent = document.querySelector(".percent");
const darkToggle = document.getElementById("dark_theme");
const body = document.querySelector("body");
const sunMoonIcon = document.getElementById("sun_moon_icons");

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
