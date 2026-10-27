document.addEventListener("DOMContentLoaded", () => {
  console.log("Nexus site loaded.");

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Parallax glow effect
  const glow = document.querySelector('.glow');
  const hero = document.querySelector('.hero');

  if (hero && glow) {
    hero.addEventListener('mousemove', (e) => {
      const x = e.clientX - hero.offsetWidth / 2;
      const y = e.clientY - hero.offsetHeight / 2;
      glow.style.transform = `translate(calc(-50% + ${x * 0.05}px), calc(-50% + ${y * 0.05}px))`;
    });

    hero.addEventListener('mouseleave', () => {
      glow.style.transform = 'translate(-50%, -50%)';
    });
  }

  // Games Accordion Logic
  const gameItems = document.querySelectorAll('.game-item');
  gameItems.forEach(item => {
    item.addEventListener('click', () => {
      const wrapper = item.parentElement;
      wrapper.classList.toggle('active');
    });
  });
});
