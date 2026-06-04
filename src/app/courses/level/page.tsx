import type { Metadata } from "next";
import Link from "next/link";
import { ModalImage } from "@/components/ui/ModalImage";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { courseTypes } from "@/content/courses";

export const metadata: Metadata = {
  title: "급수별 자격과정",
  description: "기초부터 단계적으로 배우는 한국생활음악강사협회 급수별 자격과정"
};

export default function LevelCoursePage() {
  const course = courseTypes[0];
  return (
    <>
      <PageHero eyebrow="Course 01" title={course.title} description={course.when} />
      <section className="section">
        <div className="container course-detail-grid">
          <Reveal>
            <div className="course-detail-copy" style={{ ["--course-color" as string]: course.color }}>
              <span className="course-no">{course.no}</span>
              <h2>{course.summary}</h2>
              <p>해당 과정을 기초부터 배우고 싶은 분을 위해 급수별로 구성된 과정입니다.</p>
              {"groups" in course &&
                course.groups.map((group) => (
                  <div className="instrument-group" key={group.label}>
                    <h3>{group.label}</h3>
                    <div className="instrument-chip-grid">
                      {group.instruments.map((item) => (
                        <span className="badge" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              <Link className="button button-primary" href="/contact?type=course">
                이 과정 문의하기
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="image-frame source-poster tall">
              <ModalImage src={course.image} alt="급수별 자격과정 원본 안내 이미지" contain />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
