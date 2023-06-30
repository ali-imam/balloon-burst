var currentScale = 1.0;
var clickCount = 0;

function inflateBalloon() {
  var balloon = document.getElementById('balloon');
  clickCount++;

  if (clickCount <= 3) {
      currentScale += 0.5;
      balloon.style.transform = 'scale(' + currentScale + ')';

      if (clickCount === 3) {
        balloon.classList.add('fly-animation');
        isFlying = true;
        updateBalloonAnimation();
      }
  }
}




