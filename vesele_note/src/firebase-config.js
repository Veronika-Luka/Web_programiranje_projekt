import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBl1ZAy7U5zay3MYgXAQeZpMBhnu2WDvyU",
    authDomain: "vesele-note.firebaseapp.com",
    databaseURL: "https://vesele-note-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vesele-note",
    storageBucket: "vesele-note.appspot.com",
    messagingSenderId: "789157310350",
    appId: "1:789157310350:web:6f5d655078b46356da3edf",
    measurementId: "G-52VVC3C5NT"
  };

  const app=initializeApp(firebaseConfig);


  export const db=getFirestore(app);