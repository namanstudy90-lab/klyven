"use client";

import { useStore } from "@/lib/store";
import { useEffect } from "react";

export function ScrollTracker() {
  const setSection = useStore((s) => s.setSection);
  const setScrollProgress = useStore((s) => s.setScrollProgress);
  const setMousePosition = useStore((s) => s.setMousePosition);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollProgress(progress);
      setSection(Math.min(Math.floor(progress * 5), 4));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [setScrollProgress, setSection]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [setMousePosition]);

  return null;
}
