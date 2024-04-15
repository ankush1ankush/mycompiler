// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDINvwMJuyv44gkTvOIwlvadTuNjYxQ0qE",
  authDomain: "mycompiler-ddc66.firebaseapp.com",
  projectId: "mycompiler-ddc66",
  storageBucket: "mycompiler-ddc66.appspot.com",
  messagingSenderId: "333939260039",
  appId: "1:333939260039:web:c65c8d0781cc240dc51622",
  measurementId: "G-MPM312GK6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);