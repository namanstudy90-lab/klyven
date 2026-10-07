"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const appUrl = "https://classsync-alpha.vercel.app";

const particles = [
  { left: "7%", top: "18%", size: 8, color: "#ff866c", delay: 0 },
  { left: "18%", top: "71%", size: 5, color: "#625cf5", delay: 1.8 },
  { left: "32%", top: "10%", size: 6, color: "#f6c85f", delay: 0.8 },
  { left: "48%", top: "76%", size: 9, color: "#8adcc1", delay: 2.4 },
  { left: "68%", top: "12%", size: 5, color: "#ff866c", delay: 1.2 },
  { left: "86%", top: "26%", size: 8, color: "#625cf5", delay: 0.4 },
  { left: "91%", top: "73%", size: 5, color: "#f6c85f", delay: 2 },
];

const steps = [
  { number: "01", kicker: "Teacher", title: "Record the lesson", body: "Capture the explanation you already give. ClassSync listens for the ideas, examples, and moments that matter.", color: "#fff0e9", icon: "◉" },
  { number: "02", kicker: "ClassSync", title: "Make it teachable", body: "The lesson becomes a clear visual guide with a script, examples, practice, and a ready-to-use flow.", color: "#efedff", icon: "✦" },
  { number: "03", kicker: "Student", title: "Keep learning moving", body: "When a class is missed, students still have a lesson that feels human, useful, and easy to follow.", color: "#e7faf3", icon: "↗" },
];

function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-[-16rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#dcd9ff]/60 blur-3xl" />
      <div className="absolute -left-40 top-48 h-96 w-96 rounded-full bg-[#ffe0d2]/60 blur-3xl" />
      <div className="absolute -right-40 top-[30rem] h-96 w-96 rounded-full bg-[#d3f6e9]/70 blur-3xl" />
      {particles.map((particle, index) => (
        <motion.span key={index} className="absolute rounded-full" style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size, backgroundColor: particle.color }} animate={{ y: [0, -16, 0], opacity: [0.35, 0.9, 0.35], scale: [1, 1.35, 1] }} transition={{ duration: 4.5 + index * 0.35, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }} />
      ))}
    </div>
  );
}

function LessonBoard() {
  return (
    <motion.div initial={{ opacity: 0, y: 28, rotate: 2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.18 }} className="relative mx-auto w-full max-w-[34rem]">
      <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-3 top-12 z-20 rounded-2xl border border-[#18233a]/10 bg-white px-4 py-3 shadow-[0_14px_30px_rgba(24,35,58,0.12)] md:-right-8"><div className="flex items-center gap-2 text-xs font-bold text-[#18233a]"><span className="h-2 w-2 rounded-full bg-[#69d3a7]" /> Lesson ready</div><p className="mt-1 text-[11px] text-[#718097]">3 activities added</p></motion.div>
      <div className="rounded-[2rem] border border-white/80 bg-white/75 p-3 shadow-[0_30px_80px_rgba(65,62,130,0.18)] backdrop-blur-xl md:rounded-[2.5rem] md:p-4">
        <div className="rounded-[1.5rem] bg-[#f1f0ff] p-5 md:rounded-[2rem] md:p-7"><div className="flex items-center justify-between text-xs font-bold text-[#78839b]"><span>ClassSync lesson studio</span><span className="rounded-full bg-white px-3 py-1 text-[#625cf5]">08:42</span></div><div className="mt-6 flex items-center gap-4"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#625cf5] text-xl text-white shadow-[0_10px_20px_rgba(98,92,245,0.25)]">☼</div><div><p className="text-sm font-extrabold text-[#18233a]">Photosynthesis</p><p className="mt-1 text-xs text-[#78839b]">Science · Grade 7</p></div></div><div className="mt-7 overflow-hidden rounded-2xl bg-[#625cf5] p-5 text-white shadow-[0_12px_22px_rgba(98,92,245,0.2)]"><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[0.16em] text-white/65">Visual explainer</span><span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold">PLAYING</span></div><div className="relative mt-6 h-28"><motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute left-2 top-3 grid h-20 w-20 place-items-center rounded-full bg-[#ffb59e] text-4xl shadow-[0_0_0_10px_rgba(255,181,158,0.18)]">🌱</motion.div><div className="absolute left-28 top-6 h-px w-20 bg-white/45" /><div className="absolute left-28 top-14 h-px w-32 bg-white/25" /><motion.span animate={{ x: [0, 105], opacity: [0, 1, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} className="absolute left-28 top-[23px] text-lg text-[#fff0a7]">✦</motion.span><div className="absolute right-2 bottom-1 grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-2xl">☀</div></div></div><div className="mt-5 grid grid-cols-3 gap-3"><div className="h-3 rounded-full bg-[#ffcab9]" /><div className="h-3 rounded-full bg-[#a9e8cf]" /><div className="h-3 rounded-full bg-[#f8dc7b]" /></div></div>
      </div>
      <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#18233a]/10 bg-[#fff0a7] px-4 py-3 text-xs font-extrabold text-[#18233a] shadow-[0_12px_24px_rgba(24,35,58,0.1)] md:-left-8">learn → remember</div>
    </motion.div>
  );
}

export function ClassSyncLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfaf5] text-[#18233a] selection:bg-[#625cf5] selection:text-white">
      <ParticleField />
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8"><Link href="/" className="group flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-[0.9rem] bg-[#625cf5] text-xs font-black text-white shadow-[0_10px_20px_rgba(98,92,245,0.22)] transition-transform group-hover:-rotate-6">CS</span><span className="text-base font-extrabold tracking-[-0.03em]">ClassSync</span></Link><div className="flex items-center gap-3"><span className="hidden text-xs font-semibold text-[#7b879b] sm:inline">A KLYVEN project</span><a href={appUrl} target="_blank" rel="noopener noreferrer" className="btn btn-neutral min-h-0 rounded-full border-0 px-4 py-2.5 text-xs font-bold text-white">Open app <span className="ml-1">↗</span></a></div></nav>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-16 md:grid-cols-[0.92fr_1.08fr] md:px-10 md:pb-36 md:pt-24"><div className="max-w-2xl"><motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-[#625cf5]/15 bg-white/70 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#625cf5] shadow-sm"><span className="h-2 w-2 rounded-full bg-[#ff866c]" /> education, made memorable</motion.div><motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }} className="mt-7 max-w-xl text-[clamp(3.4rem,7vw,6.8rem)] font-black leading-[0.93] tracking-[-0.075em] text-[#18233a]">Every lesson deserves a <span className="text-[#625cf5]">second life.</span></motion.h1><motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18 }} className="mt-7 max-w-xl text-base leading-7 text-[#647189] md:text-lg">ClassSync turns a teacher&apos;s recording into a complete, visual, substitute-ready lesson — so a missed class never becomes a lost class.</motion.p><motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.28 }} className="mt-9 flex flex-wrap items-center gap-4"><a href={appUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#625cf5] px-6 py-4 text-sm font-extrabold text-white shadow-[0_16px_30px_rgba(98,92,245,0.24)] transition hover:-translate-y-1 hover:bg-[#514bf0]">Try ClassSync <span className="ml-2">↗</span></a><a href="#how-it-works" className="rounded-full border border-[#18233a]/12 bg-white/60 px-6 py-4 text-sm font-bold text-[#506078] transition hover:border-[#625cf5]/35 hover:bg-white">See the flow <span className="ml-2">↓</span></a></motion.div><div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs font-bold text-[#8a95a7]"><span><strong className="text-[#18233a]">01</strong> record</span><span><strong className="text-[#18233a]">02</strong> transform</span><span><strong className="text-[#18233a]">03</strong> keep going</span></div></div><LessonBoard /></section>

      <section id="how-it-works" className="relative z-10 mx-auto max-w-7xl scroll-mt-8 px-6 py-24 md:px-10 md:py-32"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#ff866c]">The learning loop</p><h2 className="mt-4 max-w-2xl text-4xl font-black leading-[0.98] tracking-[-0.06em] md:text-6xl">From a teacher&apos;s voice to a student&apos;s next step.</h2></div><p className="max-w-sm text-sm leading-6 text-[#718097]">One simple flow for continuity, clarity, and a little more breathing room in the school day.</p></div><div className="mt-14 grid gap-5 md:grid-cols-3">{steps.map((step, index) => <motion.article key={step.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65, delay: index * 0.12 }} className="group rounded-[1.75rem] border border-[#18233a]/8 bg-white/75 p-7 shadow-[0_16px_40px_rgba(24,35,58,0.05)] transition hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(24,35,58,0.1)]"><div className="flex items-start justify-between"><span className="text-xs font-black tracking-[0.15em] text-[#9ba5b5]">{step.number}</span><span className="grid h-11 w-11 place-items-center rounded-2xl text-xl transition-transform group-hover:rotate-12" style={{ backgroundColor: step.color }}>{step.icon}</span></div><p className="mt-12 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#625cf5]">{step.kicker}</p><h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">{step.title}</h3><p className="mt-3 text-sm leading-6 text-[#718097]">{step.body}</p></motion.article>)}</div></section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40"><div className="relative overflow-hidden rounded-[2.5rem] bg-[#18233a] px-7 py-14 text-white shadow-[0_24px_60px_rgba(24,35,58,0.16)] md:px-16 md:py-20"><div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[36px] border-[#625cf5]/40" /><div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full border-[24px] border-[#ff866c]/25" /><div className="relative max-w-2xl"><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#ffb59e]">Make the next class count</p><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.06em] md:text-6xl">Keep the lesson moving, even when the day changes.</h2><p className="mt-6 max-w-lg text-sm leading-6 text-white/65">Built for teachers, schools, and curious learners who believe continuity is part of great teaching.</p><a href={appUrl} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex rounded-full bg-[#ffb59e] px-6 py-4 text-sm font-extrabold text-[#18233a] transition hover:-translate-y-1 hover:bg-[#ffc7b5]">Go to the ClassSync app <span className="ml-2">↗</span></a></div></div></section>

      <footer className="relative z-10 border-t border-[#18233a]/8 px-6 py-8 text-center text-xs font-semibold text-[#8a95a7]">ClassSync is a KLYVEN project · Built for better days in the classroom.</footer>
    </main>
  );
}

