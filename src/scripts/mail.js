(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "esxt9BHWFNLhDoDqG",
  });
})();

const message = document.querySelector("#message");


window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      document.querySelector(".loader").classList.add("show")
      emailjs.sendForm('service_5kl2b03', 'template_m2rj2tn', this)
          .then(
              function(){
                document.querySelector(".contact-form").reset();
                document.querySelector(".loader").classList.remove("show");
                msg.innerHTML = "";
                msg.innerHTML += "<span class='sucess-msg'> E-mail enviado!</span>";
                msg.classList.add("show");
                setTimeout(() => message.classList.remove("show"), 2000);
            },
           (error) => {
              console.log('FAILED...', error);
          });
  });
}