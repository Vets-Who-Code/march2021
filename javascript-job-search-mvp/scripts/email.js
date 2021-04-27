function sendEmail() {
    var userEmail = document.getElementById("userEmail").value;
    var userMessage = document.getElementById("userMessage").value;

    Email.send({
      Host: "smtp.gmail.com",
      Username: "ckdckdrn112@gmail.com",
      Password: "Ckdckdrn123!",
      To: 'ckdckdrn112@gmail.com',
      From: userEmail,
      Subject: "IMPORTANT: Vets Who Code User Message",
      Body: userMessage,
    })
      .then(function (message) {

        alert("mail sent successfully")
      });
  }