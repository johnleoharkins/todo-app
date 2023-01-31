import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// config & init firebase // https://dev.to/farazamiruddin/react-firebase-add-firebase-to-a-react-app-4nc9
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkb5Ezh-a4IFY_jvMm5bzUFySbMWDWYAk",
    authDomain: "woodland-ddbc2.firebaseapp.com",
    projectId: "woodland-ddbc2",
    storageBucket: "woodland-ddbc2.appspot.com",
    messagingSenderId: "659101729645",
    appId: "1:659101729645:web:a69cfc766128eae5749064",
    measurementId: "G-P5XK58CH7M"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
console.log("firebase app init", firebaseApp.options)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
