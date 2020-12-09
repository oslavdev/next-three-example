import React from "react";
import { useTransition } from "@react-spring/web";
import { useProgress } from "drei";

const Loader = () => {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });
  return transition(
    ({ progress, opacity }, active) =>
      active && <div style={{ opacity }}>Loading {progress}</div>
  );
};

export default Loader;
