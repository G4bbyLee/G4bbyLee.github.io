document.querySelectorAll('.flip-container').forEach(container => {
    container.addEventListener('click', function() {
      this.classList.toggle('flipped');
    });
  });


const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
let interval;

function startCarousel() {
interval = setInterval(() => {
    const firstItem = track.firstElementChild;
    track.appendChild(firstItem);
    track.style.transition = 'none';
    track.style.transform = 'translateX(0)';
    setTimeout(() => {
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = 'translateX(calc(-20% - 20px))'; /* Adjust for width and gap */
    }, 50);
}, 3000); // Change image every 3 seconds
}

function stopCarousel() {
clearInterval(interval);
}

items.forEach(item => {
item.addEventListener('mouseover', stopCarousel);
item.addEventListener('mouseout', startCarousel);
});

startCarousel();