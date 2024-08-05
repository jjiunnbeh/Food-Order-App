import express from "express";
import { initializeApp } from "firebase/app";
import { firebaseConfig, portNumber } from "./utilities/constant.js";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import cors from "cors";
import menuRouter from "./routes/menu.route.js";
import bodyParser from "body-parser";
import orderRouter from "./routes/order.routes.js"



const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

if (db != null) {
    console.log("Connected to Firebase Firestore");
} else {
    console.log("Failed to connect to Firebase Firestore");
}


const app = express();

app.use(cors({ origin: ['http://localhost:5173','http://localhost:5174'] }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/onlinemenu', menuRouter);
app.use('/api/onlineorders', orderRouter);

app.listen(portNumber, ()=>
  {
      console.log(`Server is listening at port ${portNumber}`);
      console.log();
  });