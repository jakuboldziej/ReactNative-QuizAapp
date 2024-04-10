import { doc, getDoc } from "firebase/firestore"
import { firebaseDb } from "../firebase"

export const getUser = async (uid) => {
  const userDoc = await getDoc(doc(firebaseDb, "users", uid))
  return userDoc.data();
}