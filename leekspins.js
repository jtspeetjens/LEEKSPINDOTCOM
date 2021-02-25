var audio,
  playButtonHtml,
  bodyCss,
  playing = false;
var frames = new Array(4);

var hoursLabel;
var minutesLabel;
var secondsLabel;
var totalSeconds = 0;

document.addEventListener("DOMContentLoaded", function() {
  document.body.style.cssText = bodyCss;
  document.getElementById('letthepeoplespin').hidden = true;
  var i = frames.length;
  while (i--) {
    frames[i] = new Image();
    frames[i].src = window["frame" + (i + 1)];
    frames[i].style.width = "100%";
    frames[i].style.pointerEvents = "none";
  }
  audio = new Audio();
  audio.loop = true;
  audio.src = loituma_ogg;
  hoursLabel = document.getElementById('hours');
  minutesLabel = document.getElementById('minutes');
  secondsLabel = document.getElementById('seconds');

  document.getElementById('spinbutton').addEventListener('click', spin);
});

function spin() {
  document.getElementById('prespin').hidden = true;
  document.getElementById('letthepeoplespin').hidden = false;
  audio.play();
  var frame = 0;
  setInterval(function() {
    var spin = document.getElementById('spin');
    spin.src = frames[frame].src;
    frame++;
    if (frames[frame] === undefined) frame = 0;
  }, 100);
  setInterval(setTime, 1000);
}

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  hoursLabel.innerHTML = pad(parseInt(totalSeconds / 3600));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}





(function() {
  bodyCss =
    "box-sizing:border-box;width:100%;height:100%;margin:0;background:#000 no-repeat 50% 50%/contain;";
})(); // bodyCss
(function() {
  playButtonHtml =
    '<div style="' +
    "position:absolute;display:table;width:100%;height:100%;" +
    "background:no-repeat 50% 50%/contain;" +
    "cursor:pointer;font:4rem arial;text-shadow: 0 0 .5rem #fff;" +
    '">' +
    '<div style="display:table-cell;text-align:center;vertical-align:middle;">' +
    "Play" +
    "</div></div>";
})(); // html
