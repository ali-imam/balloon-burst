function burstBalloon() {
  if (isFlying) {
    var balloon = document.getElementById('balloon');

    // Set balloon opacity to zero
    balloon.style.opacity = 0;

    // Create burst container
    var burstContainer = document.createElement('div');
    burstContainer.classList.add('burst-container');
    balloon.parentNode.appendChild(burstContainer);

    // Generate random number of burst particles between 10 and 20
    var particleCount = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    var angleIncrement = (2 * Math.PI) / particleCount;

    for (var i = 0; i < particleCount; i++) {
      var burstParticle = document.createElement('div');
      burstParticle.classList.add('burst-particle');
      burstContainer.appendChild(burstParticle);

      // Calculate particle position and movement
      var angle = i * angleIncrement;
      var distance = 100; // Distance from center of the burst

      var translateX = Math.cos(angle) * distance;
      var translateY = Math.sin(angle) * distance;

      // Apply animation to burst particle
      burstParticle.style.animation = `burst 0.5s ease-out forwards`;
      burstParticle.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }

    // Remove the balloon and burst particles after the burst animation completes
    setTimeout(function() {
      balloon.remove();
      burstContainer.remove();
    }, 1000);
  }
}
