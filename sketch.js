var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var done
var score=0
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png")
  pink_balloonImage = loadImage("pink_balloon0.png")
  blue_balloonImage = loadImage("blue_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  arrowgroup = new Group()
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  done=false
  redGrp= new Group()
  pinkGrp= new Group()
  blueGrp= new Group()
  greenGrp= new Group()
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 
 
    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
 
    if (arrowgroup.isTouching(redGrp)){
      arrowgroup.destroyEach()
      redGrp.destroyEach()
      score=score+100
    }
    if (arrowgroup.isTouching(greenGrp)){
      arrowgroup.destroyEach()
      greenGrp.destroyEach()
      score=score+250
    }
    if (arrowgroup.isTouching(blueGrp)){
      arrowgroup.destroyEach()
      blueGrp.destroyEach()
      score=score+500
    }
    if (arrowgroup.isTouching(pinkGrp)){
      arrowgroup.destroyEach()
      pinkGrp.destroyEach()
      score=score+1000
    }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,10));
  
  if (World.frameCount % 100 === 0) {
    if ((select_balloon >=1) && (select_balloon<5) ) {
      redBalloon();
    }
    if((select_balloon >=5) && (select_balloon<7)){
      greenBalloon()
    }
    if(select_balloon===10){
      pinkBalloon()
    }
    if((select_balloon >=7) && (select_balloon<10)){
      blueBalloon()
    }
  }
   createArrow()
    setTimeout(createArrow,3000)
  //console.log(select_balloon)
  drawSprites();
  textSize(35)
  text.depth=bow.depth-0.000001
  text("score = "+ score,200,100)
}


// Creating  arrows for bow
 function createArrow() {
  if (keyWentDown("space") /*&& frameCount % 40>38*/ ){
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 600;
  arrow.scale = 0.3;
  arrowgroup.add(arrow)
  }
  //console.log ( arrowgroup[arrowgroup.length-1].x+"is the x coordinate")
 }

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redGrp.add(red)
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueGrp.add(blue)
}
function destroyEach(group){
  group.destroyEach
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenGrp.add(green)
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.9;
  pinkGrp.add(pink)
}

