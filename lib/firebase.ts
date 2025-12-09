import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 방금 복사한 설정값을 아래에 덮어씌워 주세요
const firebaseConfig = {
    apiKey: "AIzaSyD2spPc8hLE9gI1Ne05YebfAV3SyfF7mKk",
    authDomain: "jobin-app-80dfd.firebaseapp.com",
    projectId: "jobin-app-80dfd",
    storageBucket: "jobin-app-80dfd.firebasestorage.app",
    messagingSenderId: "840648387775",
    appId: "1:840648387775:web:072634daa8aaee1d876a0a",
    measurementId: "G-ZYFL3KYZEK"
  };

// Firebase 초기화
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);