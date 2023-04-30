// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgcNdax5aV8EVk9hhpSeqyk0100brXrFM",
  authDomain: "oguisadam-lab.firebaseapp.com",
  projectId: "oguisadam-lab",
  storageBucket: "oguisadam-lab.appspot.com",
  messagingSenderId: "47320592417",
  appId: "1:47320592417:web:1e871ea30b701c29e03360",
  measurementId: "G-N8QV73QPNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)
