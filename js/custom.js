let mainNav = document.getElementById('js-navbar');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});