import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


export const GlobeCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 5]} />
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial color="skyblue" wireframe />
      </mesh>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
    </Canvas>
  );
};
