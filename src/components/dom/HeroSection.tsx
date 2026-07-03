"use client";

import { motion } from "framer-motion";
import { useStore } from "@/lib/store";

export function HeroSection() {
  const scrollProgress = useStore((s) => s.scrollProgress);
  const local = Math.max(0, Math.min(1, scrollProgress * 4));
  const opacity = Math.max(0, 1 - local * 2);
  const y = local * 60;

  return (
    <section className="relative w-full h-screen flex items-center justify-center select-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060914]/60 via-transparent to-[#060914]/60" />
      <div className="relative text-center" style={{ opacity, transform: `translateY(${y}px)` }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="text-[clamp(5rem,15vw,13rem)] font-extralight tracking-[-0.06em] leading-[0.8]"
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, #a0c4ff 40%, #00d4ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(0,212,255,0.2))",
            }}
          >
            KLYVEN
          </h1>
        </motion.div>
        <motion.div
          className="mt-8 h-px w-20 mx-auto bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        />
        <motion.p
          className="mt-8 text-sm tracking-[0.45em] uppercase text-white/70"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
        >
          Build the Future
        </motion.p>
        <motion.p
          className="mt-3 text-[11px] tracking-[0.3em] uppercase text-white/30"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        >
          Software · OS · Digital Products
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="mt-14"
        >
          <button
            className="px-10 py-4 rounded-full text-xs tracking-[0.3em] uppercase transition-all duration-500"
            style={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(123,47,247,0.2))",
              border: "1px solid rgba(0,212,255,0.35)",
              color: "#fff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(0,212,255,0.35), rgba(123,47,247,0.35))";
              e.currentTarget.style.borderColor = "rgba(0,212,255,0.6)";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(0,212,255,0.2)";
              useStore.getState().setCursorVariant("hover");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(123,47,247,0.2))";
              e.currentTarget.style.borderColor = "rgba(0,212,255,0.35)";
              e.currentTarget.style.boxShadow = "none";
              useStore.getState().setCursorVariant("default");
            }}
          >
            Explore Our World
          </button>
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-2 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: local > 0 ? 0 : 0.7 }}
          transition={{ duration: 1 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-cyan-400/50 to-transparent" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-cyan-400/50">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
