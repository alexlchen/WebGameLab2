/// <reference path = "_reference.ts" />
// global variables
var canvas;
var stage;

var helloLabel;

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60); // set the framerate to 60 frames per second
    createjs.Ticker.on("tick", gameLoop, this);
    main();
}

function gameLoop(event) {
    helloLabel.rotation += 5;
    stage.update();
}

function main() {
    console.log("Game Started...");

    helloLabel = new createjs.Text("COMP397 Web Gaming Liyi Chen 300756123", "60px Consolas", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = 320;
    helloLabel.y = 240;

    stage.addChild(helloLabel);
}
