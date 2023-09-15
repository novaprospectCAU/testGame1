import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./screen.js";
import { map } from "./game/map.js";

export function isColliding(player, enemy) {
  if (
    Math.abs(player.X - enemy.X) < player.HIT_WIDTH / 2 + enemy.HIT_WIDTH / 2 &&
    Math.abs(player.Y - enemy.Y) < player.HIT_HEIGHT / 2 + enemy.HIT_HEIGHT / 2
  ) {
    return true;
  }
  return false;
}

export function isCollidingWall(target) {
  const blockWidth = CANVAS_WIDTH / map[0].length;
  const blockHeight = CANVAS_HEIGHT / map.length;
  switch (target.direction) {
    case "up":
      const frontY = Math.floor(target.Y / blockHeight) * blockHeight;
      if (
        target.Y - frontY <= target.HIT_HEIGHT / 2 &&
        map[frontY / blockHeight - 1][Math.floor(target.X / blockWidth)] % 5 ===
          0
      ) {
        return true;
      }
      return false;
    case "down":
      const backY = Math.ceil(target.Y / blockHeight) * blockHeight;
      if (
        backY - target.Y <= target.HIT_HEIGHT / 2 &&
        map[backY / blockHeight][Math.floor(target.X / blockWidth)] % 5 === 0
      ) {
        return true;
      }
      return false;
    //
    case "left":
      const frontX = Math.floor(target.X / blockWidth) * blockWidth;
      if (
        target.X - frontX <= target.HIT_WIDTH / 2 &&
        map[Math.floor(target.Y / blockHeight)][frontX / blockWidth - 1] % 5 ===
          0
      ) {
        return true;
      }
      return false;

    case "right":
      const backX = Math.ceil(target.X / blockWidth) * blockWidth;
      if (
        backX - target.X <= target.HIT_WIDTH / 2 &&
        map[Math.floor(target.Y / blockHeight)][backX / blockWidth] % 5 === 0
      ) {
        return true;
      }
      return false;
    default:
      return new Error("unacceptable movement!!!");
  }
}

//it was made to improve ai movement in intention,
//but not used

// export function aiHitWallchecker(object) {
//   const dirArr = ["right", "up", "left", "down"];
//   class _Checker {
//     constructor() {
//       this.X = object.getX();
//       this.Y = object.getY();
//       this.HIT_WIDTH = object.getHitWidth();
//       this.HIT_HEIGHT = object.getHitHeight();
//       this.direction = object.getDirection();
//     }
//     get getDirectionByIndex() {
//       if (this.direction === "right") {
//         return 0;
//       } else if (this.direction === "up") {
//         return 1;
//       } else if (this.direction === "left") {
//         return 2;
//       } else {
//         return 3;
//       }
//     }
//   }
//   let checker = new _Checker();
//   let dirIndex = checker.getDirectionByIndex();

//   let output = [[], [], [], []];
//   for (let execCount = 0; execCount < 4; execCount++) {
//     output[(dirIndex + execCount) % 4].push(isCollidingWall(checker));
//   }
//   return output;
// }
