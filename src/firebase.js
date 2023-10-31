import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6YdzlftwclNYZyONvHUb2z23eAK13rqc",
  authDomain: "portfolio-daf72.firebaseapp.com",
  projectId: "portfolio-daf72",
  storageBucket: "portfolio-daf72.appspot.com",
  messagingSenderId: "408248073001",
  appId: "1:408248073001:web:12b93bcbc7baec92f65538",
  measurementId: "G-91K25FZRN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);