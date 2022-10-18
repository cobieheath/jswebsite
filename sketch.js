function setup() {
  createCanvas(500, 500);
  background(100,255,150);
}

function draw() {
  if (keyIsPressed === true) {
    fill(0);
  } else {
    fill (255);
  }
  rect (25, 25, 50, 50);
  noStroke()
  fill(255, 204, 0)
  triangle(100, 60, 160, 280, 320, 10)
  fill (0, 0, 255)
  rect(25, 280, 400, 50)
  fill (255,0,0)
  circle(300,200,100)
}
