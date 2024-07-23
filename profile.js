const urlParams = new URLSearchParams(window.location.search)
const firstName = urlParams.get("firstName");
const lastName = urlParams.get("lastName");
const username = urlParams.get("username");
const avatarImageURL = urlParams.get("avatarImage");
const email = urlParams.get("email");


const firstNameInput =document.getElementById("firstNameInput")
firstNameInput.innerText=firstName
const lastNameInput =document.getElementById("lastNameInput")
lastNameInput.innerText=lastName
const usernameInput =document.getElementById("usernameInput")
usernameInput.innerText=username
const emailInput =document.getElementById("emailInput")
emailInput.innerText=email

const avatarInput =document.getElementById("avatarInput")
avatarInput.src=avatarImageURL