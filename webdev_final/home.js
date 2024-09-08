// home.js
// for the slide in animation
//https://www.youtube.com/watch?v=rGAbT8ykGB0
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

// for the pic fade in and out animation 
//https://www.youtube.com/watch?v=1fO8WKdD468
document.addEventListener("DOMContentLoaded", () => {
    var projectItems = document.querySelectorAll(".project-item img");

    projectItems.forEach(item => {
        // Add the fade-in-and-out class to trigger the animation
        item.classList.add("fade-in-out");
    });
});
