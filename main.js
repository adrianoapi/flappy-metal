var mainState = {
    preload: function () {

    },
    create: function () {

    },
    update: function () {

    },
};

// Inicializa
var game = new Phaser.Game(400, 400);

// Chama o mainState
game.state.add('main', mainState);

// Muda o status atual do game para 'start'
game.state.start('main');
