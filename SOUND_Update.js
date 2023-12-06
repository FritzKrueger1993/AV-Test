 
function soundUpdate(){
 sineVol = pow (sliderSineVol.value(),3);
 sineVolDB = int(20*log(sineVol/1));
 sineFreq = 440 * pow (2, (sliderSineFreq.value() - 69) / 12);
 noiseVol = pow(sliderNoiseVol.value(),3);
 noiseVolDB = int(20*log(noiseVol/1));
 pan = sliderPan.value();
 
 gainSine.gain.setTargetAtTime(sineVol, audioCtx.currentTime, 0.1);
 sine.frequency.setTargetAtTime(sineFreq, audioCtx.currentTime, 0.05);
 gainNoise.gain.setTargetAtTime(noiseVol, audioCtx.currentTime, 0.1);
 panner.pan.setTargetAtTime(pan, audioCtx.currentTime, 0.1);
}
