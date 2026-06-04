export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-hero">
      <div className="staff-lines" aria-hidden />
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </section>
  );
}
