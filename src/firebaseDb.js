// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDm66pcQLoFkb01lLe2UfJYvJA0WijWVV4",
  authDomain: "quasar-c54dc.firebaseapp.com",
  projectId: "quasar-c54dc",
  storageBucket: "quasar-c54dc.firebasestorage.app",
  messagingSenderId: "372990228636",
  appId: "1:372990228636:web:ad7bd604ec55d408c81559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;
