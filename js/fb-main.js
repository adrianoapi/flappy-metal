
var debugmode = false;

// Congela os elementos
var states = Object.freeze({
    SplashScreen: 0,
    GameScreen: 1,
    ScoreScreen: 2
});

// Variáveis lógicas
var currentscore;
var gravity = 0.25;
var velocity = 0;
var position = 180;
var rotation = 0;
var jump = -4.6;
var score = 0;
var highscore = 0;

// Canos
var pipeheight = 90;
var pipewidth = 52;
var pipes = new Array();

// Replay
var replayclickable = false;

// Sons
var volume = 30;
var soundJump = new buzz.sound("assets/sounds/sfx_wing.ogg");
var soundScore = new buzz.sound("assets/sounds/sfx_point.ogg");
var soundHit = new buzz.sound("assets/sounds/sfx_hit.ogg");
var soundDie = new buzz.sound("assets/sounds/sfx_die.ogg");
var soundSwoosh = new buzz.sound("assets/sounds/sfx_swooshing.ogg");
buzz.all().setVolume(volume);

var loopGameLoop;
var loopPipeLoop;

// Iniciar o depurador do game
$(document).ready(function () {
    if (window.location.search == "?debug") {
        debugmode = true;
    }
    if (window.ocation.search == "?easy") {
        pipeheight = 200;
    }
    // captruar highscore com cookie
    var savedscore = getCookie("highscore");
    if (savedscore != "") {
        highscore = parseInt(savedscore);
    }

    showSplash();

});
