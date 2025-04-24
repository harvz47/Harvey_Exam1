// NAVBAR 
 const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  // OUR Services

  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scroll-animate");

    function handleScroll() {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on load in case it's already in view
  });