import type { Metadata } from "next";
import Link from "next/link";
import { ClassExplorer } from "@/components/classes/ClassExplorer";
import { ModalImage } from "@/components/ui/ModalImage";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { highlightedClasses } from "@/content/classes";
import { assets } from "@/content/site";

export const metadata: Metadata = {
  title: "클래스 소개",
  description: "칼림바, 텅드럼, 우쿨렐레, 난타, 실로폰, 핸드벨, 디지털 합주 등 생활음악 클래스 안내"
};

export default function ClassesPage() {
  return (
    <>
      <PageHero eyebrow="Life Music Classes" title="생활음악 분야 클래스 소개" description="현악, 타악, 난타·전통, 가창·보컬, 밴드·디지털 수업을 기관 현장에 맞게 구성합니다." />
      <section className="section">
        <div className="container">
          <Reveal>
            <ClassExplorer />
          </Reveal>
        </div>
      </section>

      <section className="section-tight highlight-band">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Featured" title="디지털 합주·스푼난타·소고난타" description="기관 수업의 흥미와 참여도를 높일 수 있는 대표 특화 수업입니다." />
          </Reveal>
          <div className="bento-grid">
            {highlightedClasses.map((item, index) => (
              <article className={`bento-card ${index === 0 ? "class-feature-large" : ""}`} key={item.title}>
                <span className="bento-icon">{index === 0 ? "DIGITAL" : "RHYTHM"}</span>
                <h3>{item.title}</h3>
                <div className="hero-pills">
                  {item.tags.map((tag) => (
                    <span className="badge" key={tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container poster-text-grid">
          <Reveal>
            <SectionHeader eyebrow="Class Map" title="브로셔 원본으로 보는 클래스 구성" description="원본 이미지는 확대해서 확인하고, 실제 페이지에서는 텍스트 카드로도 정보를 제공합니다." />
            <div className="hero-actions">
              <Link className="button button-primary" href="/courses/fusion">
                융합수업 보기
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="image-frame source-poster">
              <ModalImage src={assets.institutionClassMap} alt="한국생활음악강사협회 기관수업 클래스 브로셔" contain />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
