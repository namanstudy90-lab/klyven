"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  { icon: "✦", title: "Record once", body: "Capture the class you taught, even when the next teacher cannot be there." },
  { icon: "☼", title: "See it come alive", body: "Turn explanations into friendly animated boards, diagrams, and moments students remember." },
  { icon: "⌁", title: "Keep learning moving", body: "Give every substitute a ready-to-teach lesson with practice and homework already inside." },
];

export function ClassSyncLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8ef] text-[#241a3d] selection:bg-[#ffb47b] selection:text-[#241a3d]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-24 top-32 h-80 w-80 rounded-full bg-[#ffd2b1] blur-3xl" />
        <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-[#c8c5ff] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#b9eddb] blur-3xl" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#7c5cff] text-sm font-black text-white shadow-[0_8px_24px_rgba(124,92,255,0.25)]">CS</span>
          <span className="text-lg">ClassSync</span>
        </Link>
        <Link href="/" className="rounded-full border border-[#241a3d]/10 bg-white/50 px-4 py-2 text-xs font-semibold text-[#625a73] backdrop-blur transition hover:bg-white">
          A KLYVEN project
        </Link>
      </nav>

      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 px-6 pb-20 pt-12 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:pb-28 md:pt-20">
        <div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="inline-flex rotate-[-2deg] items-center gap-2 rounded-full bg-[#241a3d] px-4 py-2 text-xs font-bold text-white shadow-lg">
            <span className="text-[#ffb47b]">✹</span> never a wasted class
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-7 max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-8xl">
            Make every lesson feel <span className="relative inline-block text-[#7c5cff]">alive<span className="absolute -right-5 -top-5 text-2xl text-[#ff8a5c]">✦</span></span>.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-7 max-w-xl text-lg leading-relaxed text-[#625a73] md:text-xl">
            ClassSync turns a teacher&apos;s recording into a complete, animated, substitute-ready lesson — so a missed class never becomes a lost class.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="https://classsync-alpha.vercel.app" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#7c5cff] px-7 py-4 text-sm font-bold text-white shadow-[0_16px_30px_rgba(124,92,255,0.25)] transition hover:-translate-y-1 hover:bg-[#6848f5]">
              Open ClassSync <span className="ml-2">↗</span>
            </a>
            <a href="#how-it-works" className="rounded-full border-2 border-[#241a3d]/10 px-7 py-3.5 text-sm font-bold text-[#625a73] transition hover:border-[#7c5cff]/40 hover:bg-white/70">
              See how it works
            </a>
          </motion.div>
          <p className="mt-5 text-xs font-semibold text-[#8b829a]">Built by KLYVEN for teachers, schools, and curious learners.</p>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.92, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.15, duration: 0.8 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-8 top-12 -rotate-12 rounded-3xl bg-[#ffb47b] px-4 py-3 text-sm font-black shadow-lg">listen</div>
          <div className="absolute -right-6 bottom-16 rotate-12 rounded-3xl bg-[#b9eddb] px-4 py-3 text-sm font-black shadow-lg">learn</div>
          <div className="relative rounded-[3rem] border-4 border-[#241a3d] bg-white p-5 shadow-[14px_18px_0_#241a3d]">
            <div className="rounded-[2.3rem] bg-[#eceaff] p-6">
              <div className="flex items-center justify-between text-xs font-bold text-[#625a73]"><span>Today&apos;s lesson</span><span className="rounded-full bg-white px-3 py-1">08:42</span></div>
              <div className="mt-7 rounded-[2rem] bg-[#7c5cff] p-6 text-white">
                <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/20 text-xl">☼</span><span className="text-sm font-bold">Photosynthesis</span></div>
                <div className="mt-8 h-3 w-4/5 rounded-full bg-white/30" /><div className="mt-3 h-3 w-3/5 rounded-full bg-white/20" />
                <div className="mt-10 flex items-end justify-between"><span className="text-4xl">🌱</span><span className="rounded-full bg-[#ffb47b] px-3 py-2 text-xs font-black text-[#241a3d]">PLAYING</span></div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3"><div className="h-14 rounded-2xl bg-[#ffdfcf]" /><div className="h-14 rounded-2xl bg-[#d5f5e8]" /><div className="h-14 rounded-2xl bg-[#fff0a9]" /></div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="how-it-works" className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-12 max-w-xl"><p className="text-xs font-black uppercase tracking-[0.25em] text-[#ff8a5c]">A little magic for the classroom</p><h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">From voice note to wow.</h2></div>
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, i) => <motion.article key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-[2rem] border-2 border-[#241a3d]/10 bg-white/65 p-7 shadow-[0_14px_0_rgba(36,26,61,0.06)] backdrop-blur transition hover:-translate-y-2"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eceaff] text-2xl text-[#7c5cff]">{feature.icon}</span><h3 className="mt-7 text-xl font-black">{feature.title}</h3><p className="mt-3 leading-relaxed text-[#625a73]">{feature.body}</p></motion.article>)}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-14 text-center md:px-10">
        <div className="rounded-[3rem] bg-[#241a3d] px-7 py-12 text-white shadow-[12px_14px_0_#ffb47b] md:px-14"><p className="text-4xl">✿</p><h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-6xl">Ready to make the next class count?</h2><a href="https://classsync-alpha.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[#ffb47b] px-7 py-4 text-sm font-black text-[#241a3d] transition hover:-translate-y-1 hover:bg-[#ffc89f]">Go to the ClassSync app ↗</a></div>
      </section>

      <footer className="relative z-10 border-t border-[#241a3d]/10 px-6 py-8 text-center text-sm text-[#8b829a]">ClassSync is a KLYVEN project · Built for better days in the classroom.</footer>
    </main>
  );
}
