var wall,thickness;

var bullet,speed,weight;

var bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)

  bullet = createSprite(50, 200, 100, 25);
  wall = createSprite(1200, 200, thickness, height/2);
}

function draw() {
  background(0);  
  
  bullet.velocityX = speed;
  bullet.shapeColor = (255);
  wall. velocityX = 0;
  wall.shapeColor = rgb(80,80,80);

  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(hasCollided(bullet,wall)){
    
    if(damage>10){
      wall.shapeColor(255,0,0);
    }

    if(damage<10){
      wall.shapeColor(0,255,0);
    }
    bullet.velocityX = 0;
  }
  


  drawSprites();
}


function hasCollided(p1,p2){
  bulletRightEdge=p1.x + p1.width;
  wallLeftEdge = p2.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }else{
    return false;
  }
  wall. velocityX = 0;
}