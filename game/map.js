import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../screen.js";

export let map = [];

const coinImg = new Image();
coinImg.src = "./assets/pacMan2.png";

//0 wall
//1 ghost zone (not opened yet -> if open it turns into 2)
//2 2way hallway
//3 3way hallway
//4 intersection (4way)
//5 ghost room wall (for drawing)
//-1 player start spot
//-2 warp zone
map[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
map[1] = [0, 0, 0, 2, 2, 2, 3, 2, 2, 2, 0, 0, 0];
map[2] = [0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0];
map[3] = [0, 0, 0, 2, 0, 5, 2, 5, 0, 2, 0, 0, 0];
map[4] = [0, 0, 0, 2, 0, 5, 1, 5, 0, 2, 0, 0, 0];
map[5] = [0, 2, 2, 3, 0, 5, 1, 5, 0, 3, 2, 2, 0];
map[6] = [0, 0, 0, 2, 0, 5, 5, 5, 0, 2, 0, 0, 0];
map[7] = [0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0];
map[8] = [0, 0, 0, 2, 2, -1, 2, 2, 2, 2, 0, 0, 0];
map[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export class wall {
  WALL_WIDTH = CANVAS_WIDTH / map[0].length;
  WALL_HEIGHT = CANVAS_HEIGHT / map.length;
  constructor(gridX, gridY, num) {
    this.X = (gridX * CANVAS_WIDTH) / map[0].length;
    this.Y = (gridY * CANVAS_HEIGHT) / map.length;
    this.num = num;
  }
  draw(context) {
    if (this.num === 0 || this.num === 5 || this.num === -2) {
      context.fillStyle = "blue";
      context.fillRect(this.X, this.Y, this.WALL_WIDTH, this.WALL_HEIGHT);
    } else {
      context.fillStyle = "black";
      context.fillRect(this.X, this.Y, this.WALL_WIDTH, this.WALL_HEIGHT);
    }
  }
}

export let wallList = [];
for (let y = 0; y < map.length; y++) {
  wallList.push([]);
  for (let x = 0; x < map[0].length; x++) {
    wallList[y].push(new wall(x, y, map[y][x]));
  }
}

let coinMap = [];

//0 none or already pass
//1 coin exist
coinMap[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
coinMap[1] = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0];
coinMap[2] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
coinMap[3] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
coinMap[4] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
coinMap[5] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
coinMap[6] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
coinMap[7] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
coinMap[8] = [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0];
coinMap[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let coinSum = 0;

for (let y = 1; y < 9; y++) {
  for (let x = 1; x < 9; x++) {
    if (coinMap[y][x] === 1) {
      coinSum++;
    }
  }
}

export function coinDelete(playerX, playerY) {
  coinMap[playerY][playerX] = 0;
  coinSum -= 1;
  if (coinSum === 0) {
    window.Error("victory!");
  }
}

// export coinCollect(player) {
//   if ()
// }
// x
// 11 + 2
// y
// 8 + 2
