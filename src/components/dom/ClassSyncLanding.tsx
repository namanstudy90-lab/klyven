"use client";

import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, Sparkles, Text } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import type { Group, Mesh } from "three";

const appUrl = "https://classsync-alpha.vercel.app";

function LessonBook() {
  const book = useRef<Group>(null);
  const pageLeft = useRef<Mesh>(null);
  const pageRight = useRef<Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (book.current) {
      book.current.rotation.y = Math.sin(time * 0.35) * 0.18;
      book.current.rotation.x = -0.08 + Math.sin(time * 0.55) * 0.025;
      book.current.position.y = Math.sin(time * 0.7) * 0.14;
    }
    if (pageLeft.current) pageLeft.current.rotation.y = -0.16 + Math.sin(time * 0.8) * 0.025;
    if (pageRight.current) pageRight.current.rotation.y = 0.16 - Math.sin(time * 0.8) * 0.025;
  });

  return (
    <group ref={book} position={[0, 0, 0]}>
      <mesh position={[0, -0.12, -0.12]} rotation={[0, 0, 0]}>
        <boxGeometry args={[3.95, 2.45, 0.18]} />
        <meshStandardMaterial color="#111a3b" roughness={0.28} metalness={0.25} />
      </mesh>
      <mesh ref={pageLeft} position={[-0.94, 0.05, 0.08]} rotation={[0, -0.16, 0]}>
        <boxGeometry args={[1.86, 2.28, 0.075]} />
        <meshStandardMaterial color="#fff6e8" roughness={0.7} />
      </mesh>
      <mesh ref={pageRight} position={[0.94, 0.05, 0.08]} rotation={[0, 0.16, 0]}>
        <boxGeometry args={[1.86, 2.28, 0.075]} />
        <meshStandardMaterial color="#fff6e8" roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.1, 0.15]}>
        <boxGeometry args={[0.075, 2.26, 0.1]} />
        <meshStandardMaterial color="#ff806b" emissive="#ff806b" emissiveIntensity={0.3} />
      </mesh>

      <Text position={[-1.48, 0.72, 0.18]} rotation={[0, 0, 0]} fontSize={0.12} color="#64709a" anchorX="left" anchorY="middle">LESSON 01</Text>
      <Text position={[-1.48, 0.4, 0.18]} fontSize={0.22} color="#18234f" anchorX="left" anchorY="middle">Photosynthesis</Text>
      <mesh position={[-1.08, -0.28, 0.18]}>
        <circleGeometry args={[0.44, 32]} />
        <meshStandardMaterial color="#bfead6" emissive="#80d8b2" emissiveIntensity={0.18} />
      </mesh>
      <Text position={[-1.08, -0.28, 0.2]} fontSize={0.35} anchorX="center" anchorY="middle">🌱</Text>
      <mesh position={[-1.48, -0.78, 0.18]}><boxGeometry args={[1.25, 0.055, 0.02]} /><meshStandardMaterial color="#e8dccb" /></mesh>
      <mesh position={[-1.48, -0.62, 0.18]}><boxGeometry args={[1.55, 0.055, 0.02]} /><meshStandardMaterial color="#eee5d7" /></mesh>

      <Text position={[0.45, 0.72, 0.18]} fontSize={0.12} color="#64709a" anchorX="left" anchorY="middle">VISUAL GUIDE</Text>
      <mesh position={[0.82, 0.05, 0.18]}>
        <torusGeometry args={[0.47, 0.055, 12, 48]} />
        <meshStandardMaterial color="#625cf5" emissive="#625cf5" emissiveIntensity={0.45} />
      </mesh>
      <mesh position={[0.82, 0.05, 0.18]}>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshStandardMaterial color="#ff806b" emissive="#ff806b" emissiveIntensity={0.9} />
      </mesh>
      <mesh position={[0.45, -0.73, 0.18]}><boxGeometry args={[1.45, 0.055, 0.02]} /><meshStandardMaterial color="#d8d4f9" /></mesh>
      <mesh position={[0.45, -0.57, 0.18]}><boxGeometry args={[1.05, 0.055, 0.02]} /><meshStandardMaterial color="#e6e3fa" /></mesh>
    </group>
  );
}

function OrbitingLesson() {
  const orbit = useRef<Group>(null);
  useFrame((state) => {
    if (orbit.current) orbit.current.rotation.z = state.clock.getElapsedTime() * 0.16;
  });

  return (
    <group ref={orbit}>
      <Line points={[[-3.1, 0, 0], [3.1, 0, 0]]} color="#7f8cff" opacity={0.2} transparent lineWidth={1} />
      <Line points={[[0, -2.5, 0], [0, 2.5, 0]]} color="#ff806b" opacity={0.18} transparent lineWidth={1} />
      <mesh position={[-2.65, 0.22, 0.2]}><sphereGeometry args={[0.16, 20, 20]} /><meshStandardMaterial color="#ff806b" emissive="#ff806b" emissiveIntensity={0.8} /></mesh>
      <mesh position={[2.55, -0.3, 0.15]}><sphereGeometry args={[0.11, 20, 20]} /><meshStandardMaterial color="#82e0bb" emissive="#82e0bb" emissiveIntensity={0.75} /></mesh>
      <mesh position={[0.35, 2.05, 0.2]}><sphereGeometry args={[0.13, 20, 20]} /><meshStandardMaterial color="#ffdc78" emissive="#ffdc78" emissiveIntensity={0.8} /></mesh>
    </group>
  );
}

function LessonScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0.5, 7.6], fov: 34 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 5, 5]} intensity={3} color="#fff4df" />
      <pointLight position={[-4, 2, 3]} intensity={8} distance={10} color="#625cf5" />
      <pointLight position={[4, -1, 2]} intensity={5} distance={8} color="#ff806b" />
      <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.35}><LessonBook /></Float>
      <OrbitingLesson />
      <Sparkles count={45} scale={[7, 5, 3]} size={1.4} speed={0.25} color="#b5b8ff" opacity={0.65} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.25} maxPolarAngle={Math.PI / 1.75} autoRotate autoRotateSpeed={0.35} />
    </Canvas>
  );
}

export function ClassSyncLanding() {
  return (
    <main className="classsync-page min-h-screen overflow-hidden bg-[#f4f1ea] text-[#17233d] selection:bg-[#ff765f] selection:text-white">
      <div className="classsync-ambient pointer-events-none fixed inset-0" aria-hidden="true"><div className="classsync-glow classsync-glow-one" /><div className="classsync-glow classsync-glow-two" /><div className="classsync-grain" /></div>

      <nav className="relative z-20 mx-auto flex max-w-[90rem] items-center justify-between px-6 py-7 md:px-12 md:py-9"><Link href="/" className="flex items-center gap-3 text-[#17233d]"><span className="grid h-10 w-10 place-items-center rounded-[14px] bg-[#17233d] text-[10px] font-extrabold tracking-tight text-[#f4f1ea] shadow-[0_8px_24px_rgba(23,35,61,0.16)]">CS</span><span className="text-[16px] font-bold tracking-[-0.03em]">ClassSync</span></Link><div className="flex items-center gap-5"><span className="hidden text-[12px] font-medium text-[#17233d]/45 sm:inline">A KLYVEN project</span><a href={appUrl} target="_blank" rel="noopener noreferrer" className="classsync-nav-link">Open app <span>↗</span></a></div></nav>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-[90rem] items-center gap-2 px-6 pb-20 pt-4 md:grid-cols-[0.82fr_1.18fr] md:px-12 md:pb-28 md:pt-4"><div className="relative z-10 max-w-[42rem] md:pb-8"><motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="classsync-kicker">The classroom, in motion</motion.p><motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-7 max-w-2xl text-[clamp(3.6rem,7.6vw,8rem)] font-extrabold leading-[0.92] tracking-[-0.085em] text-[#17233d]">Keep every lesson <span className="text-[#5961d9]">alive.</span></motion.h1><motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mt-8 max-w-[27rem] text-[17px] leading-[1.65] tracking-[-0.015em] text-[#17233d]/58 md:text-[18px]">A teacher records. ClassSync turns the moment into a clear, visual lesson students can keep moving through.</motion.p><motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="mt-10 flex flex-wrap items-center gap-5"><a href={appUrl} target="_blank" rel="noopener noreferrer" className="classsync-primary-button">Start building <span>↗</span></a><a href="#flow" className="classsync-text-link">See how it works <span>↓</span></a></motion.div></div><div className="relative -my-4 h-[30rem] w-full md:-my-10 md:h-[43rem]"><div className="classsync-scene-halo" /><LessonScene /><div className="classsync-scene-caption">Drag the lesson · watch it unfold</div></div></section>

      <section id="flow" className="relative z-10 mx-auto max-w-[90rem] px-6 pb-28 md:px-12 md:pb-40"><div className="classsync-rule mb-12" /><div className="grid gap-14 md:grid-cols-3 md:gap-16">{["Capture the real explanation", "Turn ideas into a visual lesson", "Give students their next step"].map((label, index) => <motion.div key={label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.1 }} className="classsync-step"><span className="classsync-step-number">0{index + 1}</span><p>{label}</p><span className="classsync-step-arrow">↗</span></motion.div>)}</div></section>

      <section className="relative z-10 mx-auto max-w-[90rem] px-6 pb-28 md:px-12 md:pb-40"><div className="classsync-cta"><div className="classsync-cta-orbit classsync-cta-orbit-one" /><div className="classsync-cta-orbit classsync-cta-orbit-two" /><div className="relative max-w-[42rem]"><p className="classsync-kicker text-[#5961d9]">Never a wasted class</p><h2 className="mt-6 max-w-3xl text-[clamp(2.8rem,5.6vw,6rem)] font-extrabold leading-[0.94] tracking-[-0.08em] text-[#17233d]">The next lesson is already waiting.</h2><p className="mt-7 max-w-md text-[16px] leading-7 text-[#17233d]/55">Give every explanation somewhere useful to go.</p><a href={appUrl} target="_blank" rel="noopener noreferrer" className="classsync-primary-button mt-9">Open ClassSync <span>↗</span></a></div></div></section>

      <footer className="relative z-10 mx-auto flex max-w-[90rem] flex-col gap-3 border-t border-[#17233d]/12 px-6 py-8 text-[12px] font-medium text-[#17233d]/45 md:flex-row md:items-center md:justify-between md:px-12"><span>ClassSync is a KLYVEN project.</span><span>Built for better days in the classroom.</span></footer>
    </main>
  );
}
