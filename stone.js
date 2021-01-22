class Stone{
    constructor(x,y,r){
        var options={
          restitution:1,
          friction:1
        }
        this.x=x
        this.y=y
        this.r=r
        this.d=r*2
        this.image=loadImage("IMAGES/stone.png")
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)

    }
        display(){
            var stonePosition=this.body.position
            push()
            translate(stonePosition.x,stonePosition.y)
            rotate(this.body.angle)
            imageMode(CENTER)
            ellipseMode(CENTER)
            image(this.image,0,0,this.d,this.d)
            pop()
   
        }


    }



