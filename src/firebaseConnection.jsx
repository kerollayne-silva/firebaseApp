import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCyq84NirN2Cxfp5vLu-bRaQFaWfCUpHq8",
  authDomain: "curso-c2cc1.firebaseapp.com",
  projectId: "curso-c2cc1",
  storageBucket: "curso-c2cc1.firebasestorage.app",
  messagingSenderId: "75462288291",
  appId: "1:75462288291:web:9cb826c9d110267f577016",
  measurementId: "G-LCZ7LT037N"
};

const firebaseapp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export { db, auth };