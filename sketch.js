const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 
 var particle;

 var Divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight=300;
var gameState = "play" ; 
var gameState = "end";

var score =0;
var turn = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  Ground = new ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     Divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 textSize(20)
 text(",Turn : "+turn,120,30);
 textSize(15)
 text("click anywhere to earn points randomly between 0 to 100 if the ball falls on the divisions  ",200,30);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //turn++;
  // }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < Divisions.length; k++) {
     
     Divisions[k].display();
   }
if(particle!= null ){
particle.display();

if(particle.body.position.y>760 && particle.body.position.x<800){

score = score+Math.round(random(0,100));
particle = null;
if(turn>=5) gameState= "end";

}
}
}

function mousePressed(){
if(gameState!=="end"){
turn= 0;
particle = new Particle(mouseX,30,10,10);
turn++;
}
particle = new Particle(mouseX,30,10,10);
turn++;
}