// main.js

// Function to handle navigation menu toggle
function toggleNavigation() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Event listener for the navigation toggle button
const navToggle = document.getElementById('nav-toggle');
if (navToggle) {
    navToggle.addEventListener('click', toggleNavigation);
}

// Function to close the navigation menu when clicking outside
document.addEventListener('click', function (event) {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');

    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

// Function to scroll smoothly to a section
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listeners for smooth scrolling
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Remove '#' from href
        smoothScroll(targetId);
    });
});

// Function to handle back-to-top button visibility
function handleBackToTopVisibility() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 200) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

// Event listener for scrolling to show/hide back-to-top button
window.addEventListener('scroll', handleBackToTopVisibility);

// Event listener for back-to-top button click
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Function to initialize carousels
function initializeCarousel(carouselId) {
    const carousel = document.getElementById(carouselId);
    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        let currentIndex = 0;

        // Function to update carousel slides
        function updateCarousel() {
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentIndex);
            });
        }

        // Event listeners for next and previous buttons
        const nextButton = carousel.querySelector('.carousel-next');
        const prevButton = carousel.querySelector('.carousel-prev');

        if (nextButton) {
            nextButton.addEventListener('click', function () {
                currentIndex = (currentIndex + 1) % slides.length;
                updateCarousel();
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', function () {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateCarousel();
            });
        }

        // Initialize carousel
        updateCarousel();
    }
}

// Initialize all carousels on the page
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(carousel => {
    initializeCarousel(carousel.id);
});

// Function to handle modal opening and closing
function handleModal(modalId, action) {
    const modal = document.getElementById(modalId);
    if (modal) {
        if (action === 'open') {
            modal.classList.add('open');
        } else if (action === 'close') {
            modal.classList.remove('open');
        }
    }
}

// Event listeners for opening modals
const modalOpenButtons = document.querySelectorAll('.modal-open');
modalOpenButtons.forEach(button => {
    button.addEventListener('click', function () {
        const modalId = button.getAttribute('data-modal');
        handleModal(modalId, 'open');
    });
});

// Event listeners for closing modals
const modalCloseButtons = document.querySelectorAll('.modal-close');
modalCloseButtons.forEach(button => {
    button.addEventListener('click', function () {
        const modal = button.closest('.modal');
        if (modal) {
            modal.classList.remove('open');
        }
    });
});

// Function to apply fade-in animations on scroll
function applyFadeInOnScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 50) {
            element.classList.add('visible');
        }
    });
}

// Event listener for scrolling to apply fade-in animations
window.addEventListener('scroll', applyFadeInOnScroll);

// Initialize fade-in elements on page load
document.addEventListener('DOMContentLoaded', applyFadeInOnScroll);

// Utility function to toggle classes
function toggleClass(elementId, className) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle(className);
    }
}

// Function to dynamically load content into a section (simulating an AJAX request)
function loadDynamicContent(sectionId, content) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.innerHTML = content;
    }
}

// Example: Load dynamic content on button click
const loadContentButton = document.getElementById('load-content-btn');
if (loadContentButton) {
    loadContentButton.addEventListener('click', function () {
        loadDynamicContent('dynamic-section', '<p>Dynamic content loaded successfully!</p>');
    });
}
