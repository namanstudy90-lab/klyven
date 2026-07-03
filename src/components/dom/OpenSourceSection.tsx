"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { useStore } from "@/lib/store";

export function OpenSourceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center select-none py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#060914]/30 via-[#060914]/50 to-[#060914]/30" />
      <motion.div
        className="relative max-w-3xl w-full px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="rounded-3xl p-10 md:p-14"
          style={{
            background: "rgba(10, 14, 30, 0.7)",
            border: "1px solid rgba(255, 45, 120, 0.12)",
            backdropFilter: "blur(20px)",
          }}
        >
          <span className="text-4xl mb-4 block text-pink-400/60">&lt;/&gt;</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-[-0.03em] leading-[1.05] text-white">
            Free &amp; <span className="text-pink-400">Open Source</span>
          </h2>
          <div className="mt-6 h-px w-20 mx-auto bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />
          <p className="mt-6 text-sm md:text-base leading-relaxed max-w-lg mx-auto text-blue-100/70">
            Every great platform starts with a community. We believe in building in the open.
            Our tools, libraries, and frameworks are free for everyone — because the future
            shouldn&apos;t have a paywall.
          </p>
          <div
            className="mt-10 inline-block text-xs tracking-[0.25em] uppercase py-4 px-10 rounded-full transition-all duration-500 text-blue-100/80"
            style={{
              background: "rgba(255, 45, 120, 0.1)",
              border: "1px solid rgba(255, 45, 120, 0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 45, 120, 0.2)";
              e.currentTarget.style.borderColor = "rgba(255, 45, 120, 0.5)";
              useStore.getState().setCursorVariant("hover");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 45, 120, 0.1)";
              e.currentTarget.style.borderColor = "rgba(255, 45, 120, 0.25)";
              useStore.getState().setCursorVariant("default");
            }}
          >
            Browse GitHub
          </div>
        </div>
      </motion.div>
    </section>
  );
}
