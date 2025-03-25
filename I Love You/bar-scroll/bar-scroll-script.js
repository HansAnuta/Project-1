window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    let textElement = document.getElementById("text");
    let textContainer = document.querySelector(".text-container");
    let bars = document.querySelectorAll(".bar");
    let bodyContainer = document.querySelector(".body-container");

    // Scale text and fade effect
    let scale = 1 - (scrollPosition / 1000);
    scale = Math.max(scale, 0.5); // Prevent text from getting too small

    textContainer.style.transform = `scale(${scale})`;
    textContainer.style.opacity = scale;

    // Adjust bar width dynamically
    let barWidth = Math.max(5, 10 - (scrollPosition / 100)); // Decrease width on scroll
    bars.forEach(bar => {
        bar.style.width = `${barWidth}px`;
    });

    // Change text content on scroll
    if (scrollPosition > 100 && scrollPosition < 300) {
        textElement.textContent = "I ❤ YOU";
    } else if (scrollPosition >= 300) {
        textElement.textContent = "I ❤ U";
    } else {
        textElement.textContent = "I LOVE YOU";
    }

    // Animate body-container (so the effect still works with additional content)
    let newScale = Math.max(0.8, 1 - scrollPosition / 1500);
    bodyContainer.style.transform = `scale(${newScale})`;
});
