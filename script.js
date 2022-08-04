var x,y;
function setup(){
	createCanvas(370,600).position(20,20);
	x = width/2;
	y = height/2;
	x1 = 150;
	y1 = 350;
	background(51);
}

function draw(){
	background(51);
	textSize(20)
	text("score: "+sc,20,20)
	text("hight score: "+sch.length,20,50)
	sc+=1
	sch.push(sc)
	if(mouseIsPressed){
	x1 = mouseX;
	y1 = mouseY; 
	}  
	ellipseMode(CENTER);
	fill(255);
	ellipse(x1,y1,40)
	fill(255);
	ellipse(x,y,30)
	var d=dist(x1,y1,x,y)
	if(sc<=sch.length){
		sch.length-=1
	}
	if(d<30){
		x=null;
		sc=0
		y=null;	
	}
	if(y1 <y){
		y-= lerp(0,5,1);
	}else if(y1>y){
	  y+=lerp(0,5,1);  
	}if(x1<x){
		x-=lerp(0,5,1);
	}else if(x1<x){
	x-lerp(0,5,1);
	}else if(x1 >x){
		x+=lerp(0,5,1);
	}
  }
var sc=0
var sch=[]
