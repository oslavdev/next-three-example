import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import { Html, useProgress, useGLTFLoader } from "drei";
import Loader from "@/components/Loader";
import Lights from "@/components/Light";
import { getMousePos } from "@/utils/getMousePosition";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "react-three-fiber";
import move from "@/utils/move";
// const model = async()=>{

//     return model;
// }

const Model = () => {
  /* Refs */

  const group = useRef();
  const actions = useRef();

  /* State */
  const [model, setModel] = useState(null);
  /* Load model */
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("scene.gltf", (gltf) => {
      setModel(gltf);
      console.log(gltf);
    });
  }, []);
  const [mixer] = useState(() => new THREE.AnimationMixer());
  useFrame((state, delta) => mixer.update(delta));
  useEffect(() => {
    if (model) {
      actions.current = {
        idle: mixer.clipAction(model.animations[0], group.current),
      };
      actions.current.idle.play();
      return () => model.animations.forEach((clip) => mixer.uncacheClip(clip));
    }
  }, []);

  return (
    <>
      {model ? (
        <group position={[0, 0, 0]} ref={group} dispose={null}>
          <primitive ref={group} name="Object_0" object={model.scene} />
        </group>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  );
};

const App = () => {
  const mouse = useRef({ x: 0, y: 0 });

  // const { nodes, scene, materials, animations } = useLoader(GLTFLoader, "scene.gltf")

  // useFrame((state, delta) => {
  //     mixer.update(delta)
  //     move(mouse, model.scene)
  //     move(mouse, model.scene)
  // })

  return (
    <>
      <Canvas
        onMouseMove={(e) => (mouse.current = getMousePos(e))}
        concurrent
        colorManagement
        camera={{ position: [0, 0, 300], fov: 70 }}
      >
        <Lights />
        <Model />
      </Canvas>
    </>
  );
};

export default App;
