import firebase from "firebase/compat/app";
import "firebase/compat/firestore";



let firebaseConfig = {
    apiKey: "____",
    authDomain: "____",
    projectId: "____",
    storageBucket: "____",
    messagingSenderId: "____",
    appId: "____"
};

if (!firebase.apps.length) {
    console.log(`conectando...${firebase.apps.length}`);
    firebase.initializeApp(firebaseConfig);
    console.log(`conectado: ${firebase.apps.length}`);
}

const db = firebase.firestore();
export { db };
