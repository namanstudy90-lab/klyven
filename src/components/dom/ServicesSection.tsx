"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { useStore } from "@/lib/store";

export function ServicesSection() {
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
        <span className="text-xs tracking-[0.4em] uppercase text-cyan-400/60">What We Build</span>
        <div className="mt-3 h-px w-12 mx-auto bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <h2 className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-[-0.03em] text-white">
          Services &amp; Platforms
        </h2>
      </motion.div>
      <div className="relative max-w-6xl w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="rounded-2xl p-8 transition-all duration-700"
              style={{
                background: "rgba(10, 14, 30, 0.7)",
                border: "1px solid rgba(0, 212, 255, 0.1)",
                backdropFilter: "blur(20px)",
                transform: isInView ? "translateY(0)" : `translateY(${50 * (i + 1)}px)`,
                opacity: isInView ? 1 : 0,
                transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
              }}
              onMouseEnter={() => useStore.getState().setCursorVariant("hover")}
              onMouseLeave={() => useStore.getState().setCursorVariant("default")}
            >
              <span className="block text-3xl mb-5 text-cyan-400/70">{service.icon}</span>
              <h3 className="text-base tracking-[0.15em] uppercase mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-blue-100/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
