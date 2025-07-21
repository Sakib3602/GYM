// firebase.init.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.VITE_ID,
  storageBucket: import.meta.env.VITE_S, 
  messagingSenderId: import.meta.env.VITE_P,
  appId: import.meta.env.VITE_APP
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
