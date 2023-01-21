let x = [-500, -400, -300, -200, -100, 0, 100, 200, 300, 400]
let y = [-300, -200, -100, 0, 100, 200]
let a = [-500, -333.33, -166.66, 0.01, 166.68, 333.35, 
        500, 500, 500, 500, 500, 500, 
        333.35, 166.68, 0.01, -166.66, -333.33, -500, 
        -515, -515, -515, -515, -515, -515]
let b = [-315, -315, -315, -315, -315, -315,  
         -315, -210, -105, 0, 105, 210,
          300, 300, 300, 300, 300, 300, 
          210, 105, 0, -105, -210, -315]

function setup() {
  createCanvas(1050, 650, WEBGL);
  frameRate(1)
}

function draw() {
  background(255);
  stroke(0);

  let c = color(random(180,260), random(45,135), random(110,190))
  for(let i = 0; i<y.length; i++){
    for(let j = 0; j<x.length; j++) {
      
    
    //let c2 = color(random(0,255), random(0,255), random(0,255));

      if ((10*i+j) < minute()){
        fill(color(36, 161, 156));
        rect(x[j], y[i], 100)
      }
      else{
        fill(color(254, 206, 171));
        rect(x[j], y[i], 100);
      }
      
      if ((10*i+j) < second()){
        //fill(color(217, 96, 152));
        fill(c);
        circle(x[j]+50, y[i]+50, 75)
      }
      else{
        fill(color(255));
        circle(x[j]+50, y[i]+50, 75)
      }
    }
  }

  for (let i = 0; i<24; i++){
    //let c3 = color(50, 82, 136)
    if (i < 6) {
      fill(color(186, 215, 233));
      rect(a[i], b[i], 166.67, 15);
    }
    if (i >= 6 & i < 12){
      fill(color(255));
      rect(a[i], b[i], 15, 105)
    }
    if (i >= 12 & i < 18) {
      fill(color(255));
      rect(a[i], b[i], 166.67, 15)
    }
    if (i >= 18 & i < 24){
      fill(color(255));
      rect(a[i], b[i], 15, 105)
    }      
  }
    
  for (let i = 0; i<24; i++){
    //let c3 = color(50, 82, 136)
    if (i < hour()){
      if (i < 6) {
        fill(color(50, 82, 136));
        rect(a[i], b[i], 166.67, 15)
      }
      if (i >= 6 & i < 12){
        fill(color(50, 82, 136));
        rect(a[i], b[i], 15, 105)
      }
      if (i >= 12 & i < 18) {
        fill(color(50, 82, 136));
        rect(a[i], b[i], 166.67, 15)
      }
      if (i >= 18 & i < 24){
        fill(color(50, 82, 136));
        rect(a[i], b[i], 15, 105)
      }   
    }
  }
}