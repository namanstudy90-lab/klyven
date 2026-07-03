"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const POSTS = [
  {
    title: "Announcing KLYVEN",
    date: "July 3, 2026",
    summary: "We're building the foundational intelligence layer for next-generation software. AI-native, real-time, and secure by design.",
    tags: ["company", "product"],
  },
  {
    title: "Building a 3D Glass-Morphism Landing Page",
    date: "July 3, 2026",
    summary: "How we used Three.js, React Three Fiber, and Tailwind CSS to create an immersive glass-frosted future aesthetic.",
    tags: ["engineering", "design"],
  },
  {
    title: "Nexcarto: Local Food Delivery Reimagined",
    date: "July 2, 2026",
    summary: "Connecting neighborhoods with local restaurants through intelligent routing and community-first delivery.",
    tags: ["product", "nexcarto"],
  },
];

export function BlogSection() {
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
        <span className="text-xs tracking-[0.4em] uppercase text-cyan-400/60">Latest Updates</span>
        <div className="mt-3 h-px w-12 mx-auto bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <h2 className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-[-0.03em] text-white">
          Blog &amp; News
        </h2>
      </motion.div>
      <div className="relative max-w-4xl w-full px-4 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {POSTS.map((post, i) => (
          <motion.article
            key={post.title}
            className="rounded-2xl p-6 transition-all duration-700 flex flex-col"
            style={{
              background: "rgba(10, 14, 30, 0.7)",
              border: "1px solid rgba(0, 212, 255, 0.1)",
              backdropFilter: "blur(20px)",
              transform: isInView ? "translateY(0)" : `translateY(${50 * (i + 1)}px)`,
              opacity: isInView ? 1 : 0,
              transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
            }}
          >
            <h3 className="text-base tracking-[0.05em] mb-3 text-white leading-snug">
              {post.title}
            </h3>
            <p className="text-xs text-blue-100/50 mb-3">
              {post.date}
            </p>
            <p className="text-sm leading-relaxed text-blue-100/70 flex-1">
              {post.summary}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(0, 212, 255, 0.08)",
                    border: "1px solid rgba(0, 212, 255, 0.15)",
                    color: "rgba(0, 212, 255, 0.7)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
