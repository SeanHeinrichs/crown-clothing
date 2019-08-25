import firebase from 'firebase/app';
import * as apiKey from './apiKey';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: apiKey.apiKey,
    authDomain: apiKey.authDomain,
    databaseURL: apiKey.databaseURL,
    projectId: apiKey.projectId,
    storageBucket: apiKey.storageBucket,
    messagingSenderId: apiKey.messagingSenderId,
    appId: apiKey.appId
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    // Check to see if the user exists, if not return
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData 
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}; 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
