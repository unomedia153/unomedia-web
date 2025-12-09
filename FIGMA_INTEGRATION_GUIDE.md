# Figma 디자인 적용 가이드

이 가이드는 Figma에서 디자인된 파일을 현재 프로젝트에 적용하는 방법을 설명합니다.

## 방법 1: Figma Dev Mode 사용 (권장)

### 1단계: Figma Dev Mode에서 디자인 값 추출

1. **Figma에서 Dev Mode 활성화**
   - Figma 파일을 열고 우측 상단의 "Dev Mode" 토글 활성화

2. **디자인 토큰 추출**
   - 색상: 각 색상을 클릭하면 CSS 변수나 Tailwind 값 확인 가능
   - 폰트: 텍스트 스타일에서 폰트 패밀리, 크기, 두께 확인
   - 간격(Spacing): 요소 간 거리 확인
   - 그림자, 보더 등: 스타일 속성 확인

3. **코드 복사**
   - 요소를 선택하면 우측 패널에 CSS/Tailwind 코드 표시
   - 필요한 스타일 복사

### 2단계: 프로젝트에 디자인 토큰 적용

#### A. 색상 팔레트 추가 (`app/globals.css`)

```css
@theme inline {
  /* Figma에서 추출한 색상 추가 */
  --color-primary: #60A5FA;      /* 예시: 메인 색상 */
  --color-secondary: #...;       /* Figma 색상 값 */
  --color-accent: #...;
  /* ... 기타 색상들 */
}
```

#### B. 폰트 추가

Figma에서 사용한 폰트가 Google Fonts에 있다면 `next/font/google`로 추가:

```typescript
// components/Header.tsx 예시처럼
import { FontName } from "next/font/google";
```

#### C. 간격 및 크기 시스템

Tailwind의 기본 간격 시스템을 사용하거나 커스텀 값 추가

## 방법 2: Figma 플러그인 사용

### 추천 플러그인:
1. **Figma to Code** - React 컴포넌트로 내보내기
2. **Figma to Tailwind** - Tailwind 클래스로 변환
3. **Design Tokens** - 디자인 토큰 추출

### 사용 방법:
1. Figma에서 플러그인 실행
2. 디자인 선택 후 코드 생성
3. 생성된 코드에서 스타일 값 추출
4. 현재 프로젝트 컴포넌트에 적용

## 방법 3: 수동 추출 및 적용

### 1. Figma에서 값 확인
- 색상: 색상 팔레트에서 HEX/RGB 값 복사
- 폰트: 텍스트 레이어에서 폰트 정보 확인
- 간격: 요소 간 거리 측정 도구 사용
- 그림자/블러: 효과 패널에서 값 확인

### 2. 프로젝트에 적용
- `app/globals.css`에 CSS 변수로 추가
- 또는 각 컴포넌트에 직접 Tailwind 클래스 적용

## 적용 예시

### 예시 1: 색상 팔레트 적용

Figma에서 추출한 색상을 `globals.css`에 추가:

```css
@theme inline {
  --color-brand-primary: #60A5FA;
  --color-brand-secondary: #3B82F6;
  --color-text-primary: #171717;
  --color-text-secondary: #6B7280;
  --color-background: #FFFFFF;
  --color-surface: #F9FAFB;
}
```

컴포넌트에서 사용:
```tsx
<div className="bg-brand-primary text-text-primary">
  {/* 내용 */}
</div>
```

### 예시 2: 폰트 적용

Figma에서 사용한 폰트가 "Inter"라면:

```typescript
// app/layout.tsx 또는 컴포넌트에서
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
```

### 예시 3: 간격 시스템

Figma에서 사용한 간격을 Tailwind에 매핑:
- 4px → `gap-1` 또는 `p-1`
- 8px → `gap-2` 또는 `p-2`
- 16px → `gap-4` 또는 `p-4`
- 24px → `gap-6` 또는 `p-6`
- 32px → `gap-8` 또는 `p-8`

## 작업 순서 권장사항

1. **디자인 토큰 먼저 추출**
   - 색상, 폰트, 간격 등 전역 스타일 정의

2. **컴포넌트별로 적용**
   - Header → About → Portfolio → News 순서로 적용
   - 각 페이지의 주요 컴포넌트부터 작업

3. **인터랙션 추가**
   - 호버 효과, 애니메이션 등은 Framer Motion 활용
   - 기존 `FadeIn` 컴포넌트처럼 재사용 가능한 애니메이션 컴포넌트 생성

4. **반응형 디자인**
   - Figma의 모바일/태블릿/데스크탑 뷰 확인
   - Tailwind의 반응형 클래스 적용 (`md:`, `lg:` 등)

## 주의사항

- ✅ 프로젝트 구조(`app/`, `components/` 등)는 유지
- ✅ 기존 기능(라우팅, Firebase 등)은 그대로 유지
- ✅ Tailwind CSS 클래스 사용 권장 (인라인 스타일 지양)
- ✅ 디자인 토큰은 `globals.css`에 중앙 관리

## 다음 단계

Figma 파일을 공유해주시면:
1. 디자인 토큰을 자동으로 추출하는 스크립트 생성
2. 컴포넌트별 디자인 적용 도와드리기
3. 인터랙션 구현 지원

