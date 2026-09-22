document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
            updateThemeIcon(targetTheme);
        });
    }

    function updateThemeIcon(theme) {
        if(!themeIcon) return;
        if (theme === 'dark') {
            themeIcon.classList.remove('bi-moon');
            themeIcon.classList.add('bi-sun');
        } else {
            themeIcon.classList.remove('bi-sun');
            themeIcon.classList.add('bi-moon');
        }
    }

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    if(backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Intersection Observer for Scroll Animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));

    // Dashboard Mobile Sidebar Toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    if(sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });
    }

    // RTL Toggle
    const rtlToggleBtn = document.getElementById('rtlToggle');
    if (rtlToggleBtn) {
        rtlToggleBtn.addEventListener('click', () => {
            const currentDir = htmlElement.getAttribute('dir');
            const targetDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
            htmlElement.setAttribute('dir', targetDir);
        });
    }
});
