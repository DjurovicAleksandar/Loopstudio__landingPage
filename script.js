"use-strict";
const backgroundImg = document.querySelector(".img__bg");
// MEDIA QUERIES
const creation_img = document.querySelectorAll(".creation__img");
const mediaWidith = window.matchMedia("(min-width: 700px)");
//Hamburger menu
const hamburgerBtn = document.querySelector(".hamburger__menu");
const navList = document.querySelector(".nav__list");
let menuOpen = false;
//Functions

//Functions for media query
const mediaQuery = (media) => {
  creation_img.forEach((divImg) => {
    const img = divImg.querySelector("img");

    const desktopSrc = img.src.replace("mobile", "desktop");
    const mobileSrc = img.src.replace("desktop", "mobile");

    //Mutating image SRC, change from mobile -> desktop
    if (media.matches) {
      img.src = desktopSrc;
      backgroundImg.src = "./images/desktop/image-hero.jpg";
    } else {
      img.src = mobileSrc;
      backgroundImg.src = "./images/mobile/image-hero.jpg";
    }
  });
};

//Fucntion for hamburger menu
function toggleMenu(e) {
  const btn = e.target;
  navList.classList.toggle("open");

  if (!menuOpen) {
    btn.src = "./images/icon-close.svg";

    menuOpen = true;
  } else {
    btn.src = "./images/icon-hamburger.svg";
    menuOpen = false;
  }
}

// // // // // // // // // // // // // // // // // // // // // // // // // //
mediaQuery(mediaWidith);
mediaWidith.addListener(mediaQuery);

hamburgerBtn.addEventListener("click", toggleMenu);

window.onscroll = () => {
  navList.classList.remove("open");
  hamburgerBtn.src = "./images/icon-hamburger.svg";
};
