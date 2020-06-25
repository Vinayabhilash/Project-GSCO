var zenia;
var wall1;
var speed, weight;

function setup() {
  createCanvas(800,400);
  zenia = createSprite(400, 200, 20, 20);

  wall1 = createSprite(700, 200, 20, 50);
  
  speed = random(55, 90);
  weight = random(400,1500);

  
}

function draw() {
  background(255,255,255); 
  zenia.velocityX = speed;


  if(wall1.x - zenia.x < (zenia.width + wall1.width)/2) {
    zenia.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed/22509;

    if(deformation > 180) {
      zenia.shapeColor=color(255,0,0);
    }

    if(deformation < 180 && deformation > 100) {
      zenia.shapeColor=color(230, 230, 0);
    }

    if(deformation < 100) {
      zenia.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}