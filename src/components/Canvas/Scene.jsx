import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Custom Star Field for better distribution
function StarField({ count = 8000 }) {
    const mesh = useRef();

    // Generate random star positions in a box volume for even distribution
    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // x: -60 to 60, y: -40 to 40, z: -40 to 20
            positions[i * 3] = (Math.random() - 0.5) * 120;     // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 80;  // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 80;  // z
        }
        return positions;
    }, [count]);

    // Generate a glow texture for the stars
    const texture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const context = canvas.getContext('2d');
        const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.4, 'rgba(0, 255, 136, 0.5)'); // Neon green glow
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, 32, 32);
        return new THREE.CanvasTexture(canvas);
    }, []);

    // Animate stars
    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x -= delta * 0.05;
            mesh.current.rotation.y -= delta * 0.07;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.5} // Increased size for glow visibility
                map={texture}
                transparent={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                color="#00ff88"
            />
        </points>
    );
}

function Scene() {
    const sphereRef = useRef();

    // Rotate the sphere slowly
    useFrame((state) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = state.clock.elapsedTime * 0.1;
            sphereRef.current.rotation.y = state.clock.elapsedTime * 0.15;
        }
    });

    return (
        <>
            {/* Ambient lighting */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ff88" />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00ffaa" />

            {/* Custom Star Field */}
            <StarField count={8000} />

            {/* Main 3D Object - Abstract sphere with glow */}
            <Float
                speed={2}
                rotationIntensity={0.5}
                floatIntensity={0.5}
            >
                <Sphere ref={sphereRef} args={[1, 64, 64]} position={[2, 0, -2]}>
                    <MeshDistortMaterial
                        color="#00ff88"
                        emissive="#00ff88"
                        emissiveIntensity={0.4}
                        attach="material"
                        distort={0.4}
                        speed={2}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </Sphere>
            </Float>

            {/* Secondary decorative element with glow */}
            <Float
                speed={1.5}
                rotationIntensity={0.3}
                floatIntensity={0.3}
            >
                <Sphere args={[0.5, 32, 32]} position={[-2, -1, -3]}>
                    <MeshDistortMaterial
                        color="#00ffaa"
                        emissive="#00ffaa"
                        emissiveIntensity={0.3}
                        attach="material"
                        distort={0.3}
                        speed={1.5}
                        roughness={0.3}
                        metalness={0.6}
                    />
                </Sphere>
            </Float>
        </>
    );
}

export default Scene;
