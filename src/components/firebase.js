// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfL66RF9hpaOO7YwTcC9m1YngdsMi0gp0",
  authDomain: "authentication-amex.firebaseapp.com",
  projectId: "authentication-amex",
  storageBucket: "authentication-amex.appspot.com",
  messagingSenderId: "974162168673",
  appId: "1:974162168673:web:9d803bb33eb25afa59d320"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db = getFirestore(app)
export default app;