class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255, 222, 242);
    rect(0, 0, this.width, this.height);
    pop();
    //console.log(this.body.speed);
   //if(this.body.speed > 3){
    //World.remove(world, this.body);
   //}
   
  }
};
