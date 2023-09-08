export class Player {
    HIT_WIDTH = 20;
    HIT_HEIGHT = 20;
    constructor(posX = 5, posY = 8) {
        this.X = posX;
        this.Y = posY;
        this.status = "stop";
        window.addEventListener("keydown", (event) => {
            let key = event.key;
            switch (key) {
                case "ArrowDown" :
                    this.status = "down";
                    break;
                case "ArrowUp" :
                    this.status = "up";
                    break;
                case "ArrowLeft" :
                    this.status = "left";
                    break;
                case "ArrowRight" :
                    this.status = "right";
                    break;
                default :
            }
            event.preventDefault();
        })
    }
}