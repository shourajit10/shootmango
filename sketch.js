
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(450, 700 , 900 , 15 )
	tree= new Tree(500 , 300 , 400,400)
    mango= new Mango(700 , 330 , 40,40)
	mango1= new Mango(600 , 350 , 40,40)
	mango2= new Mango(800 , 400 , 40,40)
	mango3= new Mango(850 , 470 , 40,40)
	mango4= new Mango(650 , 400 , 50,50)
	mango5= new Mango(550 , 450 , 40,40)
	mango6= new Mango(650 , 350 , 50,50)
	mango7= new Mango(750 , 350 , 40,40)
	mango8= new Mango(750 , 450 , 50,50)
	mango9= new Mango(550 , 400 , 40,40)
	mango10= new Mango(600 , 450 , 50,50)
	boy= new Boy(30 , 503 , 250 ,250)
	stone= new Stone(30 , 503 , 250 ,250)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("darkorange");
  
  drawSprites();
 ground.display();
 tree.display();
 mango.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
 boy.display();
 stone.display();
}


