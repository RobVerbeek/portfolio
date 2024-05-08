window.addEventListener("scroll", function() {
    var scrollIndicator = document.getElementById("scrollIndicator");
    if (scrollIndicator) {
        scrollIndicator.style.display = "none";
    }
});
window.addEventListener("scroll", function() {
    document.body.classList.add("scrolled");
});
