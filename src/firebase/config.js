 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';

 // Your web app's Firebase configuration
 <script src="https://www.gstatic.com/firebasejs/7.22.0/firebase-app.js"></script>
 var firebaseConfig = {
  apiKey: "AIzaSyBXNsjo6oe9XY5TYQz7pOMDYYIebMBfM1w",
  authDomain: "firegram-delta.firebaseapp.com",
  databaseURL: "https://firegram-delta.firebaseio.com",
  projectId: "firegram-delta",
  storageBucket: "firegram-delta.appspot.com",
  messagingSenderId: "908444683757",
  appId: "1:908444683757:web:299d54e938a53d54c1abe4"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage  = firebase.storage();
  const projectFirestore = firebase.storage();

  export{ projectStorage, projectFirestore };