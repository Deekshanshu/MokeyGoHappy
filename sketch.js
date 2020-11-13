
var BG,OG
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var score,ground,invisibleGround
var survivalTime=0,score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  
}



function setup() {
  createCanvas(600,600)
  
ground=createSprite(400,350,900,10)
ground.velocityX=-4
invisibleGround= createSprite(400,360,900,20) 
invisibleGround.visible=false
  
  
monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1
  
BG=new Group()
OG=new Group()  
  
score=0  
}


function draw() {
background(0)
  
  if (keyDown("space")) {
   monkey.velocityY=-5 
  }
  monkey.velocityY= monkey.velocityY+1   
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  
  text("Score: "+score,500,50)
   survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50)
  
  /*if (monkey.isTouching(OG)){
      
  }
  
  if (monkey.isTouching(BG)){
      
  }*/
  
  monkey.collide(invisibleGround)
  
  spawnbananas()
  spawnObstacles()
  
  drawSprites()
}

function spawnbananas() {
  if (frameCount % 80 === 0) {
    banana = createSprite(600,100,40,10)
    banana.y = Math.round(random(100,300))
    banana.addImage(bananaImage)
    banana.velocityX = -3
    banana.scale=0.1
    banana.lifetime=0.5
    BG.add(banana)
 }
  }


function spawnObstacles(){
   if (frameCount % 300 === 0) {
     obstacle = createSprite(560,165,10,40)
     obstacle.y = ground.y
     obstacle.collide(invisibleGround)
     obstacle.velocityX = -6
     obstacle.addImage(obstaceImage)
     obstacle.scale = 0.15
     obstacle.lifetime = 300
     OG.add(obstacle)
   }
}