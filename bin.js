class Bin{
    constructor(){
    this.width=width;
    this.height=height;
    
   var options={
    isStatic:true
    }
    
  	this.image=loadImage("dustbingreen.png")
    this.bin1=Bodies.rectangle(700,600,10,100,options);
    this.bin2=Bodies.rectangle(800,600,10,100,options);
    this.bin3=Bodies.rectangle(750,650,110,10,options);
    World.add(world,this.bin1);
    World.add(world,this.bin2);
    World.add(world,this.bin3);
    }
    
    display(){
      //var pos=this.body.position 
      rectMode(CENTER);
      rect(this.bin1.position.x,this.bin1.position.y,10,100);
      rect(this.bin2.position.x,this.bin2.position.y,10,100);
      rect(this.bin3.position.x,this.bin3.position.y,110,10);
      imageMode (CENTER)
      image (this.image,750,600, 135,110)
    }
    }