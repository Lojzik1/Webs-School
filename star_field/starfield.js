const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 2000;
const speed = 10;

function createStars() {
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: (Math.random() * 2 - 1) * canvas.width,
            y: (Math.random() * 2 - 1) * canvas.height,
            z: Math.random() * canvas.width,
            size: Math.random() * 1 + 0.5, 
            hasGlow: Math.random() < 0.30
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        const k = canvas.width / star.z;
        const x = star.x * k + canvas.width / 2;
        const y = star.y * k + canvas.height / 2;
        const size = star.size * k;

        if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) return;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);

        if (star.hasGlow) {
            ctx.shadowBlur = 20;
            ctx.shadowColor = 'white';
        } else {
            ctx.shadowBlur = 0;
        }

        ctx.fillStyle = "white";
        ctx.fill();
    });
}

function updateStars() {
    stars.forEach(star => {
        star.z -= speed;

        if (star.z <= 0) {
            star.x = (Math.random() * 2 - 1) * canvas.width;
            star.y = (Math.random() * 2 - 1) * canvas.height;
            star.z = canvas.width;
            star.hasGlow = Math.random() < 0.05;
        }
    });
}

function animate() {
    drawStars();
    updateStars();
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars.length = 0;
    createStars();
});

createStars();
animate();
