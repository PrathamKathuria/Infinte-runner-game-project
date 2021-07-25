var runner, runner_running;
var power, powerImg;
var powerx;
var path, pathImg;
var bomb, bombImg;
var coin, coinImg;
var ed, edImg;
var pv,cv,ev;

function preload(){
  
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  powerImg = loadImage("power.png");
  pathImg = loadImage("path.png");
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  edImg = loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);
  
  
  path = createSprite(200,200);
  path.addImage("way",pathImg);
  path.velocityY = 3;
  path.scale = 1.2;   

  power = createSprite(100,-200);
  power.addImage("energyPower",powerImg);
  power.velocityY = 12;
  power.scale = 0.1; 
  power.visible = false;

  switch (frameCount/8, frameCount/11){
    case 0: power.x = 150;
    break;
  
    case 1: power.x = 250;
    break;
  
    default: power.x = 300;
  
  bomb = createSprite(100,-150);
  bomb.addImage("bombBlast",bombImg);
  bomb.velocityY = 6;
  bomb.scale = 0.1;
  bomb.visible = false;

  coin = createSprite(100,-100);
  coin.addImage("coinMoney",coinImg);
  coin.velocityY = 10;
  coin.scale = 0.1;
  coin.visible = false;

  ed = createSprite(100,-50);
  ed.addImage("fastPower",edImg);
  ed.velocityY = 9;
  ed.scale = 0.1;
  ed.visible = false;

  runner = createSprite(250,300);
  runner.addAnimation("running",runner_running);
  runner.scale = 0.05;
  
  pv = 0;
  cv = 0;
  ev = 0;

  
  }
  

}

function draw() {
  background(0);
  drawSprites();
  runner.x = World.mouse.position.x;

  if(path.y > 400){
    path.y = 250;
  }
  if(frameCount/500){
   power.visible = true;
  }
  if(power.y > 350){
    power.y = -500;
  }
  if(runner.isTouching(power)){
   runner.scale = runner.scale + 0.00001;
  }
  

}