document.addEventListener("DOMContentLoaded", () => {
  console.log("Nexus site loaded.");

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Make the background glow subtly follow the mouse (Parallax effect)
  const glow = document.querySelector(".glow");
  const hero = document.querySelector(".hero");

  hero.addEventListener("mousemove", (e) => {
    const x = e.clientX - hero.offsetWidth / 2;
    const y = e.clientY - hero.offsetHeight / 2;

    // Move the glow slightly based on mouse position
    glow.style.transform = `translate(calc(-50% + ${x * 0.05}px), calc(-50% + ${y * 0.05}px))`;
  });

  // Reset glow when mouse leaves
  hero.addEventListener("mouseleave", () => {
    glow.style.transform = "translate(-50%, -50%)";
  });
});
