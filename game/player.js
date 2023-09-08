export class Player {
    constructor(posX = 5, posY = 8) {
        this.X = posX;
        this.Y = posY;
        this.status = "stop";
    }
    updatePosition(x, y) {
        if (this.X < x) {
            this.status = "right";
        }
        else if (this.X > x) {
            this.status = "left";
        }
        else if (this.Y < y) {
            this.status = "down";
        }
        else if (this.Y > y) {
            this.status = "up";
        }
        else {
            console.error("player is about to move to unexpected place.");
            return ;
        }
        this.X = x;
        this.Y = y;
    }
}