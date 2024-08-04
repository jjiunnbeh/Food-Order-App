import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../utilities/constant.js";


export const getMenu = async (req, res) => {
    const appFirebase = initializeApp(firebaseConfig);
    const db = getFirestore(appFirebase);
    const menuCollection = collection(db, "menu");
    const menuSnapshot = await getDocs(menuCollection);
    const menuList = menuSnapshot.docs.map(doc => doc.data());
    res.status(200).json(menuList);
}
