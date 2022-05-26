  var sea,seaImg
  var ship,shipAni
 
function preload(){
  seaImg = loadImage("sea.png");
  shipAni=loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
   sea = createSprite(400,200,5,10);
  sea.velocityX = 3;
  sea.addImage("mar",seaImg)
  ship = createSprite(130,260,30,30);
  ship.addAnimation("ship",shipAni);
  ship.scale=0.3
}
function draw() {
  background("blue");
  if (sea.x < 0 ) {
    sea.x = sea.width/2;
  }
    drawSprites();
  
 
}
