// PetSwap - Minimal JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        }
        
        lastScroll = currentScroll;
    });
});
