function setup() {
  createCanvas(800,800);
}

function draw() {
  background(0);  

  hr = hour();
  mn = minute();
  sc = second();
  
  angleMode(DEGREES);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  translate(400, 400);

  console.log(hr, mn, sc);

  push();
  rotate(scAngle - 90);
  stroke(255, 0, 0);
  strokeWeight(10);
  line(0, 0, 130, 0);
  pop();

  push();
  rotate(mnAngle - 90);
  stroke(100, 255, 0);
  strokeWeight(10);
  line(0, 0, 125, 0);
  pop();

  push();
  rotate(hrAngle - 90);
  stroke(50, 70, 200);
  strokeWeight(10);
  line(0, 0, 75, 0);
  pop();

  drawSprites();
}