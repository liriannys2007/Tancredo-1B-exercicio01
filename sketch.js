function setup() {
  createCanvas(600, 600);
  background("blue");
}

function draw() {
  
fill("white");  
 stroke("silver");     
  if(mouseIsPressed){
  rect(mouseX,mouseY,20,20);
}  
}


