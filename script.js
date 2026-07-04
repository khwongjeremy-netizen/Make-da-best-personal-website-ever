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

// Smooth Book Preview Cross-Fader
let imageTimeout; 

function changeBookImage(imagePath) {
    const previewImage = document.getElementById('book-preview');
    
    if (previewImage) {
        // Stop if the hovered item is already the active image displayed
        if (previewImage.src.includes(imagePath)) return;

        // Clear any previous queued transitions if the user hovers quickly
        clearTimeout(imageTimeout);

        // 1. Drop the visibility layer down smoothly
        previewImage.style.opacity = '0';

        // 2. Wait 200ms for it to turn invisible, then flip the file path and fade back up
        imageTimeout = setTimeout(() => {
            previewImage.src = imagePath;
            previewImage.style.opacity = '1';
        }, 200);
    }
}