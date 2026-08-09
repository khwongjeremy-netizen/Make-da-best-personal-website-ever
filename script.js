
const contentData = {
    intro: "<h3>Intro</h3><p>Hi, I'm Jeremy, an aspring engineer, posessing skills, in software development, visual editing & football(soccer). With a passion for helping others, creating combined with creativity and problem solving. My motivations stem from a strong role model that thought alot like how I do now. My grandfather, an early inspiration fostered that core mindset and that I follow every day. He was a mechanic and an at-home inventor creating tools for our household that made life easier. From shadowing his projects he passed down to me his tech for solving problems creatively and I traansitioned that into my current skills and profile, in tech, Visual effects, Entrepeneurship and Football. </p>",
    books: "<h3>Books</h3><ul><li>Alex Rider</li><li>Apple In China</li><li>Guns Germs and Steel</li><li>Outliers</li><li>Refugee</li></ul>",
    shows: `<h3>Shows</h3><ul><li>Blue Eyed Samurai</li><li>Breaking bad</li><li>Trollhunter</li><li>Unstable</li></ul>`,
    anime: `<h3>Animes</h3><ul><li>Bleach</li><li>Attack On Titan</li><li>Vinland Saga</li><li>Death Note</li><li>Chainsawman</li></ul>`,
    music: `<h3>Music</h3><ul><li>Apple Cider by Beabadoobee</li><li>just a dream by yel</li><li>lost cause by Isabella Peng</li><li>Sweet Boy by Malcolm Todd</li><li>twenytyfour by overtonight</li></ul>`,
    likes: `<h3>Likes</h3><ul><li>Coding</li><li>Football</li><li>Photography</li><li>Business</li><li>STEM</li></ul>`,
    story: `<a href="story.html">story</a>`
}
function openDrop(category, type) {
    const master = document.getElementById(`${type}-dropdown`);
    const inner = document.getElementById(`${type}-inner-content`);

    inner.innerHTML = contentData[category] || "";
    
    // Kill any active transitions running right now
    gsap.killTweensOf(master);
    
    gsap.to(master, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
    });
}

// FIX: Removed category requirement so it closes immediately on mouse leave
function closeDrop(category) {
    const master = document.getElementById(`${category}-dropdown`);
    
    gsap.killTweensOf(master);
    
    gsap.to(master, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
            document.getElementById(`${category}-inner-content`).innerHTML = "";
        }
    });
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
                duraiton: 0.8,
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
            duraiton:0.3,
            overtwrite: "auto"
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
            duraiton:0.3,
            overtwrite: "auto"
        });
        gsap.to(paragraphText, {
            color: "#f1f5f9",
            duration: 0.3,
            overwrite: "auto"
        });
    }
    });
}
const track = document.getElementById("overall-projects");
const cards= gsap.utils.toArray(".project-card");

//Gets teh scroll distance needed???
function getScrollAmount() {
 return -(track.scrollWidth - window.innerWidth  +  80);

}
gsap.set(cards, {
    transformPerespective: 1000,
    transformOrigin: "50% 50% -350px",
    backfaceVisibility: "hidden"
});
const horizontalTween = gsap.to(track, {
    x: getScrollAmount,
    ease: "none", 
    scrollTrigger: {
        trigger: track.parentElement,
        start: "center center",
        end: () => `+=${track.scrollWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,

    }
});
cards.forEach((card) => {
    gsap.fromTo(
        card,
        {
            rotateY: -45,
            rotateZ: -8,
            opacity: 0.3,
            scale: 0.8
        },
        {
            rotateY: 45,
            rotateZ: 8,
            opacity: 0.3,
            scale: 0.8,
            ease: "sine.inOut",
            scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalTween,
                start: "left 100%",
                end: "right 0%",
                scrub: true, 
                onUpdate: (self) => {
                    const progress = self.progress;
                    const centerFactor = 1 - Math.abs(progress * Math.PI);
                    gsap.set(card, {
                        scale: 0.82 + centerFactor * 0.28,
                        opacity: 0.3 + centerFactor * 0.7,
                        z: centerFactor * 120
                    });
                }
            }
        }
    );
});