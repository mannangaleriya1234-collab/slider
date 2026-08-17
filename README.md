# 🖼️ Image Slider

A simple image slider (carousel) built with plain HTML, CSS, and JavaScript — no frameworks, no libraries, just the basics.

## 🚀 Features

- Auto-slides every 2 seconds
- Prev / Next buttons to manually navigate
- Clickable dots to jump straight to any slide
- Smooth sliding animation
- Responsive — resizes nicely on smaller screens

## 📁 Project Structure

```
image-slider/
├── index.html
├── style.css
├── slider.js
└── img/
    ├── 1.jpg
    ├── 2.jpg
    ├── 3.jpg
    ├── 4.jpg
    └── 5.jpg
```

## 🛠️ How It Works

- **`index.html`** — sets up the basic markup: a slider container with a track div, prev/next buttons, and a dots container.
- **`slider.js`** — does all the heavy lifting:
  - Loops through a `slides` array to create an `<img>` for each slide
  - Creates a clickable dot for each slide
  - `updateSlider()` shifts the track using `transform: translateX()` based on the current slide index
  - `nextSlide()` / `prevSlide()` handle moving forward/backward (wrapping around with `%` so it loops)
  - `setInterval(nextSlide, 2000)` auto-advances the slider every 2 seconds
- **`style.css`** — styles everything and handles the sliding animation with a CSS `transition` on `transform`.

## ▶️ How to Run It

1. Put your images inside a folder called `img/`, named `1.jpg` through `5.jpg` (or edit the `slides` array in `slider.js` to match your filenames).
2. Just open `index.html` in your browser. No build tools or installs needed!

## 📝 Notes

- Want it to auto-slide faster or slower? Change the `2000` (milliseconds) in `setInterval(nextSlide, 2000)` inside `slider.js`.
- Want more/fewer slides? Just add or remove entries in the `slides` array at the top of `slider.js` — the dots and images update automatically.

## 📚 What I Learned

- Basic DOM manipulation (`createElement`, `appendChild`, `classList`)
- Using `transform: translateX()` for smooth sliding
- Event listeners for buttons and dynamically created elements
- Using `setInterval` for auto-play behavior
