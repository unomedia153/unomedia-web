import React from "react";
import Link from "next/link";

export default function Header() {
  // 여기에 메뉴 이름을 수정하면 사이트에 바로 반영됩니다.
  const menuItems = [
    { name: "상공회의소 소개", href: "/" },
    { name: "주요사업", href: "/" },
    { name: "회원서비스", href: "/" },
    { name: "새소식", href: "/" },
    { name: "고객센터", href: "/" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 1. 로고 영역 */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              SANGGONG
            </Link>
          </div>

          {/* 2. 중앙 메뉴 영역 (데스크탑) */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* 3. 우측 버튼 영역 (로그인/가입 등) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-900 text-sm font-medium">
              로그인
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              회원가입
            </button>
          </div>

          {/* 모바일 메뉴 버튼 (모양만 잡음) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-500 hover:text-gray-900 p-2">
              <span className="sr-only">메뉴 열기</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}