var sprite;
var ball;
var score = 0;
function setup(){
createCanvas(400,400);
sprite = createSprite(200,200,20,50);
ball = createSprite(10,200,10,10);

}
function  draw(){
    background(220);
    createEdgeSprites();
    ball.velocityX = -5;
    ball.velocityY = 4;
    ball.bounceOff(edges);
    ball.bounce(sprite);
    sprite.y = World.mouseY;
    text(score,0,15);
    if(ball.isTouching(sprite)){
    score = score +1;

    }
    else if(ball.x>sprite.x){
    score = 0;
    text(gameOver,200,200);
    }
    drawSprites();
}