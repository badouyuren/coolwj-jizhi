export default function rains(p) {
  let mountains = [];
  let bgColor = '#e6e6e6';
  let isDarkMode = false;
  let waveColor = bgColor;
  let drops = [];

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    mountains = [];
    growMountains(p, mountains, waveColor);
    p.background(bgColor);
    mountains.forEach((m) => m.display(p));
  };

  p.draw = function () {
    p.background(bgColor);
    mountains.forEach((m) => m.display(p));

    // 绘制雨滴
    for (let i = 0; i < drops.length; i++) {
      drops[i].fall();
      drops[i].show();
    }

    // 随机添加新的雨滴
    if (p.random(1) < 0.1) {
      drops.push(new Drop());
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.updateWithProps = function (newProps) {
    !newProps.isPlaying ? p.frameRate(0) : p.frameRate(30);
    bgColor = newProps.isDarkMode ? '#323232' : '#e6e6e6';

    if (isDarkMode !== newProps.isDarkMode || waveColor !== newProps.waveColor) {
      waveColor = newProps.waveColor;
      isDarkMode = newProps.isDarkMode;
      p.setup();
    }
  };

  class Drop {
    constructor() {
      this.x = p.random(p.width);
      this.y = p.random(-500, -50);
      this.z = p.random(0, 20);
      this.len = p.map(this.z, 0, 20, 10, 20);
      this.yspeed = p.map(this.z, 0, 20, 1, 20);
      this.color = p.color(138, 43, 226, 150); // 设置雨滴的颜色和透明度
      this.thickness = p.map(this.z, 0, 20, 1, 3); // 设置雨滴的粗细
    }

    fall() {
      this.y = this.y + this.yspeed;
      const grav = p.map(this.z, 0, 20, 0, 0.2);
      this.yspeed = this.yspeed + grav;

      if (this.y > p.height) {
        this.y = p.random(-200, -100);
        this.yspeed = p.map(this.z, 0, 20, 4, 10);
      }
    }

    show() {
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
}

class Mountain {
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

function growMountains(p, mountains, hexColor) {
  const c = p.color(hexColor);

  new Array(5).fill(1).map((_, i) => {
    const a = 255 - 50 * i;
    c.setAlpha(a);
    const h = p.height - 50 * i;
    const m = new Mountain(c, h, p);
    mountains.push(m);
  });
}
