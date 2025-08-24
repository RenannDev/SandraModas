import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

// Simple Garment Component (since we don't have a GLTF model)
function GarmentModel() {
  // Create a sophisticated jacket/blazer shape using basic geometries
  return (
    <group rotation={[0, Math.PI / 6, 0]}>
      {/* Main body of the jacket */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 2.2, 0.6]} />
        <meshStandardMaterial 
          color="#8B4513" 
          roughness={0.2} 
          metalness={0.1}
        />
      </mesh>
      
      {/* Left sleeve */}
      <mesh position={[-1.2, 0.3, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.25, 0.35, 1.8, 8]} />
        <meshStandardMaterial 
          color="#8B4513" 
          roughness={0.2} 
          metalness={0.1}
        />
      </mesh>
      
      {/* Right sleeve */}
      <mesh position={[1.2, 0.3, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.25, 0.35, 1.8, 8]} />
        <meshStandardMaterial 
          color="#8B4513" 
          roughness={0.2} 
          metalness={0.1}
        />
      </mesh>
      
      {/* Collar */}
      <mesh position={[0, 0.9, 0.25]}>
        <boxGeometry args={[0.8, 0.3, 0.1]} />
        <meshStandardMaterial 
          color="#654321" 
          roughness={0.1} 
          metalness={0.2}
        />
      </mesh>
      
      {/* Buttons */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, 0.3 - i * 0.4, 0.31]}>
          <cylinderGeometry args={[0.04, 0.04, 0.02, 8]} />
          <meshStandardMaterial 
            color="#DAA520" 
            roughness={0.1} 
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#DAA520" wireframe />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[3, 2, 5]} fov={50} />
      
      {/* Lighting setup */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-5, 5, 5]} intensity={0.5} />
      
      {/* Environment for reflections */}
      <Environment preset="studio" />
      
      {/* The 3D garment */}
      <Suspense fallback={<LoadingFallback />}>
        <GarmentModel />
      </Suspense>
      
      {/* Controls for rotation */}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={2}
      />
    </Canvas>
  );
}