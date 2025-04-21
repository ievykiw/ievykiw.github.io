document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    function updateActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                current = section.id;
                
                if (section.classList.contains('section-light')) {
                    navbar.classList.add('navbar-light');
                } else {
                    navbar.classList.remove('navbar-light');
                }
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
});