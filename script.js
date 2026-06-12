let button = document.getElementById("submit");
let errorAlert = document.getElementsByClassName("error");

let validEmail = /([a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z0-9.-_]+)/g;
let specialCharacters = /[\d\s.-_&%#@!|]/g;
let validPassword = /([\d\s.-_]+)/g;
function validateInput() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let username = document.getElementById("username").value;

  !email.match(validEmail)
    ? console.log(email + " please enter a valid email address!")
    : console.log("We will send a weekly newsletter to " + email);

  password.match(validPassword) == null || password.length < 8
    ? console.log(
        password +
          " please enter a strong password! Pro-Tip: a mixture of lowercase and uppercase letters, numbers, and special characters.",
      )
    : console.log("Please confirm your password below.");

  username.match(specialCharacters) == null
    ? console.log("Welcome aboard " + username)
    : console.log(
        username +
          " username cannot contain spaces, numbers or special characters.",
      ); //username logic worked at first but now exclusively returns else statement (code is airtight, could be a device issue, run debug session after a while and maybe reboot session or device)
}
button.addEventListener("click", validateInput);
