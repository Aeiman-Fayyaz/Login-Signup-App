// Import the functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3iTyouxoUiqWWH9Corp-_00ZZzvaqXu0",
  authDomain: "authentication-app-cdb89.firebaseapp.com",
  projectId: "authentication-app-cdb89",
  storageBucket: "authentication-app-cdb89.firebasestorage.app",
  messagingSenderId: "297117034969",
  appId: "1:297117034969:web:cf4f3a5334a672fb6a51c8",
  measurementId: "G-KX3EH9B1XJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
