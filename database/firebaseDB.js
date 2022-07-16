import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCAy1fRvZd_h54N8XkG3w9phpcV5aOiqoQ",
    authDomain: "pcmob4-1706f.firebaseapp.com",
    projectId: "pcmob4-1706f",
    storageBucket: "pcmob4-1706f.appspot.com",
    messagingSenderId: "532949514341",
    appId: "1:532949514341:web:00ee183ddfb354fdeb2e8c",
    measurementId: "G-J4CP5JGEVM"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;