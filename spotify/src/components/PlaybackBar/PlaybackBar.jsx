import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

// CSS
import "./playbackBar.css";

// Components
import ProgressBar from "../ProgressBar/ProgressBar";

// Context
import {
  SongNameContext,
  AlbumNameContext,
  PlaylistImgContext,
} from "../../App";

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

export default function PlayBackBar({ songName, albumName, playlistImg }) {
  // States
  let [play, setPlay] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  let total = 300;

  //   handles
  const handlePlayClick = () => {
    setPlay(!play);
    console.log("PROGRESS>> ", progress);
    if (progress !== total) setProgress(progress + 100);
  };

  // Context Hooks
  const songName_Context = useContext(SongNameContext);
  const albumName_Context = useContext(AlbumNameContext);
  const playlistImg_Context = useContext(PlaylistImgContext);
  console.log(
    "In playback bar ",
    songName_Context,
    albumName_Context,
    playlistImg_Context
  );

  return (
    <div className="playback-bar-container">
      {/* LEFT SIDE */}
      <div className="playback-bar-left">
        {songName_Context.songName ? (
          <img
            src={playlistImg_Context.playlistImg}
            className="playback-bar-left-img"
          />
        ) : (
          ""
        )}
        <div className="playback-bar-left-div">
          <h5>{songName_Context.songName}</h5>
          <p>{albumName_Context.albumName}</p>
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