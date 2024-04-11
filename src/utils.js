import { doc, getDoc } from "firebase/firestore"
import { firebaseApp, firebaseDb } from "../firebase"
import { getAuth, signOut } from "firebase/auth";
import routes from "./constants/routes";

export const getUser = async (uid) => {
  const userDoc = await getDoc(doc(firebaseDb, "users", uid))
  return userDoc.data();
}

export const handleSignOut = async (navigation) => {
  const auth = getAuth(firebaseApp);

  try {
    await signOut(auth);
    navigation.navigate(routes.Login);
  } catch (error) {
    console.log(error);
  }
}

export const updateCircles = (circles, color, buttonId) => {
  const circlesCopy = [...circles];
  circlesCopy.map((circle, index) => {
    if (buttonId === index) {
      return circlesCopy[index] = color;
    } else {
      return circle;
    }
  })
  return circlesCopy;
}