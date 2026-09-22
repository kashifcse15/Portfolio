"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Model() {
  const { scene } = useGLTF("/models/portfolio.glb");

  const modelRef = useRef<THREE.Group>(null);

 useFrame((_, delta) => {
  if (modelRef.current) {
    modelRef.current.rotation.y += delta * 0.5;
  }
});

return (
  <group
    ref={modelRef}
    position={[2, 0, 0]}
  >
    <primitive
      object={scene}
      scale={2}
    />
  </group>
);
}
useGLTF.preload("/models/portfolio.glb");