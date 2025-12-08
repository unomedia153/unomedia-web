"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "ABOUT", href: "#" },
    { name: "PORTFOLIO", href: "#" },
    { name: "NEWS", href: "#" },
    { name: "프로젝트 문의", href: "#" },
  ];

  return (
    <>
      <header 
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 bg-white/95 backdrop-blur-md text-black"
      >
        {/* 로고 영역 */}
        <div className="text-2xl font-bold tracking-tight" style={{ fontFamily: spaceGrotesk.style.fontFamily }}>
          <Link href="/" className="flex items-center gap-1 uppercase">
            <span style={{ color: "#60A5FA" }}>UNO</span>
            <span>MEDIA</span>
          </Link>
        </div>

        {/* 데스크탑 메뉴 영역 */}
        <nav className="hidden md:flex gap-8 font-medium text-sm tracking-wide">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:underline underline-offset-4">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* 모바일용 햄버거 메뉴 아이콘 */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-2xl z-50 relative"
          aria-label="메뉴 열기/닫기"
        >
          {isMenuOpen ? "✕" : "≡"}
        </button>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* 검은색 배경 */}
        <div className="absolute inset-0 bg-black" />
        
        {/* 메뉴 컨텐츠 (오른쪽 정렬) */}
        <nav className="absolute top-0 right-0 h-full w-full flex flex-col items-end justify-start pt-24 pr-6 gap-8">
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-white text-2xl font-medium transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}