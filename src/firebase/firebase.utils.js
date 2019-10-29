import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBP09plyXbZQSODHMXB-nAszAlQs9H3Or0",
    authDomain: "e-commerce-db-352a0.firebaseapp.com",
    databaseURL: "https://e-commerce-db-352a0.firebaseio.com",
    projectId: "e-commerce-db-352a0",
    storageBucket: "e-commerce-db-352a0.appspot.com",
    messagingSenderId: "819054402770",
    appId: "1:819054402770:web:70ee3ba990af2fbbb8210b",
    measurementId: "G-6HX0YXZ8GQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth}`);
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
        }catch (error){
            console.log('Error creating user', error.message)
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;