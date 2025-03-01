// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close menu when clicking on a link
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Tambahkan indikator loading
        const submitBtn = this.querySelector('.submit-btn');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Mengambil nilai input
        const templateParams = {
            to_email: "mohdfarhansyafaat@gmail.com",
            from_name: this.querySelector('input[placeholder="Your Name"]').value,
            from_email: this.querySelector('input[placeholder="Your Email"]').value,
            subject: this.querySelector('input[placeholder="Subject"]').value || 'Portfolio Contact Form',
            message: this.querySelector('textarea').value
        };
        
        // Mengirim email - ganti dengan service ID dan template ID Anda
        emailjs.send('service_28gfb2a', 'template_kck05bd', templateParams)
            .then(function() {
                alert('Terima kasih! Pesan Anda telah terkirim.');
                contactForm.reset();
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }, function(error) {
                console.error('Error:', error);
                alert('Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.');
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
    });
}

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Simple animation for skill bars
const skillBars = document.querySelectorAll('.skill-progress');

window.addEventListener('load', function() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.transition = 'width 1s ease';
            bar.style.width = width;
        }, 300);
    });
});