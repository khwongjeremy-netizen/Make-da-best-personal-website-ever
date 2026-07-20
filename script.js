const header = document.getElementById('interactive_header');
const bg = document.getElementById('interactive_bg');

const movementFactor = 30;

header.addEventListener('mousemove', (e) => {
    const rect = header.getBoundingClientRect();

    const centerX = rect.width / 2; 
    const centerY = rect.height / 2;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const moveX = (mouseX - centerX) / movementFactor;
    const moveY = (mouseY - centerY) / movementFactor;

    bg.style.transform = `translate(${-moveX}px, ${-moveY}px) scale(1.1)`;
});

header.addEventListener('mouseleave', () => {
    bg.style.transform = `translate(0px, 0px) scale(1.1)`;
});