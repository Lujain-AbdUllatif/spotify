import React, { useEffect } from "react";

// CSS
import "./playbackBar.css";

// Components
import ProgressBar from "../ProgressBar/ProgressBar";
import SoundTrack from "../SoundTrack/SoundTrack";

// Context
import AppContext from "../../contextCustomHooks";

// Assets Functions
import { sec2min } from "../../assetesFunctions";

// ICONS
import volumeIcon from "../../assets/volume.png";
const prevIcon = <i className="fas fa-step-backward"></i>;
const playIcon = <i className="fas fa-play"></i>;
const pauseIcon = <i className="fas fa-pause"></i>;
const nextIcon = <i className="fas fa-step-forward"></i>;

export default function PlayBackBar() {
  // States
  const [btnDisable, setBtnDisable] = React.useState(true);

  // Context Hooks
  const {
    songName_Context,
    albumName_Context,
    playlistImg_Context,
    play_Context,
    songAudioElement_Context,
    progressBar_Context,
    nextSong_Context,
    prevSong_Context,
    volume_Context,
  } = AppContext();

  //   handles
  const handlePlayClick = () => {
    play_Context.setPlay({
      ...play_Context.play,
      state: !play_Context.play.state,
    });
  };

  const handlePrevClick = () => {
    prevSong_Context.setPrevSong(true);
  };

  const handleNextClick = () => {
    nextSong_Context.setNextSong(true);
  };

  const handleVolChange = (e) => {
    volume_Context.setVolume(e.target.value);
  };

  return (
    <div className="playback-bar-container">
      {/* LEFT SIDE */}
      <div className="playback-bar-left">
        {songName_Context.songName ? (
          <img
            src={playlistImg_Context.playlistImg}
            className="playback-bar-left-img"
            alt="playlist cover"
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
          <button
            onClick={handlePrevClick}
            disabled={btnDisable == true || btnDisable == "prev"}
            style={
              btnDisable == true || btnDisable == "prev"
                ? { color: "#c4c4c4" }
                : {}
            }
          >
            {prevIcon}
          </button>
          {/* PLAY\PAUSE */}
          <button onClick={handlePlayClick}>
            {play_Context.play.state ? playIcon : pauseIcon}
          </button>
          {/* NEXT SONG */}
          <button
            onClick={handleNextClick}
            disabled={btnDisable == true || btnDisable == "next"}
            style={
              btnDisable == true || btnDisable == "next"
                ? { color: "#c4c4c4" }
                : {}
            }
          >
            {nextIcon}
          </button>
        </div>
        {/* PROGRESS BAR */}
        <div className="playback-bar-center-progress-bar">
          <p>
            {progressBar_Context.progressBar?.position
              ? sec2min(progressBar_Context.progressBar.position)
              : "--:--"}
          </p>
          <ProgressBar />
          <p>
            {progressBar_Context.progressBar?.duration
              ? sec2min(progressBar_Context.progressBar.duration)
              : "--:--"}
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="playback-bar-right">
        <img src={volumeIcon} alt="volume icon" />
        <input
          type="range"
          className="playback-bar-right-volume"
          onChange={handleVolChange}
          defaultValue={100}
        />
      </div>

      {/* SOUND */}
      {play_Context.play.song_id ? (
        <SoundTrack disableFun={setBtnDisable} />
      ) : (
        ""
      )}
    </div>
  );
}
