"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Link from "next/link";
import { useStore } from "@/lib/store";

export function SchoolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="schools"
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center select-none py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#060914]/40 via-[#060914]/50 to-[#060914]/40" />
      <div className="relative max-w-3xl w-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-cyan-400/60">
            For Schools
          </span>
          <div className="mt-3 h-px w-12 mx-auto bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <h2 className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-[-0.03em] leading-[1.05] text-white">
            A brighter way to build{" "}
            <span className="text-cyan-400">school software</span>
          </h2>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-blue-100/70 max-w-xl mx-auto">
            Meet ClassSync, our first education product — turning a teacher&apos;s
            recorded class into a clear, animated lesson that never wastes a
            day.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/classsync/"
              className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase py-4 px-8 rounded-full transition-all duration-500 text-white"
              style={{
                background: "rgba(0,212,255,0.2)",
                border: "1px solid rgba(0,212,255,0.45)",
                boxShadow: "0 0 30px rgba(0,212,255,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,212,255,0.32)";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.7)";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(0,212,255,0.2)";
                useStore.getState().setCursorVariant("hover");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,212,255,0.2)";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.45)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(0,212,255,0.08)";
                useStore.getState().setCursorVariant("default");
              }}
            >
              Explore ClassSync <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center text-xs tracking-[0.25em] uppercase py-4 px-8 rounded-full transition-all duration-500 text-blue-100/70"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              onMouseEnter={() => useStore.getState().setCursorVariant("hover")}
              onMouseLeave={() => useStore.getState().setCursorVariant("default")}
            >
              Talk to KLYVEN
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
