export class Enemy {
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