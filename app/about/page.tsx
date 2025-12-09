"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue, useTransform, animate } from "framer-motion";

// --- [Components] 애니메이션 효과를 위한 내부 컴포넌트들 ---

// 1. 텍스트/요소가 위로 떠오르며 나타나는 효과 (Fade In Up)
const FadeInUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 2. 숫자 카운트 업 효과 (Statistics)
const Counter = ({ from, to, suffix = "" }: { from: number, to: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.floor(value).toLocaleString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, inView, suffix]);

  return <span ref={ref} className="text-5xl md:text-7xl font-bold text-black" />;
};


// --- [Main Page] About 페이지 구현 ---

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 pb-40">
      
      {/* 1. TOP VISUAL (헤더 영역 아래) */}
      <section className="relative h-[60vh] md:h-[80vh] flex flex-col justify-center px-6 md:px-20 overflow-hidden bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop')] bg-cover bg-center opacity-10"
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-blue-600 font-bold tracking-widest text-sm mb-4">ABOUT US</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Learn about the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">UNO MEDIA</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              우리는 디지털 경험을 통해 비즈니스의 가치를 높입니다.<br />
              웹과 앱의 경계를 허무는 통합 솔루션, 우노미디어입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. WHO WE ARE (소개글) */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <FadeInUp className="md:w-1/3">
            <h3 className="text-4xl font-bold border-l-4 border-black pl-6 leading-snug">
              WHO <br /> WE ARE?
            </h3>
          </FadeInUp>
          
          <div className="md:w-2/3 space-y-10">
            <FadeInUp delay={0.2}>
              <h4 className="text-2xl font-bold mb-4">Creative Digital Agency</h4>
              <p className="text-gray-600 leading-8 text-lg">
                우노미디어는 단순한 제작사가 아닙니다. 고객의 비즈니스를 이해하고,
                사용자에게 가장 직관적이고 아름다운 디지털 경험을 제공하는 파트너입니다.
                기획부터 디자인, 개발, 그리고 마케팅까지 프로젝트의 A to Z를 책임집니다.
              </p>
            </FadeInUp>
            
            <FadeInUp delay={0.4} className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-200">
               <div>
                 <h5 className="font-bold text-xl mb-3">Our Mission</h5>
                 <p className="text-gray-500">기술로 사람을 잇고, 디자인으로 가치를 더합니다.</p>
               </div>
               <div>
                 <h5 className="font-bold text-xl mb-3">Our Vision</h5>
                 <p className="text-gray-500">대한민국 최고의 디지털 통합 에이전시로 도약합니다.</p>
               </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 3. STATISTICS (숫자 카운팅) */}
      <section className="bg-black text-white py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          
          <div className="flex flex-col gap-2">
            <Counter from={0} to={12} suffix="" />
            <span className="text-gray-400 text-sm tracking-widest uppercase">Years Experience</span>
          </div>

          <div className="flex flex-col gap-2">
            <Counter from={0} to={150} suffix="+" />
            <span className="text-gray-400 text-sm tracking-widest uppercase">Project Completed</span>
          </div>

          <div className="flex flex-col gap-2">
            <Counter from={0} to={30} suffix="" />
            <span className="text-gray-400 text-sm tracking-widest uppercase">Creative Experts</span>
          </div>

          <div className="flex flex-col gap-2">
            <Counter from={0} to={98} suffix="%" />
            <span className="text-gray-400 text-sm tracking-widest uppercase">Client Satisfaction</span>
          </div>

        </div>
      </section>

      {/* 4. ORGANIZATION (조직도 스타일) */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">ORGANIZATION</h3>
          <p className="text-gray-500">우노미디어는 각 분야 최고의 전문가들과 함께합니다.</p>
        </FadeInUp>

        {/* 조직도 트리 구조 시각화 */}
        <div className="flex flex-col items-center">
          {/* CEO */}
          <FadeInUp delay={0.1}>
            <div className="bg-gray-900 text-white py-4 px-12 rounded-lg font-bold text-lg mb-8 shadow-xl">
              CEO / Management
            </div>
          </FadeInUp>
          
          {/* 연결선 */}
          <motion.div 
             initial={{ height: 0 }} whileInView={{ height: 40 }} transition={{ duration: 1 }}
             className="w-0.5 bg-gray-300 mb-8"
          />

          {/* 부서들 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { title: "Strategic Planning", teams: ["Service Planning", "UX Consulting", "Marketing"] },
              { title: "Creative Design", teams: ["UI/GUI Design", "Interaction", "Editorial"] },
              { title: "Technology", teams: ["Front-end Dev", "Back-end Dev", "Mobile App"] }
            ].map((dept, idx) => (
              <FadeInUp key={idx} delay={0.2 + (idx * 0.1)} className="flex flex-col items-center">
                <div className="w-full bg-gray-100 p-6 rounded-xl border border-gray-200 text-center hover:bg-white hover:shadow-lg transition-all duration-300">
                  <h4 className="text-blue-600 font-bold text-xl mb-4">{dept.title}</h4>
                  <ul className="space-y-2">
                    {dept.teams.map((team, tIdx) => (
                      <li key={tIdx} className="text-gray-600 font-medium">{team}</li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PARTNERS (로고 그리드) */}
      <section className="bg-gray-50 py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="mb-12">
            <h3 className="text-2xl font-bold">MAJOR PARTNERS</h3>
          </FadeInUp>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* 임시 파트너 로고 박스들 (실제 이미지로 교체 가능) */}
            {Array.from({ length: 10 }).map((_, i) => (
              <FadeInUp key={i} delay={i * 0.05}>
                <div className="bg-white h-24 rounded flex items-center justify-center text-gray-300 font-bold border border-gray-100 hover:border-blue-500 hover:text-blue-500 transition-colors cursor-pointer">
                  PARTNER {i + 1}
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}