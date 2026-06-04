import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { strengths, teachingSupports } from "@/content/institution";
import { assets } from "@/content/site";

export const metadata: Metadata = {
  title: "협회소개",
  description: "기관 수업에 특화된 한국생활음악강사협회의 정체성과 연구·개발 방향"
};

const process = ["현장 수업 관찰", "커리큘럼 설계", "교재·연습곡집 제작", "PPT·교구 개발", "강사 피드백 반영"];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About the Association" title="기관 수업에 특화된 협회입니다" description="현장에 필요한 커리큘럼과 수업자료를 연구·개발하며 강사와 기관을 지원합니다." />
      <section className="section">
        <div className="container about-grid">
          <Reveal>
            <div>
              <SectionHeader eyebrow="Mission" title="실력과 교수법을 겸비한 전문강사 양성" description="자격증을 취득한 선생님들이 기관에서 수업할 때 도움이 될 수 있도록, 협회장과 교육이사들이 현장 기반 콘텐츠를 지속적으로 연구합니다." />
              <div className="hero-actions">
                <Link className="button button-primary" href="/contact?type=course">
                  자격과정 문의
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="image-frame about-image">
              <Image src={assets.brandIntro} alt="한국생활음악강사협회 소개 원본 자료" fill sizes="(max-width: 900px) 90vw, 45vw" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight course-band">
        <div className="container">
          <SectionHeader eyebrow="Research Process" title="현장 중심 연구·개발 프로세스" description="수업 현장에서 발견한 아이디어를 다시 수업자료로 돌려보내는 순환 구조를 지향합니다." align="center" />
          <div className="process-grid">
            {process.map((item, index) => (
              <article className="process-card card" key={item}>
                <span>{index + 1}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Strengths" title="전문강사의 5대 강점" />
          <div className="strength-grid">
            {strengths.map((item, index) => (
              <article className="strength-card" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
          <div className="support-list about-supports">
            {teachingSupports.map((item) => (
              <span className="badge" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
