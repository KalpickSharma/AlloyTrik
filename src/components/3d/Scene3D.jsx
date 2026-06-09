import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import FloatingShapes from './FloatingShapes';
import ParticleField from './ParticleField';

export function Scene3D() {
    return (
        <div className="fixed inset-0 -z-10 h-screen w-full overflow-hidden pointer-events-none">
            {/* Ambient gradients behind the canvas */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
            <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-pink-500/4 blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />

            <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
                style={{ background: 'transparent' }}
                dpr={[1, 1.5]} // Pixel ratio for performance
            >
                <Suspense fallback={null}>
                    {/* Ambient lighting */}
                    <ambientLight intensity={0.3} />

                    {/* Directional light */}
                    <directionalLight position={[10, 10, 5]} intensity={1} />

                    {/* Point lights for color */}
                    <pointLight position={[-10, -10, -5]} color="#22d3ee" intensity={2} />
                    <pointLight position={[10, 10, 5]} color="#a855f7" intensity={2} />

                    {/* 3D Components */}
                    <FloatingShapes />
                    <ParticleField />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default Scene3D;
