"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function InstitutionFinder() {
  const router = useRouter();
  const [form, setForm] = useState({
    target: "초등",
    instrument: "미정",
    format: "정규수업",
    region: ""
  });

  function update(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams({
      type: "institution",
      interest: `${form.target} / ${form.instrument} / ${form.format} / ${form.region || "지역 미입력"}`
    });
    router.push(`/contact?${params.toString()}`);
  }

  return (
    <form className="finder-form card" onSubmit={submit}>
      <label>
        대상
        <select value={form.target} onChange={(event) => update("target", event.target.value)}>
          {["유아", "초등", "청소년", "성인", "어르신", "기타"].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label>
        희망 분야
        <select value={form.instrument} onChange={(event) => update("instrument", event.target.value)}>
          {["칼림바", "우쿨렐레", "난타", "실로폰", "핸드벨", "디지털합주", "미정"].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label>
        수업 형태
        <select value={form.format} onChange={(event) => update("format", event.target.value)}>
          {["정규수업", "특강", "자격과정 연계", "온라인", "기타"].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label>
        지역
        <input value={form.region} onChange={(event) => update("region", event.target.value)} placeholder="예: 서울 강서구" />
      </label>
      <button className="button button-primary" type="submit">
        문의 내용으로 가져가기
      </button>
    </form>
  );
}
