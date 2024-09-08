// contact.js
// for the slide in animation
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

//for the bounce effect 
//https://www.youtube.com/watch?v=cwtn1-GRxIQ
document.addEventListener("DOMContentLoaded", () => {
    var formFields = document.querySelectorAll("input, textarea");
    var submitButton = document.querySelector("button[type='submit']");

    if (formFields.length) {
        formFields.forEach(field => {
            field.addEventListener("focus", () => {
                field.classList.add("zoom-in");
            });

            field.addEventListener("blur", () => {
                field.classList.remove("zoom-in");
            });
        });
    }

    if (submitButton) {
        submitButton.addEventListener("mouseover", () => {
            submitButton.classList.add("bounce");
        });

        submitButton.addEventListener("mouseout", () => {
            submitButton.classList.remove("bounce");
        });
    }
});

