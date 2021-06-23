class Steel{
	constructor(x,y,r)
	{
		var options = {
  
			'restitution': 0.2,
			'friction': 1.0,
			'density': 4,
			'static': false, 
   
   
		   }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var steelpos=this.body.position;		
			push()
			translate(steelpos.x, steelpos.y);
			rotate(this.body.angle)
			ellipseMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("silver");
			ellipse(0, 0, this.r*2, this.r*2);

			pop()
	}

}