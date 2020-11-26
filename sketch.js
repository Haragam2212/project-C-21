var bulletspeed,bulletweight
var bullet,wall,thickness

function setup() {
  createCanvas(1600,400);
  bulletspeed=random(30,52);
  bulletweight=random(223,321);
  bullet=createSprite(50,200,50,50);
  bullet.velocityX=bulletspeed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white";
  thickness=random(22,83);
}

function draw() {
  background(0,0,0);

  if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var deformation=0.5*bulletspeed*bulletspeed*bulletweight/(thickness*thickness*thickness)
   if(deformation<10){
     bullet.shapeColor="green";
   }
  
   if(deformation>10){
     bullet.shapeColor="red";
   }
  }
  console.log(deformation);
  drawSprites();
}
function hasCollided(bullet,lwall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true
}else{
   return false;
  }
}