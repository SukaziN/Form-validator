let button = document.getElementById("submit");
//let errorAlert = document.querySelector(".error");  this is probably why removing and adding the css class only works once (first instance) coz the selector is not specific and therefore only selects the first of its kind and stops looking
let emailFeedback = document.getElementById("emailFeedback");
let passwordFeedback = document.getElementById("passwordFeedback");
let usernameFeedback = document.getElementById("usernameFeedback");
let validEmail = /([a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z0-9.-_]+)/g;
let specialCharacters = /[\d\s-_&%#@!|]+/g;
let validPassword = /([\d.-_]+)/g;

function validateEmailInput() {
  event.preventDefault();
  let email = document.getElementById("email").value;
  if (!email.match(validEmail)) {
    console.log(email + " please enter a valid email address!");
    emailFeedback.classList.remove("hide"); //if the className was used to select the element, classList does not work
  } else {
    console.log("We will send a weekly newsletter to " + email);
    emailFeedback.classList.remove("hide"); //when adding or removing classLists, you cannot pair them as you do in html. They must be coded individually
    emailFeedback.classList.remove("error");
    emailFeedback.textContent = "We will send a weekly newsletter to " + email;
  } //you must prevent the default behavior of the form elements to clear fields to retain user interaction thereby improving responsiveness and reassuring the user
} //code outputs only in the email span though so i need to separate each validation into its own function for clarity
button.addEventListener("click", validateEmailInput);

function validatePasswordInput() {
  event.preventDefault();
  let password = document.getElementById("password").value;
  if (password.match(validPassword) == null || password.length < 8) {
    console.log(
      password +
        " please enter a strong password! Pro-Tip: a mixture of lowercase and uppercase letters, numbers, and special characters.",
    );
    passwordFeedback.classList.remove("hide");
  } else {
    console.log("Please confirm your password below.");
    passwordFeedback.classList.remove("error");
    passwordFeedback.classList.remove("hide");
    alert("Would you like to save your password?");
  }
}
button.addEventListener("click", validatePasswordInput);

function validateUsername() {
  event.preventDefault();
  let username = document.getElementById("username").value;
  if (username.match(specialCharacters) == null) {
    console.log("Welcome aboard " + username);
    usernameFeedback.classList.remove("error");
    usernameFeedback.classList.remove("hide");
    usernameFeedback.textContent = "Welcome aboard " + username;
  } else {
    console.log(
      username +
        " username cannot contain spaces, numbers or special characters.",
    );
    usernameFeedback.classList.remove("hide");
  }
}
button.addEventListener("click", validateUsername);
