import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

export function CokerModel() {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 4;
    positions[i * 3 + 1] = Math.random() * 10 - 5;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
  }

  return (
    <>
      <OrbitControls enableZoom={true} enablePan={false} />
      <group ref={groupRef}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[2, 2.5, 10, 32]} />
          <meshStandardMaterial color="#8b8b8b" metalness={0.8} roughness={0.2} />
        </mesh>

        <mesh position={[0, -4, 0]}>
          <cylinderGeometry args={[2.5, 2.5, 2.5, 32]} />
          <meshStandardMaterial color="#ff6b9d" emissive="#ff1493" emissiveIntensity={0.6} />
        </mesh>

        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[2.2, 2.5, 2.5, 32]} />
          <meshStandardMaterial color="#ffa07a" emissive="#ff7f50" emissiveIntensity={0.4} />
        </mesh>

        <mesh position={[0, 1.5, 0]}>
          <cylinderGeometry args={[2, 2.2, 2.5, 32]} />
          <meshStandardMaterial color="#ffeb99" emissive="#ffd700" emissiveIntensity={0.3} />
        </mesh>

        <mesh position={[0, 4, 0]}>
          <cylinderGeometry args={[1.5, 2, 2.5, 32]} />
          <meshStandardMaterial color="#87ceeb" emissive="#4da6ff" emissiveIntensity={0.2} />
        </mesh>

        <mesh position={[3.5, 4, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.3, 0.3, 3, 16]} />
          <meshStandardMaterial color="#999999" metalness={0.6} />
        </mesh>
        <mesh position={[3.5, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.3, 0.3, 3, 16]} />
          <meshStandardMaterial color="#999999" metalness={0.6} />
        </mesh>
        <mesh position={[3.5, -1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.3, 0.3, 3, 16]} />
          <meshStandardMaterial color="#999999" metalness={0.6} />
        </mesh>
        <mesh position={[3.5, -4, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.3, 0.3, 3, 16]} />
          <meshStandardMaterial color="#999999" metalness={0.6} />
        </mesh>

        <Text position={[-4.5, 4, 0]} fontSize={0.5} color="#4da6ff" anchorX="right" font="/fonts/inter-bold.woff">
          360°F{'\n'}Light
        </Text>
        <Text position={[-4.5, 1.5, 0]} fontSize={0.5} color="#ffd700" anchorX="right" font="/fonts/inter-bold.woff">
          Gasoline
        </Text>
        <Text position={[-4.5, -1.5, 0]} fontSize={0.5} color="#ff7f50" anchorX="right" font="/fonts/inter-bold.woff">
          Diesel
        </Text>
        <Text position={[-4.5, -4, 0]} fontSize={0.5} color="#ff1493" anchorX="right" font="/fonts/inter-bold.woff">
          840°F{'\n'}Heavy
        </Text>

        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={positions}
              count={particleCount}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial size={0.08} color="#ffeb99" transparent opacity={0.7} />
        </points>
      </group>
    </>
  );
}
