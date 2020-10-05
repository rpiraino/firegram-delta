 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCoDbhoXjLQ-ewPTN7hEQ6HDa4RIlKyQuw",
    authDomain: "firegram-f6c30.firebaseapp.com",
    databaseURL: "https://firegram-f6c30.firebaseio.com",
    projectId: "firegram-f6c30",
    storageBucket: "firegram-f6c30.appspot.com",
    messagingSenderId: "175320974219",
    appId: "1:175320974219:web:9d12292391259f3b26a58e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage  = firebase.storage();
  const projectFirestore = firebase.storage();

  export{ projectStorage, projectFirestore };