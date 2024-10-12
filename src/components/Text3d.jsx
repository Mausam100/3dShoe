import { Suspense } from "react";
import { OrbitControls, Text } from "@react-three/drei";

const Text3d = () => {
  return (
    <mesh>
      <Suspense fallback={null}>
        <Text
          position={[0, 1, -3]}
          fontSize={1}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Style your
        </Text>
        <Text
          position={[0, 0, -2]}
          fontSize={1}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          shoe
        </Text>
      </Suspense>
    </mesh>
  );
};

export default Text3d;
