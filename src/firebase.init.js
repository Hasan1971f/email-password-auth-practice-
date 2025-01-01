// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxV4CON_c1ev2AlngXstNedIM0rnTfe-c",
  authDomain: "email-password-auth-prac-60ac3.firebaseapp.com",
  projectId: "email-password-auth-prac-60ac3",
  storageBucket: "email-password-auth-prac-60ac3.firebasestorage.app",
  messagingSenderId: "166315350586",
  appId: "1:166315350586:web:e2f282ee21dcd8345c3303"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);