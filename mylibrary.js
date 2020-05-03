function bounceOff(object,object1){
    if(object.x-object1.x<object.width/2+object.width/2 && 
      object1.x-object.x<object.width/2+object.width/2){
        object.velocityX = object.velocityX * (-1);
        object1.velocityX = object1.velocityX * (-1);
      }
      if(object.y-object1.y<object.height/2+object1.height/2 && 
        object1.y-object.y<object.height/2+object1.height/2){
          object.velocityY = object.velocityY * (-1);
          object1.velocityY = object1.velocityY * (-1);
        }
    }