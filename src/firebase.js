// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAuLUuNGeHVaKlEcadgW_RgfWt3ksCbJKQ",
  authDomain: "leo-ai-1d189.firebaseapp.com",
  projectId: "leo-ai-1d189",
  storageBucket: "leo-ai-1d189.appspot.com",
  messagingSenderId: "101655708760",
  appId: "1:101655708760:web:2e401fde3da63cac36362d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
