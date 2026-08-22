const contentData = {
    intro: `<h3 class='font-bold text-4xl hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline hover:text-purple-400 justify-center'>Navigate</h3>
                <div id="line-navigate" class ="mt-4 w-full border-t border-0 justify-center transform border-blue-900 z-0"></div>
                <ul class='mt-4 flex flex-col list-disc list-inside text-left'>
                    <li class='hover:text-purple-400 hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline'>
                        <a href='story.html'>Story</a>
                    </li>
                    <li class='hover:text-purple-400 hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline'>
                        <a href='projects.html'>Projects</a>
                    </li>
                    <li class='hover:text-purple-400 hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline'>
                        <a href='contacts.html'>Contacts</a>
                    </li>
                </ul>`,
    books: `<h3 class='font-bold text-4xl hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline hover:text-cyan-400 justify-center'>Books</h3>
            <div id="line-books" class='mt-4 w-full border-t border-0 justify-center transform border-blue-900 z-0"></div>
            <ul class='mt-4 flex flex-col list-disc list-inside text-left' >
                <li class='hover:text-cyan-400 hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline'>Alex Rider</li>
                <li class='hover:text-cyan-400 hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline'>Apple In China</li>
                <li class='hover:text-cyan-400 hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline'>Guns Germs and Steel</li>
                <li class='hover:text-cyan-400 hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline'>Outliers</li>
                <li class='hover:text-cyan-400 hover:scale-205 transition-all ease-in-out duration-500 no-underline hover:underline'>Refugee</li>
            </ul>`,
    shows: `<h3 class='font-bold text-4xl hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline hover:text-cyan-400 justify-center'>Shows</h3>
            <div id='line-shows' class='mt-4 w-full border-t border-0 justify-center transform border-blue-900 z-0'></div>
            <ul class='mt-4 flex flex-col list-disc list-inside text-left'>
                <li class='hover:text-cyan-400 hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline'>Blue Eyed Samurai</li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>Breaking bad</li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>Trollhunter</li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>Unstable</li>
            </ul>`,
    anime: `<h3 class='font-bold text-4xl hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline hover:text-cyan-400 justify-center'>Animes</h3>
            <div id='line-animes' class='mt-4 w-full border-t border-0 justify-center transform border-blue-900 z-0'></div>
            <ul class='mt-4 flex flex-col list-disc list-inside text-left'>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>Bleach</li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>Attack On Titan</li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>Vinland Saga</li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>Death Note</li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>Chainsawman</li>
            </ul>`,
    music: `<h3 class='font-bold text-4xl hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline hover:text-cyan-400 justify-center'>Music</h3>
            <div id='line-music' class='mt-4 w-full border-t border-0 justify-center transform border-blue-900 z-0'></div>
            <ul class='mt-4 flex flex-col list-disc list-inside'>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>Apple Cider by Beabadoobee</li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>just a dream by yel</li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>lost cause by Isabella Peng</li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>Sweet Boy by Malcolm Todd</li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>twenytyfour by overtonight</li>
            </ul>`,
    likes: `<h3 class='font-bold text-4xl hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline hover:text-cyan-400 justify-center'>Likes</h3>
            <div id='line-music' class='mt-4 w-full border-t border-0 justify-center transform border-blue-900 z-0'></div>
            <ul class='mt-4 flex flex-col list-disc list-inside text-left'>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>Coding</li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>Football</li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>Photography</li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>Business</li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'>STEM</li>
            </ul>`
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