"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { JOIN_ROLES } from "@/lib/constants";
import { useStore } from "@/lib/store";

export function JoinSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center select-none py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#060914]/40 via-[#060914]/50 to-[#060914]/40" />
      <div className="relative max-w-4xl w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-cyan-400/60">Join the Team</span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-[-0.03em] leading-[1.05] text-white">
              Build the <span className="text-cyan-400">Future</span>
              <br />
              With Us
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-blue-100/70">
              We&apos;re looking for brilliant minds to shape the next generation of
              software, operating systems, and digital products. If you dream in
              code and think beyond the horizon, come build with us.
            </p>
            <div
              className="mt-8 inline-block text-xs tracking-[0.25em] uppercase py-4 px-10 rounded-full transition-all duration-500 text-blue-100/80"
              style={{
                background: "rgba(0, 212, 255, 0.1)",
                border: "1px solid rgba(0, 212, 255, 0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 212, 255, 0.2)";
                e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.5)";
                useStore.getState().setCursorVariant("hover");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0, 212, 255, 0.1)";
                e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.25)";
                useStore.getState().setCursorVariant("default");
              }}
            >
              View Open Roles
            </div>
          </motion.div>
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {JOIN_ROLES.map((role, i) => (
              <div
                key={role}
                className="rounded-xl p-4 transition-all duration-500"
                style={{
                  background: "rgba(10, 14, 30, 0.7)",
                  border: "1px solid rgba(0, 212, 255, 0.06)",
                  backdropFilter: "blur(12px)",
                  transform: isInView ? "translateX(0)" : "translateX(20px)",
                  opacity: isInView ? 1 : 0,
                  transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1 + 0.3}s`,
                }}
              >
                <span className="text-sm tracking-[0.15em] text-blue-100/70">{role}</span>
                <span className="float-right text-xs text-cyan-400/40">→</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
