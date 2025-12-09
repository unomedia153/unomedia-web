"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase"; 
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // 로그인 성공 시 메인으로 이동
      router.push("/"); 
    } catch (err: any) {
      console.error(err);
      setError("로그인 실패: 이메일과 비밀번호를 확인해주세요.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">ADMIN LOGIN</h1>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          
          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition-colors"
          >
            Log In
          </button>
        </form>
      </div>
    </main>
  );
}