// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcpjo7aYKjoL7OXJhpd3G2ZDj7WhebzEI",
    authDomain: "flixhive-web.firebaseapp.com",
    projectId: "flixhive-web",
    storageBucket: "flixhive-web.appspot.com",
    messagingSenderId: "744667235285",
    appId: "1:744667235285:web:8c3f818e76d559efd6735c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }