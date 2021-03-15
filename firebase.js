import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA3F9DGcRWo-qmAwmDjBQJZR2UCMvmAZFw",
    authDomain: "facebook-clone-83ec2.firebaseapp.com",
    databaseURL: "https://facebook-clone-83ec2.firebaseio.com",
    projectId: "facebook-clone-83ec2",
    storageBucket: "facebook-clone-83ec2.appspot.com",
    messagingSenderId: "995091856928",
    appId: "1:995091856928:web:4888889d644bf24bc64645",
    measurementId: "G-V0HM9RH977"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

