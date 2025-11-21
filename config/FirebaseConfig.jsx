// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from "firebase/auth";
import { Platform } from "react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: "ai-diet-planner-fa1a2.firebaseapp.com",
    projectId: "ai-diet-planner-fa1a2",
    storageBucket: "ai-diet-planner-fa1a2.firebasestorage.app",
    messagingSenderId: "48522563214",
    appId: "1:48522563214:web:ece8631db52b3b784203df",
    measurementId: "G-9014Y5E7BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = Platform.OS == 'web' ? getAuth(app) : initializeAuth(app, {
    persistance: getReactNativePersistence(ReactNativeAsyncStorage)
});