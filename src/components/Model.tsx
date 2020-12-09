import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import { Html } from "drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const ref = useRef();
  const [model, setModel] = useState(null);
  /* Load model */
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("scene.gltf", (gltf) => {
      setModel(gltf);
    });
  }, []);

  useFrame(() => (model ? (ref.current.rotation.y += 0.01) : {}));

  return (
    <>
      {model ? (
        <group position={[0, 0, 0]} dispose={null}>
          <primitive ref={ref} name="Object_0" object={model.scene} />
        </group>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  );
};

export default Model;
