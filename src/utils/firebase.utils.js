// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF5yc2D1tKxxcDWh6W-hYL6Ee4_lc9t8k",
  authDomain: "new-binco-clothing.firebaseapp.com",
  projectId: "new-binco-clothing",
  storageBucket: "new-binco-clothing.appspot.com",
  messagingSenderId: "677437256624",
  appId: "1:677437256624:web:34b08ba1f5811405989c75",
  measurementId: "G-Y05SY3G6P2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
