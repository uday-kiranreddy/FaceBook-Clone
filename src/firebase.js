import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyAjPN4PzvSXc4OJnpRcgPij6XTUHSlB2Ig",
  authDomain: "facebook-clone-7b9e1.firebaseapp.com",
  projectId: "facebook-clone-7b9e1",
  storageBucket: "facebook-clone-7b9e1.appspot.com",
  messagingSenderId: "534931914191",
  appId: "1:534931914191:web:5633c05a1ee5d499dee6ba",
  measurementId: "G-W41Q83294Z",
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;

