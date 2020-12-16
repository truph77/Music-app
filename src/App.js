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
    {
      title: "Anh không tha thứ",
      artist: "Đình Dũng",
      img_src: "./images/song-2.png",
      src: "./music/AnhKhongThaThu.mp3",
    },
    {
      title: "Thế thái",
      artist: "Hương Ly",
      img_src: "./images/song-3.png",
      src: "./music/TheThai.mp3",
    },
    {
      title: "Tuyết yêu thương",
      artist: "Young Uno",
      img_src: "./images/song-1.png",
      src: "./music/TuyetYeuThuong.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
