/* ====================================
   NAYEPANKH FOUNDATION - JAVASCRIPT
   Interactive features and functionality
   ==================================== */

// ===== 1. DARK MODE TOGGLE =====
// This feature allows users to switch between light and dark themes

const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

// Check if user previously enabled dark mode (using localStorage)
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeBtn.textContent = '☀️';
}

// Toggle dark mode when button is clicked
darkModeBtn.addEventListener('click', function() {
    // Check if dark mode is currently enabled
    if (body.classList.contains('dark-mode')) {
        // If yes, disable it (switch to light mode)
        body.classList.remove('dark-mode');
        darkModeBtn.textContent = '🌙';
        // Remember this preference
        localStorage.setItem('darkMode', 'disabled');
    } else {
        // If no, enable it (switch to dark mode)
        body.classList.add('dark-mode');
        darkModeBtn.textContent = '☀️';
        // Remember this preference
        localStorage.setItem('darkMode', 'enabled');
    }
});

// ===== 2. HAMBURGER MENU (Mobile Navigation) =====
// Shows/hides navigation menu on mobile devices

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle menu visibility when hamburger is clicked
hamburger.addEventListener('click', function() {
    // Toggle the 'active' class to show/hide menu
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (for better UX)
const navLinksItems = document.querySelectorAll('.nav-link');
navLinksItems.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class to close menu after navigation
        navLinks.classList.remove('active');
    });
});

// ===== 3. SMOOTH SCROLLING =====
// Smooth scroll to sections when navigation links are clicked

function smoothScroll(targetSelector) {
    // Find the target element by ID
    const targetElement = document.querySelector(targetSelector);
    
    if (targetElement) {
        // Scroll smoothly to the element
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===== 4. NUMBER ANIMATION =====
// Animate numbers in the impact section when page loads/scrolls

// Function to animate a number from 0 to target value
function animateCounter(element) {
    // Get the target number from data attribute
    const targetNumber = parseInt(element.getAttribute('data-target'));
    // Starting value
    let currentNumber = 0;
    // Duration of animation in milliseconds
    const duration = 2000;
    // Calculate how much to increment per frame
    const increment = targetNumber / (duration / 50);
    
    // Animation interval (runs every 50ms)
    const interval = setInterval(function() {
        // Increase current number
        currentNumber += increment;
        
        // Stop animation when target is reached
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(interval);
        }
        
        // Update the display with current number
        element.textContent = Math.floor(currentNumber);
    }, 50);
}

// ===== 5. INTERSECTION OBSERVER =====
// Triggers animations when elements come into view

// Create an observer that detects when elements are visible
const observerOptions = {
    threshold: 0.1,  // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px'  // Trigger a bit before fully visible
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        // If element is visible
        if (entry.isIntersecting) {
            // Check if it's a stat card (with number animation)
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !entry.target.classList.contains('animated')) {
                // Animate the number
                animateCounter(statNumber);
                // Mark as animated so we don't animate again
                entry.target.classList.add('animated');
            }
            
            // Add visible class for animations
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all stat cards
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => {
    observer.observe(card);
});

// ===== 6. CONTACT FORM HANDLING =====
// Handle form submission and validation

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (name === '' || email === '' || message === '') {
        // Show error message
        alert('Please fill in all fields!');
        return;
    }
    
    // Email format validation (simple check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }
    
    // If validation passes, show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form fields
    contactForm.reset();
    
    // Note: In a real application, you would send this data to a server
    // For now, it's just a frontend validation
});

// ===== 7. ACTIVE LINK HIGHLIGHTING =====
// Highlight current section in navigation

window.addEventListener('scroll', function() {
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Check which section is currently in view
    let current = '';
    sections.forEach(section => {
        // Get top position of section
        const sectionTop = section.offsetTop;
        // Get height of section
        const sectionHeight = section.clientHeight;
        
        // Check if section is in view
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    // Update active link styling
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Add active class if link href matches current section
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== 8. PAGE LOAD ANIMATIONS =====
// Trigger animations when page loads

window.addEventListener('load', function() {
    // Add animation class to body when page fully loads
    body.classList.add('loaded');
});

// ===== 9. NAVBAR BACKGROUND ON SCROLL =====
// Change navbar styling when scrolling

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    // Add shadow to navbar when scrolled
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// ===== 10. CONSOLE MESSAGE =====
// Fun message for developers viewing console

console.log('%c Welcome to NayePankh Foundation Website! ', 'background: #6366f1; color: white; font-size: 16px; padding: 10px;');
console.log('%c Made with ❤️ by a beginner frontend developer ', 'background: #ec4899; color: white; font-size: 14px; padding: 8px;');
