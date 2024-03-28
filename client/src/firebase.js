// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6ec44.firebaseapp.com",
  projectId: "mern-blog-6ec44",
  storageBucket: "mern-blog-6ec44.appspot.com",
  messagingSenderId: "698267509331",
  appId: "1:698267509331:web:ee119fde99aefe44809ca6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);