// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmQa-SFcnOjhHxbCM0z649K_RuLcYZjoQ",
  authDomain: "ebacproject-fc0f1.firebaseapp.com",
  projectId: "ebacproject-fc0f1",
  storageBucket: "ebacproject-fc0f1.appspot.com",
  messagingSenderId: "110456926783",
  appId: "1:110456926783:web:4ff2725b1266e568f1fe8a",
  measurementId: "G-QXQ04ZXN4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);