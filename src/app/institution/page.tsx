import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionFinder } from "@/components/forms/InstitutionFinder";
import { ModalImage } from "@/components/ui/ModalImage";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { institutionBenefits, relatedDiscountGroups, strengths, teachingSupports } from "@/content/institution";
import { assets } from "@/content/site";

export const metadata: Metadata = {
  title: "기관 수업 안내",
  description: "기관별·대상별 상황에 맞춘 생활음악 수업과 자격증 과정 연계, 온라인 지원, 악기 대여 안내"
};

export default function InstitutionPage() {
  return (
    <>
      <PageHero eyebrow="For Institutions" title="기관별·대상별 상황에 맞춘 생활음악 수업" description="대상, 공간, 예산, 수업 목표에 맞춰 악기와 커리큘럼을 조합합니다." />
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Benefits" title="출강 기관에 드리는 3대 혜택" description="기관 담당자가 빠르게 확인할 수 있도록 핵심 지원 내용을 먼저 안내합니다." />
          <div className="benefit-grid">
            {institutionBenefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.05}>
                <article className="benefit-card card">
                  <span>{index + 1}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight course-band">
        <div className="container institution-grid">
          <Reveal>
            <SectionHeader eyebrow="Teaching Support" title="퀄리티 수업을 위한 5대 지원" description="교재, 교구, 연습곡집, 온라인·오프라인 PPT를 수업 목적에 맞게 활용합니다." />
            <div className="support-list">
              {teachingSupports.map((item) => (
                <span className="badge" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="discount-box card">
              <h3>연관 자격과정 기취득자 할인혜택</h3>
              <p>연관 관계에 있는 다른 자격증을 추가로 취득하면 교육시간 차감과 비용 할인 혜택이 있습니다. 자세한 내용은 별도 문의로 안내합니다.</p>
              <div>
                {relatedDiscountGroups.map((item) => (
                  <span className="badge" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="image-frame source-poster">
              <ModalImage src={assets.classFeaturePoster} alt="한국생활음악강사협회 기관수업 포스터" contain />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container institution-grid">
          <Reveal>
            <SectionHeader eyebrow="Find Your Class" title="우리 기관에 맞는 수업 찾기" description="간단한 조건을 선택하면 문의 페이지로 내용이 전달됩니다." />
            <InstitutionFinder />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader eyebrow="Lecturer Strengths" title="전문강사의 수업 강점" />
            <div className="mini-list">
              {strengths.map((item, index) => (
                <div key={item}>
                  <span>{index + 1}</span>
                  {item}
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact?type=institution">
                기관 출강·제휴 문의
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
