import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ color, rotation }) {
  const { nodes, materials } = useGLTF('/shoe-draco.glb');
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime(); // Get elapsed time for animations
    // Floating effect
    ref.current.position.y = 0.3 + Math.sin(t) / 10; // Adjust the Y position for floating
  });

  return (
    <group ref={ref} dispose={null} rotation={rotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={"black"}

      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={"black"}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={"black"}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={"black"}

      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={"black"}

      />
    </group>
  );
}

useGLTF.preload('/shoe-draco.glb');
