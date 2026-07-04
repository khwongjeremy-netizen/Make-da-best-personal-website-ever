function toggleQuote() {
    const quoteContainer = document.getElementById('revealed-quote');

    // Check if the quote is currently hidden
    if(quoteContainer.classList.contains('max-h-0')){
        //Reveal it 
        quoteContainer.classList.remove('max-h-0', 'opacity-0');
        quoteContainer.classList.add('max-h-96', 'opacity-100');
    } else {
        // Hide it
        quoteContainer.classList.remove('max-h-96', 'opacity-100');
        quoteContainer.classList.add('max-h-0' , 'opacity-0');
    }
}

// Dropdown command

function openDrop(category) {
    const dropdown = document.getElementById(`${category}-dropdown`);
    const content = document.getElementById(`${category}-content`);

    if (dropdown && content){
        const targetHeight = content.scrollHeight + 16;
        dropdown.style.height = targetHeight + 'px';
        content.classList.remove('opacity-0');
        content.classList.add('opacity-100');

    }
}

function closeDrop(category) {
    const dropdown = document.getElementById(`${category}-dropdown`);
    const content = document.getElementById(`${category}-content`);

    if (dropdown && content) {
        dropdown.style.height = '0px';
        content.classList.remove('opacity-100');
        content.classList.add('opacity-0');
    }
}
let imageTimeout;

function changeImage(image) {
    const preview = document.getElementById(`${image}-preview`);

    if (preview) {

        if (preview.scroll.includes(image)) return;

        clearTimeout(imageTimeout);

        preview.style.opacity = '0';

        imageTimeout = setTimeout(() => {
            preview.src = image;
            preview.style.opacity = '1';
        }, 200);
    }
}

