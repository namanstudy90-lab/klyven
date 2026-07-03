"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Ring({ radius, tube, color, tilt, speed, phase }: {
  radius: number;
  tube: number;
  color: string;
  tilt: [number, number, number];
  speed: number;
  phase: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const rotY = useRef(phase);

  useFrame((_, delta) => {
    if (ref.current) {
      rotY.current += delta * speed;
      ref.current.rotation.x = tilt[0];
      ref.current.rotation.y = rotY.current;
      ref.current.rotation.z = tilt[2];
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 32, 64]} />
      <meshPhysicalMaterial
        color={color}
        metalness={0.2}
        roughness={0.05}
        transparent
        opacity={0.12}
        envMapIntensity={1.5}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function RingDots({ radius, count, color, speed, tilt }: {
  radius: number;
  count: number;
  color: string;
  speed: number;
  tilt: [number, number, number];
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speed;
  });

  const dots = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    return { x: Math.cos(angle) * radius, z: Math.sin(angle) * radius };
  });

  return (
    <group ref={ref} rotation={[tilt[0], 0, tilt[2]]}>
      {dots.map((d, i) => (
        <mesh key={i} position={[d.x, 0, d.z]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color={color} transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

export function GlassRings() {
  return (
    <group>
      <Ring radius={1.9} tube={0.015} color="#00d4ff" tilt={[0.2, 0, 0.1]} speed={0.15} phase={0} />
      <Ring radius={2.5} tube={0.012} color="#7b2ff7" tilt={[0.5, 0, 0.3]} speed={-0.1} phase={1.2} />
      <Ring radius={3.2} tube={0.01} color="#00d4ff" tilt={[0.8, 0, 0]} speed={0.08} phase={2.5} />
      <RingDots radius={2.5} count={24} color="#00d4ff" speed={0.12} tilt={[0.5, 0, 0.3]} />
      <RingDots radius={3.2} count={32} color="#7b2ff7" speed={-0.06} tilt={[0.8, 0, 0]} />
    </group>
  );
}
