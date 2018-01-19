let tempos = [{
    name: 'Grave',
    bpm: 25
  },
  {
    name: 'Largo',
    bpm: 40
  },
  {
    name: 'Adagio',
    bpm: 70
  },
  {
    name: 'Andante',
    bpm: 90
  },
  {
    name: 'Moderato',
    bpm: 110
  },
  {
    name: 'Allegro',
    bpm: 135
  },
  {
    name: 'Vivace',
    bpm: 165
  },
  {
    name: 'Presto',
    bpm: 180
  },
  {
    name: 'Prestissimo',
    bpm: 240
  },
];

let t = 0;
let tempo, bpm;
let beat;

function preload() {
 beat = loadSound('clock.mp3');
}

function setup() {
  createCanvas(400, 400);
  setTempo();
  textAlign(CENTER, CENTER);
  textSize(64);
  frameRate(30);
}

function draw() {
  background(0);
  if(frameCount%int(30*60/bpm) == 0) {
    background(255);
    beat.play();
  }
  fill(255);
  text(tempo, width/2, height/2);
}

function keyPressed() {
  t++;
  t %= tempos.length;
  setTempo();
}

function setTempo() {
  tempo = tempos[t].name;
  bpm = tempos[t].bpm;
}