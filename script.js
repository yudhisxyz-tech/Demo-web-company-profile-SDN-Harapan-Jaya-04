function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'beranda.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function addButtonRipple() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size/2 + 'px';
            ripple.style.top = e.clientY - rect.top - size/2 + 'px';
            ripple.classList.add('ripple');
            
            btn.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

function smoothScrollToTop() {
    const scrollButtons = document.querySelectorAll('button[onclick*="beranda.html"], footer button');
    scrollButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.textContent.includes('Kembali') || btn.textContent.includes('Beranda')) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}

function welcomeMessage() {
    if (window.location.pathname.includes('beranda.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
       
        if (!sessionStorage.getItem('welcomed')) {
            setTimeout(() => {
                alert('Selamat datang di website SDN Harapan Jaya 04! Semangat belajar ya adik-adik! ✨');
                sessionStorage.setItem('welcomed', 'true');
            }, 1500);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setActiveNavLink();
    addButtonRipple();
    smoothScrollToTop();
    welcomeMessage();
});