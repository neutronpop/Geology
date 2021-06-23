class Rubber{
	constructor(x,y,r)
	{
		var options = {
  
			'restitution': 1.5,
			'friction': 1.0,
			'density': 1,
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
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate(this.body.angle)
			ellipseMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("magenta");
			ellipse(0, 0, this.r*2, this.r*2);

			pop()
	}

}