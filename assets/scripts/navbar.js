document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    var navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var target1 = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        target1.classList.toggle('is-active');
  
      });
    });
  
  });