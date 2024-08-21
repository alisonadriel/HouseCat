"use strict";

// Interações do menu

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

const header = document.querySelector(".header");
const goTopBtn = document.querySelector(".go-top");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("showBtn");
    goTopBtn.classList.add("showBtn");
  } else {
    header.classList.remove("showBtn");
    goTopBtn.classList.remove("showBtn");
  }
});

// Modal para donate

const modalBtn = document.querySelector(".btn");
const modal = document.querySelector("dialog");
const buttonClose = document.querySelector(".closeModal");

modalBtn.onclick = function () {
  modal.showModal();
};

buttonClose.onclick = function () {
  modal.close();
};

const apoieBtn = document.querySelector(".btn-adopt");

apoieBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  setTimeout(() => {
    modal.showModal();
  }, 300);
});

// Efeitos no scroll

const sections = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight * 0.6;

function animaScroll(){
  sections.forEach((section)=>{
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = (sectionTop - windowMetade) < 0;
    if(isSectionVisible){
      section.classList.add("ativo");
    }
  })
}


window.addEventListener("scroll", animaScroll);

