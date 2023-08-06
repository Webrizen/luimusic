import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBmYP2wCEgPDdfyIou_7P1VgX7zJ-GHIMU",
    authDomain: "luimusic-88a1d.firebaseapp.com",
    projectId: "luimusic-88a1d",
    storageBucket: "luimusic-88a1d.appspot.com",
    messagingSenderId: "982640626570",
    appId: "1:982640626570:web:75d6d476da2df82cc99673",
    measurementId: "G-1HRHC6QS1D"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;