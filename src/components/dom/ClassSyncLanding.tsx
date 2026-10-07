"use client";

import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, RoundedBox, Sparkles, Text } from "@react-three/drei";
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
    <main className="min-h-screen overflow-hidden bg-[#080d25] text-white selection:bg-[#ff806b] selection:text-[#080d25]">
      <div className="pointer-events-none fixed inset-0" aria-hidden="true"><div className="absolute left-[-20%] top-[-15%] h-[34rem] w-[34rem] rounded-full bg-[#625cf5]/20 blur-[120px]" /><div className="absolute right-[-14%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-[#ff806b]/12 blur-[120px]" /><div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:64px_64px]" /></div>

      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8"><Link href="/" className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#ff806b] text-[10px] font-black text-[#080d25] shadow-[0_0_24px_rgba(255,128,107,0.24)]">CS</span><span className="text-[15px] font-bold tracking-tight">ClassSync</span></Link><div className="flex items-center gap-4"><span className="hidden text-xs text-white/45 sm:inline">A KLYVEN project</span><a href={appUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary min-h-0 rounded-full border-0 bg-white px-4 py-2.5 text-xs font-bold text-[#080d25] hover:bg-[#ff806b]">Open app <span className="ml-1">↗</span></a></div></nav>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-5 px-6 pb-20 pt-8 md:grid-cols-[0.75fr_1.25fr] md:px-10 md:pb-28 md:pt-10"><div className="max-w-xl"><motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#ff806b]">The classroom, in motion</motion.p><motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-6 max-w-lg text-[clamp(3.5rem,7.5vw,7.4rem)] font-black leading-[0.88] tracking-[-0.075em]">Keep every lesson <span className="text-[#8f93ff]">alive.</span></motion.h1><motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mt-7 max-w-md text-[15px] leading-7 text-white/55 md:text-base">A teacher records. ClassSync transforms. Students keep moving.</motion.p><motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="mt-8 flex flex-wrap gap-3"><a href={appUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary min-h-0 rounded-full border-0 bg-[#ff806b] px-6 py-4 text-sm font-bold text-[#080d25] shadow-[0_12px_30px_rgba(255,128,107,0.22)] hover:bg-[#ff9a88]">Start building <span className="ml-2">↗</span></a><a href="#flow" className="btn btn-ghost min-h-0 rounded-full border border-white/15 px-6 py-4 text-sm font-bold text-white/70 hover:bg-white/10">Explore the flow</a></motion.div></div><div className="relative h-[28rem] w-full md:h-[38rem]"><div className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#625cf5]/16 blur-[90px]" /><LessonScene /><div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">drag the lesson · watch it unfold</div></div></section>

      <section id="flow" className="relative z-10 border-y border-white/10 bg-white/[0.03] px-6 py-16 md:px-10 md:py-20"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3 md:gap-0">{["Capture the real explanation", "Turn ideas into a visual lesson", "Give students their next step"].map((label, index) => <motion.div key={label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="border-white/10 md:border-l md:px-8 md:first:border-l-0"><span className="text-xs font-bold tracking-[0.2em] text-[#ff806b]">0{index + 1}</span><p className="mt-4 max-w-xs text-xl font-bold leading-tight tracking-[-0.03em] text-white/90">{label}</p></motion.div>)}</div></section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36"><div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#171d4a] to-[#0d1232] px-7 py-14 shadow-[0_30px_80px_rgba(0,0,0,0.2)] md:px-16 md:py-20"><div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#8f93ff]/30" /><div className="absolute -right-2 -top-6 h-48 w-48 rounded-full border border-[#ff806b]/20" /><div className="relative max-w-2xl"><p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8f93ff]">Never a wasted class</p><h2 className="mt-5 max-w-xl text-4xl font-black leading-[0.92] tracking-[-0.065em] md:text-6xl">The next lesson is already waiting.</h2><a href={appUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-9 min-h-0 rounded-full border-0 bg-[#ff806b] px-6 py-4 text-sm font-bold text-[#080d25] hover:bg-[#ff9a88]">Open ClassSync <span className="ml-2">↗</span></a></div></div></section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-xs text-white/35">ClassSync is a KLYVEN project · Built for better days in the classroom.</footer>
    </main>
  );
}
