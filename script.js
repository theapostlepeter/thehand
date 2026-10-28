function extractVideoId(url) {
    // Nettoie et extrait exactement les 11 caractères de l'ID YouTube
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regExp);

    return match ? match[1] : null;
}

function playVideo() {
    const urlInput = document.getElementById('videoUrl').value.trim();
    const playerBox = document.getElementById('playerBox');
    const videoId = extractVideoId(urlInput);

    if (videoId) {
        playerBox.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    } else {
        alert('Invalid YouTube link. Please check the URL you pasted.');
    }
}