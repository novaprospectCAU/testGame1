import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./screen.js";
import { map } from "./game/map.js";

export function isColliding(player, enemy) {
  if (
    Math.abs(player.X - enemy.X) >= player.HIT_WIDTH + enemy.HIT_WIDTH &&
    Math.abs(player.Y - enemy.Y) >= player.HIT_HEIGHT + enemy.HIT_HEIGHT
  ) {
    return true;
  }
  return false;
}

export function isCollidingWall(target) {
  switch (target.direction) {
    case "up":
      const targetTop = target.Y - target.HIT_HEIGHT / 2;
      for (let gridTop = 1; gridTop < map.length; gridTop++) {
        if (targetTop < gridTop * (CANVAS_HEIGHT / map.length)) {
          if (
            map[gridTop - 1][
              Math.floor(target.X / (CANVAS_WIDTH / map[0].length))
            ] === 0 &&
            targetTop === (gridTop - 1) * (CANVAS_HEIGHT / map.length)
          ) {
            return true;
          }
        }
      }
      return false;
    case "down":
      const targetBottom = target.Y + target.HIT_HEIGHT / 2;
      for (let gridBottom = 1; gridBottom < map.length; gridBottom++) {
        if (targetBottom < gridBottom * (CANVAS_HEIGHT / map.length)) {
          if (
            map[gridBottom - 1][
              Math.floor(target.X / (CANVAS_WIDTH / map[0].length))
            ] === 0 &&
            targetBottom === (gridBottom - 1) * (CANVAS_HEIGHT / map.length)
          ) {
            return true;
          }
        }
      }
      return false;
    case "left":
      const targetLeft = target.X - target.HIT_WIDTH / 2;
      for (let gridLeft = 1; gridLeft < map[0].length; gridLeft++) {
        if (targetLeft < gridLeft * (CANVAS_HEIGHT / map.length)) {
          if (
            map[Math.floor(target.Y / (CANVAS_HEIGHT / map.length))][
              gridLeft - 1
            ] &&
            targetLeft === (gridLeft - 1) * (CANVAS_HEIGHT / map.length)
          ) {
            return true;
          }
        }
      }
      return false;
    case "right":
      const targetRight = target.X + target.HIT_WIDTH / 2;
      for (let gridRight = 1; gridRight < map[0].length; gridRight++) {
        if (targetRight < gridRight * (CANVAS_HEIGHT / map.length)) {
          if (
            map[Math.floor(target.Y / (CANVAS_HEIGHT / map.length))][
              gridRight - 1
            ] === 0 &&
            targetRight === (gridRight - 1) * (CANVAS_HEIGHT / map.length)
          ) {
            return true;
          }
        }
      }
      return false;
    default:
      return new Error("unacceptable movement!!!");
  }
}

export function update(frameCount) {
  frameCount++;
}
