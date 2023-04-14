// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

const db = getFirestore(app);

const saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", async () => {
    const collectionRef = collection(db, "gadgets")
    const newGadget = await addDoc(collectionRef, {
        name: "Phone",
        os: "Android",
        version: "14"
    });
    console.log(`Created new Gadget: ${newGadget.id }`)
});

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const googleSignInBtn = document.querySelector('.google-sign-in');

googleSignInBtn.addEventListener('click', () => {
signInWithPopup(auth, provider).then((result) => {
  const user = result.user;
  alert(` Hello ${user.displayName}!`);
  window.location.href = "home.html";

}).catch((error) => {
  const errorMessage = error.message;
  alert(`Can't Login: ${errorMessage}`)
});

});






