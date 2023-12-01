import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, doc, query } from "firebase/firestore";

export async function getItems(userId) {
    const userRef = doc(db, 'users', userId);
    const itemsQuery = collection(userRef, 'items');
    const itemsSnapshot = await getDocs(itemsQuery);
    const items = itemsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return items;
  }

  export async function addItem(userId, item) {
    const userRef = doc(db, 'users', userId);
    const itemsRef = collection(userRef, 'items');
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  }