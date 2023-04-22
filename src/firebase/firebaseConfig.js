// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZmnd-FnKeMiTcucf8V5gkHqIgHYDY5dY",
  authDomain: "micine-react-coderhouse.firebaseapp.com",
  projectId: "micine-react-coderhouse",
  storageBucket: "micine-react-coderhouse.appspot.com",
  messagingSenderId: "524268453391",
  appId: "1:524268453391:web:b362fd46abcc29f30e2d7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);