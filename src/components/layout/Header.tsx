"use client";

import { Menu, Music2, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={cn("site-header", isScrolled && "site-header-scrolled")}>
        <div className="container header-inner">
          <Link href="/" className="brand-lockup" aria-label="한국생활음악강사협회 홈">
            <span className="brand-mark">
              <Music2 size={18} aria-hidden />
            </span>
            <span>
              <strong>{site.name}</strong>
              <small>{site.englishName}</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="주 메뉴">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={cn(pathname === item.href && "active")}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link className="button button-primary header-cta" href="/contact?type=course">
              자격과정 문의
            </Link>
            <button className="mobile-menu-button" type="button" onClick={() => setIsOpen(true)} aria-label="메뉴 열기">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className={cn("mobile-drawer", isOpen && "open")} aria-hidden={!isOpen}>
        <button className="drawer-backdrop" type="button" aria-label="메뉴 닫기" onClick={() => setIsOpen(false)} />
        <aside className="drawer-panel" aria-label="모바일 메뉴">
          <div className="drawer-top">
            <span className="brand-mark">
              <Music2 size={18} aria-hidden />
            </span>
            <button className="mobile-menu-button" type="button" onClick={() => setIsOpen(false)} aria-label="메뉴 닫기">
              <X size={24} />
            </button>
          </div>
          <nav className="drawer-links">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                <strong>{item.label}</strong>
                <span>{item.description}</span>
              </Link>
            ))}
          </nav>
          <Link className="button button-primary" href="/contact?type=course" onClick={() => setIsOpen(false)}>
            자격과정 문의
          </Link>
        </aside>
      </div>
    </>
  );
}
