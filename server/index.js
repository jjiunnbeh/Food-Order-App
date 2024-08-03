import express from "express";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const portNumber = 3000;
app.listen(portNumber, ()=>
{
    console.log(`Server is listening at port ${portNumber}`);
    console.log();
});

const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID
  };


const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

if (db != null) {
    console.log("Connected to Firebase Firestore");
} else {
    console.log("Failed to connect to Firebase Firestore");
}

try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

const querySnapshot = await getDocs(collection(db, "testing"));
querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
});