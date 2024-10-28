import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Certifique-se de carregar as variáveis do .env, caso esteja usando dotenv
// Caso o framework já suporte variáveis de ambiente, este passo não é necessário
import dotenv from "dotenv";
dotenv.config();

let firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

if (!firebase.apps.length) {
    console.log(`conectando...${firebase.apps.length}`);
    firebase.initializeApp(firebaseConfig);
    console.log(`conectado: ${firebase.apps.length}`);
}

const db = firebase.firestore();
export { db };
