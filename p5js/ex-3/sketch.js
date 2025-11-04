/*
 * Shader Using Webcam — minimal tweaks
 */
let theShader;
let cam;

function preload() {
  theShader = loadShader('assets/webcam.vert', 'assets/webcam.frag');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  pixelDensity(1);
  noStroke();

  cam = createCapture(VIDEO);
  cam.size(windowWidth, windowHeight);
  cam.hide();
}

function draw() {
  shader(theShader);


  theShader.setUniform('tex0', cam);
  theShader.setUniform('uResolution', [width, height]);   
  theShader.setUniform('uTime', millis() * 0.001);       
  theShader.setUniform('uMouse', [mouseX, height - mouseY]);

  
  rectMode(CENTER);
  rect(0, 0, width, height);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cam.size(20, 33);
}
