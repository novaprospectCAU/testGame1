import { isCollidingWall } from "../utils.js";

/**
 * ai algorithm : randomly move when it hit the wall
 */
export const ai_move = (object) => {
  while (true) {
    Math.random() < 0.5
      ? Math.random() < 0.5
        ? (object.direction = "up")
        : (object.direction = "down")
      : Math.random() < 0.5
      ? (object.direction = "left")
      : (object.direction = "right");
    if (isCollidingWall(object) === true) {
      continue;
    }
    break;
  }
};
