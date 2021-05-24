class Stone{
	constructor(x,y,)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction :1,
            density :1.2
			}
		this.x=x;
		this.y=y;
		
		this.image=loadImage("images/stone.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var stonePos=this.body.position;	
		
		image(this.image, 0,0,this.r*2, this.r*2)
		
 }
}