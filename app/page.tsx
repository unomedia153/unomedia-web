import React from "react";
import FadeIn from "../components/FadeIn";

export default function Home() {
  // 포트폴리오 더미 데이터 (나중에 실제 데이터로 바꾸세요)
  const projects = [
    { id: 1, title: "Uno Platform App", category: "APP Dev", color: "bg-blue-100" },
    { id: 2, title: "Corporate Website", category: "WEB Dev", color: "bg-stone-100" },
    { id: 3, title: "E-Commerce System", category: "WEB & APP", color: "bg-indigo-100" },
    { id: 4, title: "Community Service", category: "APP Dev", color: "bg-orange-100" },
    { id: 5, title: "Brand Identity", category: "Design", color: "bg-pink-100" },
    { id: 6, title: "Admin Dashboard", category: "System", color: "bg-slate-100" },
  ];

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* 1. 히어로 섹션 (첫 화면) */}
      <section className="h-[80vh] flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-lg md:text-xl text-gray-500 font-medium mb-4">
            Digital Creative Agency
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter">
            We Build <br />
            Digital <span className="text-blue-600">Experience.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="mt-8 text-xl text-gray-800 max-w-2xl leading-relaxed">
            우노미디어는 웹과 앱의 경계를 허무는 통합 솔루션을 제공합니다.
            비즈니스의 성장을 돕는 가장 확실한 파트너가 되어드리겠습니다.
          </p>
        </FadeIn>
      </section>


      {/* 2. 포트폴리오 그리드 섹션 (스크롤시 등장) */}
      <section className="px-6 md:px-20 pb-40 max-w-7xl mx-auto">
        <div className="mb-20 border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-bold">Selected Works</h2>
        </div>

        {/* 
            반응형 그리드 핵심:
            grid-cols-1 (모바일: 1열)
            md:grid-cols-2 (태블릿: 2열)
            lg:grid-cols-3 (PC: 3열)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}> {/* 순차적으로 뜨게 딜레이 조절 */}
              <div className="group cursor-pointer">
                {/* 이미지 영역 (썸네일) */}
                <div className={`w-full aspect-[4/3] ${item.color} rounded-2xl overflow-hidden mb-6 relative`}>
                    {/* 호버 효과용 오버레이 */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    {/* 여기에 나중에 <Image src=... /> 넣으시면 됩니다 */}
                    <div className="flex items-center justify-center h-full text-gray-400 font-bold text-2xl">
                        Image Area
                    </div>
                </div>

                {/* 텍스트 영역 */}
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

      {/* 3. 푸터 등 하단 영역 */}
      <footer className="bg-gray-100 py-20 text-center">
        <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Let's create something together.</h2>
            <button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition">
                Contact Us
            </button>
        </FadeIn>
      </footer>

    </main>
  );
}