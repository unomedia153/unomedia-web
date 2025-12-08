import React from "react";
import {
  Poppins,
  Inter,
  Urbanist,
  Manrope,
  Outfit,
  Bebas_Neue,
  Montserrat,
  Playfair_Display,
  Raleway,
  Space_Grotesk,
  Archivo_Black,
  Cinzel,
  Cormorant_Garamond,
  Pacifico,
  Bungee,
} from "next/font/google";

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

// 개성 있는 폰트들
const bebasNeue = Bebas_Neue({ 
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const montserrat = Montserrat({ 
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfairDisplay = Playfair_Display({ 
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const raleway = Raleway({ 
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

const spaceGrotesk = Space_Grotesk({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const archivoBlack = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-archivo-black",
});

const cinzel = Cinzel({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
});

const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-pacifico",
});

const bungee = Bungee({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bungee",
});

const uniqueFonts = [
  { name: "Bebas Neue (베바스 뉴)", font: bebasNeue, style: { fontFamily: bebasNeue.style.fontFamily } },
  { name: "Montserrat (몬세라트)", font: montserrat, style: { fontFamily: montserrat.style.fontFamily } },
  { name: "Playfair Display (플레이페어 디스플레이)", font: playfairDisplay, style: { fontFamily: playfairDisplay.style.fontFamily } },
  { name: "Raleway (랄웨이)", font: raleway, style: { fontFamily: raleway.style.fontFamily } },
  { name: "Space Grotesk (스페이스 그로테스크)", font: spaceGrotesk, style: { fontFamily: spaceGrotesk.style.fontFamily } },
  { name: "Archivo Black (아르치보 블랙)", font: archivoBlack, style: { fontFamily: archivoBlack.style.fontFamily } },
  { name: "Cinzel (신젤)", font: cinzel, style: { fontFamily: cinzel.style.fontFamily } },
  { name: "Cormorant Garamond (코모랑 가라몽)", font: cormorantGaramond, style: { fontFamily: cormorantGaramond.style.fontFamily } },
  { name: "Pacifico (퍼시피코)", font: pacifico, style: { fontFamily: pacifico.style.fontFamily } },
  { name: "Bungee (번지)", font: bungee, style: { fontFamily: bungee.style.fontFamily } },
];

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
    { label: "대문자 A-Z", text: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" },
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
                  {sample.label === "대문자 A-Z" && (
                    <p className="text-lg font-semibold tracking-wide uppercase">{sample.text}</p>
                  )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 개성 있는 폰트 섹션 */}
        <div className="mt-24 pt-16 border-t-2 border-gray-300">
          <h2 className="text-4xl font-bold mb-12 text-center">개성 있는 로고 폰트</h2>
          
          <div className="space-y-16">
            {uniqueFonts.map((fontItem) => (
              <div key={fontItem.name} className="border-b border-gray-200 pb-12">
                <h3 className="text-2xl font-bold mb-8" style={fontItem.style}>
                  {fontItem.name}
                </h3>
                
                <div className="space-y-6">
                  <div className="text-gray-900" style={fontItem.style}>
                    <p className="text-xl font-semibold tracking-wide uppercase">
                      A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                    </p>
                  </div>
                  <div className="text-gray-900" style={fontItem.style}>
                    <p className="text-8xl font-bold tracking-tight">unomedia</p>
                  </div>
                  <div className="text-gray-900" style={fontItem.style}>
                    <p className="text-6xl font-bold tracking-tight">unomedia</p>
                  </div>
                  <div className="text-gray-900" style={fontItem.style}>
                    <p className="text-4xl font-bold tracking-tight">unomedia</p>
                  </div>
                  <div className="text-gray-900" style={fontItem.style}>
                    <p className="text-3xl font-semibold tracking-tight">unomedia</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

