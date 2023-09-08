export class Player {
    constructor(posX = 5, posY = 8) {
        this.playerX = posX;
        this.playerY = posY;
        this.status = "stop";
    }
    updatePosition(x, y) {
        if (this.playerX < x) {
            this.status = "right";
        }
        else if (this.playerX > x) {
            this.status = "left";
        }
        else if (this.playerY < y) {
            this.status = "down";
        }
        else if (this.playerY > y) {
            this.status = "up";
        }
        else {
            console.error("player is about to move to unexpected place.");
            return ;
        }
        this.playerX = x;
        this.playerY = y;
    }
}