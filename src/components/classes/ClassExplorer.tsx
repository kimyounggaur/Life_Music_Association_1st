"use client";

import { ChevronDown, Music2 } from "lucide-react";
import { useState } from "react";
import { classCategories, flatClasses } from "@/content/classes";
import { cn } from "@/lib/cn";

const filters = [{ key: "all", label: "전체" }, ...classCategories.map((item) => ({ key: item.key, label: item.category }))];

export function ClassExplorer() {
  const [active, setActive] = useState("all");
  const [open, setOpen] = useState<string | null>(null);
  const items = active === "all" ? flatClasses : flatClasses.filter((item) => item.categoryKey === active);

  return (
    <div className="class-explorer">
      <div className="class-filter" role="tablist" aria-label="클래스 카테고리">
        {filters.map((filter) => (
          <button key={filter.key} type="button" className={cn(active === filter.key && "active")} onClick={() => setActive(filter.key)}>
            {filter.label}
          </button>
        ))}
      </div>
      <div className="class-grid">
        {items.map((item) => {
          const isOpen = open === item.name;
          return (
            <article className={cn("class-card card", isOpen && "open")} key={item.name}>
              <button type="button" onClick={() => setOpen(isOpen ? null : item.name)} aria-expanded={isOpen}>
                <span>
                  <Music2 size={22} />
                </span>
                <strong>{item.name}</strong>
                <small>{item.category}</small>
                <ChevronDown size={20} />
              </button>
              {isOpen ? (
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
