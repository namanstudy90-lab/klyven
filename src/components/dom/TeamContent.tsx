"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useStore } from "@/lib/store";

const founders = [
  {
    name: "Naman Sharma",
    role: "Founder",
    bio: "Naman Sharma founded KLYVEN with the conviction that software should be built to last — fast, intelligent, and open. He drives the vision for AI-native platforms and real-time systems.",
    instagram: "https://www.instagram.com/naman.infinity",
    instagramHandle: "@naman.infinity",
    accent: "#00d4ff",
  },
  {
    name: "Ayush Mishra",
    role: "Founder",
    bio: "Ayush Mishra founded KLYVEN to reshape how people and communities interact with technology. He focuses on products, operating systems, and experiences built for the future.",
    instagram: null,
    instagramHandle: null,
    accent: "#7b2ff7",
  },
];

export function TeamContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full min-h-screen py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="text-xs tracking-[0.4em] uppercase"
            style={{ color: "rgba(0, 212, 255, 0.6)" }}
          >
            Founders &amp; Team
          </span>
          <h1 className="mt-4 text-[clamp(2.5rem,5vw,4rem)] font-extralight tracking-[-0.04em] leading-[1.05] text-white">
            Built by <span className="text-cyan-400">Founders</span>
          </h1>
          <div
            className="my-8 h-px w-24"
            style={{
              background:
                "linear-gradient(to right, rgba(0,212,255,0.4), transparent)",
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
          <strong className="text-white">Naman Sharma</strong> and{" "}
          <strong className="text-white">Ayush Mishra</strong> with a mission to
          build the foundational intelligence layer for next-generation software.
          They are building the leadership team today — currently hiring a CEO
          and co-founders to scale what&apos;s next.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.3 + i * 0.2,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-3xl p-8 md:p-10 transition-all duration-500"
              style={{
                background: "rgba(10, 14, 30, 0.7)",
                border: `1px solid ${founder.accent}22`,
                backdropFilter: "blur(20px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${founder.accent}55`;
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 20px 60px -20px ${founder.accent}33`;
                useStore.getState().setCursorVariant("hover");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${founder.accent}22`;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                useStore.getState().setCursorVariant("default");
              }}
            >
              <div className="flex items-center gap-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-extralight"
                  style={{
                    background: `linear-gradient(135deg, ${founder.accent}33, rgba(123,47,247,0.2))`,
                    border: `1px solid ${founder.accent}55`,
                    color: "#fff",
                    boxShadow: `0 0 30px ${founder.accent}22`,
                  }}
                >
                  {founder.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h2 className="text-xl tracking-[0.05em] text-white">
                    {founder.name}
                  </h2>
                  <span
                    className="text-[10px] tracking-[0.25em] uppercase"
                    style={{ color: founder.accent }}
                  >
                    {founder.role}
                  </span>
                </div>
              </div>
              <p className="mt-7 text-sm md:text-base leading-relaxed text-blue-100/75">
                {founder.bio}
              </p>
              {founder.instagram ? (
                <a
                  href={founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 text-[11px] tracking-[0.2em] uppercase py-3 px-6 rounded-full transition-all duration-300"
                  style={{
                    background: `${founder.accent}15`,
                    border: `1px solid ${founder.accent}35`,
                    color: founder.accent,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${founder.accent}25`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${founder.accent}22`;
                    useStore.getState().setCursorVariant("hover");
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${founder.accent}15`;
                    e.currentTarget.style.boxShadow = "none";
                    useStore.getState().setCursorVariant("default");
                  }}
                >
                  {founder.instagramHandle}
                  <span>→</span>
                </a>
              ) : (
                <span
                  className="inline-block mt-8 text-[11px] tracking-[0.2em] uppercase py-3 px-6 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(200,220,255,0.5)",
                  }}
                >
                  Coming soon
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="rounded-3xl p-8 md:p-10 mt-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,212,255,0.08), rgba(123,47,247,0.08))",
            border: "1px solid rgba(0, 212, 255, 0.18)",
            backdropFilter: "blur(20px)",
          }}
        >
          <p
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "rgba(0, 212, 255, 0.8)" }}
          >
            We&apos;re hiring
          </p>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-blue-100/80">
            KLYVEN is growing its leadership. We&apos;re hiring a{" "}
            <strong className="text-white">CEO</strong> and additional{" "}
            <strong className="text-white">co-founders</strong> to help build the
            next generation of software. If that sounds like you,{" "}
            <Link
              href="/contact"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              get in touch
            </Link>{" "}
            — we&apos;d love to talk.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
