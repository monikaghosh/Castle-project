const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,castle1,castle2,castle3,castle4,castle5;
var castlehead1,castlehead2,castlehead3;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //the middle castle
  castle1 = new castle(300,300,200,200);
  //the outer 2 castle pillars
  castle2 = new castle(100,250,50,300);
  castle3 = new castle(500,250,50,300);
  //the middle castle pillars
  castle4 = new castle(200,275,50,250);
  castle5 = new castle(400,275,50,250);

  //the castle head of castle1
  castlehead1 = new castlehead(300,155,3,90);
  castlehead1.color = "pink";
  //castleheads for castle2 and castle3 
  castlehead2 = new castlehead(100,100,3,50);
  castlehead3 = new castlehead(500,100,3,50);
  //castleheads for castle4 and castle5
  castlehead4 = new castlehead(200,150,3,40);
  castlehead5 = new castlehead(400,150,3,40);
  
  console.log(castlehead1);

}

function draw() {
  background(0);  
  castle1.display();
  castle2.display();
  castle3.display();
  castle4.display();
  castle5.display();

  castlehead1.display();
  castlehead2.display();
  castlehead3.display();
  castlehead4.display();
  castlehead5.display();
}