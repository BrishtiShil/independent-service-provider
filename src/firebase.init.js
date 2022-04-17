// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy-4ULnwRhlhCFeEYSsrrji2nJCI6gpi4",
    authDomain: "independent-service-prov-608ad.firebaseapp.com",
    projectId: "independent-service-prov-608ad",
    storageBucket: "independent-service-prov-608ad.appspot.com",
    messagingSenderId: "202109336503",
    appId: "1:202109336503:web:a2fe01fc2f517f7f0c8632"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;