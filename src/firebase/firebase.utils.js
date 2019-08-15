import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyAV8u5AvwAxU6d1GZSQkUHXe-PwIjHvPn4",
    authDomain: "crown-db-f8e8b.firebaseapp.com",
    databaseURL: "https://crown-db-f8e8b.firebaseio.com",
    projectId: "crown-db-f8e8b",
    storageBucket: "",
    messagingSenderId: "675507589133",
    appId: "1:675507589133:web:712e9381e41b0e80"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
