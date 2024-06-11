
document.addEventListener("DOMContentLoaded", () => {
// JavaScript for Opening and Closing the Modal
    let playlistGrid = document.getElementById("playlist-grid");
    var modal = document.getElementById("modal-overlay");
    var span = document.getElementsByClassName("close")[0];
    
    for(let playlists in data){
        const card = document.createElement('div')
        card.classList.add('cardContent')
        card.innerHTML= 
        `
            <section class=" cardContent">
                <img id="cardImg" src=${playlists.cover_art}  alt="${playlists.playlist_name}">
                <h4>${playlists.playlist_name}</h4>
                <h6>${playlists.playlist_creator}</h6>
                <section class="likes"> Likes: <span class="likeCount"></section>
            </section>  
        `
    }






    function openModal(playlist) {
    document.getElementById('playlistName').innerText = playlist.playlist_name;
    document.getElementById('playlistImage').src = playlist.playlist_art;
    document.getElementById('creatorName').innerText = playlist.playlist_creator;
    document.getElementById('songs').innerHTML = `<strong>Lineup:</strong> ${festival.lineup.join(', ')}`;
    modal.style.display = "flex";
    }

})

