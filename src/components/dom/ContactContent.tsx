"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useStore } from "@/lib/store";

const CONTACT_EMAIL = "Klyven4UU@gmail.com";

const channels = [
  {
    label: "Official Brand",
    handle: "@klyvenofficial",
    body: "Follow KLYVEN's official Instagram for updates.",
    href: "https://www.instagram.com/klyvenofficial",
    accent: "#00d4ff",
    icon: "◈",
  },
  {
    label: "Founder",
    handle: "@naman.infinity",
    body: "Reach Naman Sharma, founder of KLYVEN.",
    href: "https://www.instagram.com/naman.infinity",
    accent: "#ff2d78",
    icon: "◆",
  },
];

export function ContactContent() {
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
            Get in Touch
          </span>
          <h1 className="mt-4 text-[clamp(2.5rem,5vw,4rem)] font-extralight tracking-[-0.04em] leading-[1.05] text-white">
            Let&apos;s <span className="text-cyan-400">Connect</span>
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
          className="text-sm md:text-base leading-relaxed text-blue-100/80 max-w-xl"
        >
          Whether you&apos;re a founder, developer, or dreamer with the next big
          idea, we&apos;d love to hear from you. Reach us by email or on
          Instagram.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {channels.map((channel, i) => (
            <motion.a
              key={channel.handle}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.3 + i * 0.2,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-3xl p-8 md:p-10 block transition-all duration-500"
              style={{
                background: "rgba(10, 14, 30, 0.7)",
                border: `1px solid ${channel.accent}22`,
                backdropFilter: "blur(20px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${channel.accent}55`;
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 20px 60px -20px ${channel.accent}33`;
                useStore.getState().setCursorVariant("hover");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${channel.accent}22`;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                useStore.getState().setCursorVariant("default");
              }}
            >
              <span
                className="block text-3xl mb-5"
                style={{ color: `${channel.accent}88` }}
              >
                {channel.icon}
              </span>
              <span
                className="text-[10px] tracking-[0.25em] uppercase"
                style={{ color: `${channel.accent}`, opacity: 0.8 }}
              >
                {channel.label}
              </span>
              <h2 className="mt-3 text-xl text-white">{channel.handle}</h2>
              <p className="mt-3 text-sm text-blue-100/60">{channel.body}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.7,
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
          <span
            className="text-[10px] tracking-[0.25em] uppercase"
            style={{ color: "rgba(0, 212, 255, 0.8)" }}
          >
            Official Email
          </span>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-blue-100/80">
            Prefer email? Reach us directly at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
