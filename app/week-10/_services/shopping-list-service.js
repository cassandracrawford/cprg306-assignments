import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const items = [];
    const itemsRef = collection(db, "users", userId, "items");
    const q = query(itemsRef);

    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data(),
            });
        });
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
    return items;
}

export async function addItem(userId, item) {
    try {
        console.log("Writing to path: users/", userId, "/items");
        const docRef = await addDoc(collection(db, "users", userId, "items"),
            item);
        return docRef.id;
    } catch (error) {
        console.log(`Error: ${error.message}`)
        return null;
    }
}