"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useStore } from "@/lib/store";

const EASE = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  {
    index: "01",
    title: "School Management Systems",
    body: "Admissions, attendance, grading, timetables — the core systems that run your campus, engineered around how your school actually works.",
  },
  {
    index: "02",
    title: "Learning & Classroom Platforms",
    body: "Assignments, resources, and communication in one clear space — built so teachers and students stay on the same page.",
  },
  {
    index: "03",
    title: "Student · Parent · Admin Portals",
    body: "One place for the whole school. Progress, schedules, fees, and announcements without the clutter of off-the-shelf suites.",
  },
  {
    index: "04",
    title: "Custom Tools & Integrations",
    body: "Software that plugs into what you already use — and fills the exact gaps that generic tools could never cover.",
  },
];

const steps = ["Consult", "Design", "Build", "Deploy", "Support"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: EASE,
    },
  }),
};

export function SchoolsContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-full">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060914]/50 via-transparent to-[#060914]/60" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
            className="inline-block text-[11px] tracking-[0.5em] uppercase text-cyan-400/60 mb-8"
          >
            KLYVEN × Education
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="text-[clamp(2.5rem,6vw,5rem)] font-extralight tracking-[-0.03em] leading-[1.1] text-white"
          >
            Software built for{" "}
            <span className="text-cyan-400">your school</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            className="mt-8 mb-8 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
            className="text-sm md:text-base leading-relaxed text-blue-100/70 max-w-xl mx-auto"
          >
            KLYVEN custom-builds software for schools — from the systems that
            run your campus to the tools your teachers and students use every
            day. No bloated suites. No one-size-fits-all.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/classsync/"
              className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase py-4 px-10 rounded-full transition-all duration-500 text-white"
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
              See ClassSync <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href="/contact"
              className="text-xs tracking-[0.25em] uppercase py-4 px-10 rounded-full transition-all duration-500 text-white"
              style={{
                background: "rgba(0,212,255,0.15)",
                border: "1px solid rgba(0,212,255,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,212,255,0.25)";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(0,212,255,0.15)";
                useStore.getState().setCursorVariant("hover");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,212,255,0.15)";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
                e.currentTarget.style.boxShadow = "none";
                useStore.getState().setCursorVariant("default");
              }}
            >
              Get in Touch
            </Link>
            <a
              href="#capabilities"
              className="text-xs tracking-[0.25em] uppercase py-4 px-10 rounded-full transition-all duration-500 text-blue-100/60"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              onMouseEnter={() => useStore.getState().setCursorVariant("hover")}
              onMouseLeave={() => useStore.getState().setCursorVariant("default")}
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-16"
          >
            <span className="text-[11px] tracking-[0.4em] uppercase text-cyan-400/60">
              What we build
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-[-0.03em] leading-[1.1] text-white">
              The Campus <span className="text-cyan-400">Spec</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.index}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-12 gap-4 py-10 border-t"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
                onMouseEnter={() => useStore.getState().setCursorVariant("hover")}
                onMouseLeave={() => useStore.getState().setCursorVariant("default")}
              >
                <div className="col-span-12 md:col-span-2">
                  <span className="text-4xl font-extralight text-cyan-400/40">
                    {cap.index}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-lg font-extralight tracking-[0.02em] text-white leading-snug">
                    {cap.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <p className="text-sm leading-relaxed text-blue-100/70">
                    {cap.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-16"
          >
            <span className="text-[11px] tracking-[0.4em] uppercase text-cyan-400/60">
              How we work
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-[-0.03em] leading-[1.1] text-white">
              The build <span className="text-cyan-400">sequence</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="rounded-3xl p-10 md:p-14"
            style={{
              background: "var(--klyven-card-bg)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              boxShadow: "var(--klyven-card-shadow)",
            }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 relative">
              <div
                className="hidden sm:block absolute top-[18px] left-[10%] right-[10%] h-px"
                style={{
                  background: "linear-gradient(to right, rgba(0,212,255,0.15), rgba(0,212,255,0.35), rgba(0,212,255,0.15))",
                }}
              />
              {steps.map((step, i) => (
                <div key={step} className="text-center relative">
                  <span
                    className="relative inline-flex items-center justify-center w-10 h-10 rounded-full text-xs text-cyan-400"
                    style={{
                      background: "#060914",
                      border: "1px solid rgba(0,212,255,0.3)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <p className="mt-4 text-[11px] tracking-[0.2em] uppercase text-blue-100/70">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="rounded-3xl p-10 md:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.08), rgba(123,47,247,0.08))",
              border: "1px solid rgba(0,212,255,0.15)",
              backdropFilter: "blur(20px)",
              boxShadow: "var(--klyven-card-shadow)",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-extralight tracking-[-0.02em] text-white leading-snug">
              Let&apos;s build your{" "}
              <span className="text-cyan-400">school&apos;s software</span>
            </h2>
            <p className="mt-5 text-sm md:text-base leading-relaxed text-blue-100/70 max-w-md mx-auto">
              Tell us how your school works and what needs fixing — we&apos;ll
              design the right software around it.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block text-xs tracking-[0.25em] uppercase py-4 px-10 rounded-full transition-all duration-500 text-white"
              style={{
                background: "rgba(0,212,255,0.15)",
                border: "1px solid rgba(0,212,255,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,212,255,0.25)";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(0,212,255,0.15)";
                useStore.getState().setCursorVariant("hover");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,212,255,0.15)";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
                e.currentTarget.style.boxShadow = "none";
                useStore.getState().setCursorVariant("default");
              }}
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
