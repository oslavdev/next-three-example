import * as THREE from "three";
import getMouseDegrees from "@/utils/getMouseDegrees";

interface LIB {
  Math: {
    degToRad: (data: nubmer) => number;
  };
  MathUtils: {
    lerp: (x: nubmer, y: number, z: number) => number;
  };
}

interface modelProps {
  rotation: {
    xD: nubmer;
    yD: number;
    y: number;
    x: number;
  };
}

interface mouseProps {
  current: {
    x: number;
    y: number;
  };
}
interface degreesProps {
  y: number;
  x: number;
}

export default function move(
  mouse: mouseProps,
  model: modelProps,
  degreeLimit: number = 40
) {
  const LIB = THREE as LIB;
  let degrees: degreesProps = getMouseDegrees(
    mouse.current.x,
    mouse.current.y,
    degreeLimit
  );
  model.rotation.xD = LIB.MathUtils.lerp(
    model.rotation.xD || 0,
    degrees.y,
    0.1
  );
  model.rotation.yD = LIB.MathUtils.lerp(
    model.rotation.yD || 0,
    degrees.x - 25,
    0.1
  );
  model.rotation.x = LIB.Math.degToRad(model.rotation.xD);
  model.rotation.y = LIB.Math.degToRad(model.rotation.yD);
}
