let fingers;

function setup() {
 
  const scale = 2; // 
  createCanvas(320 * scale, 240 * scale);

  // specify multiple formats for different browsers
  fingers = createVideo(['assets/fingers.mov', 'assets/fingers.webm']);
  fingers.loop();
  fingers.hide();
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  fingers.loadPixels();

  const stepSize = round(constrain(mouseX / 8, 6, 32));


  const scaleX = width / fingers.width;
  const scaleY = height / fingers.height;

  for (let y = 0; y < fingers.height; y += stepSize) {
    for (let x = 0; x < fingers.width; x += stepSize) {
      const i = (y * fingers.width + x) * 4;
      const darkness = (255 - fingers.pixels[i]) / 255;
      const radius = stepSize * darkness;
      
      fill(
        128 + 127 * sin(frameCount * 0.02),
        128 + 127 * sin(frameCount * 0.03),
        128 + 127 * cos(frameCount * 0.02)
      );

      ellipse(x * scaleX, y * scaleY, radius * scaleX, radius * scaleY);
    }
  }
}

