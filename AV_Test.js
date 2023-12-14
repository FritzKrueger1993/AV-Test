let compSize = 0;

let running = false;
let Lines = [];
let lineCount = 6;
let currentDate;
let currentTime;


let soundGUIX;
let soundGUIY;
let soundGUIWidth;
let soundGUIHeight;

let sliderSineVol;
let sliderSineFreq;
let sliderNoiseVol;
let sliderPan;

const audioCtx = new AudioContext();
const sine = audioCtx.createOscillator();
const gainSine = audioCtx.createGain();
const gainNoise = audioCtx.createGain();
const panner = audioCtx.createStereoPanner(); 
const whiteNoise = audioCtx.createBufferSource();

let sineVol;
let sineFreq;
let noiseVol;

let toggleX;
let toggleY;
let toggleWidth;
let toggleHeight;
let fs = 0;

function setup() {
createCanvas(windowWidth-compSize, windowHeight-compSize, P2D);
createSliders();
setUpLines();
soundInit();
background(0);
}


function draw() {
if (running == true){
  main();
  }
  else{
  startWindow();
  }
}

function windowResized() {
  resizeCanvas(windowWidth-compSize, windowHeight-compSize);
  setUpLines();
  setUpSoundGUI();
  
  if(fullscreen() == null){
    fs = 0;
  }
  
}

function mousePressed(){
 
 audioCtx.resume();
 if (running == false){
  fullscreen(1);
  fs = 1;
  soundStart();
  setUpSoundGUI();

 }

 running = true; 
 
 if(mouseX >= toggleX && mouseX <= toggleX + toggleWidth && mouseY >= toggleY && mouseY <= toggleY + toggleHeight) {
   fs = !fs;
   fullscreen(fs);
 }
 
}
function mouseReleased(){

}
