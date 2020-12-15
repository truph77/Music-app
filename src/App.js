import { useState } from "react";
import Player from "./Components/Player";

function App() {
  const [songs, setSongs] = useState([
    {
      title: "Somethings just like this",
      artist: "The-Chainsmokers-ft-Coldplay",
      img_src: "./images/song-1.png",
      src: "./music/something-just-like-this.mp3",
    },
    {
      title: "Memory",
      artist: "The-Chainsmokers-ft-Daya",
      img_src: "./images/song-2.png",
      src: "./music/Dont-let-me-down.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
      <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} />
    </div>
  );
}

export default App;
