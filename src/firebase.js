import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2DxswpvpXfBzgUDILAZgWNKxHt8lShac",
  authDomain: "react-hooks-blog-c2172.firebaseapp.com",
  projectId: "react-hooks-blog-c2172",
  storageBucket: "react-hooks-blog-c2172.appspot.com",
  messagingSenderId: "172776956427",
  appId: "1:172776956427:web:89a99d9e39408909251d0e"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
