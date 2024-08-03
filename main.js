"use strict";

// interações do menu

const navOpenBtn = document.querySelector(".nav-open-btn");
const navBar = document.querySelector(".navbar");
const navCloseBtn = document.querySelector(".nav-close-btn");
const overlay = document.querySelector(".overlay");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navBar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

const navBarLinks = document.querySelectorAll(".navbar-item");

// Fazer o menu desaparecer quando clicar em algum link

for (let i = 0; i < navBarLinks.length; i++) {
  navBarLinks[i].addEventListener("click", function () {
    navBar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}
