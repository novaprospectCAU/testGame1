let ghostX = 4;
let ghostY = 6;

export let before = [ghostX, ghostY];

export const ai_move = () => {
  while (true) {
    let nextX = 0;
    let nextY = 0;
    if (Math.random() > 0.5) {
      nextX = Math.floor(Math.random() * 2 - 1);
      if (nextX === 0) {
        nextY = Math.floor(Math.random() * 2 - 1);
        if (nextY === 0) continue;
      }
    } else {
      nextY = Math.floor(Math.random() * 2 - 1);
      if (nextY === 0) {
        nextX = Math.floor(Math.random() * 2 - 1);
        if (nextX === 0) continue;
      }
    }
    before[0] = ghostX;
    before[1] = ghostY;
    ghostX += nextX;
    ghostY += nextY;
  }
};
