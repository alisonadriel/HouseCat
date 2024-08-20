(function() {
  emailjs.init({
    publicKey: "esxt9BHWFNLhDoDqG",
  });
})();

const message = document.querySelector(".form-message");

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (validateForm()) {
      document.querySelector(".loader").classList.add("show");
      emailjs.sendForm('service_5kl2b03', 'template_m2rj2tn', this)
        .then(
          function() {
            document.getElementById("contact-form").reset();
            document.querySelector(".loader").classList.remove("show");
            message.innerHTML = "";
            message.innerHTML += "<span class='success-msg'>Enviado!</span>";
            message.classList.add("show");
            setTimeout(() => message.classList.remove("show"), 2000);
          },
          function(error) {
            document.querySelector(".loader").classList.toggle("show");
            message.classList.add("show");
            message.innerHTML += "<span class='error-msg'>Erro!</span>";
          }
        );
    }
  });
}

// Validação do formulário
function validateForm() {
  let valid = true;

  if (!nameValidate()) valid = false;
  if (!emailValidate()) valid = false;
  if (!msgValidate()) valid = false;

  return valid;
}

const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;

function setError(index) {
  campos[index].style.border = "2px solid #e63636";
  spans[index].style.display = "block";
}

function removeError(index) {
  campos[index].style.border = "";
  spans[index].style.display = "none";
}

function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0);
    return false;
  } else {
    removeError(0);
    return true;
  }
}

function emailValidate() {
  if (!emailRegex.test(campos[1].value)) {
    setError(1);
    return false;
  } else {
    removeError(1);
    return true;
  }
}

function msgValidate() {
  if (campos[2].value.length < 1) {
    setError(2);
    return false;
  } else {
    removeError(2);
    return true;
  }
}
