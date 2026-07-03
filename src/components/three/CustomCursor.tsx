"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useStore } from "@/lib/store";

export function CustomCursor() {
  const ref = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const { pointer, viewport } = useThree();
  const cursorVariant = useStore((s) => s.cursorVariant);
  const targetPos = useRef(new THREE.Vector3());

  useFrame(() => {
    if (!ref.current || !glowRef.current) return;
    targetPos.current.x = pointer.x * (viewport.width / 2);
    targetPos.current.y = pointer.y * (viewport.height / 2);
    targetPos.current.z = 2;
    ref.current.position.lerp(targetPos.current, 0.12);
    glowRef.current.position.copy(ref.current.position);
    const targetScale = cursorVariant === "hover" ? 2.5 : 1;
    const targetOpacity = cursorVariant === "hover" ? 0.35 : 0.12;
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity += (targetOpacity - mat.opacity) * 0.1;
    glowRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
  });

  return (
    <group>
      <mesh ref={ref}>
        <ringGeometry args={[0.06, 0.08, 32]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.12} depthWrite={false} />
      </mesh>
      <mesh ref={glowRef}>
        <circleGeometry args={[0.04, 16]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.06} depthWrite={false} />
      </mesh>
    </group>
  );
}
