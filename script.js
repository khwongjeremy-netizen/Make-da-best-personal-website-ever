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

    const targetHeight = content.scrollHeight + 16;

    dropdown.style.height = targetHeight + 'px';
    content.classList.remove('opacity-0');
    content.classList.add('opacity-100');
}

function closeLikes() {
    const dropdown = document.getElementById('likes-dropdown');
    const content = document.getElementById('likes-content');


    dropdown.style.height = '0px';
    content.classList.remove('opacity-100');
    content.classList.add('opacity-0');

}