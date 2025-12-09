"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 브랜드 */}
          <div>
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                U
              </div>
              <span>UNOMEDIA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              웹과 앱의 경계를 허무는 통합 솔루션을 제공합니다.
              <br />
              비즈니스의 성장을 돕는 가장 확실한 파트너가 되어드리겠습니다.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={18} />} href="#" />
              <SocialIcon icon={<Twitter size={18} />} href="#" />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="font-bold text-lg mb-4">빠른 링크</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <FooterLink href="/about">회사 소개</FooterLink>
              <FooterLink href="/portfolio">포트폴리오</FooterLink>
              <FooterLink href="/news">뉴스</FooterLink>
              <FooterLink href="/logo">로고</FooterLink>
              <FooterLink href="/contact">문의하기</FooterLink>
            </ul>
          </div>

          {/* 서비스 */}
          <div>
            <h3 className="font-bold text-lg mb-4">서비스</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <FooterLink href="/portfolio">웹 개발</FooterLink>
              <FooterLink href="/portfolio">모바일 앱</FooterLink>
              <FooterLink href="/portfolio">UI/UX 디자인</FooterLink>
              <FooterLink href="/portfolio">디지털 마케팅</FooterLink>
              <FooterLink href="/contact">컨설팅</FooterLink>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="font-bold text-lg mb-4">연락처</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={16} />
                <span>서울특별시 강남구 테헤란로</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={16} />
                <span>+82 10-1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={16} />
                <span>hello@unomedia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} UNOMEDIA. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              개인정보처리방침
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
      aria-label="소셜 미디어 링크"
    >
      {icon}
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:text-white transition-colors block">
        {children}
      </Link>
    </li>
  );
}

