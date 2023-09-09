// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX9jbyQBWQDSVx48CHiar98IGXIfLB-WQ",
  authDomain: "contact-app-184b3.firebaseapp.com",
  projectId: "contact-app-184b3",
  storageBucket: "contact-app-184b3.appspot.com",
  messagingSenderId: "801902729451",
  appId: "1:801902729451:web:d38e5ba29b26da0b48c6ae",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
