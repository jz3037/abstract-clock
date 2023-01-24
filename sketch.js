class Particle_s{
	constructor(){
	  this.x = random(0, width);
	  this.y = random(0, 200);
	  this.r = 8
	  this.xSpeed = random(-2,2);
	  this.ySpeed = random(-1,1.5);
	}
  
	createParticle_s() {
	  noStroke();
	  fill('rgba(0,110,127,0.5)');
	  circle(this.x, this.y, this.r);
	}
	
	moveParticle_s() {
	  if(this.x < 0 || this.x > width)
		this.xSpeed*=-1;
	  if(this.y < 0 || this.y > 200)
		this.ySpeed*=-1;
	  this.x+=this.xSpeed;
	  this.y+=this.ySpeed;
	}
  }
  
  class Particle_m {
	constructor(){
	  this.x = random(0, width);
	  this.y = random(200, 400);
	  this.r = 16
	  this.xSpeed = random(-2,2);
	  this.ySpeed = random(-1,1.5);
	}
	
	createParticle_m() {
	  noStroke();
	  fill('rgba(238,80,7,0.5)');
	  circle(this.x, this.y, this.r);    
	}
	
	moveParticle_m() {
	  if(this.x < 0 || this.x > width)
		this.xSpeed*=-1;
	  if(this.y < 0 || this.y < 200 || this.y > 400)
		this.ySpeed*=-1;
	  this.x+=this.xSpeed;
	  this.y+=this.ySpeed;
	}
  }
  
  class Particle_h {
	constructor(){
	  this.x = random(0, width);
	  this.y = random(400, 600);
	  this.r = 32
	  this.xSpeed = random(-2,2);
	  this.ySpeed = random(-1,1.5);
	}
	
	createParticle_h() {
	  noStroke();
	  fill('rgba(178,39,39,0.5)');
	  circle(this.x, this.y, this.r);    
	}
	
	moveParticle_h() {
	  if(this.x < 0 || this.x > width)
		this.xSpeed*=-1;
	  if(this.y < 0 || this.y < 400 || this.y > 600)
		this.ySpeed*=-1;
	  this.x+=this.xSpeed;
	  this.y+=this.ySpeed;
	}
  }
  
  let particles_s = [];
  let particles_m = [];
  let particles_h = [];
  
  function setup() {
	  createCanvas(800,600); // make an HTML canvas element width x height pixels
	  for(let i = 0;i<width/10;i++){
		particles_s.push(new Particle_s());
		particles_m.push(new Particle_m());
		particles_h.push(new Particle_h());
	  }
  }
  
  function draw() {
	  background('#F8CB2E');
	  window.print(minute())
	
	  for(let i = 0;i<second();i++) {
		particles_s[i].createParticle_s();
		particles_s[i].moveParticle_s();
	  }
	  
	  for(let i = 0;i<minute();i++) {
		particles_m[i].createParticle_m();
		particles_m[i].moveParticle_m();
	  }
	
	  for(let i = 0;i<hour();i++) {
		particles_h[i].createParticle_h();
		particles_h[i].moveParticle_h();
	  }
	  
  }
  
