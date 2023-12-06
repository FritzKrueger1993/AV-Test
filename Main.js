function main(){
  
  background(0);
  
  soundUpdate();
  
  
  
  //-------------------- Colors 
  drawCircles();
  
  
   //-------------------- Lines
     for (i = 0; i < lineCount*2; i++) {
    Lines[i].show();
  } 
  
  
  //-------------------- Date & Time
  getTime();
  fill(255);
  rect(20,20,140,70); 
  fill(0);
  noStroke();
  textSize(20);
  textAlign(LEFT,CENTER);
  text(currentDate, 30, 40);
  text(currentTime, 30, 70);
  
  
  //-------------------- Soundcheck Frame
  fill(0);
  rect(soundGUIX+1, soundGUIY+1, soundGUIWidth-2 , soundGUIHeight-2); 
  fill(255);
  noStroke();
  textSize(12);
  textAlign(LEFT,CENTER);
  text("Sine Mix", soundGUIX + 24, soundGUIY + 25);
  text("Frequency", soundGUIX + 24, soundGUIY + soundGUIHeight *0.5 + 25);
  text("Noise Mix", soundGUIX + 24 + soundGUIWidth * 0.5 , soundGUIY + 25);
  text("Panorama", soundGUIX + 24 + soundGUIWidth * 0.5 , soundGUIY + soundGUIHeight *0.5 + 25);
  textAlign(RIGHT,CENTER);
  text (sineVolDB + " dBFS", soundGUIX + 20 + soundGUIWidth * 0.4 , soundGUIY + 25);
  text (int(sineFreq) + " Hz", soundGUIX + 20 + soundGUIWidth * 0.4 , soundGUIY + soundGUIHeight *0.5 + 25);
  text (noiseVolDB + " dBFS", soundGUIX + 20 + soundGUIWidth * 0.9, soundGUIY + 25);
  text (pan, soundGUIX + 20 + soundGUIWidth * 0.9, soundGUIY + soundGUIHeight *0.5 + 25);
  
  //-------------------- Frame  
  strokeWeight(10);
  stroke(255);
  noFill();
  rect(0,0,windowWidth,windowHeight);

}
