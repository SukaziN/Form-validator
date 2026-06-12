let button = document.getElementById("submit");
let errorAlert = document.getElementsByClassName("error");
/*for (let i = 0; i < errorAlert.length; i++) {
  errorAlert.classList.add("hide");
}*/
let validEmail = /([a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z0-9.-_]+)/g;
let validUserName = /([a-zA-Z]+)/g;
let validPassword = /([a-zA-Z0-9.-_@\/])/g;
function validateInput() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let username = document.getElementById("username").value;

  let userInfo = [];
  userInfo.push(email);
  userInfo.push(password);
  userInfo.push(username);
  console.log(userInfo);

  for (let i = 0; i < userInfo.length; i++) {
    if (!email.match(validEmail)) {
      console.log(email + " please enter a valid email address!");
    } else {
      console.log("We will send a weekly newsletter to " + email);
    }
    if (!password.match(validPassword)) {
      console.log(
        password +
          " please enter a strong password! Pro-Tip: a mixture of lowercase and uppercase letters, numbers, and special characters.",
      );
    } else {
      console.log("Please confirm your password below.");
    }
  }
}
button.addEventListener("click", validateInput);
