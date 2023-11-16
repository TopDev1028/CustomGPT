import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk3gSiTbAyO11nde9o-o-pua3WUqzoYZk",
  authDomain: "chadgpt-3e7f4.firebaseapp.com",
  projectId: "chadgpt-3e7f4",
  storageBucket: "chadgpt-3e7f4.appspot.com",
  messagingSenderId: "321991642871",
  appId: "1:321991642871:web:4d0f9380214d2881ff8df2",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
