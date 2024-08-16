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
      // these IDs from the previous steps
      emailjs.sendForm('service_5kl2b03', 'template_m2rj2tn', this)
          .then(() => {
              console.log('SUCCESS!');
          }, (error) => {
              console.log('FAILED...', error);
          });
  });
}