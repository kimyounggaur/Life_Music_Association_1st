export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-header ${align === "center" ? "center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="lead">{description}</p> : null}
    </div>
  );
}
