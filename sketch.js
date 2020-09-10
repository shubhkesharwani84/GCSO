var car,wall;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);

car = createSpite(100,400,10,30)
	car.velocityX = 5;
}


function draw() {
  background(0);
  
  drawSprites();
 
}
