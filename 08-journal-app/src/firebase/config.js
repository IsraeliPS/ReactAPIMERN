// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAU3xHzW2nxH2jTfEtBiW2T0HxJ-VPcheo',
  authDomain: 'react-journal-app-efaf2.firebaseapp.com',
  projectId: 'react-journal-app-efaf2',
  storageBucket: 'react-journal-app-efaf2.appspot.com',
  messagingSenderId: '780171152566',
  appId: '1:780171152566:web:5d05cec3d2c1ff22186a17',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
