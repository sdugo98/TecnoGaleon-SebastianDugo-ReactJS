import {initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDajRKBLTQ1HFnemybZ7KZAIcgooKw_SsM",
  authDomain: "ecommerce-tecnogaleon.firebaseapp.com",
  projectId: "ecommerce-tecnogaleon",
  storageBucket: "ecommerce-tecnogaleon.appspot.com",
  messagingSenderId: "547340086843",
  appId: "1:547340086843:web:a15a5179793762278ef61e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);