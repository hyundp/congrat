// ============ Scroll Reveal ============
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .fade-up, .reveal').forEach(el => {
    observer.observe(el);
});

window.addEventListener('load', () => {
    document.querySelectorAll('.hero .fade-in').forEach(el => {
        el.classList.add('visible');
    });
});

// ============ Scroll Progress ============
const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (scrolled / max) * 100;
    progressBar.style.width = pct + '%';
});

// ============ Cursor ============
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
});

function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .wish-card, .timeline-item, .gallery-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorRing.style.transform = 'translate(-50%, -50%) scale(1.8)';
        cursorRing.style.borderColor = 'rgba(167, 106, 90, 0.8)';
    });
    el.addEventListener('mouseleave', () => {
        cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorRing.style.borderColor = 'rgba(240, 229, 208, 0.5)';
    });
});

// ============ Petals ============
const petalsContainer = document.getElementById('petalsContainer');

function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';

    const startX = Math.random() * 100;
    const size = 10 + Math.random() * 14;
    const duration = 8 + Math.random() * 7;
    const delay = Math.random() * 2;
    const opacity = 0.4 + Math.random() * 0.45;

    petal.style.left = startX + 'vw';
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    petal.style.animationDuration = duration + 's';
    petal.style.animationDelay = delay + 's';
    petal.style.opacity = opacity;

    const hue = Math.random();
    if (hue < 0.5) {
        petal.style.background = `radial-gradient(circle at 30% 30%, #f4d4c7, #d8a393 70%, #b87a6a)`;
    } else if (hue < 0.8) {
        petal.style.background = `radial-gradient(circle at 30% 30%, #faeee4, #e8c5b8 70%, #c9957f)`;
    } else {
        petal.style.background = `radial-gradient(circle at 30% 30%, #f5e6c8, #d4b87a 70%, #b89968)`;
    }

    petalsContainer.appendChild(petal);

    setTimeout(() => petal.remove(), (duration + delay) * 1000);
}

for (let i = 0; i < 8; i++) setTimeout(createPetal, i * 400);
setInterval(createPetal, 900);

// ============ Hero Sparkles ============
const sparklesContainer = document.getElementById('heroSparkles');
if (sparklesContainer) {
    const sparkleCount = 18;
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'hero-sparkle';
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = 2 + Math.random() * 3;
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 5;
        sparkle.style.left = x + '%';
        sparkle.style.top = y + '%';
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        sparkle.style.animationDuration = duration + 's';
        sparkle.style.animationDelay = delay + 's';
        sparklesContainer.appendChild(sparkle);
    }
}

// ============ Parallax Hero Content ============
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (scrolled < window.innerHeight && heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
        heroContent.style.opacity = Math.max(0, 1 - (scrolled / window.innerHeight) * 1.4);
    }
});
