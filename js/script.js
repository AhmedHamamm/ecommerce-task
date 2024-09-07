// select elements
const closeBtn = document.querySelector('.signp-close-btn');
const cart = document.querySelector('.cart');
const user = document.querySelector('.user');

// event listeners
closeBtn.addEventListener('click', () => {
  document.querySelector('.signup-banner').style.display = 'none';
});
cart.addEventListener('click', () => {
  console.log('Cart');
});

user.addEventListener('click', () => {
  console.log('User');
});

// Swiper
const reviewSlider = new Swiper('.review-slider', {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    prevEl: '.prev-btn',
    nextEl: '.next-btn',
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

[
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: { rate: 3.9, count: 120 },
  },
];
