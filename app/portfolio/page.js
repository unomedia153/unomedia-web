import React from 'react';

export default function Portfolio() {
  return (
    <main className="w-full min-h-screen bg-black text-white">
      {/* 
        -------------------------------------------------------
        [작업 방법]
        기존 히어로(Hero) 섹션의 코드를 여기에 그대로 붙여넣으세요.
        (예시: 배경 동영상, 헤드라인 텍스트, 애니메이션 등)
        -------------------------------------------------------
      */}
      
      <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* 예시: 여기에 히어로 섹션 디자인이 들어갑니다 */}
        <h1 className="text-6xl md:text-9xl font-bold z-10">
          PORTFOLIO
        </h1>
        <p className="mt-4 text-xl z-10 text-gray-300">
          UNO MEDIA WORKS
        </p>
        
        {/* 배경 요소 (비디오나 이미지 등 기존 히어로 섹션의 배경) */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 -z-10 opacity-50"></div>
      </section>

    </main>
  );
}