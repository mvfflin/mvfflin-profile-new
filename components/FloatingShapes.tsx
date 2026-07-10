"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";


function Shape({
  geometry,
  position,
  rotationSpeed,
  floatSpeed,
  floatAmp,
  scale,
  color,
}: {
  geometry: "octahedron" | "icosahedron" | "torus" | "tetrahedron" | "dodecahedron";
  position: [number, number, number];
  rotationSpeed: [number, number, number];
  floatSpeed: number;
  floatAmp: number;
  scale: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const baseY = position[1];

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += rotationSpeed[0];
    meshRef.current.rotation.y += rotationSpeed[1];
    meshRef.current.rotation.z += rotationSpeed[2];
    meshRef.current.position.y =
      baseY + Math.sin(state.clock.elapsedTime * floatSpeed) * floatAmp;
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "torus":
        return <torusGeometry args={[1, 0.3, 8, 16]} />;
      case "tetrahedron":
        return <tetrahedronGeometry args={[1, 0]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[1, 0]} />;
    }
  }, [geometry]);

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {geo}
      <meshBasicMaterial color={color} wireframe transparent opacity={0.1} />
    </mesh>
  );
}


function ShapesScene() {
  const shapes = useMemo(
    () => [
      {
        geometry: "octahedron" as const,
        position: [-3.5, 1, -2] as [number, number, number],
        rotationSpeed: [0.003, 0.005, 0.002] as [number, number, number],
        floatSpeed: 0.6,
        floatAmp: 0.3,
        scale: 0.8,
        color: "#6366f1",
      },
      {
        geometry: "icosahedron" as const,
        position: [3.2, -0.5, -1.5] as [number, number, number],
        rotationSpeed: [0.004, 0.002, 0.003] as [number, number, number],
        floatSpeed: 0.5,
        floatAmp: 0.25,
        scale: 0.6,
        color: "#818cf8",
      },
      {
        geometry: "torus" as const,
        position: [-2, -1.5, -3] as [number, number, number],
        rotationSpeed: [0.002, 0.004, 0.001] as [number, number, number],
        floatSpeed: 0.4,
        floatAmp: 0.2,
        scale: 0.5,
        color: "#a5b4fc",
      },
      {
        geometry: "tetrahedron" as const,
        position: [1.5, 1.8, -2.5] as [number, number, number],
        rotationSpeed: [0.005, 0.003, 0.004] as [number, number, number],
        floatSpeed: 0.7,
        floatAmp: 0.35,
        scale: 0.45,
        color: "#6366f1",
      },
      {
        geometry: "dodecahedron" as const,
        position: [4, 0.8, -2] as [number, number, number],
        rotationSpeed: [0.002, 0.003, 0.005] as [number, number, number],
        floatSpeed: 0.55,
        floatAmp: 0.2,
        scale: 0.4,
        color: "#818cf8",
      },
      {
        geometry: "octahedron" as const,
        position: [-4.5, 0.2, -1] as [number, number, number],
        rotationSpeed: [0.003, 0.002, 0.004] as [number, number, number],
        floatSpeed: 0.45,
        floatAmp: 0.15,
        scale: 0.35,
        color: "#a5b4fc",
      },
    ],
    []
  );

  return (
    <>
      {shapes.map((shape, i) => (
        <Shape key={i} {...shape} />
      ))}
    </>
  );
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ShapesScene />
      </Canvas>
    </div>
  );
}
