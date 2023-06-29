// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2s4MdJr5qgtzEL4qvyF8ns2b9dkWYHrQ",
  authDomain: "au-forum-2c475.firebaseapp.com",
  projectId: "au-forum-2c475",
  storageBucket: "au-forum-2c475.appspot.com",
  messagingSenderId: "445492411185",
  appId: "1:445492411185:web:96eb055cacadbb9c9e0e10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = firebase.auth();