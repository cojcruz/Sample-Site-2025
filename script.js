// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger menu and navigation menu elements
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle the 'active' class on both elements when the hamburger is clicked
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close the menu when a nav link is clicked (for better mobile UX)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});
