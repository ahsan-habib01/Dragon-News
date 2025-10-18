// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvXZRYgw8Ko9xr5hRdpqmYL63i-sRw_Ps",
  authDomain: "dragon-news-breaking-a2687.firebaseapp.com",
  projectId: "dragon-news-breaking-a2687",
  storageBucket: "dragon-news-breaking-a2687.firebasestorage.app",
  messagingSenderId: "213437363229",
  appId: "1:213437363229:web:37e5c9d1ced36b563a42f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app