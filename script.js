let button = document.getElementById("submit");
let errorAlert = document.getElementsByClassName("error");
/*for (let i = 0; i < errorAlert.length; i++) {
  errorAlert.classList.add("hide");
}*/
function validateInput() {
  let email = document.getElementById("email").value;
  console.log(email);
  let password = document.getElementById("password").value;
  console.log(password);
  let username = document.getElementById("username").value;
  console.log(username);
}
button.addEventListener("click", validateInput);
