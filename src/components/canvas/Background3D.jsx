import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ═══════════════════════════════════════════════════
   NEBULA PARTICLES
   - Slow-rotating cosmic particles
   - Cyan → Purple color gradient
   ═══════════════════════════════════════════════════ */
function NebulaParticles({ count = 1500 }) {
  const pointsRef = useRef();

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const cyan = new THREE.Color('#00d4ff');
    const purple = new THREE.Color('#a855f7');
    const pink = new THREE.Color('#ec4899');
    const colorChoices = [cyan, purple, pink];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spread particles in a wide cube volume
      positions[i3] = (Math.random() - 0.5) * 30;
      positions[i3 + 1] = (Math.random() - 0.5) * 30;
      positions[i3 + 2] = (Math.random() - 0.5) * 20 - 5;

      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      const mix = Math.random();
      const blended = new THREE.Color().lerpColors(cyan, purple, mix);
      colors[i3] = blended.r;
      colors[i3 + 1] = blended.g;
      colors[i3 + 2] = blended.b;

      sizes[i] = Math.random() * 3 + 0.5;
    }

    return { positions, colors, sizes };
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime();
      pointsRef.current.rotation.y = time * 0.02;
      pointsRef.current.rotation.x = Math.sin(time * 0.05) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ═══════════════════════════════════════════════════
   FLOATING ORB MESH
   - Large semi-transparent orb with wireframe
   ═══════════════════════════════════════════════════ */
function FloatingOrb({ position, scale = 1, color = '#00d4ff', speed = 0.3 }) {
  const meshRef = useRef();
  const wireRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.z = time * 0.15;
    }
    if (wireRef.current) {
      wireRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
      wireRef.current.rotation.x = time * 0.1;
      wireRef.current.rotation.z = time * 0.15;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.03}
        />
      </mesh>
      <mesh ref={wireRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}

/* ═══════════════════════════════════════════════════
   BACKGROUND 3D SCENE
   ═══════════════════════════════════════════════════ */
const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-full overflow-hidden pointer-events-none">
      {/* Ambient gradient orbs behind the canvas */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-pink-500/4 blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />

      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <NebulaParticles count={1200} />
          <FloatingOrb position={[-5, 2, -8]} scale={2.5} color="#00d4ff" speed={0.3} />
          <FloatingOrb position={[5, -2, -6]} scale={2} color="#a855f7" speed={0.4} />
          <FloatingOrb position={[0, 4, -10]} scale={3} color="#ec4899" speed={0.2} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background3D;
