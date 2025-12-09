# Figma 디자인 토큰 추출 체크리스트

Figma에서 디자인을 추출할 때 다음 항목들을 확인하세요:

## 1. 색상 (Colors)

### 추출 방법:
1. Figma Dev Mode에서 색상 선택
2. 우측 패널에서 HEX 값 복사
3. `app/globals.css`의 `:root`에 추가

### 확인할 색상:
- [ ] Primary 색상 (메인 브랜드 색상)
- [ ] Secondary 색상
- [ ] 텍스트 색상 (Primary, Secondary, Tertiary)
- [ ] 배경 색상 (Default, Secondary, Dark)
- [ ] 에러/경고/성공 색상
- [ ] 호버 상태 색상

### 예시:
```css
:root {
  --color-primary: #60A5FA;
  --color-primary-hover: #3B82F6;
  --color-text-primary: #171717;
  --color-text-secondary: #6B7280;
}
```

## 2. 타이포그래피 (Typography)

### 추출 방법:
1. 텍스트 레이어 선택
2. 우측 패널에서 폰트 정보 확인
3. 폰트 패밀리, 크기, 두께, 줄 간격 확인

### 확인할 항목:
- [ ] 폰트 패밀리 (Font Family)
- [ ] 폰트 크기 (Font Size) - 각 레벨별
- [ ] 폰트 두께 (Font Weight)
- [ ] 줄 간격 (Line Height)
- [ ] 자간 (Letter Spacing)

### 예시:
```css
:root {
  --font-family-primary: 'Inter', sans-serif;
  --font-size-h1: 48px;
  --font-size-h2: 36px;
  --font-size-body: 16px;
  --font-weight-bold: 700;
  --line-height-tight: 1.25;
}
```

## 3. 간격 시스템 (Spacing)

### 추출 방법:
1. 요소 간 거리 측정 도구 사용
2. 일관된 간격 값 확인 (4px, 8px, 16px 등)

### 확인할 항목:
- [ ] 섹션 간 간격
- [ ] 요소 간 간격
- [ ] 패딩 값
- [ ] 마진 값

### 예시:
```css
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
}
```

## 4. 그림자 및 효과 (Shadows & Effects)

### 추출 방법:
1. 그림자가 적용된 요소 선택
2. 효과 패널에서 그림자 값 확인

### 확인할 항목:
- [ ] 기본 그림자
- [ ] 호버 상태 그림자
- [ ] 블러 효과
- [ ] 보더 스타일

### 예시:
```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

## 5. 보더 반경 (Border Radius)

### 추출 방법:
1. 둥근 모서리가 있는 요소 선택
2. 우측 패널에서 반경 값 확인

### 확인할 항목:
- [ ] 작은 요소 (버튼 등)
- [ ] 카드/컨테이너
- [ ] 모달/팝업

## 6. 인터랙션 (Interactions)

### 확인할 항목:
- [ ] 호버 효과
- [ ] 클릭 효과
- [ ] 전환 애니메이션
- [ ] 페이지 전환 효과

### 예시:
```css
:root {
  --transition-fast: 150ms;
  --transition-base: 300ms;
  --transition-slow: 500ms;
}
```

## 7. 반응형 브레이크포인트

### 확인할 항목:
- [ ] 모바일 디자인 (보통 375px ~ 768px)
- [ ] 태블릿 디자인 (보통 768px ~ 1024px)
- [ ] 데스크탑 디자인 (1024px 이상)

## 적용 순서

1. ✅ 색상 팔레트 먼저 적용
2. ✅ 타이포그래피 설정
3. ✅ 간격 시스템 적용
4. ✅ 컴포넌트별 스타일 적용
5. ✅ 인터랙션 및 애니메이션 추가

## 팁

- Figma Dev Mode의 "Code" 탭에서 CSS나 Tailwind 코드를 직접 복사할 수 있습니다
- 일관성을 위해 디자인 시스템을 먼저 정의한 후 적용하세요
- 작은 컴포넌트부터 시작해서 점진적으로 적용하세요

