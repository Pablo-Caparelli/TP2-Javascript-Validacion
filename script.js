const form = document.querySelector("#form");
const resultado = document.querySelector("#resultado");
const errorNombre = document.querySelector("#errorNombre");
const errorEdad = document.querySelector("#errorEdad");
const nombre = document.querySelector("#nombre");
const edad = document.querySelector("#edad");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // limpiar mensajes anteriores
  errorNombre.textContent = "";
  errorEdad.textContent = "";
  resultado.textContent = "";

  const validoNombre = validarNombre();
  const validoEdad = validarEdad();

  if (validoNombre && validoEdad) {
    resultado.innerHTML = `<p style="color: green;">✅ Bienvenido ${nombre.value}, tienes acceso al evento🆗👍</p>`;
  }
});

function validarNombre() {
  const valueNombre = nombre.value.trim();

  //Expresión regular para validar que el nombre sean sólo letras
  const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  if (valueNombre.length < 3 || valueNombre.length > 15) {
    errorNombre.textContent = "El nombre debe tener entre 3 y 15 caracteres.";
    errorNombre.classList.add("mensaje-error");
    errorNombre.classList.remove("mensaje-ok");
    return false;
  } else if (!soloLetras.test(valueNombre)) {
    errorNombre.textContent = "El nombre solo puede contener letras.";
    errorNombre.classList.add("mensaje-error");
    errorNombre.classList.remove("mensaje-ok");
    return false;
  } else {
    errorNombre.textContent = "✔ Nombre válido";
    errorNombre.classList.add("mensaje-ok");
    errorNombre.classList.remove("mensaje-error");
    return true;
  }
}

function validarEdad() {
  const valueEdad = parseInt(edad.value, 10);

  if (valueEdad < 1 || valueEdad > 120) {
    errorEdad.textContent = "La edad debe estar entre 1 y 120.";
    errorEdad.classList.add("mensaje-error");
    errorEdad.classList.remove("mensaje-ok");
    return false;
  }

  if (valueEdad < 18) {
    errorEdad.textContent =
      "Lo sentimos😞, debes ser mayor de edad para ingresar.👎";
    errorEdad.classList.add("mensaje-error");
    errorEdad.classList.remove("mensaje-ok");
    return false;
  }

  return true;
}
