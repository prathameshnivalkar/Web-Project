// // cart.js

// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// const updateCartDisplay = () => {
//   const cartIcon = document.querySelector(".cart-icon span");
//   const cartContainer = document.querySelector(".cart-container");
  
//   cartIcon.textContent = cart.length;
  
//   if (cartContainer) {
//     cartContainer.innerHTML = cart.map((item, index) => `
//       <div class="cart-item">
//         <span>${item.name} - $${item.price} x ${item.quantity}</span>
//         <button onclick="updateQuantity(${index}, 1)">+</button>
//         <button onclick="updateQuantity(${index}, -1)">-</button>
//         <button onclick="removeFromCart(${index})">Remove</button>
//       </div>
//     `).join("");
//   }
// };

// const addToCart = (name, price) => {
//   const existingItem = cart.find(item => item.name === name);
//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     cart.push({ name, price, quantity: 1 });
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartDisplay();
// };

// const updateQuantity = (index, change) => {
//   cart[index].quantity += change;
//   if (cart[index].quantity <= 0) {
//     cart.splice(index, 1);
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartDisplay();
// };

// const removeFromCart = (index) => {
//   cart.splice(index, 1);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartDisplay();
// };

// // Initialize cart on page load
// document.addEventListener("DOMContentLoaded", updateCartDisplay);


document.addEventListener("DOMContentLoaded", () => {
  const cart = []; // Array to store cart items
  const cartIcon = document.querySelector(".cart-icon span");
  
  document.querySelectorAll("#button").forEach(button => {
      button.addEventListener("click", (event) => {
          const productCard = event.target.closest(".card");
          const productName = productCard.querySelector("h4").textContent;
          const productPrice = productCard.querySelector(".price .color").textContent;
          const productImage = productCard.querySelector(".image img").src;

          const product = {
              name: productName,
              price: productPrice,
              image: productImage,
          };
          
          cart.push(product);
          updateCartCount();
      });
  });

  function updateCartCount() {
      cartIcon.textContent = cart.length;
  }
});