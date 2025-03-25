window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    let textElement = document.getElementById("text");
    let textContainer = document.querySelector(".text-container");
    let bars = document.querySelectorAll(".bar");
    let bodyContainer = document.querySelector(".body-container");

    let scale = 1 - (scrollPosition / 1000);
    scale = Math.max(scale, 0.5);

    textContainer.style.transform = `scale(${scale})`;
    textContainer.style.opacity = scale;

    let barWidth = Math.max(5, 10 - (scrollPosition / 100));
    bars.forEach(bar => {
        bar.style.width = `${barWidth}px`;
    });

    if (scrollPosition > 100 && scrollPosition < 300) {
        textElement.textContent = "I ❤ YOU";
    } else if (scrollPosition >= 300) {
        textElement.textContent = "I ❤ U";
    } else {
        textElement.textContent = "I LOVE YOU";
    }

    let newScale = Math.max(0.8, 1 - scrollPosition / 1500);
    bodyContainer.style.transform = `scale(${newScale})`;
});
