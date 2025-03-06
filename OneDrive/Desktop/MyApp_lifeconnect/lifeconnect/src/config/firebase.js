import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCxVixAu3yQovqSZCIPHBE9ilURji-ZN8",
  authDomain: "lifeconnectapp-d69ce.firebaseapp.com",
  projectId: "lifeconnectapp-d69ce",
  storageBucket: "lifeconnectapp-d69ce.firebasestorage.app",
  messagingSenderId: "707256815512",
  appId: "1:707256815512:web:580983722cb87dd7cca5ed",
  measurementId: "G-QTLTRTBD55"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
