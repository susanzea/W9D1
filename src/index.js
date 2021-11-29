const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;


document.addEventListener('DOMContentLoaded', () => {
    const CanvasEl = document.getElementById('game-canvas');
    const ctx = CanvasEl.getContext('2d');
    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 50,
        color: "#00FF00"
    });
    mo.draw(ctx)
});
