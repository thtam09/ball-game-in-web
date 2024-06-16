let x, y;
let x1, y1;
let sc = 0;
let sch = [];

function setup() {
  createCanvas(370, 600).position(20, 20);
  x = width / 2;
  y = height / 2;
  x1 = 150;
  y1 = 350;
  background(51);
}

function draw() {
  background(51);
  
  // Display scores
  textSize(20);
  text(`Score: ${sc}`, 20, 20);
  text(`High Score: ${sch.length}`, 20, 50);
  
  // Update score
  sc++;
  sch.push(sc);
  
  // Update ball position
  if (mouseIsPressed) {
    x1 = mouseX;
    y1 = mouseY;
  }
  
  // Draw balls
  ellipseMode(CENTER);
  fill(255);
  ellipse(x1, y1, 40);
  ellipse(x, y, 30);
  
  // Calculate distance between balls
  let d = dist(x1, y1, x, y);
  
  // Check for collision
  if (d < 30) {
    x = null;
    sc = 0;
    y = null;
  }
  
  // Move ball towards mouse
  if (y1 < y) {
    y -= lerp(0, 5, 1);
  } else if (y1 > y) {
    y += lerp(0, 5, 1);
  }
  if (x1 < x) {
    x -= lerp(0, 5, 1);
  } else if (x1 > x) {
    x += lerp(0, 5, 1);
  }
}
