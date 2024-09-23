export class Blob {
  constructor(radius, offset, scale, x, y, tSpeed, color) {
    this.radius = radius;
    this.offset = offset;
    this.scale = scale;
    this.x = x;
    this.y = y;
    this.tSpeed = tSpeed;
    this.c = color;
    this.t = 0;
    this.s = 0;
  }

  display(p) {
    p.push();
    const color = p.color(this.c);
    color.setAlpha(230);
    p.fill(color);
    p.translate(this.x, this.y);

    this.s = p.lerp(this.s, 1, 0.07);
    p.scale(this.s);

    p.noiseDetail(2, 0.9);
    p.beginShape();
    for (let i = 0; i < p.TWO_PI; i += p.radians(1)) {
      const xOff = this.offset * p.cos(i) + this.offset;
      const yOff = this.offset * p.sin(i) + this.offset;

      const r = this.radius + p.map(p.noise(xOff, yOff, this.t), 0, 1, -this.scale, this.scale);
      const x = r * p.cos(i);
      const y = r * p.sin(i);

      p.vertex(x, y);
    }
    p.endShape();
    this.t += this.tSpeed;
    p.pop();
  }
}
