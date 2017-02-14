import { SVG_NS, KEYS, PADDLE, BOARD, BALL, SCORE } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
// import Fireball from './Fireball';

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.pause = false;

		this.gameElement = document.getElementById(this.element);
		this.board = new Board(this.width, this.height);
		this.paddle1 = new Paddle(
			this.height,
			PADDLE.width,
			PADDLE.height,
			BOARD.gap,
			(this.height - PADDLE.height) / 2,
			KEYS.a,
			KEYS.z
		);
		this.paddle2 = new Paddle(
			this.height,
			PADDLE.width,
			PADDLE.height,
			this.width - BOARD.gap - PADDLE.width,
			(this.height - PADDLE.height) / 2,
			KEYS.up,
			KEYS.down
		);
		this.ball = new Ball(BALL.radius, this.width, this.height, '#FFF', this.direction);
		this.score1 = new Score(this.width / 2 - 50, SCORE.y, SCORE.size);
		this.score2 = new Score(this.width / 2 + 25, SCORE.y, SCORE.size);
		this.ball2 = new Ball();
		// this.fireball = new Fireball(BALL.radius, this.width, this.height, this.direction);

		document.addEventListener('keydown', event => {
			switch (event.keyCode) {
				case KEYS.spaceBar:
					this.pause = !this.pause;
					break;
				case KEYS.v:
					this.ball2 = new Ball(BALL.radius, this.width, this.height, 'lightblue');
					break;
			}
		});
	}

	render() {

		if (this.pause) {
			return;
		}

		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);
		this.board.render(svg);
		this.paddle1.render(svg);
		this.paddle2.render(svg);
		this.ball.render(svg, this.paddle1, this.paddle2);
		this.paddle1.render(svg);
		this.paddle2.render(svg);
		this.score1.render(svg, this.paddle1.score);
		this.score2.render(svg, this.paddle2.score);
		this.ball2.render(svg, this.paddle1, this.paddle2);
		// this.fireball.render(svg);
	}
}