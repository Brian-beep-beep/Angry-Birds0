var fixed,moving;
var moving;




function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  fixed.shapeColor="red";
  fixed.debug=true;

  moving=createSprite(200,200,70,50);
  moving.shapeColor="red";
  moving.debug=true;
}

function draw() {
  background(255,255,255);  
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  if (moving.x-fixed.x<fixed.width/2+moving.width/2
    && fixed.x-moving.x<fixed.width/2+moving.width/2
    && moving.y-fixed.y<fixed.height/2+moving.height/2
    && fixed.y-moving.y<fixed.height/2+moving.height/2){
    fixed.shapeColor="green";
    moving.shapeColor="green";
  }
  else{
    fixed.shapeColor="red";
    moving.shapeColor="red";
  }
  drawSprites();
}