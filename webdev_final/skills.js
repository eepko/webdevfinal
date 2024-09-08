//skills.js
// for the slinde in and out animation
document.addEventListener("DOMContentLoaded", () => {
    // Header Slide-In Animation
    var header = document.querySelector("header");
    if (header) {
        header.classList.add("slide-in-animation");
    }

    // Footer Fade-In Animation
    var footer = document.querySelector("footer");
    if (footer) {
        footer.classList.add("fade-in-animation");
    }
});
//for the color changing of the bars
document.addEventListener('DOMContentLoaded', () => {
    var progressBars = document.querySelectorAll('.progress');

    // Function to generate random color
    function getRandomColor() {
        const colors = ['#FF5733', '#33C1FF', '#4CAF50']; // Red, Blue, Green
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Function to animate progress bars
    function animateProgressBars() {
        progressBars.forEach(progress => {
            var targetWidth = progress.getAttribute('data-width'); // Get target width

            // Generate random color for the progress bar
            var randomColor = getRandomColor();

            // Applying the width and color with smooth transitions
            progress.style.width = targetWidth;
            progress.style.backgroundColor = randomColor;
        });
    }

    // Initial animation when page loads
    animateProgressBars();

    // Adding event listeners to each progress bar for click events
    progressBars.forEach(progress => {
        progress.addEventListener('click', () => {
            var targetWidth = progress.getAttribute('data-width'); // Get target width

            // Generate random color for the progress bar
            var randomColor = getRandomColor();

            // Applying the width and color with smooth transitions
            progress.style.width = targetWidth;
            progress.style.backgroundColor = randomColor;
        });
    });
});