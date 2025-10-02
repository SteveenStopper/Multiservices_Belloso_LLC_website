// Smooth scrolling for anchor links (Funciona con Bootstrap Navbar)
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Compensar la altura de la navbar fija
                const offsetTop = targetElement.offsetTop - document.querySelector('.navbar').offsetHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});