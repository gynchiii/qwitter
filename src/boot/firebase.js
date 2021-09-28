import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBOiHP0K0M277_vbT7CpTrnl65YxQ43wPc",
  authDomain: "qwitter-project-7bf5c.firebaseapp.com",
  projectId: "qwitter-project-7bf5c",
  storageBucket: "qwitter-project-7bf5c.appspot.com",
  messagingSenderId: "234127016606",
  appId: "1:234127016606:web:d2088eafe45e709feef18f",
  measurementId: "G-E6DHMZJ8QB"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.firestore()

export { firebaseAuth, firebaseDb }