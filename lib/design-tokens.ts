/**
 * Figma 디자인 토큰
 * 
 * Figma Dev Mode에서 추출한 디자인 값을 여기에 추가하세요.
 * 이 파일을 업데이트하면 전체 프로젝트에 일관된 디자인이 적용됩니다.
 */

// 색상 팔레트 (Figma에서 추출한 색상으로 교체)
export const colors = {
  // Primary Colors
  primary: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA', // 현재 사용 중인 메인 색상
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
  },
  
  // Neutral Colors
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // Text Colors
  text: {
    primary: '#171717',
    secondary: '#6B7280',
    tertiary: '#9CA3AF',
    inverse: '#FFFFFF',
  },
  
  // Background Colors
  background: {
    default: '#FFFFFF',
    secondary: '#F9FAFB',
    dark: '#0A0A0A',
  },
} as const;

// 간격 시스템 (Figma에서 사용한 간격 값)
export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const;

// 타이포그래피 (Figma에서 사용한 폰트 스타일)
export const typography = {
  fontFamily: {
    sans: ['Arial', 'Helvetica', 'sans-serif'],
    // Figma에서 사용한 폰트로 교체
    // 예: raleway: ['Raleway', 'sans-serif'],
  },
  
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
  },
  
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

// 그림자 (Figma에서 추출한 그림자 값)
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
} as const;

// 보더 반경
export const borderRadius = {
  none: '0px',
  sm: '4px',
  base: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  full: '9999px',
} as const;

// 전환 효과 (애니메이션)
export const transitions = {
  duration: {
    fast: '150ms',
    base: '300ms',
    slow: '500ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

/**
 * Figma에서 디자인 토큰을 추출하는 방법:
 * 
 * 1. Figma Dev Mode에서 요소 선택
 * 2. 우측 패널에서 CSS 변수나 값 확인
 * 3. 위의 객체들에 해당 값 추가
 * 4. globals.css에 CSS 변수로도 추가 (Tailwind와 함께 사용)
 */

