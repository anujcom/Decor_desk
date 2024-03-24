// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE3sqV92YMaVyQ9U22JHe1NEwEJ58xbl4",
  authDomain: "myfirstweb-48289.firebaseapp.com",
  projectId: "myfirstweb-48289",
  storageBucket: "myfirstweb-48289.appspot.com",
  messagingSenderId: "53417435215",
  appId: "1:53417435215:web:e83683e28765d0a2640a3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB= getFirestore(app);
const auth= getAuth(app);

export{fireDB,auth}