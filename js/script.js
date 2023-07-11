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
  

  fetch("header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

fetch("footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });