class Dustbin{
    constructor(x,y){
        this.x=x
        this.y=y
        this.dustbinwidth=200
        this.dustbinheight=100
        this.wallthickness=20
        this.angle=0
        this.bottombody=Bodies.rectangle(
            this.x,this.y,this.dustbinwidth,this.wallthickness,{
                isStatic:true
            }
        )
        this.leftwallbody=Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true});
        Matter.Body.setAngle(this.leftwallbody,this.angle);
        this.rightwallbody=Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true});
        Matter.Body.setAngle(this.rightwallbody,-1*this.angle);
        World.add(world,this.bottombody)
        World.add(world,this.leftwallbody)
        World.add(world,this.rightwallbody)
    }
    display(){
        var bottom=this.bottombody.position
        var left=this.leftwallbody.position
        var right=this.rightwallbody.position
        push ()
        translate(left.x,left.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        rotate(this.angle)
        rect(0,0,this.wallthickness,this.dustbinheight)
        pop ()
        push ()
        translate(right.x,right.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        rotate(-1*this.angle)
        rect(0,0,this.wallthickness,this.dustbinheight)
        pop ()
        push ()
        translate(bottom.x,bottom.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        rect(0,0,this.dustbinheight,this.wallthickness)
        pop ()
    }
}