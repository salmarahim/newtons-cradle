var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var b1,b2,b3,b4,b5;
var roof;
var dia;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
     dia=58;
	roof=new Roof(300,30,150,10);
    b1=new Bob(180,350,57);
	b2=new Bob(240,350,57);
	b3=new Bob(300,350,57);
	b4=new Bob(360,350,57);
	b5=new Bob(420,350,57);
	rope1=new Rope(b1.body,roof.body,-dia*2,0);
	rope2=new Rope(b2.body,roof.body,-dia*1,0);
	rope3=new Rope(b3.body,roof.body,0,0);
	rope4=new Rope(b4.body,roof.body,dia*1,0);
	rope5=new Rope(b5.body,roof.body,dia*2,0);
}


function draw() {
  rectMode(CENTER);
  background(220);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-200,y:-105});
	
	}
	}


