const fullnameField = document.querySelector("[name=fullname]");
const usernameField = document.querySelector("[name=username]");
const passwordField = document.querySelector("[name=password]");
const confirmPasswordField = document.querySelector("[name=confirmPassword]");
const emailField = document.querySelector("[name=email]");
const imgField = document.querySelector("[name=img]");

const setErrors = (message, field, isError = true) => {
  if (isError) {
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error")
    field.nextElementSibling.classList.add("register-error-message");
    field.nextElementSibling.innerText = message;
  } else {
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.classList.remove("register-error-message");
    field.classList.add("valid")
    field.nextElementSibling.classList.add("success")
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

const validateEmailFormat = e => {
  const field = e.target;
  const fieldValue = e.target.value;
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
    setErrors("Ingrese una casilla de mail valida", field);
  } else {
    setErrors("", field, false);
  }
}

const validateConfirmPassword = e => {
  const field = e.target;
  const passwordValue = passwordField.value;
  const confirmPasswordValue = confirmPasswordField.value;
  if (passwordValue !== confirmPasswordValue) {
    setErrors("Las contraseñas no coinciden", field);
  } else {
    setErrors("", field, false);
  }
}

fullnameField.addEventListener("blur", (e) => validateEmptyField("El campo Nombre y apellido es obligatorio", e));
usernameField.addEventListener("blur", (e) => validateEmptyField("El campo Usuario es obligatorio", e));
passwordField.addEventListener("blur", (e) => validateEmptyField("El campo Contraseña es obligatorio", e));
confirmPasswordField.addEventListener("focus", (e) => validateEmptyField("Confirme su contraseña", e));
emailField.addEventListener("blur", (e) => validateEmptyField("Ingrese una casilla de mail valida", e));

emailField.addEventListener("input", validateEmailFormat);

imgField.addEventListener("change", (e) => {
  const field = e.target;
  const fileExt = e.target.files[0].name.split(".").pop().toLowerCase();
  const allowedExt = ["jpg", "jpeg", "png", "gif"];
  if (!allowedExt.includes(fileExt)) {
    setErrors(`Solo se admiten archivos de imagen con extension ${allowedExt.join(", ")}`, field);
  } else {
    setErrors("", field, false);
  }
});