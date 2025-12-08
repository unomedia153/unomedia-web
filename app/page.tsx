import React from "react";
import Header from "../components/Header"; // 헤더 임포트
import FadeIn from "../components/FadeIn";
import Hero from "../components/Hero";

export default function Home() {
  // 포트폴리오 데이터
  const projects = [
    { id: 1, title: "Uno Platform App", category: "APP Dev", color: "bg-blue-100" },
    { id: 2, title: "Corporate Website", category: "WEB Dev", color: "bg-stone-100" },
    { id: 3, title: "E-Commerce System", category: "WEB & APP", color: "bg-indigo-100" },
    { id: 4, title: "Community Service", category: "APP Dev", color: "bg-orange-100" },
    { id: 5, title: "Brand Identity", category: "Design", color: "bg-pink-100" },
    { id: 6, title: "Admin Dashboard", category: "System", color: "bg-slate-100" },
  ];

  return (
    <main className="bg-white min-h-screen selection:bg-black selection:text-white">
      
      {/* 1. 헤더 (고정됨) */}
      <Header />

      {/* 2. 히어로 영역 (이미지 -> 스크롤 -> 텍스트) */}
      <Hero />

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

      {/* 4. 푸터 */}
      <footer className="bg-gray-50 py-20 text-center border-t border-gray-100">
        <FadeIn>
            <h2 className="text-3xl font-bold mb-8">Let's create something together....</h2>
            <button className="bg-black text-white px-10 py-4 rounded-full text-lg hover:bg-gray-800 transition shadow-lg">
                Contact Us
            </button>
        </FadeIn>
      </footer>

    </main>
  );
}