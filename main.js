import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./screen.js";

const canvas = document.querySelector("#game_canvas");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const context = canvas.getContext("2d");

let frameCount = 0;
