"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const appUrl = "https://classsync-alpha.vercel.app";

const workflow = [
  { label: "Record", title: "Capture the explanation", copy: "Keep the teacher's thinking, not just the notes.", icon: "01" },
  { label: "Transform", title: "Make the idea visible", copy: "ClassSync turns the recording into a lesson students can follow.", icon: "02" },
  { label: "Understand", title: "Find the important parts", copy: "Key concepts, examples, and a clear path are ready to review.", icon: "03" },
  { label: "Continue", title: "Give learning a next step", copy: "Practice and homework keep the lesson moving after class.", icon: "04" },
];

const lessonCards = [
  { type: "concept", label: "KEY CONCEPT", title: "Photosynthesis", copy: "Plants convert light energy into chemical energy." },
  { type: "example", label: "VISUAL EXAMPLE", title: "Light → energy", copy: "See the process in three connected steps." },
  { type: "next", label: "NEXT STEP", title: "Check your understanding", copy: "Answer 3 quick questions before you move on." },
];

function Arrow() { return <span aria-hidden="true" className="cs-arrow">↗</span>; }

function ProductWindow({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(1);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % 3), 3600);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <div className={`cs-product-window ${compact ? "cs-product-window-compact" : ""}`}>
      <div className="cs-window-chrome"><div className="cs-window-dots"><i /><i /><i /></div><span>classsync / lesson workspace</span><span className="cs-window-status"><b /> Autosaved</span></div>
      <div className="cs-workspace">
        <aside className="cs-sidebar"><div className="cs-workspace-logo"><span>CS</span><strong>ClassSync</strong></div><p className="cs-sidebar-label">MY WORKSPACE</p><div className="cs-sidebar-item cs-sidebar-item-active"><span className="cs-sidebar-icon">▣</span> Lesson studio</div><div className="cs-sidebar-item"><span className="cs-sidebar-icon">◷</span> Recent lessons</div><div className="cs-sidebar-item"><span className="cs-sidebar-icon">⌁</span> Student progress</div><div className="cs-sidebar-spacer" /><div className="cs-teacher"><span className="cs-avatar">NS</span><span><strong>Naman Sharma</strong><small>Science · Grade 8</small></span><span>•••</span></div></aside>
        <div className="cs-main-panel"><div className="cs-workspace-head"><div><span className="cs-breadcrumb">LESSON STUDIO / BIOLOGY</span><h3>How plants make food</h3><p>Recorded today · 42 min class</p></div><button className="cs-share-button">Share lesson <Arrow /></button></div><div className="cs-progress-row"><div className="cs-progress-track"><motion.div animate={{ width: `${34 + active * 25}%` }} transition={{ duration: .7 }} /></div><span>{active === 0 ? "Recording" : active === 1 ? "Building lesson" : "Ready to teach"}</span></div><div className="cs-recording-card"><div className="cs-recording-top"><span className="cs-live-dot" /> <strong>{active === 0 ? "Processing your recording" : "Class recording"}</strong><span>12:48 / 42:06</span></div><div className="cs-waveform">{Array.from({ length: 46 }, (_, index) => <i key={index} style={{ height: `${18 + ((index * 17) % 48)}%`, opacity: index < 18 + active * 12 ? 1 : .22 }} />)}</div><div className="cs-recording-footer"><span>◀</span><div className="cs-mini-track"><b style={{ width: `${38 + active * 18}%` }} /></div><span>1.0×</span><span className="cs-recording-note">● Key moment at 12:48</span></div></div><div className="cs-section-heading"><div><span className="cs-breadcrumb">GENERATED LESSON</span><h4>Visual learning path</h4></div><span className="cs-card-count">3 cards ready</span></div><div className="cs-lesson-cards"><AnimatePresence mode="popLayout">{lessonCards.map((card, index) => <motion.div key={card.type} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: index <= active ? 1 : .48, y: 0 }} transition={{ delay: index * .08 }} className={`cs-lesson-card cs-lesson-card-${card.type}`}><div className="cs-card-art">{card.type === "concept" ? <><span className="cs-plant-stem" /><span className="cs-plant-leaf leaf-a" /><span className="cs-plant-leaf leaf-b" /><span className="cs-sun" /></> : card.type === "example" ? <><span className="cs-node node-a">LIGHT</span><span className="cs-node node-b">CO₂</span><span className="cs-node node-c">ENERGY</span><span className="cs-node-line" /></> : <><span className="cs-check">✓</span><span className="cs-check-line line-a" /><span className="cs-check-line line-b" /></>}</div><span className="cs-card-label">{card.label}</span><strong>{card.title}</strong><p>{card.copy}</p><span className="cs-card-link">Open card <Arrow /></span></motion.div>)}</AnimatePresence></div></div>
      </div>
    </div>
  );
}

function WorkflowStrip() { const [active, setActive] = useState(1); return <div className="cs-workflow-strip">{workflow.map((item, index) => <button key={item.label} onClick={() => setActive(index)} className={`cs-workflow-item ${active === index ? "is-active" : ""}`}><span className="cs-workflow-number">{item.icon}</span><span><strong>{item.label}</strong><small>{item.title}</small></span><Arrow /></button>)}</div>; }

export function ClassSyncLanding() {
  return (
    <main className="cs-site">
      <div className="cs-background" aria-hidden="true"><div className="cs-background-grid" /><div className="cs-background-glow" /></div>
      <nav className="cs-nav"><Link href="/classsync" className="cs-brand"><span>CS</span><strong>ClassSync</strong></Link><div className="cs-nav-links"><a href="#product">Product</a><a href="#how-it-works">How it works</a><a href="#teachers">For teachers</a><a href="#students">For students</a></div><div className="cs-nav-actions"><a href={appUrl} target="_blank" rel="noreferrer" className="cs-login">Log in</a><a href={appUrl} target="_blank" rel="noreferrer" className="cs-nav-cta">Start using ClassSync <Arrow /></a></div><button className="cs-mobile-menu" aria-label="Open menu">☰</button></nav>

      <section className="cs-hero" id="product"><div className="cs-hero-copy"><div className="cs-eyebrow"><span className="cs-eyebrow-line" /> THE LESSON WORKSPACE FOR REAL CLASSROOMS</div><h1>Never lose a<br /><em>lesson</em> again.</h1><p className="cs-hero-lede">ClassSync captures what a teacher explains, turns it into a visual lesson, and gives every student a clear next step.</p><div className="cs-hero-actions"><a href={appUrl} target="_blank" rel="noreferrer" className="cs-button cs-button-primary">Start using ClassSync <Arrow /></a><a href="#how-it-works" className="cs-button cs-button-secondary"><span className="cs-play">▶</span> See how it works</a></div><div className="cs-hero-proof"><span className="cs-proof-stack"><i>✓</i><i>↗</i><i>+</i></span><span>Built around the moments<br /><strong>that used to get lost.</strong></span></div></div><div className="cs-hero-product"><div className="cs-product-tag"><span className="cs-pulse" /> LIVE PRODUCT PREVIEW</div><ProductWindow /><p className="cs-product-caption">A lesson moves from recording to ready-to-learn in one workspace.</p></div></section>

      <section className="cs-problem"><div className="cs-section-intro"><span className="cs-eyebrow">THE PROBLEM</span><h2>A class can be over<br /><em>before learning is.</em></h2></div><div className="cs-problem-grid"><div className="cs-problem-statement"><span className="cs-big-quote">“</span><p>Teachers explain once. Students miss a piece. Notes become fragments. The bell rings.</p><span className="cs-dash-line" /></div><div className="cs-problem-list"><div><span>01</span><strong>The important moment moves too fast.</strong><p>A good explanation disappears when it only exists in the room.</p></div><div><span>02</span><strong>Incomplete notes create a harder next class.</strong><p>Students spend time reconstructing instead of understanding.</p></div><div><span>03</span><strong>Teachers repeat what should have carried forward.</strong><p>Every missed concept becomes tomorrow&apos;s interruption.</p></div></div></div></section>

      <section className="cs-solution" id="how-it-works"><div className="cs-section-intro cs-section-intro-wide"><span className="cs-eyebrow">THE CLASSYNC LOOP</span><h2>One explanation.<br /><em>A lesson that keeps going.</em></h2><p>ClassSync is the bridge between what happens in class and what students can actually return to later.</p></div><WorkflowStrip /><div className="cs-loop-visual"><div className="cs-loop-line" /><div className="cs-loop-orb orb-one">REC</div><div className="cs-loop-orb orb-two">AI</div><div className="cs-loop-orb orb-three">GO</div><div className="cs-loop-label label-one">Teacher explanation</div><div className="cs-loop-label label-two">ClassSync workspace</div><div className="cs-loop-label label-three">Student next step</div></div></section>

      <section className="cs-demo"><div className="cs-demo-copy"><span className="cs-eyebrow">SEE THE DIFFERENCE</span><h2>The product is the<br /><em>lesson plan.</em></h2><p>Not another place to upload a recording. A focused workspace that makes the next useful version of a class.</p><div className="cs-demo-points"><span><b>01</b><strong>Keep the explanation</strong><small>The original context stays attached to the lesson.</small></span><span><b>02</b><strong>Make the idea visible</strong><small>Concepts become cards students can scan and revisit.</small></span><span><b>03</b><strong>Continue with confidence</strong><small>Every lesson ends with a clear action, not a blank page.</small></span></div></div><div className="cs-demo-product"><ProductWindow compact /></div></section>

      <section className="cs-audience" id="teachers"><div className="cs-audience-card cs-audience-teacher"><div className="cs-audience-top"><span className="cs-eyebrow">FOR TEACHERS</span><span className="cs-audience-mark">T</span></div><h2>Teach the room.<br /><em>Keep the record.</em></h2><p>Spend your energy on the explanation, not on rebuilding it into five different resources after the bell.</p><a href={appUrl} target="_blank" rel="noreferrer" className="cs-inline-link">Build a lesson <Arrow /></a><div className="cs-audience-graphic cs-teacher-graphic"><span className="cs-graphic-window"><i /><i /><i /><b>42:06</b></span><span className="cs-graphic-wave" /></div></div><div className="cs-audience-card cs-audience-student" id="students"><div className="cs-audience-top"><span className="cs-eyebrow">FOR STUDENTS</span><span className="cs-audience-mark">S</span></div><h2>Come back to<br /><em>what matters.</em></h2><p>Review the explanation, see the key idea, and know exactly what to do next — even after class is over.</p><a href={appUrl} target="_blank" rel="noreferrer" className="cs-inline-link">Follow the next step <Arrow /></a><div className="cs-audience-graphic cs-student-graphic"><span className="cs-student-card"><b>✓</b><strong>Photosynthesis</strong><small>3 concepts understood</small></span><span className="cs-student-progress"><i /></span></div></div></section>

      <section className="cs-final"><div className="cs-final-mark">CS</div><span className="cs-eyebrow">START WITH THE NEXT CLASS</span><h2>Your next lesson<br /><em>shouldn&apos;t disappear.</em></h2><p>Give every explanation somewhere useful to go.</p><a href={appUrl} target="_blank" rel="noreferrer" className="cs-button cs-button-primary">Start using ClassSync <Arrow /></a></section>
      <footer className="cs-footer"><Link href="/classsync" className="cs-brand"><span>CS</span><strong>ClassSync</strong></Link><p>A KLYVEN project for better days in the classroom.</p><div><a href="#product">Product</a><a href="#how-it-works">How it works</a><a href={appUrl} target="_blank" rel="noreferrer">Open app ↗</a></div></footer>
    </main>
  );
}
