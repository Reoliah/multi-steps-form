const form = document.querySelector(".infoForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const contactInput = document.getElementById("contact");

export default function infoValidation() {
  validateInfo();
}
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = document.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = document.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove(".error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email.toLowerCase()));
};

const validateInfo = () => {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const contactValue = contactInput.value.trim();

  if (nameValue === " ") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Valid email is required");
  } else {
    setSuccess(email);
  }

  if (contactValue === " ") {
    setError(contact, "Contact is required");
  } else if (contactValue < 11 || contactValue > 11) {
    setError(contact, "Contact must be eleven digits");
  } else {
    setSuccess(contact);
  }
};
