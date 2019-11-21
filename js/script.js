///////////////////////////////////
/////////////SELECTORS/////////////
///////////////////////////////////

const indicator = document.querySelector(".indicator");
const position = document.querySelector("#head").style.backgroundPositionY;
const nav = document.querySelector("nav");
const skills = document.querySelector("#skills");

//////////////////////////////////
/////////EVENT LISTENERS//////////
//////////////////////////////////

document.addEventListener("scroll", () => {
  moveMenuIndicator();
  //moveBackground();
  //colorizeNav();
});

//////////////////////////////////
////////////FUNCTIONS/////////////
//////////////////////////////////

function moveMenuIndicator() {
  if (window.pageYOffset <= 320) {
    indicator.style.left = "0px";
    indicator.style.width = "51px";
  } else if (window.pageYOffset > 320 && window.pageYOffset <= 1820) {
    indicator.style.left = "70px";
    indicator.style.width = "50px";
  } else if (window.pageYOffset > 1820 && window.pageYOffset <= 4300) {
    indicator.style.left = "139px";
    indicator.style.width = "52px";
  } else {
    indicator.style.left = "212px";
    indicator.style.width = "63px";
  }
}

moveMenuIndicator();

function moveBackground() {
  document.querySelector(
    "#head"
  ).style.backgroundPositionY = `${window.pageYOffset / 2}px`;
}

function colorizeNav() {
  if (
    skills.getBoundingClientRect().top <= 80 &&
    Math.abs(skills.getBoundingClientRect().top) <
      skills.getBoundingClientRect().height - 80
  ) {
    nav.style.backgroundColor = "#F6F6F6";
  } else {
    nav.style.backgroundColor = "white";
  }
  console.log(skills.getBoundingClientRect());
}
