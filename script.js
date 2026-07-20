
const contentData = {
    intro: "<h3>Intro</h3><p>Hi, I'm Jeremy, an aspring engineer, posessing skills, in software development, visual editing & football(soccer). With a passion for helping others, creating combined with creativity and problem solving. My motivations stem from a strong role model that thought alot like how I do now. My grandfather, an early inspiration fostered that core mindset and that I follow every day. He was a mechanic and an at-home inventor creating tools for our household that made life easier. From shadowing his projects he passed down to me his tech for solving problems creatively and I traansitioned that into my current skills and profile, in tech, Visual effects, Entrepeneurship and Football. </p>",
    books: "<h3>Books</h3><ul><li>Alex Rider</li><li>Apple In China</li><li>Guns Germs and Steel</li><li>Outliers</li><li>Refugee</li></ul>",
    shows: "",
    anime: "",
    music: "",
    likes: "",

}
function openDrop(category) {
    const master = document.getElementById('general-dropdown');
    const inner = document.getElementById('dropdown-inner-content');

    inner.innerHTML = contentData[category] || "";
    gsap.to(master, {
        height: 'auto',
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
    });
}
function closeDrop(category) {
    const master = document.getElementById('general-dropdown');
    const inner = document.getElementById('dropdown-inner-content');

    inner.innerHTML = contentData[category] || "";
    gsap.to(master, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
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