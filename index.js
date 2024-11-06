

$(document).ready(function() {
    // Set Basic variables
    var slides = $('.slide');
    var slideIndex = 0;

    // Hide all slides initially and show the first slide
    slides.hide();
    $(slides[slideIndex]).show();

    // Set interval to change slides
    setInterval(function() {
        // Hide the current slide
        $(slides[slideIndex]).fadeOut();

        // Increment index or reset to 0
        slideIndex = (slideIndex + 1) % slides.length;

        console.log(slideIndex);

        // Show the next slide with display block
        $(slides[slideIndex]).fadeIn().css("display", "block");
    }, 2000);
});
