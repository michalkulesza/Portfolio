// FIX
//  - Scale overlay
//  - Custom sidebar

///////////////////////////////////
/////////////SELECTORS/////////////
///////////////////////////////////

const indicator = document.querySelector(".indicator");
const nav = document.querySelector("nav");
const menuMobileIcon = document
  .querySelector(".menu-mobile")
  .querySelector("i");
const head = document.querySelector("#head");
const bg = document.querySelector(".bg");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const works = document.querySelector("#works");
const footer = document.querySelector("footer");

//////////////////////////////////
/////////EVENT LISTENERS//////////
//////////////////////////////////

document.addEventListener("scroll", () => {
  moveMenuIndicator();
  colorizeNav();
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

function colorizeNav() {
  if (window.pageYOffset < head.getBoundingClientRect().height - 80) {
    nav.style.backgroundColor = "transparent";
    nav.querySelector(".logo").style.color = "white";
    menuMobileIcon.style.color = "white";
    for (let a of nav.querySelectorAll("h5")) {
      a.style.color = "white";
    }
  } else if (
    (window.pageYOffset >
      head.getBoundingClientRect().height +
        about.getBoundingClientRect().height -
        80 &&
      window.pageYOffset <
        head.getBoundingClientRect().height +
          about.getBoundingClientRect().height +
          skills.getBoundingClientRect().height -
          80) ||
    window.pageYOffset >
      head.getBoundingClientRect().height +
        about.getBoundingClientRect().height +
        skills.getBoundingClientRect().height +
        works.getBoundingClientRect().height -
        80
  ) {
    nav.style.backgroundColor = "#F6F6F6";
  } else {
    nav.style.backgroundColor = "white";
    nav.querySelector(".logo").style.color = "black";
    menuMobileIcon.style.color = "black";
    for (let a of nav.querySelectorAll("h5")) {
      a.style.color = "black";
    }
  }
}
