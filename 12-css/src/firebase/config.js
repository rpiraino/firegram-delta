import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // Your web app's Firebase configuration - Use the config settings from your firebase project
  var firebaseConfig = {
    apiKey: "********************",
    authDomain: "*******************",
    databaseURL: "*******************",
    projectId: "********************",
    storageBucket: "******************",
    messagingSenderId: "*****************",
    appId: "*************************"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore, timestamp };

 
