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
    ctx.arc(250, 250, this.radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
};



module.exports = MovingObject;