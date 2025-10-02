
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');
        
        if (localStorage.getItem('dark-mode') === 'enabled') {
            document.documentElement.classList.add('dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
        
        darkModeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('dark-mode', 'enabled');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            } else {
                localStorage.setItem('dark-mode', 'disabled');
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            }
        });

        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const menuOverlay = document.getElementById('menuOverlay');

        function toggleMenu() {
            mobileMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
        }

        hamburger.addEventListener('click', toggleMenu);
        menuOverlay.addEventListener('click', toggleMenu);

        const mobileLinks = document.querySelectorAll('.mobile-nav a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        const logoUploader = document.getElementById('logo-uploader');
        const headerLogo = document.getElementById('header-logo');
        const footerLogo = document.getElementById('footer-logo');

        logoUploader.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    headerLogo.src = event.target.result;
                    footerLogo.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });

        document.addEventListener("DOMContentLoaded", () => {
            const heroSection = document.querySelector("section");
            heroSection.classList.add("animate-left", "active");

            const animatedItems = document.querySelectorAll("section, .glassmorphism");
            animatedItems.forEach(el => el.classList.add("animate-up"));

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.2
            });

            animatedItems.forEach(el => observer.observe(el));
        });