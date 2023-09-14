import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../screen.js";
import { map } from "./map.js";
import { isCollidingWall } from "../utils.js";

const pacManImg1 = new Image();
pacManImg1.src = "./assets/pacMan1.png";
const pacManImg2 = new Image();
pacManImg2.src = "./assets/pacMan2.png";

await pacManImg1.decode();
await pacManImg2.decode();

const pacManImages = [pacManImg1, pacManImg2];

export class Player {
  HIT_WIDTH = (0.8 * CANVAS_WIDTH) / map[0].length; //HIT_WIDTH and HIT_HEIGHT set same as its size. -> fix sometime
  HIT_HEIGHT = (0.8 * CANVAS_HEIGHT) / map.length;
  IMG_WIDTH = (2.5 * CANVAS_WIDTH) / map[0].length;
  IMG_HEIGHT = (2.5 * CANVAS_HEIGHT) / map.length;
  constructor(
    posX = (5 * CANVAS_WIDTH) / map[0].length + this.IMG_WIDTH / 5,
    posY = (8 * CANVAS_HEIGHT) / map.length + this.IMG_HEIGHT / 5
  ) {
    this.X = posX;
    this.Y = posY;
    this.direction = "stop";
    window.addEventListener("keydown", (event) => {
      let key = event.key;
      switch (key) {
        case "ArrowDown":
          this.direction = "down";
          break;
        case "ArrowUp":
          this.direction = "up";
          break;
        case "ArrowLeft":
          this.direction = "left";
          break;
        case "ArrowRight":
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
    } else {
      this.direction = "stop";
    }
  }
  draw(context, frameCount) {
    const currentImg = frameCount % 2 === 0 ? pacManImg1 : pacManImg2;
    context.drawImage(
      currentImg,
      this.X - this.IMG_WIDTH / 2,
      this.Y - this.IMG_HEIGHT / 2,
      this.IMG_WIDTH,
      this.IMG_HEIGHT
    );
  }
}
