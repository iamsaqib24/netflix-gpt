// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUnC8A6WT4z9mzkzMmVbBNNgoQhTSMfMQ",
  authDomain: "netflixgpt-914ca.firebaseapp.com",
  projectId: "netflixgpt-914ca",
  storageBucket: "netflixgpt-914ca.appspot.com",
  messagingSenderId: "145071882074",
  appId: "1:145071882074:web:4557617d4c4c4d72acbd63",
  measurementId: "G-SVJ25ZS9F6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
