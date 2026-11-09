// Cada planeta reúne dos fotos locales, un mensaje y su animación.
const sectionsData = {
    "section-1": {
        title: "Amor Incondicional ❤️",
        text: "Mamá, cada trazo representa todo el amor que nos has brindado desde el primer día.",
        icon: "🌸",
        motif: "flower",
        accent: "#ff9fbd",
        img1: "Img/mom%20(1).jpg",
        img2: "Img/mom%20(2).jpg",
        animation: drawHeartProgram
    },
    "section-2": {
        title: "Eres Mi Sol 🌻",
        text: "Siempre vas a ser nuestro ejemplo a seguir y nuestra inspiración por todo lo que nos has dado.",
        icon: "☀️",
        motif: "sun",
        accent: "#ffd88a",
        img1: "Img/mom%20(3).jpg",
        img2: "Img/mom%20(4).jpg",
        animation: drawFlowerProgram
    },
    "section-3": {
        title: "Gracias Por Todo ✨",
        text: "Un universo lleno de estrellas no bastaría para agradecer todo tu esfuerzo.",
        icon: "✨",
        motif: "star",
        accent: "#a9c8ff",
        img1: "Img/mom%20(5).jpg",
        img2: "Img/mom%20(6).jpg",
        animation: drawGalaxyProgram
    },
    "section-4": {
        title: "La Mejor Mamá 🌷",
        text: "Con el tiempo te has vuelto la mejor mamá y tengo los recuerdos más bonitos a tu lado.",
        icon: "🌷",
        motif: "tulip",
        accent: "#f6a8d7",
        img1: "Img/mom%20(7).jpg",
        img2: "Img/mom%20(8).jpg",
        animation: drawFlowerProgram
    },
    "section-5": {
        title: "Siempre Juntos 💖",
        text: "Sin importar las diferencias y discusiones que tengamos, estaremos contigo siempre.",
        icon: "💖",
        motif: "heart",
        accent: "#ff86ae",
        img1: "Img/mom%20(9).jpg",
        img2: "Img/mom%20(10).jpg",
        animation: drawHeartProgram
    },
    "section-6": {
        title: "Recuerdos de Oro 🎁",
        text: "No sabes lo mucho que atesoro cada recuerdo que pasamos en familia, disfrtando y compartiendo juntos.",
        icon: "🎁",
        motif: "sparkle",
        accent: "#e6bdff",
        img1: "Img/mom%20(11).jpg",
        img2: "Img/mom%20(12).jpg",
        animation: drawGalaxyProgram
    },
    "section-7": {
        title: "Mi Reina 👑",
        text: "Hoy celebramos la vida de la mujer que nos ha enseñado la verdadera resiliencia. ¡Feliz día!",
        icon: "👑",
        motif: "crown",
        accent: "#ffd88a",
        img1: "Img/mom%20(13).jpg",
        img2: "Img/mom%20(14).jpg",
        animation: drawHeartProgram
    },
    "section-8": {
        title: "Tu Luz Nos Guía 🌟",
        text: "Siempre nos enseñaste que hacer mamá, aunque pensaras que no, siempre nos guiaste.",
        icon: "🌟",
        motif: "comet",
        accent: "#a9e8ff",
        img1: "Img/mom%20(15).jpg",
        img2: "Img/mom%20(16).jpg",
        animation: drawGalaxyProgram
    },
    "section-9": {
        title: "Abrazos que Curan 🤗",
        text: "No hay lugar más seguro ni abrazo más bonito que el que siempre nos das.",
        icon: "🤗",
        motif: "hug",
        accent: "#ffc4a5",
        img1: "Img/mom%20(17).jpg",
        img2: "Img/mom%20(18).jpg",
        animation: drawHeartProgram
    },
    "section-10": {
        title: "Alegría Compartida 🌈",
        text: "Atesoro cada momento que bromeamos contigo y te sacamos una sonrisa, porque tu alegría es la nuestra.",
        icon: "🌈",
        motif: "rainbow",
        accent: "#bca5ff",
        img1: "Img/mom%20(19).jpg",
        img2: "Img/mom%20(20).jpg",
        animation: drawFlowerProgram
    },
    "section-11": {
        title: "Un Corazón Inmenso 💝",
        text: "Tu generosidad hacen más bonito el mundo de quienes tenemos la suerte de amarte y apreciarte.",
        icon: "💝",
        motif: "heart",
        accent: "#ff9fbd",
        img1: "Img/mom%20(21).jpg",
        img2: "Img/mom%20(22).jpg",
        animation: drawHeartProgram
    },
    "section-12": {
        title: "Nuestro Tesoro 🌙",
        text: "Cada una de estas fotos guarda un pedacito de nuestra historia, un pedazo de recuerdos lindos y de todo lo que sentimos por ti.",
        icon: "🌙",
        motif: "moon",
        accent: "#b4bcff",
        img1: "Img/mom%20(23).jpg",
        img2: "Img/mom%20(24).jpg",
        animation: drawGalaxyProgram
    }
};

// Referencias HTML
const welcomeScreen = document.getElementById('welcome-screen');
const galaxyContainer = document.getElementById('galaxy-container');
const startBtn = document.getElementById('start-btn');
const detailModal = document.getElementById('detail-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const closeModalIcon = document.getElementById('close-modal-icon');
const replayBtn = document.getElementById('replay-btn');
let animationFrameId = null;
let galaxyFrameId = null;
let galaxyResizeHandler = null;
let galaxyStarted = false;
let lastFocusedElement = null;
const orbitNodesContainer = document.getElementById('orbit-nodes-container');

Object.entries(sectionsData).forEach(([id, data], index) => {
    const button = document.createElement('button');
    button.className = 'orbit-item';
    button.type = 'button';
    button.dataset.target = id;
    button.setAttribute('aria-label', `Abrir recuerdo: ${data.title}`);
    button.title = data.title;
    button.dataset.label = data.title.replace(/\s*[\p{Extended_Pictographic}\uFE0F]+$/u, '');
    button.style.setProperty('--planet-index', index);
    button.innerHTML = `<span class="planet-art" data-motif="${data.motif}" style="--planet-accent:${data.accent}" aria-hidden="true"><span class="icon-node">${data.icon}</span><span class="planet-satellite satellite-one"></span><span class="planet-satellite satellite-two"></span></span><span class="planet-title">${data.title.replace(/\s*[\p{Extended_Pictographic}\uFE0F]+$/u, '')}</span><span class="planet-number">${String(index + 1).padStart(2, '0')}</span>`;
    orbitNodesContainer.appendChild(button);
});

function layoutPlanetPositions() {
    const { width, height } = galaxyContainer.getBoundingClientRect();
    if (!width || !height) return;

    const radiusX = Math.max(0, Math.min(width * 0.44, width / 2 - 46, 680));
    const radiusY = Math.min(height * 0.39, 330);
    galaxyContainer.style.setProperty('--orbit-radius-x', `${radiusX}px`);
    galaxyContainer.style.setProperty('--orbit-radius-y', `${radiusY}px`);

    const mobileAngles = [28, 51, 74, 106, 129, 152, 208, 231, 254, 286, 309, 332];
    orbitNodesContainer.querySelectorAll('.orbit-item').forEach((planet, index) => {
        const mobile = width <= 600;
        const ring = mobile ? 0.98 : (index % 2 === 0 ? 1 : 0.79);
        const angleDegrees = mobile
            ? mobileAngles[index]
            : Math.floor(index / 2) * 60 + (index % 2) * 30 - 15;
        const angle = angleDegrees * Math.PI / 180;
        planet.style.setProperty('--orbit-x', `${Math.cos(angle) * radiusX * ring}px`);
        planet.style.setProperty('--orbit-y', `${Math.sin(angle) * radiusY * ring}px`);
    });
}

// Transición inicial al presionar el botón
startBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    galaxyContainer.classList.remove('hidden');
    galaxyContainer.setAttribute('aria-hidden', 'false');
    layoutPlanetPositions();
    if (!galaxyStarted) initGalaxyBackground();
    burstConfetti();
});

// Delegación: los planetas se crean dinámicamente al cargar los recuerdos.
orbitNodesContainer.addEventListener('click', event => {
    const planet = event.target.closest('.orbit-item');
    if (planet) {
        openModal(planet.dataset.target);
    }
});

closeModalBtn.addEventListener('click', closeModal);
closeModalIcon.addEventListener('click', closeModal);
replayBtn.addEventListener('click', () => {
    closeModal();
    galaxyContainer.classList.add('hidden');
    galaxyContainer.setAttribute('aria-hidden', 'true');
    if (galaxyFrameId) cancelAnimationFrame(galaxyFrameId);
    if (galaxyResizeHandler) window.removeEventListener('resize', galaxyResizeHandler);
    galaxyResizeHandler = null;
    galaxyStarted = false;
    welcomeScreen.classList.remove('hidden');
});
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !detailModal.classList.contains('hidden')) closeModal();
});
detailModal.addEventListener('click', event => {
    if (event.target === detailModal) closeModal();
});

function openModal(targetId) {
    const data = sectionsData[targetId];
    if (!data) return;
    lastFocusedElement = document.activeElement;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-text').innerText = data.text;
    
    const img1 = document.getElementById('modal-img-1');
    const img2 = document.getElementById('modal-img-2');
    img1.src = data.img1;
    img2.src = data.img2;
    img1.alt = `${data.title}: recuerdo 1`;
    img2.alt = `${data.title}: recuerdo 2`;

    detailModal.classList.remove('hidden');
    detailModal.setAttribute('aria-hidden', 'false');

    // Iniciar Canvas interactivo dentro de la carta
    const canvas = document.getElementById('programCanvas');
    const ctx = canvas.getContext('2d');
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    if (!ctx) return;
    data.animation(canvas, ctx);
    closeModalBtn.focus();
}

function closeModal() {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    detailModal.classList.add('hidden');
    detailModal.setAttribute('aria-hidden', 'true');
    if (lastFocusedElement) lastFocusedElement.focus();
}

// ==========================================
// CANVAS 1: Galaxia Dorada de Fondo (Estilo Video Alex Dev)
// ==========================================
function initGalaxyBackground() {
    const canvas = document.getElementById('galaxyCanvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    galaxyStarted = true;
    let width = 0;
    let height = 0;
    let ratio = 1;
    let particles = [];
    let stars = [];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
        ratio = Math.min(window.devicePixelRatio || 1, 2);
        width = galaxyContainer.clientWidth;
        height = galaxyContainer.clientHeight;
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        const particleCount = Math.min(780, Math.max(300, Math.round(width * height / 1900)));
        particles = Array.from({ length: particleCount }, () => {
            const radius = Math.pow(Math.random(), 0.78);
            const arm = Math.floor(Math.random() * 4);
            return {
                radius,
                angle: arm * Math.PI / 2 + radius * 2.4 + (Math.random() - 0.5) * 1.35,
                arm,
                size: Math.random() * 1.65 + 0.35,
                alpha: Math.random() * 0.7 + 0.2,
                speed: (0.008 + Math.random() * 0.018) * (1 - radius * 0.72),
                phase: Math.random() * Math.PI * 2,
                hue: Math.random() > 0.83 ? '#ff9fbd' : (Math.random() > 0.72 ? '#b9c9ff' : '#ffe4aa')
            };
        });
        stars = Array.from({ length: Math.round(width * height / 1500) }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 1.2 + 0.35,
            phase: Math.random() * Math.PI * 2,
            alpha: Math.random() * 0.5 + 0.15
        }));
        layoutPlanetPositions();
    }
    resize();
    galaxyResizeHandler = resize;
    window.addEventListener('resize', galaxyResizeHandler);

    function drawGalaxy(timestamp = 0) {
        if (!galaxyStarted) return;
        ctx.clearRect(0, 0, width, height);
        const centerX = width / 2;
        const centerY = height * 0.51;
        const elapsed = timestamp / 1000;

        particles.forEach(p => {
            const angle = p.angle + (reducedMotion ? 0 : elapsed * p.speed);
            const radius = p.radius * Math.max(width * 0.52, height * 0.85);
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * 0.43 * Math.sin(angle);
            const twinkle = reducedMotion ? 0.82 : 0.68 + Math.sin(elapsed * 1.7 + p.phase) * 0.32;

            ctx.globalAlpha = p.alpha * twinkle;
            ctx.fillStyle = p.hue;
            ctx.beginPath();
            ctx.arc(x, y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        stars.forEach(star => {
            ctx.globalAlpha = star.alpha * (reducedMotion ? 1 : 0.5 + Math.sin(elapsed * 1.3 + star.phase) * 0.5);
            ctx.fillStyle = '#fff8e8';
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1;

        if (!reducedMotion) galaxyFrameId = requestAnimationFrame(drawGalaxy);
    }
    drawGalaxy();
}

// ==========================================
// PROGRAMAS ANIMADOS (Corazón, Flor, Galaxia)
// ==========================================

// 1. Corazón trazado línea por línea
function drawHeartProgram(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let t = 0;
    const scale = Math.min(canvas.width, canvas.height) / 38;
    const offsetX = canvas.width / 2;
    const offsetY = canvas.height / 2 - 10;

    ctx.strokeStyle = '#ffb2c8';
    ctx.shadowColor = '#ff719f';
    ctx.shadowBlur = 14;
    ctx.lineWidth = 4;
    ctx.beginPath();

    function render() {
        if (t <= 2 * Math.PI) {
            const x = 16 * Math.sin(t) ** 3 * scale + offsetX;
            const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * scale + offsetY;

            if (t === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);

            ctx.stroke();
            t += 0.04;
            animationFrameId = requestAnimationFrame(render);
        }
    }
    render();
}

// 2. Flor abriéndose pétalo por pétalo
function drawFlowerProgram(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let petals = 10;
    let current = 0;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    function render() {
        if (current < petals) {
            const angle = (current * 2 * Math.PI) / petals;
            const x = cx + Math.cos(angle) * 45;
            const y = cy + Math.sin(angle) * 45;

            ctx.fillStyle = current % 2 ? '#ff9fbd' : '#ffd88a';
            ctx.beginPath();
            ctx.arc(x, y, 18, 0, Math.PI * 2);
            ctx.fill();

            current++;
            setTimeout(() => {
                animationFrameId = requestAnimationFrame(render);
            }, 100);
        } else {
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(cx, cy, 22, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    render();
}

// 3. Mini espiral de galaxia dorada
function drawGalaxyProgram(canvas, ctx) {
    let angle = 0;
    ctx.fillStyle = '#151328';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    function render() {
        ctx.fillStyle = 'rgba(21, 19, 40, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < 3; i++) {
            const r = angle * 5;
            const x = canvas.width / 2 + r * Math.cos(angle + (i * Math.PI * 0.6));
            const y = canvas.height / 2 + r * Math.sin(angle + (i * Math.PI * 0.6));

            ctx.fillStyle = i === 1 ? '#ff9fbd' : '#ffd88a';
            ctx.beginPath();
            ctx.arc(x, y, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }

        angle += 0.06;
        if (angle * 5 < canvas.width / 2) {
            animationFrameId = requestAnimationFrame(render);
        }
    }
    render();
}

function burstConfetti() {
    const colors = ['#ff9fbd', '#ffd88a', '#fff5df'];
    for (let i = 0; i < 32; i++) {
        const piece = document.createElement('span');
        piece.className = 'confetti-piece';
        piece.style.left = `${50 + (Math.random() - 0.5) * 30}%`;
        piece.style.background = colors[i % colors.length];
        piece.style.setProperty('--x', `${(Math.random() - 0.5) * 300}px`);
        piece.style.setProperty('--r', `${Math.random() * 650 - 325}deg`);
        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 1500);
    }
}