class Bob{
    constructor(x,y,radius){
    var options={
      
    restitution:1,
    friction:0,
    density:1.2
    }
    this.body=Bodies.circle(x,y,radius/2,options);
    this.radius=radius/2;
    this.image=loadImage("sprites/paper.png");
    World.add(world,this.body);
    
    }
    display(){
    fill("white");
    stroke("black");
    var pos=this.body.position;
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.radius,this.radius);
    }
    }