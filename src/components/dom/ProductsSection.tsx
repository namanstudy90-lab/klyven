"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import { useStore } from "@/lib/store";

export function ProductsSection() {
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
        <span className="text-xs tracking-[0.4em] uppercase text-violet-400/60">Our Products</span>
        <div className="mt-3 h-px w-12 mx-auto bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
      </motion.div>
      <div className="relative max-w-5xl w-full px-4 space-y-4">
        {PRODUCTS.map((product, i) => (
          <div
            key={product.name}
            className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-all duration-700"
            style={{
              background: "rgba(10, 14, 30, 0.7)",
              border: "1px solid rgba(0, 212, 255, 0.08)",
              backdropFilter: "blur(20px)",
              transform: isInView ? "translateY(0)" : `translateY(${40 * (i + 1)}px)`,
              opacity: isInView ? 1 : 0,
              transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
            }}
            onMouseEnter={() => useStore.getState().setCursorVariant("hover")}
            onMouseLeave={() => useStore.getState().setCursorVariant("default")}
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <h3 className="text-lg tracking-[0.1em] uppercase text-white">{product.name}</h3>
                <span
                  className="text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                  style={{
                    background: `${product.color}20`,
                    border: `1px solid ${product.color}40`,
                    color: product.color,
                  }}
                >
                  {product.status}
                </span>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase mb-2 text-blue-100/50">{product.tagline}</p>
              <p className="text-sm leading-relaxed text-blue-100/70">{product.description}</p>
            </div>
            <div
              className="shrink-0 text-xs tracking-[0.2em] uppercase py-3 px-6 rounded-full transition-all duration-300 text-center"
              style={{
                background: `${product.color}15`,
                border: `1px solid ${product.color}30`,
                color: product.color,
              }}
            >
              {product.status === "live" ? "Explore" : product.status === "coming soon" ? "Notify Me" : "View Tools"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
