var tl = gsap.timeline()
tl.from(".navbar-brand",{
    delay:0.4,
    opacity:0,
    y:-30,
    duration:1,
})
tl.from(".nav-item",{
    opacity:0,
    y:-30,
    duration:1,
    stagger:0.1
})
// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.querySelector('#checkbox'); // Match the correct ID
  
    toggleSwitch.addEventListener('change', function () {
      document.body.classList.toggle('dark-mode');
      document.querySelector('.navbar').classList.toggle('dark-mode');
    });
  });
  
// Select the scroll button and the outer circle
const scrollButton = document.getElementById("scrollButton");
const outerCircle = document.querySelector(".outer-circle");

// Function to handle scroll behavior
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 360;

    // Show the button after scrolling 100px
    if (scrollTop > 100) {
        scrollButton.classList.add("visible");
    } else {
        scrollButton.classList.remove("visible");
    }

    // Update the circular progress for the outer circle
    outerCircle.style.setProperty("--scroll-progress", `${scrollProgress}deg`);
});

// Scroll-to-top functionality
scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Set initial state for scroll progress
document.addEventListener("DOMContentLoaded", () => {
    outerCircle.style.setProperty("--scroll-progress", "0deg");
    scrollButton.classList.remove("visible"); // Ensure the button starts hidden
});
