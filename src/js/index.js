var scrolled = false;

window.addEventListener("scroll", function() {
    if (!scrolled) {
        document.body.classList.add("scrolled");
        scrolled = true;
    }
});

