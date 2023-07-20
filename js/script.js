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
  
// fetch page furniture
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

  // today's date
  document.addEventListener('DOMContentLoaded', function() {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const addOrdinalSuffix = function(number) {
        if (number % 10 === 1 && number % 100 !== 11) {
            return number + 'st';
        } else if (number % 10 === 2 && number % 100 !== 12) {
            return number + 'nd';
        } else if (number % 10 === 3 && number % 100 !== 13) {
            return number + 'rd';
        } else {
            return number + 'th';
        }
    };

    const today = new Date();
    const day = addOrdinalSuffix(today.getDate());
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;

    document.getElementById('date').innerText = formattedDate;
});