// script.js

// 1. Auto-detect system theme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    document.getElementById("sun-icon").classList.add("hidden");
    document.getElementById("moon-icon").classList.remove("hidden");
}

// 2. Dark mode toggle
const darkToggleBtn = document.getElementById("dark-mode-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

darkToggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    sunIcon.classList.toggle("hidden");
    moonIcon.classList.toggle("hidden");
    
    // Save preference to localStorage
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

// 3. Navbar active link highlighting
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("text-primary-500", "font-bold");
    } else {
        link.classList.remove("text-primary-500", "font-bold");
    }
});

// 4. Logo uploader logic
const logoUploader = document.getElementById('logo-uploader');
const headerLogo = document.getElementById('header-logo');
const footerLogo = document.getElementById('footer-logo');

// On page load, check for a saved logo
const savedLogo = localStorage.getItem('customLogo');
if (savedLogo) {
    headerLogo.src = savedLogo;
    footerLogo.src = savedLogo;
}

logoUploader.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            headerLogo.src = imageUrl;
            footerLogo.src = imageUrl;
            // Save the logo to localStorage
            localStorage.setItem('customLogo', imageUrl);
        }
        reader.readAsDataURL(file);
    }
});

// 5. Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');

function toggleMenu() {
    mobileMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

if (menuOverlay) {
    menuOverlay.addEventListener('click', toggleMenu);
}

// Close menu when clicking on menu links
const mobileLinks = document.querySelectorAll('.mobile-nav a');
mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// 6. Load saved preferences on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load dark mode preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.documentElement.classList.add('dark');
        if (sunIcon) sunIcon.classList.add("hidden");
        if (moonIcon) moonIcon.classList.remove("hidden");
    }
    
    // Load logo preference
    const savedLogo = localStorage.getItem('customLogo');
    if (savedLogo && headerLogo && footerLogo) {
        headerLogo.src = savedLogo;
        footerLogo.src = savedLogo;
    }
});