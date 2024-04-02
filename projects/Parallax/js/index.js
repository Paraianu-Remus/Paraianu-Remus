// Parallax 1
const bg = document.getElementById("bg");
const moon = document.getElementById("moon");
const mountain = document.getElementById("mountain");
const road = document.getElementById("road");
const text = document.getElementById("text");
// Parallax 2
const bg1 = document.getElementById("bg-1");
const girl = document.getElementById("girl");
const rock = document.getElementById("rock");
const text2 = document.getElementById("text-2");
// Parallax 3
const bird1 = document.getElementById("bird-1");
const bird2 = document.getElementById("bird-2");
const forest = document.getElementById("forest");
const rocks = document.getElementById("rocks");
const water = document.getElementById("water");
const text3 = document.getElementById("text-3");
// Parallex 4
const stars = document.getElementById("stars");
const moon1 = document.getElementById("moon-1");
const mountainsBehind = document.getElementById("mountains-behind");
const mountainsFront = document.getElementById("mountains-front");
const text4 = document.getElementById("text-4");

window.addEventListener("scroll", function () {
  var value = window.scrollY;
  // Parallax 1
  bg.style.top = value * 0.5 + "px";
  moon.style.left = -value * 0.5 + "px";
  mountain.style.top = -value * 0.15 + "px";
  road.style.top = value * 0.15 + "px";
  text.style.top = value * 1 + "px";
  // Parallax 2
  bg1.style.bottom = -value * 0.5 + "px";
  girl.style.top = value * 0.2 + "px";
  rock.style.top = value * 0.2 + "px";
  //   text2.style.bottom = 1290 + -value * 1 + "px";
  // Parallax 3
  bird1.style.top = 250 + value * -0.2 + "px";
  bird1.style.left = -220 + value * 0.2 + "px";
  bird2.style.top = 250 + value * -0.2 + "px";
  bird2.style.left = 200 + value * -0.2 + "px";
  rocks.style.top = 180 + value * -0.1 + "px";
  forest.style.top = -300 + value * 0.15 + "px";
  //   text3.style.bottom = 2580 + -value * 1 + "px";
  // Parallex 4
  //   stars.style.left = -950 + value * 0.25 + "px";
  //   moon1.style.top = -2830 + value * 0.75 + "px";
  //   moon1.style.left = -2830 + value * 0.75 + "px";
  mountainsBehind.style.top = -680 + value * 0.25 + "px";
  mountainsFront.style.top = -380 + value * 0.15 + "px";
  //   text4.style.bottom = 3875 + -value * 1 + "px";
  function mediaQuery(mediaQ) {
    if (mediaQ.matches) {
      text2.style.bottom = 935 + -value * 1 + "px";
      text3.style.bottom = 1863 + -value * 1 + "px";
      stars.style.left = -750 + value * 0.25 + "px";
      moon1.style.top = -2055 + value * 0.75 + "px";
      moon1.style.left = -2055 + value * 0.75 + "px";
      text4.style.bottom = 2793 + -value * 1 + "px";
    } else {
      text2.style.bottom = 1290 + -value * 1 + "px";
      text3.style.bottom = 2580 + -value * 1 + "px";
      stars.style.left = -950 + value * 0.25 + "px";
      moon1.style.top = -2830 + value * 0.75 + "px";
      moon1.style.left = -2830 + value * 0.75 + "px";
      text4.style.bottom = 3875 + -value * 1 + "px";
    }
  }
  var mediaQ = window.matchMedia("(max-height: 985px)");
  mediaQuery(mediaQ);
  mediaQ.addEventListener(mediaQuery);
});
