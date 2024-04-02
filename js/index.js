// Preloader
setTimeout(function () {
  $("#preloader").fadeToggle();
  $(".main-container").css("display", "block");
}, 1500);

// Typing animation
var typing = new Typed(".name-typing", {
  strings: ["Părăianu Nicolae Remus"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
var typing = new Typed(".home-typing", {
  strings: ["Front-End Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typing = new Typed(".about-typing", {
  strings: ["Front-End Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Nav
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const sections = document.querySelectorAll(".section");

// Active on click
for (let i = 0; i < navList.length; i++) {
  const aLink = navList[i].querySelector("a");
  aLink.addEventListener("click", function () {
    removeBehind();
    for (let j = 0; j < navList.length; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBehind(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showActive(this);

    if (window.innerWidth < 1200) {
      sidePanelBtnToggle();
    }
  });
}

// Show active page on navbar
function showActive(element) {
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

// Updates nav menu active page
function updateNavActive(element) {
  for (let i = 0; i < navList.length; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

// Remove behind class
function removeBehind() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("behind");
  }
}

// Add behind class
function addBehind(num) {
  sections[num].classList.add("behind");
}

// Hire me button - active
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");

  showActive(this);
  updateNavActive(this);
  removeBehind();
  addBehind(sectionIndex);
});

// Nav menu button toggle
const navBtn = document.querySelector(".nav-btn");
const sidePanel = document.querySelector(".side-panel");

navBtn.addEventListener("click", () => {
  sidePanelBtnToggle();
});

function sidePanelBtnToggle() {
  sidePanel.classList.toggle("open");
  navBtn.classList.toggle("open");
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.toggle("open");
  }
}

// Contact form validation
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");
const contactForm = document.getElementById("contact-form");

function nameValidation() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required!";
    return false;
  } else if (!name.match(/^[A-Za-z)*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Please enter a valid name!";
    return false;
  } else {
    nameError.innerHTML = '<i class="fas fa-check-circle"></i';
    return true;
  }
}

function emailValidation() {
  var email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required!";
    return false;
  } else if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Please enter a valid email!";
    return false;
  } else {
    emailError.innerHTML = '<i class="fas fa-check-circle"></i';
    return true;
  }
}

function subjectValidation() {
  var subject = document.getElementById("contact-subject").value;

  if (subject.length == 0) {
    subjectError.innerHTML = "Subject is required!";
    return false;
  } else {
    subjectError.innerHTML = '<i class="fas fa-check-circle"></i';
    return true;
  }
}

function messageValidation() {
  var message = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters required!";
    return false;
  } else {
    messageError.innerHTML = '<i class="fas fa-check-circle"></i';
    return true;
  }
}

function formValidation() {
  if (
    !nameValidation() ||
    !emailValidation() ||
    !subjectValidation() ||
    !messageValidation()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fill all the requirements!";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  } else if (popupBlurAdd()) {
    popupBlurRemove();
  }
}

//Contact form popup
function popupBlurAdd() {
  var blur = document.getElementById("blur");
  blur.classList.add("active");
  var popup = document.getElementById("popup");
  popup.classList.add("active");
}
function popupBlurRemove() {
  var blur = document.getElementById("blur");
  blur.classList.remove("active");
  var popup = document.getElementById("popup");
  popup.classList.remove("active");
  window.location.reload();
}
