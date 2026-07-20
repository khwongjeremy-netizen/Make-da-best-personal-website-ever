

// Global Dropdown Handlers
function openDrop(category) {
    const lowerCategory = category.toLowerCase();
    const letter = document.getElementById(`${lowerCategory}-dropdown`);
    const content = document.getElementById(`${lowerCategory}-content`);

    if (letter && content) {
        const targetHeight = content.scrollHeight + 16;
        content.style.height = targetHeight + 'px';
        content.classList.remove('opacity-0');
        content.classList.add('opacity-100');
    }
}

function closeDrop(category) {
    const lowerCategory = category.toLowerCase();
    const letter = document.getElementById(`${lowerCategory}-dropdown`);
    const content = document.getElementById(`${lowerCategory}-content`);

    if (letter && content) {
        const targetHeight = content.scrollHeight - 16;
        content.style.height = '0px';
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