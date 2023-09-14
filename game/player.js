import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../screen.js";
import { map } from "./map.js";

const pacManImg1 = new Image();
pacManImg1.src = "../assets/pacMan1.png";
const pacManImg2 = new Image();
pacManImg2.src = "../assets/pacMan2.png";

await pacManImg1.decode();
await pacManImg2.decode();

const pacManImages = [pacManImg1, pacManImg2];

export class Player {
  HIT_WIDTH = CANVAS_WIDTH / map[0].length;
  HIT_HEIGHT = CANVAS_HEIGHT / map.length;
  constructor(posX = 5, posY = 8) {
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
}
