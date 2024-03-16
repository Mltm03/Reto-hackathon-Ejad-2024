
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8pp5PwO94th2e3GbkO02fKSMPIMVwCqs",
  authDomain: "react-native-ejad.firebaseapp.com",
  projectId: "react-native-ejad",
  storageBucket: "react-native-ejad.appspot.com",
  messagingSenderId: "750983082863",
  appId: "1:750983082863:web:cf7fa3c7f9a977c6fcee9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app