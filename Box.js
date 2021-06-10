class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.image = loadImage("sprites/wood1.png");
    //this.body = Bodies.rectangle(x, y, width, height);
  }
    display(){
   
  if((this.body.speed)<4){
    var pos =this.body.position;
    rectMode(CENTER)
    fill("yellow")
    console.log(this.body.speed)
    rect(pos.x, pos.y, this.width, this.height);

  }
  else{
 //this.body.visible = false;
  //alert("HI")
  World.remove(world,this.body)
  //super.display();
  }
    
}

};
