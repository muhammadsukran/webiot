import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAwUFRnf_tUHQ17h3KKOCOrfgr9yTBEvzA",
  authDomain: "iottongsampah.firebaseapp.com",
  databaseURL: "https://iottongsampah-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iottongsampah",
  storageBucket: "iottongsampah.firebasestorage.app",
  messagingSenderId: "942243252522",
  appId: "1:942243252522:web:9a5c402d3360ca2db7b653",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();