import React from "react";

// CSS
import "./playbackBar.css";

// Components
import ProgressBar from "../ProgressBar/ProgressBar";

// Context
import AppContext from "../../contextCustomHooks";

// Assets Functions
import { sec2min } from "../../assetesFunctions";

// liked songs img
import liked_songs from "../../assets/liked_songs.jpg";

// ICONS
import volumeIcon from "../../assets/volume.png";
const prevIcon = <i className="fas fa-step-backward"></i>;
const playIcon = <i className="fas fa-play"></i>;
const pauseIcon = <i className="fas fa-pause"></i>;
const nextIcon = <i className="fas fa-step-forward"></i>;

export default function PlayBackBar() {
  // States
  const [progress, setProgress] = React.useState(0);

  // Context Hooks
  const {
    songName_Context,
    albumName_Context,
    playlistImg_Context,
    play_Context,
    songAudioElement_Context,
    songDuration_Context,
    nextSong_Context,
    prevSong_Context,
    volume_Context,
  } = AppContext();

  // TOTAL
  const total = songDuration_Context.songDuration;

  //   handles
  const handlePlayClick = () => {
    if (songName_Context.songName) {
      // song streaming
      if (play_Context.play.state) {
        if (songAudioElement_Context.songAudioElement)
          songAudioElement_Context.songAudioElement.pause();

        songAudioElement_Context.songAudioElement.play();
      } else {
        songAudioElement_Context.songAudioElement.pause();
      }
      // play-pause btn
      play_Context.setPlay({
        ...play_Context.play,
        state: !play_Context.play.state,
      });
    }
  };

  const handlePrevClick = () => {
    if (prevSong_Context.prevSong?.id) {
      let prevSongBtn = document.getElementById(
        `${prevSong_Context.prevSong.id}`
      );
      prevSongBtn.click();
    }
  };

  const handleNextClick = () => {
    if (nextSong_Context.nextSong?.id) {
      let nextSongBtn = document.getElementById(
        `${nextSong_Context.nextSong.id}`
      );
      nextSongBtn.click();
    }
  };

  const handleVolChange = (e) => {
    if (songAudioElement_Context.songAudioElement) {
      songAudioElement_Context.songAudioElement.volume = e.target.value / 100;
      volume_Context.setVolume(e.target.value);
    }
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
            disabled={!prevSong_Context.prevSong}
            style={prevSong_Context.prevSong?.id ? {} : { color: "#c4c4c4" }}
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
            disabled={!nextSong_Context.nextSong}
            style={nextSong_Context.nextSong?.id ? {} : { color: "#c4c4c4" }}
          >
            {nextIcon}
          </button>
        </div>
        {/* PROGRESS BAR */}
        <div className="playback-bar-center-progress-bar">
          <p>{progress ? sec2min(progress) : "--:--"}</p>
          <ProgressBar
            total={total}
            setProgress={setProgress}
            progress={progress}
          />
          <p>{total ? sec2min(total) : "--:--"}</p>
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
    </div>
  );
}
