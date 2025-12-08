"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 이미지 스케일: 스크롤에 따라 1에서 1.2로 확대
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // 텍스트 위치: 스크롤에 따라 아래에서 위로 이동
  const textY = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 1, 1]);

  return (
    <div className="min-h-screen bg-white">
      {/* 타이틀 섹션 */}
      <section className="pt-24 pb-8 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold">About Us</h1>
        </div>
      </section>

      {/* 이미지와 텍스트 인터랙션 섹션 */}
      <section ref={containerRef} className="relative px-6 md:px-20 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* 이미지 컨테이너 */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-20">
            <motion.div
              style={{ scale: imageScale }}
              className="w-full h-full bg-gray-200"
            >
              {/* 이미지 영역 - 나중에 실제 이미지로 교체 */}
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-xl">
                Image Area
              </div>
            </motion.div>

            {/* 텍스트 오버레이 */}
            <motion.div
              style={{ 
                y: textY,
                opacity: textOpacity
              }}
              className="absolute bottom-0 left-0 right-0 px-6 md:px-12 py-8 md:py-12"
            >
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg">
                  <div className="space-y-6 text-lg leading-relaxed text-gray-800">
                    <p>
                      우노미디어는 웹과 앱의 경계를 허무는 통합 솔루션을 제공하는 디지털 크리에이티브 에이전시입니다.
                    </p>
                    <p>
                      우리는 단순한 디자인과 개발을 넘어, 비즈니스의 성장을 돕는 전략적 파트너로서 고객과 함께합니다.
                      최신 기술과 창의적인 아이디어를 결합하여 사용자에게 최고의 경험을 제공합니다.
                    </p>
                    <p>
                      웹 개발부터 모바일 앱 개발, 브랜딩까지 다양한 영역에서 전문성을 바탕으로 
                      고객의 비전을 현실로 만들어갑니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

