import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// You can find these informations when creating the firebase project
const firebaseConfig = {
  apiKey: 'YOUR API KEY',
  authDomain: 'YOUR AUTHDOMAIN',
  projectId: 'YOUR PROJECT ID',
  storageBucket: 'YOUR STORAGE BUCKET',
  messagingSenderId: 'YOUR MESSAGING SENDER ID',
  appId: 'YOUR APP ID',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
