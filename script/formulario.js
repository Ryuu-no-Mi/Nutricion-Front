const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const campos = {
  name: false,
  lastname: false,
  password: false,
  email: false,
  phonenumber: false,
};

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
  lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phonenumber: /^\d{7,14}$/, // 7 a 14 numeros.
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "name":
      validarCampo(expresiones.name, e.target, "name");
      break;
    case "lastname":
      validarCampo(expresiones.lastname, e.target, "lastname");
      break;
    case "password":
      validarCampo(expresiones.password, e.target, "password");
      break;
    case "email":
      validarCampo(expresiones.email, e.target, "email");
      break;
    case "phonenumber":
      validarCampo(expresiones.phonenumber, e.target, "phonenumber");
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
