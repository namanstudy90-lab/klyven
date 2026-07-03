"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { GlassScene } from "./GlassScene";
import { Effects } from "./Effects";
import { CustomCursor } from "./CustomCursor";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance", toneMapping: 3, toneMappingExposure: 1.0 }}
        camera={{ position: [0, 0.5, 8], fov: 55, near: 0.1, far: 40 }}
        onCreated={({ gl }) => {
          gl.setClearColor("#060914");
          gl.domElement.style.cursor = "none";
        }}
      >
        <Suspense fallback={null}>
          <ErrorBoundary>
            <GlassScene />
            <Effects />
            <CustomCursor />
          </ErrorBoundary>
        </Suspense>
      </Canvas>
    </div>
  );
}
