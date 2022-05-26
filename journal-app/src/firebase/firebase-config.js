import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC6W7APGX6_JYBCcRfniB75QaeRlPsKptY',
  authDomain: 'react-app-cursos-57bca.firebaseapp.com',
  projectId: 'react-app-cursos-57bca',
  storageBucket: 'react-app-cursos-57bca.appspot.com',
  messagingSenderId: '514229966092',
  appId: '1:514229966092:web:ad8b4534c12042d187e529'
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
  db,
  googleAuthProvider,
  firebase
}
