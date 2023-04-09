function setup() {
  createCanvas(800, 600);
}
function draw() {
  background(245, 159, 66);
  drawSky();
  drawDesert();
  drawCactus();
}
function drawSky() {
  for (let i = 0; i < height; i++) {
    let h = map(i, 0, height, 60, 345);
    stroke(h, 89, 70);
    line(0, i, width, i);
  }
}
function drawDesert() {
  fill(212, 154, 95);
  beginShape();
  vertex(0, height);
  for (let x = 0; x < width; x++) {
    let y = map(noise(x * 0.005, frameCount * 0.005), 0, 1, height * 0.6, height);
    vertex(x, y);
  }
  vertex(width, height);
  endShape(CLOSE);
}
function drawCactus() {
  push();
  translate(width / 2, height * 0.6);
  stroke(54, 143, 54);
  strokeWeight(5);
  line(0, 0, 0, -50);
  line(0, -20, -20, -40);
  line(0, -30, 20, -50);
  pop();
}