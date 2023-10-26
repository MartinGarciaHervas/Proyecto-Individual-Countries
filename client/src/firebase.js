// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCen4VDtxlX4w4h1t_GyyiNtROFpusSxec",
  authDomain: "prueba-744a0.firebaseapp.com",
  projectId: "prueba-744a0",
  storageBucket: "prueba-744a0.appspot.com",
  messagingSenderId: "210355697365",
  appId: "1:210355697365:web:5d3e3eca8b97830db9145c",
  measurementId: "G-E4XE81KNKW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)