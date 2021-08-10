import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAPtxnzq2PguxV0rDCL1F86LH7IPU7RmL0",
  authDomain: "crwn-clothing-115b5.firebaseapp.com",
  projectId: "crwn-clothing-115b5",
  storageBucket: "crwn-clothing-115b5.appspot.com",
  messagingSenderId: "608976779218",
  appId: "1:608976779218:web:f6cf08f63ad7b6edd33a0b",
  measurementId: "G-6ZYZL0Z8FH"
};

if(!firebase.apps.length)firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;