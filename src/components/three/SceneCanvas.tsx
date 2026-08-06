"use client";

/**
 * Architectural prep for React Three Fiber scenes.
 * Not mounted on the homepage yet — ready for scroll-driven 3D work.
 */
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import type { ReactNode } from "react";

interface SceneCanvasProps {
  children?: ReactNode;
  className?: string;
}

function PlaceholderForm() {
  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
      <mesh>
        <icosahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#8b6f5c"
          roughness={0.55}
          metalness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export function SceneCanvas({ children, className }: SceneCanvasProps) {
  return (
    <div className={className ?? "h-full w-full"}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 4, 2]} intensity={1.1} color="#c4a574" />
        {children ?? <PlaceholderForm />}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
