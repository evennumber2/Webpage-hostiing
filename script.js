// Display greeting message on page load
window.addEventListener('load', () => {
    alert("Welcome to my personal webpage!");
});

// Optional: Smooth scroll for anchor links (if added)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
