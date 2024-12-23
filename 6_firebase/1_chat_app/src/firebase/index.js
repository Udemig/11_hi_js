// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//! import
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy7Bu9rOOPoXWGo7FWyqgGNiFW7SxXwEw",
  authDomain: "hi-chat-8021f.firebaseapp.com",
  projectId: "hi-chat-8021f",
  storageBucket: "hi-chat-8021f.firebasestorage.app",
  messagingSenderId: "896216446948",
  appId: "1:896216446948:web:b94e460ecd931e2aef79f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! authentication referansını frontende alma (kurulum)
export const auth = getAuth(app);

//! google sağlayıcısının kurulum
export const provider = new GoogleAuthProvider();

//! veritbanının referansını al (kurulum)
export const db = getFirestore(app);
