class Mango{
    constructor(x,y,r){
        var options={
            restitution:1,
            isStatic:true,
            friction:1
        }
        this.x=x
        this.y=y
        this.r=r
        this.d=r*2
        this.image=loadImage("IMAGES/mango.png")
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)

    }
     display(){
         var mangoPosition=this.body.position
         push()
         translate(mangoPosition.x,mangoPosition.y)
         rotate(this.body.angle)
         fill("yellow")
         imageMode(CENTER)
        // ellipseMode(CENTER)
         image(this.image,0,0,this.d,this.d)
         pop()

     }

}