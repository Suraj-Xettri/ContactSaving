// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuBPtlWjlVULx__Srvb9HsKpkh7VEmMq4",
  authDomain: "contact-ec040.firebaseapp.com",
  projectId: "contact-ec040",
  storageBucket: "contact-ec040.appspot.com",
  messagingSenderId: "15812221439",
  appId: "1:15812221439:web:ec713d7e7a2f7d44ff2fca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)