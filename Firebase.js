// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtCx-JWCBPTFPwKEPfeyyH-Ii1nsvx75k",
  authDomain: "login-project-8a587.firebaseapp.com",
  projectId: "login-project-8a587",
  storageBucket: "login-project-8a587.firebasestorage.app",
  messagingSenderId: "309830927728",
  appId: "1:309830927728:web:72e8990480a811b5783bb5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
