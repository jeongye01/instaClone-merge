import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/database";
import { getAuth, signInWithPopup, FacebookAuthProvider,onAuthStateChanged  } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB8UK9QawjhSv0g6QXo3ub4v9-JlvZJOo",
  authDomain: "instagram-aaebd.firebaseapp.com",
  projectId: "instagram-aaebd",
  storageBucket: "instagram-aaebd.appspot.com",
  messagingSenderId: "550058042860",
  appId: "1:550058042860:web:db3bb461cef82f5f12ccc9",
  measurementId: "G-F1B55Y0F4L",
  databaseURL: "https://instagram-aaebd-default-rtdb.asia-southeast1.firebasedatabase.app"
};



firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();
export const faceBookLogin = async () => {
  const provider = new FacebookAuthProvider();
  const auth = getAuth();
  try {
    const result = await signInWithPopup(auth, provider);
    const { user } = result;
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;
  } catch (error) {
    console.log(error);
  }
}
export const storageService = firebase.storage();
export const databaseService = firebase.database();
export default firebase



// apiKey: process.env.REACT_APP_apiKey,
// authDomain:process.env.REACT_APP_authDomain,
// projectId:process.env.REACT_APP_projectId,
// storageBucket:process.env.REACT_APP_storageBucket ,
// messagingSenderId:process.env.REACT_APP_messagingSenderId ,
// appId:process.env.REACT_APP_appId,
// measurementId: process.env.REACT_APP_measurementId