// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-72bc4.firebaseapp.com",
  projectId: "mernestate-72bc4",
  storageBucket: "mernestate-72bc4.firebasestorage.app",
  messagingSenderId: "564300082313",
  appId: "1:564300082313:web:3508b76a40a8979322aa58"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);