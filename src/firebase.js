import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA5mViAX40gtjx3MLsiyUTyGHdC_11GUBY",
    authDomain: "myflix-a04d0.firebaseapp.com",
    projectId: "myflix-a04d0",
    storageBucket: "myflix-a04d0.appspot.com",
    messagingSenderId: "673931415186",
    appId: "1:673931415186:web:911d4c570bf7597e4fe04b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;