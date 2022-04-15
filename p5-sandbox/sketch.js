/* eslint-disable no-undef */
let makeNoise;
let chooseNoise, setVolume, toggleOnOff;
let fft;

function setup() {
  createCanvas(900, 300);
  makeNoise = new p5.Noise();
  makeNoise.amp(0);

  fft = new p5.FFT();

  toggleOnOff = createButton("play")
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
    fill(chooseNoise.value());
  });

  setVolume = createSlider(-60, 0, -60, 1);
  setVolume.input(function () {
    makeNoise.amp(pow(10, setVolume.value()/20, 0.01));
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
