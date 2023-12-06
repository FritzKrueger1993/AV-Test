function soundInit(){
sine.type = "sine";
sine.frequency.setValueAtTime(250, audioCtx.currentTime);
sine.connect(gainSine).connect(panner).connect(audioCtx.destination);
gainSine.gain.value = 0;
gainNoise.gain.value = 0;
panner.pan.value = 0;

// Generate WhiteNoise Buffer
let bufferSize = 2 * audioCtx.sampleRate,
    noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate),
    output = noiseBuffer.getChannelData(0);
for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
}


whiteNoise.buffer = noiseBuffer;
whiteNoise.loop = true;


whiteNoise.connect(gainNoise).connect(panner).connect(audioCtx.destination);



}  

function soundStart(){
 sine.start();
 whiteNoise.start(0);
}
