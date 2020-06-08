class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
           pointB:{x:this.offsetX,y:this.offsetY},
           stiffness:1
          
        }
     this.rope=Constraint.create(options);
    // this.pointB=pointB;
     World.add(world,this.rope);
    }

   /* attach(body){
        this.sling.bodyA=body;
    }

    shoot(){
        this.sling.bodyA=null;
    }
*/
    display(){
       
            var pointA=this.rope.bodyA.position;
            var pointB=this.rope.bodyB.position;
            var p2x=pointB.x+this.offsetX;
            var p2y=pointB.y+this.offsetY;
           fill("white");
           strokeWeight(1);
           line(pointA.x,pointA.y,p2x,p2y);
        


    }

}