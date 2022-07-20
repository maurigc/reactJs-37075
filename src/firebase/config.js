// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-eXTQrooY34G7DbZxcab6GSgdS99iyd4",
  authDomain: "comision-37075.firebaseapp.com",
  projectId: "comision-37075",
  storageBucket: "comision-37075.appspot.com",
  messagingSenderId: "66491931569",
  appId: "1:66491931569:web:5283c2392b7bebba377b90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
