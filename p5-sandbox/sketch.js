/* eslint-disable no-undef */
let makeNoise;
let chooseNoise, setVolume, toggleOnOff;
let fft;
let osc;

function setup() {
  createCanvas(550, 300);
  makeNoise = new p5.Noise();
  makeNoise.amp(0);
  osc = new p5.Oscillator();
  osc.amp(0);
  fft = new p5.FFT();

  toggleOnOff = createButton("play noise")
    .style("font-family", "courier")
    .mousePressed(function () {
      if (makeNoise.started) {
        makeNoise.stop();
        toggleOnOff.html("play");
      } else {
        makeNoise.start();
        toggleOnOff.html("stop");
      }
    });

  chooseNoise = createSelect().style("font-family", "courier");
  chooseNoise.option("white");
  chooseNoise.option("pink");
  chooseNoise.option("brown");
  chooseNoise.changed(function() {
    makeNoise.setType(chooseNoise.value());
  });

  setVolume = createSlider(-60, 0, -60, 1);
  setVolume.input(function () {
    makeNoise.amp(pow(10, setVolume.value()/20, 0.01));
  });

  toggleOsc = createButton("play oscillator")
    .style("font-family", "courier")
    .mousePressed(function () {
      if (osc.started) {
        osc.stop();
        toggleOsc.html("play");
      } else {
        osc.start();
        toggleOsc.html("stop");
      }
    });

  chooseOsc = createSelect().style("font-family", "courier");
  chooseOsc.option("sine");
  chooseOsc.option("triangle");
  chooseOsc.option("sawtooth");
  chooseOsc.option("square");
  chooseOsc.changed(function() {
    osc.setType(chooseOsc.value());
  })

  setOscVolume = createSlider(-60, 0, -60, 1);
  setOscVolume.input(function () {
    osc.amp(pow(10, setOscVolume.value()/20, 0.01));
  });

  fill("black");
}

// analyze requests a new array 60 times per second to analyze the fft data,
// takes the data and
function draw() {
  background('white');
  let spectrum = fft.analyze();
  beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    point(map(log(i), 0, log(spectrum.length), 0, width), map(spectrum[i], 0, 255, height, 0));
  }
  endShape();
}
draw();
