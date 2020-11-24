import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDB8mhaHBS7rLPZKuNZSM1xmqZ1iMI74gc",
    authDomain: "net-joselo-marioplan.firebaseapp.com",
    databaseURL: "https://net-joselo-marioplan.firebaseio.com",
    projectId: "net-joselo-marioplan",
    storageBucket: "net-joselo-marioplan.appspot.com",
    messagingSenderId: "175845129419",
    appId: "1:175845129419:web:8ff949f3bb947ef4c8af4e",
    measurementId: "G-YEFJ148VM5"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampInSnapshots: true});

  export default firebase;