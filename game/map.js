import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../screen.js";

export let map = [];

const coinImg = new Image();
coinImg.src = "./assets/pacMan0.png";

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
map[5] = [-1, 2, 2, 3, 0, 5, 1, 5, 0, 3, 2, 2, -1];
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
// coinMap[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// coinMap[1] = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0];
// coinMap[2] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
// coinMap[3] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
// coinMap[4] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
// coinMap[5] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
// coinMap[6] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
// coinMap[7] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
// coinMap[8] = [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0];
// coinMap[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

coinMap[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
coinMap[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
coinMap[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
coinMap[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
coinMap[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
coinMap[5] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
coinMap[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
coinMap[7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
coinMap[8] = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0];
coinMap[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
export class coin {
  IMG_WIDTH = (0.4 * CANVAS_WIDTH) / map[0].length;
  IMG_HEIGHT = (0.4 * CANVAS_HEIGHT) / map.length;
  HIT_WIDTH = (0.4 * CANVAS_WIDTH) / map[0].length;
  HIT_HEIGHT = (0.4 * CANVAS_HEIGHT) / map.length;
  constructor(gridX, gridY) {
    this.X =
      (gridX * CANVAS_WIDTH) / map[0].length + CANVAS_WIDTH / map[0].length / 2;
    this.Y =
      (gridY * CANVAS_HEIGHT) / map.length + CANVAS_HEIGHT / map.length / 2;
    this.exist = "yes";
  }
  draw(context) {
    if (this.exist === "no") return;
    const currentImg = coinImg;
    context.drawImage(
      currentImg,
      this.X - (1.3 * this.IMG_WIDTH) / 2,
      this.Y - (0.78 * this.IMG_HEIGHT) / 2,
      this.IMG_WIDTH * 1.3,
      this.IMG_HEIGHT * 0.75
    );
  }
  toggle() {
    this.exist = "no";
  }
}

export let coinList = [];

for (let y = 0; y < coinMap.length; y++) {
  for (let x = 0; x < coinMap[0].length; x++) {
    if (coinMap[y][x] === 1) {
      coinList.push(new coin(x, y));
    }
  }
}

export let coinSum = coinList.length;

export function updateCoins() {
  coinList.filter((obj) => {
    obj.exist === "yes";
  });
  coinSum -= 1;
}

// export coinCollect(player) {
//   if ()
// }
// x
// 11 + 2
// y
// 8 + 2
