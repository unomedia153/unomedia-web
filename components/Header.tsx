"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  // 초기값: 검은색 텍스트로 시작 (스크롤 전까지 유지)
  const [isOnHero, setIsOnHero] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 발생했음을 표시
      if (!hasScrolled) {
        setHasScrolled(true);
      }
      
      // Hero 섹션 높이를 기준으로 스크롤 위치 확인 (85vh = 0.85)
      const heroHeight = window.innerHeight * 0.85;
      const scrollY = window.scrollY;
      
      // Hero 섹션 위에 있으면 true (흰색 텍스트), 벗어나면 false (검은색 텍스트)
      // 약간의 여유를 두기 위해 50px 정도 뺌
      setIsOnHero(scrollY < heroHeight - 50);
    };

    // 초기 상태 확인
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  // 스크롤 전에는 항상 검은색, 스크롤 후에는 Hero 섹션 위에 있으면 흰색, 아니면 검은색
  const headerClass = hasScrolled && isOnHero
    ? "bg-transparent text-white"
    : "bg-white/95 backdrop-blur-md text-black";

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 transition-colors duration-300 ${headerClass}`}
    >
      {/* 로고 영역 */}
      <div className="text-2xl font-bold tracking-tighter">
        <Link href="/">UNO MEDIA</Link>
      </div>

      {/* 메뉴 영역 */}
      <nav className="hidden md:flex gap-8 font-medium text-sm tracking-wide">
        <Link href="#" className="hover:underline underline-offset-4">WORK</Link>
        <Link href="#" className="hover:underline underline-offset-4">ABOUT</Link>
        <Link href="#" className="hover:underline underline-offset-4">NEWS</Link>
        <Link href="#" className="hover:underline underline-offset-4">CONTACT</Link>
      </nav>

      {/* 모바일용 햄버거 메뉴 아이콘 (모바일에서만 보임) */}
      <button className="md:hidden text-2xl">
        ≡
      </button>
    </header>
  );
}