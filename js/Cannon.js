class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
  }
  display() {
    // the keys for the cannon to move
    if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) {
      this.angle += 0.02;
    }

    if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
      this.angle -= 0.02;
    }
// give grey color
    fill("#676e6a");
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(-10, -20, this.width, this.height);
    // stop settings here so that the color is not imparted on the code below
    pop();
    // used pi to give it the particular shape
    arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
    noFill();
  }
}
