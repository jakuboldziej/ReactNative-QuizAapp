import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCZXy_NiYMcmlqZ66GOj1dkPqzBdcdmVKA",
  authDomain: "reactnative-lb-rp-ko.firebaseapp.com",
  projectId: "reactnative-lb-rp-ko",
  storageBucket: "reactnative-lb-rp-ko.appspot.com",
  messagingSenderId: "95436805317",
  appId: "1:95436805317:web:124828f6851f6e49dc0cac",
  measurementId: "G-W0SDW22RXY"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
export const firebaseDb = getFirestore(firebaseApp);