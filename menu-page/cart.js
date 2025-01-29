let cartCount = 0;
// Function to add item to cart (localStorage)
function addToCart(itemName, price) {
  // Update cart count
  cartCount++;
  document.getElementById("cart-count").textContent = `(${cartCount})`;

  let cart = JSON.parse(localStorage.getItem('cartItems')) || []; // Get existing cart items or initialize as empty array

  const item = {
    name: itemName,
    price: price,
    quantity: 1 // Initially set quantity to 1
  };

  cart.push(item); // Add the new item to the cart array
  localStorage.setItem('cartItems', JSON.stringify(cart)); // Store the updated cart array in localStorage

  console.log(item);
}

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