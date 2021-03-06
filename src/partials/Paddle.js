import { SVG_NS, PADDLE, KEYS } from '../settings';

export default class Paddle {
  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = PADDLE.speed;
    this.score = 0;
    this.cy = this.getCenter();

    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
        case KEYS.b:
          this.changePaddle();
          break;
      }
    });
  }

  changePaddle() {
    if (this.width === PADDLE.width) {
      this.width = PADDLE.widthChange;
      this.height = PADDLE.heightChange;
      this.speed = PADDLE.speedChange;
    } else {
      this.width = PADDLE.width;
      this.height = PADDLE.height;
      this.speed = PADDLE.speed;
    }
  }

  getCenter() {
    this.center = this.y + (this.height / 2);
  }

  up() {
    this.y = Math.max(0, this.y - this.speed);
  }

  down() {
    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
  }

  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return [leftX, rightX, topY, bottomY];
  }

  render(svg) {
    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null, 'x', this.x);
    rect.setAttributeNS(null, 'y', this.y);
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'fill', '#FFF');

    svg.appendChild(rect);
  }
}