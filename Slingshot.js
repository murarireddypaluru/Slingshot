class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.SS = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.SS);
    }
    fly(){
        this.SS.bodyA = null
    }
    display(){
        if(this.SS.bodyA){
            var pointA = this.SS.bodyA.position;
            var pointB = this.pointB
            strokeWeight(4);
        }
    }
    
}