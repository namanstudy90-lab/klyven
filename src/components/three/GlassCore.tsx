"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useStore } from "@/lib/store";

function FresnelGlow({ radius, color }: { radius: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const pulse = 1 + 0.04 * Math.sin(state.clock.elapsedTime * 0.4);
      ref.current.scale.setScalar(pulse);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.05} depthWrite={false} />
    </mesh>
  );
}

export function GlassCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const mousePosition = useStore((s) => s.mousePosition);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (meshRef.current) {
      const rx = mousePosition.y * 0.2;
      const ry = mousePosition.x * 0.3 + time * 0.15;
      meshRef.current.rotation.x += (rx - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (ry - meshRef.current.rotation.y) * 0.05;
    }

    if (innerRef.current) {
      innerRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
      innerRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <FresnelGlow radius={2.2} color="#00d4ff" />

      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.1, 0.35, 180, 24]} />
        <meshPhysicalMaterial
          color="#00d4ff"
          metalness={0.1}
          roughness={0.05}
          transparent
          opacity={0.25}
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshPhysicalMaterial
          color="#7b2ff7"
          metalness={0.3}
          roughness={0.1}
          transparent
          opacity={0.3}
          envMapIntensity={1.5}
          wireframe={false}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      <FresnelGlow radius={0.8} color="#7b2ff7" />
    </group>
  );
}
