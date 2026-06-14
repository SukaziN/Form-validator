let button = document.getElementById("submit");
let errorAlert = document.querySelector(".error");
let emailFeedback = document.getElementById("emailFeedback");
let passwordFeedback = document.getElementById("passwordFeedback");
let usernameFeedback = document.getElementById("usernameFeedback");
let validEmail = /([a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z0-9.-_]+)/g;
let specialCharacters = /[\d\s-_&%#@!|]+/g;
let validPassword = /([\d.-_]+)/g;
function validateInput() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let username = document.getElementById("username").value;

  if (!email.match(validEmail)) {
    console.log(email + " please enter a valid email address!");
    errorAlert.classList.remove("hide"); //if the className was used to select the element, classList does not work
  } else {
    console.log("We will send a weekly newsletter to " + email);
    errorAlert.classList.remove("hide"); //when adding or removing classLists, you cannot pair them as you do in html. They must be coded individually
    errorAlert.classList.remove("error");
    emailFeedback.textContent = "We will send a weekly newsletter to " + email;
  } //you must prevent the default behavior of the form elements to clear fields to retain user interaction thereby improving responsiveness and reassuring the user

  if (password.match(validPassword) == null || password.length < 8) {
    console.log(
      password +
        " please enter a strong password! Pro-Tip: a mixture of lowercase and uppercase letters, numbers, and special characters.",
    );
    errorAlert.classList.remove("hide");
  } else {
    console.log("Please confirm your password below.");
    errorAlert.classList.remove("error");
    errorAlert.classList.remove("hide");
    alert("Would you like to save your password?");
  }

  if (username.match(specialCharacters) == null) {
    console.log("Welcome aboard " + username);
    errorAlert.classList.remove("error");
    errorAlert.classList.remove("hide");
    usernameFeedback.textContent = "Welcome aboard " + username;
  } else {
    console.log(
      username +
        " username cannot contain spaces, numbers or special characters.",
    );
    errorAlert.classList.remove("hide");
  }
}
button.addEventListener("click", validateInput);
