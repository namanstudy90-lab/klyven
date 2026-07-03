"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PARTICLE_COUNT } from "@/lib/constants";

export function VortexParticles() {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const t = Math.random();
      const radius = 1.5 + t * 8;
      const angle = t * Math.PI * 6;
      const height = (t - 0.5) * 20;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = height;
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      const c = Math.random();
      if (c < 0.4) {
        col[i * 3] = 0;
        col[i * 3 + 1] = 0.83;
        col[i * 3 + 2] = 1;
      } else if (c < 0.7) {
        col[i * 3] = 0.48;
        col[i * 3 + 1] = 0.18;
        col[i * 3 + 2] = 0.97;
      } else {
        col[i * 3] = 1;
        col[i * 3 + 1] = 0.18;
        col[i * 3 + 2] = 0.47;
      }
    }
    return [pos, col];
  }, []);

  const speeds = useMemo(() => {
    const s = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) s[i] = 0.2 + Math.random() * 0.5;
    return s;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const x = pos[i3];
      const z = pos[i3 + 2];
      const radius = Math.sqrt(x * x + z * z);
      const angle = Math.atan2(z, x) + 0.004 * speeds[i];
      pos[i3] = Math.cos(angle) * radius;
      pos[i3 + 2] = Math.sin(angle) * radius;
      pos[i3 + 1] += Math.sin(time * 0.3 + i) * 0.001;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.5}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}
