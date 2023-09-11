// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the complex animation effect
function complexAnimationOnScroll() {
    const fadeSlideElements = document.querySelectorAll(".tile");

    fadeSlideElements.forEach((element, index) => {
        if (isInViewport(element)) {
            setTimeout(() => {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }, index * 200); // Add a delay based on element index
        }
    });
}

// Initial check when the page loads
complexAnimationOnScroll();

// Check for complex animation elements on scroll
window.addEventListener("scroll", complexAnimationOnScroll);
