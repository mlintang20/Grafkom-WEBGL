let angle = 0;
let hand_body;

function preload() {
  hand_body = loadModel("hand_body.obj");
}

function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
}

function draw() {
  // background(91, 140, 204);
  background(14, 148, 243);

  noStroke();
  // fill(14, 203, 46);
  fill(21, 110, 46);
  // rotateX(angle);
  rotateY(angle);
  // rotateZ(angle);
  scale(1.8);
  model(hand_body);

  angle += 0.02;
}

function keyPressed() {
  if (keyCode === 32) {
    noLoop();
  }
}

function keyReleased() {
  loop();
}
