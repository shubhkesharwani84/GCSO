var car,wall;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);
speed = random(10,5)
car = createSprite(100,400,10,30)
	car.velocityX = speed;
}


function draw() {
  background(0);
  
  drawSprites();
 
}
