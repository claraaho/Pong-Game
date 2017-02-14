import './styles/game.css';
import Game from './partials/Game';

const game = new Game('game', 512, 256);

const audio = document.getElementById('background_audio');

document.getElementById('mute').addEventListener('click', function (e) {
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);

(function gameLoop() {
    game.render();
    requestAnimationFrame(gameLoop);
})();