// Toggle Profile Quote Function
function toggleQuote() {
    const quoteContainer = document.getElementById('revealed-quote');

    if (quoteContainer.classList.contains('max-h-0')) {
        quoteContainer.classList.remove('max-h-0', 'opacity-0');
        quoteContainer.classList.add('max-h-96', 'opacity-100');
    } else {
        quoteContainer.classList.remove('max-h-96', 'opacity-100');
        quoteContainer.classList.add('max-h-0', 'opacity-0');
    }
}

// Global Dropdown Handlers
function openDrop(category) {
    const lowerCategory = category.toLowerCase();
    const dropdown = document.getElementById(`${lowerCategory}-dropdown`);
    const content = document.getElementById(`${lowerCategory}-content`);

    if (dropdown && content) {
        const targetHeight = content.scrollHeight + 16;
        dropdown.style.height = targetHeight + 'px';
        content.classList.remove('opacity-0');
        content.classList.add('opacity-100');
    }
}

function closeDrop(category) {
    const lowerCategory = category.toLowerCase();
    const dropdown = document.getElementById(`${lowerCategory}-dropdown`);
    const content = document.getElementById(`${lowerCategory}-content`);

    if (dropdown && content) {
        dropdown.style.height = '0px';
        content.classList.remove('opacity-100');
        content.classList.add('opacity-0');
    }
}
let imageTimeout;

function changeImage(image, item) {
    const preview = document.getElementById(`${image}-preview`);

    if (preview) {

        if (preview.src.includes(item)) return;

        clearTimeout(imageTimeout);

        preview.style.opacity = '0';

        imageTimeout = setTimeout(() => {
            preview.src = item;
            preview.style.opacity = '1';
        }, 200);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const revealTargets = document.querySelectorAll(".scroll-reveal");

    if (revealTargets.length === 0) return;

    const observerOptions = {
        root: null, 
        threshold: 0.15,
        rootMargin: "0px"
    };

    const scrollObserver = new IntersectionObserver((entries, oberver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-y-16", "scale-95");

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealTargets.forEach(target => scrollObserver.observe(target));
})
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElemenbtByID('fluid-canvas');

    if (!canvas) return;

    window.WebGLFLuid(canvas, {
        IMMEDIATE: true, 
        TRIGGER: 'hover', 
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        CAPTURE_INPUTS: true,
        DENSITY_DISSIPATION: 1.9,
        VELOCITY_DISSIPATION: 0.98,
        PRESSURE: 0.8,
        BACK_COLOR: { r: 8, g: 8, b:10
        },
        BACKGROUND_TEXTURE: ""
    });
});