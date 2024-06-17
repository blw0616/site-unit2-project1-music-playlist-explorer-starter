document.addEventListener('DOMContentLoaded', () =>{
    const playlist = data.playlists;
    const randomPlaylist = playlist[Math.floor(Math.random() * playlist.length)]
     // change the way this is done. do ".add" instead
     document.getElementById('modal-content').style.display = "block";
     document.getElementById('playlistName').innerText = randomPlaylist.playlist_name;
     document.getElementById('playlistImage').src = randomPlaylist.playlist_art;
     document.getElementById('creatorName').innerText = randomPlaylist.playlist_creator;
     document.getElementById('songs').innerHTML = randomPlaylist.songs.map(song => `
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

    const songs1 = document.getElementById('songs');
        shuffleButton.addEventListener('click', (event) => {
            const songey = Array.from(songs.children);
            songey.sort(() => Math.random() - 0.5);
            songs1.innerHTML = "";
            songey.forEach((songey) => songs1.appendChild(songey));
        });

    document.getElementById('featuredB').addEventListener('click', () => {
        window.location.href = 'index.html'; 
    });
    
});
