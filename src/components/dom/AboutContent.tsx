"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useStore } from "@/lib/store";

const values = [
  {
    title: "Build in the Open",
    body: "Tools and libraries should be shared freely. Our open-source work is MIT-licensed and community-driven — because great software belongs to everyone.",
    icon: "&lt;/&gt;",
  },
  {
    title: "Engineer for Scale",
    body: "From real-time systems to AI-native platforms, we design software that is fast, reliable, and secure by default — built to last, not to demo.",
    icon: "◇",
  },
  {
    title: "Balance Open & Commercial",
    body: "Our commercial products fund the work. Open source stays free where it should be; premium platforms carry their own value — a sustainable mix.",
    icon: "◈",
  },
  {
    title: "Think Beyond the Horizon",
    body: "We don't follow trends. We shape them — operating systems, AI products, and digital platforms that redefine what software can do.",
    icon: "◆",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function AboutContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full min-h-screen py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="text-xs tracking-[0.4em] uppercase"
            style={{ color: "rgba(0, 212, 255, 0.6)" }}
          >
            Our Mission
          </span>
          <h1 className="mt-4 text-[clamp(2.5rem,5vw,4rem)] font-extralight tracking-[-0.04em] leading-[1.05] text-white">
            Engineering the <span style={{ color: "#7b2ff7" }}>Future</span>
          </h1>
          <div
            className="my-8 h-px w-24"
            style={{
              background:
                "linear-gradient(to right, rgba(123,47,247,0.4), transparent)",
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.15,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-sm md:text-base leading-relaxed text-blue-100/80 max-w-2xl"
        >
          KLYVEN was founded by{" "}
          <Link href="/team" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
            Naman Sharma
          </Link>{" "}
          and{" "}
          <Link href="/team" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
            Ayush Mishra
          </Link>{" "}
          in 2026 with a simple conviction: that the next generation of software
          shouldn&apos;t be held back by yesterday&apos;s architecture. We work at every
          level of the stack — from custom software and AI-native platforms to
          operating systems and digital products that connect communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="rounded-3xl p-8 md:p-10 mt-12"
          style={{
            background: "rgba(10, 14, 30, 0.7)",
            border: "1px solid rgba(0, 212, 255, 0.12)",
            backdropFilter: "blur(20px)",
          }}
        >
          <h2 className="text-xl font-extralight tracking-[-0.02em] text-white">
            Open Source <span style={{ color: "#00d4ff" }}>&amp;</span>{" "}
            Commercial
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-blue-100/80">
            We&apos;re not purely non-profit, and not purely closed. KLYVEN
            strikes a deliberate balance: our{" "}
            <strong className="text-white">tools, libraries, and frameworks</strong> are
            free and open source for the community, while our{" "}
            <strong className="text-white">platforms and products</strong> like
            Nexcarto and Pikoo OS are commercial — revenue that keeps the open
            work sustainable and the whole ecosystem thriving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              custom={i + 3}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="rounded-3xl p-8 transition-all duration-500 group"
              style={{
                background: "rgba(10, 14, 30, 0.6)",
                border: "1px solid rgba(123, 47, 247, 0.12)",
                backdropFilter: "blur(16px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(123, 47, 247, 0.3)";
                e.currentTarget.style.background = "rgba(10, 14, 30, 0.8)";
                useStore.getState().setCursorVariant("hover");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(123, 47, 247, 0.12)";
                e.currentTarget.style.background = "rgba(10, 14, 30, 0.6)";
                useStore.getState().setCursorVariant("default");
              }}
            >
              <span className="block text-2xl mb-4 text-violet-400/60">
                {value.icon}
              </span>
              <h3 className="text-base tracking-[0.05em] uppercase text-white">
                {value.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-blue-100/70">
                {value.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-14 text-sm md:text-base leading-relaxed text-blue-100/80 max-w-2xl"
        >
          As a parent company, KLYVEN is building the foundational intelligence
          layer for tomorrow&apos;s technology. We are growing our leadership
          team now — hiring a CEO and co-founders today to help shape what&apos;s
          next.{" "}
          <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
            Get in touch
          </Link>{" "}
          to be part of it.
        </motion.p>
      </div>
    </section>
  );
}
