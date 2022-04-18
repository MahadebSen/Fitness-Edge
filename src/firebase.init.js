// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi6n8zZl7-HJrq-owNBG4CUcMDNQXZ_Ss",
  authDomain: "fitness-edge-4e65f.firebaseapp.com",
  projectId: "fitness-edge-4e65f",
  storageBucket: "fitness-edge-4e65f.appspot.com",
  messagingSenderId: "127367711197",
  appId: "1:127367711197:web:93300ef92d0e15bf168e34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
