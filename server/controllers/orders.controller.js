import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../utilities/constant.js";

export const addOrder = async (req, res) => {
  try {
    const {items, customer} = req.body;
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const ordersCollection = collection(db, "orders");
    const newOrder = {
      items: items,
      customer: customer,
      createdAt: new Date(),
    };
    const docRef = await addDoc(ordersCollection, newOrder);
    console.log(`${docRef.id} added`);
    res.status(201).json({message:"Added sucessfully", orderId:docRef.id})
  } catch (error) {
    console.error("Error adding order to Firebase:", error);
  }
};
