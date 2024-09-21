export class Mountain {
  constructor(color, y, p) {
    this.c = color;
    this.y = y;
    this.offset = p.random(100, 200);
    this.t = 0;
  }

  display(p) {
    let xoff = 0;

    p.noStroke();
    p.fill(this.c);

    p.noiseDetail(1.7, 1.3);

    p.beginShape();
    for (let x = 0; x <= p.width + 25; x += 25) {
      const yoff = p.map(p.noise(xoff + this.offset, this.t + this.offset), 0, 1, 0, 200);
      const y = this.y - yoff;
      p.vertex(x, y);

      xoff += 0.08;
    }
    p.vertex(p.width + 100, p.height);
    p.vertex(0, p.height);
    p.endShape(p.CLOSE);

    this.t += 0.005;
  }
}
