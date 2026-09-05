gsap.registerPlugin(ScrollTrigger);

window.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.load-in');

    boxes.forEach((box) => {
        gsap.fromTo(box,
            {
                opacity: 0,
                y: 50

            },
            {
                opacity: 1, 
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: box, 
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                onComplete: () => {
                    initHoverEffects(box);
                } 
            }
        )
    })
})
function initHoverEffects(card) {
    const titleText =card.querySelector("h3");
    const paragraphText = card.querySelector("p");

    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            scale:1.05, 
            duration: 0.3, 
            ease: "power1.out",
            overwrite: "auto",
            color: "#60a5fa",
        });
    if (titleText && paragraphText) {
        gsap.to(titleText, {
            color: "#60a5fa",
            duration:0.3,
            overwrite: "auto"
        });
        gsap.to(paragraphText, {
            color: "#60a5fa",
            duration: 0.3,
            overwrite: "auto"
        });
    }
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            scale: 1, 
            duration: 0.3, 
            ease: "power1.out",
            overwrite: "auto",
            color: "#f1f5f9"
        });
        if (titleText && paragraphText) {
        gsap.to(titleText, {
            color: "#f1f5f9",
            duration:0.3,
            overwrite: "auto"
        });
        gsap.to(paragraphText, {
            color: "#f1f5f9",
            duration: 0.3,
            overwrite: "auto"
        });
    }
    });
}
document.querySelectorAll('.hoverable-text').forEach(el => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map(word => `<span class="inline-block hover:text-blue-400 hover:scale-105 hover:text-purple-400 transtion-all duration-300 cursor-d">${word}</span>`).join(' ');
})