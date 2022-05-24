import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAycOQtUu3oIAn_L80xxHAoUgnGayXU2-0",
    authDomain: "linkedin-snu.firebaseapp.com",
    projectId: "linkedin-snu",
    storageBucket: "linkedin-snu.appspot.com",
    messagingSenderId: "502139238512",
    appId: "1:502139238512:web:a63c2e48b5136e2223dcb5"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};