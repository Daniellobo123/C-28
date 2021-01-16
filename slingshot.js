class Slingshot{
    constructor(bodyA,pointB){
        var options={

            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stifness:0.01
        }
        this.pointB = pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
    if(this.sling.bodyA!=null){

        strokeWeight(3)
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)}
    }
        Fly(){
            this.sling.bodyA = null ;
        }
}
