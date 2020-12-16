import { useState, useEffect } from "react";
import Player from "./Components/Player";

function App() {
  const [songs] = useState([
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

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
