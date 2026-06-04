import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "문의",
  description: "한국생활음악강사협회 자격과정, 기관수업, 교재 문의"
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="자격과정·기관수업 문의" description="문의 내용을 남겨주시면 확인 후 안내드립니다. 빠른 연결은 전화 또는 네이버 카페를 이용해 주세요." />
      <section className="section">
        <div className="container contact-grid">
          <aside className="contact-aside">
            <p className="eyebrow">Direct Contact</p>
            <h2>상담이 필요한 내용을 편하게 남겨주세요</h2>
            <p>비용, 일정, 제공 범위 등 운영 확인이 필요한 내용은 상담 시 안내합니다.</p>
            <div className="contact-buttons">
              <a className="button button-primary" href={`tel:${site.contact.tel}`}>
                전화 {site.contact.phone}
              </a>
              <a className="button button-outline" href={site.contact.cafe} target="_blank" rel="noreferrer">
                네이버 카페 바로가기
              </a>
            </div>
          </aside>
          <Suspense fallback={<div className="card contact-form">문의 폼을 준비하고 있습니다.</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
