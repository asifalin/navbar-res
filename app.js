function toggleNav() {
    var nav = document.getElementById('navbar-links'); // Selecting by id
    nav.classList.toggle('active');

    var barsIcon = document.querySelector('.icon-bars');
    var closeIcon = document.querySelector('.icon-close');

    barsIcon.style.display = nav.classList.contains('active') ? 'none' : 'block';
    closeIcon.style.display = nav.classList.contains('active') ? 'block' : 'none';
}