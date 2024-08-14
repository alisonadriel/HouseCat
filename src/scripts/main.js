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

const copyPix = document.querySelector(".chave-pix");
const copyBtn = document.querySelector(".copy-btn");

copyBtn.addEventListener("click", () => {
  const pixText = copyPix.textContent;

  navigator.clipboard.writeText(pixText).then(() => {
    const popup = document.createElement("div");
    popup.textContent = "Texto copiado com sucesso!";
    popup.style.position = "fixed";
    popup.style.top = "10px";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";
    popup.style.padding = "10px 20px";
    popup.style.backgroundColor = "rgb(90, 16, 228)";
    popup.style.color = "white";
    popup.style.borderRadius = "5px";
    popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    popup.style.zIndex = "9999";
    popup.style.fontFamily = "Poppins, sans-serif";
    popup.style.fontSize = "1.3rem";

    document.body.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, 3000);
  });
});


