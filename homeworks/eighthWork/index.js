import {playList} from "./script/playlist.js"

const playlistElement = document.getElementById("playlist");

playList.forEach(function(song, index) {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${song.author} - ${song.song}`;
    if (index % 2 === 0) {
      listItem.classList.add("bgc-of-list");
  }
    playlistElement.appendChild(listItem);
});