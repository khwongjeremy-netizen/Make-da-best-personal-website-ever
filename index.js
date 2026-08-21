const contentData = {
    intro: "<h3 class='font-bold'>Navigate</h3><ul class='mt-4 flex flex-col list-disc list-inside text-left'><li><a href='story.html'>Story</a></li><li><a href='projects.html'>Projects</a></li><li><a href='contacts.html'>Contacts</a></li>",
    books: "<h3 class='font-bold'>Books</h3><ul class='mt-4 flex flex-col list-disc list-inside text-left' ><li>Alex Rider</li><li>Apple In China</li><li>Guns Germs and Steel</li><li>Outliers</li><li>Refugee</li></ul>",
    shows: `<h3 class='font-bold'>Shows</h3><ul class='mt-4 flex flex-col list-disc list-inside text-left'><li>Blue Eyed Samurai</li><li>Breaking bad</li><li>Trollhunter</li><li>Unstable</li></ul>`,
    anime: `<h3 class='font-bold'>Animes</h3><ul class='mt-4 flex flex-col list-disc list-inside text-left'><li>Bleach</li><li>Attack On Titan</li><li>Vinland Saga</li><li>Death Note</li><li>Chainsawman</li></ul>`,
    music: `<h3 class='font-bold'>Music</h3><ul class='mt-4 flex flex-col list-disc list-inisde'><li>Apple Cider by Beabadoobee</li><li>just a dream by yel</li><li>lost cause by Isabella Peng</li><li>Sweet Boy by Malcolm Todd</li><li>twenytyfour by overtonight</li></ul>`,
    likes: `<h3 class='font-bold'>Likes</h3><ul class='mt-4 flex flex-col list-disc inside-list text-left'><li>Coding</li><li>Football</li><li>Photography</li><li>Business</li><li>STEM</li></ul>`
}
function openDrop(category, type) {
    const master = document.getElementById(`${type}-dropdown`);
    const inner = document.getElementById(`${type}-inner-content`);

    inner.innerHTML = contentData[category] || "";
    
    gsap.killTweensOf(master);
    
    gsap.to(master, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
    });
}

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