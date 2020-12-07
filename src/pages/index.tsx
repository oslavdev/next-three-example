import React, { useRef, useEffect, useState, Suspense } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Section } from "@/components/section";
import state from "@/components/state";
import Lights from "@/components/three/Light";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { Html, useProgress, useGLTFLoader } from "drei";
import { a, useTransition } from "@react-spring/web";
import { useInView } from "react-intersection-observer";



export default function App() {
  const mouse = useRef({ x: 0, y: 0 })
  return (
    <>
      <Canvas
        onMouseMove={(e) => (mouse.current = getMousePos(e))}
        concurrent
        colorManagement
        camera={{ position: [0, 0, 300], fov: 70 }}
       >
        <Lights />
        <Model mouse={mouse} url="/drone/scene.gltf"/>
      </Canvas>
      <Loader />
    </>
  );
};
