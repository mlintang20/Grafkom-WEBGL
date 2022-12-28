let angle = 0;
let hand_body;
let vaseline;

// preload handbody model
function preload() {
  hand_body = loadModel("hand_body.obj");
  vaseline = loadImage("texture.png");
}

// setup WEBGL to canvas
function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
}

function draw() {
  // warna background canvas
  background(14, 148, 243);

  // pencahayaan
  ambientLight(23, 148, 71);
  directionalLight(255, 255, 255, 10, -500);

  // hapus wireframe
  noStroke();

  // rotasi sumbu y
  rotateY(angle);

  // objek diskala sebesar 1.8
  scale(1.8);

  // load model
  model(hand_body);

  ambientMaterial(125);

  // load texture
  texture(vaseline);

  // mengatur kecepatan rotasi
  angle += 0.01;
}

// tekan tombol space untuk pause objek
function keyPressed() {
  if (keyCode === 32) {
    noLoop();
  }
}

// lepas tombol space untuk unpause objek
function keyReleased() {
  loop();
}
