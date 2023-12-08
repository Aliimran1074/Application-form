import {app} from './config.js' 

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
const auth = getAuth(app);


if(document.title==="Saylani Form"){
let SignInNav= document.getElementById('signNav')
let eyeIcon= document.getElementById('eyeIcon')
let passwordInput= document.getElementById('passInp')
let email= document.querySelector('#sEmail')
let password = document.querySelector('#sPassword')
let submitButton = document.getElementById('submitButton')
let fullName = document.getElementById('fullName')

eyeIcon.addEventListener('click',(event)=>{
    event.preventDefault()
    console.log(passwordInput.value)
if(passwordInput.type==='password'){
    passwordInput.type='number'
}
else{
    passwordInput.type='password'
}
})
SignInNav.addEventListener('click',()=>{

    alert('Hello')
    window.location.href='./signIn.html'
})

submitButton.addEventListener('click',()=>{
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
      user.dispalyName= fullName.value
    console.log(user.email)
    console.log(user.dispalyName)
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`Error Message ${errorMessage}`)
  });

})



}







else if(document.title==="Sign In"){
let applicationNav = document.getElementById('appNav')
let passwordInput=document.getElementById('inpPassword')
let eyeIcon= document.getElementById('eyeIcons')
eyeIcon.addEventListener('click',(event)=>{
    event.preventDefault()
    console.log(passwordInput.value)
if(passwordInput.type==='password'){
    passwordInput.type='number'
}
else{
    passwordInput.type='password'
}
})

applicationNav.addEventListener('click',()=>{
    alert("ji")
    window.location.href='./index.html'
})    

let submitButton = document.getElementById('submitBtn')
submitButton.addEventListener('click',()=>{
    window.location.href='./abc.html'
})
}