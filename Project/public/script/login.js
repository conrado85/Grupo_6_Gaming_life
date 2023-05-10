const usernameField = document.querySelector("[name=username]");
const passwordField = document.querySelector("[name=password]");


const setErrors = (message, field, isError = true) => {
  if (isError) {
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = message;
  } else {
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
  }
}

const validateEmptyField = (message, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  if (fieldValue.trim().length === 0) {
    setErrors(message, field);
  } else {
    setErrors("", field, false);
  }
}

usernameField.addEventListener("blur", (e) => validateEmptyField("El campo Usuario es obligatorio", e));
passwordField.addEventListener("blur", (e) => validateEmptyField("El campo Contraseña es obligatorio", e));
