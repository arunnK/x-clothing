import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCBG-Dzh9o9BvHm5QVF2WoNKSUuhi_TGMU",
  authDomain: "x-shopping-db.firebaseapp.com",
  databaseURL: "https://x-shopping-db.firebaseio.com",
  projectId: "x-shopping-db",
  storageBucket: "",
  messagingSenderId: "982867491784",
  appId: "1:982867491784:web:a5f7add8a92e4a05"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
