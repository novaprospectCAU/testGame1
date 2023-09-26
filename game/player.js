import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../screen.js";
import { map } from "./map.js";
import { isCollidingWall } from "../utils.js";

const pacManImg0 = new Image();
pacManImg0.src = "./assets/pacMan0.png";
const pacManImg1 = new Image();
pacManImg1.src = "./assets/pacMan1.png";
const pacManImg2 = new Image();
pacManImg2.src = "./assets/pacMan2.png";
const pacManImg3 = new Image();
pacManImg3.src = "./assets/pacMan3.png";
const pacManImg4 = new Image();
pacManImg4.src = "./assets/pacMan4.png";

// await pacManImg1.decode();
// await pacManImg2.decode();

export class Player {
  HIT_WIDTH = (0.8 * CANVAS_WIDTH) / map[0].length; //HIT_WIDTH and HIT_HEIGHT set same as its size. -> fix sometime
  HIT_HEIGHT = (0.8 * CANVAS_HEIGHT) / map.length;
  IMG_WIDTH = (2.5 * CANVAS_WIDTH) / map[0].length;
  IMG_HEIGHT = (2.5 * CANVAS_HEIGHT) / map.length;
  constructor(
    posX = (5 * CANVAS_WIDTH) / map[0].length + this.IMG_WIDTH / 5,
    posY = (8 * CANVAS_HEIGHT) / map.length + this.IMG_HEIGHT / 5,
  ) {
    this.X = posX;
    this.Y = posY;
    this.angle = 0;
    this.direction = "stop";
    window.addEventListener("keydown", (event) => {
      let key = event.key;
      switch (key) {
        case "ArrowDown":
          this.direction = Math.PI / 2;
          this.direction = "down";
          break;
        case "ArrowUp":
          this.direction = (3 * Math.PI) / 2;
          this.direction = "up";
          break;
        case "ArrowLeft":
          this.direction = Math.PI;
          this.direction = "left";
          break;
        case "ArrowRight":
          this.direction = 0;
          this.direction = "right";
          break;
        default:
      }
      event.preventDefault();
    });
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
  draw(context, frameCount) {
    let currentImg = "";
    if (frameCount % 2 === 1) {
      currentImg = pacManImg0;
      context.drawImage(
        currentImg,
        this.X - this.IMG_WIDTH / 2,
        this.Y - this.IMG_HEIGHT / 2,
        this.IMG_WIDTH,
        this.IMG_HEIGHT,
      );
    } else {
      if (this.direction === "up") {
        currentImg = pacManImg3;
      } else if (this.direction === "down") {
        currentImg = pacManImg4;
      } else if (this.direction === "left") {
        currentImg = pacManImg1;
      } else if (this.direction === "right") {
        currentImg = pacManImg2;
      } else {
        currentImg = pacManImg2;
      }
      context.drawImage(
        currentImg,
        this.X - (1.3 * this.IMG_WIDTH) / 2,
        this.Y - (0.78 * this.IMG_HEIGHT) / 2,
        this.IMG_WIDTH * 1.3,
        this.IMG_HEIGHT * 0.75,
      );
    }
  }
}
