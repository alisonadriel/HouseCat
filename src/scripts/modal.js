const copyPix = document.querySelector(".chave-pix");
const copyBtn = document.querySelector(".copy-btn");
const dialog = document.querySelector(".modal");

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
    popup.style.backgroundColor = "lightgreen";
    popup.style.color = "black";
    popup.style.borderRadius = "5px";
    popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    popup.style.zIndex = "10";
    popup.style.fontFamily = "Poppins, sans-serif";
    popup.style.fontWeight = "regular"
    popup.style.fontSize = "1.3rem";

    dialog.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, 3000);
  });
});
