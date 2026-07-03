"use client";

import { Suspense, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CameraRig } from "./CameraRig";
import { Lighting } from "./Lighting";
import { VortexParticles } from "./VortexParticles";
import { GlassCore } from "./GlassCore";
import { GlassRings } from "./GlassRings";

function SceneryShape({ position, color, scale = 1, speed = 1 }: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const sy = position[1];

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.position.y = sy + Math.sin(t * 0.4) * 0.2;
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    ref.current.rotation.y = t * 0.08;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <octahedronGeometry args={[0.4, 0]} />
      <meshPhysicalMaterial
        color={color}
        metalness={0.2}
        roughness={0.05}
        transparent
        opacity={0.08}
        envMapIntensity={1.5}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function ServiceShape({ position, color, type, scale = 1 }: {
  position: [number, number, number];
  color: string;
  type: "cube" | "torus" | "ring";
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const sy = position[1];

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = sy + Math.sin(t * 0.5 + position[0]) * 0.15;
    ref.current.rotation.x = Math.sin(t * 0.15) * 0.2;
    ref.current.rotation.y = t * (type === "ring" ? 0.12 : 0.06);
  });

  const geo = useMemo(() => {
    if (type === "cube") return new THREE.BoxGeometry(0.35, 0.35, 0.35);
    if (type === "torus") return new THREE.TorusGeometry(0.3, 0.08, 16, 32);
    return new THREE.TorusGeometry(0.25, 0.05, 16, 32);
  }, [type]);

  return (
    <mesh ref={ref} position={position} scale={scale} geometry={geo}>
      <meshPhysicalMaterial
        color={color}
        metalness={0.1}
        roughness={0.05}
        transparent
        opacity={0.15}
        envMapIntensity={2}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function Scenery() {
  const shapes = useMemo(() => [
    { pos: [-3, -1, -8], color: "#ff2d78", scale: 0.6, speed: 0.3 },
    { pos: [4, 0.5, -10], color: "#00d4ff", scale: 0.5, speed: 0.5 },
    { pos: [-5, -0.5, -14], color: "#7b2ff7", scale: 0.7, speed: 0.2 },
    { pos: [3.5, -1.5, -18], color: "#00d4ff", scale: 0.4, speed: 0.6 },
    { pos: [-2, -2, -22], color: "#ff2d78", scale: 0.5, speed: 0.4 },
    { pos: [6, 0, -6], color: "#7b2ff7", scale: 0.3, speed: 0.7 },
    { pos: [-6, -0.8, -12], color: "#00d4ff", scale: 0.45, speed: 0.35 },
    { pos: [0, -2.5, -20], color: "#7b2ff7", scale: 0.55, speed: 0.25 },
    { pos: [2, -3, -26], color: "#ff2d78", scale: 0.4, speed: 0.5 },
    { pos: [-3, -3.5, -30], color: "#00d4ff", scale: 0.6, speed: 0.3 },
  ], []);

  const services = useMemo(() => [
    { pos: [-2, 0.3, -5] as [number, number, number], color: "#00d4ff", type: "cube" as const },
    { pos: [2.5, -0.2, -9] as [number, number, number], color: "#7b2ff7", type: "torus" as const },
    { pos: [-1.8, -0.8, -13] as [number, number, number], color: "#ff2d78", type: "ring" as const },
    { pos: [3, -1.5, -17] as [number, number, number], color: "#00d4ff", type: "cube" as const },
    { pos: [-2.5, -2, -21] as [number, number, number], color: "#7b2ff7", type: "torus" as const },
    { pos: [1.5, -2.8, -25] as [number, number, number], color: "#ff2d78", type: "ring" as const },
    { pos: [0, -3.5, -30] as [number, number, number], color: "#00d4ff", type: "cube" as const },
  ], []);

  return (
    <group>
      {shapes.map((s, i) => (
        <SceneryShape key={i} position={s.pos as [number, number, number]} color={s.color} scale={s.scale} speed={s.speed} />
      ))}
      {services.map((s, i) => (
        <ServiceShape key={`svc-${i}`} position={s.pos} color={s.color} type={s.type} />
      ))}
    </group>
  );
}

export function GlassScene() {
  return (
    <>
      <CameraRig />
      <ambientLight intensity={0.3} color="#4060ff" />
      <directionalLight position={[5, 8, 5]} intensity={0.6} color="#00d4ff" />
      <directionalLight position={[-5, -3, 3]} intensity={0.4} color="#7b2ff7" />
      <pointLight position={[0, 0, 0]} intensity={0.5} color="#00d4ff" distance={15} />
      <fog attach="fog" args={["#060914", 6, 28]} />
      <Suspense fallback={null}>
        <Lighting />
      </Suspense>
      <VortexParticles />
      <Suspense fallback={null}>
        <GlassCore />
        <GlassRings />
        <Scenery />
      </Suspense>
    </>
  );
}
