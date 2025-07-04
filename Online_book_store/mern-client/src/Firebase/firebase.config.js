// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGucTrZX2mZmgKx0sf0v8T7BnP_GWOmEM",
  authDomain: "mern-book-inventory-82dad.firebaseapp.com",
  projectId: "mern-book-inventory-82dad",
  storageBucket: "mern-book-inventory-82dad.appspot.com",
  messagingSenderId: "23839496401",
  appId: "1:23839496401:web:34a46c39cefc2f28318df0",
  measurementId: "G-W9KKF1WRSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;