import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


// Your web app's Firebase configuration firebaseConfig goes here
// Copy the firebaseConfig object from your Firebase project settings
// const firebaseConfig = { ...... }

const firebaseConfig = {
  apiKey: "AIzaSyD5Du1ZWE5ZPcn4L79yPguI9B2d4fmkAMs",
  authDomain: "userinfo-42a4e.firebaseapp.com",
  projectId: "userinfo-42a4e",
  storageBucket: "userinfo-42a4e.firebasestorage.app",
  messagingSenderId: "339519655224",
  appId: "1:339519655224:web:3a58f5a6903b22d8be85cd",
  measurementId: "G-JTEE1WNTDV"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
  
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
