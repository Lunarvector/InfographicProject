import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export function CokerModel() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 3;
    positions[i * 3 + 1] = Math.random() * 8 - 4;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
  }

  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.5, 2, 8, 16]} />
        <meshStandardMaterial color="#8b8b8b" metalness={0.7} roughness={0.3} />
      </mesh>

      <mesh position={[0, -3, 0]}>
        <cylinderGeometry args={[2, 2, 2, 16]} />
        <meshStandardMaterial color="#ff6b9d" emissive="#ff1493" emissiveIntensity={0.5} />
      </mesh>

      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[1.8, 2, 2, 16]} />
        <meshStandardMaterial color="#ffa07a" emissive="#ff7f50" emissiveIntensity={0.3} />
      </mesh>

      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[1.5, 1.8, 2, 16]} />
        <meshStandardMaterial color="#ffeb99" emissive="#ffd700" emissiveIntensity={0.2} />
      </mesh>

      <mesh position={[0, 3, 0]}>
        <cylinderGeometry args={[1.2, 1.5, 2, 16]} />
        <meshStandardMaterial color="#87ceeb" emissive="#4da6ff" emissiveIntensity={0.1} />
      </mesh>

      <mesh position={[2.5, 3, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.2, 2, 8]} />
        <meshStandardMaterial color="#999999" />
      </mesh>
      <mesh position={[2.5, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.2, 2, 8]} />
        <meshStandardMaterial color="#999999" />
      </mesh>
      <mesh position={[2.5, -1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.2, 2, 8]} />
        <meshStandardMaterial color="#999999" />
      </mesh>
      <mesh position={[2.5, -3, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.2, 2, 8]} />
        <meshStandardMaterial color="#999999" />
      </mesh>

      <Text position={[-3.5, 3, 0]} fontSize={0.35} color="#4da6ff" anchorX="right">
        360°F {'\n'} Light
      </Text>
      <Text position={[-3.5, 1, 0]} fontSize={0.35} color="#ffd700" anchorX="right">
        Gasoline
      </Text>
      <Text position={[-3.5, -1, 0]} fontSize={0.35} color="#ff7f50" anchorX="right">
        Diesel
      </Text>
      <Text position={[-3.5, -3, 0]} fontSize={0.35} color="#ff1493" anchorX="right">
        840°F {'\n'} Heavy
      </Text>

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={particleCount}
            itemSize={3}
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#ffeb99" transparent opacity={0.6} />
      </points>
    </group>
  );
}
