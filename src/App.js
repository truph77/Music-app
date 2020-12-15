import { useState } from "react";

import { useState } from "react";

function App() {
  const [songs, setSongs] = useState([
    {
      title: "Somethings just like this",
      artist: "The chainsmokes",
      img_src: "./images/song-1.png",
      src: "./music/somethings-just-like-this.mp3",
    },
  ]);
  return <div className="App">Components here!!!</div>;
}

export default App;
