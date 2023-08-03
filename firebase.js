import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD_PPi40gNlm07h9gB68ECLrMVaKaWTtMk",
    authDomain: "whatsapp-c-48995.firebaseapp.com",
    projectId: "whatsapp-c-48995",
    storageBucket: "whatsapp-c-48995.appspot.com",
    messagingSenderId: "95608439253",
    appId: "1:95608439253:web:2969fa7dbbcb0dbcf87d5c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
