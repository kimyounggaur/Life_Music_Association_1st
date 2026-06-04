"use client";

import { useState } from "react";
import { storyTabs } from "@/content/stories";
import { cn } from "@/lib/cn";

export function StoriesTabs() {
  const [active, setActive] = useState(storyTabs[0].id);
  const current = storyTabs.find((item) => item.id === active) ?? storyTabs[0];

  return (
    <div className="stories-tabs">
      <div className="class-filter" role="tablist" aria-label="소식 카테고리">
        {storyTabs.map((tab) => (
          <button key={tab.id} type="button" className={cn(active === tab.id && "active")} onClick={() => setActive(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="empty-state card">
        <p className="eyebrow">{current.label}</p>
        <h2>{current.empty}</h2>
        <p>실제 게시물, 후기, 기관명은 운영자 확인 후 등록합니다.</p>
      </div>
    </div>
  );
}
