
        function showTab(tabName) {
            // Hide all tabs
            const tabs = document.querySelectorAll('.tab-content');
            tabs.forEach(tab => tab.classList.remove('active'));
            
            // Remove active class from all buttons
            const buttons = document.querySelectorAll('.tab-button');
            buttons.forEach(button => button.classList.remove('active'));
            
            // Show selected tab
            document.getElementById(tabName).classList.add('active');
            
            // Add active class to clicked button
            event.target.classList.add('active');
        }

        // Handle image loading states
        function handleImageLoad() {
            const facultyImages = document.querySelectorAll('.faculty-photo img');
            
            facultyImages.forEach(img => {
                // Remove loading class when image loads successfully
                img.addEventListener('load', function() {
                    this.parentNode.classList.remove('loading');
                });
                
                // Handle image loading errors
                img.addEventListener('error', function() {
                    this.parentNode.classList.remove('loading');
                    // The onerror attribute in HTML will handle fallback display
                });
            });
        }

        // Enhanced interaction effects
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize image loading handlers
            handleImageLoad();
            
            // Smooth scroll behavior for better UX
            document.documentElement.style.scrollBehavior = 'smooth';
            
            // Enhanced hover effects for cards
            const cards = document.querySelectorAll('.course-card, .faculty-card, .gallery-item');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    if (this.classList.contains('gallery-item')) {
                        this.style.transform = 'scale(1.05)';
                    } else {
                        this.style.transform = 'translateY(-10px)';
                    }
                });
                
                card.addEventListener('mouseleave', function() {
                    if (this.classList.contains('gallery-item')) {
                        this.style.transform = 'scale(1)';
                    } else {
                        this.style.transform = 'translateY(0)';
                    }
                });
            });

            // Add touch feedback for mobile devices
            const touchElements = document.querySelectorAll('.tab-button, .course-card, .faculty-card, .gallery-item');
            touchElements.forEach(element => {
                element.addEventListener('touchstart', function() {
                    this.style.opacity = '0.8';
                });
                
                element.addEventListener('touchend', function() {
                    this.style.opacity = '1';
                });
            });

            // Intersection Observer for scroll animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe cards for scroll animations
            setTimeout(() => {
                cards.forEach(card => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    observer.observe(card);
                });
            }, 100);

            // Handle orientation changes
            window.addEventListener('orientationchange', function() {
                setTimeout(() => {
                    window.scrollTo(0, window.scrollY);
                }, 100);
            });

            // Optimize for touch devices
            if ('ontouchstart' in window) {
                document.body.classList.add('touch-device');
            }
        });

        // Handle window resize for better responsiveness
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Recalculate layouts if needed
                const activeTab = document.querySelector('.tab-content.active');
                if (activeTab) {
                    activeTab.style.display = 'none';
                    setTimeout(() => {
                        activeTab.style.display = 'block';
                    }, 10);
                }
            }, 100);
        });



