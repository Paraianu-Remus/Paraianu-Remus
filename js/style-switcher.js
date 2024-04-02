// Style toggler
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

// Toggle color menu on click
styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide color menu if it's open on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.toggle("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// Color switch
const alternateColors = document.querySelectorAll(".alternate-color-style");

function setActiveColor(color) {
  alternateColors.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// Light-Dark switch
const lightDark = document.querySelector(".light-dark");

lightDark.addEventListener("click", () => {
  lightDark.querySelector("i").classList.toggle("fa-sun");
  lightDark.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    lightDark.querySelector("i").classList.add("fa-sun");
  } else {
    lightDark.querySelector("i").classList.add("fa-moon");
  }
});
