
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

// Função de captrua do cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.leng);
    }
    return false;
}
// Setando cookie
function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function showSplash()
{
    currentstate = states.SplashScreen;

    velocity = 0;
    position = 180;
    rotation = 0;
    score = 0;

    $("#player").css({y: 0, x: 0});
    updatePlayer($("#player"));

    soundSwoosh.stop();
    soundSwoosh.play();

}

function startGame()
{
    currentstate = states.GameScreen;

    // fade para a splash screen sumir
    $("#splash").stop();
    $("#splash").transition({opacity: 0}, 500, 'ease');


   
    var updaterate = 1000.0 / 60.0; // 60 fps
    loopGameloop = setInterval(gameloop, updaterate);
    loopPipeloop = setInterval(updatePipes, 1400);

}

 function playerJump()
   {
      velocity = jump;
      // iniciar o som com o pulo
      soundJump.stop();
      soundJump.play();
   }