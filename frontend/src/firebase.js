// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "epicestate-d6331.firebaseapp.com",
  projectId: "epicestate-d6331",
  storageBucket: "epicestate-d6331.appspot.com",
  messagingSenderId: "642826023419",
  appId: "1:642826023419:web:9958aeb53d18d42032db5e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);