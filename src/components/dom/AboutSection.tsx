"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const STATS = [
  { value: "2038", label: "Founded" },
  { value: "99.9%", label: "Uptime" },
  { value: "12M+", label: "Requests/Day" },
  { value: "150+", label: "Team Members" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center select-none py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#060914]/40 via-[#060914]/50 to-[#060914]/40" />
      <motion.div
        className="relative mb-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-xs tracking-[0.4em] uppercase text-violet-400/60">Our Mission</span>
        <div className="mt-3 h-px w-12 mx-auto bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
      </motion.div>
      <div className="relative max-w-3xl w-full px-4 text-center">
        <div
          className="rounded-3xl p-10 md:p-14"
          style={{
            background: "rgba(10, 14, 30, 0.7)",
            border: "1px solid rgba(123, 47, 247, 0.12)",
            backdropFilter: "blur(20px)",
          }}
        >
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extralight tracking-[-0.04em] leading-[1.05] text-white">
            Engineering the <span className="text-violet-400">Future</span>
          </h2>
          <div className="mt-8 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
          <p className="mt-8 text-sm md:text-base leading-relaxed max-w-xl mx-auto text-blue-100/70">
            KLYVEN is a parent company building the foundational layer for tomorrow&apos;s
            technology. From custom software and AI-powered operating systems to digital
            products that connect communities — we build at every level of the stack.
            Open source, accessible, and built for the future.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
                }}
              >
                <span className="block text-3xl md:text-4xl font-extralight tracking-[-0.02em] text-cyan-400">
                  {stat.value}
                </span>
                <span className="block mt-2 text-xs tracking-[0.25em] uppercase text-blue-100/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
