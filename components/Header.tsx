"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
  // 헤더 텍스트는 항상 검정색으로 고정
  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 bg-white/95 backdrop-blur-md text-black"
    >
      {/* 로고 영역 */}
      <div className="text-2xl font-bold tracking-tighter">
        <Link href="/">UNO MEDIA</Link>
      </div>

      {/* 메뉴 영역 */}
      <nav className="hidden md:flex gap-8 font-medium text-sm tracking-wide">
        <Link href="#" className="hover:underline underline-offset-4">ABOUT</Link>
        <Link href="#" className="hover:underline underline-offset-4">PORTFOLIO</Link>
        <Link href="#" className="hover:underline underline-offset-4">NEWS</Link>
        <Link href="#" className="hover:underline underline-offset-4">프로젝트 문의</Link>
      </nav>

      {/* 모바일용 햄버거 메뉴 아이콘 (모바일에서만 보임) */}
      <button className="md:hidden text-2xl">
        ≡
      </button>
    </header>
  );
}