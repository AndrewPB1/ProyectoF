/* JavaScript */
//Jordy Cardenas; Cristian Corzo y Andrés Pedroza
$(document).ready(function () {
  // Código para manejar el envío del formulario de contacto
  $("form").on("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    var nombre = $("#nombre").val();
    var email = $("#email").val();

    if (nombre && email) {
      alert(
        "Gracias, " +
          nombre +
          ". Hemos recibido tu mensaje y te responderemos a " +
          email +
          " lo antes posible."
      );
    } else {
      alert("Por favor, completa todos los campos del formulario.");
    }
  });
});
// Script para cargar mapa de ubicación
const mapContainer = document.getElementById("map-container");
mapContainer.innerHTML = `
  <iframe 
src="https://maps.app.goo.gl/okMTreuqhVhmf2bd7"" 
  loading="lazy"></iframe>
`;
