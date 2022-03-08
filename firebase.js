import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYxEFl-1M2DZk4_sLzJ8rcu1qyeXp5HqE",
  authDomain: "gohi-74e1b.firebaseapp.com",
  projectId: "gohi-74e1b",
  storageBucket: "gohi-74e1b.appspot.com",
  messagingSenderId: "755359505567",
  appId: "1:755359505567:web:fd1dc5ea08bce2e1f1d6aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }   