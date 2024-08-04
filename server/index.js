import express from "express";
import { initializeApp } from "firebase/app";
import { firebaseConfig, portNumber } from "./utilities/constant.js";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import cors from "cors";

const app = express();

app.listen(portNumber, ()=>
{
    console.log(`Server is listening at port ${portNumber}`);
    console.log();
});
app.use(cors({ origin: ['http://localhost:5173','http://localhost:5174'] }));


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