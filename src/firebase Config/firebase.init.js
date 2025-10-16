// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPbT1J69esfJEPKzAg2w0bjN7eWIcbfls",
  authDomain: "roommate-web-app.firebaseapp.com",
  projectId: "roommate-web-app",
  storageBucket: "roommate-web-app.firebasestorage.app",
  messagingSenderId: "146565223079",
  appId: "1:146565223079:web:eb4b7b68df8a0835b58182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);