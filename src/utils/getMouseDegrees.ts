
export default function getMouseDegrees(x, y, degreeLimit) {
  let dx = 0,
    dy = 0,
    xdiff,
    xPercentage,
    ydiff,
    yPercentage

  let w = { x: window.innerWidth, y: window.innerHeight }

 
  if (x <= w.x / 2) {
    xdiff = w.x / 2 - x
    xPercentage = (xdiff / (w.x / 2)) * 100
    dx = ((degreeLimit * xPercentage) / 100) * -1
  }

  if (x >= w.x / 2) {
    xdiff = x - w.x / 2
    xPercentage = (xdiff / (w.x / 2)) * 100
    dx = (degreeLimit * xPercentage) / 100
  }
  
  if (y <= w.y / 2) {
    ydiff = w.y / 2 - y
    yPercentage = (ydiff / (w.y / 2)) * 100
    dy = ((degreeLimit * 0.5 * yPercentage) / 100) * -1
  }

  if (y >= w.y / 2) {
    ydiff = y - w.y / 2
    yPercentage = (ydiff / (w.y / 2)) * 100
    dy = (degreeLimit * yPercentage) / 100
  }
  return { x: dx, y: dy }
}

