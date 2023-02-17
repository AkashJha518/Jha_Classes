// Add a class to the header when the page is scrolled
window.addEventListener('scroll', function() {
    const header = document.querySelector('h1');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  