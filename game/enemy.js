import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../screen.js";
import { ai_move } from "./ai.js";
import { map } from "./map.js";
import { isCollidingWall } from "../utils.js";

const cyanImg1 = new Image();
cyanImg1.src = "../assets/cyan1.png";
const cyanImg2 = new Image();
cyanImg2.src = "../assets/cyan2.png";
const cyanImg3 = new Image();
cyanImg3.src = "../assets/cyan3.png";
const cyanImg4 = new Image();
cyanImg4.src = "../assets/cyan4.png";
const orangeImg1 = new Image();
orangeImg1.src = "../assets/orange1.png";
const orangeImg2 = new Image();
orangeImg2.src = "../assets/orange2.png";
const orangeImg3 = new Image();
orangeImg3.src = "../assets/orange3.png";
const orangeImg4 = new Image();
orangeImg4.src = "../assets/orange4.png";
const redImg1 = new Image();
redImg1.src = "../assets/red1.png";
const redImg2 = new Image();
redImg2.src = "../assets/red2.png";
const redImg3 = new Image();
redImg3.src = "../assets/red3.png";
const redImg4 = new Image();
redImg4.src = "../assets/red4.png";
const pinkImg1 = new Image();
pinkImg1.src = "../assets/pink1.png";
const pinkImg2 = new Image();
pinkImg2.src = "../assets/pink2.png";
const pinkImg3 = new Image();
pinkImg3.src = "../assets/pink3.png";
const pinkImg4 = new Image();
pinkImg4.src = "../assets/pink4.png";

const cyanImages = [cyanImg1, cyanImg2, cyanImg3, cyanImg4];
const orangeImages = [orangeImg1, orangeImg2, orangeImg3, orangeImg4];
const redImages = [redImg1, redImg2, redImg3, redImg4];
const pinkImages = [pinkImg1, pinkImg2, pinkImg3, pinkImg4];
const ghostImages = [cyanImages, orangeImages, redImages, pinkImages];

for (let ghostIdx = 0; ghostIdx < ghostImages.length; ghostIdx++) {
  for (let imageIdx = 0; imageIdx < cyanImages.length; imageIdx++) {
    await ghostImages[ghostIdx][imageIdx].decode();
  }
}

/**
 * every inner things (includes functions, elements) should named "enemy" infront, outside things should named "ghost"
 */
export class Enemy {
  HIT_WIDTH = CANVAS_WIDTH / map[0].length; //HIT_WIDTH and HIT_HEIGHT set same as its size. -> fix sometime
  HIT_HEIGHT = CANVAS_HEIGHT / map.length;
  IMG_WIDTH = CANVAS_WIDTH / map[0].length;
  IMG_HEIGHT = CANVAS_HEIGHT / map.length;
  constructor(
    posX = (4 * CANVAS_WIDTH) / map[0].length,
    posY = (6 * CANVAS_HEIGHT) / map.length,
    color
  ) {
    this.X = posX;
    this.Y = posY;
    this.color = color; //color should be one of 0 to 3 (0:cyan, 1:orange, 2:red, 3:pink)
    this.status = "ghost";
    this.direction = Math.random > 0.5 ? "up" : "down"; //for the first time ghosts should move differently from each other
  }
  updatePosition(x, y) {
    this.X = x;
    this.Y = y;
  }
  draw(context, frameCount) {
    const currentImg =
      ghostImages[this.color][frameCount % ghostImages[this.color].length];
    context.drawImage(
      currentImg,
      this.X,
      this.Y,
      this.IMG_WIDTH,
      this.IMG_HEIGHT
    );
  }
  update() {
    if (isCollidingWall(this) === false) {
      switch (this.direction) {
        case "up":
          this.Y -= CANVAS_HEIGHT / (map.length * 10);
          break;
        case "down":
          this.Y += CANVAS_HEIGHT / (map.length * 10);
          break;
        case "left":
          this.X -= CANVAS_WIDTH / (map[0].length * 10);
          break;
        case "right":
          this.X += CANVAS_WIDTH / (map[0].length * 10);
          break;
        default:
          break;
      }
    }
  }
}
