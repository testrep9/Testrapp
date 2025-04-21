//firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Your Firebase config object
   const firebaseConfig = {
      apiKey: "AIzaSyDtCfsMkc_Z_9ZeF0TEHTDFBzLlkU-egSc",
      authDomain: "tradevanta-a3e0d.firebaseapp.com",
      projectId: "tradevanta-a3e0d",
      storageBucket: "tradevanta-a3e0d.appspot.com",
      messagingSenderId: "441098922985",
      appId: "1:441098922985:web:163878a0ef5b2054f8b978"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

