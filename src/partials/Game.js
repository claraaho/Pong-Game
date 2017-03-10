import { SVG_NS, KEYS, PADDLE, BOARD, BALL, SCORE } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.pause = false;

		this.gameElement = document.getElementById(this.element);
		this.board = new Board(this.width, this.height);
		this.leftPaddle = this.createPaddle(BOARD.gap, KEYS.a, KEYS.z);
		this.rightPaddle = this.createPaddle(this.width - BOARD.gap - PADDLE.width, KEYS.up, KEYS.down);
		
		this.ball = new Ball(BALL.radius, this.width, this.height, '#FFF', this.direction);
		this.leftScore = this.createScore(this.width / 2 - 50);
		this.rightScore = this.createScore(this.width / 2 + 25);

		this.eventListener();
	}

	eventListener() {
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

	createPaddle(xPos, upKey, downKey) {
		return new Paddle(
			this.height,
			PADDLE.width,
			PADDLE.height,
			xPos,
			(this.height - PADDLE.height) / 2,
			upKey,
			downKey
		);
	}

	createScore(xPos) {
		return new Score(xPos, SCORE.y, SCORE.size);
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
		this.leftPaddle.render(svg);
		this.rightPaddle.render(svg);

		this.ball.render(svg, this.leftPaddle, this.rightPaddle);
		this.leftScore.render(svg, this.leftPaddle.score);
		this.rightScore.render(svg, this.rightPaddle.score);

		if(this.ball2) {
			this.ball2.render(svg, this.leftPaddle, this.rightPaddle);
		}
	}
}