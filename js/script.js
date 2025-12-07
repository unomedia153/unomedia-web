// 파이어베이스 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

// 🔴 여기에 본인의 파이어베이스 설정 코드를 붙여넣으세요 🔴
const firebaseConfig = {
    apiKey: "AIzaSyD2spPc8hLE9gI1Ne05YebfAV3SyfF7mKk",
    authDomain: "jobin-app-80dfd.firebaseapp.com",
    projectId: "jobin-app-80dfd",
    storageBucket: "jobin-app-80dfd.firebasestorage.app",
    messagingSenderId: "840648387775",
    appId: "1:840648387775:web:072634daa8aaee1d876a0a",
    measurementId: "G-ZYFL3KYZEK"
  };

// 파이어베이스 초기화 실행
const app = initializeApp(firebaseConfig);

// 콘솔 확인 메시지
console.log("파일 분리 성공! 파이어베이스 연결 완료:", app);