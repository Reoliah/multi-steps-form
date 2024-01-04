import { useSelector } from "react-redux";

const validationFunction = () => {
  const { username, email, contact } = useSelector((state) => state.user);

  //setting Error and Success
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

  //validation criteria
  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.toLowerCase()));
  };

  if (username === " ") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (email === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(email)) {
    setError(email, "Valid email is required");
  } else {
    setSuccess(email);
  }

  if (contact === " ") {
    setError(contact, "Contact is required");
  } else if (contactValue < 11 || contactValue > 11) {
    setError(contact, "Contact must be eleven digits");
  } else {
    setSuccess(contact);
  }
};

export default validationFunction;
