const slides = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg"
];

let currentIndex = 0;

const track = document.getElementById("sliderTrack");
const dotsContainer = document.getElementById("dotsContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Create images
slides.forEach(function (image) {
  const slide = document.createElement("div");
  slide.className = "slide";

  slide.innerHTML = '<img src="' + image + '" alt="Slide Image">';

  track.appendChild(slide);
});

// Create dots
slides.forEach(function (image, index) {
  const dot = document.createElement("span");

  dot.className = "dot";

  if (index === 0) {
    dot.classList.add("active");
  }

  dot.addEventListener("click", function () {
    goToSlide(index);
  });

  dotsContainer.appendChild(dot);
});

// Show selected slide
function updateSlider() {
  const offset = -currentIndex * 100;

  track.style.transform = "translateX(" + offset + "%)";

  const dots = document.querySelectorAll(".dot");

  dots.forEach(function (dot, index) {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Go to a particular slide
function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

// Next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

// Previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Change slide every 2 seconds
setInterval(nextSlide, 2000);

updateSlider();
