type Ratio = {
  label: string;
  value: number;
  color: string;
};

export function DonutChart({ title, ratios }: { title: string; ratios: Ratio[] }) {
  const total = ratios.reduce((sum, item) => sum + item.value, 0);
  const gradient = ratios
    .reduce<{ stops: string[]; current: number }>(
      (acc, item) => {
        const start = (acc.current / total) * 100;
        const next = acc.current + item.value;
        const end = (next / total) * 100;
        return {
          current: next,
          stops: [...acc.stops, `${item.color} ${start}% ${end}%`]
        };
      },
      { current: 0, stops: [] }
    )
    .stops.join(", ");

  return (
    <div className="donut-card">
      <div className="donut" style={{ background: `conic-gradient(${gradient})` }} aria-hidden="true">
        <span>{title}</span>
      </div>
      <ul className="donut-legend" aria-label={`${title} 구성 비율`}>
        {ratios.map((item) => (
          <li key={item.label}>
            <span style={{ background: item.color }} />
            {item.label} {item.value}%
          </li>
        ))}
      </ul>
    </div>
  );
}
