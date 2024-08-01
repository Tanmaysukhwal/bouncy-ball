// Create global variables for ball position, ball properties
let ballX, ballY;
let ballSpeedX, ballSpeedY;
let ballRadius;

// set up everything that doesn't change
function setup() {
  createCanvas(800, 600); // create a canvas of 800x600
  ballX = width / 2; // start ball in the center
  ballY = height / 2;
  ballSpeedX = 5; // speed of ball in x direction
  ballSpeedY = 3; // speed of ball in y direction
  ballRadius = 20; // radius of the ball
}

// create a ball on a screen 
function draw() {
  background(220); // clear the screen with a grey background
  ellipse(ballX, ballY, ballRadius * 2, ballRadius * 2); // draw the ball

  // move a ball continuously until it reaches the boundary of a screen
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // when the ball reaches the boundary, reverse the movement
  if (ballX + ballRadius > width || ballX - ballRadius < 0) {
    ballSpeedX *= -1; // reverse the horizontal direction
  }
  if (ballY + ballRadius > height || ballY - ballRadius < 0) {
    ballSpeedY *= -1; // reverse the vertical direction
  }
}
