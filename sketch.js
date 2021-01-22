
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Constraint = Matter.Constraint  //namespacing
var ground
function preload()
{
	boy=loadImage("IMAGES/boy.png")
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   stone=new Stone(100,300,20)

   tree=new Tree(800,100)

   mango1=new Mango(900,350,20)
   mango2=new Mango(989,358,17)
   mango3=new Mango(945,298,12)
   mango4=new Mango(1100,389,24)
   mango5=new Mango(978,267,18)

   ground=new Ground(600,690,1200,10)

   launcher=new Launcher(stone.body,{x:500,y:560})
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  textSize(26)
  text("press space to play again")
  
 

  


  tree.display()

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()  

 image(boy,30,470,190,300)

 launcher.display()

 
 stone.display()
  
  

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)

  ground.display()

  drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
launcher.fly()
}

function detectCollision(STONE,MANGO){

  mangoPos=MANGO.body.position
  stonePos=STONE.body.position

  var distance=(mangoPos.x,mangoPos.y,stonePos.x,stonePos.y)

  if(distance <= MANGO.r+STONE.r){
    Matter.Body.setStatic(MANGO.body,false)
  }
}

function keyPressed(){
if(keyCode===32){
  Matter.Body.setPosition(stone.body,{x:70,y:560})
  launcher.attach(stone.body)
}
 
}




