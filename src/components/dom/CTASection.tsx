"use client";

import { useStore } from "@/lib/store";
import { useState } from "react";

export function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center select-none py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060914]/50 via-[#060914]/40 to-[#060914]/60" />
      <div className="relative max-w-3xl w-full px-4 text-center">
        <div
          className="rounded-3xl p-10 md:p-14"
          style={{
            background: "rgba(10, 14, 30, 0.7)",
            border: "1px solid rgba(0, 212, 255, 0.1)",
            backdropFilter: "blur(20px)",
          }}
        >
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extralight tracking-[-0.04em] leading-[1.05] text-white">
            Start Building With{" "}
            <span className="text-cyan-400">KLYVEN</span>
          </h2>
          <div className="mt-6 h-px w-20 mx-auto bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          <p className="mt-6 text-sm leading-relaxed max-w-lg mx-auto text-blue-100/70">
            Whether you&apos;re a developer exploring open-source tools, a founder looking for
            a technology partner, or a dreamer with the next big idea — there&apos;s a place
            for you here.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <a
              href="#"
              className="flex-1 py-4 px-6 rounded-full text-xs tracking-[0.25em] uppercase transition-all duration-500 text-center text-white"
              style={{
                background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(123,47,247,0.2))",
                border: "1px solid rgba(0,212,255,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(0,212,255,0.35), rgba(123,47,247,0.35))";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(0,212,255,0.15)";
                useStore.getState().setCursorVariant("hover");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(123,47,247,0.2))";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
                e.currentTarget.style.boxShadow = "none";
                useStore.getState().setCursorVariant("default");
              }}
            >
              Get Started Free
            </a>
            <a
              href="#"
              className="flex-1 py-4 px-6 rounded-full text-xs tracking-[0.25em] uppercase transition-all duration-500 text-center text-blue-100/70"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                useStore.getState().setCursorVariant("hover");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                useStore.getState().setCursorVariant("default");
              }}
            >
              Partner With Us
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <input
              type="email"
              placeholder="Join the newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 max-w-xs px-5 py-3 rounded-full text-sm tracking-[0.05em] outline-none transition-all duration-300"
              style={{
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(0,212,255,0.12)",
                color: "#eef4ff",
              }}
              onFocus={() => useStore.getState().setCursorVariant("hover")}
              onBlur={() => useStore.getState().setCursorVariant("default")}
            />
            <button
              className="px-6 py-3 rounded-full text-[10px] tracking-[0.25em] uppercase whitespace-nowrap transition-all duration-500 text-blue-100/70"
              style={{
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,212,255,0.15)";
                useStore.getState().setCursorVariant("hover");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,212,255,0.08)";
                useStore.getState().setCursorVariant("default");
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
