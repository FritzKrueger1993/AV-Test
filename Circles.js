function drawCircles(){
  let radius = width/6 ;
  let alpha = 255;
  noStroke();
  fill(255,0,0,alpha);
  circle(width / 6 * 1, height - (height/6), radius);
  fill(0,255,0,alpha);
  circle(width / 6 * 3, height - (height/6), radius); 
  fill(0,0,255,alpha);
  circle(width / 6 * 5, height - (height/6), radius); 
}
