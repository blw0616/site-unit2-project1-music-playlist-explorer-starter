document.addEventListener("DOMContentLoaded", () => {
    // JavaScript for Opening and Closing the Modal
    let playlistGrid = document.getElementById("playlist-grid");
    var modal = document.getElementById("modal-overlay");
    var span = document.getElementsByClassName("close")[0];

    // Assuming 'data' is an array of playlist objects
    for (let playlist of data.playlists) {
        const card = document.createElement('div');
        card.classList.add('cardContent');
        card.innerHTML = `
            <section class ="insideCard">
                <img id="cardImg" src="${playlist.playlist_art}" alt="${playlist.playlist_name}">
                
                <section class ="insideCard1">
                    <h4>${playlist.playlist_name}</h4>
                    <h4>By: ${playlist.playlist_creator}</h4>
                    <section class="likes"><i class="em em-black_heart" aria-role="presentation" aria-label="BLACK HEART"></i> <span id="likeCount"><p>0</p></span></section>
                </section>
            </section>  
        `;

        playlistGrid.appendChild(card);
        
        card.addEventListener('click', (event) => {
            if (!event.target.closest('.likes')) {
                openModal(playlist);
            }
        });

        
        const emoji = card.querySelector('.likes i');
        emoji.style.cursor= 'pointer';
        const count = card.querySelector('#likeCount');
        emoji.addEventListener('click', (event) => {
            event.stopPropagation();
            if (emoji.classList.contains('em-black_heart')) {
                emoji.classList.remove('em-black_heart');
                emoji.classList.add('em-heartpulse');
                count.textContent = parseInt(count.textContent) + 1;
            } else {
                emoji.classList.remove('em-heartpulse');
                emoji.classList.add('em-black_heart');
                count.textContent = parseInt(count.textContent) - 1;
            }
                
        });
        const songs1 = document.getElementById('songs');
        shuffleButton.addEventListener('click', (event) => {
            const songey = Array.from(songs.children);
            songey.sort(() => Math.random() - 0.5);
            songs1.innerHTML = "";
            songey.forEach((songey) => songs1.appendChild(songey));
        });
    }

    span.addEventListener('click', () => {
        modal.style.display = "none";
    });

    function openModal(playlist) {
        // change the way this is done. do ".add" instead
        document.getElementById('modal-content').style.display = "block";
        document.getElementById('playlistName').innerText = playlist.playlist_name;
        document.getElementById('playlistImage').src = playlist.playlist_art;
        document.getElementById('creatorName').innerText = playlist.playlist_creator;
        document.getElementById('songs').innerHTML = playlist.songs.map(song => `
            <div class="SDContainer">
                <div class="songDisplay">
                    <section class="songInfo">
                        <img class="songPic" src="${song.cover_art}" alt="${song.name}">
                        <div class="songWords">
                            <h4>${song.title}</h4>
                            <p>${song.artist}</p>
                            <p>${song.album}</p>
                        </div>
                    </section>
                    <section class="songTime">${song.duration}</section>
                </div>
            </div>
        `).join('');
        modal.style.display = "block";
    }

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    document.getElementById('featuredB').addEventListener('click', () => {
        window.location.href = 'featured.html'; 
    });
});
