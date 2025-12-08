"use client"; // 랜덤 기능 때문에 클라이언트 컴포넌트 필수

import React, { useEffect, useState } from "react";
import FadeIn from "./FadeIn"; // 기존에 만든 애니메이션 도구 가져오기

// 사용할 배경 이미지 URL 목록 (고화질 무료 이미지 서비스 Unsplash 사용)
// 나중에 실제 회사 관련 이미지 URL로 교체하시면 됩니다.
const heroImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", // 회사/빌딩
  "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop", // 팀워크/회의
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", // 협업/개발
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // 도시/비즈니스
];

export default function Hero() {
  // 현재 선택된 배경 이미지를 저장할 상태 공간
  const [currentImage, setCurrentImage] = useState("");

  // 컴포넌트가 화면에 처음 나타날 때 딱 한 번 실행
  useEffect(() => {
    // 이미지 목록 중 하나를 랜덤으로 뽑기
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    setCurrentImage(heroImages[randomIndex]);
  }, []);

  return (
    // 히어로 섹션 전체 영역
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* 1. 배경 이미지 레이어 (랜덤 이미지 적용) */}
      {currentImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${currentImage})` }}
        />
      )}

      {/* 2. 어두운 오버레이 레이어 (글자 잘 보이게) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 3. 텍스트 컨텐츠 레이어 (애니메이션 적용) */}
      <div className="relative z-10 text-center px-6 md:px-20 max-w-5xl mx-auto text-white">
        {/* 순차적으로 떠오르는 애니메이션 적용 (delay 조절) */}
        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-gray-300 font-medium mb-6 tracking-wider uppercase">
            Digital Creative Agency
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter mb-8">
            We Build <br />
            Digital <span className="text-blue-400">Experience.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.7}>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            우노미디어는 웹과 앱의 경계를 허무는 통합 솔루션을 제공합니다.
            <br className="hidden md:block" /> 비즈니스의 성장을 돕는 가장
            확실한 파트너가 되어드리겠습니다.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}