var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, true);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

$('canvas').mousemove(function (event) {         // обращение к  холсту $, и маусмув функция //
  circle(event.offsetX, event.offsetY, 3, true);
});