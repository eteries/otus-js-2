const intersect = (node1, node2) => {
  if (!node1 || !node2 || !node1.getBoundingClientRect || !node2.getBoundingClientRect) {
    return null;
  }

  const box1 = node1.getBoundingClientRect();
  const box2 = node2.getBoundingClientRect();

  const intersectX = box2.left >= box1.left && box2.left <= box1.right ||
                     box2.right >= box1.left && box2.right <= box1.right ||
                     box2.left <= box1.left && box2.right >= box1.right;

  const intersectY = box2.top >= box1.top && box2.top <= box1.bottom ||
                     box2.bottom >= box1.top && box2.top <= box1.top ||
                     box2.top <= box1.top && box2.bottom >= box1.bottom;

  return intersectX && intersectY;
};