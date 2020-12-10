import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import { Html } from "drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  /* Refs */
  const group = useRef();
  const actions = useRef();

  /* State */
  const [model, setModel] = useState(null);
  const [animation, setAnimation] = useState(null);

  /* Mixer */
  const [mixer] = useState(() => new THREE.AnimationMixer());

  /* Load model */
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("scene.gltf", async (gltf) => {
      const nodes = await gltf.parser.getDependencies("node");
      const animations = await gltf.parser.getDependencies("animation");
      setModel(nodes[0]);
      setAnimation(animations);
    });
  }, []);

  /* Set animation */
  useEffect(() => {
    if (animation) {
      actions.current = { idle: mixer.clipAction(animation[0], group.current) };
      actions.current.idle.play();
      return () => animation.forEach((clip) => mixer.uncacheClip(clip));
    }
  }, [animation]);

  /* Frames */
  useFrame((state, delta) => mixer.update(delta));
  useFrame(() => (group.current ? (group.current.rotation.y += 0.01) : {}));

  return (
    <>
      {model ? (
        <group ref={group} position={[0, -150, 0]} dispose={null}>
          <primitive ref={group} name="Object_0" object={model} />
        </group>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  );
};

export default Model;
