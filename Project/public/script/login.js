const usernameField = document.querySelector("[name=username]");
const passwordField = document.querySelector("[name=password]");
const errorMessage = document.querySelector(".register-error-message")


const setErrors = (message, field, isError = true) => {
  if (isError) {
    field.classList.add("invalid");
    field.classList.remove("valid");
    field.nextElementSibling.classList.add("register-error-message");
    field.nextElementSibling.innerText = message;
  } else {
    field.classList.add("valid");
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.classList.remove("register-error-message");
    field.nextElementSibling.innerText = "";
  }
}

const removeErrorMessage = (field) => {
  const errorMessageElement = field.nextElementSibling;
  if (errorMessageElement.classList.contains("register-error-message")) {
    errorMessageElement.innerText = "";
    errorMessageElement.classList.remove("register-error-message");
  }
}

const validateEmptyField = (message, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  if (fieldValue.trim().length === 0) {
    setErrors(message, field);
  } else {
    setErrors("", field, false);
    removeErrorMessage(field);
  }
}

usernameField.addEventListener("blur", (e) => validateEmptyField("El campo Usuario es obligatorio", e));
passwordField.addEventListener("blur", (e) => validateEmptyField("El campo Contraseña es obligatorio", e)); 
errorMessage.addEventListener("keydown", (e) => removeErrorMessage(e));
errorMessage.addEventListener("keydown", (e) => removeErrorMessage(e)); 