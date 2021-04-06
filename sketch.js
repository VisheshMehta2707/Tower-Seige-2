const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint = Matter.Constraint
var myWorld,myEngine,ground,Ball  ;
var stand, Box1,Box2,Box3,Box4,Box5;
var Box6,Box7,Box9,Box8,Box10;
var BackgroundImage;



function preload()
{
 decideBackground()
}





function setup() {
  createCanvas(1200,400);
 myEngine=Engine.create()
 myWorld=myEngine.world;

 ground = new Ground ( 600,390,1200,10)
 stand = new Ground ( 800,300,250,5)
 Box1 = new Box( 730,250,40,40)
Box2 = new Box(  770,250,40,40)
 Box3 = new Box( 810,250,40,40)
 Box4 = new Box( 850,250,40,40)
 Box5 = new Box( 890,250,40,40)
 Box6 = new Box( 750,200,40,40)
 Box7 = new Box(  790,200,40,40)
 Box8 = new Box( 830,200,40,40)
 Box9 = new Box( 870,200,40,40)
 Box10 = new Box( 830,150,40,40)
}




function draw() {
   if (BackgroundImage)
   {
     background( BackgroundImage)
   }
  Engine.update(myEngine)
  ground.display()
  stand.display()
  Box1.display()
  Box2.display()
  Box3.display()
  Box4.display()
 Box5.display()
 Box6.display()
  Box7.display()
  Box8.display()
  Box9.display()
 Box10.display()
} 

/* function mouseDragged () {

Matter.Body.setPosition(Bird1.bird,{x:mouseX,y:mouseY})

}

function mouseReleased(){
connection.connectionBroken ()
} */

async function decideBackground(){

  var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var data = await response.json();
  var time = data.datetime
  var hour = time.slice(11,13)
  console.log(hour)
  if( hour >= 6 &&  hour <=15)
  {
    BackgroundImage="Yellow"
  }
  
  else{
    BackgroundImage="Blue"
  }
  }