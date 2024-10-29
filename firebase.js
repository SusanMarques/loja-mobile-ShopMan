import firebase from "firebase/compat/app";
import "firebase/compat/firestore";



let firebaseConfig = {
    apiKey: "____",
    authDomain: "____",
    projectId: "_____",
    storageBucket: "____",
    messagingSenderId: "_____",
    appId: "_____"
};

if (!firebase.apps.length) {
    console.log(`conectando...${firebase.apps.length}`);
    firebase.initializeApp(firebaseConfig);
    console.log(`conectado: ${firebase.apps.length}`);
}

const db = firebase.firestore();
export { db };
