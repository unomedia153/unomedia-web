"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Raleway, Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 페이지 이동 시 모바일 메뉴 자동으로 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // 모바일 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: "ABOUT", href: "/about" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "NEWS", href: "/news" },
    { name: "프로젝트 문의", href: "/contact" },
  ];

  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      y: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled && !isMenuOpen
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4 text-black"
            : "bg-transparent py-6 text-white"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative z-50">
          {/* 로고 영역 */}
          <div
            className={`flex items-center gap-2 font-bold text-2xl tracking-tighter cursor-pointer ${
              isMenuOpen ? "text-white" : ""
            }`}
            style={{ fontFamily: raleway.style.fontFamily }}
          >
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#030213' }}>
                U
              </div>
              <span>UNOMEDIA</span>
            </Link>
          </div>

          {/* 데스크탑 메뉴 영역 */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[1.1rem] font-medium transition-colors ${
                  isScrolled ? "text-gray-700 hover:text-[#030213]" : "text-white/90 hover:text-white"
                }`}
                style={{ fontFamily: poppins.style.fontFamily }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-4 px-6 py-2 rounded-full font-medium transition-all ${
                isScrolled
                  ? "text-white hover:opacity-90"
                  : "bg-white/20 text-white hover:bg-white/30 border border-white/30"
              }`}
              style={isScrolled ? { backgroundColor: '#030213' } : {}}
              style={{ fontFamily: poppins.style.fontFamily }}
            >
              프로젝트 문의
            </Link>
          </nav>

          {/* 모바일용 햄버거 메뉴 아이콘 */}
          <button
            className="md:hidden p-2 z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기/닫기"
          >
            {isMenuOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* 모바일 메뉴 오버레이 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-black z-40 flex flex-col pt-32 px-6 md:hidden h-screen text-right"
            >
              <div className="flex flex-col gap-2 items-end">
                {menuItems.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={itemVariants}
                    className="group block py-2"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-[2rem] font-bold text-white group-hover:text-[#030213] transition-colors"
                      style={{ fontFamily: poppins.style.fontFamily }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={itemVariants}
                  className="mt-12 space-y-2 text-gray-400 text-sm"
                >
                  <p>서울특별시 강남구</p>
                  <p>hello@unomedia.com</p>
                  <p>+82 10-1234-5678</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}