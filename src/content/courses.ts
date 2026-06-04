import { assets } from "./site";

export const courseTypes = [
  {
    id: "level",
    no: "01",
    title: "급수별 자격과정",
    href: "/courses/level",
    color: "var(--course-level)",
    when: "해당 과정을 기초부터 배우고 싶은 경우",
    summary: "기초부터 단계적으로 배우는 자격과정입니다.",
    image: assets.courseLevel,
    groups: [
      {
        label: "1급~3급 자격과정",
        instruments: ["칼림바", "텅드럼", "미니하프", "기타", "우쿨렐레", "기타렐레", "밴드", "드럼", "타악기"]
      },
      {
        label: "1급~2급 자격과정",
        instruments: ["가창합창", "보컬", "난타", "장구난타", "스푼난타", "실로폰", "핸드벨&톤차임", "컵타", "소고"]
      }
    ]
  },
  {
    id: "fast",
    no: "02",
    title: "자격 과정별 속성과정",
    href: "/courses/fast",
    color: "var(--course-fast)",
    when: "해당 과정에 대한 수업 경험과 연주경력이 있는 경우",
    summary: "경력자를 위한 1급 & 2급 동시 취득 과정입니다.",
    image: assets.courseFast,
    groups: [
      {
        label: "6시간 과정",
        instruments: ["칼림바", "텅드럼", "미니하프", "기타", "우쿨렐레", "기타렐레", "드럼", "타악기", "난타", "장구난타", "가창합창", "보컬", "밴드"]
      },
      {
        label: "4시간 과정",
        instruments: ["실로폰", "핸드벨&톤차임", "컵타", "스푼난타", "소고"]
      }
    ]
  },
  {
    id: "fusion",
    no: "03",
    title: "카테고리별 융합수업",
    href: "/courses/fusion",
    color: "var(--course-fusion)",
    when: "해당 과정의 퀄리티를 업그레이드하거나 융합수업 능력이 필요한 경우",
    summary: "두 가지 이상 악기를 조합해 기관수업의 폭을 넓히는 과정입니다.",
    image: assets.courseFusion
  },
  {
    id: "advanced",
    no: "04",
    title: "자격 과정별 심화수업",
    href: "/courses/advanced",
    color: "var(--course-advanced)",
    when: "해당 과정의 수업 능력 업그레이드가 필요한 경우",
    summary: "수업 역량을 더 깊게 다지는 심화과정입니다.",
    image: assets.courseAdvanced,
    durations: ["4주 단기 심화과정", "8주 단기 심화과정", "12주 심화과정", "24주 심화과정"]
  }
] as const;

export const fusionGroups = [
  {
    group: "칼림바·텅드럼·미니하프 군",
    items: [
      { title: "칼림바 + 텅드럼", time: "칼림바 5시간 / 텅드럼 5시간" },
      { title: "칼림바 + 미니하프", time: "칼림바 3시간 / 미니하프 7시간" },
      { title: "텅드럼 + 미니하프", time: "텅드럼 3시간 / 미니하프 7시간" }
    ]
  },
  {
    group: "기타·우쿨렐레·기타렐레 군",
    items: [
      { title: "기타 + 우쿨렐레", time: "기타 7시간 / 우쿨렐레 3시간" },
      { title: "기타 + 기타렐레", time: "기타 7시간 / 기타렐레 3시간" },
      { title: "우쿨렐레 + 기타렐레", time: "우쿨렐레 4시간 / 기타렐레 6시간" }
    ]
  },
  {
    group: "드럼·타악기 군",
    items: [
      { title: "드럼 + 젬베", time: "드럼 7시간 / 젬베 3시간" },
      { title: "드럼 + 카혼", time: "드럼 7시간 / 카혼 3시간" },
      { title: "드럼 + 리듬악기", time: "드럼 7시간 / 리듬악기 3시간" }
    ]
  },
  {
    group: "실로폰·핸드벨&톤차임 군",
    items: [{ title: "실로폰 + 핸드벨&톤차임", time: "실로폰 3시간 / 핸드벨&톤차임 3시간", note: "공명실로폰 수업 추가 가능" }]
  },
  {
    group: "가창·보컬 군",
    items: [{ title: "가창합창 + 보컬트레이닝", time: "가창합창 5시간 / 보컬트레이닝 5시간" }]
  },
  {
    group: "난타·장구난타·소고난타 군",
    note: "소고난타 수업 추가 가능",
    items: [
      { title: "난타 + 장구난타", time: "난타 5시간 / 장구난타 5시간" },
      { title: "난타 + 소고난타", time: "난타 5시간 / 소고난타 2시간" },
      { title: "장구난타 + 소고난타", time: "장구난타 5시간 / 소고난타 2시간" }
    ]
  },
  {
    group: "컵타·아살라토·스푼난타·소고 군",
    items: [
      { title: "컵타 + 아살라토", time: "컵타 4시간 / 아살라토 6시간" },
      { title: "컵타 + 스푼난타", time: "컵타 3시간 / 스푼난타 3시간" },
      { title: "아살라토 + 스푼난타", time: "아살라토 3시간 / 스푼난타 3시간" },
      { title: "컵타 + 소고", time: "컵타 3시간 / 소고 3시간" },
      { title: "아살라토 + 소고", time: "아살라토 3시간 / 소고 3시간" },
      { title: "스푼난타 + 소고", time: "스푼난타 3시간 / 소고 3시간" }
    ]
  }
];

export const fusionExamples = ["기타 + 우쿨렐레", "컵타 + 아살라토", "칼림바 + 텅드럼", "핸드벨 + 톤차임", "실로폰 + 공명실로폰", "젬베 + 카혼", "난타 + 장구난타"];

export const courseFaqs = [
  { q: "비용과 일정은 어디서 확인하나요?", a: "과정별 비용과 일정은 운영 상황에 따라 달라질 수 있어 별도 문의로 안내합니다." },
  { q: "경력이 있으면 속성과정을 들을 수 있나요?", a: "해당 과정 수업 경험과 연주경력이 있는 경우 속성과정 상담이 가능합니다." },
  { q: "융합수업은 어떤 목적에 적합한가요?", a: "기관 수업의 퀄리티를 업그레이드하거나 두 가지 이상 악기를 조합한 수업 역량이 필요할 때 적합합니다." }
];
