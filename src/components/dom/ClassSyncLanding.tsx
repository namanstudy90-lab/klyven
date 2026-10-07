"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const appUrl = "https://classsync-alpha.vercel.app";

const lessonSteps = [
  { number: "01", label: "Capture", title: "The teacher explains", text: "Record the lesson naturally. ClassSync keeps the ideas, examples, and rhythm." },
  { number: "02", label: "Shape", title: "The lesson takes form", text: "A clear visual guide, practice moments, and a ready-to-teach script come together." },
  { number: "03", label: "Continue", title: "Students keep moving", text: "A missed class becomes a moment to learn—not a gap to recover from." },
];

function OpenBook() {
  return (
    <div className="relative mx-auto w-full max-w-[31rem] [perspective:1400px]">
      <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative h-[22rem] sm:h-[26rem]">
        <div className="absolute left-1/2 top-1/2 h-[18rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-[1.5rem] bg-[#d7cdbd] opacity-50 blur-2xl" />
        <div className="absolute left-1/2 top-[52%] h-5 w-[25rem] -translate-x-1/2 rounded-full bg-[#17243b]/20 blur-md" />
        <div className="absolute left-1/2 top-1/2 z-10 h-[17rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-[1.3rem] bg-[#263957] shadow-[0_22px_0_#17243b,0_34px_50px_rgba(23,36,59,0.24)] sm:h-[19rem] sm:w-[28rem]">
          <div className="absolute inset-x-0 bottom-0 h-4 rounded-b-[1.3rem] bg-[#17243b]" />
          <div className="absolute left-1/2 top-3 bottom-4 z-30 w-[3px] -translate-x-1/2 rounded-full bg-[#17243b]/50" />
          <motion.div initial={{ rotateY: -6 }} animate={{ rotateY: [-6, -2, -6] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "right center" }} className="absolute left-3 top-3 bottom-4 w-[calc(50%-4px)] rounded-l-[1rem] bg-[#fffdf7] p-5 shadow-[-8px_5px_12px_rgba(23,36,59,0.1)] sm:p-7">
            <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.18em] text-[#9b8e7c]"><span>Lesson 01</span><span>Listen</span></div>
            <div className="mt-8 space-y-3"><div className="h-2 w-4/5 rounded-full bg-[#e8ded0]" /><div className="h-2 w-full rounded-full bg-[#eee7dc]" /><div className="h-2 w-3/5 rounded-full bg-[#eee7dc]" /></div>
            <div className="mt-10 grid h-20 place-items-center rounded-2xl bg-[#f8e5d7] text-4xl sm:h-24">🎙️</div>
            <div className="mt-5 flex items-end gap-1.5"><motion.span animate={{ height: [8, 20, 12, 27, 10] }} transition={{ duration: 1.4, repeat: Infinity }} className="w-1.5 rounded-full bg-[#f18468]" /><motion.span animate={{ height: [16, 10, 26, 14, 20] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-1.5 rounded-full bg-[#f18468]" /><motion.span animate={{ height: [24, 14, 9, 22, 16] }} transition={{ duration: 1.1, repeat: Infinity }} className="w-1.5 rounded-full bg-[#f18468]" /><div className="ml-2 h-1.5 flex-1 rounded-full bg-[#eee7dc]" /></div>
          </motion.div>
          <motion.div initial={{ rotateY: 6 }} animate={{ rotateY: [6, 2, 6] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "left center" }} className="absolute right-3 top-3 bottom-4 w-[calc(50%-4px)] rounded-r-[1rem] bg-[#fffdf7] p-5 shadow-[8px_5px_12px_rgba(23,36,59,0.1)] sm:p-7">
            <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.18em] text-[#9b8e7c]"><span>Photosynthesis</span><span>Build</span></div>
            <div className="mt-7 flex items-center justify-center"><motion.div animate={{ scale: [1, 1.07, 1] }} transition={{ duration: 3, repeat: Infinity }} className="grid h-20 w-20 place-items-center rounded-full bg-[#ccefe0] text-4xl sm:h-24 sm:w-24">🌱</motion.div></div>
            <div className="mt-7 space-y-3"><div className="h-2 w-full rounded-full bg-[#d9eee5]" /><div className="h-2 w-4/5 rounded-full bg-[#e8f4ee]" /><div className="h-2 w-3/5 rounded-full bg-[#e8f4ee]" /></div>
            <div className="mt-8 rounded-xl bg-[#625cf5] px-3 py-2 text-center text-[9px] font-bold uppercase tracking-[0.14em] text-white">Try it yourself</div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-1 top-5 z-40 rounded-xl border border-[#17243b]/10 bg-white px-3 py-2 shadow-[0_12px_24px_rgba(23,36,59,0.12)] sm:-right-6"><p className="text-[10px] font-bold text-[#17243b]">Lesson ready</p><p className="mt-0.5 text-[9px] text-[#8b95a5]">3 activities added</p></motion.div>
    </div>
  );
}

export function ClassSyncLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f0e8] text-[#17243b] selection:bg-[#625cf5] selection:text-white">
      <div className="pointer-events-none fixed inset-0 opacity-40" aria-hidden="true"><div className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-[#f18468]" /><div className="absolute right-[14%] top-[28%] h-1.5 w-1.5 rounded-full bg-[#625cf5]" /><div className="absolute left-[42%] top-[68%] h-2 w-2 rounded-full bg-[#6bcaa0]" /></div>

      <nav className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10 md:py-8"><Link href="/" className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#17243b] text-[10px] font-black text-white">CS</span><span className="text-[15px] font-bold tracking-[-0.02em]">ClassSync</span></Link><div className="flex items-center gap-5"><span className="hidden text-xs text-[#7c8798] sm:inline">A KLYVEN project</span><a href={appUrl} target="_blank" rel="noopener noreferrer" className="btn btn-neutral min-h-0 rounded-full border-0 px-4 py-2.5 text-xs font-bold">Open app <span className="ml-1">↗</span></a></div></nav>

      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 pb-24 pt-12 md:grid-cols-[0.9fr_1.1fr] md:gap-8 md:px-10 md:pb-32 md:pt-20"><div className="max-w-xl"><motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f18468]">Continuity for every classroom</motion.p><motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 font-serif text-[clamp(3.4rem,7vw,6.6rem)] font-bold leading-[0.91] tracking-[-0.065em] text-[#17243b]">A better way to keep a lesson <span className="text-[#625cf5]">alive.</span></motion.h1><motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-7 max-w-lg text-[15px] leading-7 text-[#697588] md:text-lg">ClassSync turns a teacher&apos;s recording into a visual, substitute-ready lesson—so students can keep learning even when the school day changes.</motion.p><motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-9 flex flex-wrap items-center gap-3"><a href={appUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary min-h-0 rounded-full border-0 bg-[#625cf5] px-6 py-4 text-sm font-bold text-white shadow-[0_12px_22px_rgba(98,92,245,0.2)]">Start a lesson <span className="ml-2">↗</span></a><a href="#flow" className="btn btn-ghost min-h-0 rounded-full border border-[#17243b]/15 bg-white/40 px-6 py-4 text-sm font-bold text-[#536176]">See how it works</a></motion.div><p className="mt-7 text-xs font-semibold text-[#9a9388]">For teachers, schools, and curious learners.</p></div><OpenBook /></section>

      <section className="relative z-10 border-y border-[#17243b]/10 bg-[#eee8dd]/70"><div className="mx-auto grid max-w-6xl gap-8 px-6 py-8 sm:grid-cols-3 md:px-10"><div><p className="text-2xl font-serif font-bold text-[#17243b]">one recording</p><p className="mt-1 text-xs text-[#7c8798]">to start the lesson</p></div><div><p className="text-2xl font-serif font-bold text-[#17243b]">three moments</p><p className="mt-1 text-xs text-[#7c8798]">explain · practice · reflect</p></div><div><p className="text-2xl font-serif font-bold text-[#17243b]">zero gaps</p><p className="mt-1 text-xs text-[#7c8798]">when the day changes</p></div></div></section>

      <section id="flow" className="relative z-10 mx-auto max-w-6xl scroll-mt-5 px-6 py-24 md:px-10 md:py-32"><div className="max-w-2xl"><p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#625cf5]">The ClassSync method</p><h2 className="mt-5 max-w-xl font-serif text-4xl font-bold leading-[0.98] tracking-[-0.05em] md:text-6xl">The book opens. The learning continues.</h2></div><div className="mt-14 grid gap-0 md:grid-cols-3">{lessonSteps.map((step, index) => <motion.article key={step.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.12 }} className="relative border-t border-[#17243b]/15 py-7 md:min-h-[15rem] md:border-l md:border-t-0 md:px-7 md:first:border-l-0"><span className="text-xs font-bold tracking-[0.16em] text-[#a49d91]">{step.number}</span><p className="mt-10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f18468]">{step.label}</p><h3 className="mt-3 font-serif text-2xl font-bold tracking-[-0.04em]">{step.title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-[#697588]">{step.text}</p></motion.article>)}</div></section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-28 md:px-10 md:pb-36"><div className="card overflow-hidden rounded-[2rem] border-0 bg-[#17243b] text-[#fffdf7] shadow-[0_20px_45px_rgba(23,36,59,0.16)]"><div className="grid items-center gap-10 px-7 py-12 md:grid-cols-[1fr_auto] md:px-14 md:py-16"><div><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffb39d]">Make the next class count</p><h2 className="mt-5 max-w-2xl font-serif text-4xl font-bold leading-[0.98] tracking-[-0.055em] md:text-6xl">Every good lesson deserves another chance to land.</h2><p className="mt-5 max-w-lg text-sm leading-6 text-white/60">Bring continuity, clarity, and a little more breathing room to the school day.</p></div><a href={appUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary min-h-0 rounded-full border-0 bg-[#ffb39d] px-6 py-4 text-sm font-bold text-[#17243b]">Open ClassSync <span className="ml-2">↗</span></a></div></div></section>

      <footer className="relative z-10 border-t border-[#17243b]/10 px-6 py-8 text-center text-xs font-semibold text-[#8b918f]">ClassSync is a KLYVEN project · Built for better days in the classroom.</footer>
    </main>
  );
}
