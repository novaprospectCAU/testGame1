import { isCollidingWall, aiHitWallchecker } from "../utils.js";

let before = [0, 0];

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

/**
 * ai algorithm : randomly but tends to move closer to player
 */
export const ai_aggressive = (player, ghost) => {
  const widthSize = Math.abs(player.X - ghost.X);
  const heightSize = Math.abs(player.Y - ghost.Y);
  if (widthSize > heightSize) {
    while (true) {
      Math.random() < 0.3
        ? Math.random() < 0.5
          ? (ghost.direction = "up")
          : (ghost.direction = "down")
        : Math.random() < 0.5
        ? (ghost.direction = "left")
        : (ghost.direction = "right");
      if (isCollidingWall(ghost) === true) continue;
      break;
    }
  } else if (widthSize < heightSize) {
    while (true) {
      Math.random() < 0.7
        ? Math.random() < 0.5
          ? (ghost.direction = "up")
          : (ghost.direction = "down")
        : Math.random() < 0.5
        ? (ghost.direction = "left")
        : (ghost.direction = "right");
      if (isCollidingWall(ghost) === true) continue;
      break;
    }
  } else {
    ai_move(ghost);
  }
};

/**
 * ai algorithm : randomly but tends to move clockwise
 */
export const ai_clockwise = (ghost) => {
  const dirArr = ["right", "down", "left", "up"];
  let dirIdx = 0;
  for (let i = 0; i < 4; i++) {
    if (ghost.getDirection() === dirArr[i]) {
      dirIdx = i;
      break;
    }
  }
  while (true) {
    let temp = dirArr[0];
    Math.random() < 0.7
      ? Math.random() < 0.6
        ? (temp = dirArr[(dirIdx + 1) % 4])
        : (temp = dirArr[(dirIdx + 2) % 4])
      : Math.random() < 0.5
      ? (temp = dirArr[(dirIdx + 3) % 4])
      : (temp = dirArr[dirIdx]);
    if (isCollidingWall(ghost) === true) continue;
    ghost.direction = temp;
    break;
  }
};

/**
 * ai algorithm : randomly but tends to move counter-clockwise
 */
export const ai_counterClockwise = (ghost) => {
  const dirArr = ["right", "up", "left", "down"];
  let dirIdx = 0;
  for (let i = 0; i < 4; i++) {
    if (ghost.getDirection() === dirArr[i]) {
      dirIdx = i;
      break;
    }
  }
  while (true) {
    let temp = dirArr[0];
    Math.random() < 0.7
      ? Math.random() < 0.6
        ? (temp = dirArr[(dirIdx + 1) % 4])
        : (temp = dirArr[(dirIdx + 2) % 4])
      : Math.random() < 0.5
      ? (temp = dirArr[(dirIdx + 3) % 4])
      : (temp = dirArr[dirIdx]);
    if (isCollidingWall(ghost) === true) continue;
    ghost.direction = temp;
    break;
  }
};
