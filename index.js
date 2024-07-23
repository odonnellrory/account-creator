const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const username = document.getElementById("username");
const avatarImageURL = document.getElementById("avatarImage");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorElement = document.getElementById("error");
const form = document.getElementById("accountForm");

form.addEventListener("submit", (event) => {
  let messages = [];

  // first name
  if (firstName.value.length <= 2 || firstName.value.length > 20) {
    messages.push("First Name must be between 2 and 30 characters");
  } else if (firstName.value.match(/^[0-9]+$/)) {
    messages.push("Names can NOT contain numbers");
  }

  // last name
  if (lastName.value.length <= 2 || lastName.value.length > 20) {
    messages.push("Last Name must be between 2 and 30 characters");
  } else if (lastName.value.match(/^[0-9]+$/)) {
    messages.push("Names can NOT contain numbers");
  }

  // username
  if (username.value.length <= 4 || username.value.length > 20) {
    messages.push("Username must be between 4 and 20 characters");
  }

  // password
  if (password.value.length <= 6) {
    messages.push("password must be longer than 6 characters");
  } else if (password.value.length > 20) {
    messages.push("password must be shorter than 20 characters");
  } else if (password.value.toLowerCase().includes("password")) {
    messages.push("Password must NOT include password");
  } else if (password.value.match(/^[^0-9]+$/)) {
    messages.push("Password must include numbers");
  } else if (password.value.match(/^[^a-zA-Z]+$/)) {
    messages.push("Password must contain letters");
  }
  if (messages.length > 0) {
    event.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
