"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useStore } from "@/lib/store";

const PATH = [
  { pos: [0, 0.5, 8], look: [0, 0, 0] },
  { pos: [0, 0.8, 4], look: [0, 0, -2] },
  { pos: [-0.5, 0.5, 0], look: [0, 0, -3] },
  { pos: [0.3, 0.3, -3], look: [0, 0, -5] },
  { pos: [-0.3, 0, -6], look: [0, -0.2, -7] },
  { pos: [0.5, -0.2, -9], look: [0, -0.3, -8] },
  { pos: [-0.4, -0.5, -12], look: [0, -0.4, -10] },
  { pos: [0, -0.8, -16], look: [0, -0.6, -14] },
  { pos: [0, -1, -20], look: [0, -0.8, -18] },
];

function lerp3(a: number[], b: number[], t: number) {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ];
}

export function CameraRig() {
  const { camera } = useThree();
  const mousePosition = useStore((s) => s.mousePosition);
  const scrollProgress = useStore((s) => s.scrollProgress);
  const currentPos = useRef(new THREE.Vector3(0, 0.5, 8));
  const currentLook = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((_, delta) => {
    const t = scrollProgress * (PATH.length - 1);
    const idx = Math.min(Math.floor(t), PATH.length - 2);
    const frac = Math.min(t - idx, 1);

    const a = PATH[idx];
    const b = PATH[Math.min(idx + 1, PATH.length - 1)];

    const targetPos = lerp3(a.pos, b.pos, frac);
    const targetLook = lerp3(a.look, b.look, frac);

    const mx = mousePosition.x * 0.15;
    const my = mousePosition.y * 0.1;

    const smooth = 1 - Math.exp(-5 * delta);
    currentPos.current.lerp(
      new THREE.Vector3(targetPos[0] + mx, targetPos[1] + my, targetPos[2]),
      smooth
    );
    currentLook.current.lerp(
      new THREE.Vector3(targetLook[0], targetLook[1], targetLook[2]),
      smooth
    );

    camera.position.copy(currentPos.current);
    camera.lookAt(currentLook.current);
  });

  return null;
}
