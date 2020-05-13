var bullet,speed,weight;
var wall,thickness;
var deformation;

function setup() 
{
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor="orange";
  bullet.shapeColor="white";
  
}

function draw() 
{
  background(0); 
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    

    if(damage>10)
    {
     car.shapeColor = color(255,0,0);;
    }
    if(damage<180)
    {
     car.shapeColor = color(0,255,0);
    }
    
  } 
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bullet.RightEdge = lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}



































