var canvas;
var music;
var surface
var surface1
var surface2
var surface3
var box
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface=createSprite( 750,599,45,50);
surface.shapeColor = "black"

surface1=createSprite(600,599,45,50);
surface1.shapeColor = "yellow";

surface2 = createSprite(550,599,45,50);
surface2.shapeColor = "green";      

surface3 = createSprite(450,599,45,50);
surface3.shapeColor = "purple";

    //create box sprite and give velocity
    box= createSprite(800,600,20,20);
    box.shapeColor ="white" 

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    createEdgeSprite(795,595);

    //add condition to check if box touching surface and make it box
    if (surface.isTouching(box) && box.bounceOff(surface)){
        //change colour
        box.shapeColor = "black"
    }

    if (surface1.isTouching(box) && box.bounceOff(surface1)){
        //change colour
        box.shapeColor = "yellow"
    }
    if (surface2.isTouching(box) && box.bounceOff(surface2)){
        //change colour
         box.shapeColor = "green"
    }
    if (surface3.isTouching(box) && box.bounceOff(surface3)){
        //change colour
       box.shapeColor = "purple"
    }
}