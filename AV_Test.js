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
}

function mousePressed(){
 fullscreen(1);
 audioCtx.resume();
 if (running == false){
  soundStart();
  setUpSoundGUI();
 }

 running = true; 

}
function mouseReleased(){

}
