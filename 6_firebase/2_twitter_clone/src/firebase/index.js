// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCtwXnRukLOUbRvR43EHsjcw_Jn4HSej8",
  authDomain: "hi-twitter-5a7b4.firebaseapp.com",
  projectId: "hi-twitter-5a7b4",
  storageBucket: "hi-twitter-5a7b4.firebasestorage.app",
  messagingSenderId: "439128539464",
  appId: "1:439128539464:web:0fe3752d1d97259e50b37d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const storage = getStorage(app);
