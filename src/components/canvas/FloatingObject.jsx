import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingObject = ({ geometry, position, speed = 1, rotationSpeed = 1, parallaxFactor = 0.5, ...props }) => {
    const meshRef = useRef();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Subtle mouse reaction (tilting/shifting)
        const { x, y } = state.mouse;
        meshRef.current.rotation.x += (y * 0.1 - meshRef.current.rotation.x) * 0.05;
        meshRef.current.rotation.y += (x * 0.1 - meshRef.current.rotation.y) * 0.05;

        // Scroll parallax: move slightly in opposite direction of scroll
        const targetY = position[1] + (scrollY * 0.005 * parallaxFactor);
        meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.1;
    });

    return (
        <Float
            speed={speed * 2}
            rotationIntensity={rotationSpeed}
            floatIntensity={2}
            position={position}
        >
            <mesh ref={meshRef} {...props} castShadow receiveShadow>
                {geometry}
                <meshPhysicalMaterial
                    transparent
                    opacity={0.3}
                    roughness={0}
                    metalness={0.1}
                    color="#ffffff"
                    transmission={0.8}
                    thickness={1}
                    ior={1.45}
                />
            </mesh>
        </Float>
    );
};

export default FloatingObject;
