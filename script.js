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

function openLikes() {
    const dropdown = document.getElementById('likes-dropdown');
    const content = document.getElementById('likes-content');
    
    // 1. Calculate exactly how tall the content inside the list is in real-time
    const targetHeight = content.scrollHeight + 16; // Adds a small pixel buffer for the spacing
    
    // 2. Directly set the container's height and fade the text in
    dropdown.style.height = targetHeight + 'px';
    content.classList.remove('opacity-0');
    content.classList.add('opacity-100');
}

function closeLikes() {
    const dropdown = document.getElementById('likes-dropdown');
    const content = document.getElementById('likes-content');
    
    // Collapse the box back to 0 pixels and fade the text out
    dropdown.style.height = '0px';
    content.classList.remove('opacity-100');
    content.classList.add('opacity-0');
}