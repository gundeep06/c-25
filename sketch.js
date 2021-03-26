
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinobject,paperobject,groundobject,world,engine;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinobject=new Dustbin(1200,650)
	paperobject=new Ball(200,450,40)
	groundobject=new Ground(width/2,670,width,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinobject.display()
  paperobject.display()
  groundobject.display()
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(
			paperobject.body,paperobject.body.position,{x:85,y:-85}
		)
	}
}



