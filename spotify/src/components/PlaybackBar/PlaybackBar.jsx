import React from "react";

// CSS
import "./playbackBar.css";

// ICONS
const prevIcon = <i class="fas fa-step-backward"></i>;
const playIcon = <i class="fas fa-play"></i>;
const pauseIcon = <i class="fas fa-pause"></i>;
const nextIcon = <i class="fas fa-step-forward"></i>;

// MOCKED DATA
let songData = {
  description: "Listen to the best songs from the 60's",
  image_url: "https://i.scdn.co/image/ab67706f000000035337e18dc6803780d806efba",
  name: "Best of 60's",
};

export default function PlayBackBar() {
  // States
  let [play, setPlay] = React.useState(true);

  //   handles
  const handlePlayClick = () => {
    setPlay(false);
  };

  let { name, description, image_url } = songData;
  return (
    <div className="playback-bar-container">
      {/* LEFT SIDE */}
      <div className="playback-bar-left">
        <img src={image_url} className="playback-bar-left-img" />
        <div className="playback-bar-left-div">
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
      </div>
      {/* CENTER */}
      <div className="playback-bar-center">
        <div className="playback-bar-center-btns">
          {/* PREVIOUS SONG */}
          <button>{prevIcon}</button>
          {/* PLAY\PAUSE */}
          <button onClick={handlePlayClick}>
            {play ? playIcon : pauseIcon}
          </button>
          {/* NEXT SONG */}
          <button>{nextIcon}</button>
        </div>
      </div>
    </div>
  );
}
