// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMo3_4yLIgN1bOHj3DCBjiLV8X7tmRiY8",
  authDomain: "netflixgpt-47a13.firebaseapp.com",
  projectId: "netflixgpt-47a13",
  storageBucket: "netflixgpt-47a13.appspot.com",
  messagingSenderId: "428508635679",
  appId: "1:428508635679:web:63561275e156d1931f6b2a",
  measurementId: "G-4W5R28QP2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); 