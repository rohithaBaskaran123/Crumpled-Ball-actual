
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}

function setup() {
	createCanvas(1000, 700);

	
	engine = Engine.create();
	world = engine.world;



paper=new Paper(100,600,30);
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);	
bin=new Bin();
	Engine.run(engine);

}


function draw() {
rectMode(CENTER);
  background(254);
  keyPressed();
fill("purple"); 
  paper.display();
 fill ("brown"); 
  rect(ground.position.x, ground.position.y, width,10);
 fill("red");
 bin.display();
 
  
}

function keyPressed(){
	if(keyWentDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-80})
	}
}


