class Paper{
constructor(x,y,r){
var options={
density:0.7,
restituiton:0.8
}
this.radius=r;
this.body=Bodies.circle(x,y,r,options);
this.image = loadImage("paper.png");
World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push();
    translate(pos.x, pos.y);
    
    ellipseMode(RADIUS);
    image(this.image,0,0, 50 ,50 );
    pop();
}
}