"use client";

import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function FloatingCTA() {
  const pathname = usePathname();
  const isContact = pathname === "/contact";

  return (
    <>
      <div className={cn("floating-cta", isContact && "quiet")}>
        <Link href="/contact?type=course">
          <MessageCircle size={18} />
          자격과정 문의
        </Link>
        <Link href="/contact?type=institution">
          <MessageCircle size={18} />
          기관수업 문의
        </Link>
      </div>
      <div className={cn("mobile-bottom-cta", isContact && "quiet")}>
        <a href={site.contact.cafe} target="_blank" rel="noreferrer">
          네이버 카페
        </a>
        <a href={`tel:${site.contact.tel}`}>
          <Phone size={16} />
          전화 문의
        </a>
      </div>
    </>
  );
}
