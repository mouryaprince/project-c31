var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,590,800,20);

  //create division objects
  for (var i = 0; i <=width; i = i + 80) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }


  
  Engine.run(engine);
    
}
 


function draw() {
  background("black");
  textSize(20)
  
  Engine.update(engine);
  ground.display();
  
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  
  for (var n = 0; n < divisions.length; n++) {
    divisions[n].display();
  }
  if(frameCount %60 === 0){
    particles.push(new Particles(random(width/2-30,width/2+30), 10,10));

  }
  drawSprites();

  for (var h = 0; h < particles.length; h++) {
    particles[h].display();
  }
  
}