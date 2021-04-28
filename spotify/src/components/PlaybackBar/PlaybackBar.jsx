import React from "react";

// CSS
import "./playbackBar.css";

// Components
import ProgressBar from "../ProgressBar/ProgressBar";

// ICONS
import volumeIcon from "../../assets/volume.png";
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
  const [progress, setProgress] = React.useState(0);
  let total = 300;

  //   handles
  const handlePlayClick = () => {
    setPlay(!play);
    console.log("PROGRESS>> ", progress);
    if (progress !== total) setProgress(progress + 100);
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
        {/* PROGRESS BAR */}
        <div className="playback-bar-center-progress-bar">
          <p>{progress}</p>
          <ProgressBar total={300} progress={progress} />
          <p>{total}</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="playback-bar-right">
        <img src={volumeIcon} alt="volume icon" />
        <input type="range" className="playback-bar-right-volume" />
      </div>
    </div>
  );
}
