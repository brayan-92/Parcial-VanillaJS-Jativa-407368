// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  // Botón para descargar CV
  const downloadBtn = document.getElementById("downloadBtn");

  if (downloadBtn) {
      downloadBtn.addEventListener("click", function () {
          const element = document.body;

          const opt = {
              margin: 0.5,
              filename: "mi_cv.pdf",
              image: { type: "jpeg", quality: 0.98 },
              html2canvas: { scale: 2 },
              jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
          };

          html2pdf().set(opt).from(element).save();
      });
  }

emailjs.init("yGivddd2IJhc49rWn"); // Reemplaza con tu verdadero User ID desde EmailJS

  // Manejo del formulario
  const form = document.getElementById("messageForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const senderName = document.getElementById("senderName").value;
      const message = document.getElementById("message").value;

      // Aquí defines los parámetros esperados por tu plantilla
      const templateParams = {
        sender_name: senderName,
        message: message,
      };

      emailjs.send("service_ylcggxk", "template_h2y3f98", templateParams)
        .then(function () {
          alert("Mensaje enviado exitosamente!");
          form.reset();
        })
        .catch(function (error) {
          alert("Hubo un error al enviar el mensaje.");
          console.error(error);
        });
    });
  }
});
