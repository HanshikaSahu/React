// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: " ",//notepad
  authDomain: "vite-contact-317d9.firebaseapp.com",
  projectId: "vite-contact-317d9",
  storageBucket: "vite-contact-317d9.firebasestorage.app",
  messagingSenderId: "71132042273",
  appId: "1:71132042273:web:65b0d2af39ca2fe0fb3f60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 