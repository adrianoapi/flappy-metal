var mainState = {
    preload: function () {
        // carrega o sprite
        game.load.image('bird', 'assets/bird.png');
    },
    create: function () {
        game.state.backgroundColor = '#71c5cf';
        
        // 'seta' a física do sistema
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.bird = game.add.sprite(100, 245, 'bird');
        game.physics.arcade.enable(this.bird);
        this.bird.body.gravity.y = 1000;
        
        // aplica a função de pular
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);
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
