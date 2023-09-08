let map = [];

//0 wall
//1 ghost zone (not opened yet -> if open it turns into 2)
//2 2way hallway
//3 3way hallway
//4 intersection (4way)
//5 ghost room wall (for drawing)
//-1 player start spot
//-2 warp zone
map[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
map[1] = [0, 0, 0, 2, 2, 2, 3, 2, 2, 2, 0, 0, 0];
map[2] = [0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0];
map[3] = [0, 0, 0, 2, 0, 5, 2, 5, 0, 2, 0, 0, 0];
map[4] = [0, 0, 0, 2, 0, 5, 1, 5, 0, 2, 0, 0, 0];
map[5] = [-2, 2, 2, 3, 0, 5, 1, 5, 0, 3, 2, 2, -2];
map[6] = [0, 0, 0, 2, 0, 5, 5, 5, 0, 2, 0, 0, 0];
map[7] = [0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0];
map[8] = [0, 0, 0, 2, 2, -1, 2, 2, 2, 2, 0, 0, 0];
map[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let coinMap = [];

//0 none or already pass
//1 coin exist
coinMap[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
coinMap[1] = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0];
coinMap[2] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
coinMap[3] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
coinMap[4] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
coinMap[5] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
coinMap[6] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
coinMap[7] = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
coinMap[8] = [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0];
coinMap[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let coinSum = 0;

for (let y = 1; y < 9; y++) {
    for (let x = 1; x < 9; x++) {
        if (coinMap[y][x] === 1) {
            coinSum++;
        }
    }
}

coinDelete = (playerX, playerY) => {
    coinMap[playerY][playerX] = 0;
    coinSum -= 1;
    if (coinSum === 0) {
        window.Error("victory!");
    }
}

// x
// 11 + 2
// y
// 8 + 2