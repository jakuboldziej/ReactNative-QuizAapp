import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { firebaseApp, firebaseDb } from "../firebase"
import { getAuth, signOut } from "firebase/auth";
import routes from "./constants/routes";

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

export const formatTimer = (totalSeconds) => {
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  const formattedTime = [
    minutes.toString().padStart(2, '0'),
    secs.toString().padStart(2, '0'),
  ].join(':');

  return formattedTime;
};

// fetch
export const getUser = async (uid) => {
  const userDoc = await getDoc(doc(firebaseDb, "users", uid))
  return userDoc.data();
}

export const getQuestion = async (uid) => {
  const questionRef = doc(firebaseDb, "questions", uid);
  const question = await getDoc(questionRef);
  return question.data();
}

export const getCategoryByName = async (categoryName) => {
  let category;
  const cetagoryQ = query(collection(firebaseDb, "categories"), where("name", "==", categoryName));
  await getDocs(cetagoryQ).then((snapshot) => {
    snapshot.docs.map((doc) => {
      category = doc.data()
    });
  });
  return category;
}