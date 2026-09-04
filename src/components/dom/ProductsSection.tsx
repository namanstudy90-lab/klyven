"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Link from "next/link";
import { PRODUCTS } from "@/lib/constants";
import { useStore } from "@/lib/store";

export function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="products"
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
      <div className="relative max-w-6xl w-full px-4 space-y-8 md:space-y-12">
        {PRODUCTS.map((product, i) => (
          <div
            key={product.name}
            className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10 transition-all duration-700"
            style={{
              background: "var(--klyven-card-bg)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(20px)",
              boxShadow: "var(--klyven-card-shadow)",
              transform: isInView ? "translateY(0)" : `translateY(${40 * (i + 1)}px)`,
              opacity: isInView ? 1 : 0,
              transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
            }}
            onMouseEnter={() => useStore.getState().setCursorVariant("hover")}
            onMouseLeave={() => useStore.getState().setCursorVariant("default")}
          >
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-xl tracking-[0.1em] uppercase text-white">{product.name}</h3>
                <span
                  className="text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                  style={{
                    background: `${product.color}18`,
                    border: `1px solid ${product.color}33`,
                    color: product.color,
                  }}
                >
                  {product.status}
                </span>
                <span
                  className="text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                  style={{
                    background: product.price === "Free" ? "rgba(255,45,120,0.1)" : "rgba(0,212,255,0.08)",
                    border: `1px solid ${product.price === "Free" ? "rgba(255,45,120,0.22)" : "rgba(0,212,255,0.18)"}`,
                    color: product.price === "Free" ? "#ff2d78" : "#00d4ff",
                  }}
                >
                  {product.price === "Free" ? "Open Source" : "Paid"}
                </span>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase mb-3 text-blue-100/50">{product.tagline}</p>
              <p className="text-sm md:text-[15px] leading-relaxed text-blue-100/70 max-w-2xl">{product.description}</p>
            </div>
            {product.status === "free" ? (
              <a
                href="https://github.com/klyven"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs tracking-[0.2em] uppercase py-4 px-8 rounded-full transition-all duration-300 text-center"
                style={{
                  background: `${product.color}12`,
                  border: `1px solid ${product.color}28`,
                  color: product.color,
                }}
              >
                View Tools
              </a>
            ) : (
              <Link
                href="/contact"
                className="shrink-0 text-xs tracking-[0.2em] uppercase py-4 px-8 rounded-full transition-all duration-300 text-center"
                style={{
                  background: `${product.color}12`,
                  border: `1px solid ${product.color}28`,
                  color: product.color,
                }}
                onMouseEnter={() => useStore.getState().setCursorVariant("hover")}
                onMouseLeave={() => useStore.getState().setCursorVariant("default")}
              >
                {product.status === "live" ? "Explore" : "Notify Me"}
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
