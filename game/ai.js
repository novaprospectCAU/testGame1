import { isCollidingWall } from "../utils.js";

/**
 * ai algorithm : randomly move when it hit the wall
 */
export const ai_move = (object) => {
  const lastDir = object.direction;
  while (true) {
    object.direction = lastDir;
    Math.random() < 0.5
      ? Math.random() < 0.5
        ? (object.direction = "up")
        : (object.direction = "down")
      : Math.random() < 0.5
      ? (object.direction = "left")
      : (object.direction = "right");
    if (object.direction === lastDir || isCollidingWall(object) === true) {
      continue;
    }
    break;
  }
};
