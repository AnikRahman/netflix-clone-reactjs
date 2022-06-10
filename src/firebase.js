// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDgfurjze5uyi9qhCFE0hzX70GqymMPlQ",
  authDomain: "netflix-day.firebaseapp.com",
  projectId: "netflix-day",
  storageBucket: "netflix-day.appspot.com",
  messagingSenderId: "276892508001",
  appId: "1:276892508001:web:da12300e467d9543ddaf20",
  measurementId: "G-D36C3MZFDC"
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)