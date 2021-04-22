var tom,tomImg1,tomImg2,tomImg3,mou,mouImg1,mouImg2,mouImg3,mouImg4,forest,forestImg;
var PLAY=1;
var END=0;


function preload() {
  
   forestImg=loadImage("images/garden.png");
   tomImg1=loadImage("images/cat1.png");
   mouImg1=loadImage("images/mouse1.png");
   mouImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
   tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
   tomImg3=loadImage("images/cat4.png");
   mouImg3=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
  
   forest=createSprite(500,400,1000,800);
   forest.addImage(forestImg);

   tom=createSprite(900,650,40,40);
   tom.addImage(tomImg1)
   tom.scale=0.2;

   mou=createSprite(100,650,40,40);
   mou.addImage(mouImg1);
   mou.scale=0.1;
}

function draw() {

    background("black");
    
   if(tom.x - mou.x < ( tom.width/2 - mou.width/2)){

   mou.addAnimation("caught",mouImg3);
   mou.changeAnimation("caught");
   tom.addAnimation("mouDown",tomImg3);
   tom.changeAnimation("mouDown");
   tom.velocityX=0;
      


   }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){

    mou.addAnimation("teasing",mouImg2);
    mou.changeAnimation("teasing");
    mou.frameDelay=25;
    tom.addAnimation("walking",tomImg2);
    tom.changeAnimation("walking");
    tom.frameDelay=25;
    //tom.X =tom.X -4;
    tom.velocityX=-3;
    }
 


}
