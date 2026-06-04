import type { Metadata } from "next";
import Image from "next/image";
import { DonutChart } from "@/components/books/DonutChart";
import { ModalImage } from "@/components/ui/ModalImage";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { songbookSeries } from "@/content/books";
import { teachingSupports } from "@/content/institution";
import { assets } from "@/content/site";

export const metadata: Metadata = {
  title: "교재·연습곡집",
  description: "대상과 연령에 맞춘 칼림바, 우쿨렐레 연습곡집과 수업용 교재, 교구, PPT 안내"
};

export default function BooksPage() {
  return (
    <>
      <PageHero eyebrow="Books & Teaching Materials" title="대상과 연령에 맞춘 연습곡집 시리즈" description="자격과정 이후 실제 기관수업에서 활용할 수 있는 맞춤형 교재와 자료를 제공합니다." />

      <section className="section">
        <div className="container book-feature-grid">
          <Reveal>
            <div className="image-frame book-feature-image">
              <ModalImage src={assets.kalimbaSongbook} alt="칼림바 연습곡집 시리즈" contain />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="image-frame book-feature-image">
              <ModalImage src={assets.ukuleleSongbook} alt="우쿨렐레 연습곡집 시리즈" contain />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight books-band">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Songbook Ratio" title="연습곡집 구성 비율" description="대상별 수업 흐름에 맞춰 캐롤, 동요, 가요, 최신가요, 7080곡 비중을 다르게 구성합니다." align="center" />
          </Reveal>
          <div className="book-ratio-grid">
            {songbookSeries.map((series) => (
              <article className="card songbook-mini" key={series.title}>
                <h3>{series.title}</h3>
                <p>{series.description}</p>
                <DonutChart title={series.title} ratios={series.ratios} />
                {"note" in series && series.note ? <small>{series.note}</small> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Textbook Covers" title="생활음악 교재 표지" description="보유 자료의 표지를 활용해 교재 체계를 시각적으로 보여줍니다." />
          </Reveal>
          <div className="cover-grid">
            {assets.covers.map((cover) => (
              <article className="cover-card card" key={cover.src}>
                <div className="cover-image">
                  <Image src={cover.src} alt={cover.title} fill sizes="(max-width: 768px) 50vw, 220px" />
                </div>
                <h3>{cover.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container support-strip">
          <SectionHeader eyebrow="Teaching Support" title="수업용 자료 지원" description="실제 과정별 제공 범위는 상담 시 확인이 필요합니다." />
          <div className="support-list">
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
