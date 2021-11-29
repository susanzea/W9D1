

const MovingObject = function(oh) {
    this.pos = oh['pos'];
    this.vel = oh['vel'];
    this.radius = oh['radius'];
    this.color = oh['color'];
    // note: could have also used . instead of indexing
}

module.exports = MovingObject;