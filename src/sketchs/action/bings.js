export default function bings(p) {
  let bgImage;
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    let img_url = 'https://api.bimg.cc/random?uhd=true';
    img_url = 'https://www.coolwj.com/assets/_carousel/peter-vanosdall-uZVtAixV8c8.jpg';
    bgImage = p.loadImage(img_url, () => {
      console.log('Background image loaded');
    });
  };

  p.draw = function () {
    p.clear();
    p.image(bgImage, 0, 0, p.width, p.height);
  };
}
