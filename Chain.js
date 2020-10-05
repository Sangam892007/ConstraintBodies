class Chain {
    constructor(x,y,length,stiffness){
        var options = {
            bodyA:x,
            bodyB:y,
            length:length,
            stiffness:stiffness
        }
        this.body = Matter.Constraint.create(options);

        World.add(world,this.body);
    }
    display(){
        var a = this.body.bodyA.position;
        var b = this.body.bodyB.position;
        line(a.x,a.y,b.x,b.y);
    }
}