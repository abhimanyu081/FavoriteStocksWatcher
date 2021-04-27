const usernameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirmpassword");

const form = document.querySelector("#register");

var inputArr = [usernameEl, emailEl, passwordEl, confirmPasswordEl];

usernameEl.addEventListener("input", function (event) {
  if (isBlank(event.target.value)) {
    showError(usernameEl, "name can not be left blank");
  } else if (!isBetween(3, 8, event.target.value.length)) {
    showError(
      usernameEl,
      "Username must be between ${min} and ${max} characters."
    );
  } else {
    showSuccess(usernameEl);
  }
});

usernameEl.addEventListener("blur", function (event) {
  if (isBlank(event.target.value)) {
    showError(usernameEl, "name can not be left blank");
  } else if (!isBetween(3, 8, event.target.value.length)) {
    showError(
      usernameEl,
      "Username must be between ${min} and ${max} characters."
    );
  } else {
    showSuccess(usernameEl);
  }
});

function checkName(name) {
  const min = 3,
    max = 25;

  if (isBlank(name)) {
    showError(usernameEl, "name can not be left blank");
  } else if (!isBetween(min, max, name.length)) {
    showError(
      usernameEl,
      "Username must be between ${min} and ${max} characters."
    );
  } else {
    showSuccess(usernameEl);
    return true;
  }

  return false;
}

function checkEmail(email) {
  const min = 3,
    max = 25;

  if (isBlank(email)) {
    showError(emailEl, "email can not be left blank");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    return true;
  }

  return false;
}

function checkPassword(password) {
  if (isBlank(password)) {
    showError(passwordEl, "password can not be left blank");
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

function checkConfirmPassword(password, confirmPassword) {
  const min = 3,
    max = 25;

  if (isBlank(password)) {
    showError(confirmPasswordEl, "enter your password again");
  } else if (password !== confirmPassword) {
    showError(
      confirmPasswordEl,
      "password and confirm password does not match"
    );
  } else {
    showSuccess(confirmPasswordEl);
    return true;
  }

  return false;
}

function isBlank(value) {
  return value === "" ? true : false;
}

function isBetween(min, max, value) {
  return value < min || value > max ? false : true;
}

function isEmailValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
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
