import type { Metadata } from "next";
import Link from "next/link";
import { FusionTable } from "@/components/courses/FusionTable";
import { ModalImage } from "@/components/ui/ModalImage";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { courseTypes } from "@/content/courses";

export const metadata: Metadata = {
  title: "카테고리별 융합수업",
  description: "두 가지 이상 악기를 조합해 기관수업 퀄리티를 높이는 융합수업"
};

export default function FusionCoursePage() {
  const course = courseTypes[2];
  return (
    <>
      <PageHero eyebrow="Course 03" title={course.title} description={course.when} />
      <section className="section">
        <div className="container course-detail-grid">
          <Reveal>
            <div className="course-detail-copy" style={{ ["--course-color" as string]: course.color }}>
              <span className="course-no">{course.no}</span>
              <h2>{course.summary}</h2>
              <p>기관 수업의 흐름을 풍성하게 만들 수 있도록 악기 조합별 시간 배분을 명확하게 구성합니다.</p>
              <Link className="button button-primary" href="/contact?type=course">
                이 과정 문의하기
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="image-frame source-poster tall">
              <ModalImage src={course.image} alt="카테고리별 융합수업 원본 안내 이미지" contain />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section-tight course-band">
        <div className="container">
          <FusionTable />
        </div>
      </section>
    </>
  );
}
