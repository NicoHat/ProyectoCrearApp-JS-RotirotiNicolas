import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqZmCaUhKHAO7RTjx2fpjg3v6llOuKsK0",
  authDomain: "react-firebase-rotirotinicolas.firebaseapp.com",
  projectId: "react-firebase-rotirotinicolas",
  storageBucket: "react-firebase-rotirotinicolas.appspot.com",
  messagingSenderId: "490693649227",
  appId: "1:490693649227:web:887fab91780049511f3ece"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;