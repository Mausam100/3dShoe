import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import bg from "../assets/bg2.jpg";
import {
  OrbitControls,
  ContactShadows,
  Environment,
  Text,
} from "@react-three/drei";
// import Text3d from "./Text3d";

const CanvasContainer = ({ color }) => {
  
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="relative h-[94vh] rounded-[2vw] bg-cover bg-center items-center "
    >
     
      <div className="logo absolute top-0 left-0 bg-zinc-600  rounded-br-2xl">
        <h1 className="text-white text-4xl font-bold px-4 py-3">#style</h1>
        <div class="absolute w-[4vw] h-[2vw] top-[100%] left-[0%] rounded-full shadow-[-0.2vw_-1vw_0_#52525B]"></div>
        <div class="absolute w-[4vw] h-[2vw] top-[0%] left-[100%] rounded-full shadow-[-0.2vw_-1vw_0_#52525B]"></div>
      </div>
      <Canvas
        style={{ width: "70vw" }}
        camera={{ position: [0, 0, 5.5], fov: 40 }}
      >
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, -5]}
          castShadow
        />
        <Environment preset="city" />
        <ContactShadows
          resolution={512}
          position={[0, -0.8, 0]}
          opacity={1}
          scale={10}
          blur={2}
          far={0.8}
        />
        <Suspense fallback={null}>
          <group>
            <Model rotation={[0, 0, -0.7]} scale={0.5} color={color} />
            <OrbitControls
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              enableZoom={false}
              enablePan={false}
            />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasContainer;