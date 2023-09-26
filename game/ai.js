import { isCollidingWall } from "../utils.js";
import { map } from "./map.js";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../screen.js";

/**
 * ai algorithm : randomly move when it hit the wall
 */
export const ai_move = (object) => {
  const directions = ["right", "up", "left", "down"];
  let index = 0;
  for (let indexDirections = 0; indexDirections < 4; indexDirections++) {
    if (directions[indexDirections] === object.direction) {
      index = indexDirections;
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
          ? (object.direction = directions[index])
          : (object.direction = directions[(index + 2) % 4])
        : Math.random() < 0.5
        ? (object.direction = directions[(index + 1) % 4])
        : (object.direction = directions[(index + 3) % 4]);
      if (
        object.direction === directions[(index + 2) % 4] ||
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
          ? (object.direction = directions[index])
          : (object.direction = directions[(index + 2) % 4])
        : Math.random() < 0.5
        ? (object.direction = directions[(index + 1) % 4])
        : (object.direction = directions[(index + 3) % 4]);
      if (
        object.direction === directions[(index + 2) % 4] ||
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
          ? (object.direction = directions[index])
          : (object.direction = directions[(index + 2) % 4])
        : Math.random() < 0.5
        ? (object.direction = directions[(index + 1) % 4])
        : (object.direction = directions[(index + 3) % 4]);
      if (isCollidingWall(object) === true) {
        continue;
      }
      break;
    }
  }
};
