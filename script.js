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
  console.log(email);
  let password = document.getElementById("password").value;
  console.log(password);
  let username = document.getElementById("username").value;
  console.log(username);

  if (!email.match(validEmail)) {
    console.log(email + " please enter a valid email address!");
  } else {
    console.log("We will send a weekly newsletter to " + email);
  }
}
button.addEventListener("click", validateInput);
