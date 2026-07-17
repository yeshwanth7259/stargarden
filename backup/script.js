document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Testimonial Slider
    const tCardsContainer = document.querySelector('.testimonial-cards');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    const dots = document.querySelectorAll('.slider-dots .dot');
    
    if (tCardsContainer && prevBtn && nextBtn) {
        let scrollAmount = 0;
        
        nextBtn.addEventListener('click', () => {
            const cardWidth = document.querySelector('.t-card').offsetWidth + 24; // width + gap
            tCardsContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
            updateDots();
        });
        
        prevBtn.addEventListener('click', () => {
            const cardWidth = document.querySelector('.t-card').offsetWidth + 24;
            tCardsContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
            updateDots();
        });
        
        // Update active dot based on scroll position (simple version)
        function updateDots() {
            setTimeout(() => {
                const scrollLeft = tCardsContainer.scrollLeft;
                const totalWidth = tCardsContainer.scrollWidth - tCardsContainer.clientWidth;
                const percentage = totalWidth === 0 ? 0 : scrollLeft / totalWidth;
                
                let activeIndex = Math.round(percentage * (dots.length - 1));
                if (Number.isNaN(activeIndex) || activeIndex < 0) activeIndex = 0;
                if (activeIndex >= dots.length) activeIndex = dots.length - 1;
                
                dots.forEach(dot => dot.classList.remove('active'));
                dots[activeIndex].classList.add('active');
            }, 300);
        }
        
        tCardsContainer.addEventListener('scroll', updateDots);
        
        // Dot click functionality
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const totalWidth = tCardsContainer.scrollWidth - tCardsContainer.clientWidth;
                const scrollPosition = (index / (dots.length - 1)) * totalWidth;
                tCardsContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
            });
        });
    }

    // 4. Project Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filterValue = btn.textContent.toUpperCase();
            
            projectCards.forEach(card => {
                const category = card.querySelector('.category').textContent.toUpperCase();
                
                if (filterValue === 'ALL' || category.includes(filterValue)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 5. Mobile Menu Toggle (Basic implementation)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            // Check if styles for mobile menu active state exist, if not we'll create an inline style logic for now
            if (navLinks.style.display === 'flex' && navLinks.style.flexDirection === 'column') {
                navLinks.style.display = '';
                navLinks.style.flexDirection = '';
                navLinks.style.position = '';
                navLinks.style.top = '';
                navLinks.style.left = '';
                navLinks.style.width = '';
                navLinks.style.background = '';
                navLinks.style.padding = '';
                navLinks.style.boxShadow = '';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(15, 23, 42, 0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
            }
        });
    }
});
