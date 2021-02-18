var canvas;
var music;
var box
var green
var blue
var red
var purple
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
box = createSprite(random(20,750),100,50,50);
    //create 4 different surfaces
green = createSprite(100,600,200,20);
green.shapeColor = "green";
blue = createSprite(300,600,200,20);
blue.shapeColor = "blue";
red = createSprite(500,600,200,20);
red.shapeColor = "red";
purple = createSprite(700,600,200,20);
purple.shapeColor = "purple";
box.velocityX = 2;
box.velocityY = 2;
    //create box sprite and give velocity

}

function draw() {
    background("lightgrey");
    edges = createEdgeSprites();
    box.bounceOff(edges);
    if (red.isTouching(box) && box.bounceOff(red)){
        box.shapeColor = "red";
        music.play();
    }
    if (blue.isTouching(box)){
        box.velocityX = 0;
        box.velocityY = 0;
        box.shapeColor = "blue";
        music.stop();
    }
if (green.isTouching(box) && box.bounceOff(green)){
    box.shapeColor = "green";
}
if (purple.isTouching(box) && box.bounceOff(purple)){
    box.shapeColor = "purple";
}
    //create edgeSprite



    //add condition to check if box touching surface and make it box
    drawSprites();
}
