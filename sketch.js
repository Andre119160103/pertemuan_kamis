let j;
function setup() {
  // put setup code here
  createCanvas(400,400);  
  j = 0;
}

function draw() {
  // put drawing code here
  background(200);

  strokeWeight(8)
  stroke(243, 31, 22)
  point(100,150);
  line(50,50,50,150);

  fill(149, 53, 83);
  rect(150,20, 20, 100);
  
  strokeWeight(2)
  fill(90, 166,2) //hijau
  ellipse(150, 120, 20, 20);
  ellipse(200, 120, 20, 50);

  strokeWeight(0)
  strokeJoin(ROUND)
  triangle(20,20, 20,60, 60,20);
  arc(100,100, 40, 40, radians(0), radians(270));

strokeWeight(5)
beginShape();
vertex(300, 50)
vertex(350, 100)
vertex(300,15)
vertex(250,150)
endShape(CLOSE);


for (var i=0; i<=400; i++){
  x = i
  y = 300 + 20*Math.sin(PI*x/20)
  point(x,y)

}


var y = 200 + 20*Math.sin(PI*j/20)
var r = 50 + 10*Math.sin(PI*j/20)
j += 1
fill(240, 192, 35)
ellipse(300, y, r,r);


}