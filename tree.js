class Tree{
    constructor(x,y){

this.x=x,
this.y=y,

this.image=loadImage("IMAGES/tree.png")
this.body=Bodies.rectangle(this.x,this.y,{isStatic:true})
World.add(world,this.body)
}
display(){
var treePosition=this.body.posiion
fill('blue')
////rectMode(CENTER)
//imageMode(CENTER)
//rect(this.x,this.y,400,600)
image(this.image,this.x,this.y,400,600)





}

}