const MovingObject = function(oh) {
    this.pos = oh['pos'];
    this.vel = oh['vel'];
    this.radius = oh['radius'];
    this.color = oh['color'];
    // note: could have also used . instead of indexing
}
MovingObject.prototype.draw = function() {
    debugger
    document.addEventListener('DOMContentLoaded', () => {
        debugger
        const CanvasEl = document.getElementById('game-canvas');
        const ctx = CanvasEl.getContext('2D');
        ctx.beginPath();
        ctx.arc(250, 250, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
    })
};

window.MovingObjectDraw = MovingObject.prototype.draw

    




module.exports = MovingObject;