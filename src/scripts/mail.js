function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  Email.send({
    SecureToken: "dc56002e-1f51-454d-9107-0b340ceb2e9a",
    To: "allison.adriel21@gmail.com",
    From: "allison.adriel21@gmail.com",
    Subject: "Testando e-mail",
    Body: `
        Name: ${name} <br>
        Email: ${email} <br>
        Message: ${message}
    `,
  }).then((message) => alert(message));
}
