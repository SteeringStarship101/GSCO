var car;
var Wall;
var speed;
var weight = 250;

 


function setup() {
  createCanvas(800,600);
 car =  createSprite(400, 200, 50, 10);
 
 wall =  createSprite(750, 200, 10, 800);

 
}

function draw() {
  background("aqua");  
  
  speed = random(55,150);
  if(keyDown("space")){
    car.velocityX = speed;
    
  }

  if (wall.x-car.x < car.width/2+wall.width/2&&car.x-wall.x<car.width/2+wall.width/2)
  {
     var deformation = 0.5*weight*speed*speed/22500;
    car.velocityX = 0;
   
   
    if(deformation>180){
    
      car.shapeColor= color(255,0,0);
    }

    if(deformation<180&&deformation>100)
    {
      car.shapeColor = color(230,230,0);
    }

    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }

  console.log(deformation);
  drawSprites();
 
}