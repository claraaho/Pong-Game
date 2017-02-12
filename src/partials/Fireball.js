import {
  SVG_NS
} from '../settings';
import Paddle from './Paddle';

export default class Fireball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;

    this.fire();
  }

  fire() {
    this.x = 10;
    this.y = Paddle.cy;

    this.vy = 0;
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  render(svg) {
      this.x += this.vx;
      this.y += this.vy;

    let circle = document.createElementNS(SVG_NS, 'circle');
    circle.setAttributeNS(null, 'r', this.radius);
    circle.setAttributeNS(null, 'stroke', '#FFF');
    circle.setAttributeNS(null, 'fill', '#FFF');
    circle.setAttributeNS(null, 'cx', this.x);
    circle.setAttributeNS(null, 'cy', this.y);

    svg.appendChild(circle);
 }
}