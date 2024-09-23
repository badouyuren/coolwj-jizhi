import { Mountain } from '../entity/Mountain';
import { Snow } from '../entity/Snow';

export default function snows(p) {
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
      drops[i].fall(p);
      drops[i].show(p);
    }

    // 随机添加新的雨滴
    if (p.random(1) < 0.1) {
      drops.push(new Snow(p));
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
