import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCRlQl_cY8o5Yz2PjXcG06zGtrdQc5F-qk",
    authDomain: "desafio11-react.firebaseapp.com",
    projectId: "desafio11-react",
    storageBucket: "desafio11-react.appspot.com",
    messagingSenderId: "1083197989387",
    appId: "1:1083197989387:web:8082821dc9c1364cd89d0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

