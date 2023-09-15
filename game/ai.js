import { isCollidingWall } from "../utils.js";
import { map } from "./map.js";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../screen.js";

/**
 * ai algorithm : randomly move when it hit the wall
 */
export const ai_move = (object) => {
  const dirArr = ["right", "up", "left", "down"];
  let idx = 0;
  for (let i = 0; i < 4; i++) {
    if (dirArr[i] === object.direction) {
      idx = i;
    }
  }
  if (
    map[Math.floor(object.Y / (CANVAS_HEIGHT / map.length))][
      Math.floor(object.X / (CANVAS_WIDTH / map[0].length))
    ] > 2 &&
    map[Math.floor(object.Y / (CANVAS_HEIGHT / map.length))][
      Math.floor(object.X / (CANVAS_WIDTH / map[0].length))
    ] < 5
  ) {
    while (true) {
      Math.random() < 0.3
        ? Math.random() < 0.8
          ? (object.direction = dirArr[idx])
          : (object.direction = dirArr[(idx + 2) % 4])
        : Math.random() < 0.5
        ? (object.direction = dirArr[(idx + 1) % 4])
        : (object.direction = dirArr[(idx + 3) % 4]);
      if (
        object.direction === dirArr[(idx + 2) % 4] ||
        isCollidingWall(object) === true
      ) {
        continue;
      }
      break;
    }
  } else if (
    map[Math.floor(object.Y / (CANVAS_HEIGHT / map.length))][
      Math.floor(object.X / (CANVAS_WIDTH / map[0].length))
    ] === 2
  ) {
    while (true) {
      Math.random() < 0.5
        ? Math.random() < 0.5
          ? (object.direction = dirArr[idx])
          : (object.direction = dirArr[(idx + 2) % 4])
        : Math.random() < 0.5
        ? (object.direction = dirArr[(idx + 1) % 4])
        : (object.direction = dirArr[(idx + 3) % 4]);
      if (
        object.direction === dirArr[(idx + 2) % 4] ||
        isCollidingWall(object) === true
      ) {
        continue;
      }
      break;
    }
  } else {
    while (true) {
      Math.random() < 0.5
        ? Math.random() < 0.5
          ? (object.direction = dirArr[idx])
          : (object.direction = dirArr[(idx + 2) % 4])
        : Math.random() < 0.5
        ? (object.direction = dirArr[(idx + 1) % 4])
        : (object.direction = dirArr[(idx + 3) % 4]);
      if (isCollidingWall(object) === true) {
        continue;
      }
      break;
    }
  }
};
