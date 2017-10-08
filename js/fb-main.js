
var debugmode = false;

// Congela os elementos
var states = Object.freeze({
    SplashScreen: 0,
    GameScreen: 1,
    ScoreScreen: 2
});

// Variáveis lógicas
var currentscore;
var gravity =  0.25;
var velocity = 0;
var position = 180;
var rotation = 0;
var jump = -4.6;
