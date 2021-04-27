const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirmpassword");

const form = document.querySelector("#register");
var radiosGender = document.getElementsByName("gender");

function validateName() {
  const name = nameEl.value.trim();
  const min = 3;
  const max = 25;

  if (isBlank(name)) {
    showError(nameEl, "name cannot be blank.");
  } else if (!isBetween(min, max, name.length)) {
    showError(nameEl, `name must be between ${min} and ${max} characters.`);
  } else {
    showSuccess(nameEl);
    return true;
  }

  return false;
}

function validateEmail() {
  const email = emailEl.value.trim();

  console.log("email = " + email);

  if (isBlank(email)) {
    showError(emailEl, "email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "email is not valid.");
  } else {
    showSuccess(emailEl);
    return true;
  }

  return false;
}

function validatePassword() {
  const password = passwordEl.value;

  if (isBlank(password)) {
    showError(passwordEl, "password cannot be blank.");
  } else if (!isPasswordString(password)) {
    showError(
      passwordEl,
      "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
    );
  } else {
    showSuccess(passwordEl);
    return true;
  }

  return false;
}

function validateConfirmPassword() {
  const password = passwordEl.value;
  const confirmPassword = confirmPasswordEl.value;

  console.log("pass = " + password);
  console.log("cPass = " + confirmPassword);

  if (isBlank(password)) {
    showError(confirmPasswordEl, "confirm password cannot be blank.");
  } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, "The password does not match");
  } else {
    showSuccess(confirmPasswordEl);
    return true;
  }

  return false;
}

function isGenderSelected() {
  if (
    !(
      radiosGender[0].checked ||
      radiosGender[1].checked ||
      radiosGender[2].checked
    )
  ) {
    showError(radiosGender[0], "Please select gender.");
    return false;
  }
  showSuccess(radiosGender[0]);
  return true;
}

form.addEventListener("input", function (e) {
  switch (e.target.id) {
    case "name":
      validateName();
      break;
    case "email":
      validateEmail();
      break;
    case "password":
      validatePassword();
      break;
    case "confirmpassword":
      validateConfirmPassword();
      break;
  }
});

form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate fields
  let isNameValid = validateName(),
    isEmailValid = validateEmail(),
    isPasswordValid = validatePassword(),
    isConfirmPasswordValid = validateConfirmPassword(),
    isGenderSelectedB = isGenderSelected();

  let isFormValid =
    isNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    isGenderSelectedB;

  // submit to the server if the form is valid
  if (isFormValid) {
    console.log("form submitted to server");
  }
});

function isBlank(value) {
  return value === "" ? true : false;
}

function isBetween(min, max, value) {
  return value < min || value > max ? false : true;
}

function isEmailValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var isEmailValid = re.test(email);

  console.log("isEmailValid = " + isEmailValid);

  return isEmailValid;
}

function isPasswordString(password) {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return re.test(password);
}

function showError(input, message) {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
}

function showSuccess(input) {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = "";
}
