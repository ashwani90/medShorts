// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false, // Disable loop for dynamic loading
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  // Function to fetch news items from an API
  async function fetchNewsItems(offset = 0, limit = 10) {
    const response = await fetch(`https://api.example.com/news?offset=${offset}&limit=${limit}`);
    const data = await response.json();
    return data;
  }
  
  // Function to add news items to the Swiper
  function addNewsItemsToSwiper(items) {
    items.forEach((item) => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.textContent = item.title; // Assuming the API returns a 'title' field
      swiper.appendSlide(slide);
    });
  }
  
  // Initial load: Fetch and display the first 10 items
  let offset = 0;
  const limit = 10;
  
  fetchNewsItems(offset, limit).then((items) => {
    addNewsItemsToSwiper(items);
    offset += limit; // Update the offset for the next fetch
  });
  
  // Detect when the user reaches the 8th last item
  swiper.on('reachEnd', () => {
    const totalSlides = swiper.slides.length;
    const currentIndex = swiper.activeIndex;
  
    // Check if the user is close to the end (e.g., 8th last item)
    if (currentIndex >= totalSlides - 8) {
      fetchNewsItems(offset, limit).then((items) => {
        addNewsItemsToSwiper(items);
        offset += limit; // Update the offset for the next fetch
      });
    }
  });

/*
  Advanced Features
  Loading Indicator:
  
  Show a loading spinner while fetching new items.
  
  javascript
  Copy
  function showLoadingIndicator() {
    const loadingSlide = document.createElement('div');
    loadingSlide.classList.add('swiper-slide', 'loading-slide');
    loadingSlide.textContent = 'Loading...';
    swiper.appendSlide(loadingSlide);
  }
  
  function hideLoadingIndicator() {
    const loadingSlide = document.querySelector('.loading-slide');
    if (loadingSlide) {
      swiper.removeSlide(swiper.slides.length - 1); // Remove the loading slide
    }
  }
  Error Handling:
  
  Handle errors if the API request fails.
  
  javascript
  Copy
  fetchNewsItems(offset, limit)
    .then((items) => {
      addNewsItemsToSwiper(items);
      offset += limit;
    })
    .catch((error) => {
      console.error('Failed to fetch news items:', error);
    });
  Throttle API Requests:
  
  Prevent multiple API requests if the user swipes quickly.
  
  javascript
  Copy
  let isFetching = false;
  
  swiper.on('reachEnd', () => {
    if (!isFetching) {
      isFetching = true;
      fetchNewsItems(offset, limit)
        .then((items) => {
          addNewsItemsToSwiper(items);
          offset += limit;
          isFetching = false;
        })
        .catch((error) => {
          console.error('Failed to fetch news items:', error);
          isFetching = false;
        });
    }
  });

  */