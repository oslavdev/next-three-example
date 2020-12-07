export default function Model({ url, mouse }) {

  const group = useRef()
  const { nodes, scene, materials, animations } = useLoader(GLTFLoader, url)
  const actions = useRef()
  const [mixer] = useState(() => new THREE.AnimationMixer())
  useFrame((state, delta) => mixer.update(delta))
  useEffect(() => {
    actions.current = { idle: mixer.clipAction(animations[0], group.current) }
    actions.current.idle.play()
    return () => animations.forEach((clip) => mixer.uncacheClip(clip))
  }, []);



  useFrame((state, delta) => {
      mixer.update(delta)
      move(mouse, nodes["RootNode"])
      move(mouse, nodes["RootNode"])
  })


  return(
     <group position={[150,0,0]}  ref={group} dispose={null}>
        <primitive
          ref={group}
          name="Object_0"
          object={nodes["RootNode"]}
        />
        </group>
  )
}