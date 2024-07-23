const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const username = document.getElementById("username")
const avatarImageURL = document.getElementById("avatar-image")
const email = document.getElementById("email")
const password = document.getElementById("password")
const errorElement = document.getElementById('error')
const form = document.getElementById('account-form')

form.addEventListener("submit",(event)=>{
    let messages= []
if(password.value.length <=6){
    messages.push("password must be longer than 6 characters")
}
if(password.value.length >20){
    messages.push("password must not be longer than 20 characters")
}
if(messages.length>0){
    event.preventDefault()
    errorElement.innerText=messages.join(", ")
}
})

