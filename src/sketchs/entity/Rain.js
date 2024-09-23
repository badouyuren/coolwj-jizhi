export class Rain {
  constructor(p) {
    this.p = p;
    this.x = p.random(p.width);
    this.y = p.random(-500, -50);
    this.z = p.random(0, 20);
    this.len = p.map(this.z, 0, 20, 10, 20);
    this.yspeed = p.map(this.z, 0, 20, 1, 20);
    this.color = p.color(138, 43, 226, 150); // 设置雨滴的颜色和透明度
    this.thickness = p.map(this.z, 0, 20, 1, 3); // 设置雨滴的粗细
  }

  fall(p) {
    this.y = this.y + this.yspeed;
    const grav = p.map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > p.height) {
      this.y = p.random(-200, -100);
      this.yspeed = p.map(this.z, 0, 20, 4, 10);
    }
  }

  show(p) {
    const dropLength = this.len + p.sin(p.frameCount * 0.1) * 2; // 添加雨滴长度的变化效果

    p.stroke(this.color);
    p.strokeWeight(this.thickness);
    p.line(this.x, this.y, this.x, this.y + dropLength);

    // 绘制雨滴的高光效果
    p.strokeWeight(this.thickness * 0.5);
    p.stroke(255, 150);
    p.line(this.x, this.y + dropLength * 0.1, this.x, this.y + dropLength * 0.4);
  }
}
