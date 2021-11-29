const MovingObject = function(oh) {
    this.pos = oh['pos'];
    this.vel = oh['vel'];
    this.radius = oh['radius'];
    this.color = oh['color'];
    // note: could have also used . instead of indexing
}

// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// });

MovingObject.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
};

MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
};


module.exports = MovingObject;