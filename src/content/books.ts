export const songbookSeries = [
  {
    title: "저학년용",
    description: "동요곡의 비중이 큰 연습곡집",
    ratios: [
      { label: "캐롤", value: 40, color: "var(--color-coral)" },
      { label: "동요", value: 30, color: "var(--color-mustard)" },
      { label: "건전가요", value: 30, color: "var(--color-primary-soft)" }
    ]
  },
  {
    title: "청소년용",
    description: "최신가요의 비중이 큰 연습곡집",
    note: "원자료 표기 비율을 유지하고, 차트는 내부 정규화합니다.",
    ratios: [
      { label: "최신가요", value: 50, color: "var(--color-lilac)" },
      { label: "건전가요", value: 30, color: "var(--color-mustard)" },
      { label: "캐롤", value: 25, color: "var(--color-coral)" }
    ]
  },
  {
    title: "성인용",
    description: "일반가요와 건전가요가 적절히 구성",
    ratios: [
      { label: "가요", value: 50, color: "var(--color-primary)" },
      { label: "캐롤", value: 30, color: "var(--color-coral)" },
      { label: "동요", value: 20, color: "var(--color-mustard)" }
    ]
  },
  {
    title: "7080",
    description: "7080곡의 비중이 큰 연습곡집",
    ratios: [
      { label: "7080", value: 50, color: "var(--color-primary)" },
      { label: "캐롤", value: 30, color: "var(--color-coral)" },
      { label: "동요", value: 20, color: "var(--color-mustard)" }
    ]
  }
];
