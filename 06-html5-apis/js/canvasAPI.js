$(document).ready(function() {
  

    var canvas = document.getElementById('canvasAPI');
        ctx = canvas.getContext('2d');

  function drawCircle() {
    var centerX = canvas.width / 1;
        centerY = canvas.height / 1;
        radius = 70;

    ctx.beginPath();
    ctx.arc(280, 160, 50, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#C8FE2E";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
  }

  function drawTriangle() {
    ctx.fillStyle = "#01DFD7";
    ctx.beginPath();
    ctx.moveTo(150,200);
    ctx.lineTo(50,80);
    ctx.lineTo(200,110);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  drawCircle();
  drawTriangle();

  function drawRectangle() {
    ctx.beginPath();
    ctx.rect(x, y, 70, 40);
    ctx.fillStyle = '#A9F5A9';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.stroke();
  }

  var x = 0;
      y = 15;
      speed = 3;

  function animate() {
    reqAnimFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.ooRequestAnimationFrame ||
    window.msRequestAnimationFrame;

    reqAnimFrame(animate);
    x += speed;
    if(x <= 0 || x >= 500) {
      speed = -speed;
    }
    drawRectangle();
  }
  animate();

});