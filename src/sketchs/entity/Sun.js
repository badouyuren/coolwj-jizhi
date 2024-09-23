export class Sun {
  constructor(p) {
    this.x = 0;
    this.y = p.height;
    this.size = 100;
    this.speed = 0.005;
  }

  update(p) {
    this.x = p.map(p.sin(p.frameCount * this.speed), -1, 1, -this.size, p.width + this.size);
    this.y = p.map(p.cos(p.frameCount * this.speed), -1, 1, p.height - this.size, this.size);
  }

  display(p) {
    const sunColor = p.color(255, 255, 0);
    const sunStrokeColor = p.color(255, 128, 0);

    p.noStroke();
    p.fill(sunColor);
    p.ellipse(this.x, this.y, this.size, this.size);

    p.stroke(sunStrokeColor);
    p.strokeWeight(4);
    p.noFill();
    p.arc(this.x, this.y, this.size + 20, this.size + 20, 0, p.PI);
  }
}
