document.addEventListener('DOMContentLoaded', function () {
    var scrollLinks = document.querySelectorAll('.nav-link');

    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', function () {
        var scrollToTopBtn = document.getElementById('scrollToTopBtn');
        if (window.scrollY > 500) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
