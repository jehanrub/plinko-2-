const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var newParticle

var particles = []
var divisions = []
var plinkos = []

var score = 0;
var count = 0;

var gameState = "play"

function setup() {
  createCanvas(505, 600);

  engine = Engine.create()
  world = engine.world;

  ground = new Ground(300, 590, 600, 20)

  for (var i = 0; i <= 500; i = i + 100) {
    divisions.push(new Division(i, 480, 10, 200))
  }

  for (var i = 20; i <= 440; i = i + 60) {
    plinkos.push(new Plinko(i, 75))
  }

  for (var i = 50; i <= 410; i = i + 60) {
    plinkos.push(new Plinko(i, 125))
  }

  for (var i = 20; i <= 440; i = i + 60) {
    plinkos.push(new Plinko(i, 175))
  }

  for (var i = 50; i <= 410; i = i + 60) {
    plinkos.push(new Plinko(i, 225))
  }

}

function draw() {
  background('red');

  fill("black")
  textSize(18)
  text("Score: " + score, 400, 30)

  text("500", 30, 420)
  text("100", 130, 420)
  text("200", 230, 420)
  text("100", 330, 420)
  text("500", 430, 420)

  Engine.update(engine);


  text(mouseX + "," + mouseY, 10, 20)


  ground.display();




  for (var i = 0; i <= plinkos.length - 1; i++) {
    plinkos[i].display();
  }

  for (var i = 0; i <= divisions.length - 1; i++) {
    divisions[i].display();
  }


    if (newParticle != null) {
      newParticle.display();
      console.log(newParticle)

      if (newParticle.body.position.y > 370) {
        if (newParticle.body.position.x < 100) {
          score = score + 500;
          newParticle = null;
          if (count >= 5) { gameState = "end"; }
        }


        else if (newParticle.body.position.x > 101 && newParticle.body.position.x < 200) {
          score = score + 100;
          pnewParticle = null;
          if (count >= 5) {
            gameState = "end";
          }
        }
        else if (newParticle.body.position.x > 201 && newParticle.body.position.x < 300) {
          score = score + 200;
          newParticle = null;
          if (count >= 5) { gameState = "end"; }

        }
        else if (newParticle.body.position.x > 301 && newParticle.body.position.x < 400) {
          score = score + 100;
          newParticle = null;
          if (count >= 5) { gameState = "end"; }

        }
        else if (newParticle.body.position.x > 401 && newParticle.body.position.x < 500) {
          score = score + 500;
          newParticle = null;
          if (count >= 5) { gameState = "end"; }

        }

      }
    }

  



  if (gameState === "end") {
    textSize(30);
    text("GameOver", 145, 310);
  }



}

function keyPressed() {
  if(keyCode === 32){
    if (gameState !== "end") {
      count++
      newParticle = new Particle(random(50,350), 10,10,10)
    }
  }
}