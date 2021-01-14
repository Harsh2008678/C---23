class Ground{
//Properties
constructor(x,y,width,height){
    var ground_options ={
       isStatic: true
    }

    this.width=width;
    this.height=height;

    this.body = Bodies.rectangle(200,390,width,height,ground_options);
    World.add(world,this.body);
}


//Functions
display()
{
    var pos=this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width, this.height);
}

}