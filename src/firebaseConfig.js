import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA4y-7HsycFt8x9aEvF8Ml0wSzc9Mxehus",
    authDomain: "techx-48c9d.firebaseapp.com",
    projectId: "techx-48c9d",
    storageBucket: "techx-48c9d.appspot.com",
    messagingSenderId: "345860801548",
    appId: "1:345860801548:web:210b6612e39451f7aa9a29"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
