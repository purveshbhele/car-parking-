var parking1 , parking2 ,parking3;
var wall1 , wall2;
var car1,car2,car3;

function setup() {
  createCanvas(400,400);
  car1=createSprite(10,60,10,10);
  car1.shapeColor="white";
  car2=createSprite(10,200,10,10);
  car2.shapeColor="white";
  car3=createSprite(10,340,10,10);
  car3.shapeColor="white";
  parking1=createSprite(380,60, 10,50);
  parking1 .shapeColor= "white";
  parking2=createSprite(380,200,10,50);
  parking2.shapeColor="white";
  parking3=createSprite(380,340,10,50);
  parking3.shapeColor="white";
   wall1=createSprite(200,125,400,5);
   wall1 . shapeColor= "white"; 
   wall2=createSprite(200,270,400,5);
   wall2.shapeColor="white";
   car1.velocityX=3;
   car2.velocityX=2;
   car3.velocityX=1.5;
   
}


function draw() {
  background(0); 
  if(car1.x - parking1.x < parking1.width/2 + car1.width/2) {
    
    parking1.shapeColor="red";
    
       } 
       else {
        car1.velocityX= 0; 
        car1.shapeColor="red"; 
       }
       if(car2.x - parking2.x < parking2.width/2 + car2.width/2) {
    
        parking2.shapeColor="green";
        
           } 
           else {
            car2.velocityX= 0; 
            car2.shapeColor="green"; 
            
          
           }
           if(car3.x - parking3.x < parking3.width/2 + car3.width/2) {
    
            parking3.shapeColor="blue";
            
               } 
               else {
                car3.velocityX= 0; 
                car3.shapeColor="blue";
                                      
               }
               
  drawSprites();
  
}