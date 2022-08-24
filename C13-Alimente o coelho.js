var garden,rabbit;
var gardenImg,rabbitImg, aplle;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createAplles() {
  aplle = createSprite(random(50, 350), 40, 10, 10);
  aplle.addImage(aplleImg);
  aplle.scale = 0,07;
  aplle.velocityY = 3;
  aplle.lifetime = 150;

  createApples();
}

function createOrange() {
  orangeL = createSprite(random(50, 350), 40, 10, 10);
  orangeL.addImage(orangeL);
  orangeL.scale = 0,08;
  orangeL.velocityY = 3;
  orangeL.lifetime = 150;

  createOrange();
}

function createRed() {
   redL = createSprite(random(50, 350), 40, 10, 10);
   redL.addImage(redImg);
   redL.scale = 0,06;
    redL.velocityY = 3;
    redL.lifetime = 150;

   createRed();
}

function draw() {
  background(0);

  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1, 3));

   if (frameCount % 80 === 0) {
     if (select_sprites ==1) {
      createAplles();
     }  else if (select_sprites == 2) {
      createOrange();
     }  else {
      createRed();
     }
   }

    rabbit.x = World.mouseX;

  drawSprites();
  
}
