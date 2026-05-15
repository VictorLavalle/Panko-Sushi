"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset: number = 100): string {
  const [active, setActive] = useState(sectionIds[0] ?? "");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current?.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.current.observe(el);
    }

    return () => observer.current?.disconnect();
  }, [sectionIds, offset]);

  return active;
}
