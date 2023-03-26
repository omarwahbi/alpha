// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqSGtTUcaNJyIw9bD4gFd9aAv53ysF60Y",
  authDomain: "alpha-ac315.firebaseapp.com",
  projectId: "alpha-ac315",
  storageBucket: "alpha-ac315.appspot.com",
  messagingSenderId: "101679415517",
  appId: "1:101679415517:web:cbdf01156e3b4a83a3db34",
  measurementId: "G-8CLLXQ0GZN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
