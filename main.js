import { CANVAS_HEIGHT, CANVAS_WIDTH, ANIMATION_TICK } from "./screen.js";
import { Player } from "./game/player.js";
import { Enemy } from "./game/enemy.js";
import { isColliding } from "./utils.js";
import { map, wallList, coinList, coinSum, updateCoins } from "./game/map.js";

const canvas = document.querySelector("#game_canvas");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const context = canvas.getContext("2d");

let frameCount = 0;

export let player = new Player();
export let cyan = new Enemy(
  (6 * CANVAS_WIDTH) / map[0].length + CANVAS_WIDTH / map[0].length / 2,
  (5 * CANVAS_WIDTH) / map.length + CANVAS_HEIGHT / map.length / 2,
  0,
);
export let orange = new Enemy(
  (6 * CANVAS_WIDTH) / map[0].length + CANVAS_WIDTH / map[0].length / 2,
  (5 * CANVAS_WIDTH) / map.length + CANVAS_HEIGHT / map.length / 2,
  1,
);
export let red = new Enemy(
  (6 * CANVAS_WIDTH) / map[0].length + CANVAS_WIDTH / map[0].length / 2,
  (5 * CANVAS_WIDTH) / map.length + CANVAS_HEIGHT / map.length / 2,
  2,
);
export let pink = new Enemy(
  (6 * CANVAS_WIDTH) / map[0].length + CANVAS_WIDTH / map[0].length / 2,
  (5 * CANVAS_WIDTH) / map.length + CANVAS_HEIGHT / map.length / 2,
  3,
);

function gameLoop() {
  player.update();
  cyan.update();
  orange.update();
  red.update();
  pink.update();

  for (const element of coinList) {
    if (isColliding(player, element) && element.exist === "yes") {
      element.toggle();
      updateCoins();
    }
  }

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

  for (let y = 0; y < wallList.length; y++) {
    for (let x = 0; x < wallList[0].length; x++) {
      wallList[y][x].draw(context);
    }
  }

  for (const element of coinList) {
    element.draw(context);
  }
  player.draw(context, frameCount);
  cyan.draw(context);
  orange.draw(context);
  red.draw(context);
  pink.draw(context);

  //victory when player collect all the coins
  if (coinSum === 0) {
    const gameClear = canvas.getContext("2d");
    const gameClearWidth = canvas.width / 2;
    const gameClearHeight = canvas.height / 2;
    gameClear.textBaseline = "middle";
    gameClear.font = "bold 60px serif";
    gameClear.textAlign = "center";
    gameClear.fillStyle = "cyan";
    gameClear.fillText("Victory!!!", gameClearWidth, gameClearHeight);
    return;
  }

  frameCount++;

  setTimeout(gameLoop, ANIMATION_TICK);
}

gameLoop();
