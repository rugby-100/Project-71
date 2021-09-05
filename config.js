import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyBT96D68lMAaBVopSoH6VQ8S7ulysOh7Ds",
    authDomain: "project-71-e76a6.firebaseapp.com",
    projectId: "project-71-e76a6",
    storageBucket: "project-71-e76a6.appspot.com",
    messagingSenderId: "1011959253064",
    appId: "1:1011959253064:web:2a9788a62128cd73e7707d"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

