import type { Metadata } from "next";
import Link from "next/link";
import { ModalImage } from "@/components/ui/ModalImage";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { courseTypes } from "@/content/courses";

export const metadata: Metadata = {
  title: "자격 과정별 속성과정",
  description: "수업 경험과 연주경력이 있는 강사를 위한 1급과 2급 동시 취득 속성과정"
};

export default function FastCoursePage() {
  const course = courseTypes[1];
  return (
    <>
      <PageHero eyebrow="Course 02" title={course.title} description={course.when} />
      <section className="section">
        <div className="container course-detail-grid">
          <Reveal>
            <div className="course-detail-copy" style={{ ["--course-color" as string]: course.color }}>
              <span className="course-no">{course.no}</span>
              <h2>1급 & 2급 동시 취득을 목표로 하는 압축 과정</h2>
              <p>해당 과정 수업 경험과 연주 경력이 있는 분을 위한 속성과정입니다. 실제 가능 여부와 세부 조건은 상담 시 안내합니다.</p>
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
              <ModalImage src={course.image} alt="자격 과정별 속성과정 원본 안내 이미지" contain />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
