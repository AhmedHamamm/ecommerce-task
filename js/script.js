"use strict";

// select elements
const closeBtn = document.querySelector(".signp-close-btn");
const cart = document.querySelector(".cart");
const user = document.querySelector(".user");

// event listeners
closeBtn.addEventListener("click", () => {
  document.querySelector(".signup-banner").style.display = "none";
});
cart.addEventListener("click", () => {
  console.log("Cart");
});

user.addEventListener("click", () => {
  console.log("User");
});

// Swiper
const reviewSlider = new Swiper(".review-slider", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    prevEl: ".prev-btn",
    nextEl: ".next-btn",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// // Sample product data for test
// const sampleProducts = [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: { rate: 3.9, count: 120 },
//   },
// ];

// // Function to populate product details
// function populateProductDetails(product) {
//   document.querySelector(".product-info h3").textContent = product.title;
//   document.querySelector(
//     ".product-price p"
//   ).innerHTML = `$${product.price.toFixed(2)}`;
//   document.querySelector(".product-description").textContent =
//     product.description;
//   document.querySelector(
//     ".rating-number"
//   ).textContent = `${product.rating.rate}/${product.rating.count} ratings`;
//   document.getElementById("mainImage").src = product.image;
// }

// // Populate the product details when the page loads
// window.addEventListener("DOMContentLoaded", () => {
//   if (sampleProducts.length > 0) {
//     populateProductDetails(sampleProducts[0]);
//   }
// });

// change product image
function changeImage(event, imageSrc) {
  // Remove active class from all buttons
  const buttons = document.querySelectorAll(".tablinks");
  buttons.forEach((button) => button.classList.remove("active"));

  // Add active class to clicked button
  event.currentTarget.classList.add("active");

  // Change main image
  const mainImage = document.getElementById("mainImage");
  mainImage.src = imageSrc;
}

// Function to toggle active class on buttons
const colorOptions = document.querySelectorAll(".color-option");
colorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Remove active class from all options
    colorOptions.forEach((opt) => opt.classList.remove("active"));
    // Add active class to clicked option
    option.classList.add("active");
    console.log("Color option clicked");
  });
});

const sizeOptions = document.querySelectorAll(".size-option");
sizeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Remove active class from all options
    sizeOptions.forEach((opt) => opt.classList.remove("active"));
    // Add active class to clicked option
    option.classList.add("active");
    console.log("Size option clicked");
  });
});

// Quantity function
const quantityInput = document.querySelector(".quantity-input");
const minusBtn = document.querySelector(".quantity-btn.minus");
const plusBtn = document.querySelector(".quantity-btn.plus");

function updateQuantity(change) {
  let currentQuantity = parseInt(quantityInput.value);
  currentQuantity += change;

  // This if for minimum number is 1
  if (currentQuantity < 1) {
    currentQuantity = 1;
  }

  quantityInput.value = currentQuantity;
}

if (minusBtn) {
  minusBtn.addEventListener("click", () => updateQuantity(-1));
}
if (plusBtn) {
  plusBtn.addEventListener("click", () => updateQuantity(1));
}

// Prevent manual input of negative numbers
if (quantityInput) {
  quantityInput.addEventListener("change", () => {
    if (parseInt(quantityInput.value) < 1) {
      quantityInput.value = 1;
    }
  });
}

// Product tabs
const tabButtons = document.querySelectorAll(
  ".product-details-tabs .tab-button"
);
const tabContents = document.querySelectorAll(
  ".product-details-tabs .tab-content"
);

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons and tab
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Add active class
    button.classList.add("active");

    // Show tab conten
    const tabId = button.getAttribute("data-tab");
    const activeContent = document.getElementById(tabId);
    if (activeContent) {
      activeContent.classList.add("active");
    }
  });
});

// Load more reviews function
const loadMoreReviewsBtn = document.querySelector(".load-more-reviews-btn");
let reviewsLoaded = 0;

if (loadMoreReviewsBtn) {
  loadMoreReviewsBtn.addEventListener("click", () => {
    const reviewsContainer = document.querySelector(".reviews-container");
    const reviewWrapper = document.querySelector(".review-wrapper");

    if (reviewsContainer && reviewWrapper) {
      const reviewItems = reviewWrapper.querySelectorAll(".review-item");

      //  newReviewWrapper for creating div for reviews
      const newReviewWrapper = document.createElement("div");
      newReviewWrapper.className = "review-wrapper";

      // This is for loading 2 reviews at a time ( check for loop low 3ayez 1 review 'i < 2') it loops twice
      for (let i = 0; i < 2; i++) {
        if (reviewItems[reviewsLoaded % reviewItems.length]) {
          const newReview =
            reviewItems[reviewsLoaded % reviewItems.length].cloneNode(true);
          newReviewWrapper.appendChild(newReview);
          reviewsLoaded++;
        }
      }

      if (newReviewWrapper.children.length > 0) {
        reviewsContainer.appendChild(newReviewWrapper);
        console.log("Loaded more reviews");
      }
    } else {
      console.error("Reviews wrapper not found");
    }
  });
}

// Remove item from cart
const removeItemBtns = document.querySelectorAll(".remove-item");
removeItemBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Remove item");
    // Add logic to remove the item from the cart
    const cartItem = btn.closest(".cart-item");
    if (cartItem) {
      cartItem.remove();

      // if cart is empty show the div (empty-cart)
      const cartItemsWrapper = document.querySelector(".cart-items-wrapper");
      const cartItems = cartItemsWrapper.querySelectorAll(".cart-item");
      if (cartItems.length === 0) {
        const emptyCartDiv = document.querySelector(".empty-cart");
        if (emptyCartDiv) {
          emptyCartDiv.style.display = "block";
        }
      }
    }
  });
});

// Scroll reveal animations
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

// Hero section
sr.reveal(".hero-content", { origin: "left" });
sr.reveal(".hero-image", { origin: "right" });

// Brands section
sr.reveal(".brands", { interval: 100 });

// Products section
sr.reveal(".products h2", {});
sr.reveal(".products .product-grid", { interval: 100 });

// browse-by-category section
sr.reveal(".browse-by-category h2", {});
sr.reveal(".browse-by-category ", { interval: 100 });

// Top Selling section
sr.reveal(".top-selling .section-title", {});
sr.reveal(".top-selling .product-card", { interval: 100 });

// Browse by dress style section
sr.reveal(".browse-by-dress-style .section-title", {});
sr.reveal(".browse-by-dress-style .category-card", { interval: 100 });

// Customer Reviews section
sr.reveal(".customer-reviews", {});

// Product Details section
sr.reveal(".product-details .product-image", { origin: "left" });
sr.reveal(".product-details .product-info", { origin: "right" });
// product-details-tabs
sr.reveal(".product-details-tabs", {});
// cart section
sr.reveal(".cart-items-wrapper", { origin: "left" });
sr.reveal(".cart-summary", { origin: "right" });

// Footer
sr.reveal(".footer-top", {});
sr.reveal(".footer-links", { interval: 100 });
sr.reveal(".footer-bottom", {});

// read it for this error : Cannot read properties of null (reading 'addEventListener')
// https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
