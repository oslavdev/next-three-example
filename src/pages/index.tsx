import React from "react";
import { Canvas } from "react-three-fiber";
import Loader from "@/components/Loader";
import Lights from "@/components/Light";
import Model from "@/components/Model";

const App = () => {
  return (
    <>
      <Canvas colorManagement camera={{ position: [0, 0, 300] }}>
        <Lights />
        <Model />
      </Canvas>
    </>
  );
};

export default App;
