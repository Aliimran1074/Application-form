 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 
 
 const firebaseConfig = {
   apiKey: "AIzaSyAbK7WnY8GwVe8H5LE4ftG002moGs6SLxg",
   authDomain: "practice-7d8a0.firebaseapp.com",
   projectId: "practice-7d8a0",
   storageBucket: "practice-7d8a0.appspot.com",
   messagingSenderId: "356961718767",
   appId: "1:356961718767:web:cdcc93e0c8f3401ecaa61a",
   measurementId: "G-SCM2FRJ30W"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 
 export {app}