import { CANVAS_HEIGHT, CANVAS_WIDTH, ANIMATION_TICK } from "./screen.js";
import { Player } from "./game/player.js";
import { Enemy } from "./game/enemy.js";
import { isColliding, update } from "./utils.js";
import { map } from "./game/map.js";

const canvas = document.querySelector("#game_canvas");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const context = canvas.getContext("2d");

let frameCount = 0;

export let player = new Player();
export let cyan = new Enemy(
  (3 * CANVAS_WIDTH) / map[0].length,
  (5 * CANVAS_WIDTH) / map.length,
  0
);
export let orange = new Enemy(
  (3 * CANVAS_WIDTH) / map[0].length,
  (4 * CANVAS_WIDTH) / map.length,
  1
);
export let red = new Enemy(
  (2 * CANVAS_WIDTH) / map[0].length,
  (4 * CANVAS_WIDTH) / map.length,
  2
);
export let pink = new Enemy(
  (2 * CANVAS_WIDTH) / map[0].length,
  (5 * CANVAS_WIDTH) / map.length,
  3
);

function gameLoop() {
  update(frameCount);
  player.update();
  cyan.update();
  orange.update();
  red.update();
  pink.update();

  //gameover when player collides with an enemy
  if (
    isColliding(player, cyan) ||
    isColliding(player, orange) ||
    isColliding(player, red) ||
    isColliding(player, pink)
  ) {
    const gameOver = canvas.getContext("2d");
    const gameOverWidth = canvas.width / 2;
    const gameOverHeight = canvas.height / 2;
    gameOver.textBaseline = "middle";
    gameOver.font = "bold 60px serif";
    gameOver.textAlign = "center";
    gameOver.fillStyle = "red";
    gameOver.fillText("Game Over", gameOverWidth, gameOverHeight);
    return;
  }

  context.clearRect(0, 0, canvas.width, canvas.height);

  player.draw(context, frameCount);
  cyan.draw(context, frameCount);
  orange.draw(context, frameCount);
  red.draw(context, frameCount);
  pink.draw(context, frameCount);

  frameCount++;

  setTimeout(gameLoop, ANIMATION_TICK);
}

gameLoop();
