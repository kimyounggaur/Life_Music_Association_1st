# 한국생활음악강사협회 홈페이지 개발용 바이브코딩 프롬프트

> 목적: `todaymusicgood.com`에서 느껴지는 따뜻하고 감각적인 음악 교육 브랜드 경험을 참고하되, **한국생활음악강사협회만의 기관수업·자격과정·교재 개발 전문성**이 선명하게 드러나는 반응형 홈페이지를 개발한다.  
> 핵심 원칙: 참고 사이트의 분위기, 섹션 리듬, 큰 타이포그래피, 컬러 블록, 이미지 중심 레이아웃은 참고하되 **원본 이미지·문구·레이아웃을 복제하지 않는다.**

---

## 0. 이 문서를 사용하는 방법

아래 프롬프트를 Cursor, Claude Code, Lovable, Bolt, Replit Agent 같은 AI 코딩 도구에 **순서대로 붙여넣어** 진행한다.  
각 단계가 끝나면 반드시 다음을 확인한다.

1. 변경 파일 목록을 보고한다.
2. `npm run lint` 또는 해당 프로젝트의 검사 명령을 실행한다.
3. 모바일 375px, 태블릿 768px, 데스크톱 1440px에서 레이아웃이 깨지지 않는지 확인한다.
4. 임의로 실제 후기, 강사명, 기관명, 수료자 수, 지점 수를 만들어내지 않는다. 실제 데이터가 없으면 `콘텐츠 입력 예정` 또는 관리자 입력 필드로 둔다.

---

## 1. 프로젝트 목표 요약

### 만들 사이트

- 사이트명: **한국생활음악강사협회**
- 영문명: **Life Music Lecturer Association Of KOREA**
- 사이트 성격: 기관수업에 특화된 생활음악 교육 협회 홈페이지
- 주요 기능: 협회 소개, 기관수업 안내, 자격과정 안내, 연습곡집/교재 소개, 수업 사례/소식, 문의 접수
- 우선 개발 범위: 랜딩형 메인 페이지 + 핵심 서브페이지 + 문의 폼

### 핵심 메시지

- 기관수업에 특화된 생활음악 교육 협회
- 자격증 취득 후 실제 수업 현장에서 바로 활용할 수 있는 커리큘럼, 교재, 연습곡집, PPT, 교구를 제공
- 기관별·대상별 상황에 맞춘 생활음악 수업 설계
- 지속적인 수업 연구, 개발, 업그레이드를 통해 강사와 기관을 지원

### 주요 타깃

- 문화센터, 평생교육원, 복지관, 학교, 공공기관 등 기관 수업 담당자
- 생활음악 강사 활동을 준비하는 예비 강사
- 이미 기관 수업을 진행 중이나 콘텐츠와 교수법 업그레이드가 필요한 강사
- 칼림바, 텅드럼, 우쿨렐레, 난타, 실로폰, 핸드벨 등 생활음악 수업을 도입하려는 기관

---

## 2. 참고 사이트 스타일 분석 및 적용 방향

### 참고할 분위기

- 음악 교육을 딱딱하게 설명하기보다 **라이프스타일 브랜드처럼 감각적으로 소개**한다.
- 첫 화면부터 큰 문장, 넉넉한 여백, 강한 컬러 면, 인물/악기 이미지를 사용한다.
- 섹션마다 배경색을 바꾸어 리듬감을 만든다.
- 영문 이탤릭 대제목과 한국어 설명을 조합해 세련된 느낌을 준다.
- 버튼은 꽉 찬 버튼보다 얇은 라인 버튼, 라운드 버튼, 텍스트 CTA를 섞어 사용한다.
- 모바일에서는 세로형 카드와 큰 타이포그래피로 전환한다.

### 그대로 따라 하지 말아야 할 것

- 참고 사이트의 원본 사진, 원본 그래픽, 원본 슬로건을 사용하지 않는다.
- 참고 사이트의 메뉴명, 섹션명, 브랜드 네이밍을 그대로 복제하지 않는다.
- 브랜드 컬러는 협회 자료의 **청록색/민트색**을 중심으로 재해석하고, 참고 사이트의 코랄/오렌지는 보조 포인트로만 사용한다.

### 한국생활음악강사협회식 재해석

- 참고 사이트가 “음악을 즐기는 라이프스타일” 톤이라면, 협회 사이트는 “기관수업을 잘하는 생활음악 교육 플랫폼” 톤으로 간다.
- 이미지 중심 감성은 유지하되, 콘텐츠는 자격과정·기관수업·교재·커리큘럼이라는 신뢰 요소를 강조한다.
- 일러스트 자산이 많으므로 사진보다 **생활음악 일러스트 + 카드형 교육 정보 + 큰 CTA**를 중심으로 구성한다.

---

## 3. 추천 기술 스택

AI 코딩 도구에는 아래 스택을 기준으로 지시한다.

```txt
- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Animation: Framer Motion 또는 CSS transition
- Icons: lucide-react + 자체 악기 아이콘 이미지
- Image: next/image
- Form: React Hook Form + Zod 검증
- Content: 우선 TypeScript/JSON 정적 데이터로 관리, 추후 CMS 연동 가능하게 구조화
- Deployment: Vercel 기준
```

### 폴더 구조

```txt
src/
  app/
    page.tsx
    about/page.tsx
    institution-classes/page.tsx
    certification/page.tsx
    materials/page.tsx
    stories/page.tsx
    contact/page.tsx
    layout.tsx
    globals.css
  components/
    layout/
      Header.tsx
      MegaMenu.tsx
      MobileMenu.tsx
      Footer.tsx
      FloatingCTA.tsx
    sections/
      HeroSection.tsx
      IntroSection.tsx
      BenefitsSection.tsx
      InstrumentClassSection.tsx
      CertificationSection.tsx
      MaterialsSection.tsx
      StoriesSection.tsx
      ContactCTASection.tsx
    ui/
      Button.tsx
      SectionLabel.tsx
      Reveal.tsx
      Card.tsx
      Tabs.tsx
      Badge.tsx
  content/
    navigation.ts
    site.ts
    classes.ts
    certifications.ts
    materials.ts
    faqs.ts
  lib/
    cn.ts
    seo.ts
    validation.ts
public/
  assets/
    brand/
    posters/
    brochures/
    materials/
    illustrations/
```

---

## 4. 에셋 정리 지시

현재 보유한 이미지 파일은 개발 프로젝트의 `/public/assets/source/`에 먼저 넣고, 실제 사용용으로는 아래처럼 이름을 바꿔 정리한다.

```txt
public/assets/brand/association-intro.jpg
  원본: 협회소개.jpg
  용도: 협회 소개 페이지, 메인 About 섹션, 푸터 브랜드 설명

public/assets/posters/class-feature-poster.jpg
  원본: A3_한국생활음악강사협회_포스터_최종인쇄(소고난타 추가)_대지 1.jpg
  용도: 기관수업/클래스 특징 섹션, 데스크톱 포스터 미리보기

public/assets/posters/certification-overview.jpg
  원본: 한국생활음악강사협회 자격과정 홍보 포스터(A3 가로형).jpg
  용도: 자격과정 소개 페이지 대표 이미지

public/assets/courses/course-grade.png
  원본: 1 급수별 자격과정.png
  용도: 급수별 자격과정 탭

public/assets/courses/course-fast-track.png
  원본: 2 자격 과정별 속성과정.png
  용도: 속성과정 탭

public/assets/courses/course-fusion.png
  원본: 3 카테고리별 융합과정.png
  용도: 융합수업 탭

public/assets/courses/course-advanced.png
  원본: 4 자격 과정별 심화수업.png
  용도: 심화과정 탭

public/assets/brochures/institution-benefits.jpg
  원본: 한국생활음악강사협회+기관수업+브로셔합본-01.jpg
  용도: 기관수업 장점/혜택 섹션

public/assets/brochures/class-map.jpg
  원본: 한국생활음악강사협회+기관수업+브로셔 합본-03.jpg
  용도: 생활음악분야 클래스 소개 그리드

public/assets/materials/ukulele-series.png
  원본: 한국생활음악강사협회 연습곡집 시리즈-우쿨렐레 연습곡(크몽).png
  용도: 교재/연습곡집 섹션

public/assets/materials/kalimba-series.jpg
  원본: 한국생활음악강사협회 연습곡집 시리즈-칼림바 연습곡(크몽).jpg
  용도: 교재/연습곡집 섹션

public/assets/illustrations/music-park.png
  원본: 한국생활음악강사협회 자격과정 홍보 포스터(A3 가로형) 2-3[크몽] 음률악기 분야_아트보드 1.png
  용도: 히어로 또는 서브 비주얼 배경
```

### 에셋 사용 규칙

- 대형 포스터 이미지는 원본 그대로만 보여주지 말고, 카드 내부 썸네일 또는 모달 확대 보기로 사용한다.
- 로고는 `협회소개.jpg`에서 잘라 쓰기보다 가능하면 별도 투명 PNG/SVG를 요청한다. 임시 단계에서는 해당 이미지의 상단 로고 영역을 크롭해서 사용한다.
- 모든 이미지에는 한국어 `alt`를 넣는다.
- 이미지는 데스크톱 기준 최대 너비를 제한하고, 모바일에서는 가로 스크롤 대신 세로 카드로 쌓는다.

---

## 5. 디자인 시스템

### 컬러 토큰

협회 기존 자료의 청록색을 메인으로 두고, 참고 사이트의 따뜻한 코랄/오렌지 분위기를 보조로 사용한다.

```css
:root {
  --color-bg: #fffaf2;
  --color-bg-soft: #f7efe7;
  --color-bg-mint: #e9f8f5;
  --color-bg-pink: #fbe7ec;

  --color-primary: #069a92;
  --color-primary-dark: #007a76;
  --color-primary-soft: #8bd4cf;

  --color-coral: #d84f42;
  --color-orange: #ff8a45;
  --color-yellow: #ffbe3d;
  --color-navy: #20245a;

  --color-ink: #262a30;
  --color-gray: #70757d;
  --color-line: rgba(38, 42, 48, 0.14);

  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --radius-xl: 48px;

  --shadow-soft: 0 18px 50px rgba(0, 0, 0, 0.10);
  --shadow-text: 0 4px 10px rgba(0, 0, 0, 0.18);
}
```

### 타이포그래피

```txt
Korean body: Pretendard, Noto Sans KR, system-ui
English display: Inter, Manrope, Pretendard
Display style: 큰 영문 문구는 italic, font-weight 600~700, letter-spacing -0.04em
Korean headline: 굵고 둥근 느낌, line-height 1.18
Body: line-height 1.75, 지나치게 작지 않게 16~18px
```

### 반응형 타이포그래피 기준

```css
.hero-title {
  font-size: clamp(48px, 8vw, 128px);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.section-title {
  font-size: clamp(36px, 5vw, 84px);
  line-height: 1.05;
  letter-spacing: -0.05em;
}

.korean-lead {
  font-size: clamp(18px, 2vw, 28px);
  line-height: 1.65;
}
```

### 레이아웃 규칙

- 전체 배경은 완전한 흰색보다 따뜻한 크림색을 기본으로 한다.
- 데스크톱 섹션은 `min-height: 86vh` 또는 `padding: 120px 0` 수준으로 넉넉하게 둔다.
- 섹션 폭은 `max-width: 1180px`, 히어로/비주얼 섹션은 `max-width: 1440px`까지 허용한다.
- 컬러 블록 섹션은 화면 전체 너비를 사용하고 내부 콘텐츠만 중앙 정렬한다.
- 이미지와 텍스트가 번갈아 좌우 배치되는 리듬을 만든다.
- 모바일에서는 이미지가 아래로 내려가고 CTA가 버튼 2개 이하로 정리된다.

### 버튼 스타일

```txt
Primary Button
- 청록 배경 + 흰색 글자
- radius 999px
- padding 14px 22px
- hover 시 살짝 위로 이동, 그림자 증가

Outline Button
- 투명 배경 + 현재 섹션 텍스트 컬러와 같은 1px border
- 참고 사이트처럼 얇고 정제된 느낌
- 컬러 블록 위에서는 흰색 라인 버튼 사용

Text Button
- 작은 화살표 아이콘
- hover 시 밑줄 또는 arrow translate-x
```

### 모션 규칙

- 스크롤 진입 시 `opacity 0 -> 1`, `translateY 30px -> 0`.
- 큰 타이틀은 첫 진입 때 0.6초 이내로 부드럽게 등장.
- 카드 hover는 `scale(1.015)` 정도만 사용한다.
- 악기 아이콘은 과하게 흔들지 말고 2~3개만 미세하게 float 애니메이션.
- `prefers-reduced-motion`에서는 애니메이션을 끈다.

---

## 6. 정보 구조 IA

### 1차 메뉴

```txt
협회소개
기관수업
자격과정
교재·콘텐츠
수업사례·소식
문의
```

### 2차 메뉴

```txt
협회소개
  - 협회 미션
  - 교육철학
  - 전문강사의 장점
  - 연구·개발 방향

기관수업
  - 기관수업 특징
  - 출강 기관 혜택
  - 생활음악 클래스
  - 융합수업 예시
  - 기관수업 문의

자격과정
  - 급수별 자격과정
  - 자격 과정별 속성과정
  - 카테고리별 융합수업
  - 자격 과정별 심화수업
  - FAQ

교재·콘텐츠
  - 칼림바 연습곡집
  - 우쿨렐레 연습곡집
  - 수업용 PPT
  - 수업용 교구

수업사례·소식
  - 공지사항
  - 기관수업 사례
  - 강사 활동 소식
  - 갤러리

문의
  - 기관 출강 문의
  - 자격과정 문의
  - 교재 문의
```

### URL 구조

```txt
/                         메인
/about                    협회소개
/institution-classes      기관수업
/certification            자격과정
/materials                교재·콘텐츠
/stories                  수업사례·소식
/contact                  문의
```

---

## 7. 콘텐츠 데이터 설계

### `src/content/site.ts`

```ts
export const site = {
  name: '한국생활음악강사협회',
  englishName: 'Life Music Lecturer Association Of KOREA',
  tagline: '기관 수업에 강한 생활음악 교육 플랫폼',
  description:
    '한국생활음악강사협회는 기관 수업에 특화된 생활음악 커리큘럼, 자격과정, 교재, 수업자료를 연구·개발하는 교육 협회입니다.',
  contact: {
    phone: '010.5655.9152',
    cafe: 'https://cafe.naver.com/tonguedrum',
    email: '',
    kakao: '',
  },
};
```

### `src/content/classes.ts`

```ts
export const instrumentClasses = [
  { name: '미니하프', category: 'melody', description: '부드러운 음색으로 감성 수업에 적합한 클래스' },
  { name: '텅드럼', category: 'healing', description: '악보 부담이 적고 힐링형 기관수업에 적합한 클래스' },
  { name: '칼림바', category: 'melody', description: '연령대별 맞춤 교재와 연습곡집 활용이 쉬운 클래스' },
  { name: '우쿨렐레', category: 'string', description: '노래와 반주를 결합하기 좋은 생활음악 대표 클래스' },
  { name: '기타', category: 'string', description: '반주와 합주 수업으로 확장 가능한 클래스' },
  { name: '기타렐레', category: 'string', description: '기타보다 작은 사이즈로 접근성이 좋은 클래스' },
  { name: '컵타', category: 'rhythm', description: '컵을 활용한 리듬 중심 참여형 클래스' },
  { name: '밴드', category: 'ensemble', description: '보컬과 악기 합주를 함께 경험하는 클래스' },
  { name: '난타', category: 'rhythm', description: '신체 리듬과 퍼포먼스를 결합한 클래스' },
  { name: '장구난타', category: 'rhythm', description: '전통 리듬과 현대적 퍼포먼스를 결합한 클래스' },
  { name: '실로폰', category: 'melody', description: '기초 음감과 합주 활동에 적합한 클래스' },
  { name: '핸드벨&톤차임', category: 'ensemble', description: '협동과 집중을 키우는 합주형 클래스' },
  { name: '가창&합창', category: 'voice', description: '노래를 통한 표현력과 공동체 활동 중심 클래스' },
  { name: '보컬트레이닝', category: 'voice', description: '발성, 호흡, 표현력을 다루는 클래스' },
  { name: '실용반주', category: 'accompaniment', description: '기관 수업과 노래 활동에 활용 가능한 반주 클래스' },
];
```

### `src/content/certifications.ts`

```ts
export const certificationGroups = [
  {
    id: 'grade',
    title: '급수별 자격과정',
    summary: '해당 과정을 기초부터 배우고 싶은 경우 선택하는 과정',
    items: [
      {
        label: '1급-3급 자격 과정',
        instruments: ['칼림바', '텅드럼', '미니하프', '기타', '우쿨렐레', '기타렐레', '드럼', '타악기', '밴드'],
      },
      {
        label: '1급-2급 자격 과정',
        instruments: ['가창 합창', '보컬', '난타', '장구난타', '스푼난타', '실로폰', '핸드벨&톤차임', '컵타', '소고'],
      },
    ],
  },
  {
    id: 'fast-track',
    title: '자격 과정별 속성과정',
    summary: '해당 과정 수업 경험과 연주 경력이 있는 강사를 위한 압축 과정',
    items: [
      {
        label: '6시간 과정',
        instruments: ['칼림바', '텅드럼', '미니하프', '기타', '우쿨렐레', '기타렐레', '드럼', '타악기', '난타', '장구난타', '가창 합창', '보컬', '밴드'],
      },
      {
        label: '4시간 과정',
        instruments: ['실로폰', '스푼난타', '핸드벨&톤차임', '컵타', '소고'],
      },
    ],
  },
  {
    id: 'fusion',
    title: '카테고리별 융합수업',
    summary: '두 가지 이상 악기를 조합해 기관수업의 퀄리티를 높이는 과정',
    items: [
      { label: '칼림바+텅드럼', time: '칼림바 5시간 / 텅드럼 5시간' },
      { label: '칼림바+미니하프', time: '칼림바 3시간 / 미니하프 7시간' },
      { label: '텅드럼+미니하프', time: '텅드럼 3시간 / 미니하프 7시간' },
      { label: '기타+우쿨렐레', time: '기타 7시간 / 우쿨렐레 3시간' },
      { label: '기타+기타렐레', time: '기타 7시간 / 기타렐레 3시간' },
      { label: '우쿨렐레+기타렐레', time: '우쿨렐레 4시간 / 기타렐레 6시간' },
      { label: '드럼+젬베', time: '드럼 7시간 / 젬베 3시간' },
      { label: '드럼+카혼', time: '드럼 7시간 / 카혼 3시간' },
      { label: '드럼+리듬악기', time: '드럼 7시간 / 리듬악기 3시간' },
      { label: '실로폰+핸드벨&톤차임', time: '실로폰 3시간 / 핸드벨&톤차임 3시간' },
      { label: '가창합창+보컬트레이닝', time: '가창합창 5시간 / 보컬트레이닝 5시간' },
      { label: '난타+장구난타', time: '난타 5시간 / 장구난타 5시간' },
      { label: '난타+소고난타', time: '난타 5시간 / 소고난타 2시간' },
      { label: '장구난타+소고난타', time: '장구난타 5시간 / 소고난타 2시간' },
      { label: '컵타+아살라토', time: '컵타 4시간 / 아살라토 6시간' },
      { label: '컵타+스푼난타', time: '컵타 3시간 / 스푼난타 3시간' },
      { label: '아살라토+스푼난타', time: '아살라토 3시간 / 스푼난타 3시간' },
      { label: '컵타+소고', time: '컵타 3시간 / 소고 3시간' },
      { label: '아살라토+소고', time: '아살라토 3시간 / 소고 3시간' },
      { label: '스푼난타+소고', time: '스푼난타 3시간 / 소고 3시간' },
    ],
  },
  {
    id: 'advanced',
    title: '자격 과정별 심화수업',
    summary: '수업 능력 업그레이드가 필요한 강사를 위한 장기 심화과정',
    items: [
      { label: '4주 단기 심화과정', duration: '4 week' },
      { label: '8주 단기 심화과정', duration: '8 week' },
      { label: '3개월 심화과정', duration: '3 month' },
      { label: '6개월 심화과정', duration: '6 month' },
    ],
  },
];
```

### `src/content/materials.ts`

```ts
export const materials = [
  {
    title: '칼림바 연습곡집 시리즈',
    tags: ['저학년용', '청소년용', '성인용', '7080'],
    description: '대상과 연령에 맞게 구성된 칼림바 맞춤형 교재 시리즈',
    image: '/assets/materials/kalimba-series.jpg',
  },
  {
    title: '우쿨렐레 연습곡집 시리즈',
    tags: ['저학년용', '청소년용', '성인용', '7080'],
    description: '동요, 최신가요, 일반가요, 7080곡 등 수업 대상에 맞춘 우쿨렐레 교재 시리즈',
    image: '/assets/materials/ukulele-series.png',
  },
];
```

---

## 8. 메인 페이지 섹션 설계

### Section 1. Hero

#### 목적
첫 화면에서 “기관수업 전문 생활음악 교육 협회”라는 정체성을 바로 전달한다.

#### 카피

```txt
작은 라벨: Life Music Lecturer Association Of KOREA
영문 대제목: Life Music, Teach Better
한글 대제목: 기관 수업에 강한 생활음악 교육 플랫폼
본문: 한국생활음악강사협회는 기관 수업에 바로 활용할 수 있는 커리큘럼, 자격과정, 교재, 수업자료를 연구·개발합니다.
CTA 1: 기관수업 문의하기
CTA 2: 자격과정 보기
```

#### 디자인

- 배경: 크림색 `#fffaf2`
- 큰 영문 이탤릭 제목은 청록색 또는 코랄색 그림자
- 우측에는 `music-park.png` 또는 클래스 일러스트를 원형/유기적 마스크로 배치
- 배경에 얇은 오선지 라인, 작은 음표, 악기 아이콘을 은은하게 배치
- 하단에는 “기관수업 · 자격과정 · 교재개발 · 융합수업” 네 가지 키워드 pill을 둔다.

---

### Section 2. Association Intro

#### 카피

```txt
영문 타이틀: About the Association
한글 타이틀: 기관 수업에 특화된 협회입니다
본문:
저희 협회는 기관 수업에 특화되어 있는 협회입니다.
협회에서 자격증을 취득하신 선생님들이 기관 현장에서 더 자신 있게 수업하실 수 있도록 커리큘럼, 교재, 연습곡집, 수업용 PPT를 지속적으로 연구하고 개발합니다.
```

#### 디자인

- 배경: 청록색 풀블리드 섹션
- 텍스트는 흰색
- `association-intro.jpg`를 카드 또는 종이 질감 패널로 넣는다.
- 버튼: `협회소개 바로가기`

---

### Section 3. Five Benefits

#### 제목

```txt
전문강사를 위한 5가지 장점
```

#### 카드 5개

1. 체계적인 커리큘럼
2. 단계적인 교재, 연습곡집, PPT, 수업교구 활용
3. 기관 수업에 특화된 교수법과 수업 노하우 활용
4. 기관별·대상별 상황과 특성에 맞춘 수업
5. 지속적인 수업 연구·개발·업그레이드

#### 디자인

- 참고 사이트식 중앙 정렬 대제목 + 하단 카드 그리드
- 카드 배경은 민트, 크림, 핑크, 옅은 오렌지 톤으로 교차
- 카드 숫자를 매우 크게 배치한다.

---

### Section 4. Institution Classes

#### 제목

```txt
생활음악 분야 클래스 소개
```

#### 설명

```txt
하나의 수업에서도 두 가지 이상의 악기를 경험할 수 있는 융합형 생활음악 수업을 제안합니다.
기관의 대상, 공간, 예산, 수업 목표에 맞춰 악기와 커리큘럼을 조합합니다.
```

#### 구성

- 필터 탭: 전체, 현악, 리듬, 힐링, 합주, 보컬, 반주
- 클래스 카드: 악기명, 1줄 설명, 추천 대상, 수업 형태
- 대표 융합수업 예시:
  - 기타+우쿨렐레
  - 컵타+아살라토
  - 칼림바+텅드럼
  - 핸드벨+톤차임
  - 실로폰+공명실로폰
  - 젬베+카혼
  - 난타+장구난타

#### 디자인

- `class-map.jpg` 전체 이미지는 섹션 하단에 “전체 클래스 한눈에 보기” 카드로 삽입
- 카드 hover 시 악기 아이콘이 살짝 떠오른다.
- 모바일에서는 2열이 아니라 1열 카드로 쌓는다.

---

### Section 5. Certification Courses

#### 제목

```txt
자격과정 한눈에 보기
```

#### 설명

```txt
기초부터 배우는 급수별 과정, 경력자를 위한 속성과정, 수업 퀄리티를 높이는 융합과정, 장기 심화과정까지 단계적으로 운영합니다.
```

#### UI

- 4개 탭으로 구성:
  1. 급수별 자격과정
  2. 속성과정
  3. 융합수업
  4. 심화수업
- 각 탭에는 요약 카드 + 해당 이미지 썸네일 + 자세히 보기 버튼
- “자격과정 문의하기” CTA는 섹션 우측 하단 또는 모바일 고정 버튼으로 둔다.

---

### Section 6. Teaching Materials

#### 제목

```txt
수업 현장에서 바로 쓰는 맞춤형 교재
```

#### 설명

```txt
대상과 연령에 맞게 구성된 칼림바·우쿨렐레 연습곡집 시리즈를 제공하여 자격과정 이후 실제 기관수업에 활용할 수 있도록 돕습니다.
```

#### 콘텐츠

- 칼림바 연습곡집 시리즈
- 우쿨렐레 연습곡집 시리즈
- 수업용 PPT
- 수업용 교구
- 연습곡집 무료증정 안내는 실제 운영 정책 확인 후 표시

#### 디자인

- 참고 사이트의 강한 컬러 섹션처럼 핑크 또는 오렌지 배경 사용
- 연습곡집 이미지는 카드 2개로 크게 배치
- 버튼: `교재 시리즈 보기`

---

### Section 7. Stories / News

#### 제목

```txt
수업과 강사의 성장을 기록합니다
```

#### 카드 유형

- 공지사항
- 기관수업 사례
- 강사 활동 소식
- 갤러리

#### 주의

- 실제 게시물이 없으면 더미 후기를 만들지 말고 “콘텐츠 준비 중” 상태를 디자인한다.
- 추후 CMS가 붙을 수 있도록 `stories` 데이터 구조를 만들어 둔다.

---

### Section 8. Final CTA

#### 카피

```txt
영문 타이틀: Start with Life Music
한글 타이틀: 기관에 맞는 생활음악 수업을 함께 설계해보세요
본문: 수업 대상, 기관 환경, 예산, 희망 악기를 알려주시면 적합한 커리큘럼과 자격과정을 안내드립니다.
CTA 1: 기관수업 문의하기
CTA 2: 자격과정 문의하기
```

#### 디자인

- 코랄 또는 청록색 풀블리드 섹션
- 흰색 라인 버튼
- 문의 전화와 카페 주소 표시
- 모바일에서는 하단 고정 CTA와 중복되지 않도록 버튼 간격 조정

---

## 9. 서브페이지 설계

### `/about` 협회소개

#### 페이지 구성

1. Hero: “기관 수업에 특화된 협회”
2. 미션: 실력과 교수법을 겸비한 전문강사 양성
3. 협회 소개문: `association-intro.jpg`의 내용을 웹 문장으로 재편집
4. 연구·개발 영역: 커리큘럼, 교재, 연습곡집, PPT, 수업교구
5. 강사 지원 구조: 자격취득 후 수업 활용 자료 제공
6. CTA: 기관수업 또는 자격과정 문의

#### 톤

- 과도하게 화려하기보다 신뢰감 있는 청록색 중심
- 중간중간 큰 영문 display title을 넣어 감각 유지

---

### `/institution-classes` 기관수업

#### 페이지 구성

1. Hero: “기관별·대상별 상황에 맞춘 생활음악 수업”
2. 출강 기관 혜택 3개:
   - 기관 수업과 자격증 과정 연계
   - 비대면 온라인 수업 지원
   - 수업용 악기·기자재 대여 가능
3. 전문강사의 5가지 장점
4. 생활음악 클래스 그리드
5. 융합수업 예시 카드
6. 기관 문의 폼으로 이동하는 CTA

#### 특화 UI

- 기관 담당자를 위한 빠른 선택 폼:
  - 대상: 유아 / 초등 / 청소년 / 성인 / 시니어 / 장애인 / 기타
  - 희망 악기: 다중 선택
  - 수업 형태: 단기특강 / 정규수업 / 자격연계 / 온라인 / 기타
  - 지역: 텍스트 입력
  - 예산: 선택 입력 또는 직접 입력

---

### `/certification` 자격과정

#### 페이지 구성

1. Hero: “수업 현장에서 바로 쓰이는 자격과정”
2. 자격과정 소개문
3. 4개 과정 탭:
   - 급수별 자격과정
   - 자격 과정별 속성과정
   - 카테고리별 융합수업
   - 자격 과정별 심화수업
4. 과정별 상세 카드와 이미지 확대 보기
5. FAQ
6. 문의 CTA

#### FAQ 예시

```txt
Q. 악기를 처음 배워도 가능한가요?
A. 과정에 따라 기초부터 시작할 수 있는 급수별 과정과 경험자를 위한 속성과정이 나뉘어 있습니다.

Q. 기관수업을 위한 자료도 제공되나요?
A. 과정에 따라 교재, 연습곡집, PPT, 교구 활용법을 안내합니다. 구체적인 제공 범위는 과정별로 확인이 필요합니다.

Q. 여러 악기를 함께 배우는 과정도 있나요?
A. 네, 칼림바+텅드럼, 기타+우쿨렐레, 난타+장구난타 등 다양한 융합수업 과정이 준비되어 있습니다.
```

---

### `/materials` 교재·콘텐츠

#### 페이지 구성

1. Hero: “수업 대상에 맞춘 연습곡집 시리즈”
2. 칼림바 연습곡집 카드
3. 우쿨렐레 연습곡집 카드
4. 수업용 PPT와 교구 소개
5. 자격취득자 제공 혜택 안내. 단, 실제 정책 확정 전에는 “과정별 제공 범위 확인 필요”로 표시
6. 문의 CTA

---

### `/stories` 수업사례·소식

#### 페이지 구성

1. 공지사항 리스트
2. 기관수업 사례 리스트
3. 강사 활동 소식
4. 갤러리

#### MVP 처리

- 실제 CMS가 없으면 `content/stories.ts` 정적 배열로 시작한다.
- 실제 게시물이 없으면 빈 상태 컴포넌트:
  - “새로운 수업사례를 준비 중입니다.”
  - “협회 소식은 곧 업데이트됩니다.”

---

### `/contact` 문의

#### 페이지 구성

1. Hero: “수업과 자격과정 문의”
2. 문의 유형 선택:
   - 기관수업 문의
   - 자격과정 문의
   - 교재 문의
   - 기타 문의
3. 문의 폼
4. 카페/전화 안내
5. 개인정보 수집 동의 체크

#### 폼 필드

```txt
- 문의 유형 required
- 이름 required
- 기관명 optional
- 연락처 required
- 이메일 optional
- 지역 optional
- 희망 악기/과정 optional
- 문의 내용 required
- 개인정보 수집 동의 required
```

#### 검증

- 연락처는 숫자, 하이픈, 점, 공백 허용
- 문의 내용은 최소 10자
- 개인정보 동의 없으면 제출 불가
- 제출 후 성공/실패 토스트 표시

---

## 10. 컴포넌트 상세 지시

### Header

```txt
- 데스크톱: 좌측 로고, 중앙 메뉴, 우측 CTA 버튼
- 메뉴 hover 시 MegaMenu 표시
- 스크롤 전: 투명 또는 크림 배경
- 스크롤 후: backdrop-blur + 얇은 border-bottom
- CTA: 문의하기
- 모바일: 로고 + 햄버거 버튼 + 전체 화면 drawer
```

### MegaMenu

```txt
- 2열 또는 3열 카드형 메뉴
- 각 메뉴 그룹에 1줄 설명 추가
- hover 시 청록색 accent line
- 메뉴가 너무 복잡해 보이지 않도록 높이 제한
```

### FloatingCTA

```txt
- 데스크톱: 우측 하단 pill 버튼 2개, “기관수업 문의”, “자격과정 문의”
- 모바일: 하단 sticky bar, 버튼 2개
- 스크롤 최상단에서는 과하게 튀지 않도록 opacity 0.92
```

### Reveal

```tsx
type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
};
```

- Framer Motion을 사용하되 `prefers-reduced-motion` 고려
- 모든 섹션 제목과 카드에 재사용

### SectionLabel

```txt
- 작은 pill 형태
- 예: ASSOCIATION, INSTITUTION CLASS, CERTIFICATION, MATERIALS
- 대문자 영문 + 작은 음표 아이콘
```

### CourseTabs

```txt
- 탭 클릭 시 부드럽게 내용 전환
- 각 탭에 대표 컬러 지정:
  - 급수별: orange
  - 속성과정: blue
  - 융합수업: navy
  - 심화수업: teal
- 키보드 접근성 지원
```

### ImageModal

```txt
- 자격과정 포스터 이미지를 클릭하면 모달 확대
- ESC로 닫기
- 배경 스크롤 잠금
- alt 텍스트 제공
```

---

## 11. 접근성·성능·SEO 요구사항

### 접근성

- 모든 버튼은 `button` 또는 의미 있는 `a` 태그 사용
- 이미지 alt 필수
- 메뉴는 키보드로 열고 닫을 수 있어야 함
- 모바일 drawer는 닫기 버튼과 ESC 닫기 지원
- 색상 대비는 WCAG AA 수준을 목표로 한다.
- 애니메이션은 `prefers-reduced-motion` 지원

### 성능

- `next/image` 사용
- 대형 포스터 이미지는 적정 크기로 리사이즈한 WebP도 생성
- LCP가 되는 히어로 이미지는 priority 처리
- 이미지 모달용 원본은 lazy load
- 불필요한 외부 라이브러리 최소화

### SEO

```txt
title: 한국생활음악강사협회 | 기관수업·자격과정·생활음악 교육
meta description: 기관 수업에 특화된 생활음악 교육 협회. 칼림바, 텅드럼, 우쿨렐레, 난타, 실로폰, 핸드벨 등 자격과정과 기관수업, 교재를 안내합니다.
OG image: 협회 대표 포스터 또는 별도 제작한 1200x630 이미지
```

#### 구조화 데이터

- `Organization` JSON-LD
- 자격과정 페이지에는 `Course` 형태로 확장 가능
- 문의 페이지에는 `ContactPoint` 정보 추가 가능

---

## 12. 바이브코딩 프롬프트 세트

아래부터 실제 AI 코딩 도구에 순서대로 붙여넣을 프롬프트다.

---

# Prompt 0. 역할과 원칙 고정

```txt
너는 한국어 브랜드 사이트를 많이 만든 시니어 프론트엔드 엔지니어이자 UI 디자이너야.

목표는 “한국생활음악강사협회” 홈페이지를 개발하는 것이다. 참고 분위기는 todaymusicgood.com처럼 따뜻하고 감각적인 음악 교육 브랜드 사이트이지만, 원본 사이트의 사진, 문구, 레이아웃, 브랜드 네이밍을 복제하지 말고 협회만의 청록색 중심 브랜드로 새롭게 디자인해야 한다.

사이트의 핵심 정체성은 다음과 같다.
- 기관 수업에 특화된 생활음악 교육 협회
- 자격과정, 기관수업, 교재, 연습곡집, PPT, 수업교구를 연구·개발
- 강사가 자격증 취득 후 실제 기관수업 현장에서 바로 사용할 수 있는 자료와 교수법을 제공
- 칼림바, 텅드럼, 미니하프, 우쿨렐레, 기타, 난타, 실로폰, 핸드벨&톤차임 등 다양한 생활음악 수업을 운영

개발 원칙:
1. Next.js App Router, TypeScript, Tailwind CSS 기준으로 개발한다.
2. 콘텐츠는 우선 src/content/*.ts 정적 데이터로 관리한다.
3. 디자인은 크림색 배경, 청록색 메인, 코랄/오렌지 포인트, 큰 이탤릭 영문 타이포그래피, 넉넉한 여백, 카드형 섹션을 사용한다.
4. 데스크톱과 모바일 반응형을 모두 완성한다.
5. 실제 데이터가 없는 수치, 후기, 기관명, 강사명은 절대 임의 생성하지 않는다.
6. 각 작업 단계가 끝날 때 변경 파일 목록, 실행 명령, 확인 결과를 보고한다.
7. 접근성, 성능, SEO를 기본 요구사항으로 지킨다.

먼저 프로젝트 구조와 작업 계획을 제안하고, 내가 승인하면 구현을 시작해라.
```

---

# Prompt 1. 프로젝트 스캐폴딩

```txt
Next.js App Router + TypeScript + Tailwind CSS 프로젝트를 기준으로 한국생활음악강사협회 홈페이지의 기본 구조를 만들어줘.

요구사항:
- src/app/layout.tsx, src/app/page.tsx, src/app/globals.css 생성 또는 정리
- 다음 라우트 생성:
  /about
  /institution-classes
  /certification
  /materials
  /stories
  /contact
- components/layout 폴더에 Header, Footer, MobileMenu, MegaMenu, FloatingCTA 컴포넌트 생성
- components/ui 폴더에 Button, Card, Badge, SectionLabel, Reveal 컴포넌트 생성
- components/sections 폴더에 메인 섹션 컴포넌트 파일 생성
- src/content 폴더에 site.ts, navigation.ts, classes.ts, certifications.ts, materials.ts, faqs.ts 생성
- 모든 컴포넌트는 일단 깨지지 않는 placeholder UI로 연결
- npm run lint 또는 타입 체크를 실행할 수 있는 상태로 만들어줘

디자인 토큰:
- primary #069a92
- primary-dark #007a76
- coral #d84f42
- orange #ff8a45
- cream #fffaf2
- pink-soft #fbe7ec
- ink #262a30
- radius-lg 32px

완료 후 변경 파일 목록과 다음 단계 제안을 알려줘.
```

---

# Prompt 2. 글로벌 디자인 시스템 구현

```txt
한국생활음악강사협회 사이트의 글로벌 디자인 시스템을 구현해줘.

globals.css에 다음을 반영해줘.
1. CSS 변수:
   --color-bg, --color-bg-soft, --color-bg-mint, --color-bg-pink
   --color-primary, --color-primary-dark, --color-primary-soft
   --color-coral, --color-orange, --color-yellow, --color-navy
   --color-ink, --color-gray, --color-line
   --radius-sm, --radius-md, --radius-lg, --radius-xl
   --shadow-soft, --shadow-text
2. 기본 body 배경은 cream, 텍스트는 ink
3. 한글 폰트는 Pretendard 또는 Noto Sans KR fallback
4. .container-page, .section, .section-full, .display-title, .korean-lead 유틸 클래스 추가
5. 큰 영문 display title은 italic, letter-spacing -0.05em, text-shadow 옵션 지원
6. prefers-reduced-motion 대응
7. 버튼과 링크 focus-visible 스타일 명확히 설정

Tailwind config가 있다면 색상 토큰을 Tailwind theme로 연결해줘.
없다면 CSS 변수 기반 className으로 처리해도 된다.

완료 후 메인 페이지에 샘플 섹션을 넣어 디자인 토큰이 적용되는지 확인해줘.
```

---

# Prompt 3. 콘텐츠 데이터 입력

```txt
src/content 폴더에 실제 사이트에서 사용할 기본 데이터를 입력해줘.

site.ts:
- name: 한국생활음악강사협회
- englishName: Life Music Lecturer Association Of KOREA
- tagline: 기관 수업에 강한 생활음악 교육 플랫폼
- description: 기관 수업에 특화된 생활음악 커리큘럼, 자격과정, 교재, 수업자료를 연구·개발하는 교육 협회
- contact: phone 010.5655.9152, cafe https://cafe.naver.com/tonguedrum, email/kakao는 빈 문자열

navigation.ts:
- 협회소개, 기관수업, 자격과정, 교재·콘텐츠, 수업사례·소식, 문의
- 각 메뉴에 하위 메뉴와 description 포함

classes.ts:
- 미니하프, 텅드럼, 칼림바, 우쿨렐레, 기타, 기타렐레, 컵타, 밴드, 난타, 장구난타, 실로폰, 핸드벨&톤차임, 가창&합창, 보컬트레이닝, 실용반주
- 각 항목에 category, description, recommendedFor, format 필드 포함

certifications.ts:
- 급수별 자격과정
- 자격 과정별 속성과정
- 카테고리별 융합수업
- 자격 과정별 심화수업
위 4개 그룹을 탭 UI에서 사용할 수 있도록 구조화해줘.

materials.ts:
- 칼림바 연습곡집 시리즈
- 우쿨렐레 연습곡집 시리즈
- 수업용 PPT
- 수업용 교구

faqs.ts:
- 악기 초보 가능 여부
- 속성과정 대상
- 기관수업 자료 제공 여부
- 융합수업 가능 여부
- 문의 및 상담 방법

주의:
실제 운영 정책이 확정되지 않은 내용은 단정하지 말고 “과정별 확인 필요” 또는 “상담 시 안내”로 표현해줘.
```

---

# Prompt 4. Header, MegaMenu, Footer 구현

```txt
Header, MegaMenu, MobileMenu, Footer, FloatingCTA를 완성해줘.

Header 요구사항:
- 데스크톱: 좌측 로고/사이트명, 중앙 메뉴, 우측 “문의하기” 버튼
- 스크롤 전에는 크림 배경에 자연스럽게 묻히고, 스크롤 후에는 backdrop-blur, border-bottom, 약한 shadow 적용
- 메뉴 hover/focus 시 MegaMenu 표시
- active route 표시
- 로고 이미지는 아직 별도 파일이 없으면 텍스트 로고로 시작하되, 나중에 이미지로 교체하기 쉽게 구조화

MegaMenu 요구사항:
- 메뉴 그룹별 하위 링크와 description 표시
- 2~3열 카드 그리드
- hover 시 청록색 라인 또는 배경 강조
- 키보드 포커스 접근 가능

MobileMenu 요구사항:
- 햄버거 클릭 시 drawer 열림
- 닫기 버튼, ESC 닫기
- 링크 클릭 시 닫힘
- 하위 메뉴는 accordion 형태

FloatingCTA 요구사항:
- 데스크톱 우측 하단: 기관수업 문의, 자격과정 문의
- 모바일 하단 sticky bar: 두 버튼을 1:1 비율로 배치
- /contact 페이지에서는 과하게 중복되지 않도록 표시를 약하게 하거나 숨김

Footer 요구사항:
- 협회명, 영문명, 간단 설명
- 1차 메뉴 링크
- 문의 전화와 카페 주소
- copyright
- 배경은 ink 또는 primary-dark, 텍스트는 흰색 계열
```

---

# Prompt 5. 메인 HeroSection 구현

```txt
메인 페이지 첫 화면 HeroSection을 완성해줘.

콘텐츠:
- Label: Life Music Lecturer Association Of KOREA
- English title: Life Music, Teach Better
- Korean title: 기관 수업에 강한 생활음악 교육 플랫폼
- Body: 한국생활음악강사협회는 기관 수업에 바로 활용할 수 있는 커리큘럼, 자격과정, 교재, 수업자료를 연구·개발합니다.
- CTA 1: 기관수업 문의하기 -> /contact?type=institution
- CTA 2: 자격과정 보기 -> /certification
- Keyword pills: 기관수업, 자격과정, 교재개발, 융합수업

디자인:
- 배경 cream
- 데스크톱에서는 좌측 텍스트, 우측 비주얼
- 우측 비주얼은 public/assets/illustrations/music-park.png가 있으면 사용하고, 없으면 악기 아이콘/추상 음표 카드 placeholder
- 큰 영문 title은 italic, 80~128px 범위, 모바일 48px 이상
- 배경에 얇은 오선지 곡선 느낌의 decorative line을 CSS pseudo-element 또는 SVG로 추가
- CTA는 primary filled + outline 조합
- 1440px 데스크톱에서도 여백이 살아야 함
- 375px 모바일에서 title이 잘리지 않아야 함

모션:
- title, body, CTA 순서로 fade-up
- 우측 비주얼은 약한 scale/fade
- reduced motion 대응
```

---

# Prompt 6. 메인 섹션 전체 구현

```txt
메인 page.tsx를 다음 섹션 순서로 완성해줘.

1. HeroSection
2. IntroSection
3. BenefitsSection
4. InstrumentClassSection
5. CertificationSection
6. MaterialsSection
7. StoriesSection
8. ContactCTASection

각 섹션 요구사항:

IntroSection:
- 영문 display title: About the Association
- 한글 제목: 기관 수업에 특화된 협회입니다
- 협회가 기관수업, 자격취득 강사 지원, 커리큘럼/교재/연습곡집/PPT 연구개발을 한다는 내용
- association-intro.jpg가 있으면 카드 이미지로 사용
- 배경 primary 또는 primary-dark, 텍스트 흰색

BenefitsSection:
- 전문강사를 위한 5가지 장점 카드
- 숫자 01~05를 크게 표시
- 카드별 hover 효과

InstrumentClassSection:
- 생활음악 분야 클래스 소개
- classes.ts 데이터를 카드로 표시
- 필터 탭: 전체, 현악, 리듬, 힐링, 합주, 보컬, 반주
- class-map.jpg가 있으면 “전체 클래스 한눈에 보기” 카드로 삽입

CertificationSection:
- certificationGroups 데이터를 4개 탭으로 표시
- 각 탭에 요약, 주요 항목, 대표 이미지 표시
- 이미지 클릭 시 확대 모달 준비
- CTA: 자격과정 자세히 보기, 문의하기

MaterialsSection:
- 칼림바/우쿨렐레 연습곡집 시리즈 카드 2개
- materials.ts 데이터 사용
- 배경은 pink-soft 또는 orange 계열로 감각적인 섹션 구성

StoriesSection:
- 실제 게시물이 없으면 빈 상태 카드로 표시
- 공지사항, 기관수업 사례, 강사 활동 소식 3개 placeholder 카테고리

ContactCTASection:
- 강한 컬러 블록
- 제목: 기관에 맞는 생활음악 수업을 함께 설계해보세요
- CTA: 기관수업 문의하기, 자격과정 문의하기
- 연락처와 카페 주소 표시

완료 후 데스크톱/모바일 주요 화면을 확인하고 깨지는 부분을 고쳐줘.
```

---

# Prompt 7. 자격과정 페이지 구현

```txt
/certification 페이지를 상세하게 구현해줘.

페이지 구조:
1. PageHero
   - title: 수업 현장에서 바로 쓰이는 자격과정
   - subtitle: 기초부터 속성, 융합, 심화까지 단계적으로 운영합니다.
   - CTA: 상담 문의하기
2. 자격과정 소개 카드
   - 기관 수업에 출강하는 강사를 지원하는 협회
   - 기관 수업 연구·개발·업그레이드 중심 운영
   - 실력과 교수법을 겸비한 전문강사 양성
3. 4개 과정 탭
   - 급수별 자격과정
   - 자격 과정별 속성과정
   - 카테고리별 융합수업
   - 자격 과정별 심화수업
4. 각 탭 상세
   - 데이터 기반 카드 리스트
   - 대표 포스터 이미지
   - 이미지 클릭 시 확대 모달
5. FAQ
6. 문의 CTA

디자인:
- 상단은 cream 배경 + 큰 italic display title
- 탭은 sticky가 아닌 일반 탭으로 하되 모바일에서 가로 스크롤 가능
- 각 과정은 카드형으로 구분하고 색상 포인트를 다르게 적용
- poster 이미지는 원본 전체가 보이도록 object-contain

주의:
- 과정 시간/구성은 데이터에 있는 것만 표시
- 자격증 발급 조건, 비용, 일정 등 확인되지 않은 내용은 임의 생성 금지
```

---

# Prompt 8. 기관수업 페이지 구현

```txt
/institution-classes 페이지를 구현해줘.

페이지 구조:
1. PageHero
   - title: 기관별·대상별 상황에 맞춘 생활음악 수업
   - subtitle: 대상, 공간, 예산, 수업 목표에 맞춰 악기와 커리큘럼을 조합합니다.
2. 출강 기관 혜택 3개
   - 기관 수업과 자격증 과정 연계
   - 비대면 온라인 수업 지원
   - 수업용 악기·기자재 대여 가능
3. 전문강사의 5가지 장점
4. 클래스 카테고리 그리드
   - classes.ts 데이터 사용
5. 융합수업 예시
   - 기타+우쿨렐레
   - 컵타+아살라토
   - 칼림바+텅드럼
   - 핸드벨+톤차임
   - 실로폰+공명실로폰
   - 젬베+카혼
   - 난타+장구난타
6. 기관수업 문의 CTA

특화 UI:
- “우리 기관에 맞는 수업 찾기” mini form 추가
- 대상, 희망 악기, 수업 형태, 지역 입력
- 제출 버튼은 /contact?type=institution으로 이동하면서 query를 넘기거나 상태를 전달

디자인:
- 청록색과 핑크 배경을 섞어 부드럽게 구성
- class-feature-poster.jpg, institution-benefits.jpg가 있으면 적절히 사용
- 모바일에서는 이미지를 먼저 보여주기보다 핵심 혜택 카드가 먼저 나오게 구성
```

---

# Prompt 9. 협회소개 페이지 구현

```txt
/about 페이지를 구현해줘.

페이지 구조:
1. PageHero
   - title: 기관 수업에 특화된 협회입니다
   - subtitle: 현장에 필요한 커리큘럼과 자료를 연구·개발합니다.
2. 협회 소개문
   - 저희 협회는 기관 수업에 특화되어 있는 협회입니다.
   - 자격증을 취득한 선생님들이 기관에서 수업할 때 도움이 될 수 있도록 협회장과 교육이사들이 최선을 다합니다.
   - 기관 수업 현장에서 얻은 아이디어로 커리큘럼, 교재, 연습곡집, 수업용 PPT를 지속적으로 연구·개발합니다.
3. 미션 카드 3개
   - 전문강사 양성
   - 기관수업 콘텐츠 개발
   - 현장 중심 교수법 연구
4. 연구·개발 프로세스
   - 현장 수업 관찰
   - 커리큘럼 설계
   - 교재/연습곡집 제작
   - PPT/교구 개발
   - 강사 피드백 반영
5. 문의 CTA

디자인:
- association-intro.jpg를 본문 중간에 넣되, 텍스트가 작은 원본 이미지를 단순히 크게 보여주는 데 의존하지 말고 웹 텍스트로 재구성
- 전체 톤은 신뢰감 있는 white/cream + primary
```

---

# Prompt 10. 교재·콘텐츠 페이지 구현

```txt
/materials 페이지를 구현해줘.

페이지 구조:
1. PageHero
   - title: 대상과 연령에 맞춘 연습곡집 시리즈
   - subtitle: 자격과정 이후 실제 기관수업에서 활용할 수 있는 맞춤형 교재와 자료를 제공합니다.
2. 연습곡집 시리즈 카드
   - 칼림바 연습곡집 시리즈
   - 우쿨렐레 연습곡집 시리즈
   - 각 카드에 tags: 저학년용, 청소년용, 성인용, 7080
3. 수업용 콘텐츠
   - PPT
   - 교구
   - 연습곡집
   - 온라인 수업자료
4. 제공 범위 안내
   - 실제 과정별 제공 범위는 상담 시 확인 필요
5. 문의 CTA

디자인:
- 밝은 크림 배경과 핑크/퍼플 포인트
- 책 표지 이미지를 카드 안에 넣고 shadow-soft 적용
- 이미지가 작게 보이지 않도록 데스크톱에서는 2열 대형 카드
```

---

# Prompt 11. 문의 페이지와 폼 구현

```txt
/contact 페이지와 문의 폼을 구현해줘.

폼 필드:
- 문의 유형: 기관수업 문의 / 자격과정 문의 / 교재 문의 / 기타 문의, required
- 이름, required
- 기관명, optional
- 연락처, required
- 이메일, optional
- 지역, optional
- 희망 악기 또는 과정, optional
- 문의 내용, required, 최소 10자
- 개인정보 수집 동의, required

기능:
- React Hook Form + Zod로 검증
- 제출 API가 아직 없으면 콘솔 출력과 성공 상태 표시까지만 구현
- 나중에 API route 또는 외부 폼 서비스로 교체하기 쉽게 onSubmit을 분리
- URL query type=institution 또는 type=certification이 있으면 문의 유형을 자동 선택
- 제출 성공 시 “문의가 접수되었습니다. 확인 후 연락드리겠습니다.” 메시지 표시

디자인:
- 좌측: 문의 안내, 전화, 카페 주소, 운영 안내
- 우측: 폼 카드
- 모바일에서는 폼이 먼저 나오게 해도 됨
- 개인정보 동의 문구는 간단하게 작성하되 실제 운영 전 법무/정책 확인 필요 표시
```

---

# Prompt 12. 스토리·소식 페이지 구현

```txt
/stories 페이지를 구현해줘.

요구사항:
- 공지사항, 기관수업 사례, 강사 활동 소식, 갤러리 탭
- 현재 실제 게시물 데이터가 없으면 빈 상태 UI를 우아하게 표시
- content/stories.ts에 샘플 구조만 만들고 실제 후기나 기관명은 임의 생성하지 않음
- 카드 컴포넌트는 추후 CMS 데이터가 붙어도 재사용 가능하게 설계

빈 상태 문구:
- 공지사항: 새로운 공지사항을 준비 중입니다.
- 기관수업 사례: 수업사례 콘텐츠를 준비 중입니다.
- 강사 활동 소식: 강사 활동 소식을 곧 업데이트하겠습니다.
- 갤러리: 수업 현장 사진을 준비 중입니다.
```

---

# Prompt 13. 이미지 최적화와 모달 구현

```txt
public/assets에 있는 이미지 사용을 정리하고 최적화해줘.

요구사항:
1. 모든 이미지 import 또는 경로를 실제 파일명에 맞게 연결
2. next/image 적용
3. 대형 포스터 이미지는 카드 썸네일로 표시하고 클릭 시 ImageModal로 확대
4. 이미지 alt 텍스트 작성
5. 모바일에서 원본 포스터의 작은 글씨가 안 보이는 문제를 해결하기 위해 “핵심 정보는 반드시 HTML 텍스트로도 제공”
6. LCP에 해당하는 hero 이미지만 priority
7. 나머지는 lazy load
8. object-fit은 상황에 맞게 contain/cover 구분

만약 에셋 파일이 프로젝트에 없으면 깨진 이미지 대신 gradient placeholder와 안내 문구를 표시해줘.
```

---

# Prompt 14. 반응형·접근성 QA

```txt
사이트 전체의 반응형과 접근성을 점검하고 수정해줘.

확인 뷰포트:
- 375x812 모바일
- 768x1024 태블릿
- 1440x900 데스크톱

점검 항목:
- Header/MobileMenu가 겹치지 않는지
- Hero title이 모바일에서 잘리지 않는지
- FloatingCTA가 폼 제출 버튼을 가리지 않는지
- 카드 그리드가 모바일에서 1열로 자연스럽게 쌓이는지
- 탭 UI가 키보드로 작동하는지
- 이미지 모달이 ESC로 닫히는지
- focus-visible이 보이는지
- alt가 비어 있지 않은지
- 배경 컬러와 텍스트 대비가 충분한지
- prefers-reduced-motion이 반영되는지

수정 후 어떤 문제를 발견했고 어떻게 고쳤는지 목록으로 보고해줘.
```

---

# Prompt 15. SEO, 메타데이터, 배포 준비

```txt
SEO와 배포 준비를 마무리해줘.

요구사항:
1. app/layout.tsx에 기본 metadata 설정
2. 각 페이지별 title, description 설정
3. Open Graph metadata 추가
4. Organization JSON-LD 추가
5. sitemap.ts, robots.ts 생성
6. 404 not-found 페이지 생성
7. loading 상태가 필요한 곳이 있으면 추가
8. npm run build 통과
9. Lighthouse 기준으로 성능, 접근성, SEO를 개선할 수 있는 항목 정리

기본 메타:
- title template: %s | 한국생활음악강사협회
- default title: 한국생활음악강사협회 | 기관수업·자격과정·생활음악 교육
- description: 기관 수업에 특화된 생활음악 교육 협회. 칼림바, 텅드럼, 우쿨렐레, 난타, 실로폰, 핸드벨 등 자격과정과 기관수업, 교재를 안내합니다.

주의:
- 실제 주소, 사업자번호, 이메일이 없으면 임의 생성하지 말고 비워두거나 TODO로 남겨줘.
```

---

## 13. 최종 검수 체크리스트

### 브랜드·디자인

- [ ] 참고 사이트처럼 감각적이지만 원본을 복제하지 않는다.
- [ ] 협회 자료의 청록색 정체성이 분명하다.
- [ ] 큰 영문 이탤릭 타이포그래피와 한국어 설명의 조합이 살아 있다.
- [ ] 섹션마다 배경색과 이미지 배치가 달라 지루하지 않다.
- [ ] 일러스트와 포스터가 정보 전달용으로 잘 활용된다.

### 콘텐츠

- [ ] 첫 화면에서 기관수업 특화 협회임을 5초 안에 이해할 수 있다.
- [ ] 기관 담당자에게 제공하는 혜택이 명확하다.
- [ ] 자격과정 4종이 탭으로 정리되어 있다.
- [ ] 클래스/악기 종류가 빠짐없이 정리되어 있다.
- [ ] 교재/연습곡집 시리즈가 별도 섹션으로 소개된다.
- [ ] 실제 확인되지 않은 수치, 후기, 강사명, 기관명이 없다.

### 기능

- [ ] 데스크톱 메뉴와 모바일 메뉴가 정상 작동한다.
- [ ] 문의 폼 검증이 작동한다.
- [ ] URL query로 문의 유형이 자동 선택된다.
- [ ] 이미지 모달이 정상 작동한다.
- [ ] Floating CTA가 페이지 사용을 방해하지 않는다.

### 기술

- [ ] TypeScript 에러 없음
- [ ] lint 통과
- [ ] build 통과
- [ ] 모든 이미지 alt 작성
- [ ] next/image 적용
- [ ] 모바일 CLS 최소화
- [ ] SEO metadata 적용
- [ ] sitemap, robots 적용

---

## 14. 개발자가 임의로 판단하지 말아야 할 항목

아래는 실제 운영자 확인 전까지 확정하지 않는다.

```txt
- 자격증 발급 비용
- 수업료
- 자격과정 일정
- 협회 주소
- 사업자등록번호
- 이메일
- 카카오톡 채널
- 실제 출강 기관명
- 실제 수강 후기
- 강사 프로필
- 자격증 발급 기관/인증 관련 법적 표현
- “무료증정”의 조건과 범위
```

이 항목들은 화면에 노출해야 한다면 `관리자 입력 예정`, `상담 시 안내`, `과정별 확인 필요`로 표현한다.

---

## 15. 추가 개선 아이디어

초기 버전 완성 후 아래 기능을 추가하면 좋다.

1. **과정 추천 진단**  
   대상, 수업 경험, 희망 악기, 기관 출강 여부를 선택하면 적합한 자격과정을 추천한다.

2. **기관수업 견적 문의 플로우**  
   대상, 인원, 기간, 악기 보유 여부, 지역을 입력하면 문의 내용이 자동 생성된다.

3. **교재 미리보기**  
   연습곡집 표지와 샘플 페이지를 슬라이더로 제공한다.

4. **강사 전용 자료실**  
   로그인 후 수업용 PPT, 연습곡집, 교구 안내 자료를 다운로드한다.

5. **수업사례 CMS**  
   공지사항, 기관수업 사례, 갤러리를 관리자 페이지나 CMS로 업데이트한다.

6. **자격과정 일정 캘린더**  
   공개 가능한 교육 일정이 생기면 월별 캘린더와 신청 버튼을 제공한다.

---

## 16. 한 번에 붙여넣는 마스터 프롬프트

아래 프롬프트는 전체 개발 방향을 한 번에 전달할 때 사용한다. 다만 실제 구현은 Prompt 1~15처럼 단계별로 진행하는 것을 권장한다.

```txt
너는 시니어 프론트엔드 엔지니어이자 한국어 브랜드 사이트 UI 디자이너야. “한국생활음악강사협회” 홈페이지를 Next.js App Router + TypeScript + Tailwind CSS로 개발해줘.

참고 분위기는 todaymusicgood.com처럼 따뜻하고 감각적인 음악 교육 브랜드 사이트다. 단, 원본 사이트의 사진, 문구, 레이아웃, 브랜드 네이밍을 복제하지 말고, 분위기만 참고하여 한국생활음악강사협회만의 청록색 중심 브랜드로 새롭게 디자인해라.

브랜드 핵심:
- 한국생활음악강사협회 / Life Music Lecturer Association Of KOREA
- 기관 수업에 특화된 생활음악 교육 협회
- 자격과정, 기관수업, 교재, 연습곡집, PPT, 수업교구를 연구·개발
- 자격증 취득 후 실제 기관수업 현장에서 바로 활용 가능한 커리큘럼과 교수법을 제공
- 칼림바, 텅드럼, 미니하프, 우쿨렐레, 기타, 기타렐레, 드럼, 타악기, 밴드, 난타, 장구난타, 실로폰, 핸드벨&톤차임, 컵타, 소고, 가창&합창, 보컬트레이닝, 실용반주 등 생활음악 클래스를 다룬다.

메인 메뉴:
- 협회소개
- 기관수업
- 자격과정
- 교재·콘텐츠
- 수업사례·소식
- 문의

페이지:
- / 메인
- /about 협회소개
- /institution-classes 기관수업
- /certification 자격과정
- /materials 교재·콘텐츠
- /stories 수업사례·소식
- /contact 문의

디자인:
- 크림색 배경, 청록색 메인, 코랄/오렌지 포인트
- 큰 영문 italic display title + 한국어 headline 조합
- 넉넉한 여백, 풀블리드 컬러 섹션, 얇은 라인 버튼, 카드형 콘텐츠
- 음악 오선지, 음표, 악기 아이콘을 은은한 장식으로 사용
- 모바일에서는 세로형 카드와 하단 sticky CTA 적용

메인 페이지 섹션:
1. Hero: “Life Music, Teach Better” / “기관 수업에 강한 생활음악 교육 플랫폼” / CTA 2개
2. 협회소개: 기관수업 특화 협회 설명
3. 전문강사 5가지 장점
4. 생활음악 분야 클래스 소개
5. 자격과정 탭: 급수별, 속성, 융합, 심화
6. 교재·연습곡집 시리즈: 칼림바, 우쿨렐레
7. 수업사례·소식 빈 상태 또는 카드
8. 최종 문의 CTA

필수 기능:
- Header + MegaMenu + Mobile drawer
- Footer
- Floating CTA
- 자격과정 탭
- 클래스 필터
- 이미지 모달
- 문의 폼 with React Hook Form + Zod
- SEO metadata, sitemap, robots
- 접근성: alt, focus-visible, keyboard nav, prefers-reduced-motion

콘텐츠는 src/content/*.ts 정적 데이터로 구조화해라. 실제 확인되지 않은 수치, 후기, 기관명, 강사명, 일정, 비용, 주소, 이메일은 절대 임의 생성하지 말고 TODO 또는 “상담 시 안내”로 처리해라.

각 단계 완료 후 변경 파일 목록, 실행한 검사 명령, 확인 결과를 보고해라. 최종적으로 npm run build가 통과되도록 만들어라.
```
