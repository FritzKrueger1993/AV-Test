function setUpSoundGUI(){


  
  
if(width > 1000){
soundGUIX = width*0.5 - width/ lineCount;
soundGUIY = height/ lineCount;
soundGUIWidth = (width / lineCount) * 2;
soundGUIHeight = height/ lineCount * 2;
}

else{
soundGUIX = width*0.5 - (width/ lineCount) * 2;
soundGUIY = height/ lineCount;
soundGUIWidth = (width / lineCount) * 4;
soundGUIHeight = height/ lineCount * 2;
}

sliderSineVol.position(soundGUIX + 20, soundGUIY + 33);
sliderSineVol.size(soundGUIWidth * 0.4);
sliderSineFreq.position(soundGUIX + 20, soundGUIY + soundGUIHeight *0.5 + 33);
sliderSineFreq.size(soundGUIWidth * 0.4);
sliderNoiseVol.position(soundGUIX + soundGUIWidth * 0.5 + 20, soundGUIY + 33);
sliderNoiseVol.size(soundGUIWidth * 0.4);
sliderPan.position(soundGUIX + soundGUIWidth * 0.5 + 20, soundGUIY + soundGUIHeight *0.5 + 33);
sliderPan.size(soundGUIWidth * 0.4);


toggleX = width - 50;
toggleY = 10;
toggleWidth = 40;
toggleHeight = 40;

}
