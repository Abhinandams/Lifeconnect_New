import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  fetchSignInMethodsForEmail
} from "firebase/auth";

// 🔹 Your Firebase configuration (Replace with your own)
const firebaseConfig = {
    apiKey: "AIzaSyCCxVixAu3yQovqSZCIPHBE9ilURji-ZN8",
    authDomain: "lifeconnectapp-d69ce.firebaseapp.com",
    projectId: "lifeconnectapp-d69ce",
    storageBucket: "lifeconnectapp-d69ce.firebasestorage.app",
    messagingSenderId: "707256815512",
    appId: "1:707256815512:web:580983722cb87dd7cca5ed",
    measurementId: "G-QTLTRTBD55"
  };

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

/**
 * 🛠 Sign Up Function
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>} User credentials or error
 */
export const signUp = async (email, password) => {
  try {
    // Check if email is already in use
    const methods = await fetchSignInMethodsForEmail(auth, email);
    if (methods.length > 0) {
      throw new Error("Email already in use. Please log in.");
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, message: "Account created successfully!" };
  } catch (error) {
    return { error: error.message };
  }
};

/**
 * 🔑 Sign In Function
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>} User credentials or error
 */
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, message: "Logged in successfully!" };
  } catch (error) {
    return { error: error.message };
  }
};
