import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtEr4_12cMZ5JeUudFjX8aTvbx-uZCbko",
    authDomain: "pwala-3223e.firebaseapp.com",
    projectId: "pwala-3223e",
    storageBucket: "pwala-3223e.appspot.com",
    messagingSenderId: "177304586009",
    appId: "1:177304586009:web:21bddfdeceaf93aac72788"
  };

  const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);