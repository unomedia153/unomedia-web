"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Raleway } from "next/font/google";
import { usePathname } from "next/navigation";

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // 현재 경로 확인용

  // 페이지 이동 시 모바일 메뉴 자동으로 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ✅ 링크 수정 완료
  const menuItems = [
    { name: "ABOUT", href: "/about" },          // About 페이지 연결
    { name: "PORTFOLIO", href: "/portfolio" }, // 메인 페이지의 포트폴리오 섹션으로 이동
    { name: "NEWS", href: "news" },                // (추후 생성 예정)
    { name: "프로젝트 문의", href: "/contact" }, // Contact 페이지 또는 섹션
  ];

  return (
    <>
      <header 
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 bg-white/95 backdrop-blur-md text-black transition-all duration-300"
      >
        {/* 로고 영역 */}
        <div className="text-2xl font-bold tracking-tight relative z-50" style={{ fontFamily: raleway.style.fontFamily }}>
          <Link href="/" className="flex items-center gap-1 uppercase" onClick={() => setIsMenuOpen(false)}>
            {/* 메뉴가 열렸을 때는 로고 색상을 흰색으로 변경하여 가독성 확보 */}
            <span style={{ color: "#60A5FA" }}>UNO</span>
            <span className="transition-colors duration-300 text-black">
              MEDIA
            </span>
          </Link>
        </div>

        {/* 데스크탑 메뉴 영역 */}
        <nav className="hidden md:flex gap-8 font-medium text-sm tracking-wide">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="hover:text-blue-500 transition-colors hover:underline underline-offset-4"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* 모바일용 햄버거 메뉴 아이콘 */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-2xl z-50 relative transition-colors duration-300 text-black"
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
        <nav className="absolute top-0 right-0 h-full w-full flex flex-col items-end justify-start pt-32 pr-6 gap-8">
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-white text-3xl font-bold transition-all duration-300 hover:text-blue-400 ${
                isMenuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                fontFamily: raleway.style.fontFamily
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