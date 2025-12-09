import React from 'react';

export default function Portfolio() {
  return (
    <main className="w-full min-h-screen bg-black text-white">
       {/* 3. 포트폴리오 영역 */}
       <section className="px-6 md:px-20 py-20 max-w-7xl mx-auto">
        <div className="mb-20 border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-bold">Selected Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <div className="group cursor-pointer">
                <div className={`w-full aspect-[4/3] ${item.color} rounded-2xl overflow-hidden mb-6 relative`}>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    <div className="flex items-center justify-center h-full text-gray-400 font-bold text-2xl">
                        Image Area
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">
                        {item.category}
                    </span>
                    <h3 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">
                        {item.title}
                    </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      
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