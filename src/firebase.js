
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from 'firebase/auth';
// import 'firebase/firestore';
// import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA5mViAX40gtjx3MLsiyUTyGHdC_11GUBY",
    authDomain: "myflix-a04d0.firebaseapp.com",
    projectId: "myflix-a04d0",
    storageBucket: "myflix-a04d0.appspot.com",
    messagingSenderId: "673931415186",
    appId: "1:673931415186:web:911d4c570bf7597e4fe04b"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth };
// export default db;

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// export const firestore = firebase.firestore();

// export const createUserDocument = async (user, additionalData) => {
//     if (!user) return;

//     const userRef = firestore.doc(`users/${user.uid}`);

//     const snapshot = await userRef.get();

//     if (!snapshot.exists) {
//         const { email } = user;
//         const { displayName } = additionalData;
//     }
// }

// try {
//     const docRef = await addDoc(collection(db, "users"), {
//         first: "Ada",
//         last: "Lovelace",
//         born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//     console.error("Error adding document: ", e);
// }

export default app;