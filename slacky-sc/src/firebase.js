import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDjiz0R-FIxkiM8sPHO9e_ojR8LIxOGHcA",
  authDomain: "slacky-sc.firebaseapp.com",
  databaseURL: "https://slacky-sc.firebaseio.com",
  projectId: "slacky-sc",
  storageBucket: "slacky-sc.appspot.com",
  messagingSenderId: "1041637110056",
  appId: "1:1041637110056:web:1feb0d674dd63dd965e01d",
  measurementId: "G-L1G4SS8R25"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =  firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default db;