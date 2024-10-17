import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const ARViewer = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <OrbitControls />
      <primitive object={scene} />
    </Canvas>
  );
};

export default ARViewer;
