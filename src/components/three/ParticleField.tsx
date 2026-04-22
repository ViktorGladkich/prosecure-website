"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

interface ParticleCloudProps {
  count: number;
  radius: number;
  size: number;
  opacity: number;
  color: string;
  reduced: boolean;
  rotateY: number;
  rotateX: number;
  pointer: React.MutableRefObject<{ x: number; y: number }>;
  parallax: number;
}

function ParticleCloud({
  count,
  radius,
  size,
  opacity,
  color,
  reduced,
  rotateY,
  rotateX,
  pointer,
  parallax,
}: ParticleCloudProps) {
  const groupRef = useRef<THREE.Group>(null);

  const positions = useMemo<Float32Array>(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      // Distribute inside a shallow flattened sphere (z squashed a bit for depth feel).
      const r = Math.cbrt(Math.random()) * radius;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi) * 0.65;
      arr[i * 3 + 0] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    }
    return arr;
  }, [count, radius]);

  useFrame((_state, delta) => {
    const group = groupRef.current;
    if (!group) return;
    if (reduced) return;

    group.rotation.y += rotateY * delta;
    group.rotation.x += rotateX * delta;

    // Pointer parallax, clamped.
    const targetY = pointer.current.x * parallax;
    const targetX = -pointer.current.y * parallax;
    group.rotation.y += (targetY - (group.rotation.y % (Math.PI * 2))) * 0.01;
    group.rotation.x += (targetX - group.rotation.x) * 0.03;

    // Clamp parallax contribution so rotations stay within ±0.15 rad band.
    if (group.rotation.x > 0.15) group.rotation.x = 0.15;
    if (group.rotation.x < -0.15) group.rotation.x = -0.15;
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color={color}
          size={size}
          sizeAttenuation
          transparent
          opacity={opacity}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

interface SceneProps {
  reduced: boolean;
}

function Scene({ reduced }: SceneProps) {
  const pointer = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      pointer.current.x = nx;
      pointer.current.y = ny;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <fog attach="fog" args={["#0A0A0F", 4, 10]} />
      <ParticleCloud
        count={1800}
        radius={3.2}
        size={0.018}
        opacity={0.85}
        color="#C9A84C"
        reduced={reduced}
        rotateY={0.04}
        rotateX={0.015}
        pointer={pointer}
        parallax={0.12}
      />
      <ParticleCloud
        count={300}
        radius={2.6}
        size={0.03}
        opacity={0.95}
        color="#E8CE78"
        reduced={reduced}
        rotateY={0.02}
        rotateX={0.01}
        pointer={pointer}
        parallax={0.15}
      />
    </>
  );
}

export function ParticleField() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [reduced, setReduced] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Scene reduced={reduced} />
      </Canvas>
    </div>
  );
}

export default ParticleField;
