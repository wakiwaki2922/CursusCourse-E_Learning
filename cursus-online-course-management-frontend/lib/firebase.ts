import { env } from "process";
import { initializeApp } from 'firebase/app';
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDBiu_1vdIE9zcyqj7jb8Z6dRwnMEBCxic",
    authDomain: "cursuscourse.firebaseapp.com",
    projectId: "cursuscourse",
    storageBucket: "cursuscourse.appspot.com",
    messagingSenderId: "44709142786",
    appId: "1:44709142786:web:030daffdef6abfa5b2e21b",
    measurementId: "G-D45X739FK6"
}

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account "
});
export const auth = getAuth(app);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const getGoogleRedirectResult = () => getRedirectResult(auth);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signOutUser = () => signOut(auth);