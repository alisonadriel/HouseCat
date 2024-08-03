'use strict';

// Seletores de elementos DOM
const navOpenBtn = document.querySelector('.nav-open-btn') as HTMLButtonElement;
const navBar = document.querySelector('.navbar') as HTMLElement;
const navCloseBtn = document.querySelector('.nav-close-btn') as HTMLButtonElement;
const overlay = document.querySelector('.overlay') as HTMLElement;

const elemArr: (HTMLButtonElement | HTMLElement)[] = [navCloseBtn, overlay, navOpenBtn];

// Adicionando eventos de clique para abrir/fechar o menu
for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function() {
    navBar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// Seleciona todos os itens de menu
const navBarLinks = document.querySelectorAll('.navbar-item') as NodeListOf<HTMLElement>;

// Fechar o menu ao clicar em um link
for (let i = 0; i < navBarLinks.length; i++) {
  navBarLinks[i].addEventListener("click", function() {
    navBar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}