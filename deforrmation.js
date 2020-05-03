var car;
var wall;
var weight = random(400,1500);
var speed = random(55,90);
car.velocityX = speed;
var deformation =  (0.5*weight*speed*speed)/22500;
function setup(){   
createCanvas(400,400);
 car  = createSprite(10,200,20,20);
 wall = createSprite(360,200,20,50);   
}
function draw(){
    background(220);
    car.velocityX = speed;
    if(car.isTouching(wall)){
        Text(deformation,0,15);
    }
    if(deformation>180){
        Text("lethal",200,200);
    }
    else if(deformation<80){
        Text("good",200,200);
    }
    else {
        Text("average",200,200);
    }
}