class Plinko{

  constructor(x, y) {

    var options = {
      isStatic:true
    }
    this.body = Bodies.circle(x, y, 10, options)
    this.r = 10
    World.add(world, this.body)
  }

  display() {
      var pos = this.body.position
      var angle = this.body.angle;

      push()
      translate(pos.x, pos.y);
      rotate(angle);

      noStroke();
      fill("#000")
      ellipseMode(RADIUS)
      ellipse(0, 0, this.r, this.r)
      pop()
  }
}