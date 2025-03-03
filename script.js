document.querySelectorAll('.flip-container').forEach(container => {
    container.addEventListener('click', function() {
      this.classList.toggle('flipped');
    });
  });