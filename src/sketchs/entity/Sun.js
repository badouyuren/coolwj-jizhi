export class Sun {
  constructor(p) {
    this.size = 100;
    this.update(p);
  }

  update(p) {
    const currentHour = new Date().getHours();
    const sunAngle = p.map(currentHour, 0, 24, -p.PI / 2, p.PI * 1.5);

    this.x = p.width / 2 + p.cos(sunAngle) * (p.width / 2 + this.size);
    this.y = p.height / 2 + p.sin(sunAngle) * (p.height / 4);
  }

  display(p) {
    const sunColor = this.getSunColor(p);
    const sunStrokeColor = p.color(255, 128, 0);

    p.noStroke();
    p.fill(sunColor);
    p.ellipse(this.x, this.y, this.size, this.size);

    p.stroke(sunStrokeColor);
    p.strokeWeight(4);
    p.noFill();
    p.arc(this.x, this.y, this.size + 20, this.size + 20, 0, p.PI);
  }

  getSunColor(p) {
    const colorAngle = p.map(
      this.y,
      p.height / 2 - p.height / 4,
      p.height / 2 + p.height / 4,
      0,
      p.PI
    );
    const r = p.map(p.sin(colorAngle), -1, 1, 255, 255);
    const g = p.map(p.sin(colorAngle), -1, 1, 128, 255);
    const b = p.map(p.sin(colorAngle), -1, 1, 0, 128);
    return p.color(r, g, b);
  }
}
