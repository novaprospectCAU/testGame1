import { ai_move } from "./ai.js";

export class Enemy {
  HIT_WIDTH = 20;
  HIT_HEIGHT = 20;
  constructor(posX = 4, posY = 6) {
    this.X = posX;
    this.Y = posY;
    this.status = "ghost";
  }
  updatePosition(x, y) {
    this.X = x;
    this.Y = y;
  }
}
