export class Snow {
  constructor(p) {
    this.p = p;
    this.x = p.random(p.width);
    this.y = p.random(-500, -50);
    this.z = p.random(0, 20);
    this.size = p.map(this.z, 0, 20, 2, 10);
    this.yspeed = p.map(this.z, 0, 20, 1, 5);
    this.angle = p.random(0, p.TWO_PI);
    this.angleVelocity = p.random(-0.05, 0.05);
  }

  fall(p) {
    this.y += this.yspeed;
    this.angle += this.angleVelocity;

    if (this.y > p.height) {
      this.y = p.random(-200, -100);
      this.yspeed = p.map(this.z, 0, 20, 1, 5);
    }
  }

  show(p) {
    const flakeSize = this.size + p.sin(p.frameCount * 0.1) * 2;

    p.push();
    p.translate(this.x, this.y);
    p.rotate(this.angle);
    p.stroke(255, 200);
    p.strokeWeight(2);
    p.line(-flakeSize, 0, flakeSize, 0);
    p.line(0, -flakeSize, 0, flakeSize);
    p.pop();
  }
}
