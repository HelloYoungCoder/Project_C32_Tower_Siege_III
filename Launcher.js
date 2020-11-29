class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB;

        this.launch = Constraint.create(options);
        World.add(myworld, this.launch);
    }

    fly(){
        this.launch.bodyA = null;
    }

    attach(body){
        this.launch.bodyA = body;
    }

    display(){

        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;

            push();
            strokeWeight(3);
            stroke(39, 59, 92);

            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
}