// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    // Swipe Direction
    direction: 'horizontal', // 'horizontal' or 'vertical'
  
    // Loop through slides
    loop: true,
  
    // Enable touch gestures
    touchEventsTarget: 'container', // Listen for touch events on the container
  
    // Navigation Buttons
    navigation: {
      nextEl: '.swiper-button-next', // Next button
      prevEl: '.swiper-button-prev', // Previous button
    },
  
    // Pagination Dots
    pagination: {
      el: '.swiper-pagination', // Pagination container
      clickable: true, // Allow clicking on dots to navigate
    },
  
    // Transition Effect
    effect: 'slide', // 'slide', 'fade', 'cube', 'coverflow', etc.
  
    // Speed of transition
    speed: 500, // Transition duration in milliseconds
  
    // Autoplay (optional)
    autoplay: {
      delay: 3000, // Delay between slides in milliseconds
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
  
    // Keyboard Control (optional)
    keyboard: {
      enabled: true, // Enable keyboard navigation
      onlyInViewport: true, // Only work when Swiper is in viewport
    },
  
    // Mousewheel Control (optional)
    mousewheel: {
      invert: true, // Invert mousewheel direction
    },
  });

  // Dynamically load news items

  // Function to add a new slide
function addSlide(content) {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.textContent = content;
    swiper.appendSlide(slide);
  }
  
  // Example: Fetch news items from an API and add them to the Swiper
  fetch('https://api.example.com/news')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        addSlide(item.title); // Add each news item as a slide
      });
    });

// More config options

// lazy: {
//     loadPrevNext: true, // Load previous and next slides
//   },

//   Breakpoints: Customize Swiper behavior for different screen sizes.

// javascript
// Copy
// breakpoints: {
//   640: {
//     slidesPerView: 1, // Show 1 slide on small screens
//   },
//   1024: {
//     slidesPerView: 2, // Show 2 slides on larger screens
//   },
// },
// Parallax Effects: Add parallax scrolling effects for a more dynamic UI.

// javascript
// Copy
// parallax: true,