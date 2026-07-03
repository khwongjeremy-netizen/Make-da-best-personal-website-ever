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

// Likes Taste -------------------->
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

// Shows Taste -------------------->
function openShows() {
    const dropdown= document.getElementById('shows-dropdown');
    const content = document.getElementById('shows-content');

    const targetHeight = content.scrollHeight + 16;

    dropdown.style.height = targetHeight + 'px';
    content.classList.remove('opacity-0');
    content.classList.add('opacity-100');
}
function closeShows() {
    const dropdown = document.getElementById('shows-dropdown');
    const content = document.getElementById('shows-content');

    dropdown.style.height= '0px'
    content.classList.remove('opacity-100');
    content.classList.add('opaciy-0')
}

// Books Taste -------------------->
function openBooks() {
    const dropdown= document.getElementById('books-dropdown');
    const content = document.getElementById('books-content');

    const targetHeight = content.scrollHeight + 16;

    dropdown.style.height = targetHeight + 'px';
    content.classList.remove('opacity-0');
    content.classList.add('opacity-100');
}
function closeBooks() {
    const dropdown = document.getElementById('books-dropdown');
    const content = document.getElementById('books-content');

    dropdown.style.height = '0px'
    content.classList.remove('opacity-100');
    content.classList.add('opacity-0')
}

// Anime Taste -------------------->
function openAnime() {
    const dropdown= document.getElementById('anime-dropdown');
    const content = document.getElementById('anime-content');

    const targetHeight = content.scrollHeight + 16;

    dropdown.style.height = targetHeight + 'px';
    content.classList.remove('opacity-0');
    content.classList.add('opacity-100');
}
function closeAnime() {
    const dropdown = document.getElementById('anime-dropdown');
    const content = document.getElementById('anime-content');

    dropdown.style.height = '0px'
    content.classList.remove('opacity-100');
    content.classList.add('opacity-0')
}

// Drama Taste -------------------->
function openDrama() {
    const dropdown= document.getElementById('drama-dropdown');
    const content = document.getElementById('drama-content');

    const targetHeight = content.scrollHeight + 16;

    dropdown.style.height = targetHeight + 'px';
    content.classList.remove('opacity-0');
    content.classList.add('opacity-100');
}

function closeDrama() {
    const dropdown = document.getElementById('drama-dropdown');
    const content = document.getElementById('drama-content');

    dropdown.style.height= '0px'
    content.classList.remove('opacity-100');
    content.cassList.add('opaciy-0')
}

// Music Taste -------------------->
function openSong() {
    const dropdown= document.getElementById('song-dropdown');
    const content = document.getElementById('song-content');

    const targetHeight = content.scrollHeight + 16;

    dropdown.style.height = targetHeight + 'px';
    content.classList.remove('opacity-0');
    content.classList.add('opacity-100');
}
function closeSong() {
    const dropdown = document.getElementById('song-dropdown');
    const content = document.getElementById('song-content');

    dropdown.style.height= '0px'
    content.classList.remove('opacity-100');
    content.classList.add('opacity-0')
}