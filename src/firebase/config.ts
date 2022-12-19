// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOvY96Sg_sLeuK7Rn9Uq3nuBw-I9XyNEE",
  authDomain: "porfolio-c0197.firebaseapp.com",
  projectId: "porfolio-c0197",
  storageBucket: "porfolio-c0197.appspot.com",
  messagingSenderId: "876708179053",
  appId: "1:876708179053:web:c829b3431da746760a2364",
  measurementId: "G-KNDM8Q781S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
