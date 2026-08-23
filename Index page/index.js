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
                <li class='hover:text-cyan-400 hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://en.wikipedia.org/wiki/Alex_Rider'>Alex Ride</a></li>
                <li class='hover:text-cyan-400 hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://en.wikipedia.org/wiki/Apple_in_China'>Apple In China</a></li>
                <li class='hover:text-cyan-400 hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://en.wikipedia.org/wiki/Guns,_Germs,_and_Steel'>Guns Germs and Steel</a></li>
                <li class='hover:text-cyan-400 hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://en.wikipedia.org/wiki/Outliers_(book)'>Outliers</a></li>
                <li class='hover:text-cyan-400 hover:scale-205 transition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://en.wikipedia.org/wiki/Refugee_(Gratz_novel)'>Refugee</a></li>
            </ul>`,
    shows: `<h3 class='font-bold text-4xl hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline hover:text-cyan-400 justify-center'>Shows</h3>
            <div id='line-shows' class='mt-4 w-full border-t border-0 justify-center transform border-blue-900 z-0'></div>
            <ul class='mt-4 flex flex-col list-disc list-inside text-left'>
                <li class='hover:text-cyan-400 hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://en.wikipedia.org/wiki/Blue_Eye_Samurai'>Blue Eyed Samurai</a></li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://en.wikipedia.org/wiki/Breaking_Bad'>Breaking bad</a></li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://en.wikipedia.org/wiki/Trollhunters:_Tales_of_Arcadia'>Trollhunters</a></li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://unstable-universe-mc.fandom.com/wiki/Unstable_Universe_Wiki'>Unstable</a></li>
            </ul>`,
    anime: `<h3 class='font-bold text-4xl hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline hover:text-cyan-400 justify-center'>Animes</h3>
            <div id='line-animes' class='mt-4 w-full border-t border-0 justify-center transform border-blue-900 z-0'></div>
            <ul class='mt-4 flex flex-col list-disc list-inside text-left'>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://en.wikipedia.org/wiki/Bleach_(TV_series)'>Bleach</a></li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://en.wikipedia.org/wiki/Attack_on_Titan'>Attack On Titan</a></li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://en.wikipedia.org/wiki/Vinland_Saga_(manga)'>Vinland Saga</a></li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://en.wikipedia.org/wiki/Death_Note'>Death Note</a></li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://en.wikipedia.org/wiki/Chainsaw_Man_(TV_series)'>Chainsawman</a></li>
            </ul>`,
    music: `<h3 class='font-bold text-4xl hover:scale-105 transition-all ease-in-out duration-500 no-underline hover:underline hover:text-cyan-400 justify-center'>Music</h3>
            <div id='line-music' class='mt-4 w-full border-t border-0 justify-center transform border-blue-900 z-0'></div>
            <ul class='mt-4 flex flex-col list-disc list-inside'>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://open.spotify.com/track/5xA5MggKc3aQxuOzNzPUWB'>Apple Cider by Beabadoobee</a></li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://open.spotify.com/album/6DJHxnUw0stWUtjKUg9xpy'>just a dream by yel</a></li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://open.spotify.com/track/5OxODvR3LmMDN1GeKUfzCT'>lost cause by Isabella Peng</a></li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://open.spotify.com/track/0eFM8B5vQLDVQVZhZalAT6'>Sweet Boy by Malcolm Todd</a></li>
                <li class='hover:text-cyan-400 hover:scale-105 trasnition-all ease-in-out duration-500 no-underline hover:underline'><a href='https://open.spotify.com/track/7KVvGiIpMTWQWVsNiymnHS'>twenytyfour by overtonight</a></li>
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