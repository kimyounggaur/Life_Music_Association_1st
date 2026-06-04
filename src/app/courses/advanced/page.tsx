import type { Metadata } from "next";
import Link from "next/link";
import { ModalImage } from "@/components/ui/ModalImage";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { courseTypes } from "@/content/courses";

export const metadata: Metadata = {
  title: "자격 과정별 심화수업",
  description: "수업 능력 업그레이드를 위한 4주, 8주, 12주, 24주 심화과정"
};

export default function AdvancedCoursePage() {
  const course = courseTypes[3];
  return (
    <>
      <PageHero eyebrow="Course 04" title={course.title} description={course.when} />
      <section className="section">
        <div className="container course-detail-grid">
          <Reveal>
            <div className="course-detail-copy" style={{ ["--course-color" as string]: course.color }}>
              <span className="course-no">{course.no}</span>
              <h2>{course.summary}</h2>
              <p>해당 과정의 수업 능력 업그레이드가 필요한 분을 위한 심화형 커리큘럼입니다.</p>
              {"durations" in course ? (
                <div className="timeline">
                  {course.durations.map((item, index) => (
                    <div className="timeline-item" key={item}>
                      <span>{index + 1}</span>
                      <strong>{item}</strong>
                    </div>
                  ))}
                </div>
              ) : null}
              <Link className="button button-primary" href="/contact?type=course">
                이 과정 문의하기
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="image-frame source-poster tall">
              <ModalImage src={course.image} alt="자격 과정별 심화수업 원본 안내 이미지" contain />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
