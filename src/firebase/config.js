// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getEnvironments } from "../helpers/getEnvironments";
import { get } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEnvironments().VITE_FIREBASE_API_KEY,
  authDomain: getEnvironments().VITE_FIREBASE_AUTH_DOMAIN,
  projectId: getEnvironments().VITE_FIREBASE_PROJECT_ID,
  storageBucket: getEnvironments().VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: getEnvironments().VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: getEnvironments().VITE_FIREBASE_APP_ID
};

// Initialize Firebase
export const firebaseApp  = initializeApp(firebaseConfig);

export const fireBaseAuth = getAuth(firebaseApp);

export const fireBaseDB = getFirestore(firebaseApp)