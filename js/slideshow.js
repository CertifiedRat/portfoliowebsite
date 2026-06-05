let slideIndex = 0;
let slideTimer;

// Variables to track swipe coordinates
let touchStartX = 0;
let touchEndX = 0;

// Initialize the timer and mobile touch listeners
const container = document.querySelector(".slideshow-container");
resetTimer();
setupTouchEvents();

function changeSlide(direction) {
  showSlide((slideIndex += direction));
  resetTimer();
}

function currentSlide(index) {
  showSlide((slideIndex = index));
  resetTimer();
}

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const wrapper = document.querySelector(".slide-wrapper");

  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }

  wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  if (dots[slideIndex]) {
    dots[slideIndex].classList.add("active");
  }
}

function resetTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    changeSlide(1);
  }, 10000);
}

// Mobile Touch Support Logic
function setupTouchEvents() {
  // 1. Record where the finger first touches the screen
  container.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true },
  );

  // 2. Continually track finger movement (optional, but helps prevent stuttering)
  container.addEventListener(
    "touchmove",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
    },
    { passive: true },
  );

  // 3. Determine swipe direction when the finger lifts off
  container.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true },
  );
}

function handleSwipe() {
  const swipeThreshold = 50; // Minimum distance in pixels to count as a swipe
  const swipeDistance = touchEndX - touchStartX;

  // Swiped Left (Next Slide)
  if (swipeDistance < -swipeThreshold) {
    changeSlide(1);
  }
  // Swiped Right (Previous Slide)
  if (swipeDistance > swipeThreshold) {
    changeSlide(-1);
  }
}
