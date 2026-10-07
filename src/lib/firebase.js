import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFRtEbH1ZO6inBUsYH5ZqgFH-la6SH3tQ",
  authDomain: "suraj-communication-2026.firebaseapp.com",
  projectId: "suraj-communication-2026",
  storageBucket: "suraj-communication-2026.firebasestorage.app",
  messagingSenderId: "966708813834",
  appId: "1:966708813834:web:7ea66aaf84d99c68707ff3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);