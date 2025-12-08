import React from "react";
import FadeIn from "../../components/FadeIn";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 타이틀 섹션 */}
      <section className="pt-32 pb-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-bold mb-8">About Us</h1>
          </FadeIn>
        </div>
      </section>

      {/* 이미지 섹션 */}
      <section className="px-6 md:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="w-full aspect-video bg-gray-200 rounded-2xl overflow-hidden mb-20">
              {/* 이미지 영역 - 나중에 실제 이미지로 교체 */}
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-xl">
                Image Area
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 소개글 섹션 */}
      <section className="px-6 md:px-20 pb-32">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.4}>
            <div className="space-y-8 text-lg leading-relaxed text-gray-800">
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
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

