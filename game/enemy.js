import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../screen.js";
import { ai_move } from "./ai.js";
import { map } from "./map.js";
import { isCollidingWall } from "../utils.js";

const cyanImg1 = new Image();
cyanImg1.src = "./assets/cyan1.png";
await cyanImg1.decode().then(() => {
  console.log("clear cyan 1");
});

const cyanImg2 = new Image();
cyanImg2.src = "./assets/cyan2.png";
await cyanImg2.decode().then(() => {
  console.log("clear cyan 2");
});

const cyanImg3 = new Image();
cyanImg3.src = "./assets/cyan3.png";
await cyanImg3.decode().then(() => {
  console.log("clear cyan 3");
});

const cyanImg4 = new Image();
cyanImg4.src = "./assets/cyan4.png";
await cyanImg4.decode().then(() => {
  console.log("clear cyan 4");
});

const orangeImg1 = new Image();
orangeImg1.src = "./assets/orange1.png";
// await orangeImg1.decode().then(() => {
//   console.log("clear orange 1");
// });

const orangeImg2 = new Image();
orangeImg2.src = "./assets/orange2.png";
// await orangeImg2.decode().then(() => {
//   console.log("clear orange 2");
// });

const orangeImg3 = new Image();
orangeImg3.src = "./assets/orange3.png";
// await orangeImg3.decode().then(() => {
//   console.log("clear orange 3");
// });

const orangeImg4 = new Image();
orangeImg4.src = "./assets/orange4.png";
// await orangeImg4.decode().then(() => {
//   console.log("clear orange 4");
// });

const redImg1 = new Image();
redImg1.src = "./assets/red1.png";
// await redImg1.decode().then(() => {
//   console.log("clear red 1");
// });

const redImg2 = new Image();
redImg2.src = "./assets/red2.png";
// await redImg2.decode().then(() => {
//   console.log("clear red 2");
// });

const redImg3 = new Image();
redImg3.src = "./assets/red3.png";
// await redImg3.decode().then(() => {
//   console.log("clear red 3");
// });

const redImg4 = new Image();
redImg4.src = "./assets/red4.png";
// await redImg4.decode().then(() => {
//   console.log("clear red 4");
// });

const pinkImg1 = new Image();
pinkImg1.src = "./assets/pink1.png";
// await pinkImg1.decode().then(() => {
//   console.log("clear pink 1");
// });

const pinkImg2 = new Image();
pinkImg2.src = "./assets/pink2.png";
// await pinkImg2.decode().then(() => {
//   console.log("clear pink 2");
// });

const pinkImg3 = new Image();
pinkImg3.src = "./assets/pink3.png";
// await pinkImg3.decode().then(() => {
//   console.log("clear pink 3");
// });

const pinkImg4 = new Image();
pinkImg4.src = "./assets/pink4.png";
// await pinkImg4.decode().then(() => {
//   console.log("clear pink 4");
// });

const cyanImages = [cyanImg1, cyanImg2, cyanImg3, cyanImg4];
const orangeImages = [orangeImg1, orangeImg2, orangeImg3, orangeImg4];
const redImages = [redImg1, redImg2, redImg3, redImg4];
const pinkImages = [pinkImg1, pinkImg2, pinkImg3, pinkImg4];
const ghostImages = [cyanImages, orangeImages, redImages, pinkImages];

/**
 * every inner things (includes functions, elements) should named "enemy" infront, outside things should named "ghost"
 */
export class Enemy {
  HIT_WIDTH = CANVAS_WIDTH / map[0].length; //HIT_WIDTH and HIT_HEIGHT set same as its size. -> fix sometime
  HIT_HEIGHT = CANVAS_HEIGHT / map.length;
  IMG_WIDTH = (2.5 * CANVAS_WIDTH) / map[0].length;
  IMG_HEIGHT = (2.5 * CANVAS_HEIGHT) / map.length;
  constructor(
    posX = (4 * CANVAS_WIDTH) / map[0].length + this.IMG_WIDTH / 5,
    posY = (6 * CANVAS_HEIGHT) / map.length + this.IMG_HEIGHT / 5,
    color
  ) {
    this.X = posX;
    this.Y = posY;
    this.color = color; //color should be one of 0 to 3 (0:cyan, 1:orange, 2:red, 3:pink)
    this.status = "ghost";
    this.direction = Math.random > 0.5 ? "up" : "down"; //for the first time ghosts should move differently from each other
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
    } else {
      /*asdfasdfasdfasdfasdfasdf*/
      ai_move(this);
    }
  }
  draw(context) {
    let currentImg = ghostImages[this.color][0];
    if (this.direction === "up") {
      currentImg = ghostImages[this.color][2];
    } else if (this.direction === "down") {
      currentImg = ghostImages[this.color][3];
    } else if (this.direction === "left") {
      currentImg = ghostImages[this.color][1];
    } else {
      currentImg = ghostImages[this.color][0];
    }
    context.drawImage(
      currentImg,
      this.X - this.IMG_WIDTH / 2,
      this.Y - this.IMG_HEIGHT / 2,
      this.IMG_WIDTH,
      this.IMG_HEIGHT
    );
  }
}
