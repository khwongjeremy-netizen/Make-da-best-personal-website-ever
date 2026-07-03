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