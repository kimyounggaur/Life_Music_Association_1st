"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export function ModalImage({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  contain = false
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  contain?: boolean;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button className={`modal-image-trigger ${className ?? ""}`} type="button" onClick={() => setOpen(true)} aria-label={`${alt} 확대 보기`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: contain ? "contain" : "cover" }} />
      </button>
      {open ? (
        <div className="image-modal" role="dialog" aria-modal="true" aria-label={`${alt} 확대 이미지`}>
          <button className="image-modal-backdrop" type="button" aria-label="이미지 닫기" onClick={() => setOpen(false)} />
          <div className="image-modal-panel">
            <button className="image-modal-close" type="button" onClick={() => setOpen(false)} aria-label="이미지 닫기">
              <X size={22} />
            </button>
            <Image src={src} alt={alt} fill sizes="96vw" style={{ objectFit: "contain" }} />
          </div>
        </div>
      ) : null}
    </>
  );
}
