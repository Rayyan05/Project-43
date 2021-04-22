

function setup() {
  createCanvas(800,400);

  hr = hour();
   min = minute();
   sec = second();
 
}

function draw() {
  background(255,255,255);  


  angleMode(DEGREES)
  secAngle = map(sec,0,60,0,360)
  minAngle = map(min,0,60,0,360)

push();
  rotate(secAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,00)
  pop();
  
 
  
 push();
  rotate(minAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(00,0,100,00)
  pop();
 



  drawSprites();
}