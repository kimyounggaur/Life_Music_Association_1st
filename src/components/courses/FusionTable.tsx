import { fusionGroups } from "@/content/courses";

export function FusionTable() {
  return (
    <div className="fusion-table-grid">
      {fusionGroups.map((group) => (
        <article className="card fusion-table-card" key={group.group}>
          <h3>{group.group}</h3>
          {group.note ? <p className="table-note">{group.note}</p> : null}
          <div className="fusion-table">
            {group.items.map((item) => (
              <div className="fusion-row" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.time}</span>
                {"note" in item && item.note ? <em>{item.note}</em> : null}
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
