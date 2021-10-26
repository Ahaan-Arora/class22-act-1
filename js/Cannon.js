class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;

    this.Cannon_base=loadImage("assets/cannonBase.png")
    this.Cannon=loadImage("assets/canon.png")
  }
  display(){

   

    push();
    
    //imageMode(CENTER);

    image(this.Cannon,this.x,this.y,this.width,this.height);
    pop();
  
    image(this.Cannon_base,70,23,200,200)
  }
}
