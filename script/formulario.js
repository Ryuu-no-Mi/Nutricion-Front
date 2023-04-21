const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const campos = {
  name: false,
  lastname: false,
  email: false,
  phonenumber: false,
  password: false,
};

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
  lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phonenumber: /^\d{7,14}$/, // 7 a 14 numeros.
  password: /^.{7,16}$/, // 7 a 16 digitos.
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "name":
      validarCampo(expresiones.name, e.target, "name");
      break;
    case "lastname":
      validarCampo(expresiones.lastname, e.target, "lastname");
      break;
    case "phonenumber":
      validarCampo(expresiones.phonenumber, e.target, "phonenumber");
      break;

    case "date":
      validarCampo(expresiones.date, e.target, "date");
      break;

    case "email":
      validarCampo(expresiones.email, e.target, "email");
      break;

    case "password":
      validarCampo(expresiones.password, e.target, "password");
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add("fa-check-circle");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove("fa-times-circle");
    document
      .querySelector(`#grupo__${campo} .formulario__input-error`)
      .classList.add("formulario__input-error");
    document
      .querySelector(`#grupo__${campo} .formulario__input-error`)
      .classList.remove("formulario__input-error-activo");
    campos[campo] = true;
  } else {
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add("fa-times-circle");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove("fa-check-circle");
    document
      .querySelector(`#grupo__${campo} .formulario__input-error`)
      .classList.add("formulario__input-error-activo");
    campos[campo] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    campos.name &&
    campos.lastname &&
    campos.email &&
    campos.phonenumber &&
    campos.password
  ) {
    formulario.reset();
    document
      .getElementById("formulario__mensaje-exito")
      .classList.add("formulario__mensaje-exito-activo");
    setTimeout(() => {
      document
        .getElementById("formulario__mensaje-exito")
        .classList.remove("formulario__mensaje-exito-activo");
    }, 5000);
    document
      .querySelectorAll(".formulario__validacion-estado")
      .forEach((icono) => {
        icono.classList.remove("formulario__validacion-estado");
      });
  } else {
    document
      .getElementById("formulario__mensaje")
      .classList.add("formulario__mensaje-activo");
    setTimeout(() => {
      document
        .getElementById("formulario__mensaje")
        .classList.remove("formulario__mensaje-activo");
    }, 3000);
  }
});
