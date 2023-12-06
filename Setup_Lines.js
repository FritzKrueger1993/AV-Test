function setUpLines(){
 for (i = 0; i < lineCount; i++) {
    Lines[i] = new Line(0 + width/lineCount * i, 0, 0 + width/lineCount * i, height);
  } 
 for (i = lineCount; i < lineCount*2; i++) {
    Lines[i] = new Line(0, 0 + height/lineCount * (i-lineCount) , width, 0 + height/lineCount * (i-lineCount));
  } 
}
