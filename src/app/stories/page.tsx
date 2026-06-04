import type { Metadata } from "next";
import { StoriesTabs } from "@/components/stories/StoriesTabs";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "수업사례·소식",
  description: "한국생활음악강사협회 공지사항, 기관수업 사례, 강사 활동 소식, 갤러리"
};

export default function StoriesPage() {
  return (
    <>
      <PageHero eyebrow="Stories & News" title="수업사례·소식" description="실제 콘텐츠가 준비되는 대로 공지사항, 수업사례, 강사 활동 소식을 업데이트합니다." />
      <section className="section">
        <div className="container">
          <Reveal>
            <StoriesTabs />
          </Reveal>
        </div>
      </section>
    </>
  );
}
