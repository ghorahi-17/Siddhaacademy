<script>
    // Toggle Menu on Hamburger Click
    document.querySelector('.menu-toggle').addEventListener('click', function ()

</script>

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Add simple animations on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.details-content, .hero-images img').forEach(el => {
    observer.observe(el);
});
