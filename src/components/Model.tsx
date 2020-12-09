import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { Html } from "drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const [model, setModel] = useState(null);
  /* Load model */
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("scene.gltf", true);
  }, []);

  return (
    <>
      {model ? (
        <group position={[0, 0, 0]} dispose={null}>
          <primitive name="Object_0" object={model.scene} />
        </group>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  );
};

export default Model;
