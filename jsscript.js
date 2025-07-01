  <script>
        // Navigation functionality
        function showSection(sectionId) {
            // Hide all sections
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            const selectedSection = document.getElementById(sectionId);
            if (selectedSection) {
                selectedSection.classList.add('active');
            }
            
            // Update page title
            const pageTitle = document.getElementById('pageTitle');
            const titles = {
                'home': 'Welcome to Government Arts and Science College',
                'administration': 'Administration - GASC Sankarankovil',
                'departments': 'Academic Departments - GASC Sankarankovil',
                'scholarships': 'Scholarships & Financial Aid - GASC Sankarankovil',
                'facilities': 'Campus Facilities - GASC Sankarankovil',
                'admissions': 'Admissions - GASC Sankarankovil',
                'contact': 'Contact Us - GASC Sankarankovil'
            };
            
            if (titles[sectionId]) {
                pageTitle.textContent = titles[sectionId];
            }
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const mobileMenu = document.querySelector('.mobile-menu');
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
            
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Mobile menu toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            const mobileMenu = document.querySelector('.mobile-menu');
            
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                const navLinks = document.querySelector('.nav-links');
                const mobileMenu = document.querySelector('.mobile-menu');
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 6px 30px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            }
        });

        // Smooth animations for cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards for animation
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.highlight-card, .department-card, .contact-card');
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s ease';
                observer.observe(card);
            });
        });

        // Form validation and interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            // Add interactive hover effects
            const interactiveElements = document.querySelectorAll('.highlight-card, .department-card, .contact-card');
            
            interactiveElements.forEach(element => {
                element.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                element.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Add click effects for mobile
            interactiveElements.forEach(element => {
                element.addEventListener('touchstart', function() {
                    this.style.transform = 'translateY(-5px) scale(1.01)';
                });
                
                element.addEventListener('touchend', function() {
                    setTimeout(() => {
                        this.style.transform = 'translateY(0) scale(1)';
                    }, 150);
                });
            });
        });

        // Performance optimization
        let ticking = false;
        
        function updateScrollEffects() {
            // Header effects and other scroll-based animations
            const scrollY = window.pageYOffset;
            
            // Update header background
            const header = document.querySelector('header');
            if (scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
            }
            
            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick);

        // Accessibility improvements
        document.addEventListener('keydown', function(e) {
            // ESC key closes mobile menu
            if (e.key === 'Escape') {
                const navLinks = document.querySelector('.nav-links');
                const mobileMenu = document.querySelector('.mobile-menu');
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
            
            // Tab navigation improvements
            if (e.key === 'Tab') {
                document.body.classList.add('tab-navigation');
            }
        });

        document.addEventListener('mousedown', function() {
            document.body.classList.remove('tab-navigation');
        });
    </script>