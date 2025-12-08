import React from "react";
import { Poppins, Inter, Urbanist, Manrope, Outfit } from "next/font/google";

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const urbanist = Urbanist({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const manrope = Manrope({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

const outfit = Outfit({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

const fonts = [
  { name: "Poppins (포핀스)", font: poppins, className: poppins.variable },
  { name: "Inter (인터)", font: inter, className: inter.variable },
  { name: "Urbanist (얼바니스트)", font: urbanist, className: urbanist.variable },
  { name: "Manrope (맨로프)", font: manrope, className: manrope.variable },
  { name: "Outfit (아웃핏)", font: outfit, className: outfit.variable },
];

export default function LogoPage() {
  const sampleTexts = [
    { label: "로고 텍스트", text: "UNO MEDIA" },
    { label: "대제목", text: "We Build Digital Experience" },
    { label: "소제목", text: "Digital Creative Agency" },
    { label: "본문", text: "우노미디어는 웹과 앱의 경계를 허무는 통합 솔루션을 제공합니다." },
    { label: "메뉴", text: "ABOUT PORTFOLIO NEWS 프로젝트 문의" },
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">폰트 비교 페이지</h1>
        
        <div className="space-y-16">
          {fonts.map((fontItem) => (
            <div key={fontItem.name} className="border-b border-gray-200 pb-12">
              <h2 className={`text-3xl font-bold mb-8 ${fontItem.className}`}>
                {fontItem.name}
              </h2>
              
              <div className="space-y-8">
                {sampleTexts.map((sample) => (
                  <div key={sample.label} className="space-y-2">
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                      {sample.label}
                    </p>
                    <div className={`${fontItem.className} text-gray-900`}>
                      {sample.label === "로고 텍스트" && (
                        <p className="text-6xl font-bold">{sample.text}</p>
                      )}
                      {sample.label === "대제목" && (
                        <p className="text-4xl font-bold">{sample.text}</p>
                      )}
                      {sample.label === "소제목" && (
                        <p className="text-2xl font-semibold">{sample.text}</p>
                      )}
                      {sample.label === "본문" && (
                        <p className="text-lg font-normal leading-relaxed">{sample.text}</p>
                      )}
                      {sample.label === "메뉴" && (
                        <p className="text-base font-medium">{sample.text}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

