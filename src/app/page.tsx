import { ArrowRight, BookOpen, Building2, GraduationCap, HeartHandshake, MessageCircle, Music, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DonutChart } from "@/components/books/DonutChart";
import { ModalImage } from "@/components/ui/ModalImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { songbookSeries } from "@/content/books";
import { highlightedClasses } from "@/content/classes";
import { courseTypes, fusionExamples } from "@/content/courses";
import { institutionBenefits, strengths } from "@/content/institution";
import { assets, site } from "@/content/site";

const tiles = [
  { title: "협회소개", href: "/about", desc: "현장 중심 연구·개발 철학", icon: HeartHandshake },
  { title: "자격과정", href: "/courses", desc: "급수별·속성·융합·심화", icon: GraduationCap },
  { title: "클래스", href: "/classes", desc: "생활음악 수업 한눈에", icon: Music },
  { title: "교재·연습곡집", href: "/books", desc: "대상별 맞춤 수업자료", icon: BookOpen },
  { title: "기관수업", href: "/institution", desc: "기관별·대상별 수업 설계", icon: Building2 },
  { title: "문의", href: "/contact", desc: "자격과정·기관 출강 상담", icon: MessageCircle }
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="staff-lines" aria-hidden />
        <span className="floating-note note-a">♪</span>
        <span className="floating-note note-b">♫</span>
        <div className="wide-container home-hero-grid">
          <Reveal className="home-hero-copy">
            <p className="eyebrow">{site.englishName}</p>
            <h1 className="display-title">Teach Life Music, Better</h1>
            <h2>기관 수업에 강한 생활음악 교육 협회</h2>
            <p className="lead">자격과정부터 교재·연습곡집·PPT·수업교구까지, 실제 수업 현장에서 바로 쓰이는 생활음악 교육 콘텐츠를 연구·개발합니다.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/courses">
                자격과정 보기 <ArrowRight size={18} />
              </Link>
              <Link className="button button-outline" href="/institution">
                기관수업 문의
              </Link>
            </div>
            <div className="hero-pills">
              {["기관수업", "자격과정", "교재개발", "융합수업", "온라인 PPT"].map((item) => (
                <span className="badge" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12} className="home-hero-visual">
            <div className="image-frame hero-poster">
              <Image src={assets.musicFieldMap} alt="한국생활음악강사협회 음률악기 분야 안내 포스터" fill sizes="(max-width: 900px) 90vw, 48vw" priority />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container intro-split">
          <Reveal>
            <SectionHeader eyebrow="About the Association" title="기관 수업에 특화되어 있는 협회입니다" description="기관 수업에 출강하시는 강사님들을 지원하고, 기관 수업 연구·개발·업그레이드에 중점을 두고 운영합니다." />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="intro-quote">
              <Sparkles size={26} />
              <p>협회장과 교육이사들이 직접 기관 수업을 병행하며, 현장에서 얻은 아이디어로 커리큘럼·교재·연습곡집·수업용 PPT를 지속적으로 연구합니다.</p>
            </div>
          </Reveal>
        </div>
        <div className="container tile-grid">
          {tiles.map((tile, index) => {
            const Icon = tile.icon;
            return (
              <Reveal key={tile.href} delay={index * 0.04}>
                <Link className="tile-card" href={tile.href}>
                  <span>
                    <Icon size={26} />
                  </span>
                  <strong>{tile.title}</strong>
                  <p>{tile.desc}</p>
                  <ArrowRight size={18} />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section course-band">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Certification Programs" title="자격과정 4가지, 한눈에" description="기초부터 시작하는 급수별 과정부터, 경력자를 위한 속성·융합·심화과정까지 목표와 경험에 맞게 선택하세요." align="center" />
          </Reveal>
          <div className="course-preview-grid">
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
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Why Our Lecturers" title="전문강사의 5대 강점" description="기관별·대상별 상황에 맞춘 수업을 위해 커리큘럼과 자료를 함께 설계합니다." />
          </Reveal>
          <div className="strength-grid">
            {strengths.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <article className="strength-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section highlight-band">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Signature Classes" title="대표 특화 수업" description="트렌드를 반영한 생활음악 수업을 기관 현장에 맞게 구성합니다." />
          </Reveal>
          <div className="bento-grid">
            {highlightedClasses.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05} className={index === 0 ? "bento-large" : ""}>
                <article className="bento-card">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section fusion-band">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Fusion Classes" title="시대의 트렌드를 반영한 융합수업" description="하나의 수업에서 두 가지 악기를 배울 수 있는 커리큘럼이 준비되어 있습니다." />
          </Reveal>
          <div className="fusion-scroll">
            {fusionExamples.map((item) => (
              <Link className="fusion-chip" href="/courses/fusion" key={item}>
                <span>+</span>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section books-band">
        <div className="container books-home-grid">
          <Reveal>
            <SectionHeader eyebrow="Songbook Series" title="대상과 연령에 맞춘 맞춤형 연습곡집" description="우쿨렐레와 칼림바 등 악기별 연습곡집을 수업 대상에 맞게 구성했습니다." />
            <div className="hero-actions">
              <Link className="button button-primary" href="/books">
                교재·연습곡집 보기
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="image-frame songbook-frame">
              <ModalImage src={assets.ukuleleSongbook} alt="우쿨렐레 연습곡집 시리즈" contain />
            </div>
          </Reveal>
        </div>
        <div className="container songbook-mini-grid">
          {songbookSeries.slice(0, 4).map((series) => (
            <article className="card songbook-mini" key={series.title}>
              <h3>{series.title}</h3>
              <p>{series.description}</p>
              <DonutChart title={series.title} ratios={series.ratios} />
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="For Institutions" title="출강 기관에 드리는 혜택" description="기관 수업과 자격증 과정 연계, 비대면 온라인 지원, 수업용 악기·기자재 대여까지 안내합니다." align="center" />
          </Reveal>
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

      <section className="section-tight">
        <div className="container final-cta">
          <Reveal>
            <p className="eyebrow">Start Today</p>
            <h2>생활음악 강사의 길, 지금 시작하세요</h2>
            <p>자격과정·기관 출강·제휴 문의를 환영합니다.</p>
            <div className="hero-actions center-actions">
              <a className="button button-coral" href={site.contact.cafe} target="_blank" rel="noreferrer">
                네이버 카페 바로가기
              </a>
              <a className="button button-outline dark-outline" href={`tel:${site.contact.tel}`}>
                전화 {site.contact.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
