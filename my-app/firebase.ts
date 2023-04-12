import {getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw_BwgyBNQRpxt1kpF0q35NbcXA_lhxEA",
  authDomain: "chatgpt-messenger-clone-76ede.firebaseapp.com",
  projectId: "chatgpt-messenger-clone-76ede",
  storageBucket: "chatgpt-messenger-clone-76ede.appspot.com",
  messagingSenderId: "153373999164",
  appId: "1:153373999164:web:59fc25986126bd56070339"
};

// Initialize Firebase
const app = getApps().length ? getApp(): initializeApp(firebaseConfig);
const db = getFirestore(app)

export{ db }