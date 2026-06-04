import Link from "next/link";
import { navigation, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <h2>{site.name}</h2>
          <p>{site.englishName}</p>
          <p className="footer-description">{site.description}</p>
        </div>
        <nav className="footer-links" aria-label="푸터 메뉴">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-contact">
          <a href={`tel:${site.contact.tel}`}>전화 {site.contact.phone}</a>
          <a href={site.contact.cafe} target="_blank" rel="noreferrer">
            네이버 카페
          </a>
        </div>
      </div>
      <div className="container footer-bottom">Copyright © 한국생활음악강사협회. 실제 사업자정보와 주소는 운영자 확인 후 입력하세요.</div>
    </footer>
  );
}
