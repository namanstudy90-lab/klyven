"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { useStore } from "@/lib/store";

const LINKS = ["Services", "Products", "Open Source", "Careers", "Contact"];

export function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center select-none py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#060914]/50 to-[#060914]" />
      <motion.div
        className="relative text-center max-w-lg w-full px-8 py-12 rounded-2xl"
        style={{
          background: "rgba(10, 14, 30, 0.7)",
          border: "1px solid rgba(0, 212, 255, 0.06)",
          backdropFilter: "blur(12px)",
          transform: isInView ? "translateY(0)" : "translateY(30px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <span
          className="block text-[clamp(4rem,12vw,10rem)] font-extralight tracking-[-0.06em] leading-[0.85] text-white"
          style={{
            filter: "drop-shadow(0 0 40px rgba(0,212,255,0.08))",
          }}
        >
          KLYVEN
        </span>
        <div className="mt-6 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        <div className="flex justify-center gap-8 mt-8 flex-wrap">
          {LINKS.map((link) => (
            <button
              key={link}
              className="text-xs tracking-[0.3em] uppercase transition-all duration-300 text-blue-100/50 hover:text-blue-100/90"
              onMouseEnter={() => useStore.getState().setCursorVariant("hover")}
              onMouseLeave={() => useStore.getState().setCursorVariant("default")}
            >
              {link}
            </button>
          ))}
        </div>
        <p className="mt-8 text-[10px] tracking-[0.25em] uppercase text-blue-100/20">
          &copy; 2038 KLYVEN. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}
