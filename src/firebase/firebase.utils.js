import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDW-4iQfY3v93QVCGrEh4SorKW0ZpXrgM0',
  authDomain: 'clothing-ecommerce-3a119.firebaseapp.com',
  databaseURL: 'https://clothing-ecommerce-3a119.firebaseio.com',
  projectId: 'clothing-ecommerce-3a119',
  storageBucket: '',
  messagingSenderId: '687611855702',
  appId: '1:687611855702:web:364c97bb3b7f80c5'
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


