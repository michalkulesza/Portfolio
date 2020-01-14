// FIX
//  - Scale overlay
//  - Move menu indicator change triggers to section positions

///////////////////////////////////
/////////////SELECTORS/////////////
///////////////////////////////////

const indicator = document.querySelector(".indicator");
const nav = document.querySelector("nav");
const navIcon = nav.querySelector("i");
const menuMobileIcon = document.querySelector(".menu-mobile").querySelector("i");
const menuMobileMain = document.querySelector(".menu-mobile-main");
const menuMobileUl = menuMobileMain.querySelector("ul");
const menuMobileLis = menuMobileMain.querySelectorAll("li");
const menu = document.querySelector(".menu");
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

for (let a of menuMobileLis) {
  a.addEventListener("click", hideMobileMenu);
}

// Toggle mobile menu
menuMobileIcon.addEventListener("mousedown", () => {
  if (!menuMobileMain.classList.contains("main-active")) {
    showMobileMenu();
  } else {
    hideMobileMenu();
  }
});

function showMobileMenu() {
  nav.classList.toggle("nav-active");
  menuMobileUl.style.visibility = "visible";
  for (let li of menuMobileLis) {
    li.style.visibility = "visible";
    li.style.opacity = "1";
  }
  navIcon.classList = "fas fa-times";
  navIcon.style.transform = "scale(1.2)";
  setTimeout(() => {
    menuMobileMain.classList.toggle("main-active");
  }, 100);
}

function hideMobileMenu() {
  menuMobileMain.classList.toggle("main-active");
  for (let i = 3; i >= 0; i--) {
    menuMobileLis[i].style.transitionDelay = `0.${3 - i}s`;
  }
  for (let li of menuMobileLis) {
    li.style.opacity = "0";
  }

  navIcon.style.transform = "";
  navIcon.style.paddingTop = "";
  navIcon.classList = "fas fa-bars";
  menuMobileUl.style.visibility = "hidden";
  setTimeout(() => {
    nav.classList.toggle("nav-active");
    for (let i = 0; i <= 3; i++) {
      menuMobileLis[i].style.transitionDelay = `0.${i + 1}s`;
    }
  }, 600);
}

//////////////////////////////////
////////////FUNCTIONS/////////////
//////////////////////////////////

function moveMenuIndicator() {
  if (window.pageYOffset <= 320) {
    indicator.style.left = "2px";
    indicator.style.width = "53px";
  } else if (window.pageYOffset > 320 && window.pageYOffset <= 1820) {
    indicator.style.left = "73px";
    indicator.style.width = "56px";
  } else if (window.pageYOffset > 1820 && window.pageYOffset <= 4300) {
    indicator.style.left = "149px";
    indicator.style.width = "56px";
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
      head.getBoundingClientRect().height + about.getBoundingClientRect().height - 80 &&
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
    for (let a of menu.querySelectorAll("h5")) {
      a.style.color = "black";
    }
  }
}
