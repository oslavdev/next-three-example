import React from "react";
import { Section } from "@/components/section";
import state from "@/components/state";
import { useInView } from "react-intersection-observer";

const HTMLContent = ({
  domContent,
  children,
  bgColor,
  modelPath,
  position,
}) => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));
  const [refItem, inView] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    inView && (document.body.style.background = bgColor);
  }, [inView]);
  return (
    <Section factor={1.5} offset={1}>
      <group position={[100, 40, 100]}>
        <mesh ref={ref} position={[100, 35, 70]}>
          <Model url={modelPath} />
        </mesh>
        <Html fullscreen portal={domContent}>
          <div ref={refItem} className="container">
            <h1 className="title">{children}</h1>
          </div>
        </Html>
      </group>
    </Section>
  );
};

export default HTMLContent;
