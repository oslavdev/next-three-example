import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "react-three-fiber";

export default function Model({ url, mouse }) {
  // const group = useRef()
  const { nodes, scene, materials, animations } = useLoader(GLTFLoader, url);
  // const actions = useRef()
  // const [mixer] = useState(() => new THREE.AnimationMixer())
  // useFrame((state, delta) => mixer.update(delta))
  // useEffect(() => {
  //   actions.current = { idle: mixer.clipAction(animations[0], group.current) }
  //   actions.current.idle.play()
  //   return () => animations.forEach((clip) => mixer.uncacheClip(clip))
  // }, []);

  // useFrame((state, delta) => {
  //     mixer.update(delta)
  //     move(mouse, nodes["RootNode"])
  //     move(mouse, nodes["RootNode"])
  // })
  consoe.log(node);

  return (
    <React.Suspense fallback={null}>
      <div>model</div>
    </React.Suspense>
  );
}
