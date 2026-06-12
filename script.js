let button = document.getElementById("submit");
let errorAlert = document.getElementsByClassName("error");

let validEmail = /([a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z0-9.-_]+)/g;
let specialCharacters = /[\d\s.-_&%#@!|]/g;
let validPassword = /([\d\s.-_]+)/g;
function validateInput() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let username = document.getElementById("username").value;

  if (!email.match(validEmail)) {
    console.log(email + " please enter a valid email address!");
  } else {
    console.log("We will send a weekly newsletter to " + email);
  }
  if (password.match(validPassword) == null || password.length < 8) {
    console.log(
      password +
        " please enter a strong password! Pro-Tip: a mixture of lowercase and uppercase letters, numbers, and special characters.",
    );
  } else {
    console.log("Please confirm your password below.");
  }
  if (username.match(specialCharacters) == null) {
    console.log("Welcome aboard " + username);
  } else {
    console.log(
      username +
        " username cannot contain spaces, numbers or special characters.",
    );
  }
}
button.addEventListener("click", validateInput);
