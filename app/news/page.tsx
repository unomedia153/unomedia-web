import React from 'react';
import FadeIn from "../../components/FadeIn";

export default function NewsPage() {
  return (
    <main className="w-full min-h-screen bg-white text-black">
      {/* 뉴스 영역 */}
      <section className="px-6 md:px-20 py-20 max-w-7xl mx-auto">
        <div className="mb-20">
          <FadeIn>
            <h3 className="text-4xl font-bold border-l-4 border-black pl-6 leading-snug">
              NEWS
            </h3>
          </FadeIn>
        </div>

        {/* 뉴스 리스트 영역 - 나중에 실제 뉴스 데이터로 교체 */}
        <div className="space-y-8">
          <FadeIn delay={0.2}>
            <div className="border-b border-gray-200 pb-8">
              <p className="text-sm text-gray-500 mb-2">2024.01.15</p>
              <h4 className="text-2xl font-bold mb-4">새로운 프로젝트를 시작합니다</h4>
              <p className="text-gray-600 leading-relaxed">
                우노미디어가 새로운 디지털 프로젝트를 시작합니다. 고객에게 더 나은 경험을 제공하기 위해 노력하겠습니다.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="border-b border-gray-200 pb-8">
              <p className="text-sm text-gray-500 mb-2">2024.01.10</p>
              <h4 className="text-2xl font-bold mb-4">포트폴리오 업데이트</h4>
              <p className="text-gray-600 leading-relaxed">
                최근 완료한 프로젝트들을 포트폴리오에 추가했습니다. 다양한 분야의 프로젝트를 확인해보세요.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="border-b border-gray-200 pb-8">
              <p className="text-sm text-gray-500 mb-2">2024.01.05</p>
              <h4 className="text-2xl font-bold mb-4">새로운 팀원 합류</h4>
              <p className="text-gray-600 leading-relaxed">
                우노미디어에 새로운 팀원이 합류했습니다. 더욱 강력한 팀으로 고객에게 서비스를 제공하겠습니다.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

