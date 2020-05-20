import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCvADPDa1kH9BkyhqaYu7PExEbO8QWHP5c",
    authDomain: "casthrd-clothing.firebaseapp.com",
    databaseURL: "https://casthrd-clothing.firebaseio.com",
    projectId: "casthrd-clothing",
    storageBucket: "casthrd-clothing.appspot.com",
    messagingSenderId: "34183217966",
    appId: "1:34183217966:web:534588c7fd151f05aa30bf",
    measurementId: "G-MYNXYQTQKD" 
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
