import type { Metadata } from "next";
import { ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import { FusionTable } from "@/components/courses/FusionTable";
import { ModalImage } from "@/components/ui/ModalImage";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { courseFaqs, courseTypes } from "@/content/courses";
import { assets } from "@/content/site";

export const metadata: Metadata = {
  title: "자격과정",
  description: "급수별, 속성, 융합, 심화로 구성된 한국생활음악강사협회 자격과정 안내"
};

export default function CoursesPage() {
  return (
    <>
      <PageHero eyebrow="Certification Programs" title="수업 현장에서 바로 쓰이는 자격과정" description="기초부터 속성, 융합, 심화까지 기관수업 역량을 단계적으로 다지는 과정입니다." />
      <section className="section">
        <div className="container course-hub-grid">
          {courseTypes.map((course, index) => (
            <Reveal key={course.id} delay={index * 0.05}>
              <Link className="course-preview-card" href={course.href} style={{ ["--course-color" as string]: course.color }}>
                <span className="course-no">{course.no}</span>
                <h3>{course.title}</h3>
                <p>{course.when}</p>
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-tight course-band">
        <div className="container poster-text-grid">
          <Reveal>
            <SectionHeader eyebrow="Original Source" title="자격과정 원본 포스터" description="원본 이미지는 확대해서 확인할 수 있고, 핵심 내용은 각 상세 페이지에서 텍스트로 다시 정리했습니다." />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="image-frame source-poster">
              <ModalImage src={assets.certificationOverview} alt="한국생활음악강사협회 자격과정 홍보 포스터" contain />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Fusion Preview" title="융합수업 시간 배분 미리보기" description="융합수업은 과정 조합별 시간 배분을 명확하게 안내합니다." />
          </Reveal>
          <FusionTable />
        </div>
      </section>

      <section className="section-tight">
        <div className="container faq-grid">
          {courseFaqs.map((item) => (
            <article className="card faq-card" key={item.q}>
              <HelpCircle size={22} />
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
