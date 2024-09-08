// aboutMe.js
// for the slide n and our animation 
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

//https://www.youtube.com/watch?v=uSzjP9XyFMg
// for the flipping of the image
document.addEventListener("DOMContentLoaded", () => {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add 'flip' class to elements in viewport
    function handleScroll() {
        var images = document.querySelectorAll(".card-img");
        images.forEach(img => {
            if (isInViewport(img)) {
                img.classList.add("flip-img");
            }
        });
    }

    // Checking on scroll
    window.addEventListener("scroll", handleScroll);

    // Checking on page load
    handleScroll();
});