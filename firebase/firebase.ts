// @ts-ignore
import { getReactNativePersistence, initializeAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export default app;
