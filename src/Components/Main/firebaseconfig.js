// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM5OkShDVsERdWOlyWtXHC1e56m-Y5t9c",
  authDomain: "learnbridge-6f2b3.firebaseapp.com",
  projectId: "learnbridge-6f2b3",
  storageBucket: "learnbridge-6f2b3.firebasestorage.app",
  messagingSenderId: "487741367587",
  appId: "1:487741367587:web:5d45b26e01f57575049896"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);