import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyABarww4SA5ZkaALM8jqZWoxo4tiiMoIxw",
  authDomain: "angular-host-c05fb.firebaseapp.com",
  databaseURL: "https://angular-host-c05fb-default-rtdb.firebaseio.com",
  projectId: "angular-host-c05fb",
  storageBucket: "angular-host-c05fb.firebasestorage.app",
  messagingSenderId: "732020516241",
  appId: "1:732020516241:web:eaf61d6400aa3bd3786630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();