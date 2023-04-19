// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRsMN9ZB6YkeDR5zs7d4JGcnovs9rshXk",
  authDomain: "eventclick-dfd0c.firebaseapp.com",
  projectId: "eventclick-dfd0c",
  storageBucket: "eventclick-dfd0c.appspot.com",
  messagingSenderId: "60349164904",
  appId: "1:60349164904:web:7fc0f248ae00762413fadd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
