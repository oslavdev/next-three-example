export default function move(mouse, model, degreeLimit = 40) {
  let degrees = getMouseDegrees(mouse.current.x, mouse.current.y, degreeLimit)
  model.rotation.xD = THREE.MathUtils.lerp(model.rotation.xD || 0, degrees.y, 0.1)
  model.rotation.yD = THREE.MathUtils.lerp(model.rotation.yD || 0, degrees.x-25, 0.1)
  model.rotation.x = THREE.Math.degToRad(model.rotation.xD)
  model.rotation.y = THREE.Math.degToRad(model.rotation.yD)
}
