document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = -1;
    var images = [
        "img/background/background.jpg",
    ];

    var slideshow = document.getElementById("slideshow");
    slideshow.classList.add("fade-out");

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        var newImageUrl = images[currentIndex];

        slideshow.classList.replace("fade-in", "fade-out");
        slideshow.style.backgroundImage = "url(" + newImageUrl + ")";

        setTimeout(function() {
            slideshow.classList.replace("fade-out", "fade-in");
        }, 250); 
    }

    setTimeout(changeBackground, 1000);
    setInterval(changeBackground, 800000);

    var audio = document.getElementById("bgMusic");
    audio.volume = 0.2;
    audio.play();

    document.body.addEventListener("keydown", function(event) {
        if (event.code === "Space") {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    });
});