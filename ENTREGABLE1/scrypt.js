
    function saludar() {
      const nombre = document.getElementById("nombre").value.trim();
      const hora = new Date().getHours();
      let saludo = "";

      if (hora >= 5 && hora <= 11) {
        saludo = "Buenos días";
      } else if (hora >= 12 && hora <= 18) {
        saludo = "Buenas tardes";
      } else {
        saludo = "Buenas noches";
      }

      if (nombre === "") {
        document.getElementById("resultado").innerText =
          "Por favor ingresa tu nombre ";
      } else {
        document.getElementById("resultado").innerText =
          `${saludo}, ${nombre} `;
      }
    }


function escondertabla() {
      const tabla = document.getElementById("miTabla");
      const boton = document.getElementById("btnTabla");


      if (tabla.style.display === "none") {
        tabla.style.display = "table";
        boton.innerText = "Ocultar tabla";
      } else {
        tabla.style.display = "none";
        boton.innerText = "Mostrar tabla";
      }
    }

function mostrarcontacto() {
  const contacto = document.getElementById("bloqueContacto");
  const boton = document.getElementById("btnContacto");

  const estaOculto = window.getComputedStyle(contacto).display === "none";

  if (estaOculto) {
    contacto.style.display = "block";
    boton.innerText = "Ocultar contacto";
  } else {
    contacto.style.display = "none";
    boton.innerText = "Mostrar contacto";
  }
}


const buscador = document.getElementById("buscador");
const lista = document.getElementById("conocimiento");
const items = lista.getElementsByTagName("li");

buscador.addEventListener("keyup", () => {
  const texto = buscador.value.toLowerCase();

  for (let item of items) {
    const contenido = item.textContent.toLowerCase();

    if (contenido.includes(texto)) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  }
});
