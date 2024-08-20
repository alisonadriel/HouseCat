(function() {
  emailjs.init({
    publicKey: "esxt9BHWFNLhDoDqG",
  });
})();

const message = document.querySelector(".form-message");


window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      document.querySelector(".loader").classList.add("show")
      emailjs.sendForm('service_5kl2b03', 'template_m2rj2tn', this)
          .then(
            function(){
                document.getElementById("contact-form").reset();
                document.querySelector(".loader").classList.remove("show");
                message.innerHTML = "";
                message.innerHTML += "<span class='success-msg'>Enviado!</span>";
                message.classList.add("show");
                setTimeout(() => message.classList.remove("show"), 2000);
            },
            function(error){
                document.querySelector(".loader").classList.toggle("show");
                message.classList.add("show");
                message.innerHTML += "<span class='error-msg'>Erro!</span>";
              }
           );
  });
}

// Validação do formulário

const form   = document.getElementById("contact-form");
const campos = document.querySelectorAll(".required");
const spans  = document.querySelectorAll(".span-required");
const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;


    function setError(index){
      campos[index].style.border = "2px solid #e63636";
      spans[index].style.display = "block";
    }


    function removeError(index){
      campos[index].style.border = "";
      spans[index].style.display = "none";
    }

    function nameValidate(){
      if(campos[0].value.length<3){
          setError(0);
      }else{
          removeError(0);
      }
    }
