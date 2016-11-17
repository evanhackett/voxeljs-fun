const createGame = require('voxel-engine');

const game = createGame({
  texturePath: './textures/'
});
const container = document.body;
game.appendTo(container);

const createPlayer = require('voxel-player')(game);
const dude = createPlayer('dude.png');
dude.possess();
dude.yaw.position.set(0, 100, 0);
