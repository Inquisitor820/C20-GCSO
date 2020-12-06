var car , wall;
var speed , weight;
var rating

function setup() 
{
  createCanvas(1600,400);
    
  speed= Math.round(random(55,90));
  weight= Math.round(random(400,1500));
  
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor=(80,80,80)

  car=createSprite(50,200,50,50);
  car.velocityX = speed;
}

function draw() 
{
  background("blue");  
   
   if(wall.x-car.x<(wall.width + car.width)/2) 
   {
    car.velocityX=0;
    var deformation = (0.5*weight*speed*speed)/(22500);

     //lethal
    if(deformation>180) 
    {
    car.shapeColor=color(255,0,0);
    rating="LETHAL";
    }

     //average
    if(deformation<180 && deformation>=80) 
    {
      car.shapeColor=color(230,230,0);
      rating="AVERAGE";
    }

     //good
    if(deformation<80) 
    {
      car.shapeColor=color(0,255,0);
      rating="GOOD";
    }
   }

  console.log('Rating = ' + rating);
  drawSprites();
}