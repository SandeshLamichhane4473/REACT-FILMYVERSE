// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyCGtjzuqXL4EgR8YzawUryPKDlzh07lTok",
    authDomain: "filmyverse-a919d.firebaseapp.com",
    projectId: "filmyverse-a919d",
    storageBucket: "filmyverse-a919d.appspot.com",
    messagingSenderId: "578967068102",
    appId: "1:578967068102:web:17ec13657b7fefa86166c7",
    measurementId: "G-2T1EZYTWLM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const moviesRef = collection(db, "movies");
export const ReviewsRef = collection(db, "reviews");
export const UsersRef = collection(db, "users");

const analytics = getAnalytics(app);