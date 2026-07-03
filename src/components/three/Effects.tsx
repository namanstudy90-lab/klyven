"use client";

import { EffectComposer, Bloom, Vignette, ChromaticAberration } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";

export function Effects() {
  return (
    <EffectComposer multisampling={0} autoClear={false}>
      <Bloom
        intensity={0.6}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.05}
        kernelSize={KernelSize.MEDIUM}
        mipmapBlur
      />
      <ChromaticAberration
        offset={[0.002, 0.001]}
        radialModulation={false}
        resolutionX={1024}
        resolutionY={1024}
      />
      <Vignette offset={0.25} darkness={0.7} />
    </EffectComposer>
  );
}
