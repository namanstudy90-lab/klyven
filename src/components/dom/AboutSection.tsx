"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const STATS = [
  { value: "2026", label: "Founded" },
  { value: "2", label: "Founders" },
  { value: "3", label: "Products & Tools" },
  { value: "Open", label: "Source + Commercial" },
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
        className="relative mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-xs tracking-[0.4em] uppercase text-violet-400/70">The KLYVEN way</span>
        <div className="mt-3 h-px w-12 mx-auto bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
      </motion.div>
      <div className="relative max-w-5xl w-full px-4">
        <div
          className="relative overflow-hidden rounded-[2.5rem] p-8 md:p-14"
          style={{
            background: "linear-gradient(135deg, rgba(16, 20, 42, 0.95), rgba(22, 12, 48, 0.82))",
            border: "1px solid rgba(177, 151, 255, 0.22)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 30px 100px rgba(0,0,0,0.35), 0 0 80px rgba(123,47,247,0.12)",
          }}
        >
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <span className="inline-flex rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-[10px] tracking-[0.25em] uppercase text-violet-200">
                Make the complex feel possible
              </span>
              <h2 className="mt-6 text-[clamp(2.5rem,5vw,5rem)] font-extralight tracking-[-0.05em] leading-[0.98] text-white">
                Build what matters{
                  " "
                }<span className="bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent">
                  next.
                </span>
              </h2>
              <p className="mt-7 max-w-xl text-sm md:text-base leading-relaxed text-blue-100/70">
                KLYVEN is an AI software company founded by{" "}
                <a href="/team" className="text-cyan-300 hover:text-white transition-colors">Naman Sharma</a>{" "}
                and{" "}
                <a href="/team" className="text-cyan-300 hover:text-white transition-colors">Ayush Mishra</a>.
                We turn ambitious ideas into products people can actually use.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Think in systems", color: "#8b7bff" },
                { label: "Ship real products", color: "#62e6ff" },
                { label: "Share what works", color: "#ff78b7" },
                { label: "Stay curious", color: "#ffb86b" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="rounded-3xl p-5 min-h-32 flex flex-col justify-between"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
                    background: `${item.color}12`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <span className="h-3 w-3 rounded-full" style={{ background: item.color, boxShadow: `0 0 18px ${item.color}` }} />
                  <span className="text-xs leading-relaxed text-white/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <span className="block text-2xl md:text-3xl font-extralight tracking-[-0.02em] text-cyan-300">{stat.value}</span>
                <span className="block mt-2 text-[10px] tracking-[0.2em] uppercase text-blue-100/45">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
