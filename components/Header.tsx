"use client";

import React, { useEffect, useState } from "react";
import FadeIn from "./FadeIn";

// 랜덤 이미지 리스트
const heroImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    setCurrentImage(heroImages[randomIndex]);
  }, []);

  return (
    <div className="w-full">
      {/* 1. 상단: 꽉 찬 랜덤 이미지 영역 (텍스트 없음) */}
      <div className="relative h-screen w-full bg-gray-900">
        {currentImage && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
            style={{ backgroundImage: `url(${currentImage})` }}
          />
        )}
        {/* 아래로 스크롤 하라는 화살표 표시 (센스 있게 추가) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* 2. 하단: 스크롤 하면 나타나는 타이틀 영역 (흰 배경 + 검은 글씨) */}
      <div className="bg-white text-black py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* 작은 타이틀 */}
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-blue-600 font-bold mb-8 tracking-wider uppercase">
              Digital Creative Agency
            </p>
          </FadeIn>

          {/* 메인 타이틀 */}
          <FadeIn delay={0.4}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tighter mb-12">
              We Build <br />
              Digital <span className="text-gray-400">Experience.</span>
            </h1>
          </FadeIn>

          {/* 설명 문구 */}
          <FadeIn delay={0.6}>
            <div className="flex flex-col md:flex-row md:justify-end">
              <p className="text-xl md:text-2xl text-gray-800 max-w-2xl leading-relaxed font-medium">
                우노미디어는 웹과 앱의 경계를 허무는 통합 솔루션을 제공합니다.
                비즈니스의 성장을 돕는 가장 확실한 파트너가 되어드리겠습니다.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}