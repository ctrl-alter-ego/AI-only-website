// Detect scroll event
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    
    // Add or remove 'scrolled' class based on scroll position
    if (window.scrollY > 350) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  